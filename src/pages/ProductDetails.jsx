// src/pages/ProductDetails.jsx
import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import "./ProductDetails.css";

const ProductDetails = ({ addToCart }) => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  // Related products from same category (except current product)
  const relatedProducts = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  );

  return (
    <div className="product-details">
      <div className="details-card">
        <img src={product.image} alt={product.title} className="details-img" />
        <div className="details-info">
          <h1>{product.title}</h1>
          <p className="details-desc">{product.description}</p>
          <p className="details-price">Rs {product.price}</p>
          <button className="btn-add" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      </div>

      {/* Related Products Section */}
      <div className="related-section">
        <h2>Related Products</h2>
        {relatedProducts.length > 0 ? (
          <div className="related-grid">
            {relatedProducts.map((item) => (
              <ProductCard
                key={item.id}
                product={item}
                onAddToCart={addToCart}
              />
            ))}
          </div>
        ) : (
          <p>No related products available.</p>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
