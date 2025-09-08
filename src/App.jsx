import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import ProductDetails from "./pages/ProductDetails";
import CartDrawer from "./components/CartDrawer";
import SignIn from "./pages/SignIn";
import products from "./data/products";
import ProductPage from "./pages/ProductPage";
import DiscountPage from "./pages/DiscountPage";
import "@fortawesome/fontawesome-free/css/all.min.css";

const App = () => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Add to Cart
  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  // Increase Quantity
  const increaseQty = (item) => {
    setCart((prev) =>
      prev.map((p) => (p.id === item.id ? { ...p, qty: p.qty + 1 } : p))
    );
  };

  // Decrease Quantity
  const decreaseQty = (item) => {
    setCart((prev) =>
      prev.map((p) =>
        p.id === item.id && p.qty > 1 ? { ...p, qty: p.qty - 1 } : p
      )
    );
  };

  // Remove Item
  const removeItem = (item) => {
    setCart((prev) => prev.filter((p) => p.id !== item.id));
  };

  return (
    <Router>
      <Header
        cartCount={cart.reduce((sum, i) => sum + i.qty, 0)}
        onCartClick={() => setIsCartOpen(true)}
      />

      {isCartOpen && (
        <CartDrawer
          cartItems={cart}
          onClose={() => setIsCartOpen(false)}
          onIncrease={increaseQty}
          onDecrease={decreaseQty}
          onRemove={removeItem}
        />
      )}

      <Routes>
        <Route
          path="/"
          element={<Home products={products} addToCart={addToCart} />}
        />
        <Route
          path="/product/:id"
          element={<ProductDetails products={products} addToCart={addToCart} />}
        />
        <Route
  path="/category/:category"
  element={<ProductPage addToCart={addToCart} />}
/>
        <Route path="/checkout" element={<Checkout cartItems={cart} />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/category/discount" element={<DiscountPage addToCart={addToCart} />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
