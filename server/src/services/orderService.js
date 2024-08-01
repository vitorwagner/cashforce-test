const { order, buyer, provider } = require('../models');

const findAll = async () => {
  const orders = await order.findAll({
    include: [
      { model: buyer, as: 'buyer' },
      { model: provider, as: 'provider' },
    ],
  });

  return orders;
};

module.exports = {
  findAll,
};
