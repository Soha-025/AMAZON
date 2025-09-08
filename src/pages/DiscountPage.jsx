// src/pages/DiscountPage.jsx
import React from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import "./ProductPage.css";

const DiscountPage = ({ addToCart }) => {
  // Filter sirf discount wale products
  const discountProducts = products.filter((p) => p.discount);

  return (
    <div className="product-page">
      <h1 className="page-title">Discount Offers</h1>

      {discountProducts.length > 0 ? (
        <div className="product-grid">
          {discountProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
            />
          ))}
        </div>
      ) : (
        <p className="no-products">No discount offers available.</p>
      )}
    </div>
  );
};

export default DiscountPage;
