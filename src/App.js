import React from 'react';
import {useState} from 'react';
import Input from './components/Input/Input';

const App = () => {
    const [content,setContent] = useState("KEKW")
    const handleKeyPress = (e) => {
        if(e.key === 'Enter'){
          console.log('enter press here! ')
        }
      }
    
    return(
      
        <Input
        maxLength={11}
        disabled={false} 
        id="1" 
        contentValue={content}
        onChange={(e)=>{setContent(e.target.value)}}
        onPressEnter={handleKeyPress}
        defaultValue="" 
        placeholder="Write Something" 
        />
    )
}

export default App