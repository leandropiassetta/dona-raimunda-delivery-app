const { sales, salesProducts } = require('../database/models');
const { searchUser } = require('./users');
const { getProductById } = require('./products');

const createOrder = async ({ products, ...order }) => {
  try {
    const { dataValues, null: id } = await sales.create(order);
    products.forEach(
      async ({ id: productId, quantity }) => {
        await salesProducts.create({ quantity, productId, saleId: id });
      },
    );
    return { ...dataValues, id };
  } catch (error) {
    console.error(error);
  }
};

const getOrder = async (query) => {
  const { dataValues } = await sales.findOne({ where: query });

  const seller = await searchUser(dataValues.seller_id);

  const productsSales = await salesProducts.findAll({ where: { saleId: dataValues.id } });

  const reduceFunc = async (acc, cur) => {
    const { productId, quantity } = cur.dataValues;
    const newAcc = await acc;
    const product = await getProductById(productId);
    return [...newAcc, { ...product, quantity }];
  };

  const products = await productsSales.reduce(reduceFunc, []);

  return { ...dataValues, seller, products };
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
