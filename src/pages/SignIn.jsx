import React, { useState } from "react";

const SignIn = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Welcome ${formData.name}! 🎉\nEmail: ${formData.email}\nContact: ${formData.contact}`);
    setFormData({ name: "", email: "", contact: "" });
  };

  return (
    <div style={{ maxWidth: "500px", margin: "40px auto", padding: "20px", background: "#fff", borderRadius: "10px", boxShadow: "0 6px 18px rgba(0,0,0,0.1)" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#232f3e" }}>Sign In</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <input
          type="text"
          name="name"
          placeholder="Enter your Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
        />
        <input
          type="tel"
          name="contact"
          placeholder="Enter your Contact No."
          value={formData.contact}
          onChange={handleChange}
          required
          style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
        />
        <button
          type="submit"
          style={{
            background: "#f0c14b",
            border: "1px solid #a88734",
            padding: "12px",
            borderRadius: "6px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
