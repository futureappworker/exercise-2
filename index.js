const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

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
  res.json({
    message: '成功'
  });
})

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
