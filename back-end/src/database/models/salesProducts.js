const salesProducts = (sequelize, DataTypes) => sequelize.define('salesProducts',
  {
    productId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    saleId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    quantity: DataTypes.INTEGER,
  },
  {
    timestamps: false,
    underscored: true,
    tableName: 'salesProducts'
  });

  salesProducts.associate = (models) => {
    models.products.belongsToMany(models.sales, {
      through: salesProducts,
      foreignKey: "productId",
      otherKey: "saleId"
    });
    models.sales.belongsToMany(models.products, {
      through: salesProducts,
      foreignKey: "saleId",
      otherKey: "productId"
    });
  };

module.exports = salesProducts;
