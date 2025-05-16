import React from 'react';
import '../Style/Section07.css';
import meeting from '../Asset/Meeting.jpg';

const AIS = () => {
  return (
    <section className="ai-section">
      <div className="ai-container">
        <h1 className="ai-heading">
          Explore the future of{' '}
          <span className="highlight">
          Explore the Future of Intelligence
          </span>
        </h1>

        <div className="ai-row">
          <div className="ai-image fade-in">
            <img src={meeting} alt="AI Meeting" />
          </div>
          <div className="ai-text fade-in">
            <h2>Empowering Human-AI Collaboration in the Metaverce</h2>
            <p>
            From digital twin ecosystems to smart contracts and immersive learning, Metaverce bridges reality and imagination. Our platform fosters meaningful interaction between users and AI in ways that transform work, play, and expression.
            </p>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIS;
