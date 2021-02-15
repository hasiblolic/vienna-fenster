const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const config = require('config');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const route = express.Router();
const port = process.env.PORT || 5000;

const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
        user: config.get('email'),
        pass: config.get('email-password'),
    },
    secure: true,
});

route.post('/contact-email', (req, res) => {
    const { from, subject, text } = req.body;
    const mailData = {
        from: from,
        to: config.get('email'),
        subject: subject,
        text: text,
    };

    transporter.sendMail(mailData, (error, info) => {
        if(error) return console.log(error);
        res.status(200).send({ message: "Mail sent", message_id: info.messageId });
    });
});

app.use('/', route);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
