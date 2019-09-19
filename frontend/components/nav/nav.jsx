import React from 'react';
import { Link } from 'react-router-dom';
import SignupFormContainer from '../session_forms/signup_form_container';
import LoginFormContainer from '../session_forms/login_form_container';

const Nav = () => (
  <div className="main-nav"> 
    <ul className="nav-items">
      <li>
      <a href="#" className="nav-links">Styles</a>
      </li>
      <li>
        <Link to="/sneakers">Shop All</Link>
      </li>
      <li>
        {/* <a href="#" className="nav-links">Search</a> */}
        <a href="#" className="nav-links">
          <i className="fas fa-search"></i>
        </a>
      </li>
      <li>
        {/* <a href="#" className="nav-links">Menu</a> */}

      </li>
    </ul>
  </div>
);

export default Nav;