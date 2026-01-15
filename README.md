# Inventory Allocation System

## Tech Stack
- Backend: Node.js + Express + Sequelize (SQLite)
- Frontend: React.js
- API: Single endpoint (POST /order)

---

## Folder Structure

inventory-allocation-system/
├── backend/
│   ├── controllers/
│   │   └── orderController.js
│   ├── services/
│   │   └── orderService.js
│   ├── repositories/
│   │   ├── productRepository.js
│   │   └── orderRepository.js
│   ├── models/
│   │   ├── Product.js
│   │   └── Order.js
│   ├── routes/
│   │   └── orderRoutes.js
│   ├── sequelize.js
│   └── index.js
│
├── frontend/
│   └── src/
│       └── App.js
│
└── README.md

---

## API Details

### POST /order

**Request**
```json
{
  "productId": 1,
  "quantity": 3
}
Success Response

{
  "status": "SUCCESS",
  "orderId": 1
}


Failure Response

{
  "status": "FAILED",
  "reason": "Insufficient stock"
}