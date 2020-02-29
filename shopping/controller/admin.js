const express = require('express');
const path = require('path');

const Products = require('../model/products');
// @desc      Get Form fo adding products
// @route     GET /add-products
// @access    Public
exports.addProductForm = (req, res) => {
  res.render('add-products');
};

// @desc      Add prodcts to the database
// @route     POST /add-products
// @access    Public
exports.createProducts = (req, res) => {
  // insertion miracle goes here

  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const prod = new Products(title, imageUrl, price);
  prod.save();
  res.redirect('/');
};
