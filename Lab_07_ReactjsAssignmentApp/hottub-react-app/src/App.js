// src/App.js
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// ── Layout wrapper ──
import Layout from "./components/Layout";

// ── Pages ──
import Home             from "./pages/Home";
import Login            from "./pages/Login";
import Register         from "./pages/Register";
import MyAccount        from "./pages/MyAccunt";
import EditAccount      from "./pages/EditAccount";
import Category         from "./pages/Category";
import ShoppingCart     from "./pages/ShoppingCart";
import PaymentForm      from "./pages/PaymentForm";
import ContactUs        from "./pages/ContactUs";
import OrderDetails     from "./pages/OrderDetails";
import { OrderSummary } from "./pages/OrderDetails";
import { ForgotPassword, AboutUs, TermsAndConditions } from "./pages/ForgotPassword";

// ── Global styles + Font Awesome ──
import "./styles/global.css";

function App() {
  // ── GLOBAL CART STATE ──
  // Lives here so ALL pages can read/update it
  const [cartItems, setCartItems] = useState([]);

  // Add item to cart
  const addToCart = (product) => {
    setCartItems(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) {
        // Already in cart → increase qty
        return prev.map(item =>
          item.id === product.id
            ? { ...item, qty: (item.qty || 1) + 1 }
            : item
        );
      }
      // New item
      return [...prev, { ...product, qty: 1 }];
    });
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  // Update quantity
  const updateQty = (id, qty) => {
    setCartItems(prev =>
      prev.map(item => item.id === id ? { ...item, qty } : item)
    );
  };

  return (
    <BrowserRouter>
      {/*
        Layout wraps EVERY page automatically.
        It contains: Topbar, Header, MainNav, RedBar, BrandsRow, Footer.
        We pass cartItems.length so the header cart button shows the right count.
      */}
      <Layout cartCount={cartItems.length}>
        <Routes>

          {/* ── HOME ── */}
          <Route
            path="/"
            element={<Home onAddToCart={addToCart} />}
          />

          {/* ── AUTH ── */}
          <Route path="/login"           element={<Login />} />
          <Route path="/register"        element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* ── ACCOUNT ── */}
          <Route path="/my-account"  element={<MyAccount />} />
          <Route path="/edit-account" element={<EditAccount />} />

          {/* ── SHOP ── */}
          <Route
            path="/category"
            element={<Category onAddToCart={addToCart} />}
          />
          <Route
            path="/cart"
            element={
              <ShoppingCart
                cartItems={cartItems}
                onRemove={removeFromCart}
                onQtyChange={updateQty}
              />
            }
          />
          <Route
            path="/checkout"
            element={<PaymentForm cartItems={cartItems} />}
          />

          {/* ── ORDERS ── */}
          <Route path="/order-details" element={<OrderDetails />} />
          <Route path="/order-summary" element={<OrderSummary />} />

          {/* ── INFO PAGES ── */}
          <Route path="/about"   element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/terms"   element={<TermsAndConditions />} />

          {/* ── 404 ── */}
          <Route
            path="*"
            element={
              <div style={{ textAlign:"center", padding:"80px 20px" }}>
                <h2 style={{ fontFamily:"'Oswald',sans-serif", fontSize:"48px", color:"#cc0000" }}>404</h2>
                <p style={{ color:"#666", marginBottom:"20px" }}>Page not found.</p>
                <a href="/" style={{ color:"#cc0000", fontWeight:"700" }}>← Back to Home</a>
              </div>
            }
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;