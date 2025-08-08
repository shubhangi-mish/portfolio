'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { CIcon } from '@coreui/icons-react'
import { cibLeetcode } from '@coreui/icons'
import AboutMeSection from '../components/AboutMeSection'
import MosaicGrid from '../components/MosaicGrid'
import MainPageHeader from '../components/MainPageHeader'
import DroppingText from '../components/DroppingText'
import HeroSection from '../components/HeroSection'
import ContactSection from '../components/ContactSection'


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
          <div className="mac-title">Shubhangi Mishra</div>
          <nav className="mac-nav-continuous">
            <a href="#about" className="mac-nav-link">ABOUT</a>
            <a href="/experience" className="mac-nav-link">EXPERIENCE</a>
            <a href="/education" className="mac-nav-link">EDUCATION</a>
            <a href="/projects" className="mac-nav-link">PROJECTS</a>
            <a href="/achievements" className="mac-nav-link">ACHIEVEMENTS</a>
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
          
          {/* Recent Highlights Section */}
          <section id="highlights" className="section-card-mac-wide">
            <h2 className="section-title-mac">Recent Highlights</h2>
            <div className="highlights-container">
              <div className="highlights-marquee">
                <div className="highlight-item">
                  <div className="highlight-icon">🏆</div>
                  <h3>AWS AIML Scholar</h3>
                  <p>Selected for prestigious AI/ML program</p>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">📚</div>
                  <h3>Springer Publication</h3>
                  <p>Research published in IC4S conference</p>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">🌍</div>
                  <h3>2 Continents</h3>
                  <p>Worked across Europe & US</p>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">⚡</div>
                  <h3>Hackathon Winner</h3>
                  <p>Appian AI Challenge champion</p>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">🤖</div>
                  <h3>AI Pipeline</h3>
                  <p>70%+ Hugging Face models</p>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">💼</div>
                  <h3>First Hire</h3>
                  <p>Co-built hiring assistant MVP</p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Contact Section */}
          <section id="contact">
            <ContactSection />
          </section>
          
          {/* Footer inside Mac window */}
          <footer className="footer-mac">
            <div>shubhangi3mar@gmail.com</div>
            <div className="footer-socials-mac">
              <a className="footer-social-mac" href="https://www.linkedin.com/in/shubhangimishra3302/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a className="footer-social-mac" href="https://github.com/shubhangi-mish" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a className="footer-social-mac" href="https://leetcode.com/u/shubhangi3mar/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
                <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M22,14.355c0-0.742-0.564-1.346-1.26-1.346H10.676c-0.696,0-1.26,0.604-1.26,1.346s0.563,1.346,1.26,1.346H20.74C21.436,15.702,22,15.098,22,14.355z"></path>
                  <path d="M3.482,18.187l4.313,4.361C8.768,23.527,10.113,24,11.598,24c1.485,0,2.83-0.512,3.805-1.494l2.588-2.637c0.51-0.514,0.492-1.365-0.039-1.9c-0.531-0.535-1.375-0.553-1.884-0.039l-2.676,2.607c-0.462,0.467-1.102,0.662-1.809,0.662s-1.346-0.195-1.81-0.662l-4.298-4.363c-0.463-0.467-0.696-1.15-0.696-1.863c0-0.713,0.233-1.357,0.696-1.824l4.285-4.38c0.463-0.467,1.116-0.645,1.822-0.645s1.346,0.195,1.809,0.662l2.676,2.606c0.51,0.515,1.354,0.497,1.885-0.038c0.531-0.536,0.549-1.387,0.039-1.901l-2.588-2.636c-0.649-0.646-1.471-1.116-2.392-1.33l-0.034-0.007l2.447-2.503c0.512-0.514,0.494-1.366-0.037-1.901c-0.531-0.535-1.376-0.552-1.887-0.038L3.482,10.476C2.509,11.458,2,12.813,2,14.311C2,15.809,2.509,17.207,3.482,18.187z"></path>
                </svg>
              </a>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}