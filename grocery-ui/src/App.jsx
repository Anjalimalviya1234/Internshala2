import { useEffect, useState } from "react";
import { getProducts, placeOrder } from "./api.js";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState("");  // for alerts
  const [error, setError] = useState(false);

  useEffect(() => {
    getProducts().then(res => setProducts(res.data));
  }, []);

  const order = (id) => {
    placeOrder(id)
      .then(() => {
        setMessage("Order placed successfully");
        setError(false);
      })
      .catch(err => {
        setMessage(err.response?.data?.message || "Order failed");
        setError(true);
      });
  };

  return (
    <div>
      <h2>Products</h2>

      {message && (
        <div className={`alert ${error ? "alert-error" : "alert-success"}`}>
          {message}
        </div>
      )}

      {products.map(p => (
        <div className="product-card" key={p.id}>
          <div className="product-info">
            {p.name} - ₹{p.price} (Stock: {p.stock})
          </div>
          <button className="order-btn" onClick={() => order(p.id)}>Order</button>
        </div>
      ))}
    </div>
  );
}

export default App;
