import React from 'react';

const AchievementsSection: React.FC = () => {
  const achievements = [
    {
      id: 1,
      title: "First Place - Hackathon 2023",
      organization: "Tech Innovation Challenge",
      date: "December 2023",
      description: "Led a team of 4 developers to create an AI-powered sustainability app that won first place among 50+ teams. Implemented machine learning algorithms for carbon footprint tracking.",
      skills: ["React", "Python", "TensorFlow", "AWS"],
      category: "Competition"
    },
    {
      id: 2,
      title: "Best Technical Innovation Award",
      organization: "University Engineering Department",
      date: "November 2023",
      description: "Developed a blockchain-based voting system that ensures transparency and security in digital elections. The project was recognized for its innovative approach to solving real-world problems.",
      skills: ["Blockchain", "Solidity", "Web3.js", "Node.js"],
      category: "Innovation"
    },
    {
      id: 3,
      title: "Dean's List - Academic Excellence",
      organization: "Computer Science Department",
      date: "2022-2023",
      description: "Maintained a GPA of 3.9+ while taking advanced courses in AI, Machine Learning, and Software Engineering. Recognized for outstanding academic performance and research contributions.",
      skills: ["Academic Excellence", "Research", "Leadership"],
      category: "Academic"
    },
    {
      id: 4,
      title: "Open Source Contributor of the Month",
      organization: "GitHub Community",
      date: "October 2023",
      description: "Contributed significantly to popular open-source projects including React libraries and Python frameworks. Helped improve documentation and fix critical bugs affecting thousands of developers.",
      skills: ["Open Source", "Git", "Documentation", "Community"],
      category: "Community"
    },
    {
      id: 5,
      title: "Student Leadership Award",
      organization: "University Student Council",
      date: "May 2023",
      description: "Served as President of the Computer Science Club, organizing workshops, hackathons, and networking events. Increased club membership by 150% and established industry partnerships.",
      skills: ["Leadership", "Event Planning", "Networking", "Management"],
      category: "Leadership"
    }
  ];

  return (
    <div className="achievements-card">
      <div className="achievements-content">
        <h2 className="achievements-title">My Achievements & Recognition</h2>
        <p className="achievements-subtitle">
          A collection of awards, recognitions, and milestones that showcase my dedication to excellence in technology and innovation.
        </p>
        
        <div className="achievements-timeline">
          {achievements.map((achievement, index) => (
            <div key={achievement.id} className="timeline-item">
              <div className="timeline-marker">
                <div className="marker-icon">🏆</div>
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>{achievement.title}</h3>
                  <div className="organization">{achievement.organization}</div>
                  <div className="date">{achievement.date}</div>
                  <div className="category-badge">{achievement.category}</div>
                </div>
                <div className="timeline-description">
                  <p>{achievement.description}</p>
                </div>
                <div className="achievement-skills">
                  {achievement.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="achievements-stats">
          <div className="stat-item">
            <div className="stat-number">15+</div>
            <div className="stat-label">Awards Won</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">50+</div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">1000+</div>
            <div className="stat-label">Hours Volunteered</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">25+</div>
            <div className="stat-label">Open Source Contributions</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementsSection; 