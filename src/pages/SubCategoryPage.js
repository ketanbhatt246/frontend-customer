// src/pages/SubCategoryPage.js
import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import productData from "../data/products";
import "./SubCategoryPage.css";

const formatName = (slug) => {
  return slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
};

const SubCategoryPage = () => {
  const { subCategory } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const mainCategory = location.state?.mainCategory || null;
  const decodedSubCategory = decodeURIComponent(subCategory).replace(/-/g, " ");
  const matchedKey = Object.keys(productData).find(
    (key) => key.toLowerCase() === decodedSubCategory.toLowerCase()
  );

  const products = matchedKey
    ? productData[matchedKey].filter((product) =>
        mainCategory
          ? product.category.toLowerCase() === mainCategory.toLowerCase()
          : true
      )
    : [];

  return (
    <div className="subcategory-page">
      <h2 className="subcategory-heading">
        {mainCategory ? `${mainCategory} ` : ""}
        {formatName(decodedSubCategory)} Collection
      </h2>

      {products.length === 0 ? (
        <p className="no-products">No products found in this category.</p>
      ) : (
        <div className="product-grid">
          {products.map((product) => (
            <div
              key={product.id}
              className="product-card"
              onClick={() =>
                navigate(`/product/${subCategory}/${product.id}`)
              }
            >
              <img
                src={
                  product.image.startsWith("/")
                    ? product.image
                    : `/images/products/${product.image}`
                }
                alt={product.name}
              />
              <h4>{product.name}</h4>
              <p className="price">₹{product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SubCategoryPage;
