'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Orders', [
      {
        orderNfId: '1605181324132',
        orderNumber: '18153',
        emissionDate: '2020-10-30T11:00:00-03:00',
        emitedTo: '22843980000127',
        nNF: '18153',
        value: '198450',
        createdAt: new Date('2020-10-30 17:54:18'),
        updatedAt: new Date('2020-10-30 17:54:18'),
        cnpjId: 1,
        userId: 1,
        buyerId: 1,
        providerId: 1,
        orderStatusBuyer: 0,
        orderStatusProvider: 0,
      },
      {
        orderNfId: '160518132413',
        orderNumber: '18157',
        emissionDate: '2020-11-04T15:32:35-02:00',
        emitedTo: '35705180000272',
        nNF: '18157',
        value: '168850',
        createdAt: new Date('2020-11-10 18:33:46'),
        updatedAt: new Date('2020-11-10 18:33:46'),
        cnpjId: 1,
        userId: 1,
        buyerId: 1,
        providerId: 1,
        orderStatusBuyer: 0,
        orderStatusProvider: 0,
      },
      {
        orderNfId: '1605181324130',
        orderNumber: '18184',
        emissionDate: '2020-11-10',
        emitedTo: '00418477002640',
        nNF: '18184',
        value: '222795',
        createdAt: new Date('2020-11-12 11:42:06'),
        updatedAt: new Date('2020-11-18 12:22:14'),
        cnpjId: 1,
        userId: 1,
        buyerId: 1,
        providerId: 1,
        orderStatusBuyer: 7,
        orderStatusProvider: 3,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Orders', null, {});
  },
};
