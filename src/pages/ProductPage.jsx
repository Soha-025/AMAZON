// src/pages/ProductPage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import "./ProductPage.css";

const ProductPage = ({ addToCart }) => {
  const { category } = useParams();

  const capitalize = (str) =>
    str ? str.charAt(0).toUpperCase() + str.slice(1) : "";

  const filteredProducts = products.filter(
    (p) =>
      p.category &&
      p.category.toLowerCase() === category?.toLowerCase()
  );

  return (
    <div className="product-page">
      <h1 className="page-title">{capitalize(category)}</h1>

      {filteredProducts.length > 0 ? (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
            />
          ))}
        </div>
      ) : (
        <p className="no-products">No products available in this category.</p>
      )}
    </div>
  );
};

export default ProductPage;
