const OrderModel = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    orderNfId: DataTypes.STRING,
    orderNumber: DataTypes.STRING,
    orderPath: DataTypes.STRING,
    orderFileName: DataTypes.STRING,
    orderOriginalName: DataTypes.STRING,
    emissionDate: DataTypes.STRING,
    pdfFile: DataTypes.STRING,
    emitedTo: DataTypes.STRING,
    nNf: DataTypes.STRING,
    CTE: DataTypes.STRING,
    value: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    cnpjId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    buyerId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    providerId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    orderStatusBuyer: { type: DataTypes.STRING, defaultValue: '0' },
    orderStatusProvider: { type: DataTypes.STRING, defaultValue: '0' },
    deliveryReceipt: DataTypes.STRING,
    cargoPackingList: DataTypes.STRING,
    deliveryCtrc: DataTypes.STRING,
  });

  Order.associate = (models) => {
    Order.belongsTo(models.Buyer, {
      foreignKey: 'buyerId',
      as: 'buyer',
    });
    Order.belongsTo(models.Provider, {
      foreignKey: 'providerId',
      as: 'provider',
    });
  };

  return Order;
};

module.exports = OrderModel;
