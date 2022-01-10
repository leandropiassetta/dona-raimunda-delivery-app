const service = require('../services/orders');

const registerOrder = async (req, res) => {
  const { body } = req;
  const order = await service.createOrder(body);
  return res.status(201).json(order);
};

module.exports = {
  registerOrder,
};
