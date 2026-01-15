# Mini Grocery Order System

**Tech Stack:** React (Frontend) + .NET 10 Web API (Backend)  
**Purpose:** Internship Demo Task – Check backend architecture, logic clarity, and API discipline  

---

## 1. Project Overview

This is a **Mini Grocery Order System** where users can:

- View a list of products
- Place orders
- See success/failure messages

The backend handles **all business logic**, including stock check and order creation, while the frontend only calls APIs.

---

## 2. Features

### Backend
- **Database (InMemory)** with seeded products
- **Models**: `Product`, `Order`
- **Controllers**: `ProductsController`, `OrdersController`
- **Services**: `OrderService` handles all business logic
- **Repositories**: `ProductRepository`, `OrderRepository` handle data access
- **APIs**:
  1. `GET /products` → Fetch product list
  2. `POST /orders` → Place an order (validates stock, updates stock, creates order)
- **Transaction Handling:** All order operations executed in one logical transaction
- **CORS Enabled** for frontend API calls
- **Swagger** available at `http://localhost:5127/swagger` for testing APIs

### Frontend
- **React App** lists all products
- **Order button** to place order
- **Success/failure alert** after placing order
- Minimal styling (CSS) for readability
- **No business logic** in frontend

---

## 3. Project Structure

INtershala/
│
├─ GroceryApi/ # Backend (.NET)
│ ├─ Controllers/
│ ├─ Data/
│ ├─ Models/
│ ├─ Repositories/
│ ├─ Services/
│ └─ Program.cs
│
├─ grocery-ui/ # Frontend (React)
│ ├─ src/
│ │ ├─ App.js
│ │ └─ api.js
│ └─ package.json


---

## 4. How to Run

### Backend
```bash
cd GroceryApi
dotnet run


Frontend
cd grocery-ui
npm install
npm start


Runs at http://localhost:5173
5. API Usage
1. GET /products

Fetch all products

GET http://localhost:5127/products


Response Example:

[
  { "id": 1, "name": "Apple", "price": 50, "stock": 10 },
  { "id": 2, "name": "Banana", "price": 20, "stock": 5 }
]

2. POST /orders

Place an order

POST http://localhost:5127/orders
Content-Type: application/json

{
  "productId": 1,
  "quantity": 2
}