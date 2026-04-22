// src/pages/ShoppingCart.js
import { Link, useNavigate } from "react-router-dom";
import "../styles/global.css";

function ShoppingCart({ cartItems, onRemove, onQtyChange }) {
  const navigate = useNavigate();

  const total = cartItems.reduce((sum, item) => {
    const price = parseFloat(item.price.replace(/[^0-9.]/g, "")) || 0;
    return sum + price * (item.qty || 1);
  }, 0);

  return (
    <div className="page-ocean">
      <div className="breadcrumb-strip">
        <div style={{ maxWidth: "880px", margin: "0 auto" }}>
          <Link to="/">Home</Link><span className="sep">›</span><span>Shopping Cart</span>
        </div>
      </div>

      <div className="main-card" style={{ maxWidth: "880px" }}>
        <h1>Shopping Cart</h1>

        {cartItems.length === 0 ? (
          /* Empty cart */
          <div style={{ textAlign:"center", padding:"40px 0", color:"#888" }}>
            <i className="fa fa-shopping-cart" style={{ fontSize:"48px", marginBottom:"16px", display:"block" }}></i>
            <p style={{ fontSize:"16px", marginBottom:"16px" }}>Your cart is empty.</p>
            <Link to="/" className="btn-red">CONTINUE SHOPPING</Link>
          </div>
        ) : (
          <div style={{ border:"1px solid #ddd", padding:"16px 18px", background:"#fafafa" }}>
            <div style={{ fontWeight:"700", color:"#333", marginBottom:"12px" }}>Your Shopping Cart</div>

            {/* Green success banner */}
            <div style={{ background:"#d4edda", border:"1px solid #c3e6cb", color:"#155724", padding:"9px 14px", fontSize:"12.5px", marginBottom:"14px", display:"flex", alignItems:"center", gap:"8px" }}>
              <i className="fa fa-check-circle" style={{ color:"#28a745" }}></i>
              <span><strong>{cartItems[cartItems.length - 1]?.name}</strong> was just added to cart.</span>
            </div>

            {/* Column headers */}
            <div style={{ display:"flex", justifyContent:"space-between", fontSize:"11.5px", fontWeight:"700", color:"#777", textTransform:"uppercase", padding:"6px 0 8px", borderBottom:"1px solid #e0e0e0" }}>
              <span>Items added</span><span>Items total</span>
            </div>

            {/* Cart items */}
            {cartItems.map(item => (
              <div key={item.id} style={{ display:"grid", gridTemplateColumns:"72px 1fr 120px 80px", gap:"14px", alignItems:"start", padding:"14px 0", borderBottom:"1px solid #efefef" }}>
                <img
                  src={item.img || "https://images.unsplash.com/photo-1570798359490-81f9e99e7e6c?w=160&q=80"}
                  alt={item.name}
                  style={{ width:"72px", height:"72px", objectFit:"cover", border:"1px solid #e5e5e5", cursor:"pointer" }}
                  onClick={() => navigate("/product")}
                />
                <div>
                  <Link to="/product" style={{ color:"#2980b9", fontSize:"12.5px", fontWeight:"700", display:"block", marginBottom:"5px", lineHeight:"1.4" }}>
                    {item.name}
                  </Link>
                  <div style={{ fontSize:"11px", color:"#777" }}>Portable Spa – In Stock</div>
                  <div style={{ marginTop:"8px", fontSize:"11px" }}>
                    <a href="#" onClick={e=>{e.preventDefault();onRemove(item.id);}} style={{ color:"#888" }}>Remove</a>
                    <span style={{ margin:"0 6px", color:"#ccc" }}>|</span>
                    <Link to="/product" style={{ color:"#888" }}>Edit Your Order</Link>
                  </div>
                </div>
                <div>
                  <div style={{ fontSize:"11px", color:"#888", marginBottom:"4px" }}>Quantity:</div>
                  <select
                    value={item.qty || 1}
                    onChange={e => onQtyChange(item.id, parseInt(e.target.value))}
                    style={{ border:"1px solid #ccc", padding:"3px 6px", fontSize:"12px", width:"60px" }}
                  >
                    {[1,2,3,5,10,20].map(n => <option key={n} value={n}>{n}</option>)}
                  </select>
                </div>
                <div style={{ fontSize:"14px", fontWeight:"700", color:"#333", textAlign:"right", paddingTop:"2px" }}>
                  {item.price}
                </div>
              </div>
            ))}

            {/* Summary */}
            <div style={{ display:"flex", justifyContent:"flex-end", alignItems:"center", gap:"16px", marginTop:"16px", paddingTop:"14px", borderTop:"2px solid #e0e0e0", flexWrap:"wrap" }}>
              <div style={{ textAlign:"right" }}>
                <div style={{ fontSize:"12.5px", color:"#555" }}>Cart summary ({cartItems.length} items)</div>
                <div style={{ fontSize:"15px", fontWeight:"700", color:"#1a1a1a" }}>Total: ${total.toFixed(2)}</div>
              </div>
              <Link to="/" style={{ background:"none", border:"1px solid #bbb", color:"#555", padding:"8px 16px", fontSize:"12px", fontWeight:"600", textTransform:"uppercase" }}>
                CONTINUE SHOPPING
              </Link>
              <Link to="/checkout" className="btn-red">
                <i className="fa fa-lock"></i> PROCEED TO CHECKOUT
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ShoppingCart;