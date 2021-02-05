import Checkbox from "./components/checkbox/Checkbox";
import { useState } from "react"

const App = () => {
  const[checkState, setCheckState] = useState(false)
  return (
    <div className="App">
     <Checkbox 
     checked
    //  disabled
     checkState={checkState}
     setCheckState={setCheckState}/>
    </div>
  );
}

export default App;
