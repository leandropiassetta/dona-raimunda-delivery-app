const service = require('../services/orders');

const registerOrder = async (req, res) => {
  const { body } = req;
  const order = await service.createOrder(body);
  return res.status(201).json(order);
};

const getOrderById = async (req, res) => {
  const { id } = req.params;
  const orderById = await service.getOrder({ id });
  return res.status(200).json(orderById);
};

const getSaleByUser = async (req, res) => {
  const { query } = req;
  const orders = await service.getSaleByUser(query); 
  return res.status(200).json(orders);
};

const updateOrder = async (req, res) => {
  const { body, params } = req;
  const update = await service.updateOrder(body, params);
  return res.status(200).json(update);
};

module.exports = {
  registerOrder,
  getOrderById,
  getSaleByUser,
  updateOrder,
};
