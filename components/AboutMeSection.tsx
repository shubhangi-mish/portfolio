import React from 'react';

const AboutMeSection: React.FC = () => {
  return (
    <div className="about-me-card">
      {/* Left Section - Visual/Decorative */}
      <div className="about-me-visual">
        <div className="yellow-gradient-bg">
          <div className="abstract-shape shape-1"></div>
          <div className="abstract-shape shape-2"></div>
          <div className="abstract-shape shape-3"></div>
          <div className="abstract-shape shape-4"></div>
        </div>
      </div>
      
      {/* Right Section - Content */}
      <div className="about-me-content">
        <h2 className="about-me-title">About Me</h2>
        <div className="about-me-text">
          <p className="about-me-paragraph">
            Hi, I'm <strong>Shubhangi Mishra</strong>, a 2025 graduate with dual degrees in B.Tech Computer Science (GGSIPU) and B.Sc. Data Science (IIT Madras). I've worked across two continents in high-impact AI roles, delivering real products for global, remote teams.
          </p>
          <p className="about-me-paragraph">
            At <strong><u>Openfabric AI</u></strong> (Europe), I built an automated pipeline that ran 70%+ Hugging Face models inside their ecosystem. At <strong>Hello Recruiter</strong> (US), I was the first hire and co-built their AI-powered hiring assistant MVP in just six months. Now, I lead the AI architecture at <strong>Fastr Payments</strong>, a new fintech venture.
          </p>
          <div className="about-me-separator"></div>
          <p className="about-me-paragraph">
            I've contributed to global LLM tooling at <strong>Omdena UAE</strong>, developed blockchain DApps, and published research on deepfake detection and blockchain integrity. I build with Python, FastAPI, React, LangChain, Docker, Chroma, Pinecone, Solidity, and more — creating AI systems, LLM tools, and automation pipelines from scratch.
          </p>
          <p className="about-me-paragraph">
            If you're looking for someone who can build, own, and lead from Day 1 — <strong>I'm ready</strong>.
          </p>
        </div>
        <div className="about-me-border-line"></div>
      </div>
    </div>
  );
};

export default AboutMeSection; 