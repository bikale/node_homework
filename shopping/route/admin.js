const express = require('express');
const path = require('path');

const {
  addProductForm,
  createProducts,
  getAllProducts
} = require('../controller/admin');

const router = express.Router();

router.get('/admin', getAllProducts);
router.get('/admin/add-products', addProductForm);
router.post('/admin/add-products', createProducts);

module.exports = router;
