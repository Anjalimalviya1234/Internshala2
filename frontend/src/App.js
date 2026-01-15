import { useState } from "react";
import axios from "axios";
import "./App.css"; // import the CSS
function App() {
  const [productId, setProductId] = useState("");
  const [quantity, setQuantity] = useState("");
  const [message, setMessage] = useState("");

  const placeOrder = async () => {
    try {
      const res = await axios.post("http://localhost:3000/order", {
        productId: Number(productId),
        quantity: Number(quantity),
      });
      setMessage(JSON.stringify(res.data));
    } catch (err) {
      setMessage(err.message);
    }
  };

  return (
    <div style={{ padding: "50px" }}>
      <h2>Place Order</h2>
      <input
        type="number"
        placeholder="Product ID"
        value={productId}
        onChange={(e) => setProductId(e.target.value)}
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <button onClick={placeOrder}>Order</button>
      <p>Response: {message}</p>
    </div>
  );
}

export default App;
