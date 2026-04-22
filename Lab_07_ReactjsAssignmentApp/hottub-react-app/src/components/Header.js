// src/components/Header.js
import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header({ cartCount = 0 }) {
  return (
    <header className="site-header">
      {/* LOGO */}
      <Link to="/" className="logo">
        <span className="logo-brand">
          HOTSPRING<sup>®</sup>
        </span>
        <span className="logo-tagline">Portable Spas</span>
      </Link>

      {/* CART BUTTON */}
      <div className="header-right">
        <Link to="/cart" className="cart-btn">
          <i className="fa fa-shopping-cart"></i>
          My Cart: &nbsp;{cartCount} Item(s)
        </Link>
        <select className="header-dropdown">
          <option>▼</option>
        </select>
      </div>
    </header>
  );
}

export default Header;