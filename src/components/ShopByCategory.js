// src/components/ShopByCategory.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ShopByCategory.css";

const categories = {
  Boys: ["Sneakers", "Loafers", "Sandals", "Formals", "Sliders", "Casual Shoes", "Sports Shoes"],
  Girls: ["Sandals", "Flip-Flops", "Sneakers", "Slippers", "Saddle", "Heels", "Flats", "Belly", "Formal"],
  Kids: ["Casual Shoes", "Light Shoes", "Slippers"],
};

const categoryImages = {
  Boys: "/images/categories/boys.webp",
  Girls: "/images/categories/girl.jpg",
  Kids: "/images/categories/kids.webp",
};

function ShopByCategory() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <section className="category-section">
      <h2 className="category-heading">Shop by Category</h2>

      <div className="category-cards">
        {Object.keys(categories).map((key) => (
          <div
            key={key}
            className="category-card"
            onClick={() => setActiveCategory(activeCategory === key ? null : key)}
          >
            <img src={categoryImages[key]} alt={key} />
            <div className="category-name">{key}</div>
          </div>
        ))}
      </div>

      {activeCategory && (
        <div className="subcategories">
          {categories[activeCategory].map((sub, idx) => (
            <div
              className="subcategory-box"
              key={idx}
              onClick={() => navigate(`/product/${sub}`)}
            >
              {sub}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default ShopByCategory;
