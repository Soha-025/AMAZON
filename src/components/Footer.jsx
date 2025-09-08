import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-columns">

          {/* Shop Column */}
          <div className="footer-col">
            <h4>Shop</h4>
            <ul>
              <li><Link to="/category/shoes">Shoes</Link></li>
              <li><Link to="/category/jewellery">Jewellery</Link></li>
              <li><Link to="/category/clothes">Clothes</Link></li>
              <li><Link to="/category/kitchen">Kitchen Utilities</Link></li>
              <li><Link to="/category/smart-devices">Smart Devices</Link></li>
              <li><Link to="/category/skincare">Skincare</Link></li>
              <li><Link to="/category/gardening">Gardening</Link></li>
            </ul>
          </div>

          {/* Support & Company Column */}
          <div className="footer-col">
            <h4>Support</h4>
            <ul>
              <li><Link to="/help">Help Center</Link></li>
              <li><Link to="/returns">Returns</Link></li>
              <li><Link to="/shipping">Shipping Info</Link></li>
            </ul>

            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/press">Press Releases</Link></li>
            </ul>
          </div>

          {/* Amazon Column */}
          <div className="footer-col footer-right">
            <div className="footer-logo">
              <img
                src="https://i.pinimg.com/1200x/b9/20/54/b92054577ac9bce30267573fd63a52a6.jpg"
                alt="Amazon Clone Logo"
              />
            </div>
          
            <div className="footer-social">
              <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook /></a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer"><FaYoutube /></a>
            </div>
          </div>

        </div>
      </div>

        <p>© 2025 Amazon Clone. Designed by SA.</p>
    </footer>
  );
};

export default Footer;
