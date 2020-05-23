const router = require('express').Router();

const User = require('../models/User.js');

router.get("/users/roles", async (req, res) => {
    const users = await User.query().select('username').withGraphFetched('role');
    return res.send({response: users});
});

router.get("/setsessionvalue", (req, res) => {
    req.session.myValue = req.sessionID
    return res.send({ })
})

router.get("/getsessionvalue", (req, res) => {
    return res.send({ response: req.session.myValue })
})

router.post('/newUsername', async (req, res) => {
    if (req.session.user) {
        const hasName = await User.query().select().where('username', req.body.username).limit(1);
        console.log(hasName[0])
        if (hasName[0]) {
            return res.send({ response: 'Username already taken' });
        } else {
            await User.query().update({username: req.body.username}).where('id', req.session.user.id);
            return res.send({ response: 'success' });
        }
    } else {
        return res.send({ response: 'Log in to use this feature' })
    }
})

router.post('/newPassword', async (req, res) => {
    if (req.session.user) {
        
    }
})

module.exports = router;