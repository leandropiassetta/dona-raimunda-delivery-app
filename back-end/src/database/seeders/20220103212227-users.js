module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('users',
    [
      {
        email: "adm@deliveryapp.com",
        id: 1,
        name: "Delivery App Admin",
        password: "a4c86edecc5aee06eff8fdeda69e0d04",
        role: "administrator",
      },
      {
        email: "fulana@deliveryapp.com",
        id: 2,
        name: "Fulana Pereira",
        password: "3c28d2b0881bf46457a853e0b07531c6",
        role: "seller",
      },
      {
        email: "fulana2@deliveryapp.com",
        id: 3,
        name: "Fulana Pereira2",
        password: "3c28d2b0881bf46457a853e0b07531c6rsdacfv23134",
        role: "seller",
      },
      {
        email: "zebirita@email.com",
        id: 4,
        name: "Cliente Zé Birita",
        password: "1c37466c159755ce1fa181bd247cb925",
        role: "customer",
      },
    ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
