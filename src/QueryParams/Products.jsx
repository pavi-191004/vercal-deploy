import React from 'react'
import {useNavigate,Route,Routes,Link} from 'react-router-dom'
import { DisplayQuery } from './DisplayQuery';
export const Products = () => {
    const navigate=useNavigate()
    const page=10;
    const handleSubmit=()=>{
        navigate(`/display-query?page=${page}`)
    }


  return (
    <>

    <button onClick={handleSubmit}>click</button>
   
    </>
    
 

  )
}
