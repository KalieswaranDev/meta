import React from 'react';
import '../Style/Section08.css';
import newimg from '../Asset/New.jpg';

const HeroSection = () => {
  return (
    <div className="hero-container" id="Join">
      <section className="hero">
        <div className="hero-content">
          <p className="get-in-touch">✳ Ready to Shape the Metaverse?</p>
          <h1 className="headline">Start Your Journey <br /> Today</h1>
          <p className="subtext">Join 50,000+ Innovators Building the Future</p>
        </div>

        <div className="hero-image-wrapper">
          <div className="hero-image">
            <div className="image-stack">
              <img src={newimg} alt="MetaNova AI Platform" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
