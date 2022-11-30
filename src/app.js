const express = require('express');
const router = require('./routes');

const app = express();

app.use(express.json());

app.use('/login', router.login);

module.exports = app;
