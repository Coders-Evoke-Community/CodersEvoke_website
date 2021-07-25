const express = require('express')
const Subscription = require('../models/subscriptionModel')
const subscriptionRouter = express.Router();
const { isAuth } = require('../utils/util')

subscriptionRouter.post('/create', isAuth, async (req, res, next) => {
    const { email } = req.body

    const subscription = new Subscription({
        email
    })

    const createdSubscription = await subscription.save()
    const allSubscriptions = await Subscription.find({})


    res.json({
        success: true,
        message: 'Subscription created successfully.',
        createdSubscription,
        data: allSubscriptions
    })
})

subscriptionRouter.get('/getall', isAuth, async (req, res, next) => {
    const allSubscriptions = await Subscription.find({})

    return res.json({
        success: true,
        data: allSubscriptions
    })
})

subscriptionRouter.post('/remove', isAuth, async (req, res, next) => {
    const { email } = req.body
    if (!email) {
        res.status(400).send({ message: 'Email is required.' });
    }
    try {
        const deleted = await Subscription.findOneAndDelete({ email })
        const allSubscriptions = await Subscription.find({})
        return res.json({
            success: true,
            deleted,
            data: allSubscriptions,
        })
    }
    catch (e) {
        res.status(422).send({ message: 'Error removing the subscription.' })
    }

})

module.exports = subscriptionRouter