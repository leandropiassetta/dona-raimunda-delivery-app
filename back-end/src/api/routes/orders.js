const routes = require('express').Router();
const { validateToken } = require('../../middlewares/auth');
const { registerOrder, getSaleByUser } = require('../../controllers/orders');

routes.post('/', validateToken, registerOrder);
routes.get('/', validateToken, getSaleByUser);

module.exports = routes;
