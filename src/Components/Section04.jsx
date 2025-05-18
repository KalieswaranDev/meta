import React, { useState, useRef, useEffect } from 'react';
import '../Style/Section04.css';
import bannerVideo2 from '../Asset/Banner01.mp4';

const VideoBanner = () => {
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener('loadeddata', () => {
        setIsLoading(false);
      });
    }
  }, []);

  return (
    <section className="video-banner" id="section04">
      {isLoading && <div className="loading">Loading...</div>}

      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="background-video"
      >
        <source src={bannerVideo2} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="video-overlay"></div>

      <div className="video-content">
        <p className="tagline">Welcome to the Future</p>
        <h1 className="main-heading">Experience the Next Generation</h1>
        <p className="sub-heading">Discover the possibilities of tomorrow, today</p>
        <button className="cta-button">Learn More</button>
      </div>
    </section>
  );
};

export default VideoBanner;
