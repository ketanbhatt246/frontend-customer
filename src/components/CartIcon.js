// src/components/CartIcon.js
import React, { useContext, useEffect, useRef, useState } from "react";
import { CartContext } from "../context/CartContext";
import CartDrawer from "./CartDrawer";
import "./CartIcon.css";

function CartIcon() {
  const { cartItems } = useContext(CartContext);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const iconRef = useRef();

  useEffect(() => {
    if (iconRef.current) {
      iconRef.current.classList.add("shake");
      setTimeout(() => {
        iconRef.current.classList.remove("shake");
      }, 400);
    }
  }, [cartItems]);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <div className="cart-icon" ref={iconRef} onClick={() => setDrawerOpen(true)}>
        🛒 <span>{totalItems}</span>
      </div>
      <CartDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}

export default CartIcon;
