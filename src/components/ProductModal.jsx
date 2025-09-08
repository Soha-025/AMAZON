import React from "react";
import "./ProductModal.css";

const ProductModal = ({ product, onClose, onAddToCart }) => {
  if(!product) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e)=>e.stopPropagation()}>
        <img src={product.image} alt={product.title}/>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <div className="modal-footer">
          <span>Rs {product.price}</span>
          <button onClick={()=>onAddToCart(product)}>Add to Cart</button>
        </div>
        <button className="close-btn" onClick={onClose}>×</button>
      </div>
    </div>
  );
};

export default ProductModal;
