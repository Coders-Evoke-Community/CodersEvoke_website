const mongoose = require('mongoose')

const submissionSchema = new mongoose.Schema(
    {
        user: {
            type: String,
            required: 'Name is required'
        },
        submission_description: {
            type: String,
            
        },
        email: {
            type: String, 
            require: 'Email is required'
        },
    },
    {
        timestamps: true
    }
)

const Submission = mongoose.model('Submission', submissionSchema)
module.exports = Submission;
