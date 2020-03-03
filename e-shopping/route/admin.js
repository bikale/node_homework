const express = require('express');
const path = require('path');

const {
  addProductForm,
  createProducts,
  getAllProducts,
  editProducts,
  deleteItems
} = require('../controller/admin');

const router = express.Router();

router.get('/admin', getAllProducts);
router.get('/admin/add-products', addProductForm);
router.post('/admin/add-products', createProducts);
router.post('/admin/edit-products', editProducts);
router.post('/admin/delete',deleteItems)

module.exports = router;
