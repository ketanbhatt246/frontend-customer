// src/pages/CategoryPage.js
import React from "react";
import { Link, useParams } from "react-router-dom";
import './CategoryPage.css';

const CategoryPage = () => {
  const { mainCategory } = useParams();

  const categoryMap = {
    boys: ["sneakers", "loafers", "sandals", "formals", "sliders", "casual shoes", "sports shoes"],
    girls: ["sandals", "flip-flops", "sneakers", "slippers", "saddle", "heels", "flats", "belly", "formal"],
    kids: ["casual shoes", "light shoes", "slippers"]
  };

  const subcategories = categoryMap[mainCategory.toLowerCase()] || [];

  return (
    <div className="category-page">
      <h2 className="category-title">{mainCategory} - Choose a type</h2>
      <div className="subcategory-grid">
        {subcategories.map((subcat, index) => (
          <Link
            key={index}
            to={`/category/${mainCategory}/${subcat.toLowerCase().replace(/\s+/g, "-")}`}
            className="subcategory-card"
          >
            {subcat}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
