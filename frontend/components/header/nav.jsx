import React from 'react';
import { Link } from 'react-router-dom';
import SignupFormContainer from '../session_forms/signup_form_container';
import LoginFormContainer from '../session_forms/login_form_container';

const Nav = () => (
  <nav className="header-nav">
    <h3 className></h3>
    <div className="nav-right"> 
      <ul> 
        <li>
          <span className="nav-links"> 
           <a href="#">Styles</a>
          </span>
        </li>
        <li>
          <span className="nav-links">
            <a href="#">Shop All</a>
          </span>
        </li>
        </ul>
      </div>
  </nav>

);

export default Nav;