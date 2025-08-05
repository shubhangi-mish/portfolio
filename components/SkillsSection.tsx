import React from 'react';

const SkillsSection: React.FC = () => {
  return (
    <div className="skills-card">
      <div className="skills-mosaic-grid">
        {/* First Mosaic Section */}
        <div className="skill-tile square1" id="skill__1">
          <div className="skill-flip-card">
            <div className="skill-front">
              <div className="skill-logo">⚛️</div>
              <h3>React.js</h3>
              <p>Frontend Development</p>
            </div>
            <div className="skill-back">
              <div className="skill-logo">⚛️</div>
              <h3>React.js</h3>
              <div className="expertise-bar">
                <div className="expertise-fill" style={{width: '95%'}}></div>
                <div className="expertise-slider-halo" style={{left: 'calc(95% - 12px)'}}></div>
                <div className="expertise-slider-thumb" style={{left: 'calc(95% - 8px)'}}></div>
                <div className="expertise-percentage">95%</div>
              </div>
              <p>Expert Level</p>
            </div>
          </div>
        </div>
        
        <div className="skill-tile largesquare" id="skill__2">
          <div className="skill-flip-card">
            <div className="skill-front">
              <div className="skill-logo">▲</div>
              <h3>Next.js</h3>
              <p>Full Stack Framework</p>
            </div>
            <div className="skill-back">
              <div className="skill-logo">▲</div>
              <h3>Next.js</h3>
              <div className="expertise-bar">
                <div className="expertise-fill" style={{width: '90%'}}></div>
                <div className="expertise-slider-halo" style={{left: 'calc(90% - 12px)'}}></div>
                <div className="expertise-slider-thumb" style={{left: 'calc(90% - 8px)'}}></div>
                <div className="expertise-percentage">90%</div>
              </div>
              <p>Advanced Level</p>
            </div>
          </div>
        </div>
        
        <div className="skill-tile square2" id="skill__3">
          <div className="skill-flip-card">
            <div className="skill-front">
              <div className="skill-logo">TS</div>
              <h3>TypeScript</h3>
              <p>Type Safety</p>
            </div>
            <div className="skill-back">
              <div className="skill-logo">TS</div>
              <h3>TypeScript</h3>
              <div className="expertise-bar">
                <div className="expertise-fill" style={{width: '85%'}}></div>
                <div className="expertise-slider-halo" style={{left: 'calc(85% - 12px)'}}></div>
                <div className="expertise-slider-thumb" style={{left: 'calc(85% - 8px)'}}></div>
                <div className="expertise-percentage">85%</div>
              </div>
              <p>Advanced Level</p>
            </div>
          </div>
        </div>
        
        <div className="skill-tile smallsquare" id="skill__4">
          <div className="skill-flip-card">
            <div className="skill-front">
              <div className="skill-logo">🟢</div>
              <h3>Node.js</h3>
              <p>Backend Development</p>
            </div>
            <div className="skill-back">
              <div className="skill-logo">🟢</div>
              <h3>Node.js</h3>
              <div className="expertise-bar">
                <div className="expertise-fill" style={{width: '88%'}}></div>
                <div className="expertise-slider-halo" style={{left: 'calc(88% - 12px)'}}></div>
                <div className="expertise-slider-thumb" style={{left: 'calc(88% - 8px)'}}></div>
                <div className="expertise-percentage">88%</div>
              </div>
              <p>Advanced Level</p>
            </div>
          </div>
        </div>
        
        <div className="skill-tile tallrect" id="skill__5">
          <div className="skill-flip-card">
            <div className="skill-front">
              <div className="skill-logo">🎨</div>
              <h3>Figma</h3>
              <p>UI/UX Design</p>
            </div>
            <div className="skill-back">
              <div className="skill-logo">🎨</div>
              <h3>Figma</h3>
              <div className="expertise-bar">
                <div className="expertise-fill" style={{width: '90%'}}></div>
                <div className="expertise-slider-halo" style={{left: 'calc(90% - 12px)'}}></div>
                <div className="expertise-slider-thumb" style={{left: 'calc(90% - 8px)'}}></div>
                <div className="expertise-percentage">90%</div>
              </div>
              <p>Expert Level</p>
            </div>
          </div>
        </div>
        
        <div className="skill-tile widerect" id="skill__6">
          <div className="skill-flip-card">
            <div className="skill-front">
              <div className="skill-logo">🌊</div>
              <h3>Tailwind CSS</h3>
              <p>Styling Framework</p>
            </div>
            <div className="skill-back">
              <div className="skill-logo">🌊</div>
              <h3>Tailwind CSS</h3>
              <div className="expertise-bar">
                <div className="expertise-fill" style={{width: '92%'}}></div>
                <div className="expertise-slider-halo" style={{left: 'calc(92% - 12px)'}}></div>
                <div className="expertise-slider-thumb" style={{left: 'calc(92% - 8px)'}}></div>
                <div className="expertise-percentage">92%</div>
              </div>
              <p>Expert Level</p>
            </div>
          </div>
        </div>

        {/* Second Mosaic Section */}
        <div className="skill-tile square3" id="skill__7">
          <div className="skill-flip-card">
            <div className="skill-front">
              <div className="skill-logo">JS</div>
              <h3>JavaScript</h3>
              <p>Programming Language</p>
            </div>
            <div className="skill-back">
              <div className="skill-logo">JS</div>
              <h3>JavaScript</h3>
              <div className="expertise-bar">
                <div className="expertise-fill" style={{width: '95%'}}></div>
                <div className="expertise-slider-halo" style={{left: 'calc(95% - 12px)'}}></div>
                <div className="expertise-slider-thumb" style={{left: 'calc(95% - 8px)'}}></div>
                <div className="expertise-percentage">95%</div>
              </div>
              <p>Expert Level</p>
            </div>
          </div>
        </div>
        
        <div className="skill-tile largesquare2" id="skill__8">
          <div className="skill-flip-card">
            <div className="skill-front">
              <div className="skill-logo">📊</div>
              <h3>GraphQL</h3>
              <p>API Development</p>
            </div>
            <div className="skill-back">
              <div className="skill-logo">📊</div>
              <h3>GraphQL</h3>
              <div className="expertise-bar">
                <div className="expertise-fill" style={{width: '72%'}}></div>
                <div className="expertise-slider-halo" style={{left: 'calc(72% - 12px)'}}></div>
                <div className="expertise-slider-thumb" style={{left: 'calc(72% - 8px)'}}></div>
                <div className="expertise-percentage">72%</div>
              </div>
              <p>Intermediate Level</p>
            </div>
          </div>
        </div>
        
        <div className="skill-tile square4" id="skill__9">
          <div className="skill-flip-card">
            <div className="skill-front">
              <div className="skill-logo">🔄</div>
              <h3>Redux</h3>
              <p>State Management</p>
            </div>
            <div className="skill-back">
              <div className="skill-logo">🔄</div>
              <h3>Redux</h3>
              <div className="expertise-bar">
                <div className="expertise-fill" style={{width: '85%'}}></div>
                <div className="expertise-slider-halo" style={{left: 'calc(85% - 12px)'}}></div>
                <div className="expertise-slider-thumb" style={{left: 'calc(85% - 8px)'}}></div>
                <div className="expertise-percentage">85%</div>
              </div>
              <p>Advanced Level</p>
            </div>
          </div>
        </div>
        
        <div className="skill-tile smallsquare2" id="skill__10">
          <div className="skill-flip-card">
            <div className="skill-front">
              <div className="skill-logo">🍃</div>
              <h3>MongoDB</h3>
              <p>Database Management</p>
            </div>
            <div className="skill-back">
              <div className="skill-logo">🍃</div>
              <h3>MongoDB</h3>
              <div className="expertise-bar">
                <div className="expertise-fill" style={{width: '82%'}}></div>
                <div className="expertise-slider-halo" style={{left: 'calc(82% - 12px)'}}></div>
                <div className="expertise-slider-thumb" style={{left: 'calc(82% - 8px)'}}></div>
                <div className="expertise-percentage">82%</div>
              </div>
              <p>Intermediate Level</p>
            </div>
          </div>
        </div>
        
        <div className="skill-tile tallrect2" id="skill__11">
          <div className="skill-flip-card">
            <div className="skill-front">
              <div className="skill-logo">XD</div>
              <h3>Adobe XD</h3>
              <p>Prototyping</p>
            </div>
            <div className="skill-back">
              <div className="skill-logo">XD</div>
              <h3>Adobe XD</h3>
              <div className="expertise-bar">
                <div className="expertise-fill" style={{width: '85%'}}></div>
                <div className="expertise-slider-halo" style={{left: 'calc(85% - 12px)'}}></div>
                <div className="expertise-slider-thumb" style={{left: 'calc(85% - 8px)'}}></div>
                <div className="expertise-percentage">85%</div>
              </div>
              <p>Advanced Level</p>
            </div>
          </div>
        </div>
        
        <div className="skill-tile widerect2" id="skill__12">
          <div className="skill-flip-card">
            <div className="skill-front">
              <div className="skill-logo">📝</div>
              <h3>Git</h3>
              <p>Version Control</p>
            </div>
            <div className="skill-back">
              <div className="skill-logo">📝</div>
              <h3>Git</h3>
              <div className="expertise-bar">
                <div className="expertise-fill" style={{width: '88%'}}></div>
                <div className="expertise-slider-halo" style={{left: 'calc(88% - 12px)'}}></div>
                <div className="expertise-slider-thumb" style={{left: 'calc(88% - 8px)'}}></div>
                <div className="expertise-percentage">88%</div>
              </div>
              <p>Advanced Level</p>
            </div>
          </div>
        </div>

        {/* Third Mosaic Section */}
        <div className="skill-tile square5" id="skill__13">
          <div className="skill-flip-card">
            <div className="skill-front">
              <div className="skill-logo">🌐</div>
              <h3>HTML5</h3>
              <p>Markup Language</p>
            </div>
            <div className="skill-back">
              <div className="skill-logo">🌐</div>
              <h3>HTML5</h3>
              <div className="expertise-bar">
                <div className="expertise-fill" style={{width: '98%'}}></div>
                <div className="expertise-slider-halo" style={{left: 'calc(98% - 12px)'}}></div>
                <div className="expertise-slider-thumb" style={{left: 'calc(98% - 8px)'}}></div>
                <div className="expertise-percentage">98%</div>
              </div>
              <p>Expert Level</p>
            </div>
          </div>
        </div>
        
        <div className="skill-tile largesquare3" id="skill__14">
          <div className="skill-flip-card">
            <div className="skill-front">
              <div className="skill-logo">🎨</div>
              <h3>CSS3</h3>
              <p>Styling Language</p>
            </div>
            <div className="skill-back">
              <div className="skill-logo">🎨</div>
              <h3>CSS3</h3>
              <div className="expertise-bar">
                <div className="expertise-fill" style={{width: '90%'}}></div>
                <div className="expertise-slider-halo" style={{left: 'calc(90% - 12px)'}}></div>
                <div className="expertise-slider-thumb" style={{left: 'calc(90% - 8px)'}}></div>
                <div className="expertise-percentage">90%</div>
              </div>
              <p>Expert Level</p>
            </div>
          </div>
        </div>
        
        <div className="skill-tile square6" id="skill__15">
          <div className="skill-flip-card">
            <div className="skill-front">
              <div className="skill-logo">🔥</div>
              <h3>Firebase</h3>
              <p>Backend Services</p>
            </div>
            <div className="skill-back">
              <div className="skill-logo">🔥</div>
              <h3>Firebase</h3>
              <div className="expertise-bar">
                <div className="expertise-fill" style={{width: '80%'}}></div>
                <div className="expertise-slider-halo" style={{left: 'calc(80% - 12px)'}}></div>
                <div className="expertise-slider-thumb" style={{left: 'calc(80% - 8px)'}}></div>
                <div className="expertise-percentage">80%</div>
              </div>
              <p>Intermediate Level</p>
            </div>
          </div>
        </div>
        
        <div className="skill-tile smallsquare3" id="skill__16">
          <div className="skill-flip-card">
            <div className="skill-front">
              <div className="skill-logo">🐍</div>
              <h3>Python</h3>
              <p>Backend Programming</p>
            </div>
            <div className="skill-back">
              <div className="skill-logo">🐍</div>
              <h3>Python</h3>
              <div className="expertise-bar">
                <div className="expertise-fill" style={{width: '75%'}}></div>
                <div className="expertise-slider-halo" style={{left: 'calc(75% - 12px)'}}></div>
                <div className="expertise-slider-thumb" style={{left: 'calc(75% - 8px)'}}></div>
                <div className="expertise-percentage">75%</div>
              </div>
              <p>Intermediate Level</p>
            </div>
          </div>
        </div>
        
        <div className="skill-tile tallrect3" id="skill__17">
          <div className="skill-flip-card">
            <div className="skill-front">
              <div className="skill-logo">🐳</div>
              <h3>Docker</h3>
              <p>Containerization</p>
            </div>
            <div className="skill-back">
              <div className="skill-logo">🐳</div>
              <h3>Docker</h3>
              <div className="expertise-bar">
                <div className="expertise-fill" style={{width: '70%'}}></div>
                <div className="expertise-slider-halo" style={{left: 'calc(70% - 12px)'}}></div>
                <div className="expertise-slider-thumb" style={{left: 'calc(70% - 8px)'}}></div>
                <div className="expertise-percentage">70%</div>
              </div>
              <p>Intermediate Level</p>
            </div>
          </div>
        </div>
        
        <div className="skill-tile widerect3" id="skill__18">
          <div className="skill-flip-card">
            <div className="skill-front">
              <div className="skill-logo">🔌</div>
              <h3>Socket.io</h3>
              <p>Real-time Communication</p>
            </div>
            <div className="skill-back">
              <div className="skill-logo">🔌</div>
              <h3>Socket.io</h3>
              <div className="expertise-bar">
                <div className="expertise-fill" style={{width: '78%'}}></div>
                <div className="expertise-slider-halo" style={{left: 'calc(78% - 12px)'}}></div>
                <div className="expertise-slider-thumb" style={{left: 'calc(78% - 8px)'}}></div>
                <div className="expertise-percentage">78%</div>
              </div>
              <p>Intermediate Level</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection; 