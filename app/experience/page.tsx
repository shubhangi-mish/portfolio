'use client'

import ExperienceSection from '../../components/ExperienceSection';
import ExperienceHeader from '../../components/ExperienceHeader';

export default function ExperiencePage() {
  return (
    <div className="yellow-bg min-h-screen flex flex-col items-center justify-start">
      {/* Mac Window with Content */}
      <div className="mac-window-continuous">
        {/* Mac Window Header with Navigation */}
        <div className="mac-header-continuous">
          <div className="mac-dots">
            <div className="mac-dot red"></div>
            <div className="mac-dot yellow"></div>
            <div className="mac-dot green"></div>
          </div>
          <div className="mac-title">Experience - Portfolio</div>
          <nav className="mac-nav-continuous">
            <a href="/" className="mac-nav-link">HOME</a>
            <a href="/about" className="mac-nav-link">ABOUT</a>
            <a href="/experience" className="mac-nav-link">EXPERIENCE</a>
            <a href="/contact" className="mac-nav-link">CONTACT</a>
          </nav>
        </div>

        {/* Content Sections */}
        <div className="mac-content-continuous">
          <ExperienceHeader />
          <ExperienceSection />
        </div>
      </div>
    </div>
  );
} 