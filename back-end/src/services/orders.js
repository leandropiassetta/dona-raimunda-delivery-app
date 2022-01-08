const { sales, salesProducts } = require('../database/models');

const createOrder = async ({ products, ...order }) => {
  const { dataValues, null: id } = await sales.create(order);
  products.forEach(
    ({ id: productId, quantity }) => salesProducts.create({ quantity, productId, saleId: id }),
  );
  return { ...dataValues, id };
};

module.exports = {
  createOrder,
};
