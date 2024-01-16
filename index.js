const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  }
});

app.post('/emails', (req, res) => {
  const {
    to,
    subject,
    body,
  } = req.body;
  if (!to || !subject || !body) {
    return res.status(400).json({
      message: '缺少參數'
    });
  }
  const data = {
    from: 'exercise-2 <exercise-2@example.com>',
    to,
    subject,
    text: body,
  };
  transporter.sendMail(data, (err) => {
    if (err) {
      return res.status(500).json({
        message: '伺服器錯誤'
      });
    }
    return res.json({
      message: '成功'
    });
  });
})

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
