import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <div className="footer-container">

    <div className="footer-top-links">

      <div className="platform-links">
        <a href="https://www.linkedin.com/in/aleatlinked/" id="platform-link-boxes">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/aleatgithub/" id="platform-link-boxes">
          <i className="fab fa-github"></i></a>
        <a href="https://github.com/aleatgithub/DRIP" id="platform-link-boxes">
          <i className="fas fa-tint"></i></a>
      </div>
      <div className="drip-docs">
      </div>
    </div>

    <div className="footer-send-link-box">
        <p className="send-link-text"> Send a link to your phone to download GOAT: the original DRIP. </p>
         <a href="https://bnc.lt/goat-sneaker-app" id="send-link-button"> Send Link
           </a>
    </div>
  </div>
);

export default Footer;