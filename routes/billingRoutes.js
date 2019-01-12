const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin').default;

module.exports = app => {
    app.post('/api/stripe',requireLogin, async (req, res) => {
        if (!req.user) {
            return res.status(401).send({ error: 'You must log in! ' });
        }
        const charge = await stripe.charges.create({
            amount: 500,
            currency: 'usd',
            description: '$5 for 5 credits',
            source: req.body.id
        })

        //add the credits to the user
        req.user.credits += 5;
        const user = await req.user.save();
        res.send(user);
    });
};