import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <div className="footer-container">

    <div className="footer-top-links">

      <div className="platform-links">
        <a href="https://github.com/aleatgithub" className="platform-link-boxes">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="https://www.instagram.com/ahle.castillo/" className="platform-link-boxes">
          <i className="fab fa-github"></i></a>
        <a href="https://www.facebook.com/profile.php?id=100004059245235" className="platform-link-boxes">
          <i className="fab fa-github"></i></a>
      </div>
      
      <div className="drip-docs">

      </div>
    </div>

    <div className="footer-send-link-box">
      <div>
        <p> Some text will go in here. </p>
      </div>
    </div>
  </div>
);

export default Footer;