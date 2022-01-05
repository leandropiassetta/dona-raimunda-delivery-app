const service = require('../services/users');

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await service.searchUser({ email, password });

  if (user.message) {
    return res.status(404).json(user);
  }

  return res.status(200).json(user);
};

const registerUser = async (req, res) => {
  const { email, password, role, name } = req.body;
  
  const user = await service.registerUser({ email, password, role, name });

  if (user) return res.status(201).json({ message: 'Usuário registrado com sucesso', user });
};

module.exports = {
  loginUser,
  registerUser,
};
