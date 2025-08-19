// src/HomePage.js

import React from "react";
import ImageSlider from "./components/ImageSlider";
import AboutSection from "./components/AboutSection";
import ShopByCategory from "./components/ShopByCategory";
import "./App.css";

function HomePage() {
  return (
    <div className="App">
      {/* ✅ Hero Section */}
      <div className="hero-section">
        <img src="/images/logo.png" alt="Ket Walk Logo" className="hero-logo" />
        <h1 className="hero-title">Ket Walk</h1>
        <p className="hero-tagline">a complete family shoe shop</p>
        <button className="explore-button">Explore Now</button>
      </div>

      {/* ✅ Main Sections */}
      <ImageSlider />
      <AboutSection />
      <ShopByCategory />
    </div>
  );
}

export default HomePage;
