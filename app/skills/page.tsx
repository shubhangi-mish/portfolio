'use client'

import SkillsSection from '../../components/SkillsSection';
import SkillsHeader from '../../components/SkillsHeader';

export default function SkillsPage() {
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
          <div className="mac-title">Skills - Portfolio</div>
          <nav className="mac-nav-continuous">
            <a href="/" className="mac-nav-link">HOME</a>
            <a href="/about" className="mac-nav-link">ABOUT</a>
            <a href="/experience" className="mac-nav-link">EXPERIENCE</a>
            <a href="/projects" className="mac-nav-link">PROJECTS</a>
            <a href="/skills" className="mac-nav-link">SKILLS</a>
            <a href="/contact" className="mac-nav-link">CONTACT</a>
          </nav>
        </div>

        {/* Content Sections */}
        <div className="mac-content-continuous">
          <SkillsHeader />
          <SkillsSection />
        </div>
      </div>
    </div>
  );
} 