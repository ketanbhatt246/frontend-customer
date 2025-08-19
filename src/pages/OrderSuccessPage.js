// OrderSuccessPage.js (React Version)
import React, { useEffect, useState } from "react";

function OrderSuccessPage() {
  const [orderId, setOrderId] = useState("");

  useEffect(() => {
    const id = localStorage.getItem("orderId");
    setOrderId(id || "N/A");
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Thank You for Your Order!</h1>
      <p>Your Order ID: <strong>{orderId}</strong></p>
      <a href="/">Go to Home</a>
    </div>
  );
}

export default OrderSuccessPage;
