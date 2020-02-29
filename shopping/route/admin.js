const express = require('express');
const path = require('path');

const { addProductForm, createProducts } = require('../controller/admin');

const router = express.Router();

router.get('/add-products', addProductForm);
router.post('/add-products', createProducts);

module.exports = router;
