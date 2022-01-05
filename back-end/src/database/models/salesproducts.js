const salesProducts = (sequelize, DataTypes) => sequelize.define('salesProducts',
  {
    quantity: DataTypes.INTEGER,
  },
  {
    timestamps: false,
  });

  salesProducts.associate = (models) => {
    models.products.belongsToMany(models.sales, {
      through: salesProducts,
      foreignKey: "product_id",
      otherKey: "sale_id"
    });
    models.sales.belongsToMany(models.products, {
      through: salesProducts,
      foreignKey: "sale_id",
      otherKey: "product_id"
    });
  };

module.exports = salesProducts;