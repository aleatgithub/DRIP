import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../header/nav'

const Greeting = ({ currentUser, logout }) => { 

  const sessionLinks = () => (
    <div className="header-group"> 
      <a id="header-logo" href="#">DRIP</a>
      <div className="header-right">
        <span id="login-logout"><Link to="/login">Login</Link>
        </span>
        <Nav/>
      </div>
    </div>
  );

  const greetingLogout = () => (
    <div className="header-group">
      <a id="header-logo" href="#">DRIP</a>
      <div className="header-right">
      <span id="login-logout">
       <button id="logout-button" onClick={logout}>Log Out</button>
      </span>
      <Nav/>
      </div>
    </div>
  );
  return currentUser ? greetingLogout() : sessionLinks();
};

export default Greeting;
