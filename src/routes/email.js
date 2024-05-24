const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post('/send', async (req, res) => {
  const { email, subject, text } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: subject,
    text: text,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.send('Email sent: ' + info.response);
  });
});

module.exports = router;
