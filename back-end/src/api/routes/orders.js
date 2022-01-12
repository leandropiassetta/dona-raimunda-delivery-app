const routes = require('express').Router();
const { validateToken } = require('../../middlewares/auth');
const { registerOrder, getOrderById, getSaleByUser } = require('../../controllers/orders');

routes.post('/', validateToken, registerOrder);
routes.get('/', validateToken, getSaleByUser);

routes.get('/:id', validateToken, getOrderById);

module.exports = routes;
