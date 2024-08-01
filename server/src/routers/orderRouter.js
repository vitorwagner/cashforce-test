const express = require('express');
const controllers = require('../controllers');

const orderRouter = express.Router();

orderRouter.get('/', controllers.orderController.findAll);

module.exports = orderRouter;
