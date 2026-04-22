import StudentCard from "./StudentCard";
import "./App.css";

function App() {
  return (
    <div className="app">

      <h1 className="title">🎓 Student Information</h1>

      <div className="grid">

        <StudentCard
          name="Babar Ali"
          rollNo="232048"
          department="Software Engineering"
          university="Air University"
          color="#5DADE2"
        />

        <StudentCard
          name="Ahmad Abdullah Khan"
          rollNo="233133"
          department="Software Engineering"
          university="Air University"
          color="#58D68D"
        />

        <StudentCard
          name="Ahmad Faraz"
          rollNo="231970"
          department="Software Engineering"
          university="Air University"
          color="#F5B041"
        />

        <StudentCard
          name="SM Ahmed Zaidi"
          rollNo="231966"
          department="Software Engineering"
          university="Air University"
          color="#AF7AC5"
        />

      </div>

    </div>
  );
}

export default App;