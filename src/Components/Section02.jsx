import React from 'react';
import '../Style/Section02.css';
import AiImage from '../Asset/Content_image.jpg'; 

const AISection = () => {
  return (
    <section className="ai-section" id="section02">
      <div className="ai-content">
        <h1>
          Unleash Infinite <span className="highlight">Possibilities</span>
        </h1>
        <p className="tagline">Bridging Reality and Virtuality with Next-Gen AI.</p>

        <div className="sub-section">
          <div className="ai-image">
            <img src={AiImage} alt="AI Visual" />
          </div>
          <div className="ai-text">
            <h2>
              We believe in a future where humans and AI co-create virtual worlds
            </h2>
            <p>
              At MetaNova AI, we pioneer human-AI symbiosis to craft immersive, decentralized ecosystems. Our mission is to democratize metaverse creation through adaptive neural networks, enabling anyone to design AI-powered virtual realms, interact with hyper-intelligent avatars, and thrive in user-owned economies.
            </p>
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
