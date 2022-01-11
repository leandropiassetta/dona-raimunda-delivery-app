const { sales, salesProducts } = require('../database/models');
const { searchUser } = require('./users');
const { getProductById } = require('./products');

const createOrder = async ({ products, ...order }) => {
  const { dataValues, null: id } = await sales.create(order);
  products.forEach(
    ({ id: productId, quantity }) => salesProducts.create({ quantity, productId, saleId: id }),
  );
  return { ...dataValues, id };
};
const getOrder = async (query) => {
  const { dataValues } = await sales.findOne({ where: query });
  const seller = await searchUser(dataValues.seller_id);
  const productsId = await salesProducts.findAll({ where: { saleId: dataValues.id } });
  // const productOrder = await getProductById(productsId.id);

  return { ...dataValues, seller };
};

const getSaleByUser = async (body) => {
  try {
    const query = await sales.findAll({ where: body });
    return query.map((sale) => sale.dataValues);
  } catch (error) {
    console.log(error);
    return null;
  }
};

module.exports = {
  createOrder,
  getOrder,
  getSaleByUser,
};
