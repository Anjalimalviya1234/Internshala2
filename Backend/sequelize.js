const { Sequelize } = require('sequelize');

// Create a new Sequelize instance (using SQLite for simplicity)
const sequelize = new Sequelize({
  dialect: 'sqlite',      // Database type
  storage: './database.sqlite', // SQLite file path
  logging: false          // optional: turn off SQL query logs
});

module.exports = sequelize;
