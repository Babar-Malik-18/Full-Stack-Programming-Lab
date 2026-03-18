import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1>🔥 Smart Counter</h1>

        <h2 style={{
          ...styles.count,
          color: count > 10 ? "red" : "#333"
        }}>
          {count}
        </h2>

        {count > 10 && <p style={{color:"red"}}>⚠ Too High!</p>}

        <div style={styles.btnContainer}>
          <button 
            style={styles.btn}
            onClick={() => setCount(count + 1)}
          >
            ➕
          </button>

          <button 
            style={{
              ...styles.btn,
              opacity: count === 0 ? 0.5 : 1
            }}
            disabled={count === 0}
            onClick={() => setCount(count - 1)}
          >
            ➖
          </button>

          <button style={styles.reset} onClick={() => setCount(0)}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: { height:"100vh", display:"flex", justifyContent:"center", alignItems:"center", background:"#222"},
  card: { background:"#fff", padding:"30px", borderRadius:"15px", textAlign:"center"},
  count: { fontSize:"60px", transition:"0.3s" },
  btnContainer: { display:"flex", gap:"10px", justifyContent:"center" },
  btn: { padding:"10px 20px", fontSize:"20px", cursor:"pointer" },
  reset: { background:"red", color:"white", padding:"10px" }
};

export default App;