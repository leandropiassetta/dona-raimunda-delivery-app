const { sales, salesProducts } = require('../database/models');

const createOrder = async ({ products, ...order }) => {
  const { dataValues, null: id } = await sales.create(order);
  products.forEach(
    ({ id: productId, quantity }) => salesProducts.create({ quantity, productId, saleId: id }),
  );
  return { ...dataValues, id };
};

const getSaleByUser = async (body) => {
  try {
    const query = await sales.findAll({ where: body });
    return query.map((sales) => sales.dataValues);
  } catch (error) {
    console.log(error);
    return null;
  }
}

module.exports = {
  createOrder,
  getSaleByUser,
};
