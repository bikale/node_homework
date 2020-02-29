const express = require('express');
const path = require('path');

const { getAllProducts ,userShopping,userCheckOut,deleteCartItem} = require('../controller/products');

const router = express.Router();

router.get('/', getAllProducts);
router.get('/usershopping', userShopping);
router.get('/checkout', userCheckOut);
router.get('/deleteCartItem', deleteCartItem);
module.exports = router;
