import React from 'react'

import react,{useState} from "react"
const Demo = () => {
    const[ans,setAns]=useState("");
    const[val,setVal]=useState(true)
    const letsclick=()=>
    {
        if(val)
        {
            setAns("moring");
            setVal(!val)
        }
        else
        {
            setAns("evening");
            setVal(!val)
             
        }
    }
      return (
    <div>
        <h3>display:{ans}</h3>
        <button onClick={letsclick}>click here</button>
    </div>

  )
}

export default Demo