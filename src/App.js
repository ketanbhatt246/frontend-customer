// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./HomePage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage"; // ✅ New
import OrderSuccessPage from "./pages/OrderSuccessPage"; // ✅ New
import ProductPage from "./components/ProductPage";
import SubCategoryPage from "./pages/SubCategoryPage";
import SneakersPage from "./pages/SneakersPage";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/order-success" element={<OrderSuccessPage />} />
        <Route path="/category/:category/Sneakers" element={<SneakersPage />} />
        <Route path="/product/:subCategory" element={<SubCategoryPage />} />
        <Route path="/product/:category/:id" element={<ProductPage />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
