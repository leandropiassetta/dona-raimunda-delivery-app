const service = require('../services/users');

const verifyUser = async (req, res, next) => {
  const { email, name } = req.body;

  const queryUserByEmail = await service.searchUser({ email });
  const queryUserByName = await service.searchUser({ name });

  const verifiedUser = queryUserByEmail.message && queryUserByName.message;

  if (!verifiedUser) return res.status(409).json({ message: 'Email ou nome inválido' });
  next();
};

module.exports = {
  verifyUser,
};
