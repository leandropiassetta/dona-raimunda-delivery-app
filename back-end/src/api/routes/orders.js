const routes = require('express').Router();
const { validateToken } = require('../../middlewares/auth');
const { registerOrder, getOrderById  } = require('../../controllers/orders');

routes.post('/', validateToken, registerOrder);

routes.get('/:id', validateToken, getOrderById )

module.exports = routes;
