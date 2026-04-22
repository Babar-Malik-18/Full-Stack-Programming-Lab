// src/components/Footer.js
import { useState } from "react";

function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email) {
      alert("Subscribed! Thank you.");
      setEmail("");
    }
  };

  return (
    <footer style={{ background: "#222", color: "#aaa", padding: "32px 20px 20px" }}>
      <div style={{
        maxWidth: "1100px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "24px"
      }}>

        {/* Contact */}
        <div>
          <h6 style={headStyle}>CONTACT US</h6>
          <p style={pStyle}>yoursitename.com</p>
          <p style={{ ...pStyle, fontWeight: "700" }}>CALL 24/7: 888 - 201 - 8899</p>
          <p style={pStyle}>
            Your Address:<br/>Street<br/>
            State &amp; Zip Code<br/>City &amp; Country
          </p>
          <p style={{ ...pStyle, marginBottom: "14px" }}>
            Email: servicemail@yoursitename.com
          </p>
          {/* Social icons */}
          <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
            {["twitter", "facebook-f", "linkedin-in", "google-plus-g", "youtube", "pinterest-p"].map(icon => (
              <a key={icon} href="#" style={socialStyle}>
                <i className={`fab fa-${icon}`}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Information */}
        <div>
          <h6 style={headStyle}>INFORMATION</h6>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {[
              ["About Us", "/about"],
              ["Customer Service", "#"],
              ["Privacy Policy", "#"],
              ["Site Map", "#"],
              ["Search Terms", "#"],
              ["Contact Us", "/contact"],
            ].map(([label, href]) => (
              <li key={label} style={{ marginBottom: "7px" }}>
                <a href={href} style={linkStyle}>{label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* My Account */}
        <div>
          <h6 style={headStyle}>MY ACCOUNT</h6>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {[
              ["Sign In", "/login"],
              ["View Cart", "/cart"],
              ["My Wishlist", "#"],
            ].map(([label, href]) => (
              <li key={label} style={{ marginBottom: "7px" }}>
                <a href={href} style={linkStyle}>{label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h6 style={headStyle}>SIGNUP FOR A NEWS LETTER</h6>
          <p style={{ fontSize: "11px", marginBottom: "8px" }}>SIGN UP FOR OUR NEWS LETTER:</p>
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "100%", background: "#333", border: "1px solid #555",
              color: "#ddd", padding: "7px 10px", fontSize: "12px",
              marginBottom: "8px", outline: "none", fontFamily: "inherit"
            }}
          />
          <button
            onClick={handleSubscribe}
            style={{
              background: "#cc0000", color: "#fff", border: "none",
              padding: "6px 16px", fontSize: "11px", fontWeight: "700",
              textTransform: "uppercase", cursor: "pointer"
            }}
          >
            Subscribe
          </button>

          <p style={{ fontSize: "11px", color: "#777", marginTop: "14px", fontWeight: "700" }}>
            PAYMENT SOLUTIONS
          </p>
          <div style={{ marginTop: "6px" }}>
            <span style={{ ...badgeStyle, background: "#1a1a8c", color: "#fff" }}>VISA</span>
            <span style={{ ...badgeStyle, background: "#c00", color: "#fff" }}>MC</span>
            <span style={{ ...badgeStyle, background: "#2671b2", color: "#fff" }}>AMEX</span>
            <span style={{ ...badgeStyle, background: "#fff", color: "#003087", border: "1px solid #003087" }}>PayPal</span>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div style={{
        textAlign: "center", color: "#666", fontSize: "11px",
        paddingTop: "18px", marginTop: "22px", borderTop: "1px solid #333"
      }}>
        © 2014 Hottubspaservice.com. All Rights Reserved.
      </div>
    </footer>
  );
}

// ── Style helpers (keeps JSX clean) ──
const headStyle = {
  fontFamily: "'Oswald', sans-serif", fontSize: "13px", fontWeight: "700",
  textTransform: "uppercase", color: "#fff", letterSpacing: "1px", marginBottom: "14px"
};
const pStyle = { fontSize: "12px", marginBottom: "5px" };
const linkStyle = { color: "#aaa", textDecoration: "none", fontSize: "12px" };
const socialStyle = {
  display: "inline-flex", width: "28px", height: "28px",
  background: "#3a3a3a", borderRadius: "50%", alignItems: "center",
  justifyContent: "center", color: "#bbb", fontSize: "12px"
};
const badgeStyle = {
  display: "inline-block", padding: "3px 9px", borderRadius: "2px",
  fontSize: "10px", fontWeight: "700", marginRight: "4px", marginTop: "4px"
};

export default Footer;