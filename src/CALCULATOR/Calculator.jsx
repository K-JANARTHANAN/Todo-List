import React from 'react'
import "./stylecal.css"
import { useState } from 'react'
const Calculator = () => {
    const[inputvalue,setInputvalue]=useState("");
const clear=()=>{
setInputvalue("")

}
const display=(value)=>
{
    setInputvalue(inputvalue+value)
}
const calculate=()=>{
    setInputvalue(eval(inputvalue))

}

   
  return (
     <form  className="calculator">
        <input type='text' value={inputvalue} /> 
        <span className="num-clear" onClick={clear}></span>
        <span onClick={()=>display('/')}>/</span>
         <span onClick={()=>display('*')}>*</span>
         <span onClick={()=>display('7')}>7</span>
         <span onClick={()=>display('8')}>8</span>
         <span onClick={()=>display('9')}>9</span>
         <span onClick={()=>display('-')}>-</span>
         <span onClick={()=>display('4')}>4</span>
          <span onClick={()=>display('5')}>5</span>
         <span onClick={()=>display('6')}>6</span>
         <span onClick={()=>display('+')}>+</span>
          <span onClick={()=>display('1')}>1</span>
         <span onClick={()=>display('2')}>2</span>
         <span onClick={()=>display('3')}>3</span>
          <span onClick={()=>display('0')}>0</span>
         <span onClick={()=>display('00')}>00</span>
         <span onClick={()=>display('.')}>.</span>
           <span className="num-equal" onClick={()=>calculate()}>=</span>
         
         
     </form>
  )
}

export default Calculator