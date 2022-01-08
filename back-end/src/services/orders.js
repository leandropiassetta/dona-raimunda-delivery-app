const { sales } = require('../database/models');

const createOrder = async ({ products, ...order }) => {
  const { dataValues, null: id } = await sales.create(order);

  return { ...dataValues, id };
};

module.exports = {
  createOrder,
};
