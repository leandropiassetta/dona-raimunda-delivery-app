const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/users');
// const loginRoutes = require('./routes/loginRoutes');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// app.use('/login', loginRoutes);

app.use('/users', userRoutes);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
