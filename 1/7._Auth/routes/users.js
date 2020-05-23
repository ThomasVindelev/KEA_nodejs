const router = require('express').Router();
const bcrypt = require('bcrypt')
const User = require('../models/User.js');

const saltrounds = 12

router.get("/users/roles", async (req, res) => {
    const users = await User.query().select('username').withGraphFetched('role');
    return res.send({response: users});
});

router.get("/setsessionvalue", (req, res) => {
    req.session.myValue = req.sessionID
    return res.send({ response: 'success' })
});

router.get("/getsessionvalue", (req, res) => {
    return res.send({ response: req.session.myValue })
});

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
});

router.post('/newPassword', async (req, res) => {
    if (req.session.user) {
        const { oldPassword, newPassword } = req.body;
        if (newPassword.length < 4) {
            return res.send({ response: 'Password to short. At least 4 characters is required!' })
        }
        const user = await User.query().select().where('id', req.session.user.id).limit(1);
        if (user[0]) {
            bcrypt.compare(oldPassword, user[0].password, async (err, same) => {
                if (err) {
                    return res.send({ response: 'Something went wrong...'})
                } 
                if (same) {
                    const newHashedPassword = await bcrypt.hash(newPassword, saltrounds);
                    await User.query().update({password: newHashedPassword}).where('id', req.session.user.id);
                    return res.send({ response: 'success' });
                }
                return res.send({ response: "Passwords doesn't match" })
            });
        } else {
            return res.send({ response: "Can't find password" });
        }
    } else {
        return res.send({ response: 'Log in to use this feature' })
    }
});

module.exports = router;