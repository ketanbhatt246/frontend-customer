// src/components/ProductPage.js
import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import productData from "../data/products";
import { CartContext } from "../context/CartContext";

const ProductPage = () => {
  const { category, id } = useParams(); // ✅ Fix param name
  const { addToCart } = useContext(CartContext);
  const [selectedSize, setSelectedSize] = useState(null);

  const decodedCategory = decodeURIComponent(category).replace(/-/g, " ");
  const matchedKey = Object.keys(productData).find(
    (key) => key.toLowerCase() === decodedCategory.toLowerCase()
  );

  const categoryProducts = matchedKey ? productData[matchedKey] : [];
  const product = categoryProducts.find(
    (p) => p.id.toString() === id.toString()
  );

  if (!product) {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h2>Product not found</h2>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size!");
      return;
    }
    addToCart({ ...product, selectedSize });
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "900px", margin: "0 auto" }}>
      <h2>{product.name}</h2>
      <img
        src={product.image}
        alt={product.name}
        style={{
          width: "100%",
          maxHeight: "400px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />

      <div style={{ marginTop: "1rem" }}>
        <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
          ₹{product.price}
        </p>
        <p style={{ marginTop: "0.5rem" }}>
          {product.description || "Stylish and comfortable footwear."}
        </p>
      </div>

      {/* 🏷️ Offer Section */}
      <div
        style={{
          marginTop: "1rem",
          padding: "10px",
          background: "#fff8e1",
          border: "1px dashed #ffc107",
          borderRadius: "8px",
        }}
      >
        <p style={{ fontWeight: "bold", color: "#ff6f00" }}>
          🔥 Offer: Buy now & get 20% off + Free delivery!
        </p>
      </div>

      {/* 👟 Size Selection */}
      <div style={{ marginTop: "1.5rem" }}>
        <p>
          <strong>Select Size:</strong>
        </p>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {product.sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              style={{
                padding: "0.5rem 1rem",
                border:
                  selectedSize === size ? "2px solid black" : "1px solid gray",
                background: selectedSize === size ? "#f0f0f0" : "white",
                cursor: "pointer",
              }}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* 🛒 Add to Cart */}
      <button
        onClick={handleAddToCart}
        style={{
          marginTop: "1.5rem",
          padding: "0.75rem 1.5rem",
          background: "black",
          color: "white",
          border: "none",
          cursor: "pointer",
          borderRadius: "6px",
        }}
      >
        Add to Cart
      </button>

      {/* 🌟 Reviews Section */}
      <div
        style={{
          marginTop: "2rem",
          borderTop: "1px solid #ddd",
          paddingTop: "1.5rem",
        }}
      >
        <h3>Customer Reviews</h3>
        <div style={{ marginTop: "1rem" }}>
          <p>
            <strong>⭐️⭐️⭐️⭐️☆ - Rahul</strong>
          </p>
          <p>Very comfy and stylish! Worth the price.</p>
        </div>
        <div style={{ marginTop: "1rem" }}>
          <p>
            <strong>⭐️⭐️⭐️⭐️⭐️ - Aisha</strong>
          </p>
          <p>Perfect fit. The size chart helped a lot.</p>
        </div>
      </div>

      {/* 🚚 Delivery Info */}
      <div style={{ marginTop: "2rem", color: "#555" }}>
        <p>
          🚚 Estimated Delivery: <strong>3–5 working days</strong>
        </p>
        <p>🔁 Easy 7-day return policy</p>
      </div>
    </div>
  );
};

export default ProductPage;
