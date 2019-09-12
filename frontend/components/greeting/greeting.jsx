import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../header/nav'

const Greeting = ({ currentUser, logout }) => { 

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
      </div>
    </div>
  );
  return currentUser ? greetingLogout() : sessionLinks();
};

export default Greeting;
