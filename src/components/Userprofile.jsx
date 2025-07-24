import React from 'react'
import { useParams } from 'react-router-dom'

const Userprofile = () => {
    const { id } = useParams();
  return (
    <>
    <div>Userprofile</div>
    <div>user:{id}</div>
    </>
  )
}

export default Userprofile