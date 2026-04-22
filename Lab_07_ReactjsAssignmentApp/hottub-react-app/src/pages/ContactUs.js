// src/pages/ContactUs.js
import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/global.css";

function ContactUs() {
  const [form, setForm]       = useState({ firstName:"", subject:"", email:"", message:"" });
  const [errors, setErrors]   = useState({});
  const [submitted, setSubmitted] = useState(false);

  const update = (field, val) => {
    setForm(prev => ({ ...prev, [field]: val }));
    setErrors(prev => ({ ...prev, [field]: "" }));
  };

  const validate = () => {
    const errs = {};
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.firstName)                    errs.firstName = "Required";
    if (!form.subject)                      errs.subject   = "Required";
    if (!form.email || !emailRe.test(form.email)) errs.email = "Valid email required";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setSubmitted(true);
  };

  return (
    <div className="page-ocean">
      <div className="breadcrumb-strip">
        <div style={{ maxWidth:"940px", margin:"0 auto" }}>
          <Link to="/">Home</Link><span className="sep">›</span>
          <a href="#">Customer Support</a><span className="sep">›</span>
          <span>Contact Us</span>
        </div>
      </div>

      <div className="main-card" style={{ maxWidth:"940px" }}>
        {/* Red hero bar */}
        <div style={{ background:"#cc0000", padding:"18px 28px", display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:"10px", margin:"-26px -30px 28px" }}>
          <h1 style={{ fontFamily:"'Oswald',sans-serif", fontSize:"24px", fontWeight:"700", color:"#fff", textTransform:"uppercase" }}>Contact Us</h1>
          <div style={{ background:"rgba(255,255,255,.15)", border:"1px solid rgba(255,255,255,.3)", color:"#fff", padding:"8px 18px", fontSize:"14px", fontWeight:"700", display:"flex", alignItems:"center", gap:"8px" }}>
            <i className="fa fa-phone" style={{ fontSize:"18px" }}></i> Call Us: 020 78989845
          </div>
        </div>

        {/* 3 info boxes */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"20px", marginBottom:"28px" }}>
          {[
            { icon:"fa-headset",  title:"Online Sales & Customer Support", text:"Mon–Fri 9AM–6PM EST\nsupport@hotspring.com" },
            { icon:"fa-store",    title:"Retail Store Location",            text:"5000N. Ford Avenue\nNew York, NY 20145\n888.123.1234" },
            { icon:"fa-tools",    title:"Services",                         text:"Installation & maintenance.\nCall: 020 38989565" },
          ].map(box => (
            <div key={box.title} style={{ border:"1px solid #eee", padding:"18px", textAlign:"center", borderRadius:"2px" }}>
              <div style={{ width:"52px", height:"52px", borderRadius:"50%", background:"#cc0000", color:"#fff", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"22px", margin:"0 auto 12px" }}>
                <i className={`fa ${box.icon}`}></i>
              </div>
              <h5 style={{ fontFamily:"'Oswald',sans-serif", fontSize:"13px", fontWeight:"700", textTransform:"uppercase", color:"#222", marginBottom:"6px" }}>{box.title}</h5>
              <p style={{ fontSize:"12px", color:"#666", lineHeight:"1.7", whiteSpace:"pre-line" }}>{box.text}</p>
            </div>
          ))}
        </div>

        {/* Form + Location side by side */}
        <div style={{ display:"grid", gridTemplateColumns:"1fr 300px", gap:"28px" }}>
          <div>
            <div className="section-title">Contact Our Customer Support</div>
            {submitted ? (
              <div className="success-banner">
                <i className="fa fa-check-circle" style={{ color:"#28a745", fontSize:"20px" }}></i>
                <span>Thank you! Your message has been sent. We'll respond within 24 hours.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"12px" }}>
                  <Field label="First Name *" error={errors.firstName}>
                    <input className={`field-input ${errors.firstName?"error":""}`} value={form.firstName} onChange={e=>update("firstName",e.target.value)}/>
                  </Field>
                  <Field label="Subject *" error={errors.subject}>
                    <input className={`field-input ${errors.subject?"error":""}`} value={form.subject} onChange={e=>update("subject",e.target.value)}/>
                  </Field>
                </div>
                <Field label="Email *" error={errors.email}>
                  <input type="email" className={`field-input ${errors.email?"error":""}`} value={form.email} onChange={e=>update("email",e.target.value)}/>
                </Field>
                <Field label="Your Message">
                  <textarea className="field-input" rows="5" style={{ resize:"vertical" }} value={form.message} onChange={e=>update("message",e.target.value)}/>
                </Field>
                <button type="submit" className="btn-red">SUBMIT</button>
              </form>
            )}
          </div>

          <div>
            <div className="section-title">Retail Store Location</div>
            {[1,2].map(n => (
              <div key={n} style={{ border:"1px solid #eee", padding:"16px", borderRadius:"2px", marginBottom:"14px" }}>
                <h6 style={{ fontFamily:"'Oswald',sans-serif", fontSize:"13px", fontWeight:"700", textTransform:"uppercase", color:"#222", marginBottom:"8px", display:"flex", alignItems:"center", gap:"7px" }}>
                  <i className="fa fa-map-marker-alt" style={{ color:"#cc0000" }}></i> Hottub Store – Location {n}
                </h6>
                <p style={{ fontSize:"12px", color:"#555", lineHeight:"1.8" }}>
                  5000N. Ford Avenue<br/>New York, NY 20145<br/>888.123.1234
                </p>
              </div>
            ))}
            <div style={{ background:"#e0e8f0", height:"160px", display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column", gap:"6px", color:"#7a9ab5", borderRadius:"2px" }}>
              <i className="fa fa-map" style={{ fontSize:"32px" }}></i>
              <span style={{ fontSize:"12px", fontWeight:"600" }}>Interactive Map</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({ label, error, children }) {
  return (
    <div style={{ marginBottom:"14px" }}>
      <label style={{ display:"block", fontSize:"12px", fontWeight:"700", color:"#444", marginBottom:"4px" }}>{label}</label>
      {children}
      {error && <div style={{ color:"#cc0000", fontSize:"11px", marginTop:"3px" }}>{error}</div>}
    </div>
  );
}

export default ContactUs;