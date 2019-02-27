const keys = require('../../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const express = require('express');
const requireLogin = require('../../middlewares/requireLogin');


module.exports = (model) => {
    const app = express.Router();

    app.post('/api/stripe', requireLogin, async (req, res) => {
        console.log("req.body", req.body);
        const charge = await stripe.charges.create({
            amount:500,
            currency: 'usd',
            description:'$5 for 5 credits',
            source: req.body.id
        });
        console.log("Charge ",charge);
        res.send(charge);
    });

    return app;
};