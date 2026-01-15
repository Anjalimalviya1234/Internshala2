const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');
const Product = require('./Product');

const Order = sequelize.define('Order', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  productId: {
    type: DataTypes.INTEGER,
    references: {
      model: Product,
      key: 'id'
    }
  },
  quantity: DataTypes.INTEGER,
  status: DataTypes.ENUM('SUCCESS', 'FAILED')
}, {
  timestamps: false
});

module.exports = Order;
