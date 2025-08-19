// src/pages/SneakersPage.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import productData from '../data/products';

function SneakersPage() {
  const { category } = useParams(); // 'Boys', 'Girls', etc.
  const cleanCategory = decodeURIComponent(category).replace(/-/g, ' ');

  const sneakers = productData.Sneakers.filter(
    (item) => item.category.toLowerCase() === cleanCategory.toLowerCase()
  );

  return (
    <div style={{ padding: '2rem' }}>
      <h2>{cleanCategory} Sneakers</h2>

      {sneakers.length === 0 ? (
        <p>No sneakers found for {cleanCategory}.</p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          {sneakers.map((shoe) => (
            <Link
              key={shoe.id}
              to={`/product/${shoe.category}/${shoe.id}`} // 👈 ✅ category here is clean & matches ProductPage route
              style={{
                border: '1px solid #ccc',
                padding: '1rem',
                width: '200px',
                textDecoration: 'none',
                color: 'black',
              }}
            >
              <img
                src={shoe.image}
                alt={shoe.name}
                style={{ width: '100%', height: '150px', objectFit: 'cover' }}
              />
              <h4>{shoe.name}</h4>
              <p>₹{shoe.price}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default SneakersPage;
