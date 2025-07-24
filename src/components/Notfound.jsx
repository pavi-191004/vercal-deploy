import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
const Notfound = () => {
    const Navigate=useNavigate();
  return (
    <>
    <div>"Oops! Page Not Found"</div>
   <Navigate to="/Home" />;
   </>
  )
}

export default Notfound