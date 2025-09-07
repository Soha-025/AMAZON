import React from "react";

const ProductModal = ({ product, isOpen, onClose, onAddToCart }) => {
  if (!isOpen || !product) return null;

  return (
    <div style={{ position:"fixed", top:0, left:0, width:"100%", height:"100%", background:"rgba(0,0,0,0.5)", display:"flex", justifyContent:"center", alignItems:"center", zIndex:1001 }}>
      <div style={{ background:"#fff", padding:"20px", borderRadius:"10px", width:"400px", textAlign:"center", boxShadow:"0 4px 12px rgba(0,0,0,0.2)" }}>
        <h2>{product.title}</h2>
        <img src={product.image} alt={product.title} style={{ width:"100%", height:"220px", objectFit:"cover", borderRadius:"8px" }} />
        <p>{product.description}</p>
        <p style={{ fontWeight:"bold" }}>Rs {product.price}</p>
        <div style={{ display:"flex", justifyContent:"space-between", marginTop:"15px" }}>
          <button onClick={() => onAddToCart(product)} style={{ flex:1, marginRight:"5px", background:"#f0c14b", border:"1px solid #a88734", borderRadius:"5px", cursor:"pointer", padding:"8px", fontWeight:"bold" }}>Add to Cart</button>
          <button onClick={onClose} style={{ flex:1, marginLeft:"5px", background:"#232f3e", color:"#fff", border:"none", borderRadius:"5px", cursor:"pointer", padding:"8px", fontWeight:"bold" }}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
