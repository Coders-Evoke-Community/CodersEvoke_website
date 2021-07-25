const express = require('express')
const bcrypt = require('bcryptjs')
const User = require('../models/userModel')
const { generateToken, isAuth } = require('../utils/util')
const userRouter = express.Router();

userRouter.post('/register', async (req, res, next) => {
    console.log('register hit')
    const { name, email, password } = req.body

    //create a new user 
    const user = new User({
        name,
        email,
        password: bcrypt.hashSync(password, 8),
    });
    // save new user in db
    const createdUser = await user.save();

    // send user obj back
    res.json({
        success: true,
        message: 'Register user successfully.',
        name: createdUser.name,
        email: createdUser.email,
        token: generateToken(createdUser)
    });
})

userRouter.post('/verifyOtp', async (req, res, next) => {
    const { otp, phone } = req.body;

    // Checking if a user exists with given phone number
    const user = await User.findOne({ phone });
    let updatedUser;

    if (user && user.otp == otp) {
        user.isVerified = true;
        updatedUser = await user.save();

        return (
            res.send({
                message: "User successfully verified. You can now access protected resources using the provided jwt token",
                data: {
                    _id: updatedUser._id,
                    name: updatedUser.name,
                    email: updatedUser.email,
                    isVerified: updatedUser.isVerified,
                    token: generateToken(updatedUser)
                }
            }));
    }
    res.status(400).send({ message: 'No user found with the provided phone number or the provided OTP is invalid' });
})

userRouter.get('/protected', isAuth, (req, res, next) => {
    res.send({
        message: "You have succesfully received the protected resource!",
        data: {
            protectedResource: "Sample protected resource"
        }
    });
})

userRouter.post('/signin', async (req, res, next) => {
    const user = await User.findOne({email: req.body.email});

     //check if there is user with given email
     if(user) {
        // use bcrypt to validate password
        if(bcrypt.compareSync(req.body.password, user.password)) {
            return res.json({
                success: true,
                token: 'JWT '+generateToken(user),
                userDetails: {
                    name: user.name,
                    email: user.email
                }
            });
        }
    }
    // 401 unauthorized 
    res.status(401).send({ message: 'Invalid email or password'});
})

module.exports = userRouter;
