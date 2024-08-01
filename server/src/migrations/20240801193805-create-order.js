'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      buyerId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Buyers',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      providerId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Providers',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      orderNfId: Sequelize.STRING,
      orderNumber: Sequelize.STRING,
      orderPath: Sequelize.STRING,
      orderFileName: Sequelize.STRING,
      orderOriginalName: Sequelize.STRING,
      emissionDate: Sequelize.STRING,
      pdfFile: Sequelize.STRING,
      emitedTo: Sequelize.STRING,
      nNf: Sequelize.STRING,
      CTE: Sequelize.STRING,
      value: Sequelize.STRING,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
      cnpjId: Sequelize.INTEGER,
      userId: Sequelize.INTEGER,
      orderStatusBuyer: Sequelize.STRING,
      orderStatusProvider: Sequelize.STRING,
      deliveryReceipt: Sequelize.STRING,
      cargoPackingList: Sequelize.STRING,
      deliveryCtrc: Sequelize.STRING
    });      
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Orders');
  }
};
