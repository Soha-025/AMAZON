import React from "react";
import "./Header.css";

const Header = ({ cartCount, onCartOpen, onSignIn }) => {
  return (
    <header className="header" style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"10px 20px", background:"#232f3e", color:"#fff", position:"sticky", top:0, zIndex:100 }}>
      <div className="logo">
        <img 
          src="https://i.pinimg.com/1200x/b9/20/54/b92054577ac9bce30267573fd63a52a6.jpg" 
          alt="Amazon Logo" 
          style={{ width: "120px", objectFit:"contain" }}
        />
      </div>
      <nav className="nav-buttons" style={{ display:"flex", gap:"15px" }}>
        <button onClick={onSignIn} style={{ background:"#febd69", color:"#111", padding:"8px 15px", borderRadius:"5px", border:"none", cursor:"pointer" }}>Sign In</button>
        <button onClick={onCartOpen} style={{ background:"#f08804", color:"#fff", padding:"8px 15px", borderRadius:"5px", border:"none", cursor:"pointer" }}>Cart ({cartCount})</button>
      </nav>
    </header>
  );
};

export default Header;
