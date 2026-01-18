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
import { Userid } from './components/Userid';
import Admin from './components/Admin'
import { Addproduct } from './components/Addproduct';
import Footer from './components/Footer'
import { Refer } from './components/Refer';
import { Nameref } from './components/Nameref';
import Loading  from './components/Loading';
import { Load } from './components/Load';

import { HomePage } from './Params/HomePage';
import { Details } from './Params/Details';
import { UserAge } from './Params/UserAge';
import { Products } from './QueryParams/Products';
import { DisplayQuery } from './QueryParams/DisplayQuery';
function App() {
  return (
  //   <BrowserRouter>
  //   {/* <nav>
  //     <Link to='/'>home page</Link><br/>
  //     <Link to='/contact'> Contact page</Link><br/>
  //     <Link to='/About' >About page</Link><br/>
  //     <Link to="/user/101">User 101</Link><br/>
  //     <Link to="/user/202">User 202</Link><br/>
  //     <Link to='/Logincontrol' >Logincontrol</Link><br/>
      
  //   </nav>
  //   <Routes>
  //     <Route path='/' element={<Home/>}></Route>
  //     <Route path='/Contact' element={<Contact/>}></Route>
  //     <Route path='/About' element={<About/>}></Route>
  //     <Route path="/user/:id" element={<Userprofile />} />
  //     <Route path='/LoginControl' element={<LoginControl/>}></Route>
  //     <Route path='user/:idno' element={<Userid/>}></Route>
  //     <Route path='/Admin' element={<Admin/>}></Route>
    
  //     <Route path='*' element={<Notfound/>}></Route>
  //   </Routes> */}
  //  <nav>

  //   <Link to="/">Home page</Link><br></br>
  //    <Link to="/details/:name">Detail page</Link><br></br>
  //       <Link to="/userage/:22">user age</Link>
  //  </nav>
  //   <Routes>
  //     <Route path='/' element={<HomePage/>}></Route>
  //     <Route path='/details/:params' element={<Details/>}></Route>
  //      <Route path='/userage/:id' element={<UserAge/>}></Route>
  //   </Routes>
  //   </BrowserRouter>
    // <Refer/>
    // <Nameref/>
    // <Load/>
    // <Loading/>
    // <Products/>
    <BrowserRouter>
        {/* <Link to="/display-query">display page</Link> */}
          <Routes>
              <Route path="/" element={<Products/>}></Route>
              <Route path="/display-query" element={<DisplayQuery/>}></Route>
          </Routes>
    </BrowserRouter>

  );
}

export default App;
