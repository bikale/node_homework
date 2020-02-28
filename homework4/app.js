const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const rootDir = require('./util/path');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use('/mycss', express.static(path.join(__dirname, 'public', 'css')));

const users = require('./routes/users');
const products = require('./routes/products');

app.use(users);
app.use(products);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}/`);
});
