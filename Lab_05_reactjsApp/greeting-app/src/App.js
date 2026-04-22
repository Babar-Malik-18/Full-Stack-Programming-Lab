import Greeting from "./Greeting"
import "./App.css"

function App(){

return(

<div className="app">

<h1 className="title">👋 Greeting Application</h1>

<div className="grid">

<Greeting name="Babar Ali" timeOfDay="morning" bgColor="#3498db"/>

<Greeting name="Ahmad Abdullah" timeOfDay="afternoon" bgColor="#2ecc71"/>

<Greeting name="Ahmad Faraz" timeOfDay="evening" bgColor="#e67e22"/>

</div>

</div>

)

}

export default App