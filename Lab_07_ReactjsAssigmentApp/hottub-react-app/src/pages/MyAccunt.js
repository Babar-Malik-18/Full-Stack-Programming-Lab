// src/pages/MyAccount.js
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/global.css";

function MyAccount() {
  const navigate = useNavigate();
  const [editingPw, setEditingPw] = useState(false);
  const [pwForm, setPwForm]       = useState({ current:"", newPw:"", confirm:"" });
  const [pwError, setPwError]     = useState("");
  const [pwSuccess, setPwSuccess] = useState(false);

  const handlePwSave = () => {
    if (!pwForm.current)               { setPwError("Current password required"); return; }
    if (pwForm.newPw.length < 6)       { setPwError("New password min 6 chars");  return; }
    if (pwForm.newPw !== pwForm.confirm){ setPwError("Passwords do not match");    return; }
    setPwError("");
    setPwSuccess(true);
    setEditingPw(false);
    setPwForm({ current:"", newPw:"", confirm:"" });
    setTimeout(() => setPwSuccess(false), 3000);
  };

  return (
    <div className="page-ocean">
      <div className="breadcrumb-strip">
        <div style={{ maxWidth:"860px", margin:"0 auto" }}>
          <Link to="/">Home</Link><span className="sep">›</span><span>My Account</span>
        </div>
      </div>

      <div className="main-card">
        <h1>My Account</h1>

        {pwSuccess && (
          <div className="success-banner" style={{ marginBottom:"16px" }}>
            <i className="fa fa-check-circle" style={{ color:"#28a745", fontSize:"18px" }}></i>
            Password updated successfully!
          </div>
        )}

        {/* ── Profile section ── */}
        <div style={{ border:"1px solid #eee", padding:"20px", marginBottom:"20px", borderRadius:"2px" }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", flexWrap:"wrap", gap:"10px" }}>
            <div>
              <div className="section-title">Account Information</div>
              <p style={{ fontSize:"13px", color:"#555", lineHeight:"2" }}>
                <strong>Name:</strong> &nbsp;Farukh Javaid<br/>
                <strong>Email:</strong> &nbsp;email@hotubdirect.com<br/>
                <strong>Phone:</strong> &nbsp;0888 7578 787
              </p>
            </div>
            <div style={{ display:"flex", gap:"10px" }}>
              <Link to="/edit-account" className="btn-red" style={{ fontSize:"12px", padding:"7px 16px" }}>
                <i className="fa fa-edit"></i> Edit Profile
              </Link>
              <button
                onClick={() => setEditingPw(!editingPw)}
                className="btn-grey"
                style={{ fontSize:"12px", padding:"7px 16px" }}
              >
                <i className="fa fa-lock"></i> Change Password
              </button>
            </div>
          </div>

          {/* Inline password form */}
          {editingPw && (
            <div style={{ marginTop:"18px", paddingTop:"18px", borderTop:"1px solid #eee", maxWidth:"400px" }}>
              {pwError && <div style={{ color:"#cc0000", fontSize:"12px", marginBottom:"10px" }}>{pwError}</div>}
              {["current","newPw","confirm"].map((field, i) => (
                <div key={field} style={{ marginBottom:"10px" }}>
                  <label style={{ display:"block", fontSize:"12px", fontWeight:"700", color:"#444", marginBottom:"4px" }}>
                    {["Current Password","New Password","Confirm Password"][i]} *
                  </label>
                  <input
                    type="password"
                    className="field-input"
                    value={pwForm[field]}
                    onChange={e => setPwForm(prev => ({ ...prev, [field]: e.target.value }))}
                  />
                </div>
              ))}
              <div style={{ display:"flex", gap:"10px", marginTop:"12px" }}>
                <button onClick={handlePwSave} className="btn-red" style={{ fontSize:"12px" }}>SAVE</button>
                <button onClick={()=>setEditingPw(false)} className="btn-grey" style={{ fontSize:"12px" }}>CANCEL</button>
              </div>
            </div>
          )}
        </div>

        {/* ── Recent orders ── */}
        <div style={{ marginBottom:"24px" }}>
          <div className="section-title">Recent Orders</div>
          <table style={{ width:"100%", borderCollapse:"collapse", fontSize:"12.5px" }}>
            <thead>
              <tr style={{ background:"#f5f5f5", borderBottom:"2px solid #e0e0e0" }}>
                {["Order #","Date","Ship To","Order Total","Status","Action"].map(h => (
                  <th key={h} style={{ padding:"9px 12px", textAlign:"left", fontWeight:"700", color:"#555", fontSize:"12px", textTransform:"uppercase" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { id:"363", date:"December 21 2014", ship:"Farukh Javaid", total:"$699.00",  status:"On hold" },
                { id:"367", date:"December 25 2014", ship:"Farukh Javaid", total:"$799.00",  status:"On hold" },
              ].map(order => (
                <tr key={order.id} style={{ borderBottom:"1px solid #f0f0f0" }}>
                  <td style={{ padding:"10px 12px" }}>#{order.id}</td>
                  <td style={{ padding:"10px 12px" }}>{order.date}</td>
                  <td style={{ padding:"10px 12px" }}>{order.ship}</td>
                  <td style={{ padding:"10px 12px" }}>{order.total}</td>
                  <td style={{ padding:"10px 12px" }}>
                    <span style={{ background:"#fff3cd", color:"#856404", padding:"3px 10px", borderRadius:"20px", fontSize:"11px", fontWeight:"700" }}>
                      {order.status}
                    </span>
                  </td>
                  <td style={{ padding:"10px 12px" }}>
                    <Link to="/order-details" className="btn-red" style={{ fontSize:"11px", padding:"5px 12px" }}>
                      VIEW ORDER
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ── Addresses ── */}
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"20px", marginBottom:"20px" }}>
          {["Billing","Shipping"].map(type => (
            <div key={type} style={{ border:"1px solid #eee", padding:"18px", borderRadius:"2px" }}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"12px" }}>
                <div className="section-title" style={{ marginBottom:"0", paddingBottom:"0", borderBottom:"none" }}>{type} Address</div>
                <Link
                  to={type === "Billing" ? "/edit-billing" : "/edit-shipping"}
                  style={{ fontSize:"11px", color:"#cc0000", fontWeight:"700" }}
                >
                  Edit <i className="fa fa-edit"></i>
                </Link>
              </div>
              <p style={{ fontSize:"12px", color:"#555", lineHeight:"1.9" }}>
                Farukh Javaid<br/>
                Hottub Spas<br/>
                Plot 10 Tech Society<br/>
                California, CA 20112<br/>
                United States
              </p>
            </div>
          ))}
        </div>

        {/* Sign out */}
        <div style={{ paddingTop:"16px", borderTop:"1px solid #eee" }}>
          <button
            onClick={() => navigate("/login")}
            className="btn-grey"
            style={{ fontSize:"12px" }}
          >
            <i className="fa fa-sign-out-alt"></i> Sign Out
          </button>
        </div>

      </div>
    </div>
  );
}

export default MyAccount;