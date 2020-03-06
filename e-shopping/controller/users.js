const express = require('express');
const path = require('path');

const products = require('../model/products');
const UserCart = require('../model/user');

// @desc      Create Cart for users
// @route     Post users/usershopping
// @access    Public
exports.userShopping = (req, res) => {
  // const id = req.params.id;
  // const productChoosen = products.findItemById(id);

  UserCart.save(req.params.id);

  res.redirect('/user');
};
// @desc      Get All products for users
// @route     GET users/productss
// @access    Public
exports.getAllUserProducts = (req, res) => {
  const cartcount = UserCart.getCartCount();
  products
    .getAll()
    .then(product => {
      res.render('shop', { products: product, cart: cartcount });
    })
    .catch(console.log);
};
// @desc      Get All User cart list
// @route     GET users/checkout
// @access    Public
exports.userCheckOut = (req, res) => {
  const cartcount = UserCart.getCartCount();
  UserCart.getAll().then(result => {
   
    res.render('checkout', { userCartList: result, cart: cartcount });
  });
};

// @desc      Delete Item from cart list
// @route     Delete /deleteCartItem
// @access    Public
exports.deleteCartItem = (req, res) => {
  UserCart.deleteCartItem(req.params.id);
  const cartcount = UserCart.getCartCount();
  UserCart.getAll().then(result => {
    res.render('checkout', { userCartList: result, cart: cartcount });
  });

  // const userCartList = UserCart.getAll();
  // const cartcount = UserCart.getCartCount();
  // res.render('checkout', { userCartList: userCartList, cart: cartcount });
};

// @desc      Get payment form
// @route     GET /user/payment/:id
// @access    private
exports.paymentForm = (req, res) => {
  res.render('payment');
};
