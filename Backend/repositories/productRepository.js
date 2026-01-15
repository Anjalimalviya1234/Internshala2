const Product = require('../models/Product');

class ProductRepository {
  async findById(id, transaction = null) {
    return Product.findOne({ where: { id }, transaction });
  }

  async updateStock(product, quantity, transaction) {
    product.stock -= quantity;
    return product.save({ transaction });
  }
}

module.exports = new ProductRepository();
