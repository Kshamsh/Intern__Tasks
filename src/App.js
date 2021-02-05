import Checkbox from "./components/checkbox/Checkbox";
import { useState } from "react"

const App = () => {
  const[checkState, setCheckState] = useState(true)
  return (
    <div className="App">
     <Checkbox 
    //  disabled
     checkState={checkState}
     setCheckState={setCheckState}/>
    </div>
  );
}

export default App;
