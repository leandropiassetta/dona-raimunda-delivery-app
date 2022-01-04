const products = (sequelize, DataTypes) => sequelize.define('products',
  {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL(65, 2),
    url_image: DataTypes.STRING,
  },
  {
    timestamps: false,
  });

module.exports = products;
