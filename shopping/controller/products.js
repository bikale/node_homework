const express = require('express');
const path = require('path');
const products = require('../model/products');
const UserCart = require('../model/user');
// @desc      Get All products
// @route     GET /products
// @access    Public
exports.getAllProducts = (req, res) => {
  const productList = products.getAll();
  res.render('products', { products: productList, cart: 0 });
};

// @desc      Create Cart for users
// @route     Post /usershopping
// @access    Public
exports.userShopping = (req, res) => {
  const productList = products.getAll();

  const title = req.query.title;
  const imageUrl = req.query.imageUrl;
  const price = req.query.price;
  const usercart = new UserCart(title, imageUrl, price);
  usercart.save();
  const cartcount = UserCart.getCartCount();

  res.render('products', { products: productList, cart: cartcount });
};

// @desc      Get All User cart list
// @route     GET /checkout
// @access    Public
exports.userCheckOut = (req, res) => {
  const userCartList = UserCart.getAll();
  const cartcount = UserCart.getCartCount();
 
  res.render('checkout', { userCartList:userCartList, cart: cartcount });
};

// @desc      Delete Item from cart list
// @route     Delete /deleteCartItem
// @access    Public
exports.deleteCartItem = (req, res) => {
  UserCart.deleteCartItem(req.query.id)
  const userCartList = UserCart.getAll();
  const cartcount = UserCart.getCartCount();

  res.render('checkout', { userCartList:userCartList, cart: cartcount });
};