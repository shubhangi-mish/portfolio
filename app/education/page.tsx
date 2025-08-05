import React from 'react';
import EducationHeader from '../../components/EducationHeader';
import EducationSection from '../../components/EducationSection';

export default function EducationPage() {
  return (
    <div className="yellow-bg min-h-screen">
      <div className="mac-window-continuous">
        {/* Mac Window Header */}
        <div className="mac-header-continuous">
          <div className="mac-dots">
            <div className="mac-dot red"></div>
            <div className="mac-dot yellow"></div>
            <div className="mac-dot green"></div>
          </div>
          <div className="mac-title">Education</div>
          <nav className="mac-nav-continuous">
            <a href="/" className="mac-nav-link">HOME</a>
            <a href="/experience" className="mac-nav-link">EXPERIENCE</a>
            <a href="/projects" className="mac-nav-link">PROJECTS</a>
            <a href="/skills" className="mac-nav-link">SKILLS</a>
          </nav>
        </div>

        {/* Content */}
        <div className="mac-content-continuous">
          <EducationHeader />
          <EducationSection />
        </div>
      </div>
    </div>
  );
} 