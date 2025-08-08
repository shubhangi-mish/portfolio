import React from 'react';
import { useRouter } from 'next/navigation';

const MosaicGrid: React.FC = () => {
  const router = useRouter();

  const handleTileClick = (route: string) => {
    if (route.startsWith('#')) {
      // Handle hash navigation for same page sections
      const element = document.querySelector(route);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Handle external page navigation
      router.push(route);
    }
  };

  return (
    <div className="mosaic-container">
      <div className="mosaic-grid">
        <div className="mosaic-tile" id="tile__1" onClick={() => handleTileClick('/projects')}>
          <h3>Projects</h3>
          <p>View my latest work</p>
        </div>
        <div className="mosaic-tile" id="tile__2" onClick={() => handleTileClick('/achievements')}>
          <h3>Achievements</h3>
          <p>Awards & recognition</p>
        </div>
        <div className="mosaic-tile" id="tile__3" onClick={() => handleTileClick('/experience')}>
          <h3>Experience</h3>
          <p>My professional background</p>
        </div>
        <div className="mosaic-tile" id="tile__4" onClick={() => handleTileClick('/skills')}>
          <h3>Skills</h3>
          <p>Technical expertise</p>
        </div>
        <div className="mosaic-tile" id="tile__5" onClick={() => handleTileClick('#contact')}>
          <h3>Contact</h3>
          <p>Get in touch</p>
        </div>
        <div className="mosaic-tile" id="tile__6" onClick={() => handleTileClick('/education')}>
          <h3>Education</h3>
          <p>Academic background</p>
        </div>
      </div>
    </div>
  );
};

export default MosaicGrid; 