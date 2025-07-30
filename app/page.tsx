'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Home() {
  const [currentRole, setCurrentRole] = useState(0);
  const [isFlying, setIsFlying] = useState(false);
  const roles = ["Designer", "Developer", "Entrepreneur"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Scroll detection for flying animation
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Trigger flying animation when scrolled past 300px
      if (scrollY > 300 && !isFlying) {
        console.log('Scroll triggered flying animation!');
        setIsFlying(true);
      }
      
      // Reset animation when scrolled back to top
      if (scrollY < 100 && isFlying) {
        console.log('Scroll reset animation!');
        setIsFlying(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isFlying]);

  const triggerFlyingAnimation = () => {
    console.log('Button clicked! Current flying state:', isFlying);
    setIsFlying(!isFlying);
    console.log('Flying animation toggled to:', !isFlying);
    
    // Test alert to see if button works
    alert(`Button clicked! Flying state: ${!isFlying}`);
  };

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
          {/* 3D Image Section with Flying Animation */}
          <section className="hero-section-3d-content">
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              gap: '40px'
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
                  marginBottom: '40px'
                }}>
                  <h1 style={{
                    fontSize: '2.5rem',
                    fontWeight: '900',
                    marginBottom: '1rem',
                    lineHeight: '1.2'
                  }}>
                    Welcome to Shubhangi's Portfolio
                  </h1>
                  <p style={{
                    fontSize: '1.2rem',
                    fontWeight: '600',
                    color: '#444',
                    marginBottom: '2rem'
                  }}>
                    Let's go meet her!
                  </p>
                </div>

                {/* Navigation tabs */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '15px'
                }}>
                  <div style={{
                    background: '#FFD600',
                    padding: '15px 30px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    fontSize: '16px',
                    color: '#222',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                    transition: 'all 0.3s ease',
                    width: 'fit-content'
                  }}>
                    About Me
                  </div>
                  <div style={{
                    background: '#FFD600',
                    padding: '15px 30px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    fontSize: '16px',
                    color: '#222',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                    transition: 'all 0.3s ease',
                    width: 'fit-content'
                  }}>
                    Works
                  </div>
                  <div style={{
                    background: '#FFD600',
                    padding: '15px 30px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    fontSize: '16px',
                    color: '#222',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                    transition: 'all 0.3s ease',
                    width: 'fit-content'
                  }}>
                    Experience
                  </div>
                  <div style={{
                    background: '#FFD600',
                    padding: '15px 30px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    fontSize: '16px',
                    color: '#222',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                    transition: 'all 0.3s ease',
                    width: 'fit-content'
                  }}>
                    Contact
                  </div>
                </div>
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
                    zIndex: isFlying ? 999 : 10,
                    transform: isFlying 
                      ? 'translateY(-800px) translateX(0px) scale(1.5) rotate(0deg)' 
                      : 'translateY(0) translateX(0) scale(1) rotate(0deg)',
                    opacity: isFlying ? 0.1 : 1,
                    transition: 'all 2s ease-out',
                    transformOrigin: 'center bottom'
                  }}
                >
                  <Image 
                    src="/5132551-removebg-preview.png" 
                    alt="3D Character" 
                    width={500} 
                    height={650} 
                    priority 
                    style={{
                      filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.2))',
                      width: '500px',
                      height: '650px',
                      objectFit: 'contain'
                    }}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Hero Section */}
          <section className="hero-section-mac-wide">
            <div className="hero-content-flex">
              {/* Text in Center */}
              <div className="hero-text-center">
                <div className="title-container">
                  <h1 className="hero-title-mac">
                    <span className="typing-text">Hi! I am</span>
                    <br />
                    <span className="name-text">Shubhangi Mishra</span>
                    <br />
                    <div className="dynamic-text-container">
                      <span className="arrow">→</span>
                      <span className="dynamic-text">{roles[currentRole]}</span>
                    </div>
                  </h1>
                  {/* Rocket Animation */}
                  <div className="rocket-container">
                    <div className="rocket">🚀</div>
                  </div>
                  {/* Floating elements around text */}
                  <div className="floating-elements">
                    <div className="floating-element">✨</div>
                    <div className="floating-element">💻</div>
                    <div className="floating-element">🎨</div>
                    <div className="floating-element">⚡</div>
                  </div>
                </div>
              </div>
              
              {/* Your Photo on Right */}
              <div className="hero-image-right">
                <div className="frame">
                  <Image src="/meee-removebg-preview.png" alt="Your Photo" width={400} height={400} className="hero-img-right" priority />
                  <div className="text">
                    <span>D</span><span>E</span><span>V</span><span>E</span><span>L</span><span>O</span><span>P</span><span>E</span><span>R</span>
                    <span>P</span><span>R</span><span>O</span><span>D</span><span>U</span><span>C</span><span>T</span>
                    <span>D</span><span>E</span><span>S</span><span>I</span><span>G</span><span>N</span><span>E</span><span>R</span>
                    <span>E</span><span>N</span><span>T</span><span>R</span><span>E</span><span>P</span><span>R</span><span>E</span><span>N</span><span>E</span><span>U</span><span>R</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Downward Arrow */}
          <div className="down-arrow">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 9L12 15L18 9" stroke="#FFD600" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          
          {/* About Section */}
          <section id="about" className="section-card-mac-wide">
            <h2 className="section-title-mac">About Me</h2>
            <div className="section-desc-mac">
              I'm a designer who codes. I strive to create simple, original, and impactful user experiences.<br />
              <span style={{ color: '#666', fontSize: '1rem', marginTop: '1rem', display: 'block' }}>
                I mainly use Adobe Tools to design interactive, user-friendly and responsive UI/UX. And then JavaScript library known as React.js to implement it. I also use many other tools for my ease and to create better front-end experience of my Apps.
              </span>
            </div>
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