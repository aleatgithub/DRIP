import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <div className="footer-container">

    <div className="footer-top-links">

      <div className="platform-links">
        <a href="https://github.com/aleatgithub" className="platform-link-boxes">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://www.linkedin.com/feed/" className="platform-link-boxes">
          <i className="fab fa-github"></i></a>
        <a href="https://github.com/aleatgithub/DRIP" className="platform-link-boxes">
          <i className="fab fa-github"></i></a>
      </div>
      <div className="drip-docs">
      </div>
    </div>

    <div className="footer-send-link-box">
        <p className="send-link-text"> Send a link to your phone to download the app. </p>
         <button className="send-link-button"> Send Link </button>
    </div>
  </div>
);

export default Footer;