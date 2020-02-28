const express = require('express');
const router = express.Router();
router.get('/admin', (req, res, next) => {
  res.send(` <form action="/m" method="post">
              <input type="text" name="input" />
              <button type="submit">Submit</button>
              </form>`);
});
router.post('/m', (req, res, next) => {
  console.log(req.body);
  res.send(`welcome again `);
});
module.exports = router;
