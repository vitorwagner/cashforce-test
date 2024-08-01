const express = require('express');
const router = require('./routers');

const app = express();

app.use('/orders', router.orders);

module.exports = app;
