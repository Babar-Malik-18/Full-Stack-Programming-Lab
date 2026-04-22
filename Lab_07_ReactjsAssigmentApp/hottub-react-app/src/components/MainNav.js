// src/components/MainNav.js
import { Link, useLocation } from "react-router-dom";
import "../styles/MainNav.css";

function MainNav() {
  const location = useLocation();

  // helper: is this the current page?
  const isActive = (path) => location.pathname === path ? "active" : "";

  return (
    <nav className="main-nav">
      <ul>
        <li><Link to="/"         className={isActive("/")}>HOME</Link></li>
        <li><Link to="/category" className={isActive("/category")}>PRODUCTS</Link></li>
        <li><Link to="#"         className="">SPECIAL OFFERS</Link></li>
        <li><Link to="#"         className="">CUSTOM</Link></li>
      </ul>
    </nav>
  );
}

export default MainNav;