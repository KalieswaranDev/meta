import React from 'react';
import '../Style/Preloader.css';

const Preloader = () => {
  return (
    <div id="page">
      <div id="container">
        <div id="ring"></div>
        <div id="ring"></div>
        <div id="ring"></div>
        <div id="ring"></div>
        <div id="h3">loading</div>
      </div>
    </div>
  );
};

export default Preloader;
