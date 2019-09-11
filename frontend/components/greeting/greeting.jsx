import React from 'react';
import { Link } from 'react-router-dom';


const Greeting = ({ currentUser, logout }) => { 

  const sessionLinks = () => (
    <div className="header-group"> 
      <h3 className="header-logo">
        <a href="#">DRIP</a>
      </h3>
      <nav className="login-signup">
        <span id="login-link"><Link to="/login">Login</Link> </span>
        {/* &nbsp;&nbsp; 
        <span id="signup-link"><Link to="/signup">Sign up</Link></span> */}
      </nav>
    </div>
  );
  const greetingLogout = () => (
    <div className="header-group">
      <h3 className="header-logo">
        <a href="#">DRIP</a>
      </h3>
      <button className="header-button" onClick={logout}>Log Out</button>
    </div>
  );
  return currentUser ? greetingLogout() : sessionLinks();
};


export default Greeting;
