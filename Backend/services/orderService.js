const sequelize = require('../sequelize');
const productRepository = require('../repositories/productRepository');
const orderRepository = require('../repositories/orderRepository');

class OrderService {
  async createOrder(productId, quantity) {
    if (quantity <= 0) {
      throw new Error('Quantity must be greater than 0');
    }

    return sequelize.transaction(async (t) => {
      // Lock the row to prevent concurrent stock oversell
      const product = await productRepository.findById(productId, t);
      if (!product) throw new Error('Product not found');

      if (product.stock < quantity) throw new Error('Insufficient stock');

      await productRepository.updateStock(product, quantity, t);

      const order = await orderRepository.create({
        productId,
        quantity,
        status: 'SUCCESS'
      }, t);

      return order;
    });
  }
}

module.exports = new OrderService();
