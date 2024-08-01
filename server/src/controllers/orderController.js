const services = require('../services');

const findAll = async (_req, res) => {
  const orders = await services.orderService.findAll();

  return res.status(200).json(orders);
};

module.exports = {
  findAll,
};
