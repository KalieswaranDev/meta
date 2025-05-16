import React, { useState } from 'react';
import '../Style/Section01.css';
import bannerVideo from '../Asset/Banner.mp4';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="app-container">
      <header className="main-header">
        <nav className="nav-menu">
          <div className="logo">
            <span>Metaverse</span>
          </div>

          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <ul>
              <li><a href="#section02">ABOUT</a></li>
              <li><a href="#section04">JOIN</a></li>
              <li><a href="#section05">FEATURED</a></li>
              <li><a href="#section06">EXPLORE</a></li>
              
              
            </ul>
          </div>

          <div className="menu-toggle" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </nav>
      </header>

      <section className="video-banner">
        <video autoPlay loop muted playsInline className="background-video">
          <source src={bannerVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="overlay">
          {/* <div className="tagline">⚡ BUILD THE FUTURE IN THE METAVERSE</div> */}
          <h1 className="main-heading">Metaverse</h1>
          <p className="sub-heading">Enter the Gateway to the Next Evolution <br />of the Internet</p>
        </div>
      </section>
    </div>
  );
};

export default App;
