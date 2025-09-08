// src/pages/Home.jsx

import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <h1 className="page-title">Explore Categories</h1>

      <div className="categories-grid">
        <Link to="/category/jewellery" className="category-card">
          <img
            src="https://i.pinimg.com/1200x/75/39/1d/75391d40daa4d16f964b83431d7ad4a7.jpg"
            alt="Jewellery"
          />
          <h3>Jewellery</h3>
        </Link>

        <Link to="/category/shoes" className="category-card">
          <img
            src="https://i.pinimg.com/736x/a3/75/a7/a375a720ef3ad8e1eed25b9decaca4b9.jpg"
            alt="Shoes"
          />
          <h3>Shoes</h3>
        </Link>

        <Link to="/category/skincare" className="category-card">
          <img
            src="https://i.pinimg.com/736x/93/25/4f/93254ff508d9872ed790b69d36299b17.jpg"
            alt="Skincare"
          />
          <h3>Skincare</h3>
        </Link>

        <Link to="/category/gardening" className="category-card">
          <img
            src="https://i.pinimg.com/736x/0e/ca/0c/0eca0c01b71ec6bf49f035b230802b47.jpg"
            alt="Gardening"
          />
          <h3>Gardening</h3>
        </Link>

        <Link to="/category/kitchen" className="category-card">
          <img
            src="https://i.pinimg.com/736x/96/85/f5/9685f59454be32e6cceb1f236f0fffcf.jpg"
            alt="Kitchen Utilities"
          />
          <h3>Kitchen Utilities</h3>
        </Link>

        <Link to="/category/clothes" className="category-card">
          <img
            src="https://i.pinimg.com/1200x/3e/dc/76/3edc767481a8d899c6686d3dcb2c30ef.jpg"
            alt="Clothes"
          />
          <h3>Clothes</h3>
        </Link>

        <Link to="/category/smart-devices" className="category-card">
          <img
            src="https://i.pinimg.com/736x/74/a6/3f/74a63f2a28a3e8c330faab4e93312883.jpg"
            alt="Smart Devices"
          />
          <h3>Smart Devices</h3>
        </Link>

        <Link to="/category/discount" className="category-card">
          <img
            src="https://i.pinimg.com/1200x/f0/09/c6/f009c6c3d090660fe2d8d1f132b17300.jpg"
            alt="Discount Offers"
          />
          <h3>Discount Offers</h3>
        </Link>
      </div>
    </div>
  );
};

export default Home;
