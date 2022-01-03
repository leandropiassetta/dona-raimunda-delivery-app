const salesProducts = (sequelize, DataTypes) => sequelize.define('salesProducts',
  {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    url_image: DataTypes.STRING,
  },
  {
    timestamps: false,
  });

module.exports = salesProducts;