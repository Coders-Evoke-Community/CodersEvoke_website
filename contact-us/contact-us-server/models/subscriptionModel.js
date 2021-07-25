const mongoose = require('mongoose')

const subscriptionSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: 'Email is required'
        }
    },
    {
        timestamps: true
    }
)

const Subscription = mongoose.model('Subscription', subscriptionSchema)
module.exports = Subscription