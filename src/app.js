const express = require('express');
const router = require('./routes');

const app = express();

app.use(express.json());

app.use('/login', router.login);
app.use('/user', router.user);
app.use('/categories', router.category);
app.use('/post', router.post);

module.exports = app;
