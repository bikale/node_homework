const express = require('express');
const path = require('path');

const products = require('../model/products');
const Products = require('../model/products');

// @desc      Get All products
// @route     GET /admin
// @access    Public
exports.getAllProducts = (req, res) => {
  const productList = products.getAll();

  res.render('products', { products: productList, cart: 0 });
};

// @desc      Get Form fo adding products
// @route     GET admin/add-products
// @access    Public
exports.addProductForm = (req, res) => {
  res.render('add-products');
};

// @desc      Add products to the database
// @route     POST admin/add-products
// @access    Private
exports.createProducts = (req, res) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;

  const prod = new Products(null, title, imageUrl, price, description);
  prod.save();
  res.redirect('/admin');
};

// @desc      Edit products item detail
// @route     POST admin/edit-products
// @access    Private
exports.editProducts = (req, res) => {
  const id = req.body.id;
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;

  const prod = new Products(id, title, imageUrl, price, description);
  Products.editItem(prod);
  res.redirect('/admin');
};

// @desc      delete products item
// @route     POST admin/delete
// @access    Private
exports.deleteItems = (req, res) => {
  Products.deleteItem(req.body.id);
  res.redirect('/admin');
};
