import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

// Home Page
function Home() {
  return (
    <div style={styles.page}>
      <h2>🏠 Welcome to Our Website</h2>
      <p>Explore our products and learn more about us.</p>
    </div>
  );
}

// About Page
function About() {
  return (
    <div style={styles.page}>
      <h2>ℹ️ About Us</h2>
      <p>
        This website is built using React. It demonstrates routing, components,
        and interactive UI design.
      </p>
    </div>
  );
}

// Contact Page
function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = () => {
    if (!name || !email || !msg) {
      alert("Please fill all fields!");
      return;
    }
    setSuccess("✅ Message Sent Successfully!");
    setName("");
    setEmail("");
    setMsg("");
  };

  return (
    <div style={styles.page}>
      <h2>📞 Contact Us</h2>

      <input
        style={styles.input}
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        style={styles.input}
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <textarea
        style={styles.input}
        placeholder="Message"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
      />

      <button style={styles.btn} onClick={handleSubmit}>
        Submit
      </button>

      {success && <p style={styles.success}>{success}</p>}
    </div>
  );
}

// Products Page
function Products() {
  const [cart, setCart] = useState(0);

  const addToCart = () => {
    setCart(cart + 1);
  };

  return (
    <div style={styles.page}>
      <h2>🛒 Products</h2>

      <h3>Cart Items: {cart}</h3>

      <div style={styles.product}>
        <h3>Product 1</h3>
        <p>High quality product for daily use.</p>
        <button style={styles.btn} onClick={addToCart}>
          Add to Cart
        </button>
      </div>

      <div style={styles.product}>
        <h3>Product 2</h3>
        <p>Reliable and affordable product.</p>
        <button style={styles.btn} onClick={addToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

// 404 Page
function NotFound() {
  return (
    <div style={styles.page}>
      <h2>❌ 404 Page Not Found</h2>
    </div>
  );
}

// Main App
function App() {
  return (
    <BrowserRouter>
      <div>
        {/* NAVBAR */}
        <nav style={styles.nav}>
          <h2 style={{ color: "white" }}>🌐 My Website</h2>

          <div>
            <Link style={styles.link} to="/">Home</Link>
            <Link style={styles.link} to="/about">About</Link>
            <Link style={styles.link} to="/contact">Contact</Link>
            <Link style={styles.link} to="/products">Products</Link>
          </div>
        </nav>

        {/* CONTENT */}
        <div style={styles.container}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

// STYLES
const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#333",
    padding: "15px 30px",
  },
  link: {
    color: "white",
    margin: "0 10px",
    textDecoration: "none",
    fontSize: "18px",
  },
  container: {
    padding: "30px",
    textAlign: "center",
  },
  page: {
    background: "#fff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
    maxWidth: "500px",
    margin: "auto",
  },
  input: {
    display: "block",
    margin: "10px auto",
    padding: "10px",
    width: "80%",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  btn: {
    padding: "10px 20px",
    background: "#667eea",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  product: {
    background: "#f4f4f4",
    padding: "15px",
    margin: "10px",
    borderRadius: "8px",
  },
  success: {
    color: "green",
    marginTop: "10px",
  },
};

export default App;