// src/pages/OrderDetails.js
import { Link } from "react-router-dom";
import "../styles/global.css";

const orderItems = [
  { name:"Five person hottube spa with green light inside", qty:1, total:"$699.00" },
  { name:"Five person hottube spa with green light inside", qty:1, total:"$699.00" },
];

function OrderDetails() {
  return (
    <div className="page-ocean">
      <div className="breadcrumb-strip">
        <div style={{ maxWidth:"860px", margin:"0 auto" }}>
          <Link to="/">Home</Link><span className="sep">›</span>
          <Link to="/my-account">User Account</Link><span className="sep">›</span>
          <span>Order details</span>
        </div>
      </div>

      <div className="main-card">
        <h1>Order Details</h1>

        {/* Status banner */}
        <div style={{ background:"#f9f9f9", border:"1px solid #e8e8e8", padding:"12px 16px", fontSize:"12.5px", color:"#555", marginBottom:"22px" }}>
          Order <a href="#" style={{ color:"#2980b9", fontWeight:"700" }}>#304</a> was placed on{" "}
          <span style={{ color:"#2980b9", fontWeight:"700" }}>December 21th, 2014</span> and currently is on{" "}
          <span style={{ color:"#cc0000", fontWeight:"700" }}>hold</span>.
        </div>

        {/* Order items */}
        <div className="section-title">Yor Order Details</div>
        <OrderTable items={orderItems} />

        {/* Bank details */}
        <div style={{ margin:"28px 0" }}>
          <div className="section-title">Yor Bank details</div>
          <table style={{ borderCollapse:"collapse" }}>
            {[["Bank :","Your Bank Name"],["Acc# :","December 21 2014"],["BIC","$2500"]].map(([k,v]) => (
              <tr key={k}>
                <td style={{ padding:"5px 0", fontSize:"12.5px", color:"#444", minWidth:"60px" }}>{k}</td>
                <td style={{ padding:"5px 0 5px 14px", fontSize:"12.5px", color:"#555" }}>{v}</td>
              </tr>
            ))}
          </table>
        </div>

        {/* 3-col addresses */}
        <AddressGrid/>

        {/* Actions */}
        <div style={{ display:"flex", gap:"10px", flexWrap:"wrap", marginTop:"22px", paddingTop:"18px", borderTop:"1px solid #eee" }}>
          <Link to="/my-account" className="btn-grey" style={{ fontSize:"12px" }}>
            <i className="fa fa-arrow-left"></i> Back to My Account
          </Link>
          <button onClick={()=>window.print()} style={{ background:"#f5f5f5", border:"1px solid #ddd", color:"#555", padding:"8px 16px", fontSize:"12px", fontWeight:"700", textTransform:"uppercase", cursor:"pointer", display:"inline-flex", alignItems:"center", gap:"6px" }}>
            <i className="fa fa-print"></i> Print Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;


// ─────────────────────────────────────────────
// src/pages/OrderSummary.js  (same file, exported separately)
// ─────────────────────────────────────────────
export function OrderSummary() {
  return (
    <div className="page-ocean">
      <div className="breadcrumb-strip">
        <div style={{ maxWidth:"860px", margin:"0 auto" }}>
          <Link to="/">Home</Link><span className="sep">›</span>
          <Link to="/my-account">User Account</Link><span className="sep">›</span>
          <span>Order Summary</span>
        </div>
      </div>

      <div className="main-card">
        <h1>Order Summery</h1>

        {/* Thank you */}
        <div style={{ background:"#f0faf0", border:"1px solid #c3e6cb", padding:"10px 16px", fontSize:"13px", color:"#2d7a2d", fontWeight:"600", marginBottom:"22px", display:"flex", alignItems:"center", gap:"8px" }}>
          <i className="fa fa-check-circle"></i>
          Thank you, your order has been recieved.
        </div>

        {/* Order meta */}
        <div className="section-title">Yor Order Summry</div>
        <table style={{ borderCollapse:"collapse", marginBottom:"14px" }}>
          {[["Order # :","0303"],["Date :","December 21 2014"],["Total :","1 x $2500 = $2500"]].map(([k,v]) => (
            <tr key={k}>
              <td style={{ padding:"4px 0", fontSize:"12.5px", color:"#444", minWidth:"70px" }}>{k}</td>
              <td style={{ padding:"4px 14px", fontSize:"12.5px", fontWeight:"600", color:"#333" }}>{v}</td>
            </tr>
          ))}
        </table>

        {/* Bank transfer notice */}
        <div style={{ fontSize:"12px", color:"#555", lineHeight:"1.7", marginBottom:"22px", background:"#fefefe", borderLeft:"3px solid #ddd", padding:"10px 14px" }}>
          Make your payment directly into our bank account. Please use your Order ID as the payment reference.
          Your order wont be shipped until the funds have cleared in our account.
        </div>

        {/* Order items */}
        <div className="section-title">Yor Order Details</div>
        <OrderTable items={orderItems} />

        {/* Bank details */}
        <div style={{ margin:"28px 0" }}>
          <div className="section-title">Yor Bank details</div>
          <table style={{ borderCollapse:"collapse" }}>
            {[["Bank","Your Bank Name"],["Acc#","2014 2545 4524 5654"],["BIC","012478 541245641212"]].map(([k,v]) => (
              <tr key={k}>
                <td style={{ padding:"5px 0", fontSize:"12.5px", color:"#444", minWidth:"55px" }}>{k}</td>
                <td style={{ padding:"5px 14px", fontSize:"12.5px", color:"#555" }}>{v}</td>
              </tr>
            ))}
          </table>
        </div>

        {/* 3-col addresses */}
        <AddressGrid/>

        {/* Actions */}
        <div style={{ display:"flex", gap:"10px", flexWrap:"wrap", marginTop:"22px", paddingTop:"18px", borderTop:"1px solid #eee" }}>
          <Link to="/" className="btn-red" style={{ fontSize:"12px" }}>
            <i className="fa fa-home"></i> Continue Shopping
          </Link>
          <Link to="/my-account" className="btn-grey" style={{ fontSize:"12px" }}>
            <i className="fa fa-user"></i> My Account
          </Link>
          <button onClick={()=>window.print()} style={{ background:"#f5f5f5", border:"1px solid #ddd", color:"#555", padding:"8px 16px", fontSize:"12px", fontWeight:"700", textTransform:"uppercase", cursor:"pointer" }}>
            <i className="fa fa-print"></i> Print Receipt
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Shared sub-components ──

function OrderTable({ items }) {
  return (
    <>
      <table style={{ width:"100%", borderCollapse:"collapse", marginBottom:"0" }}>
        <thead>
          <tr style={{ borderBottom:"1px solid #e0e0e0" }}>
            {["Product","Quantity","Total"].map((h,i) => (
              <th key={h} style={{ fontSize:"12px", fontWeight:"700", color:"#555", padding:"7px 0", textAlign: i>0 ? "right" : "left", textTransform:"uppercase" }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items.map((item, i) => (
            <tr key={i} style={{ borderBottom:"1px solid #f0f0f0" }}>
              <td style={{ padding:"10px 0", fontSize:"12.5px" }}>
                <Link to="/product" style={{ color:"#2980b9" }}>{item.name}</Link>
              </td>
              <td style={{ padding:"10px 0", fontSize:"12.5px", textAlign:"right" }}>{item.qty}</td>
              <td style={{ padding:"10px 0", fontSize:"12.5px", textAlign:"right" }}>{item.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Totals */}
      <table style={{ width:"100%", borderCollapse:"collapse", marginTop:"4px" }}>
        {[["Cart Subtotal:","$ 1,400.00"],["Shipping:","Free Shippment"],["Payment method:","Direct Bank Transfer"]].map(([l,v]) => (
          <tr key={l}>
            <td style={{ padding:"5px 0", textAlign:"right", color:"#555", fontWeight:"700", paddingRight:"20px", width:"70%", fontSize:"12.5px" }}>{l}</td>
            <td style={{ padding:"5px 0", textAlign:"right", fontSize:"12.5px", color:"#333" }}>{v}</td>
          </tr>
        ))}
        <tr style={{ borderTop:"2px solid #e0e0e0" }}>
          <td style={{ padding:"8px 20px 5px 0", textAlign:"right", fontWeight:"700", fontSize:"13px", color:"#1a1a1a" }}>Total with shipping:</td>
          <td style={{ padding:"8px 0 5px", textAlign:"right", fontWeight:"700", fontSize:"13px", color:"#1a1a1a" }}>$ 1,400.00</td>
        </tr>
      </table>
    </>
  );
}

function AddressGrid() {
  return (
    <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:"0", borderTop:"1px solid #e0e0e0", paddingTop:"20px", marginTop:"10px" }}>
      {/* Customer */}
      <div style={{ paddingRight:"20px" }}>
        <h5 style={{ fontSize:"13px", fontWeight:"700", color:"#1a1a1a", marginBottom:"10px", paddingBottom:"7px", borderBottom:"1px solid #e0e0e0" }}>Customer details</h5>
        {[["Customer Name","Farukh Javaid"],["Email","email@hotubdirect.com"],["Phone","0888 7578 787"]].map(([k,v]) => (
          <div key={k} style={{ display:"grid", gridTemplateColumns:"auto 1fr", gap:"3px 10px", fontSize:"12px" }}>
            <span style={{ color:"#555", fontWeight:"700", whiteSpace:"nowrap" }}>{k}</span>
            <span style={{ color:"#444" }}>{v}</span>
          </div>
        ))}
      </div>
      {/* Billing */}
      <div style={{ padding:"0 14px", borderLeft:"1px solid #eee" }}>
        <h5 style={{ fontSize:"13px", fontWeight:"700", color:"#1a1a1a", marginBottom:"10px", paddingBottom:"7px", borderBottom:"1px solid #e0e0e0" }}>Billing address</h5>
        <p style={{ fontSize:"12px", color:"#555", lineHeight:"1.8" }}>Farukh Javaid<br/>Hottub Spas<br/>Plot 10 Tech Society<br/>California, CA 20112<br/>United State</p>
      </div>
      {/* Shipping */}
      <div style={{ paddingLeft:"20px", borderLeft:"1px solid #eee" }}>
        <h5 style={{ fontSize:"13px", fontWeight:"700", color:"#1a1a1a", marginBottom:"10px", paddingBottom:"7px", borderBottom:"1px solid #e0e0e0" }}>Shipping address</h5>
        <p style={{ fontSize:"12px", color:"#555", lineHeight:"1.8" }}>Farukh Javaid<br/>Hottub Spas<br/>Plot 10 Tech Society<br/>California, CA 20112<br/>United State</p>
      </div>
    </div>
  );
}