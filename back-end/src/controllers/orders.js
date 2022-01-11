const service = require('../services/orders');

const registerOrder = async (req, res) => {
  const { body } = req;
  const order = await service.createOrder(body);
  return res.status(201).json(order);
};

const getOrderById = async (req, res) => {
  const { id } = req.params;
  console.log('teste', id);
  const orderById = await service.getOrder({ id });
  return res.status(200).json(orderById);
};

module.exports = {
  registerOrder,
  getOrderById,
};
