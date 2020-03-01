const express = require('express');
const path = require('path');

const products = require('../model/products');
const Products = require('../model/products');

// @desc      Get All products
// @route     GET /admin
// @access    Public
exports.getAllProducts = (req, res) => {
  const productList = products.getAll();
  console.log(productList);
  
  res.render('products', { products: productList, cart: 0 });
};

// @desc      Get Form fo adding products
// @route     GET admin/add-products
// @access    Public
exports.addProductForm = (req, res) => {
  res.render('add-products');
};

// @desc      Add prodcts to the database
// @route     POST admin/add-products
// @access    Public
exports.createProducts = (req, res) => {
  // insertion miracle goes here

  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const prod = new Products(title, imageUrl, price);
  prod.save();
  res.redirect('/admin');
};
