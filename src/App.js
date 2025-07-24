import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Contact } from './components/Contact';
import { About } from './components/About';
import { Link } from 'react-router-dom';
import Userprofile from './components/Userprofile';
import Notfound from './components/Notfound';
import LoginControl from './components/Logincontrol';
function App() {
  return (
    <BrowserRouter>
    <nav>
      <Link to='/'>home page</Link><br/>
      <Link to='/Contact'> Contact page</Link><br/>
      <Link to='/About' >About page</Link><br/>
      <Link to="/user/101">User 101</Link>
      <Link to="/user/202">User 202</Link>
      <Link to='/Logincontrol' >Logincontrol</Link>
    </nav>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Contact' element={<Contact/>}></Route>
      <Route path='/About' element={<About/>}></Route>
      <Route path="/user/:id" element={<Userprofile />} />
      <Route path='/LoginControl' element={<LoginControl/>}></Route>
      <Route path='*' element={<Notfound/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
