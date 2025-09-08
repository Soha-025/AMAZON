import React from "react";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = ({ cartItems, onIncrease, onDecrease, onRemove }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="cart-page">
      <h1 className="page-title">Your Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty 🛒</p>
          <Link to="/products" className="btn-shop">Shop Now</Link>
        </div>
      ) : (
        <div className="cart-container">
          {/* Cart Items */}
          <div className="cart-items">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.title} />
                <div className="cart-info">
                  <h3>{item.title}</h3>
                  <p>Rs {item.price}</p>
                  <div className="quantity-control">
                    <button onClick={() => onDecrease(item)}>-</button>
                    <span>{item.qty}</span>
                    <button onClick={() => onIncrease(item)}>+</button>
                  </div>
                  <button className="remove-btn" onClick={() => onRemove(item)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="cart-summary">
            <h2>Order Summary</h2>
            <p>Total Items: {cartItems.reduce((sum, i) => sum + i.qty, 0)}</p>
            <h3>Total: Rs {total}</h3>
            <Link to="/checkout" className="btn-checkout">Proceed to Checkout</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
