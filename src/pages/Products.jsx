import React from "react";
import { Link } from "react-router-dom";
import "./Products.css";

const categories = [
  { name: "Jewellery", slug: "jewellery", image: "https://i.pinimg.com/1200x/c4/f7/53/c4f7539c50e9bda5fba5b6c1e1466e0a.jpg" },
  { name: "Shoes", slug: "shoes", image: "https://i.pinimg.com/1200x/9f/0b/fb/9f0bfb4bcd787ced6e8b5de76e5a0a69.jpg" },
  { name: "Skincare", slug: "skincare", image: "https://i.pinimg.com/1200x/70/21/0a/70210a67d40248fda8ddf537d5baf512.jpg" },
  { name: "Gardening", slug: "gardening", image: "https://i.pinimg.com/1200x/24/54/0c/24540c1d22dbfe937d6b7a22f1b83c19.jpg" },
  { name: "Kitchen Utilities", slug: "kitchen", image: "https://i.pinimg.com/1200x/07/5d/7c/075d7c19a4a764b2b07d53f9a7fa694c.jpg" },
  { name: "Clothes", slug: "clothes", image: "https://i.pinimg.com/1200x/59/b2/19/59b219bca83edb7c64a84bc48e0e8471.jpg" },
  { name: "Smart Devices", slug: "devices", image: "https://i.pinimg.com/1200x/f3/0a/b0/f30ab0c3c4c535b22d15cc8f0e563e4d.jpg" },
];

const Products = () => {
  return (
    <div className="products-page">
      <h1 className="page-title">Browse Product Categories</h1>
      <div className="categories-grid">
        {categories.map((cat) => (
          <Link key={cat.slug} to={`/products/${cat.slug}`} className="category-card">
            <img src={cat.image} alt={cat.name} />
            <h3>{cat.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
