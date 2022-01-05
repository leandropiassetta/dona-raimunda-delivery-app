const routes = require('express').Router();
const { loginUser, registerUser } = require('../../controllers/users');
const { verifyUser } = require('../../middlewares/users');

routes.post('/login', loginUser);
routes.post('/register', verifyUser, registerUser);

module.exports = routes;
