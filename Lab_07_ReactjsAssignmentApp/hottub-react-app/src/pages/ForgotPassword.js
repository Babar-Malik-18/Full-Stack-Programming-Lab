// src/pages/ForgotPassword.js
import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/global.css";

export function ForgotPassword() {
  const [email, setEmail]     = useState("");
  const [error, setError]     = useState("");
  const [sent,  setSent]      = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !re.test(email)) { setError("Please enter a valid email address"); return; }
    setError("");
    setSent(true);
  };

  return (
    <div className="page-ocean">
      <div className="breadcrumb-strip">
        <div style={{ maxWidth:"860px", margin:"0 auto" }}>
          <Link to="/">Home</Link><span className="sep">›</span><span>Forgot Password</span>
        </div>
      </div>

      <div className="main-card" style={{ maxWidth:"560px" }}>
        <h1>Forget Your Password</h1>
        <div style={{ border:"1px solid #ddd", padding:"20px 24px", background:"#fafafa" }}>
          <div style={{ fontFamily:"'Oswald',sans-serif", fontSize:"14px", fontWeight:"700", marginBottom:"8px" }}>
            User Account Details
          </div>
          <p style={{ fontSize:"12px", color:"#666", marginBottom:"18px" }}>
            Please enter your email address below to retrieve your password.
          </p>

          {sent ? (
            <div className="success-banner">
              <i className="fa fa-check-circle" style={{ color:"#28a745", fontSize:"18px" }}></i>
              <span>Password reset instructions have been sent to your email.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div style={{ marginBottom:"16px" }}>
                <label style={{ display:"block", fontSize:"12px", fontWeight:"700", color:"#444", marginBottom:"4px" }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  className={`field-input ${error ? "error" : ""}`}
                  value={email}
                  onChange={e => { setEmail(e.target.value); setError(""); }}
                  style={{ width:"100%", maxWidth:"320px" }}
                />
                {error && <div style={{ color:"#cc0000", fontSize:"11px", marginTop:"3px" }}>{error}</div>}
              </div>
              <div style={{ display:"flex", gap:"12px", alignItems:"center" }}>
                <button type="submit" className="btn-red">SUBMIT</button>
                <Link to="/login" style={{ fontSize:"12px", color:"#888" }}>← Back to Login</Link>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────
// AboutUs page
// ─────────────────────────────────────────
export function AboutUs() {
  const team = [
    { name:"Jennifer Lawrence", role:"Business Consultant", img:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80" },
    { name:"Jennifer Lawrence", role:"Business Consultant", img:"https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&q=80" },
    { name:"Jennifer Lawrence", role:"Business Consultant", img:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80" },
    { name:"Jennifer Lawrence", role:"Business Consultant", img:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80" },
  ];

  return (
    <div className="page-ocean">
      <div className="breadcrumb-strip">
        <div style={{ maxWidth:"940px", margin:"0 auto" }}>
          <Link to="/">Home</Link><span className="sep">›</span><span>About Us</span>
        </div>
      </div>

      <div className="main-card" style={{ maxWidth:"940px", padding:"0" }}>
        {/* Hero */}
        <div style={{ position:"relative", minHeight:"200px", background:"linear-gradient(135deg,#1a5f87,#2c8ec4)", display:"flex", alignItems:"center", justifyContent:"center", padding:"40px 30px" }}>
          <h1 style={{ fontFamily:"'Oswald',sans-serif", fontSize:"38px", fontWeight:"700", color:"#fff", textAlign:"center", textTransform:"uppercase", letterSpacing:"2px", textShadow:"0 2px 8px rgba(0,0,0,.4)" }}>About Us</h1>
        </div>

        <div style={{ padding:"32px 36px" }}>
          {/* Two-col intro */}
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"30px", marginBottom:"36px" }}>
            <div>
              <div style={{ fontFamily:"'Oswald',sans-serif", fontSize:"20px", fontWeight:"700", color:"#1a1a1a", textTransform:"uppercase", marginBottom:"14px", paddingBottom:"10px", borderBottom:"2px solid #cc0000", display:"inline-block" }}>
                Welcome to the Company
              </div>
              <p style={{ fontSize:"13px", color:"#555", lineHeight:"1.85" }}>
                Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
              </p>
            </div>
            <img src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=500&q=80" alt="About" style={{ width:"100%", borderRadius:"3px", objectFit:"cover", maxHeight:"200px" }}/>
          </div>

          {/* Stats */}
          <div style={{ background:"#cc0000", color:"#fff", display:"grid", gridTemplateColumns:"repeat(4,1fr)", textAlign:"center", padding:"20px 0", marginBottom:"36px" }}>
            {[["15+","Years Experience"],["4,200+","Happy Customers"],["120+","Spa Models"],["50+","Expert Staff"]].map(([n,l]) => (
              <div key={l} style={{ padding:"8px 12px", borderRight:"1px solid rgba(255,255,255,.25)" }}>
                <div style={{ fontFamily:"'Oswald',sans-serif", fontSize:"32px", fontWeight:"700", lineHeight:"1" }}>{n}</div>
                <div style={{ fontSize:"11px", textTransform:"uppercase", letterSpacing:"1px", marginTop:"4px", opacity:".9" }}>{l}</div>
              </div>
            ))}
          </div>

          {/* Team */}
          <div style={{ fontFamily:"'Oswald',sans-serif", fontSize:"20px", fontWeight:"700", color:"#1a1a1a", textTransform:"uppercase", marginBottom:"20px", paddingBottom:"10px", borderBottom:"2px solid #cc0000", display:"inline-block" }}>
            Our Company Members
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"20px", marginTop:"8px" }}>
            {team.map((m, i) => (
              <div key={i} style={{ textAlign:"center" }}>
                <div style={{ width:"110px", height:"110px", borderRadius:"50%", margin:"0 auto 12px", overflow:"hidden", border:"3px solid #eee" }}>
                  <img src={m.img} alt={m.name} style={{ width:"100%", height:"100%", objectFit:"cover" }}/>
                </div>
                <div style={{ fontFamily:"'Oswald',sans-serif", fontSize:"15px", fontWeight:"700", color:"#222", marginBottom:"3px" }}>{m.name}</div>
                <div style={{ fontSize:"11px", color:"#cc0000", fontWeight:"600", textTransform:"uppercase", marginBottom:"8px" }}>{m.role}</div>
                <div style={{ fontSize:"11.5px", color:"#666", lineHeight:"1.6" }}>Proin gravida nibh vel velit auctor aliquet.</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────
// TermsAndConditions page
// ─────────────────────────────────────────
export function TermsAndConditions() {
  const sections = [
    { title:"1. Interpretation", content:[
      "'the Company' means The Edge (Systems) Limited",
      "'the Buyer' means the person or firm ordering, buying, hiring or being loaned goods from the Company.",
      "'the Goods' means the goods or the services, the subject matter of the relevant order.",
      "'the Contract' any contract between the Company and the Buyer incorporating these conditions.",
    ]},
    { title:"2. Risk and title", content:[
      "a) The risk in the products will pass to the customer as soon as they are delivered.",
      "b) The Edge will remain the sole and absolute owner of the goods until full payment has been received.",
      "c) When payment for the products is overdue or the buyer suffers distress or execution.",
      "d) If the buyer remains in possession of the goods, the Edge shall be entitled to recover them.",
    ]},
    { title:"3) Charges", content:[
      "a) All prices advertised are subject to VAT which is payable in addition by the buyer.",
      "b) The Edge reserves the right to amend prices as and when necessary.",
    ]},
    { title:"4) Payment", content:[
      "a) Payment is to be by credit/debit card or cheque.",
      "b) Credit accounts are available to buyers who have completed an Account Application form.",
    ]},
    { title:"5) Delivery", content:[
      "a) All published delivery timescales are subject to availability.",
      "b) Delivery costs are in addition to published prices and will be added at checkout.",
      "c) In the event of damage, the buyer must notify The Edge within three working days.",
    ]},
    { title:"6) Force Majeure", content:[
      "Neither party shall have any liability to the other for any failure or delay in performing its obligations due to circumstances wholly or partly beyond its control.",
    ]},
    { title:"7) Refunds", content:[
      "The Edge will refund any goods returned in their original condition within 14 days of delivery. Delivery charges will not be refunded.",
    ]},
    { title:"8) General", content:[
      "a) No modification or amendment shall be valid unless agreed in writing by both parties.",
      "b) All contracts are to be subject to English law.",
    ]},
  ];

  return (
    <div className="page-ocean">
      <div className="breadcrumb-strip">
        <div style={{ maxWidth:"860px", margin:"0 auto" }}>
          <Link to="/">Home</Link><span className="sep">›</span><span>Terms and Conditions</span>
        </div>
      </div>

      <div className="main-card">
        <h1>Terms and Conditions for Sale</h1>
        <div style={{ border:"1px solid #ddd", padding:"20px 24px" }}>
          <div style={{ fontSize:"13px", fontWeight:"700", color:"#333", marginBottom:"4px" }}>General Terms and Conditions</div>
          <div style={{ fontSize:"12px", color:"#666", marginBottom:"22px" }}>General Terms and conditions for Business, Payment and Delivery for Hot tubs and Spas</div>

          {sections.map(sec => (
            <div key={sec.title} style={{ marginBottom:"22px" }}>
              <div style={{ fontSize:"13px", fontWeight:"700", color:"#1a1a1a", marginBottom:"8px" }}>{sec.title}</div>
              <ul style={{ listStyle:"none", padding:0 }}>
                {sec.content.map((c,i) => (
                  <li key={i} style={{ fontSize:"12px", color:"#555", lineHeight:"1.75", marginBottom:"4px" }}>{c}</li>
                ))}
              </ul>
              <hr style={{ border:"none", borderTop:"1px solid #eee", marginTop:"14px" }}/>
            </div>
          ))}

          <div style={{ background:"#fff8f0", border:"1px solid #f5c6a0", borderRadius:"2px", padding:"14px 16px", fontSize:"12px", color:"#7a4a10", lineHeight:"1.6" }}>
            <i className="fa fa-info-circle" style={{ color:"#e67e22", marginRight:"6px" }}></i>
            By placing an order you agree to these Terms and Conditions. If you have questions, please <Link to="/contact" style={{ color:"#cc0000" }}>contact us</Link>.
          </div>
        </div>
      </div>
    </div>
  );
}