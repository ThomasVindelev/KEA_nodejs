const router = require('express').Router();
const mail = require('nodemailer');

router.post('/sendMail', async (req, res) => {
    if (req.session.user) {
        const { subject, message, email } = req.body
        let transporter = mail.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: 'nodemailerthomas@gmail.com',
                pass: 'nodemailing'
            },
        });
        await transporter.sendMail({
            from: 'nodemailerthomas@gmail.com',
            to: email,
            subject: subject,
            text: message,
            html: message
        }, (err) => {
            if (err) {
                return res.send({ response: 'Something went wrong...' });
            } 
            return res.send({ response: 'success' });
        });
    }
    return res.send({ response: 'Log in to use this feature' });
});

module.exports = router;
