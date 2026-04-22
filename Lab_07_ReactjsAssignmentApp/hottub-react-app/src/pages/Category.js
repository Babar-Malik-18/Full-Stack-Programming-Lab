// src/pages/Category.js
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/global.css";

const allProducts = [
  { id:1, name:"XS SCYBA X SERIES 119", price:"$500.00", desc:"The goods of our stores are very reliable and we care about the customer", img:"https://images.unsplash.com/photo-1570798359490-81f9e99e7e6c?w=300&q=80" },
  { id:2, name:"XS SCYBA X SERIES 119", price:"$500.00", desc:"The goods of our stores are very reliable and we care about the customer", img:"https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=300&q=80" },
  { id:3, name:"XS SCYBA X SERIES 119", price:"$500.00", desc:"The goods of our stores are very reliable and we care about the customer", img:"https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&q=80" },
  { id:4, name:"XS SCYBA X SERIES 119", price:"$500.00", desc:"The goods of our stores are very reliable and we care about the customer", img:"https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=300&q=80" },
  { id:5, name:"XS SCYBA X SERIES 119", price:"$500.00", desc:"The goods of our stores are very reliable and we care about the customer", img:"https://images.unsplash.com/photo-1570798359490-81f9e99e7e6c?w=300&q=80" },
  { id:6, name:"XS SCYBA X SERIES 119", price:"$500.00", desc:"The goods of our stores are very reliable and we care about the customer", img:"https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=300&q=80" },
];

const filters = {
  "SEATING CAPACITY": ["2 - 4 PEOPLE", "5 - 7 PEOPLE", "8 PEOPLE AND MORE"],
  "CHOOSE SIZES":     ["5 - 6 FEET LONG", "6 - 7 FEET LONG", "7 - 8 FEET LONG"],
  "SPAS BY STYLE":    ["PLUG AND PLAY 110 VOLT", "TV - STEREO SPAS", "CORNER SPAS", "PORTABLE SPAS"],
  "PRICE RANGES":     ["UNDER $3,000", "$3,000 TO $4,000", "$4,000 TO $5,000", "$6,000+"],
};

