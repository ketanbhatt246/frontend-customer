// src/data/products.js

const productData = {
  Sneakers: [
    {
      id: "boys-sneaker-1",
    name: "White Boys Sneaker",
    category: "Boys",
    subcategory: "Sneakers",
    price: 1199,
    sizes: ["6", "7", "8"],
    image: "/images/products/sneakers-1.webp",
    },
    {
      id: 2,
      name: "Chunky Sneakers",
      price: 3499,
      image: "/images/products/sneakers-2.webp",
      sizes: [5, 6, 7, 8],
      category: "Girls",
    },
    {
      id: 3,
      name: "Canvas Sneakers",
      price: 1799,
      image: "/images/products/sneakers-3.webp",
      sizes: [4, 5, 6, 7, 8],
      category: "Kids",
    },
  ],
  Slippers: [
    {
      id: 4,
      name: "Casual Slippers",
      price: 599,
      image: "/images/products/slipper1.webp",
      sizes: [6, 7, 8, 9],
      category: "Boys",
    },
    {
      id: 5,
      name: "Beach Slippers",
      price: 749,
      image: "/images/products/slipper2.webp",
      sizes: [5, 6, 7],
      category: "Girls",
    },
  ],
  "Casual Shoes": [
    {
      id: 6,
      name: "Everyday Casuals",
      price: 1299,
      image: "/images/products/casuals1.webp",
      sizes: [6, 7, 8],
      category: "Girls",
    },
    {
      id: 7,
      name: "Denim Casuals",
      price: 1499,
      image: "/images/products/casuals2.webp",
      sizes: [4, 5, 6, 7],
      category: "Kids",
    },
  ],
};

export default productData;
