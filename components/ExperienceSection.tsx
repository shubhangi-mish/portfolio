import React from 'react';

const ExperienceSection: React.FC = () => {
  return (
    <div className="experience-card">
      <h2 className="experience-title">Experience</h2>
      
      <div className="experience-timeline">
        <div className="timeline-item">
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <div className="timeline-header">
              <h3>Senior UI/UX Designer</h3>
              <span className="company">TechCorp Inc.</span>
              <span className="duration">2022 - Present</span>
            </div>
            <p className="timeline-description">
              Leading design initiatives for web and mobile applications. Collaborating with cross-functional teams to create user-centered solutions that drive business growth.
            </p>
            <div className="timeline-skills">
              <span className="skill-tag">Figma</span>
              <span className="skill-tag">Adobe XD</span>
              <span className="skill-tag">Prototyping</span>
              <span className="skill-tag">User Research</span>
            </div>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <div className="timeline-header">
              <h3>Frontend Developer</h3>
              <span className="company">Digital Solutions Ltd.</span>
              <span className="duration">2020 - 2022</span>
            </div>
            <p className="timeline-description">
              Developed responsive web applications using React.js and modern JavaScript. Implemented design systems and maintained code quality across multiple projects.
            </p>
            <div className="timeline-skills">
              <span className="skill-tag">React.js</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">CSS3</span>
              <span className="skill-tag">Git</span>
            </div>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <div className="timeline-header">
              <h3>Junior Designer</h3>
              <span className="company">Creative Studio</span>
              <span className="duration">2018 - 2020</span>
            </div>
            <p className="timeline-description">
              Created visual designs for branding, marketing materials, and digital assets. Worked closely with clients to understand requirements and deliver creative solutions.
            </p>
            <div className="timeline-skills">
              <span className="skill-tag">Adobe Creative Suite</span>
              <span className="skill-tag">Branding</span>
              <span className="skill-tag">Illustration</span>
              <span className="skill-tag">Print Design</span>
            </div>
          </div>
        </div>
      </div>

      <div className="experience-stats">
        <div className="stat-item">
          <div className="stat-number">5+</div>
          <div className="stat-label">Years Experience</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">50+</div>
          <div className="stat-label">Projects Completed</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">20+</div>
          <div className="stat-label">Happy Clients</div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection; 