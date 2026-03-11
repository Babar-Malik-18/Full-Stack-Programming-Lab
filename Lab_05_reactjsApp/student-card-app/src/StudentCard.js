function StudentCard(props) {
  return (
    <div className="card" style={{ borderTop: `5px solid ${props.color}` }}>
      <h2>{props.name}</h2>
      <p><b>Roll No:</b> {props.rollNo}</p>
      <p><b>Department:</b> {props.department}</p>
      <p><b>University:</b> {props.university}</p>
    </div>
  );
}

export default StudentCard;