import React, { Suspense, useState } from 'react'
const Admin=React.lazy(()=>import('./Admin'))
export const Load = () => {
    const[show,setshow]=useState(false)


    
  return (
    <>
        <button onClick={()=>setshow(true)}>click here</button>
    
    {show && (
         <Suspense fallback={<p>loading....</p>}>
            
  <Admin/>

  </Suspense>

    )}


 
    </>
  )
}
