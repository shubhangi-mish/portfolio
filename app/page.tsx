'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import AboutMeSection from '../components/AboutMeSection'
import MosaicGrid from '../components/MosaicGrid'
import MainHeader from '../components/MainHeader'

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
            <a href="#work" className="mac-nav-link">DESIGNER</a>
            <a href="#contact" className="mac-nav-link">DEVELOPER</a>
            <a href="#contact" className="mac-nav-link">CONTACT</a>
          </nav>
        </div>

        {/* Content Sections */}
        <div className="mac-content-continuous">
          {/* 3D Animated Header */}
          <MainHeader />
          
          {/* Hero Section - Clean Start */}
          <section className="hero-section-mac-wide">
            <div className="hero-content-flex">
              {/* Left side - Text */}
              <div className="hero-text-center">
                <h1 className="hero-title-mac">
                  Hi there! I am Shubhangi Mishra.
                </h1>
                <p className="hero-subtitle">
                  Welcome to my portfolio
                </p>
              </div>
              
              {/* Right side - Photo */}
              <div className="hero-image-right">
                <Image src="/meee-removebg-preview.png" alt="Your Photo" width={400} height={400} className="hero-img-right" priority />
              </div>
            </div>
          </section>
          
          {/* Downward Arrow */}
          <div className="down-arrow">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 9L12 15L18 9" stroke="#FFD600" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          
          {/* 3D Image Section with Flying Animation */}
          <section className="hero-section-3d-content-compact">
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              gap: '30px',
              padding: '20px'
            }}>
              {/* Left side - Welcome message and navigation */}
              <div style={{
                flex: 1,
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
                    fontSize: '2rem',
                    fontWeight: '900',
                    marginBottom: '0.5rem',
                    lineHeight: '1.2'
                  }}>
                    Welcome to Shubhangi's Portfolio
                  </h1>
                  <p style={{
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: '#444',
                    marginBottom: '1.5rem'
                  }}>
                    Let's go meet her!
                  </p>
                </div>

                {/* Mosaic Grid Navigation */}
                <MosaicGrid />
              </div>

              {/* Right side - 3D Character */}
              <div style={{ 
                flex: 1,
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
                    width={350} 
                    height={450} 
                    priority 
                    style={{
                      filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.2))',
                      width: '350px',
                      height: '450px',
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