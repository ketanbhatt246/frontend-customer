// src/components/CartDrawer.js

import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./CartDrawer.css";

function CartDrawer({ isOpen, onClose }) {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  return (
    <div className={`cart-drawer ${isOpen ? "open" : ""}`}>
      <div className="cart-drawer-header">
        <h2>Your Cart</h2>
        <button onClick={onClose} className="close-btn">×</button>
      </div>

      <div className="cart-drawer-content">
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cartItems.map((item, index) => (
            <div className="cart-item" key={`${item.id}-${item.size}-${index}`}>
              <div>
                <strong>{item.name}</strong> ({item.size})
              </div>
              <div>Qty: {item.quantity}</div>
              <button
                className="remove-btn"
                onClick={() => removeFromCart(item.id, item.size)}
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>

      {cartItems.length > 0 && (
        <div className="cart-drawer-footer">
          <button className="clear-btn" onClick={clearCart}>Clear Cart</button>
          <button className="checkout-btn">Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
}

export default CartDrawer;
