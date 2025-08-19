// ✅ UPDATED CartPage.js using CartContext (your structure)
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "./CartPage.css";

function CartPage() {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page" style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center" }}>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p style={{ textAlign: "center", marginTop: "20px" }}>
          Your cart is empty.
        </p>
      ) : (
        <>
          <ul
            className="cart-list"
            style={{
              listStyle: "none",
              padding: 0,
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              marginTop: "30px",
            }}
          >
            {cartItems.map((item, index) => (
              <li
                key={`${item.id}-${item.size}-${index}`}
                className="cart-item"
                style={{
                  display: "flex",
                  alignItems: "center",
                  border: "1px solid #ccc",
                  padding: "15px",
                  borderRadius: "8px",
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  width="100"
                  height="100"
                  style={{ objectFit: "cover", marginRight: "20px" }}
                />
                <div>
                  <h4>{item.name}</h4>
                  <p>
                    Size: <strong>{item.size}</strong>
                  </p>
                  <p>Price: ₹{item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <button
                    onClick={() => removeFromCart(item.id, item.size)}
                    style={{
                      padding: "6px 12px",
                      background: "#e74c3c",
                      color: "#fff",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                      marginTop: "8px",
                    }}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div
            className="cart-total"
            style={{
              textAlign: "center",
              marginTop: "30px",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            Total: ₹{total}
          </div>

          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <button
              onClick={() => navigate("/checkout")}
              style={{
                padding: "10px 20px",
                background: "#27ae60",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;