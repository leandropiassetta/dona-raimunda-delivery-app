const routes = require('express').Router();
const { validateToken } = require('../../middlewares/auth');
const { registerOrder } = require('../../controllers/orders');

routes.post('/', validateToken, registerOrder);

module.exports = routes;
