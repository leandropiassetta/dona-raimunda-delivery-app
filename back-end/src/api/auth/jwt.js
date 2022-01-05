const jwt = require('jsonwebtoken');
const secretKey = 'secret_key';

const createToken = ({ name, email, role }) => {
  const payload = { name, email, role };

  const jwtConfig = {
    expiresIn: '14d',
    algorithm: 'HS256'
  };

  const token = jwt.sign(payload, secretKey, jwtConfig);

  return token;
}

const verifyToken = (token) => {
  const payload = jwt.verify(token, secretKey);

  return payload;
};

module.exports = {
  createToken,
  verifyToken
};
