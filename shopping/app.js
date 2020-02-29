const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const productRoute = require('./route/products');
const adminRoute = require('./route/admin');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/images', express.static(path.join(__dirname, 'public', 'images')));
app.use('/css', express.static(path.join(__dirname, 'public', 'css')));
app.use('/js', express.static(path.join(__dirname, 'public', 'javaScript')));

app.use(productRoute);
app.use(adminRoute);

app.listen(5000, () => {
  console.log('Server listening on http://localhost:5000');
});
