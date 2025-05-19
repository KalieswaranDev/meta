import React from 'react';
import '../Style/Section09.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h1 className="footer-logo">
          <span className="logo-outline">metaverse</span>
        </h1>
        
        <p className="footer-copy">&copy; {new Date().getFullYear()} Metaverse AI. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
