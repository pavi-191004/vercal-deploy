import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const LoginControl = () => {
 const [isLoggedIn, setLoggedIn] = useState(false);
 const [redirect, setRedirect] = useState(null); 

 const handleLogin = () => {
setLoggedIn(true);
setRedirect('/Admin');
 };

 const handleLogout = () => {
 setLoggedIn(false);
 setRedirect('/Login');
 };

if (redirect) {
return <Navigate to={redirect} />;
 }

 return (
 <div>
 <h2>{isLoggedIn ? 'You are logged in' : 'You are logged out'}</h2>
 {isLoggedIn ? (
 <button onClick={handleLogout}>Logout</button>
) : (
 <button onClick={handleLogin}>Login</button>
 )}
 </div>
 );
};

export default LoginControl;
