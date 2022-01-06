const express = require('express');
const path = require('path').resolve('./');
const cors = require('cors');
const userRoutes = require('./routes/users');
const productsRoutes = require('./routes/products');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use('/images', express.static(`${path}/images`)); 

app.use('/users', userRoutes);
app.use('/products', productsRoutes);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
