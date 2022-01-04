const routes = require('express').Router();
const { verifyUser } = require('../../controllers/login');

routes.post('/', verifyUser);

module.exports = routes;
