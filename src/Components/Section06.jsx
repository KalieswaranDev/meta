import React from 'react';
import '../Style/Section06.css';

const App = () => {
  return (
    <div className="container" id='section06'>
      <section className="sticky-slide slide1">
        <div className="content">
          <h1>NeuroVerse</h1>
          <p>Welcome to the living metaverse.</p>
        </div>
      </section>

      <section className="sticky-slide slide2">
        <div className="content">
          <h1>OmniMind</h1>
          <p>Welcome to intelligent creation.</p>
        </div>
      </section>

      <section className="sticky-slide slide3">
        <div className="content">
          <h1>MetaGenesis</h1>
          <p>Welcome to world building 3.0.</p>
        </div>
      </section>

      <section className="sticky-slide slide4">
        <div className="content">
          <h1>ChainRealms</h1>
          <p>Welcome to decentralized virtuality.</p>
        </div>
      </section>
    </div>
  );
};

export default App;
