import CourseItem from "./CourseItem";
import "./App.css";

function App(){

const courses=[
{courseName:"Web Development", instructor:"Sir Sharif", duration:"3 Months", type:"Online"},
{courseName:"React JS", instructor:"Sir Ali", duration:"2 Months", type:"Offline"},
{courseName:"Database Systems", instructor:"Sir Ahmed", duration:"4 Months", type:"Offline"},
{courseName:"Artificial Intelligence", instructor:"Sir Usman", duration:"3 Months", type:"Online"},
{courseName:"Software Engineering", instructor:"Sir Bilal", duration:"4 Months", type:"Offline"}
]

return(

<div className="app">

<h1 className="title">📚 Course Dashboard</h1>

<div className="grid">

{courses.map((course,index)=>(
<CourseItem
key={index}
courseName={course.courseName}
instructor={course.instructor}
duration={course.duration}
type={course.type}
/>
))}

</div>

</div>

)

}

export default App