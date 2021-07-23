const express = require('express')
const Submission = require('../models/submissionModel')
const { isAuth } = require('../utils/util')
const submissionRouter = express.Router();
const nodemailer = require('nodemailer')
const { mailTemplate } = require('../utils/mail/mail-template')

// Create a new submission
submissionRouter.post('/create', isAuth, async(req, res, next) => {
    const { user, submission_description, email } = req.body;

    const submission = new Submission({
        user, 
        submission_description,
        email
    })

    const createdSubmission = await submission.save()
    const transporter = nodemailer.createTransport({
        // name: 'https://coders-evoke-community.github.io/CodersEvoke_website/#',
        service: 'gmail',
        auth: {
            user: process.env.SMTP_EMAIL,
            pass: process.env.SMTP_EMAIL_PASSWORD
        }
    })

    const updatedTemplate = mailTemplate.replace("{{username}}", user).replace("{{email}}", email).replace("{{description}}", submission_description)
        .replace("{{date}}", new Date().toISOString())

    // Todo specify the email addresses to send the email
    const mailOptions = {
        from: 'codersevokesmtp@gmail.com', // sender address
        to: ['bodey.jovian@zoobug.org', 'peirisasel373@gmail.com', 'auraofdivinity@gmail.com', 'priyanthiss30@gmail.com'],  // list of receivers
        subject: 'New Contact Us Submission.', // Subject line
        html: updatedTemplate
    };
    
    transporter.sendMail(mailOptions, function (err, info) {
        if(err)
            console.log(err)
    })

    res.send({ createdSubmission })
})

// Get all submissions
submissionRouter.get('/getall', isAuth, async(req, res, next) => {
    const allSubmissions = await Submission.find({})

    res.send({
        data: allSubmissions
    })
})

module.exports = submissionRouter