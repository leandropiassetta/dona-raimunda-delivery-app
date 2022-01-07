const jwt = require('jsonwebtoken');

const secretKey = 'secret_key';

const createToken = ({ name, email, role }) => {
  const payload = { name, email, role };

  const jwtConfig = {
    expiresIn: '14d',
    algorithm: 'HS256',
  };

  const token = jwt.sign(payload, secretKey, jwtConfig);

  return token;
};

const verifyToken = (token) => {
  try {
    const payload = jwt.verify(token, secretKey);
    return payload;
  } catch (error) {
    console.error(error);
    return null;
  }
};

module.exports = {
  createToken,
  verifyToken,
};
