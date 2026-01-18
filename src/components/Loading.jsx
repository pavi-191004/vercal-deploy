import React , { Suspense, useState }from 'react'

const Admin=React.lazy(()=>import('./Admin'))

const Loading = () => {
    const[show,setshow]=useState(false)
  return (
    <>
    {/* // <Suspense fallback={<p>Loading...</p>}>
    //     <Admin />
    //   </Suspense> */}
    <button onClick={()=>setshow(true)}>show admin</button>
    {show&&
        ( <Suspense fallback={<p>Loading...</p>}>
        <Admin />
      </Suspense>)
    }
    </>

  )
}
export default Loading
