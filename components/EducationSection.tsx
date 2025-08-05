import React from 'react';

const EducationSection: React.FC = () => {
  return (
    <div className="education-card">
      <div className="education-content">
        <div className="education-timeline">
          <div className="timeline-item">
            <div className="timeline-marker">
              <div className="marker-icon">🎓</div>
            </div>
            <div className="timeline-content">
              <div className="timeline-header">
                <h3>Master's Degree in Computer Science</h3>
                <div className="institution">University of Technology</div>
                <div className="duration">2022 - 2024</div>
              </div>
              <div className="timeline-description">
                <p>Specialized in Software Engineering and Artificial Intelligence.</p>
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker">
              <div className="marker-icon">📚</div>
            </div>
            <div className="timeline-content">
              <div className="timeline-header">
                <h3>Bachelor's Degree in Computer Science</h3>
                <div className="institution">State University</div>
                <div className="duration">2018 - 2022</div>
              </div>
              <div className="timeline-description">
                <p>Major in Computer Science with focus on Web Development.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationSection; 