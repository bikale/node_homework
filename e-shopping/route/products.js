const express = require('express');
const path = require('path');

const {
  userShopping,
  userCheckOut,
  deleteCartItem,
  getAllUserProducts,
  paymentForm
} = require('../controller/users');

const router = express.Router();

router.get(['/', '/user'], getAllUserProducts);
router.get('/user/usershopping/:id', userShopping);
router.get('/user/checkout', userCheckOut);
router.get('/user/deleteCartItem/:id', deleteCartItem);
router.get('/user/payment/:id', paymentForm);
module.exports = router;
