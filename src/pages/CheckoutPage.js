// src/pages/CheckoutPage.js

import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "./CheckoutPage.css"; // ✅ Make sure this CSS file exists

function CheckoutPage() {
  const navigate = useNavigate();
  const { cartItems, clearCart } = useContext(CartContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (cartItems.length === 0) return alert("Cart is empty");

    const order = {
      items: cartItems,
      customer: {
        name: e.target.name.value,
        phone: e.target.phone.value,
        address: e.target.address.value,
        pincode: e.target.pincode.value,
        city: e.target.city.value,
      },
      paymentMethod: "COD",
    };

    try {
      const res = await fetch("https://your-backend-url.com/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(order),
      });

      const data = await res.json();

      clearCart();
      localStorage.removeItem("cart");
      localStorage.setItem("orderId", data?.orderId || "12345");

      navigate("/order-success");
    } catch (err) {
      console.error("Order error:", err);
      alert("Error placing order. Please try again.");
    }
  };

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit} className="checkout-form">
        <input type="text" name="name" placeholder="Full Name" required />
        <input type="text" name="phone" placeholder="Phone Number" required />
        <textarea name="address" placeholder="Full Address" required></textarea>
        <input type="text" name="pincode" placeholder="Pincode" required />
        <input type="text" name="city" placeholder="City" required />
        <button type="submit">Place Order (Cash on Delivery)</button>
      </form>
    </div>
  );
}

export default CheckoutPage;
