import Checkbox from "./components/checkbox/Checkbox";
import { useState,useEffect } from "react"

const App = () => {
  const[checkState, setCheckState] = useState(false)
  
  useEffect(() => {
    console.log("kek")
}, [checkState])

  return (
    <div className="App">
     <Checkbox 
    //  checked
     disabled
     checkState={checkState}
     setCheckState={setCheckState}/>
    </div>
  );
}

export default App;
