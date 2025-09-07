import React, { useState } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import ProductCard from "./components/ProductCard.jsx";
import CartDrawer from "./components/CartDrawer.jsx";
import ProductModal from "./components/ProductModal.jsx";
import products from "./data/products.js";

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const addToCart = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    setCartItems(cartItems.filter((item) => item.id !== product.id));
  };

  return (
    <div className="app" style={{ fontFamily:"Arial, sans-serif", background:"#f5f5f5", minHeight:"100vh" }}>
      <Header 
        cartCount={cartItems.length} 
        onCartOpen={() => setCartOpen(!cartOpen)}
        onSignIn={() => alert("Sign In not implemented yet!")}
      />

      <main style={{ padding:"2rem", display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))", gap:"1.5rem" }}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={addToCart}
            onView={() => { setSelectedProduct(product); setModalOpen(true); }}
          />
        ))}
      </main>

      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        onRemove={removeFromCart}
      />

      <ProductModal
        product={selectedProduct}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onAddToCart={addToCart}
      />

      <Footer />
    </div>
  );
}

export default App;
