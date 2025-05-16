import React from 'react';
import '../Style/Section09.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h1 className="footer-logo">
          <span className="logo-outline">METANOVA</span>
        </h1>
        <nav className="footer-nav" aria-label="Footer navigation">
          <a href="#home">HOME</a>
          <a href="#About">ABOUT</a>
          <a href="#insights">FEATURED</a>
          <a href="#Join">JOIN</a>
        </nav>
        <p className="footer-copy">&copy; {new Date().getFullYear()} MetaNova AI. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
