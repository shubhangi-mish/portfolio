import React from 'react';
import { useRouter } from 'next/navigation';

const MosaicGrid: React.FC = () => {
  const router = useRouter();

  const handleTileClick = (route: string) => {
    router.push(route);
  };

  return (
    <div className="mosaic-container">
      <div className="mosaic-grid">
        <div className="mosaic-tile" id="tile__1" onClick={() => handleTileClick('/about')}>
          <h3>About Me</h3>
          <p>Learn more about my journey</p>
        </div>
        <div className="mosaic-tile" id="tile__2" onClick={() => handleTileClick('/portfolio')}>
          <h3>Portfolio</h3>
          <p>View my latest projects</p>
        </div>
        <div className="mosaic-tile" id="tile__3" onClick={() => handleTileClick('/experience')}>
          <h3>Experience</h3>
          <p>My professional background</p>
        </div>
        <div className="mosaic-tile" id="tile__4" onClick={() => handleTileClick('/skills')}>
          <h3>Skills</h3>
          <p>Technical expertise</p>
        </div>
        <div className="mosaic-tile" id="tile__5" onClick={() => handleTileClick('/contact')}>
          <h3>Contact</h3>
          <p>Get in touch</p>
        </div>
        <div className="mosaic-tile" id="tile__6" onClick={() => handleTileClick('/blog')}>
          <h3>Blog</h3>
          <p>Thoughts & insights</p>
        </div>
      </div>
    </div>
  );
};

export default MosaicGrid; 