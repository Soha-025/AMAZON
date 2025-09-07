import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section">
          <h4>Get to Know Us</h4>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Press Releases</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Connect with Us</h4>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Make Money with Us</h4>
          <ul>
            <li>Sell on Amazon</li>
            <li>Affiliate Program</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Let Us Help You</h4>
          <ul>
            <li>Your Account</li>
            <li>Shipping Rates</li>
            <li>Returns & Replacements</li>
            <li>Customer Service</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Amazon. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
