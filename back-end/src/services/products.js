const { products } = require('../database/models');

const getAllProducts = async () => {
  const listProducts = await products.findAll();

  return listProducts;
}

module.exports = {
  getAllProducts,
}