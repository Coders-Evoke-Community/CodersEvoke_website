const jwt = require('jsonwebtoken');
const User = require('../models/userModel')

// create jwt token upon user signin
const generateToken = (user) => {
    return jwt.sign({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
    },
        process.env.JWT_SECRET || 'somethingsecret',
        {
            expiresIn: '30d'
        });
};

// Is Auth middleware for protecting routes
const isAuth = (req, res, next) => {
    const authorization = req.headers.authorization;
    if (authorization) {
        const token = authorization.slice(7); //Bearer xxxxxx 

        // use JWT to decode the token n get the user info
        jwt.verify(token, process.env.JWT_SECRET || 'somethingsecret', async (err, decode) => {
            if (err) {
                // if err, send 401 not authorized message
                return res.status(401).send({ message: 'Invalid token' });
            }
            // decode contains the user data defined in jwt token
            req.user = decode;

            const user = await User.findOne({ _id: decode._id });

            // pass req.user data to the next middleware 
            next();
        });
    } else {
        res.status(401).send({ message: 'No Token' });
    }
};

module.exports = { generateToken, isAuth };