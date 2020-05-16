const router = require("express").Router();
const bcrypt = require("bcrypt")
const path = require("path")

const saltrounds = 12

// Auth routes
router.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err == null) {
            console.log("Destroyed session")
        } else {
            console.log(err);
        }
    })
    res.send({ message: "logout" });
});

router.post("/login", async (req, res) => {
    if (req.body.username == "" || req.body.password == "") {
        req.session.message = {
            type: 'danger',
            intro: 'Empty fields!',
            message: 'Please insert the requested fields!'
        }
        console.log(req.session.message)
        return res.redirect("/")
    } else {
        const {username, password} = req.body;

        const user = await User.query().select().where("username", username).limit(1);

        bcrypt.compare(password, user[0].password, (err, same) => {
            if (err) {
                console.log(err)
                return res.send({ error: err })
            } else {
                console.log(user[0].id)
                req.session.user = { id: user[0].id }
                console.log("Welcome", req.session.user)
                return res.sendFile(path.resolve("public/home.html"))
            }
        })
    }
    // sessions
});

const User = require('../models/User');
const Role = require('../models/Role')

router.post('/signup', async (req, res) => {
    // res.send({ message: "signup" });
    const {username, password, passwordRepeat} = req.body;

    const isPasswordTheSame = password === passwordRepeat;

    if (username && password && isPasswordTheSame) {
        if (password.length < 8) {
            return res.status(404).send({ response: "Password not long enough" });
        } else {

            try {

                const userFound = await User.query().select().where("username", username).limit(1);

                if (userFound.length > 0) {

                    return res.status(400).send({ response: "Username already exists"});

                } else {

                    const userRole = await Role.query().select().where('role', 'USER');

                    const hashedPassword = await bcrypt.hash(password, saltrounds)
                    
                    await User.query().insert({
                        username: username,
                        password: hashedPassword,
                        age: 24,
                        role_id: userRole[0].id
                    });

                    return res.send({ response: username });

                }
            } catch (error) {
                console.log(error)
                return res.status(500).send({ response: "Something went wrong with the database" })
            }
        }
    } else if (password && passwordRepeat && !isPasswordTheSame) {
        return res.status(404).send({ response: "Password do not match" });
    } else {
        return res.status(404).send({ response: "Missing fields, either username, password or repeat password" });
    }
});

module.exports = router;