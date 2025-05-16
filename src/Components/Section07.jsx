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
            metaverse <br /> intelligence
          </span>
        </h1>

        <div className="ai-row">
          <div className="ai-image fade-in">
            <img src={meeting} alt="AI Meeting" />
          </div>
          <div className="ai-text fade-in">
            <h2>Pioneering Human-AI Collaboration in Virtual Worlds</h2>
            <p>
              At MetaNova AI, we go beyond building tools—we foster ecosystems where humans and AI co-evolve. Our
              platform’s adaptive intelligence learns from every interaction, ensuring virtual worlds grow richer,
              fairer, and more immersive over time.
            </p>
            <p>
              By integrating emotion-aware avatars, self-governing economies, and AI that respects user sovereignty,
              we’re crafting a metaverse that doesn’t just respond to needs—it anticipates them. This is the next
              era of digital existence: boundless, intuitive, and fundamentally human.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIS;
