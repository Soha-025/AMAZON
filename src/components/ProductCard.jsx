// src/components/ProductCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      {/* SALE Badge */}
      {product.discount && <span className="sale-badge">SALE</span>}

      <Link to={`/product/${product.id}`} className="product-link">
        <img src={product.image} alt={product.title} className="product-img" />
        <h3 className="product-title">{product.title}</h3>
      </Link>

      <p className="product-price">Rs {product.price}</p>
      <button className="btn-add" onClick={() => onAddToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
