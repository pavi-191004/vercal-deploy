import React from 'react'
import { useSearchParams } from 'react-router-dom'

export const DisplayQuery = () => {
    const[searchParams,setSearchParams]=useSearchParams()
    const page=searchParams.get("page")
   
    
  return (
    <div>DisplayQuery

        page:{page}
     
    </div>
    
  )
}
