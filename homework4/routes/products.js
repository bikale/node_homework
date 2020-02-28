const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/products', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'products.html'));
});
router.post('/products', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'products.html'));
});

module.exports = router;
