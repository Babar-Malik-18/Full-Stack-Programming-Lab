function CourseItem(props) {
  return (
    <div className="course-card">

      <h2>{props.courseName}</h2>

      <p>👨‍🏫 Instructor: {props.instructor}</p>
      <p>⏱ Duration: {props.duration}</p>
      <p className="type">{props.type}</p>

    </div>
  );
}

export default CourseItem;