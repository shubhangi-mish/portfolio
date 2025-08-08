'use client'

import React from 'react';
import { motion } from 'framer-motion';

const EducationSection: React.FC = () => {
  const educationItems = [
    {
      id: 1,
      title: 'Bachelor of Technology in CSE- Industrial Internet of Things',
      institution: 'GURU GOBIND SINGH INDRAPRASTHA UNIVERSITY',
      location: 'New Delhi',
      duration: '2021-25',
      cgpa: '8.9',
      description: 'Bachelor of Technology in Computer Science and Engineering with specialization in Industrial Internet of Things.',
      skills: ['CSE', 'IoT', 'Industrial IoT', 'Computer Science']
    },
    {
      id: 2,
      title: 'Bachelor of Science in Data Science and Applications',
      institution: 'INDIAN INSTITUTE OF TECHNOLOGY, MADRAS',
      location: 'Online Degree',
      duration: '2022-26',
      cgpa: '7.0',
      description: 'Online Bachelor of Science degree in Data Science and Applications.',
      skills: ['Data Science', 'Applications', 'Online Learning', 'Analytics']
    },
    {
      id: 3,
      title: 'Class 12th',
      institution: 'Queens Valley School',
      location: 'New Delhi',
      duration: 'CBSE Board',
      cgpa: '76%',
      description: 'Class 12th from Queens Valley School under CBSE Board.',
      skills: ['CBSE', 'Class 12th', 'High School']
    },
    {
      id: 4,
      title: 'Class 10th',
      institution: 'Queens Valley School',
      location: 'New Delhi',
      duration: 'CBSE Board',
      cgpa: '91%',
      description: 'Class 10th from Queens Valley School under CBSE Board.',
      skills: ['CBSE', 'Class 10th', 'High School']
    }
  ];

  return (
    <div className="education-card">
      <h2 className="education-title">Education</h2>
      
      <div className="education-timeline-center">
        {/* Timeline Center Line */}
        <motion.div 
          className="timeline-center-line"
          initial={{ height: 0 }}
          whileInView={{ height: '100%' }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeInOut" }}
        ></motion.div>
        
        {/* Education Items */}
        {educationItems.map((item, index) => (
          <motion.div
            key={item.id}
            className={`timeline-item-center ${index % 2 === 0 ? 'left' : 'right'}`}
            initial={{ 
              opacity: 0,
              y: 50,
              x: index % 2 === 0 ? -100 : 100
            }}
            whileInView={{ 
              opacity: 1,
              y: 0,
              x: 0
            }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              duration: 0.8,
              delay: index * 0.4,
              ease: "easeOut"
            }}
          >
            <motion.div 
              className="timeline-marker-center"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6,
                delay: index * 0.4 + 0.3,
                ease: "easeOut"
              }}
            >
              <div className="education-icon">🎓</div>
            </motion.div>
            <motion.div 
              className="timeline-content-center"
              initial={{ 
                opacity: 0,
                scale: 0.8,
                x: index % 2 === 0 ? -50 : 50
              }}
              whileInView={{ 
                opacity: 1,
                scale: 1,
                x: 0
              }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6,
                delay: index * 0.4 + 0.2,
                ease: "easeOut"
              }}
            >
              <div className="education-header">
                <h3>{item.title}</h3>
                <span className="institution">{item.institution}</span>
                <span className="location">{item.location}</span>
                <span className="duration">{item.duration}</span>
                <span className="cgpa">CGPA: {item.cgpa}</span>
              </div>
              <p className="education-description">
                {item.description}
              </p>
              <div className="education-skills">
                {item.skills.map((skill, skillIndex) => (
                  <motion.span 
                    key={skillIndex}
                    className="education-skill-tag"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.4,
                      delay: index * 0.4 + 0.4 + skillIndex * 0.1,
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
    </div>
  );
};

export default EducationSection; 