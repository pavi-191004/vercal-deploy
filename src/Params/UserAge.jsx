import React from 'react'
import { useParams } from 'react-router-dom'
export const UserAge = () => {

    const id=useParams()
  return (
   
    <div>UserAge:{id.id}</div>
    
  )
}
