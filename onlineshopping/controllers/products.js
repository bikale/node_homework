const Product = require('../models/product');
const path = require('path');

exports.getProduct = (req, res, next) => {
    // res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
    res.render('add-product', {'pageTitle': 'My Add Product Page'});
};

exports.postProduct =  (req, res, next) => {
    console.log(req.body);
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const prod = new Product(title, imageUrl, price);
    prod.save();  
    res.redirect('/');
};

exports.getAllProducts = (req, res, next) => {
    console.log(Product.getAll());
    // res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
    const products = Product.getAll();
    res.render('shop', {'prods': products});
}