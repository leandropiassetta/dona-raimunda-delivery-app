const { sales, salesProducts } = require('../database/models');
const { serchUser, searchUser } = require('./users');
const { products } = require('./products');


const createOrder = async ({ products, ...order }) => {
  const { dataValues, null: id } = await sales.create(order);
  products.forEach(
    ({ id: productId, quantity }) => salesProducts.create({ quantity, productId, saleId: id }),
  );
  return { ...dataValues, id };
};

const getOrder = async (query) => {
  const { dataValues } = await sales.findOne(query);
  const seller = await searchUser(dataValues.sellerId);
  return {...dataValues, seller }
}

module.exports = {
  createOrder,
  getOrder,
};
