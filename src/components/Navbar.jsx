// src/components/Navbar.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Optional: ya apni App.css use kar sakta hai

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <nav className="navbar">
      {/* ✅ Logo */}
      <div className="logo">
        <img src="/images/logo.png" alt="Ket Walk Logo" className="logo-img" />
        <span className="logo-text">Ket Walk</span>
      </div>

      {/* ✅ Search Bar */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search shoes..."
          className="search-bar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* ✅ Nav Links */}
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
