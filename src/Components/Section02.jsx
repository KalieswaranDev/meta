import React from 'react';
import '../Style/Section02.css';
import AiImage from '../Asset/Content_image.jpg'; 

const AISection = () => {
  return (
    <section className="ai-section" id="section02">
      <div className="ai-content">
        <h1>
        Explore Limitless <span className="highlight"> Virtual Dimensions</span>
        </h1>
        <p className="tagline">Shaping tomorrow’s internet with decentralized intelligence and immersive technology.</p>

        <div className="sub-section">
          <div className="ai-image">
            <img src={AiImage} alt="AI Visual" />
          </div>
          <div className="ai-text">
            <h2>
            We Believe in the Metaverce Future
            </h2>
            <p>
            Metaverce represents the evolution of how humans interact, learn, and thrive in digital spaces. By merging AI with immersive 3D environments, we empower users to create, own, and live in a world shaped by collective intelligence and creativity.            </p>
            <p className="hide-mobile">
              MetaNova AI combines neural networks with blockchain to deliver intelligent, immersive virtual worlds. Our AI dynamically generates environments, while smart contracts ensure digital ownership. From lifelike avatars that learn and adapt to AI-driven tools, you can co-create a metaverse that evolves with you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISection;
