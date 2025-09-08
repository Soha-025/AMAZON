import React from "react";
import ProductCard from "./ProductCard";

const ProductGrid = ({ products, onAdd, onView }) => {
  return (
    <div className="product-grid">
      {products.map(p => (
        <ProductCard key={p.id} product={p} onAdd={() => onAdd(p)} onView={() => onView(p)} />
      ))}
    </div>
  );
};

export default ProductGrid;
