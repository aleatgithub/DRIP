import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../nav/nav'


// const changeHeaderClass = () => {
//   let pos = window.pageYOffset;
//   const normalHeader = document.getElementsById("header-container");
//   const scrolledHeader = document.getElementsById("scrolled");

//   if (pos === 0 && (normalHeader !== null)) {
//     normalHeader.className = "header-container";
//   } else if (pos > 0) {
//     normalHeader.className = "scrolled";
//   } else {
//     scrolledHeader.className = "header-container";
//   }
// }

// document.addEventListener("scroll", () => {
//   changeHeaderClass();
// })


const handleScroll = () => {
  let transformable = document.getElementById("transformable");
  transformable.className = (window.pageYOffset === 0) ? "header-container" : "scrolled"
};
document.addEventListener("scroll", () => {
  handleScroll();
})

const Header = ({ currentUser, logout }) => { 

  const sessionLinks = () => (
    <div className="header-content"> 
      <a id="header-logo" href="#">DRIP</a>
      <div className="navbar"> 
        <Link to="/login" className="login/logout" id="login-link">Login</Link>
        <Nav/>
      </div>
    </div>
  );

  const greetingLogout = () => (
    <div className="header-content">
      <a id="header-logo" href="#">DRIP</a>
      <div className="navbar">
       <button className="login-logout" id="logout-button" onClick={logout}>Log Out</button>
       <Nav/>
        <Link to="/cart_items"className="nav-links"><i className="fas fa-shopping-cart"></i></Link>
      </div>
    </div>
  );

  return currentUser ? greetingLogout() : sessionLinks();

};

export default Header;
