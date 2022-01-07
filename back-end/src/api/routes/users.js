const routes = require('express').Router();
const { loginUser, registerUser, getAllSellers } = require('../../controllers/users');
const { verifyUser } = require('../../middlewares/users');
const { validateToken } = require('../../middlewares/auth');

routes.post('/login', loginUser);
routes.post('/register', verifyUser, registerUser);
routes.get('/sellers', validateToken, getAllSellers);

module.exports = routes;
