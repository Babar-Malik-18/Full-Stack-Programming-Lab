// src/pages/Login.js
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/global.css";

function Login() {
  const navigate = useNavigate();

  // Form state
  const [email,    setEmail]    = useState("");
  const [password, setPassword] = useState("");
  const [errors,   setErrors]   = useState({});

  const validate = () => {
    const newErrors = {};
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRe.test(email)) newErrors.email = "Valid email required";
    if (!password)                       newErrors.password = "Password is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    // Success → go to My Account
    navigate("/my-account");
  };

  return (
    <div className="page-ocean">
      {/* Breadcrumb */}
      <div className="breadcrumb-strip">
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <Link to="/">Home</Link><span className="sep">›</span><span>Login</span>
        </div>
      </div>

      <div style={{ maxWidth: "860px", margin: "22px auto 0", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>

        {/* ── LEFT: Login ── */}
        <div style={{ background: "#fff", padding: "28px", boxShadow: "0 2px 16px rgba(0,0,0,.1)" }}>
          <h2 style={{ fontFamily: "'Open Sans'", fontSize: "18px", fontWeight: "700", marginBottom: "8px" }}>User Login Details</h2>
          <p style={{ fontSize: "12px", color: "#666", marginBottom: "20px" }}>
            If you have an account with us, please log in.
          </p>

          <form onSubmit={handleSubmit} noValidate>
            <Field label="Email Address *" error={errors.email}>
              <input
                type="email" className={`field-input ${errors.email ? "error" : ""}`}
                value={email} onChange={e => { setEmail(e.target.value); setErrors(prev => ({ ...prev, email: "" })); }}
              />
            </Field>
            <Field label="Password *" error={errors.password}>
              <input
                type="password" className={`field-input ${errors.password ? "error" : ""}`}
                value={password} onChange={e => { setPassword(e.target.value); setErrors(prev => ({ ...prev, password: "" })); }}
              />
            </Field>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "18px" }}>
              <button type="submit" className="btn-red">
                <i className="fa fa-sign-in-alt"></i> SIGN IN
              </button>
              <Link to="/forgot-password" style={{ fontSize: "12px", color: "#cc0000" }}>
                Forgot your password?
              </Link>
            </div>
          </form>
        </div>

        {/* ── RIGHT: New Customer ── */}
        <div style={{ background: "#fff", padding: "28px", boxShadow: "0 2px 16px rgba(0,0,0,.1)" }}>
          <h2 style={{ fontFamily: "'Open Sans'", fontSize: "18px", fontWeight: "700", marginBottom: "8px" }}>New Customer</h2>
          <p style={{ fontSize: "12px", color: "#666", marginBottom: "20px" }}>
            Creating an account is quick and easy. Once you've registered, you'll be able to:
          </p>
          <ul style={{ fontSize: "12px", color: "#555", paddingLeft: "16px", marginBottom: "20px", lineHeight: "2" }}>
            <li>Track your orders</li>
            <li>Save your addresses</li>
            <li>Manage your wishlist</li>
            <li>Get exclusive deals</li>
          </ul>
          <Link to="/register" className="btn-red" style={{ display: "inline-flex" }}>
            <i className="fa fa-user-plus"></i> CREATE NEW ACCOUNT
          </Link>
        </div>

      </div>
    </div>
  );
}

// Reusable field wrapper
function Field({ label, error, children }) {
  return (
    <div style={{ marginBottom: "14px" }}>
      <label style={{ display: "block", fontSize: "12px", fontWeight: "700", color: "#444", marginBottom: "4px" }}>
        {label}
      </label>
      {children}
      {error && <div style={{ color: "#cc0000", fontSize: "11px", marginTop: "3px" }}>{error}</div>}
    </div>
  );
}

export default Login;