import axios from "axios";

const API = "http://localhost:5127";

export const getProducts = () => axios.get(`${API}/products`);

export const placeOrder = (productId) =>
  axios.post(`${API}/orders`, {
    productId,
    quantity: 1
  });
