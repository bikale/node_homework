const express = require('express');
const path = require('path');

const {
  userShopping,
  userCheckOut,
  deleteCartItem,
  getAllUserProducts
} = require('../controller/users');

const router = express.Router();

router.get(['/','/user'], getAllUserProducts);
router.get('/user/usershopping', userShopping);
router.get('/user/checkout', userCheckOut);
router.get('/user/deleteCartItem', deleteCartItem);
module.exports = router;
