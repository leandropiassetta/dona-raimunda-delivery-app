const routes = require('express').Router();
const controllerProducts = require('../../controllers/products');

routes.get('/', controllerProducts);

module.exports = routes;
