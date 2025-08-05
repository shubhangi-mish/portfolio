import React from 'react';

const AboutMeSection: React.FC = () => {
  return (
    <div className="about-me-card">
      {/* Left Section - Visual/Decorative */}
      <div className="about-me-visual">
        <div className="yellow-gradient-bg">
          <div className="abstract-shape shape-1"></div>
          <div className="abstract-shape shape-2"></div>
          <div className="abstract-shape shape-3"></div>
          <div className="abstract-shape shape-4"></div>
        </div>
      </div>
      
      {/* Right Section - Content */}
      <div className="about-me-content">
        <h2 className="about-me-title">About Me</h2>
        <div className="about-me-text">
          <p className="about-me-paragraph">
            <strong>Lorem</strong> ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          </p>
          <p className="about-me-paragraph">
            <strong><u>Gubergren</u></strong> no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
          <div className="about-me-separator"></div>
          <p className="about-me-paragraph">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd <strong>gubergren</strong>, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className="about-me-border-line"></div>
      </div>
    </div>
  );
};

export default AboutMeSection; 