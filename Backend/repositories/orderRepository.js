const Order = require('../models/Order');

class OrderRepository {
  async create(orderData, transaction) {
    return Order.create(orderData, { transaction });
  }
}

module.exports = new OrderRepository();
