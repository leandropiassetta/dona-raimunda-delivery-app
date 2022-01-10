const { verifyToken } = require('../api/auth/jwt');

const validateToken = async (req, res, next) => {
  const { authorization } = req.headers;
  const user = await verifyToken(authorization);
  if (user) return next();
  return res.status(401).json({ message: 'Token inválido' });
};

module.exports = {
  validateToken,
};
