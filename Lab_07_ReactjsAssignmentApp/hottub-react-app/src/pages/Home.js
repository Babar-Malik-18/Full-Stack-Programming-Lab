// src/pages/Home.js
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/global.css";

// ── Product data ──
const products = [
  { id: 1, name: "Emerald Bay XL TV Spa",       price: "$1,979.00", img: "https://images.unsplash.com/photo-1570798359490-81f9e99e7e6c?w=300&q=80" },
  { id: 2, name: "Cabaret 3 Person Hot Tub",    price: "$699.00",   img: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=300&q=80" },
  { id: 3, name: "Portable Corner Spa 5-Seat",  price: "$1,299.00", img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&q=80" },
  { id: 4, name: "Island Breeze Outdoor Spa",   price: "$2,199.00", img: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=300&q=80" },
  { id: 5, name: "Caldera Spa 7-Person",        price: "$3,499.00", img: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=300&q=80" },
  { id: 6, name: "Oceanic TV Theater Spa",      price: "$2,799.00", img: "https://images.unsplash.com/photo-1570798359490-81f9e99e7e6c?w=300&q=80" },
  { id: 7, name: "HotSpring Jetsetter Spa",     price: "$899.00",   img: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=300&q=80" },
  { id: 8, name: "Artesian Island Spa Deluxe",  price: "$4,199.00", img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&q=80" },
];

// ── Slides for hero ──
const slides = [
  { bg: "#1a5f87", text: "5-7 PERSON SPA", sub: "Shop Now & Save 50%",   btn: "SHOP NOW" },
  { bg: "#2c7a4b", text: "TV THEATER SPA",  sub: "Entertainment + Luxury", btn: "VIEW DEALS" },
  { bg: "#7a2c2c", text: "SAVE 50% TODAY", sub: "Limited Time Offer",     btn: "GET DEAL" },
];

function Home({ onAddToCart }) {
  const [slide, setSlide] = useState(0);
  const [added, setAdded] = useState({});
  const navigate = useNavigate();

  // Auto-rotate slides every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setSlide(s => (s + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer); // cleanup
  }, []);

  const handleAdd = (product) => {
    onAddToCart(product);
    setAdded(prev => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAdded(prev => ({ ...prev, [product.id]: false }));
    }, 1800);
  };

  return (
    <div>
      {/* ── HERO SLIDER ── */}
      <div style={{
        background: slides[slide].bg,
        minHeight: "220px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transition: "background .6s",
        padding: "40px 20px",
        textAlign: "center"
      }}>
        <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "42px", fontWeight: "700", color: "#fff", letterSpacing: "2px" }}>
          {slides[slide].text}
        </h2>
        <p style={{ color: "rgba(255,255,255,.85)", fontSize: "16px", margin: "12px 0 20px" }}>
          {slides[slide].sub}
        </p>
        <button
          onClick={() => navigate("/category")}
          style={{ background: "#cc0000", color: "#fff", border: "none", padding: "11px 28px", fontSize: "14px", fontWeight: "700", cursor: "pointer", letterSpacing: "1px" }}
        >
          {slides[slide].btn}
        </button>
        {/* Dots */}
        <div style={{ display: "flex", gap: "8px", marginTop: "20px" }}>
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              style={{
                width: "10px", height: "10px", borderRadius: "50%",
                border: "none", cursor: "pointer",
                background: i === slide ? "#fff" : "rgba(255,255,255,.4)"
              }}
            />
          ))}
        </div>
      </div>

      {/* ── PROMO STRIP ── */}
      <div style={{ display: "flex", background: "#fff", borderBottom: "2px solid #eee" }}>
        {["5-7 Person Spa", "TV Theater Spa", "SAVE 50% OFF"].map((txt, i) => (
          <div
            key={i}
            onClick={() => navigate("/category")}
            style={{
              flex: 1, padding: "14px 20px", textAlign: "center", cursor: "pointer",
              fontFamily: "'Oswald', sans-serif", fontSize: "15px", fontWeight: "700",
              color: i === 2 ? "#fff" : "#333",
              background: i === 2 ? "#cc0000" : "#fff",
              borderRight: i < 2 ? "1px solid #eee" : "none",
              transition: "background .2s"
            }}
          >
            {txt}
          </div>
        ))}
      </div>

      {/* ── PRODUCTS GRID ── */}
      <div className="page-ocean" style={{ padding: "26px 20px 50px" }}>
        <div style={{
          maxWidth: "920px", margin: "0 auto",
          display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "14px"
        }}>
          {products.map(product => (
            <div
              key={product.id}
              style={{
                background: "#fff", border: "1px solid #e8e8e8",
                padding: "14px", textAlign: "center",
                transition: "box-shadow .2s, transform .2s",
                cursor: "pointer"
              }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 4px 18px rgba(0,0,0,.12)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "none"; }}
            >
              <img
                src={product.img}
                alt={product.name}
                onClick={() => navigate("/product")}
                style={{ width: "100%", height: "120px", objectFit: "cover", marginBottom: "10px" }}
              />
              <h6 style={{ fontSize: "11.5px", fontWeight: "700", color: "#333", textTransform: "uppercase", marginBottom: "6px", lineHeight: "1.4" }}>
                {product.name}
              </h6>
              <div style={{ color: "#cc0000", fontSize: "16px", fontWeight: "700", marginBottom: "10px" }}>
                {product.price}
              </div>
              <button
                onClick={() => handleAdd(product)}
                style={{
                  width: "100%", border: "none", padding: "7px",
                  fontSize: "11px", fontWeight: "700", textTransform: "uppercase",
                  cursor: "pointer", display: "flex", alignItems: "center",
                  justifyContent: "center", gap: "6px",
                  background: added[product.id] ? "#28a745" : "#cc0000",
                  color: "#fff", transition: "background .2s"
                }}
              >
                <i className={`fa ${added[product.id] ? "fa-check" : "fa-shopping-cart"}`}></i>
                {added[product.id] ? "ADDED!" : "ADD TO CART"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;