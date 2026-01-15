const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./sequelize');
const orderRoutes = require('./routes/orderRoutes');
const Product = require('./models/Product');

const app = express();
app.use(bodyParser.json());
app.use('/', orderRoutes);

const PORT = 3000;

sequelize.sync({ force: true }).then(async () => {
  console.log('Database synced');

  // Seed some products
  await Product.bulkCreate([
    { name: 'Product A', stock: 5 },
    { name: 'Product B', stock: 10 }
  ]);

  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
