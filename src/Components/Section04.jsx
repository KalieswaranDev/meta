import React from 'react';
import '../Style/Section04.css';
import bannerVideos from '../Asset/Banner02.mp4';

const VideoBanner = () => {
  return (
    <section className="video-banner" id='section04'>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="video-bg"
      >
        <source src={bannerVideos} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="video-overlay" />

      <div className="video-content">
        <p className="tagline">Innovate. Inspire. Impact.</p>
        <h1 className="main-heading">Elevate Your Brand</h1>
        <p className="sub-heading">Create a lasting digital presence that speaks for itself.</p>
        <button className="cta-button">Get Started</button>
      </div>
    </section>
  );
};

export default VideoBanner;
