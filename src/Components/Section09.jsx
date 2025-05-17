import React from 'react';
import '../Style/Section09.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h1 className="footer-logo">
          <span className="logo-outline">metaverce</span>
        </h1>
        <nav className="footer-nav" aria-label="Footer navigation">
        <a href="#section02">ABOUT</a>
        <a href="#section04">JOIN</a>
        <a href="#section05">FEATURED</a>
        <a href="#section06">EXPLORE</a>
      
        
              
        </nav>
        <p className="footer-copy">&copy; {new Date().getFullYear()} MetaNova AI. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
