const md5 = require('md5');
const { users } = require('../database/models');
const { createToken } = require('../api/auth/jwt');

const searchUser = async (search) => {
  try {
    const query = (search.password) ? { ...search, password: md5(search.password) } : search;
    let user = await users.findOne({ where: query, attributes: { exclude: ['password'] } });
    if (!user) return { message: 'Email ou senha inválida' };
    user = user.dataValues;
    const token = await createToken(user);
    return { ...user, token };
  } catch (error) {
    console.error(error);
    return null;
  }
};

const searchUsers = async (search) => {
  try {
    const query = (search.password) ? { ...search, password: md5(search.password) } : search;
    const queryUsers = await users.findAll({ where: query, attributes: ['name', 'id'] });
    return queryUsers.map((user) => user.dataValues);
  } catch (error) {
    console.error(error);
    return null;
  }
};

const registerUser = async ({ email, name, password, role }) => {
  try {
    const {
      dataValues: newUser,
      null: id,
    } = await users.create({ name, email, password: md5(password), role });
    const { password: removedPassword, ...copyUser } = newUser;
    const token = await createToken(newUser);
    return { ...copyUser, token, id };
  } catch (error) {
    console.error(error);
    return null;
  }
};

module.exports = {
  searchUser,
  registerUser,
  searchUsers,
};
