import React from "react";

const ProductCard = ({ product, onAddToCart, onView }) => {
  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "10px",
      background: "#fff",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      overflow: "hidden",
      textAlign: "center",
      transition: "0.3s",
    }}>
      <div style={{ width: "100%", height: "300px", overflow: "hidden" }}>
        <img 
          src={product.image} 
          alt={product.title} 
          style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.3s" }} 
        />
      </div>

      <div style={{ padding: "15px" }}>
        <h3 style={{ fontSize: "1.2rem", marginBottom: "10px" }}>{product.title}</h3>
        <p style={{ fontWeight: "bold", marginBottom: "10px" }}>Rs {product.price.toLocaleString('en-PK')}</p>

        <div style={{ display: "flex", justifyContent: "space-between", gap: "10px" }}>
          <button 
            onClick={() => onAddToCart(product)}
            style={{
              flex: 1,
              background: "#f0c14b",
              border: "1px solid #a88734",
              borderRadius: "5px",
              padding: "8px",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "0.3s"
            }}
            onMouseOver={e => e.currentTarget.style.background="#e2b33c"}
            onMouseOut={e => e.currentTarget.style.background="#f0c14b"}
          >
            Add to Cart
          </button>

          <button 
            onClick={onView}
            style={{
              flex: 1,
              background: "#232f3e",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              padding: "8px",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "0.3s"
            }}
            onMouseOver={e => e.currentTarget.style.background="#1a202f"}
            onMouseOut={e => e.currentTarget.style.background="#232f3e"}
          >
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
