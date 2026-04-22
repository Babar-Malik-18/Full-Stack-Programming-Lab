// src/pages/PaymentForm.js
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/global.css";

function PaymentForm({ cartItems = [] }) {
  const navigate = useNavigate();
  const [billing, setBilling]   = useState({ fn:"", ln:"", email:"", phone:"", address:"", city:"New York", state:"New York", zip:"", country:"United States" });
  const [shipping, setShipping] = useState({ fn:"", ln:"", email:"", phone:"", address:"", city:"New York", state:"New York", zip:"", country:"United States" });
  const [card, setCard]         = useState({ type:"", number:"", cvv:"" });
  const [shipDiff, setShipDiff] = useState(false);
  const [tcChecked, setTc]      = useState(false);
  const [errors, setErrors]     = useState({});
  const [submitted, setSubmitted] = useState(false);

  const total = cartItems.reduce((s, i) => s + (parseFloat(i.price?.replace(/[^0-9.]/g,"")) || 699), 0) || 699;

  const fmtCard = (val) => val.replace(/\D/g,"").substring(0,16).replace(/(.{4})/g,"$1 ").trim();

  const validate = () => {
    const errs = {};
    const em = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!billing.fn)                    errs.bFn    = "Required";
    if (!billing.ln)                    errs.bLn    = "Required";
    if (!billing.email||!em.test(billing.email)) errs.bEm = "Valid email required";
    if (!billing.phone)                 errs.bPh    = "Required";
    if (!billing.address)               errs.bAd    = "Required";
    if (!billing.zip)                   errs.bZp    = "Required";
    if (!card.type)                     errs.cTy    = "Required";
    if (card.number.replace(/\s/g,"").length < 15) errs.cNu = "Valid card required";
    if (card.cvv.length < 3)            errs.cCv    = "3-4 digit CVV";
    if (!tcChecked)                     errs.tc     = "Please accept T&C";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setSubmitted(true);
    setTimeout(() => navigate("/order-summary"), 2200);
  };

  const clr = (key) => setErrors(prev => ({ ...prev, [key]: "" }));
  const fi = (hasErr) => `field-input${hasErr ? " error" : ""}`;

  if (submitted) {
    return (
      <div className="page-ocean" style={{ display:"flex", alignItems:"center", justifyContent:"center", minHeight:"400px" }}>
        <div style={{ background:"#fff", padding:"40px", textAlign:"center", boxShadow:"0 2px 16px rgba(0,0,0,.1)", borderRadius:"2px" }}>
          <i className="fa fa-check-circle" style={{ fontSize:"56px", color:"#28a745", display:"block", marginBottom:"16px" }}></i>
          <h2 style={{ fontFamily:"'Oswald',sans-serif", fontSize:"24px", marginBottom:"10px" }}>Order Placed!</h2>
          <p style={{ color:"#666", fontSize:"13px" }}>Redirecting to your order summary…</p>
        </div>
      </div>
    );
  }

  return (
    <div className="page-ocean">
      <div className="breadcrumb-strip">
        <div style={{ maxWidth:"940px", margin:"0 auto" }}>
          <Link to="/">Home</Link><span className="sep">›</span><span>Payments</span>
        </div>
      </div>

      <div style={{ background:"#fff", maxWidth:"940px", margin:"22px auto 0", boxShadow:"0 2px 16px rgba(0,0,0,.1)" }}>
        <h1 style={{ fontFamily:"'Open Sans'", fontSize:"22px", fontWeight:"700", color:"#1a1a1a", padding:"24px 28px 0" }}>Secure Checkouts</h1>
        <div style={{ background:"#f5f5f5", borderBottom:"1px solid #e0e0e0", borderTop:"1px solid #e0e0e0", padding:"10px 28px", fontSize:"13px", fontWeight:"700", color:"#444", margin:"14px 0 0" }}>
          Payment Information
        </div>

        <form onSubmit={handleSubmit} noValidate>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"0" }}>

            {/* ── LEFT: Billing ── */}
            <div style={{ padding:"20px 24px 24px 28px", borderRight:"1px solid #e8e8e8" }}>
              <StepHead num="1" title="Billing Address"/>

              {[
                ["First Name *", "bFn",  billing.fn,    v=>setBilling(b=>({...b,fn:v}))],
                ["Last Name *",  "bLn",  billing.ln,    v=>setBilling(b=>({...b,ln:v}))],
                ["Email *",      "bEm",  billing.email, v=>setBilling(b=>({...b,email:v}))],
                ["Phone *",      "bPh",  billing.phone, v=>setBilling(b=>({...b,phone:v}))],
                ["Address *",    "bAd",  billing.address,v=>setBilling(b=>({...b,address:v}))],
                ["Zip Code *",   "bZp",  billing.zip,   v=>setBilling(b=>({...b,zip:v}))],
              ].map(([label,key,val,onChange]) => (
                <CheckoutField key={key} label={label} error={errors[key]}>
                  <input type={key==="bEm"?"email":"text"} className={fi(errors[key])} style={{ width:"100%" }}
                    value={val} onChange={e=>{onChange(e.target.value);clr(key);}}/>
                </CheckoutField>
              ))}

              <CheckoutField label="City *">
                <select className="field-input" value={billing.city} onChange={e=>setBilling(b=>({...b,city:e.target.value}))}>
                  {["New York","Los Angeles","Chicago","Houston"].map(c=><option key={c}>{c}</option>)}
                </select>
              </CheckoutField>
              <CheckoutField label="State *">
                <input className="field-input" style={{ width:"100%" }} value={billing.state} onChange={e=>setBilling(b=>({...b,state:e.target.value}))}/>
              </CheckoutField>
              <CheckoutField label="Country *">
                <select className="field-input" value={billing.country} onChange={e=>setBilling(b=>({...b,country:e.target.value}))}>
                  {["United States","Canada","United Kingdom"].map(c=><option key={c}>{c}</option>)}
                </select>
              </CheckoutField>

              {/* Ship to different address */}
              <label style={{ display:"flex", alignItems:"center", gap:"8px", fontSize:"12px", color:"#cc0000", cursor:"pointer", marginTop:"14px" }}>
                <input type="checkbox" checked={shipDiff} onChange={e=>setShipDiff(e.target.checked)} style={{ accentColor:"#cc0000" }}/>
                Ship to a different address
              </label>

              {/* Shipping form (shown if checked) */}
              {shipDiff && (
                <div style={{ borderTop:"1px solid #eee", paddingTop:"16px", marginTop:"14px" }}>
                  <div style={{ fontSize:"13px", fontWeight:"700", color:"#333", marginBottom:"12px" }}>Shipping Address</div>
                  {[
                    ["First Name *", shipping.fn,    v=>setShipping(s=>({...s,fn:v}))],
                    ["Last Name *",  shipping.ln,    v=>setShipping(s=>({...s,ln:v}))],
                    ["Email *",      shipping.email, v=>setShipping(s=>({...s,email:v}))],
                    ["Phone *",      shipping.phone, v=>setShipping(s=>({...s,phone:v}))],
                    ["Address *",    shipping.address,v=>setShipping(s=>({...s,address:v}))],
                    ["Zip Code *",   shipping.zip,   v=>setShipping(s=>({...s,zip:v}))],
                  ].map(([label,val,onChange]) => (
                    <CheckoutField key={label} label={label}>
                      <input className="field-input" style={{ width:"100%" }} value={val} onChange={e=>onChange(e.target.value)}/>
                    </CheckoutField>
                  ))}
                </div>
              )}
            </div>

            {/* ── RIGHT: Card + Review ── */}
            <div style={{ padding:"20px 28px 24px 24px" }}>
              <StepHead num="2" title="Card Details"/>

              <CheckoutField label="Card Type *" error={errors.cTy}>
                <input className={fi(errors.cTy)} style={{ width:"100%" }} placeholder="Master Card"
                  value={card.type} onChange={e=>{setCard(c=>({...c,type:e.target.value}));clr("cTy");}}/>
              </CheckoutField>

              <CheckoutField label="Card Number *" error={errors.cNu}>
                <input className={fi(errors.cNu)} style={{ width:"100%" }} placeholder="1234 5678 9123 4567" maxLength={19}
                  value={card.number} onChange={e=>{setCard(c=>({...c,number:fmtCard(e.target.value)}));clr("cNu");}}/>
              </CheckoutField>

              <CheckoutField label="Expiration *">
                <div style={{ display:"flex", gap:"5px" }}>
                  <select className="field-input" style={{ flex:1 }}>
                    {["01","02","03","04","05","06","07","08","09","10","11","12"].map(m=><option key={m}>{m}</option>)}
                  </select>
                  <select className="field-input" style={{ flex:2 }}>
                    {["January","February","March","April","May","June","July","August","September","October","November","December"].map(m=><option key={m}>{m}</option>)}
                  </select>
                  <select className="field-input" style={{ flex:1 }}>
                    {["2025","2026","2027","2028","2029","2030"].map(y=><option key={y}>{y}</option>)}
                  </select>
                </div>
              </CheckoutField>

              <CheckoutField label="Secure Code *" error={errors.cCv}>
                <input type="password" className={fi(errors.cCv)} style={{ width:"120px" }} maxLength={4} placeholder="•••"
                  value={card.cvv} onChange={e=>{setCard(c=>({...c,cvv:e.target.value}));clr("cCv");}}/>
              </CheckoutField>

              <p style={{ fontSize:"11px", color:"#888", marginBottom:"10px", lineHeight:"1.6" }}>
                <i className="fa fa-info-circle" style={{ color:"#bbb", marginRight:"4px" }}></i>
                Note: Please ensure the billing address matches your credit card billing address.
              </p>

              <label style={{ display:"flex", alignItems:"center", gap:"7px", fontSize:"12px", color:"#555", cursor:"pointer" }}>
                <input type="checkbox" checked={tcChecked} onChange={e=>{setTc(e.target.checked);clr("tc");}} style={{ accentColor:"#cc0000" }}/>
                I Accept <Link to="/terms" style={{ color:"#cc0000", marginLeft:"4px" }}>terms and Conditions</Link>
              </label>
              {errors.tc && <div style={{ color:"#cc0000", fontSize:"11px", marginTop:"4px" }}>{errors.tc}</div>}

              {/* Step 3: Review */}
              <hr style={{ border:"none", borderTop:"1px solid #e8e8e8", margin:"20px 0 16px" }}/>
              <StepHead num="3" title="Review Your Order"/>

              <table style={{ width:"100%", borderCollapse:"collapse" }}>
                <thead>
                  <tr style={{ borderBottom:"1px solid #e0e0e0" }}>
                    {["Item name","Price","Qty","Total"].map(h => (
                      <th key={h} style={{ fontSize:"11.5px", color:"#777", fontWeight:"700", textTransform:"uppercase", padding:"5px 0", textAlign: h==="Item name" ? "left" : "right" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom:"1px solid #f0f0f0" }}>
                    <td style={{ padding:"9px 0", fontSize:"12.5px" }}>XS SCYVA X SERIES 119</td>
                    <td style={{ padding:"9px 0", textAlign:"right", fontSize:"12.5px" }}>$699</td>
                    <td style={{ padding:"9px 0", textAlign:"right", fontSize:"12.5px" }}>1</td>
                    <td style={{ padding:"9px 0", textAlign:"right", fontSize:"12.5px" }}>$699</td>
                  </tr>
                </tbody>
              </table>

              <div style={{ display:"flex", justifyContent:"space-between", padding:"10px 0 14px", fontSize:"13px", fontWeight:"700" }}>
                <span style={{ color:"#555" }}>Total with shipping:</span>
                <span style={{ color:"#333" }}>${total.toFixed(2)}</span>
              </div>

              <div style={{ display:"flex", alignItems:"center", justifyContent:"flex-end", gap:"10px" }}>
                <i className="fa fa-lock" style={{ fontSize:"22px", color:"#aaa" }}></i>
                <button type="submit" className="btn-green" style={{ fontSize:"13px" }}>
                  Place Your Order <i className="fa fa-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div style={{ borderTop:"2px solid #e8e8e8", padding:"14px 28px", display:"flex", justifyContent:"space-between", alignItems:"center", background:"#fafafa" }}>
            <div style={{ fontSize:"12.5px", color:"#555" }}>
              Cart summary ({cartItems.length || 2} items) Total: <strong style={{ fontSize:"15px", color:"#1a1a1a" }}>${total.toFixed(2)}</strong>
            </div>
            <div style={{ display:"flex", gap:"10px" }}>
              <Link to="/cart" style={{ background:"none", border:"1px solid #bbb", color:"#555", padding:"7px 16px", fontSize:"12px", fontWeight:"600", textTransform:"uppercase", textDecoration:"none", display:"inline-flex", alignItems:"center", gap:"5px" }}>
                <i className="fa fa-arrow-left"></i> Continue shopping
              </Link>
              <button type="submit" className="btn-red" style={{ fontSize:"12px" }}>
                <i className="fa fa-lock"></i> Proceed to checkout
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

function StepHead({ num, title }) {
  return (
    <div style={{ fontSize:"15px", fontWeight:"700", color:"#333", marginBottom:"16px" }}>
      <span style={{ color:"#cc0000", fontSize:"17px", fontWeight:"700", fontStyle:"italic", marginRight:"6px" }}>Step {num}.</span>
      <span style={{ color:"#555", fontWeight:"400", fontSize:"14px" }}>{title}</span>
    </div>
  );
}

function CheckoutField({ label, error, children }) {
  return (
    <div style={{ display:"grid", gridTemplateColumns:"110px 1fr", alignItems:"start", gap:"8px", marginBottom:"9px" }}>
      <label style={{ fontSize:"12px", color:"#555", textAlign:"right", paddingTop:"8px" }}>{label}</label>
      <div>
        {children}
        {error && <div style={{ color:"#cc0000", fontSize:"11px", marginTop:"2px" }}>{error}</div>}
      </div>
    </div>
  );
}

export default PaymentForm;