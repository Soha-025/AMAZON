import React from "react";
import ProductCard from "../components/ProductCard";

const AllProducts = ({ products, addToCart }) => {
  return (
    <div style={{padding:"20px"}}>
      <h2 style={{marginBottom:"16px"}}>All Products</h2>
      <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))", gap:"16px"}}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} onAddToCart={addToCart}/>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
