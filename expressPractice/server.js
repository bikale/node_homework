const express = require('express');
const dotenv = require('dotenv');
const bodyparser = require('body-parser');
const routes = require('./routes/admin');
const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.use(routes);
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}/`);
});
