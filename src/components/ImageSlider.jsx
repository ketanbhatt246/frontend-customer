import React, { useEffect, useState } from "react";
import "./ImageSlider.css";

const images = [
  "/images/slider-1.webp",
  "/images/slider-2.webp",
  "/images/slider-3.webp",
];

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // 3 second delay

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="slider-container">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`slide-${index}`}
          className={`slider-image ${index === currentIndex ? "active" : ""}`}
        />
      ))}
    </div>
  );
}

export default ImageSlider;
