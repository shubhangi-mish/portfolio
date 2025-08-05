import React from 'react';
import Image from 'next/image';

const ProjectsSection: React.FC = () => {
  return (
    <div className="projects-card">
      <div className="projects-grid">
        <div className="project-item">
          <div className="project-image">
            <div className="project-placeholder">UI/UX</div>
          </div>
          <div className="project-content">
            <h3>E-Commerce Platform</h3>
            <p>Modern e-commerce website with responsive design and user-friendly interface.</p>
            <div className="project-tech">
              <span className="tech-tag">React</span>
              <span className="tech-tag">Figma</span>
              <span className="tech-tag">Node.js</span>
            </div>
            <div className="project-links">
              <a href="#" className="project-link">Live Demo</a>
              <a href="#" className="project-link">GitHub</a>
            </div>
          </div>
        </div>

        <div className="project-item">
          <div className="project-image">
            <div className="project-placeholder">Mobile</div>
          </div>
          <div className="project-content">
            <h3>Fitness App</h3>
            <p>Mobile application for tracking workouts and personal fitness goals.</p>
            <div className="project-tech">
              <span className="tech-tag">React Native</span>
              <span className="tech-tag">Firebase</span>
              <span className="tech-tag">TypeScript</span>
            </div>
            <div className="project-links">
              <a href="#" className="project-link">Live Demo</a>
              <a href="#" className="project-link">GitHub</a>
            </div>
          </div>
        </div>

        <div className="project-item">
          <div className="project-image">
            <div className="project-placeholder">Web</div>
          </div>
          <div className="project-content">
            <h3>Portfolio Website</h3>
            <p>Personal portfolio website with modern design and interactive elements.</p>
            <div className="project-tech">
              <span className="tech-tag">Next.js</span>
              <span className="tech-tag">Tailwind CSS</span>
              <span className="tech-tag">TypeScript</span>
            </div>
            <div className="project-links">
              <a href="#" className="project-link">Live Demo</a>
              <a href="#" className="project-link">GitHub</a>
            </div>
          </div>
        </div>

        <div className="project-item">
          <div className="project-image">
            <div className="project-placeholder">Dashboard</div>
          </div>
          <div className="project-content">
            <h3>Analytics Dashboard</h3>
            <p>Data visualization dashboard with real-time analytics and reporting.</p>
            <div className="project-tech">
              <span className="tech-tag">Vue.js</span>
              <span className="tech-tag">D3.js</span>
              <span className="tech-tag">Python</span>
            </div>
            <div className="project-links">
              <a href="#" className="project-link">Live Demo</a>
              <a href="#" className="project-link">GitHub</a>
            </div>
          </div>
        </div>

        <div className="project-item">
          <div className="project-image">
            <div className="project-placeholder">API</div>
          </div>
          <div className="project-content">
            <h3>REST API</h3>
            <p>Backend API with authentication, database management, and documentation.</p>
            <div className="project-tech">
              <span className="tech-tag">Express.js</span>
              <span className="tech-tag">MongoDB</span>
              <span className="tech-tag">JWT</span>
            </div>
            <div className="project-links">
              <a href="#" className="project-link">Live Demo</a>
              <a href="#" className="project-link">GitHub</a>
            </div>
          </div>
        </div>

        <div className="project-item">
          <div className="project-image">
            <div className="project-placeholder">Game</div>
          </div>
          <div className="project-content">
            <h3>Browser Game</h3>
            <p>Interactive browser game with canvas graphics and game mechanics.</p>
            <div className="project-tech">
              <span className="tech-tag">JavaScript</span>
              <span className="tech-tag">Canvas API</span>
              <span className="tech-tag">HTML5</span>
            </div>
            <div className="project-links">
              <a href="#" className="project-link">Live Demo</a>
              <a href="#" className="project-link">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection; 