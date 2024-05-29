import React, { useState } from 'react'
import "./Header.css"
import logo from "../assets/imgs/logo.png"
import { Link } from 'react-router-dom';

function Header() {
  let [menu,setMenu]=useState("home");
  // console.log(menu);
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='header'>
      <div className="header-logo">
        <img src={logo} alt="" />
        <h1>DLN SPACE HEALTHCARE</h1>
      </div >

      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li> <Link to="/" onClick={()=>{setMenu("home")}}>HOME</Link> {menu==="home"?<hr />:<></>}</li>
        <li> <Link to="/products" onClick={()=>{setMenu("products")}}>PRODUCTS</Link>{menu==="products"?<hr />:<></>} </li>
        <li> <a href="#footer">CONTACT US</a> </li>
      </ul>
      <button className="nav-toggle" aria-label="toggle navigation" onClick={toggleNav}>
        <span className="hamburger"></span>
      </button>
    </div>
  );
}

export default Header