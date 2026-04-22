import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!name || !email) {
      alert("Please fill all fields!");
      return;
    }
    setSubmitted(true);
    setName("");
    setEmail("");
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1>✨ User Form</h1>

        <input
          style={styles.input}
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          style={styles.input}
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button style={styles.btn} onClick={handleSubmit}>
          Submit
        </button>

        <h3>Live Preview:</h3>
        <p>{name} | {email}</p>

        {submitted && <p style={{color:"green"}}>✅ Submitted Successfully!</p>}
      </div>
    </div>
  );
}

const styles = {
  container:{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",background:"#eee"},
  card:{background:"#fff",padding:"30px",borderRadius:"10px",textAlign:"center"},
  input:{display:"block",margin:"10px auto",padding:"10px"},
  btn:{padding:"10px",background:"blue",color:"white"}
};

export default App;