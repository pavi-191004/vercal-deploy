import React, { useState ,useRef} from 'react'

export const Nameref = () => {
  const [name,setname]=useState(null)
  const namref=useRef(null)

  // const setname=()=>{
  //   if(namref.current){
  //     namref.current.value="pavithra"
  //   }
  // }
  const display=()=>{
    if(namref.current){
      namref.current.focus();

    }
   
    
  }

  return (
    <>
    <div>Nameref</div>
    <input ref={namref} type="text" value={name} onChange={(e)=>setname(e.target.value)}></input>
    <div>the name is {name}</div>
    {/* <div>the name is {namref.current?.valueA}</div> */}
    {/* <button onClick={setname}>click me</button> */}
    <button onClick={display}>click here</button>
    </>
    
  )
}
