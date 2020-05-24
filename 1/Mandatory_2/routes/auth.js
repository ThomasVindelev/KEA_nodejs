const router = require('express').Router();
const bcrypt = require('bcrypt');

const saltrounds = 12;

// Auth routes
router.post('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err == null) {
            return res.send({ response: 'You have logged out' });
        } else {
            return res.send({ response: 'Something went wrong...'});
        }
    });
});

router.post('/login', async (req, res) => {
    if (req.body.username == '' || req.body.password == '') {
        return res.send({ response: 'Please enter both username and password'});
    } else {
        const { username, password } = req.body;
        const user = await User.query().select().where('username', username).limit(1);
        if (user[0]) {
            bcrypt.compare(password, user[0].password, (err, same) => {
                if (err) {
                    return res.send({ response: 'Something went wrong...' });
                } if (same) {
                    req.session.user = { id: user[0].id, role: user[0].role_id };
                    return res.send({ response: 'success' });
                } else {
                    return res.send({ response: 'Incorrect password' });
                }
            });
        } else {
            return res.send({ response: 'Incorrect username or password' });
        }
    }
});

const User = require('../models/User');
const Role = require('../models/Role');

router.post('/signup', async (req, res) => {
    const {username, password, passwordRepeat} = req.body;
    const isPasswordTheSame = password === passwordRepeat;
    if (username && password && isPasswordTheSame) {
        if (password.length < 4) {
            return res.send({ response: 'Password not long enough' });
        } else {
            try {
                const userFound = await User.query().select().where('username', username).limit(1);
                if (userFound.length > 0) {
                    return res.send({ response: 'Username already exists'});
                } else {
                    const userRole = await Role.query().select().where('role', 'USER');
                    const hashedPassword = await bcrypt.hash(password, saltrounds);
                    await User.query().insert({
                        username: username,
                        password: hashedPassword,
                        age: 24,
                        role_id: userRole[0].id
                    });
                    return res.send({ response: 'success' });
                }
            } catch (error) {
                return res.send({ response: 'Something went wrong with the database' });
            }
        }
    } else if (password && passwordRepeat && !isPasswordTheSame) {
        return res.send({ response: 'Password do not match' });
    } else {
        return res.send({ response: 'Missing fields, either username, password or repeat password' });
    }
});

module.exports = router;