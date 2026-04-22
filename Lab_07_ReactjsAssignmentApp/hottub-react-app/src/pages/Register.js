// src/pages/Register.js
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/global.css";

function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ firstName:"", lastName:"", email:"", password:"", confirm:"", newsletter: true });
  const [errors, setErrors] = useState({});
  const [strength, setStrength] = useState(0);

  const update = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
    setErrors(prev => ({ ...prev, [field]: "" }));
    if (field === "password") calcStrength(value);
  };

  const calcStrength = (pw) => {
    let s = 0;
    if (pw.length >= 6)  s++;
    if (pw.length >= 10) s++;
    if (/[A-Z]/.test(pw)) s++;
    if (/[0-9]/.test(pw)) s++;
    if (/[^A-Za-z0-9]/.test(pw)) s++;
    setStrength(s);
  };

  const strengthInfo = [
    { label: "Very Weak", color: "#e74c3c" },
    { label: "Weak",      color: "#e67e22" },
    { label: "Fair",      color: "#f1c40f" },
    { label: "Strong",    color: "#2ecc71" },
    { label: "Very Strong", color: "#27ae60" },
  ];

  const validate = () => {
    const errs = {};
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.firstName)                errs.firstName = "Required";
    if (!form.lastName)                 errs.lastName  = "Required";
    if (!form.email || !emailRe.test(form.email)) errs.email = "Valid email required";
    if (form.password.length < 6)       errs.password  = "Minimum 6 characters";
    if (form.confirm !== form.password) errs.confirm   = "Passwords do not match";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setTimeout(() => navigate("/my-account"), 1500);
  };

  const si = strengthInfo[Math.min(strength - 1, 4)] || strengthInfo[0];

  return (
    <div className="page-ocean">
      <div className="breadcrumb-strip">
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <Link to="/">Home</Link><span className="sep">›</span><span>Create Account</span>
        </div>
      </div>

      <div className="main-card">
        <h1>Create New Account</h1>
        <p style={{ fontSize: "12px", color: "#666", marginBottom: "20px" }}>
          To create a new account, please fill in the required information below.
          Passwords are case sensitive and must be 6 to 20 characters long.
        </p>

        <form onSubmit={handleSubmit} noValidate>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
            <Field label="First Name *" error={errors.firstName}>
              <input className={`field-input ${errors.firstName ? "error":""}`} value={form.firstName} onChange={e=>update("firstName",e.target.value)}/>
            </Field>
            <Field label="Last Name *" error={errors.lastName}>
              <input className={`field-input ${errors.lastName?"error":""}`} value={form.lastName} onChange={e=>update("lastName",e.target.value)}/>
            </Field>
          </div>
          <Field label="Email Address *" error={errors.email}>
            <input type="email" className={`field-input ${errors.email?"error":""}`} value={form.email} onChange={e=>update("email",e.target.value)}/>
          </Field>
          <Field label="Password *" error={errors.password}>
            <input type="password" className={`field-input ${errors.password?"error":""}`} value={form.password} onChange={e=>update("password",e.target.value)}/>
            {form.password && (
              <div style={{ marginTop: "6px" }}>
                <div style={{ height: "5px", background: "#e5e5e5", borderRadius: "3px", overflow: "hidden", width: "200px" }}>
                  <div style={{ height: "100%", width: `${(strength/5)*100}%`, background: si.color, borderRadius: "3px", transition: "width .3s" }}/>
                </div>
                <span style={{ fontSize: "11px", fontWeight: "700", color: si.color }}>{si.label}</span>
              </div>
            )}
          </Field>
          <Field label="Re-enter Password *" error={errors.confirm}>
            <input type="password" className={`field-input ${errors.confirm?"error":""}`} value={form.confirm} onChange={e=>update("confirm",e.target.value)}/>
          </Field>

          <label style={{ display:"flex", alignItems:"center", gap:"8px", fontSize:"12px", color:"#555", cursor:"pointer", marginBottom:"20px" }}>
            <input type="checkbox" checked={form.newsletter} onChange={e=>update("newsletter",e.target.checked)} style={{ accentColor:"#cc0000" }}/>
            Yes, I want to receive email about new products and specials!
          </label>

          <div style={{ display:"flex", gap:"12px", alignItems:"center" }}>
            <button type="submit" className="btn-red">
              <i className="fa fa-user-plus"></i> CREATE ACCOUNT
            </button>
            <Link to="/login" style={{ fontSize:"12px", color:"#888" }}>Already have an account? Sign In</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

function Field({ label, error, children }) {
  return (
    <div style={{ marginBottom: "14px" }}>
      <label style={{ display:"block", fontSize:"12px", fontWeight:"700", color:"#444", marginBottom:"4px" }}>{label}</label>
      {children}
      {error && <div style={{ color:"#cc0000", fontSize:"11px", marginTop:"3px" }}>{error}</div>}
    </div>
  );
}

export default Register;