import React from "react";
import { useNavigate } from "react-router-dom";

const Checkout = ({ cartItems }) => {
  const navigate = useNavigate();
  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div style={{ maxWidth: "900px", margin: "40px auto", padding: "20px" }}>
      <h2 style={{ color: "#232f3e", marginBottom: "20px", textAlign: "center" }}>🛒 Checkout</h2>

      {cartItems.length === 0 ? (
        <p style={{ textAlign: "center", fontSize: "1.1rem", color: "#555" }}>Your cart is empty!</p>
      ) : (
        <div>
          <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "20px" }}>
            <thead>
              <tr style={{ background: "#f0c14b", color: "#111", fontWeight: "600" }}>
                <th style={{ padding: "12px" }}>Product</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} style={{ borderBottom: "1px solid #ddd", textAlign: "center" }}>
                  <td style={{ padding: "12px", display: "flex", alignItems: "center", gap: "10px" }}>
                    <img src={item.image} alt={item.title} style={{ width: "60px", height: "60px", objectFit: "cover", borderRadius: "6px" }} />
                    {item.title}
                  </td>
                  <td>{item.qty}</td>
                  <td>Rs. {item.price}</td>
                  <td>Rs. {item.price * item.qty}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div style={{ textAlign: "right", fontSize: "1.2rem", fontWeight: "700", marginBottom: "20px" }}>
            Total Amount: Rs. {totalAmount}
          </div>

          <button
            onClick={() => alert("Order Placed Successfully! 🎉")}
            style={{
              background: "#f0c14b",
              color: "#111",
              padding: "12px 24px",
              border: "1px solid #a88734",
              borderRadius: "8px",
              fontWeight: "700",
              cursor: "pointer",
              display: "block",
              margin: "0 auto",
              transition: "0.3s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.background = "#ddb347")}
            onMouseOut={(e) => (e.currentTarget.style.background = "#f0c14b")}
          >
            ✅ Place Order
          </button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