function Category({ onAddToCart }) {
  const navigate = useNavigate();
  const [open, setOpen]         = useState({ "SEATING CAPACITY": true, "CHOOSE SIZES": true, "SPAS BY STYLE": true, "PRICE RANGES": true });
  const [active, setActive]     = useState([]);
  const [view, setView]         = useState("grid"); // "grid" | "list"
  const [added, setAdded]       = useState({});

  const toggleGroup = (g) => setOpen(prev => ({ ...prev, [g]: !prev[g] }));

  const toggleFilter = (label) => {
    setActive(prev => prev.includes(label) ? prev.filter(f=>f!==label) : [...prev, label]);
  };

  const handleAdd = (product) => {
    onAddToCart(product);
    setAdded(prev => ({ ...prev, [product.id]: true }));
    setTimeout(() => setAdded(prev => ({ ...prev, [product.id]: false })), 1800);
  };

  return (
    <div className="page-ocean">
      <div className="breadcrumb-strip">
        <div style={{ maxWidth:"1000px", margin:"0 auto" }}>
          <Link to="/">Home</Link><span className="sep">›</span><span>Category</span>
        </div>
      </div>

      <div style={{ maxWidth:"1000px", margin:"22px auto 0", display:"grid", gridTemplateColumns:"210px 1fr", gap:"18px" }}>

        {/* ── SIDEBAR ── */}
        <aside style={{ background:"#fff", boxShadow:"0 2px 10px rgba(0,0,0,.08)" }}>
          <div style={{ background:"#cc0000", color:"#fff", fontFamily:"'Oswald',sans-serif", fontSize:"14px", fontWeight:"700", textTransform:"uppercase", padding:"10px 14px" }}>
            Shopping Options
          </div>

          {Object.entries(filters).map(([group, options]) => (
            <div key={group} style={{ borderBottom:"1px solid #eee" }}>
              {/* Group heading */}
              <div
                onClick={() => toggleGroup(group)}
                style={{ background:"#f5f5f5", padding:"10px 14px", fontFamily:"'Oswald',sans-serif", fontSize:"13px", fontWeight:"700", textTransform:"uppercase", cursor:"pointer", display:"flex", justifyContent:"space-between", alignItems:"center" }}
              >
                {group}
                <i className={`fa fa-chevron-${open[group] ? "up" : "down"}`} style={{ fontSize:"11px", color:"#888" }}></i>
              </div>
              {/* Options */}
              {open[group] && (
                <div style={{ padding:"8px 14px" }}>
                  {options.map(opt => (
                    <div
                      key={opt}
                      onClick={() => toggleFilter(opt)}
                      style={{ padding:"5px 0", fontSize:"12px", color: active.includes(opt) ? "#cc0000" : "#555", cursor:"pointer", borderBottom:"1px solid #f5f5f5", fontWeight: active.includes(opt) ? "700" : "400", transition:"color .2s, padding-left .2s", paddingLeft: active.includes(opt) ? "6px" : "0" }}
                    >
                      {opt}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </aside>

        {/* ── MAIN CONTENT ── */}
        <main style={{ background:"#fff", boxShadow:"0 2px 10px rgba(0,0,0,.08)" }}>
          {/* Toolbar */}
          <div style={{ background:"#f8f8f8", borderBottom:"1px solid #eee", padding:"10px 16px", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
            <span style={{ fontSize:"12px", color:"#555", fontWeight:"600" }}>{allProducts.length} Item(s)</span>
            <div style={{ display:"flex", alignItems:"center", gap:"10px" }}>
              <span style={{ fontSize:"12px", color:"#555" }}>Show</span>
              <select style={{ border:"1px solid #ccc", padding:"4px 8px", fontSize:"12px" }}>
                <option>6</option><option>9</option><option>12</option>
              </select>
              <button onClick={()=>setView("grid")} style={{ background: view==="grid" ? "#cc0000" : "#f5f5f5", color: view==="grid" ? "#fff" : "#888", border:"1px solid #ccc", padding:"5px 9px", cursor:"pointer" }}>
                <i className="fa fa-th"></i>
              </button>
              <button onClick={()=>setView("list")} style={{ background: view==="list" ? "#cc0000" : "#f5f5f5", color: view==="list" ? "#fff" : "#888", border:"1px solid #ccc", padding:"5px 9px", cursor:"pointer" }}>
                <i className="fa fa-list"></i>
              </button>
            </div>
          </div>

          {/* Active filter pills */}
          {active.length > 0 && (
            <div style={{ padding:"8px 16px", display:"flex", gap:"6px", flexWrap:"wrap", borderBottom:"1px solid #eee" }}>
              {active.map(f => (
                <span key={f} style={{ background:"#f0f0f0", border:"1px solid #ddd", borderRadius:"20px", padding:"3px 10px", fontSize:"11px", color:"#555", display:"flex", alignItems:"center", gap:"5px" }}>
                  {f}
                  <button onClick={()=>toggleFilter(f)} style={{ background:"none", border:"none", cursor:"pointer", color:"#999", fontSize:"13px" }}>×</button>
                </span>
              ))}
              <button onClick={()=>setActive([])} style={{ background:"none", border:"none", cursor:"pointer", color:"#cc0000", fontSize:"11px", fontWeight:"700" }}>Clear All</button>
            </div>
          )}

          {/* Products */}
          <div style={{
            padding:"16px",
            display: view==="grid" ? "grid" : "block",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap:"14px"
          }}>
            {allProducts.map(p => (
              <div
                key={p.id}
                style={{
                  border:"1px solid #e8e8e8", padding:"14px", textAlign:"center",
                  marginBottom: view==="list" ? "12px" : "0",
                  display: view==="list" ? "grid" : "block",
                  gridTemplateColumns: view==="list" ? "120px 1fr" : "unset",
                  gap:"14px",
                  alignItems: view==="list" ? "center" : "unset"
                }}
              >
                <img
                  src={p.img} alt={p.name}
                  style={{ width:"100%", maxHeight: view==="list" ? "120px" : "120px", objectFit:"cover", marginBottom: view==="grid" ? "10px" : "0", cursor:"pointer" }}
                  onClick={()=>navigate("/product")}
                />
                <div style={{ textAlign: view==="list" ? "left" : "center" }}>
                  <h6 style={{ fontSize:"12px", fontWeight:"700", color:"#333", textTransform:"uppercase", marginBottom:"5px" }}>{p.name}</h6>
                  <p style={{ fontSize:"11px", color:"#666", lineHeight:"1.5", marginBottom:"8px" }}>{p.desc}</p>
                  <div style={{ color:"#cc0000", fontSize:"16px", fontWeight:"700", marginBottom:"10px" }}>{p.price}</div>
                  <button
                    onClick={()=>handleAdd(p)}
                    style={{ background: added[p.id] ? "#28a745" : "#cc0000", color:"#fff", border:"none", padding:"7px 14px", fontSize:"11px", fontWeight:"700", textTransform:"uppercase", cursor:"pointer", display:"flex", alignItems:"center", gap:"5px", margin: view==="grid" ? "0 auto" : "0" }}
                  >
                    <i className={`fa ${added[p.id] ? "fa-check" : "fa-shopping-cart"}`}></i>
                    {added[p.id] ? "ADDED!" : "ADD TO CART"}
                  </button>
                  <div style={{ marginTop:"8px", display:"flex", justifyContent: view==="list" ? "flex-start" : "center", gap:"14px" }}>
                    <a href="#" style={{ fontSize:"10px", color:"#555", textDecoration:"none", textTransform:"uppercase", fontWeight:"600" }}>ADD TO WISH LIST</a>
                    <Link to="/product" style={{ fontSize:"10px", color:"#555", textDecoration:"none", textTransform:"uppercase", fontWeight:"600" }}>MORE DETAILS</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Category;