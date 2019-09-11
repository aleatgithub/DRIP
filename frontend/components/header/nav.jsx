import React from 'react';
import { Link } from 'react-router-dom';
import SignupFormContainer from '../session_forms/signup_form_container';
import LoginFormContainer from '../session_forms/login_form_container';

const Nav = () => (
  <div className="nav-items"> 
    <span id="nav-styles"> 
      <a href="#">Styles</a>
    </span>

    <span id="nav-shop">
      <a href="#">Shop All</a>
    </span>
  
    <span id="nav-search">
      <i></i>
    </span>

    <span id="nav-menu">
      <i></i>
    </span>

  </div>
);

export default Nav;