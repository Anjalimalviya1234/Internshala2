const orderService = require('../services/orderService');

class OrderController {
  async create(req, res) {
    const { productId, quantity } = req.body;

    try {
      const order = await orderService.createOrder(productId, quantity);
      res.json({ status: 'SUCCESS', orderId: order.id });
    } catch (err) {
      res.json({ status: 'FAILED', reason: err.message });
    }
  }
}

module.exports = new OrderController();
