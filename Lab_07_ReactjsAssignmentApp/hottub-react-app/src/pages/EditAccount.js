// src/pages/EditAccount.js
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/global.css";

function EditAccount() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ firstName:"", lastName:"", email:"", currentPw:"", newPw:"", confirmPw:"" });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [strength, setStrength] = useState(0);

  const update = (field, val) => {
    setForm(prev => ({ ...prev, [field]: val }));
    setErrors(prev => ({ ...prev, [field]: "" }));
    if (field === "newPw") calcStrength(val);
  };

  const calcStrength = (pw) => {
    let s = 0;
    if (pw.length >= 6)         s++;
    if (pw.length >= 10)        s++;
    if (/[A-Z]/.test(pw))       s++;
    if (/[0-9]/.test(pw))       s++;
    if (/[^A-Za-z0-9]/.test(pw)) s++;
    setStrength(s);
  };

  const strengthColors = ["#e74c3c","#e67e22","#f1c40f","#2ecc71","#27ae60"];
  const strengthLabels = ["Very Weak","Weak","Fair","Strong","Very Strong"];

  const validate = () => {
    const errs = {};
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.firstName)                       errs.firstName  = "Required";
    if (!form.lastName)                        errs.lastName   = "Required";
    if (!form.email || !emailRe.test(form.email)) errs.email   = "Valid email required";
    if (!form.currentPw)                       errs.currentPw  = "Required";
    if (form.newPw.length < 6)                 errs.newPw      = "Minimum 6 characters";
    if (form.confirmPw !== form.newPw)         errs.confirmPw  = "Passwords do not match";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setSuccess(true);
    setTimeout(() => navigate("/my-account"), 2000);
  };

  const si = Math.min(strength - 1, 4);

  return (
    <div className="page-ocean">
      <div className="breadcrumb-strip">
        <div style={{ maxWidth:"860px", margin:"0 auto" }}>
          <Link to="/">Home</Link><span className="sep">›</span>
          <Link to="/my-account">User Account</Link><span className="sep">›</span>
          <span>Edit profile details</span>
        </div>
      </div>

      <div className="main-card">
        <h1>Edit Profile details</h1>

        <div style={{ border:"1px solid #ddd", padding:"20px 24px 28px", background:"#fafafa" }}>
          <p style={{ fontSize:"12.5px", color:"#555", marginBottom:"5px" }}>
            Please fill the form below to update your Profile details.
          </p>
          <p style={{ fontSize:"11px", color:"#999", marginBottom:"20px" }}>*Required Fields</p>

          <form onSubmit={handleSubmit} noValidate>
            {/* First Name */}
            <FormRow label="First Name *" error={errors.firstName}>
              <input className={`field-input ${errors.firstName?"error":""}`} style={{ width:"240px" }}
                value={form.firstName} onChange={e=>update("firstName",e.target.value)}/>
            </FormRow>

            {/* Last Name */}
            <FormRow label="Last Name *" error={errors.lastName}>
              <input className={`field-input ${errors.lastName?"error":""}`} style={{ width:"240px" }}
                value={form.lastName} onChange={e=>update("lastName",e.target.value)}/>
            </FormRow>

            {/* Email */}
            <FormRow label="Email *" error={errors.email}>
              <input type="email" className={`field-input ${errors.email?"error":""}`} style={{ width:"240px" }}
                value={form.email} onChange={e=>update("email",e.target.value)}/>
            </FormRow>

            <hr style={{ border:"none", borderTop:"1px solid #e0e0e0", margin:"16px 0" }}/>

            {/* Current Password */}
            <FormRow label="Current Password *" error={errors.currentPw}>
              <input type="password" className={`field-input ${errors.currentPw?"error":""}`} style={{ width:"240px" }}
                value={form.currentPw} onChange={e=>update("currentPw",e.target.value)}/>
            </FormRow>

            {/* New Password */}
            <FormRow label="New Password *" error={errors.newPw}>
              <input type="password" className={`field-input ${errors.newPw?"error":""}`} style={{ width:"240px" }}
                value={form.newPw} onChange={e=>update("newPw",e.target.value)}/>
              {form.newPw && (
                <div style={{ marginLeft:"160px", marginTop:"5px" }}>
                  <div style={{ height:"5px", width:"200px", background:"#e5e5e5", borderRadius:"3px", overflow:"hidden" }}>
                    <div style={{ height:"100%", width:`${(strength/5)*100}%`, background: si >= 0 ? strengthColors[si] : "#e74c3c", borderRadius:"3px", transition:"width .3s" }}/>
                  </div>
                  <span style={{ fontSize:"11px", fontWeight:"700", color: si >= 0 ? strengthColors[si] : "#e74c3c" }}>
                    {si >= 0 ? strengthLabels[si] : "Very Weak"}
                  </span>
                </div>
              )}
            </FormRow>

            {/* Confirm Password */}
            <FormRow label="Confirm Password *" error={errors.confirmPw}>
              <input type="password" className={`field-input ${errors.confirmPw?"error":""}`} style={{ width:"240px" }}
                value={form.confirmPw} onChange={e=>update("confirmPw",e.target.value)}/>
            </FormRow>

            {/* Buttons */}
            <div style={{ marginTop:"16px", marginLeft:"160px", display:"flex", alignItems:"center", gap:"14px" }}>
              <button type="submit" className="btn-green">UPDATE DETAILS</button>
              <Link to="/my-account" style={{ fontSize:"12px", color:"#888" }}>Cancel</Link>
            </div>

            {success && (
              <div className="success-banner" style={{ marginTop:"16px" }}>
                <i className="fa fa-check-circle" style={{ color:"#28a745", fontSize:"18px" }}></i>
                Profile updated! Redirecting to My Account…
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

function FormRow({ label, error, children }) {
  return (
    <div style={{ display:"flex", alignItems:"flex-start", marginBottom:"12px" }}>
      <label style={{ minWidth:"160px", fontSize:"12.5px", color:"#444", textAlign:"right", paddingRight:"12px", paddingTop:"9px", flexShrink:0 }}>
        {label}
      </label>
      <div>
        {children}
        {error && <div style={{ color:"#cc0000", fontSize:"11px", marginTop:"3px" }}>{error}</div>}
      </div>
    </div>
  );
}

export default EditAccount;