const md5 = require('md5');
const { users } = require('../database/models');

const verifyUser = async (email, password) => {
  const user = await users.findOne({ where: { email, password: md5(password) } });
  if (!user) {
    return { message: 'Email ou senha inválida' };
  }
  return user;
};

module.exports = {
   verifyUser,
};
