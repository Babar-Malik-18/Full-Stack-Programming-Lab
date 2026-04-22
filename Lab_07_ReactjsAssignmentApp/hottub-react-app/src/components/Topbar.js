// src/components/Topbar.js
import "../styles/Topbar.css";

function Topbar() {
  return (
    <div className="topbar">
      <span>
        Call for Customer support:{" "}
        <span className="phone">020 38989565</span>
      </span>
      <div className="topbar-right">
        <a href="/my-account">My Account</a>
        <a href="#">Wishlist</a>
        <a href="/cart">To Checkout</a>
      </div>
    </div>
  );
}

export default Topbar;