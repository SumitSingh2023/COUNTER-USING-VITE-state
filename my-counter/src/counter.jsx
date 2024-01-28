//import React from "react";
import { useState } from "react";
import "./App.css"


export function Counter(){
    const [count, setCount] = useState(1)
    
  
    return(
        <div className="counter-card">
            <h2>Count : {count}</h2>
            <button onClick={()=>setCount(count+1)}>Increase by 1</button>
            <button onClick={()=>setCount(count-1)}>Decrese by 1</button>
        </div>
    )


}

