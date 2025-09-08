import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ cartCount, onCartClick }) => {
  return (
    <header className="header">
      <div className="container bar">
        {/* Logo */}
        <div className="logo">
          <Link to="/">
            <img
              src="https://i.pinimg.com/1200x/b9/20/54/b92054577ac9bce30267573fd63a52a6.jpg"
              alt="Amazon Logo"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="nav-links">
          <Link to="/" className="nav-item">Home</Link>

          {/* Dropdown Menu */}
          <div className="dropdown">
            <button className="nav-item dropbtn">Products ▾</button>
            <div className="dropdown-content">
              <Link to="/category/Shoes">Shoes</Link>
              <Link to="/category/Jewellery">Jewellery</Link>
              <Link to="/category/SkinCare">SkinCare</Link>
              <Link to="/category/Gardening">Gardening</Link>
              <Link to="/category/Kitchen Utilities">Kitchen Utilities</Link>
              <Link to="/category/Clothes">Clothes</Link>
              <Link to="/category/Smart Devices">Smart Devices</Link>
              <Link to="/category/Discount Offers">Discount offers</Link>
            </div>
          </div>

          <Link to="/checkout" className="nav-item">Checkout</Link>
        </nav>

        {/* Actions */}
        <div className="actions">
          <Link to="/signin" className="btn btn-sign">Sign In</Link>
          <button onClick={onCartClick} className="btn btn-cart">
            Cart ({cartCount})
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
