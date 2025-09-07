import React from "react";

const CartDrawer = ({ isOpen, onClose, cartItems, onRemove }) => {
  if (!isOpen) return null;

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div style={{ position:"fixed", top:0, right:0, width:"350px", height:"100vh", background:"#fff", borderLeft:"1px solid #ddd", padding:"20px", overflowY:"auto", boxShadow:"-2px 0 12px rgba(0,0,0,0.15)", zIndex:1000 }}>
      <div style={{ display:"flex", justifyContent:"space-between", marginBottom:"20px" }}>
        <h2>Shopping Cart</h2>
        <button onClick={onClose} style={{ fontSize:"1rem", background:"transparent", border:"none", cursor:"pointer" }}>✖</button>
      </div>

      {cartItems.length === 0 ? <p>Your cart is empty</p> : (
        <>
          {cartItems.map(item => (
            <div key={item.id} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"15px", borderBottom:"1px solid #eee", paddingBottom:"10px" }}>
              <div>
                <p style={{ margin:0, fontWeight:"bold" }}>{item.title}</p>
                <p style={{ margin:"5px 0" }}>Rs {item.price} x {item.quantity}</p>
              </div>
              <button onClick={() => onRemove(item)} style={{ background:"#f44336", color:"#fff", border:"none", borderRadius:"5px", padding:"5px 10px", cursor:"pointer" }}>Remove</button>
            </div>
          ))}

          <div style={{ marginTop:"20px", borderTop:"1px solid #ddd", paddingTop:"15px" }}>
            <h3>Total: Rs {total.toLocaleString('en-PK')}</h3>
            <button style={{
              width:"100%",
              padding:"12px 0",
              background:"#f0c14b",
              border:"1px solid #a88734",
              borderRadius:"5px",
              cursor:"pointer",
              fontWeight:"bold",
              marginTop:"10px",
              transition:"0.3s"
            }}
            onClick={() => alert("Checkout not implemented yet!")}
            onMouseOver={e => e.currentTarget.style.background="#e2b33c"}
            onMouseOut={e => e.currentTarget.style.background="#f0c14b"}>
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartDrawer;
