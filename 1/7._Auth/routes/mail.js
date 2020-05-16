const router = require('express').Router();
const mail = require("nodemailer");
const path = require("path")

router.post("/sendMail", async (req, res) => {
    let transporter = mail.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: "nodemailerthomas@gmail.com",
            pass: "nodemailing"
        },
    });
    await transporter.sendMail({
        from: "nodemailerthomas@gmail.com",
        to: req.body.email,
        subject: req.body.subject,
        text: req.body.message,
        html: req.body.message
    }, (err, i) => {
        if (err) {
            console.log("Fail", err)
        } else {
            console.log("Success: ", i)
        }
    });

    return res.sendFile(path.resolve("public/home.html"))


    
})

module.exports = router
