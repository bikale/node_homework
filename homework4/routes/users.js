const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/users', (req, res) => {
  res.send('u arrived in users');
});
router.post('/users', (req, res) => {
  res.send('u arrived in users in POST');
});
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'users.html'));
});
module.exports = router;
