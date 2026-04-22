// src/components/BrandsRow.js

function BrandsRow() {
  return (
    <div style={{
      background: "#fff",
      padding: "18px 20px",
      borderTop: "2px solid #eee"
    }}>
      <div style={{
        maxWidth: "940px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "16px",
        alignItems: "center"
      }}>
        {/* Save box */}
        <div style={{
          background: "linear-gradient(135deg, #f8e200, #f5a800)",
          padding: "12px 16px",
          borderRadius: "3px",
          textAlign: "center"
        }}>
          <div style={{
            fontFamily: "'Oswald', sans-serif",
            fontSize: "17px",
            fontWeight: "700",
            color: "#c80000",
            textTransform: "uppercase",
            lineHeight: "1.15"
          }}>
            SAVE $1,000'S<br/>ON THE TOP SPA BRANDS
          </div>
          <p style={{ fontSize: "9px", fontWeight: "700", color: "#333", marginTop: "4px" }}>
            HUGE DISCOUNTS · SHOP EARLY FOR THE BEST SELECTION
          </p>
        </div>

        {/* Oceanic Spa */}
        <div style={{ textAlign: "center" }}>
          <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: "24px", color: "#1876b8", fontWeight: "700" }}>
            OCEANIC<em style={{ fontStyle: "italic", color: "#88b8d0" }}>Spa</em>
          </span>
        </div>

        {/* Caldera Spas */}
        <div style={{ textAlign: "center" }}>
          <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: "22px", fontWeight: "700" }}>
            <span style={{ color: "#e95c2e" }}>Caldera</span>
            <span style={{ color: "#444" }}>Spas</span>
          </span>
        </div>

        {/* Island Spas */}
        <div style={{ textAlign: "center" }}>
          <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: "20px", fontWeight: "700", color: "#3a7d44" }}>Island</span>
          <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: "20px", color: "#555" }}>Spas</span>
          <br/>
          <small style={{ fontSize: "9px", color: "#999", letterSpacing: "1px" }}>BY ARTESIAN</small>
        </div>
      </div>
    </div>
  );
}

export default BrandsRow;