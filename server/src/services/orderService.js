const { Order } = require('../models');
const { Buyer, Provider } = require('../models');

const findAll = async () => {
  const orders = await Order.findAll({
    include: [
      { model: Buyer, as: 'buyer' },
      { model: Provider, as: 'provider' },
    ],
  });

  return orders;
};

module.exports = {
  findAll,
};
