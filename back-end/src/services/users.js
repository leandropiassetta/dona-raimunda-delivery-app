const md5 = require('md5');
const { users } = require('../database/models');

const searchUser = async (search) => {
  try {
    const query = (search.password) ? { ...search, password: md5(search.password) } : search;
    const user = await users.findOne({ where: query });
    if (!user) {
      return { message: 'Email ou senha inválida' };
    }
    return user;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const registerUser = async ({ email, name, password, role }) => {
  try {
    const {
      dataValues: newUser,
    } = await users.create({ name, email, password: md5(password), role });
    return newUser;
  } catch (error) {
    console.error(error);
    return null;
  }
};

module.exports = {
  searchUser,
  registerUser,
};
