import React from 'react';
import { motion } from 'framer-motion';

const ExperienceSection: React.FC = () => {
  const timelineItems = [
    {
      id: 1,
      position: 'left',
      title: 'AI Innovator',
      company: 'Openfabric AI',
      duration: 'May - Jun 2025',
      location: 'Remote trainee, Sibiu, Romania',
      description: 'Created AI applications, one such project was a huggingface app that could run any AI model from huggingface and I was able to get 70% of the models to run thorough an automated pipeline created by me within the openfabric ecosystem.',
      skills: ['AI Applications', 'HuggingFace', 'Automated Pipeline', 'Openfabric Ecosystem']
    },
    {
      id: 2,
      position: 'right',
      title: 'Artificial Intelligence Intern',
      company: 'Hello Recruiter',
      duration: 'Jul - Dec 2024',
      location: 'Remote Intern, Florida, USA',
      description: 'Worked in a U.S.-based startup remotely and created an AI application for recruiters and applicants using AI that streamlines the recruiting process and helps in candidate interview preparation.',
      skills: ['AI Development', 'Recruitment Tech', 'Startup Experience', 'Remote Work']
    },
    {
      id: 3,
      position: 'left',
      title: 'Blockchain Development Intern',
      company: 'GSSIPU',
      duration: 'Sep - Oct 2023',
      location: 'Intern, New Delhi',
      description: 'Worked under my college professor as a blockchain intern and developed a Decentralized application along with understanding deep concepts of Blockchain, huge focus on was on developing multi-user blockchain dapp.',
      skills: ['Blockchain', 'DApp Development', 'Multi-user Systems', 'Smart Contracts']
    },
    {
      id: 4,
      position: 'right',
      title: 'International Project Contributor',
      company: 'Omdena',
      duration: 'Aug - Sept 2023',
      location: 'Remote project contributor (UAE Chapter)',
      description: 'Contributed to the Abu Dhabi Open Data Intelligence project, collaborating with the Omdena community to develop a voice/text engine for advanced data analytics using Falcon LLM, prioritizing ethical AI practices.',
      skills: ['Falcon LLM', 'Data Analytics', 'Voice/Text Engine', 'Ethical AI']
    }
  ];

  return (
    <div className="experience-card">
      <h2 className="experience-title">Experience</h2>
      
      <div className="experience-timeline-center">
        {/* Central Timeline Line */}
        <motion.div 
          className="timeline-center-line"
          initial={{ height: 0 }}
          whileInView={{ height: '100%' }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        ></motion.div>
        
        {/* Timeline Items */}
        {timelineItems.map((item, index) => (
          <motion.div
            key={item.id}
            className={`timeline-item-center ${item.position}`}
            initial={{ 
              opacity: 0,
              x: item.position === 'left' ? -100 : 100,
              y: 50
            }}
            whileInView={{ 
              opacity: 1,
              x: 0,
              y: 0
            }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              duration: 0.8,
              delay: index * 0.3,
              ease: "easeOut"
            }}
          >
            <motion.div 
              className="timeline-marker-center"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.3 + 0.4,
                ease: "easeOut"
              }}
            ></motion.div>
            <motion.div 
              className="timeline-content-center"
              initial={{ 
                opacity: 0,
                scale: 0.8,
                x: item.position === 'left' ? -50 : 50
              }}
              whileInView={{ 
                opacity: 1,
                scale: 1,
                x: 0
              }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6,
                delay: index * 0.3 + 0.2,
                ease: "easeOut"
              }}
            >
              <div className="timeline-header">
                <h3>{item.title}</h3>
                <span className="company">{item.company}</span>
                <span className="duration">{item.duration}</span>
                <span className="location">{item.location}</span>
              </div>
              <p className="timeline-description">
                {item.description}
              </p>
              <div className="timeline-skills">
                {item.skills.map((skill, skillIndex) => (
                  <motion.span 
                    key={skillIndex}
                    className="skill-tag"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.4,
                      delay: index * 0.3 + 0.4 + skillIndex * 0.1,
                      ease: "easeOut"
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="experience-stats"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="stat-item">
          <div className="stat-number">4+</div>
          <div className="stat-label">Diverse Roles</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">1</div>
          <div className="stat-label">Years Experience</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">10+</div>
          <div className="stat-label">Technologies</div>
        </div>
      </motion.div>
    </div>
  );
};

export default ExperienceSection; 