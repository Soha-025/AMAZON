import React from "react";
import "./CartDrawer.css";

const CartDrawer = ({ cartItems, onClose, onIncrease, onDecrease, onRemove }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="cart-drawer">
      <button className="close-drawer" onClick={onClose}>×</button>
      <h3>Your Cart</h3>
      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {cartItems.map(item => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.title}/>
              <div>
                <div>{item.title}</div>
                <div>Rs {item.price} x {item.qty}</div>
                <div className="qty-controls">
                  <button onClick={() => onDecrease(item)}>-</button>
                  <span>{item.qty}</span>
                  <button onClick={() => onIncrease(item)}>+</button>
                </div>
                <button className="remove-btn" onClick={() => onRemove(item)}>Remove</button>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <h4>Total: Rs {total}</h4>
          </div>
        </>
      )}
    </div>
  );
};

export default CartDrawer;
