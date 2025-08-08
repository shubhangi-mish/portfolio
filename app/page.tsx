'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import AboutMeSection from '../components/AboutMeSection'
import MosaicGrid from '../components/MosaicGrid'
import MainPageHeader from '../components/MainPageHeader'
import DroppingText from '../components/DroppingText'
import HeroSection from '../components/HeroSection'


export default function Home() {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ["Designer", "Developer", "Entrepreneur"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

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
          <div className="mac-title">Portfolio</div>
          <nav className="mac-nav-continuous">
            <a href="#about" className="mac-nav-link">ABOUT</a>
            <a href="/experience" className="mac-nav-link">EXPERIENCE</a>
            <a href="/education" className="mac-nav-link">EDUCATION</a>
            <a href="/projects" className="mac-nav-link">PROJECTS</a>
            <a href="/skills" className="mac-nav-link">SKILLS</a>
            <a href="#contact" className="mac-nav-link">CONTACT</a>
          </nav>
        </div>

        {/* Content Sections */}
        <div className="mac-content-continuous">
                    {/* 3D Animated Header */}
          <MainPageHeader />
          
          {/* Hero Section with Mosaic Code Editor */}
          <HeroSection />
            
            {/* 3D Image Section with Flying Animation */}
          <section className="hero-section-3d-content-compact">
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              gap: '15px',
              padding: '20px'
            }}>
              {/* Left side - Welcome message and navigation */}
              <div style={{
                flex: 1.5,
                textAlign: 'left',
                color: '#222',
                fontFamily: 'var(--font-main)',
                zIndex: 20
              }}>
                {/* Welcome message */}
                <div style={{
                  marginBottom: '25px'
                }}>
                  <h1 style={{
                    fontSize: '1.8rem',
                    fontWeight: '900',
                    marginBottom: '1rem',
                    lineHeight: '1',
                    position: 'relative'
                  }}>
                    <span className="typing-text" data-text="What do you wanna explore first?">What do you wanna explore first?</span>
                  </h1>
                </div>

                {/* Mosaic Grid Navigation */}
                <MosaicGrid />
              </div>

              {/* Right side - 3D Character */}
              <div style={{ 
                flex: 0.8,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <div 
                  className="flying-character-container"
                  style={{
                    position: 'relative',
                    zIndex: 10,
                    transform: 'translateY(0) translateX(0) scale(1) rotate(0deg)',
                    opacity: 1,
                    transformOrigin: 'center bottom'
                  }}
                >
                  <Image 
                    src="/5132551-removebg-preview.png" 
                    alt="3D Character" 
                    width={280} 
                    height={350} 
                    priority 
                    className="floating-character"
                    style={{
                      width: '250px',
                      height: '320px',
                      objectFit: 'contain'
                    }}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="section-card-mac-wide">
            <AboutMeSection />
          </section>
          
          {/* Work Section */}
          <section id="work" className="section-card-mac-wide">
            <h2 className="section-title-mac">Recent Work</h2>
            <div className="work-3d-mac">
              {/* Placeholder for 3D/flat illustration */}
              <Image src="/3d-female-character-working-desk-with-laptop.png" alt="3D Work" width={200} height={200} />
            </div>
            <div className="section-desc-mac">
              Here are some of my recent projects and collaborations.<br />
              <span style={{ color: '#666', fontSize: '1rem', marginTop: '1rem', display: 'block' }}>
                (This is a placeholder work section. Add your projects here!)
              </span>
            </div>
            <button className="cta-btn-mac mt-4">Click to see</button>
          </section>
          
          {/* Additional sections for more scroll content */}
          <section className="section-card-mac-wide">
            <h2 className="section-title-mac">Skills & Technologies</h2>
            <div className="section-desc-mac">
              Frontend Development, UI/UX Design, React.js, Adobe Creative Suite, Figma, and more.
            </div>
          </section>
          
          <section className="section-card-mac-wide">
            <h2 className="section-title-mac">Experience</h2>
            <div className="section-desc-mac">
              Years of experience in creating beautiful, functional, and user-centered digital experiences.
            </div>
          </section>
          
          {/* Footer inside Mac window */}
          <footer className="footer-mac" id="contact">
            <div>shubhangi.mishra@email.com</div>
            <div className="footer-socials-mac">
              <a className="footer-social-mac" href="#" aria-label="Behance">Bē</a>
              <a className="footer-social-mac" href="#" aria-label="LinkedIn">in</a>
              <a className="footer-social-mac" href="#" aria-label="GitHub">◎</a>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}