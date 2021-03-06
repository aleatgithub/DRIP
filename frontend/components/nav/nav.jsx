import React from 'react';
import { Link } from 'react-router-dom';
import SignupFormContainer from '../session_forms/signup_form_container';
import LoginFormContainer from '../session_forms/login_form_container';
import SearchContainer from '../search/search_container';

const Nav = () => (
  

  <div className="main-nav"> 
    <ul className="nav-items">
      <li>
      <Link to="/styles" className="nav-links">Styles</Link>
      </li>
      <li>
        <Link to="/sneakers" className="nav-links">Shop All</Link>
      </li>
      <li>
        <Link to="/search" className="nav-links"><i className="fas fa-search"></i></Link>
      </li>
      <li>
        {/* <a href="#" className="nav-links">Menu</a> */}

      </li>
    </ul>
  </div>
);

export default Nav;