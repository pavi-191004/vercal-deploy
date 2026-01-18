import React, { useEffect, useRef, useState } from 'react'

export const Refer = () => {

    const[name,setname]=useState(null)
    const inputref=useRef()

    // console.log("re-render");
    useEffect(()=>{
    inputref.current=name;
    },[name])
    const display=()=>{
        console.log(inputref.current);
        
    }
    
 
  return (
    <>
    <div>Refer</div>
    <div><input type="text" onChange={(e)=>setname(e.target.value)} ></input></div>
      
   <p>the input value is {name}</p>
    <p>the input value is {inputref.current}</p>

    <button onClick={display}>show</button>
    </>
  )
}
