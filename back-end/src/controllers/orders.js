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

// Só usamos Query pois no AXIOS só retornava dentro da query{}
const getSaleByUser = async (req, res) => {
  const { query, body } = req;
  console.log(req);
  console.log(body);

  const orders = await service.getSaleByUser(query); 
  return res.status(200).json(orders);
};

module.exports = {
  registerOrder,
  getOrderById,
  getSaleByUser,
};
