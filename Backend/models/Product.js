const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: DataTypes.STRING,
  stock: DataTypes.INTEGER
}, {
  timestamps: false
});

module.exports = Product;
