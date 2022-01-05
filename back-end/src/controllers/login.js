const serviceLogin = require('../services/login');

const verifyUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await serviceLogin.verifyUser(email, password);
  if (user.message) {
    return res.status(404).json(user);
  }
  return res.status(200).json(user);
};

module.exports = {
  verifyUser,
};
