import React, { useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [bg, setBg] = useState("#fff");

  const randomColor = () => {
    const colors = ["#ffadad", "#ffd6a5", "#caffbf", "#9bf6ff"];
    setBg(colors[Math.floor(Math.random() * colors.length)]);
  };

  return (
    <div style={{...styles.container, background:bg}}>
      <div style={styles.card}>
        <h1>⚡ Interactive App</h1>

        <button style={styles.btn} onClick={() => setMessage("Hello 👋")}>
          Show Message
        </button>

        <button style={styles.btn} onClick={randomColor}>
          Random Color 🎨
        </button>

        <button style={styles.btn} onClick={() => alert("Boom!")}>
          Alert 🚨
        </button>

        <h2
          onMouseOver={(e) => e.target.style.transform="scale(1.2)"}
          onMouseOut={(e) => e.target.style.transform="scale(1)"}
          style={{transition:"0.3s"}}
        >
          {message}
        </h2>
      </div>
    </div>
  );
}

const styles = {
  container:{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"},
  card:{background:"#fff",padding:"30px",borderRadius:"10px",textAlign:"center"},
  btn:{margin:"10px",padding:"10px 20px"}
};

export default App;