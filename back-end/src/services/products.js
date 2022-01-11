const { products } = require('../database/models');

const getAllProducts = async () => {
  const listProducts = await products.findAll();

  return listProducts;
};

const getProductById = async (id) => {
  const { dataValues: product } = await products.findOne({ where: { id } });

  return product;
};

module.exports = {
  getAllProducts,
  getProductById,
};
