// Import necessary dependencies
import React from 'react';
import './Hero.css';

// Hero component
const Hero = () => {
  // Inline style for Raleway font
  const ralewayFont = { fontFamily: "'Raleway', sans-serif" };

  return (
    <div className="hero" style={ralewayFont}>
      <h2 style={ralewayFont}>
        Not launched. <br />
        Not ready. <br />
        follow me on{' '}
        <a href="https://x.com/the_k_project" style={ralewayFont}>
          X
        </a>
        <br />
        But getting closer every single day.
      </h2>
    </div>
  );
};

export default Hero; 