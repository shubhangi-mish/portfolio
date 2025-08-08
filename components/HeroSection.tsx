import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  const [cssText, setCssText] = useState('');
  const [jsText, setJsText] = useState('');
  const [htmlText, setHtmlText] = useState('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentAchievementIndex, setCurrentAchievementIndex] = useState(0);
  const [currentHtmlIndex, setCurrentHtmlIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const roles = [
    "DEVELOPER",
    "RESEARCHER", 
    "PRODUCT MANAGER",
    "LEADER"
  ];

  const achievements = [
    "AWS AIML SCHOLAR",
    "PUBLISHED RESEARCHER IN SPRINGER LNNS (IC4S)",
    "2 INTERNSHIPS in 2 CONTINENTS",
    "HACKATHON WINNER - APPIAN AI CHALLENGE"
  ];

  const htmlMessage = "HELLO THERE, I AM SHUBHANGI MISHRA, 2025 GRADUATE";

  // HTML tab typing effect
  useEffect(() => {
    let currentText = '';
    let currentCharIndex = 0;

    const typeInterval = setInterval(() => {
      if (currentCharIndex < htmlMessage.length) {
        currentText = htmlMessage.substring(0, currentCharIndex + 1);
        setHtmlText(currentText);
        currentCharIndex++;
      } else {
        // Wait before erasing
        setTimeout(() => {
          const eraseInterval = setInterval(() => {
            if (currentText.length > 0) {
              currentText = currentText.slice(0, -1);
              setHtmlText(currentText);
            } else {
              clearInterval(eraseInterval);
              // Reset to start typing again
              setCurrentHtmlIndex((prev) => prev + 1);
            }
          }, 50); // Erase speed
        }, 2000); // Wait time before erasing
        clearInterval(typeInterval);
      }
    }, 100); // Type speed

    return () => clearInterval(typeInterval);
  }, [currentHtmlIndex]);

  // CSS tab typing effect
  useEffect(() => {
    let currentText = 'I AM A ';
    let currentCharIndex = 0;
    const currentRole = roles[currentRoleIndex];

    const typeInterval = setInterval(() => {
      if (currentCharIndex < currentRole.length) {
        currentText = 'I AM A ' + currentRole.substring(0, currentCharIndex + 1);
        setCssText(currentText);
        currentCharIndex++;
      } else {
        // Wait before erasing the role part
        setTimeout(() => {
          const eraseInterval = setInterval(() => {
            if (currentText.length > 'I AM A '.length) {
              currentText = currentText.slice(0, -1);
              setCssText(currentText);
            } else {
              clearInterval(eraseInterval);
              // Move to next role
              setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
            }
          }, 50); // Erase speed
        }, 1000); // Wait time before erasing
        clearInterval(typeInterval);
      }
    }, 100); // Type speed

    return () => clearInterval(typeInterval);
  }, [currentRoleIndex]);

  // JS tab typing effect
  useEffect(() => {
    let currentText = '';
    let currentCharIndex = 0;
    const currentAchievement = achievements[currentAchievementIndex];

    const typeInterval = setInterval(() => {
      if (currentCharIndex < currentAchievement.length) {
        currentText = currentAchievement.substring(0, currentCharIndex + 1);
        setJsText(currentText);
        currentCharIndex++;
      } else {
        // Wait before erasing
        setTimeout(() => {
          const eraseInterval = setInterval(() => {
            if (currentText.length > 0) {
              currentText = currentText.slice(0, -1);
              setJsText(currentText);
            } else {
              clearInterval(eraseInterval);
              // Move to next achievement
              setCurrentAchievementIndex((prev) => (prev + 1) % achievements.length);
            }
          }, 50); // Erase speed
        }, 1000); // Wait time before erasing
        clearInterval(typeInterval);
      }
    }, 100); // Type speed

    return () => clearInterval(typeInterval);
  }, [currentAchievementIndex]);

  return (
    <section className="hero-section">
      {/* Left side - Code Editor Tabs */}
      <div className="hero-left">
        <div className="code-editor">
          <div className="code-tab html-tab">
            <div className="tab-header">
              <div className="tab-icon">⚙️</div>
              <span className="tab-title">HTML</span>
              <div className="tab-close">▼</div>
            </div>
            <div className="tab-content">
              <code>
                <span className="tag">&lt;div</span>
                <span className="attr"> class</span>
                <span className="equals">=</span>
                <span className="string">"rect"</span>
                <span className="tag">&gt;</span>
                <span className="tag">&lt;/div&gt;</span>
                <br />
                <span className="tag">&lt;h1</span><span className="tag">&gt;</span>
                <br />
                <span className="string">  {htmlText}</span>
                <br />
                <span className="tag">&lt;/h1</span><span className="tag">&gt;</span>
              </code>
            </div>
          </div>

          <div className="code-tab css-tab">
            <div className="tab-header">
              <div className="tab-icon">⚙️</div>
              <span className="tab-title">CSS</span>
              <div className="tab-close">▼</div>
            </div>
            <div className="tab-content">
              <code>
                <span className="selector">.title</span> <span className="brace">{'{'}</span>
                <br />
                <span className="property">  animation</span><span className="colon">:</span>
                <span className="value"> typewriter</span>
                <span className="value"> 3s</span>
                <span className="value"> infinite</span><span className="semicolon">;</span>
                <br />
                <span className="property">  content</span><span className="colon">:</span>
                <span className="string"> "{cssText}"</span><span className="semicolon">;</span>
                <br />
                <span className="brace">{'}'}</span>
              </code>
            </div>
          </div>

          <div className="code-tab js-tab">
            <div className="tab-header">
              <div className="tab-icon">⚙️</div>
              <span className="tab-title">JS</span>
              <div className="tab-close">▼</div>
            </div>
            <div className="tab-content">
              <code>
                <span className="keyword">const</span>
                <span className="variable"> achievements</span>
                <span className="equals"> =</span>
                <span className="bracket">[</span>
                <br />
                <span className="string">  "{jsText}"</span>
                <br />
                <span className="bracket">]</span><span className="semicolon">;</span>
                <br />
                <br />
                <span className="variable">achievements</span><span className="paren">.</span><span className="function">forEach</span><span className="paren">(</span><span className="variable">achievement</span> <span className="equals">=</span><span className="equals">{'>'}</span> <span className="function">console</span><span className="paren">.</span><span className="function">log</span><span className="paren">(</span><span className="variable">achievement</span><span className="paren">)</span><span className="paren">)</span><span className="semicolon">;</span>
              </code>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Photo */}
      <div className="hero-right">
        <div className="photo-container">
          <Image 
            src="/meee-removebg-preview.png" 
            alt="Shubhangi Mishra" 
            width={600} 
            height={600} 
            className="hero-photo"
            priority
          />
          <div className="sparkle-1">✨</div>
          <div className="sparkle-2">✨</div>
          <div className="sparkle-3">✨</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 