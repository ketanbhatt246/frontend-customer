// src/components/AboutSection.js

import React from "react";
import "./AboutSection.css";

function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-text">
        <h2>About</h2>
        <p>
          At Ket Walk, we bring fashion and comfort together for everyone —
          from playful kids to classy professionals. Walk confidently, walk with us.
        </p>
      </div>
      <div className="about-image">
        <img src="/images/family-1.webp" alt="About Ket Walk" />
      </div>
    </section>
  );
}

export default AboutSection;
