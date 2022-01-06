const routes = require('express').Router();
const { getAllProducts } = require('../../controllers/products');

routes.get('/', getAllProducts);

module.exports = routes;
