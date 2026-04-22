function Greeting(props){

let message=""

if(props.timeOfDay==="morning"){
message="🌅 Good Morning"
}
else if(props.timeOfDay==="afternoon"){
message="☀ Good Afternoon"
}
else{
message="🌙 Good Evening"
}

return(

<div className="greet-card" style={{borderLeft:`6px solid ${props.bgColor}`}}>

<h2>{message}</h2>
<h3>{props.name}</h3>

</div>

)

}

export default Greeting