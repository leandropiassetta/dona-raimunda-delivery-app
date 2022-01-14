const routes = require('express').Router();
const { validateToken } = require('../../middlewares/auth');
const {
  registerOrder,
  getOrderById,
  getSaleByUser,
  // updateOrder,
} = require('../../controllers/orders');

routes.post('/', validateToken, registerOrder);
routes.get('/search', validateToken, getSaleByUser);

// routes.put('/:id', validateToken, updateOrder);
routes.get('/:id', validateToken, getOrderById);

module.exports = routes;
