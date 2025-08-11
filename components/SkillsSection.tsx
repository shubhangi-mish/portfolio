import React from 'react';
import { StackIcon } from './StackIcon';

const SkillsSection: React.FC = () => {
  return (
    <div className="skills-card">
      <div className="skills-mosaic-grid">
        {/* First Mosaic Section */}
        <div className="skill-tile square1" id="skill__1">
          <div className="skill-flip-card">
            <div className="skill-front">
              <div className="skill-logo">
                <StackIcon name="react" />
              </div>
              <h3>React.js</h3>
              <p>Frontend Development</p>
            </div>
            <div className="skill-back">
              <div className="skill-logo">
                <StackIcon name="react" />
              </div>
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
              <div className="skill-logo">
                <StackIcon name="nextjs" />
              </div>
              <h3>Next.js</h3>
              <p>Full Stack Framework</p>
            </div>
            <div className="skill-back">
              <div className="skill-logo">
                <StackIcon name="nextjs" />
              </div>
              <h3>Next.js</h3>
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
        
        <div className="skill-tile square2" id="skill__3">
          <div className="skill-flip-card">
            <div className="skill-front">
              <div className="skill-logo">
                <StackIcon name="c++" />
              </div>
              <h3>C++</h3>
              <p>Programming Language</p>
            </div>
            <div className="skill-back">
              <div className="skill-logo">
                <StackIcon name="c++" />
              </div>
              <h3>C++</h3>
              <div className="expertise-bar">
                <div className="expertise-fill" style={{width: '91%'}}></div>
                <div className="expertise-slider-halo" style={{left: 'calc(91% - 12px)'}}></div>
                <div className="expertise-slider-thumb" style={{left: 'calc(91% - 8px)'}}></div>
                <div className="expertise-percentage">91%</div>
              </div>
              <p>Expert Level</p>
            </div>
          </div>
        </div>
        
        <div className="skill-tile smallsquare" id="skill__4">
          <div className="skill-flip-card">
            <div className="skill-front">
              <div className="skill-logo">
                <StackIcon name="figma" />
              </div>
              <h3>Figma</h3>
              <p>UI/UX Design</p>
            </div>
            <div className="skill-back">
              <div className="skill-logo">
                <StackIcon name="figma" />
              </div>
              <h3>Figma</h3>
              <div className="expertise-bar">
                <div className="expertise-fill" style={{width: '93%'}}></div>
                <div className="expertise-slider-halo" style={{left: 'calc(93% - 12px)'}}></div>
                <div className="expertise-slider-thumb" style={{left: 'calc(93% - 8px)'}}></div>
                <div className="expertise-percentage">93%</div>
              </div>
              <p>Expert Level</p>
            </div>
          </div>
        </div>
        
        <div className="skill-tile tallrect" id="skill__5">
          <div className="skill-flip-card">
            <div className="skill-front">
              <div className="skill-logo">
                <StackIcon name="nodejs" />
              </div>
              <h3>Node.js</h3>
              <p>Backend Development</p>
            </div>
            <div className="skill-back">
              <div className="skill-logo">
                <StackIcon name="nodejs" />
              </div>
              <h3>Node.js</h3>
              <div className="expertise-bar">
                <div className="expertise-fill" style={{width: '94%'}}></div>
                <div className="expertise-slider-halo" style={{left: 'calc(94% - 12px)'}}></div>
                <div className="expertise-slider-thumb" style={{left: 'calc(94% - 8px)'}}></div>
                <div className="expertise-percentage">94%</div>
              </div>
              <p>Expert Level</p>
            </div>
          </div>
        </div>
        
        <div className="skill-tile widerect" id="skill__6">
          <div className="skill-flip-card">
            <div className="skill-front">
              <div className="skill-logo">
                <StackIcon name="tailwindcss" />
              </div>
              <h3>Tailwind CSS</h3>
              <p>Styling Framework</p>
            </div>
            <div className="skill-back">
              <div className="skill-logo">
                <StackIcon name="tailwindcss" />
              </div>
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
              <div className="skill-logo">
                <StackIcon name="js" />
              </div>
              <h3>JavaScript</h3>
              <p>Programming Language</p>
            </div>
            <div className="skill-back">
              <div className="skill-logo">
                <StackIcon name="js" />
              </div>
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
              <div className="skill-logo">
                <StackIcon name="graphql" />
              </div>
              <h3>GraphQL</h3>
              <p>API Development</p>
            </div>
            <div className="skill-back">
              <div className="skill-logo">
                <StackIcon name="graphql" />
              </div>
              <h3>GraphQL</h3>
              <div className="expertise-bar">
                <div className="expertise-fill" style={{width: '91%'}}></div>
                <div className="expertise-slider-halo" style={{left: 'calc(91% - 12px)'}}></div>
                <div className="expertise-slider-thumb" style={{left: 'calc(91% - 8px)'}}></div>
                <div className="expertise-percentage">91%</div>
              </div>
              <p>Expert Level</p>
            </div>
          </div>
        </div>
        
        <div className="skill-tile square4" id="skill__9">
          <div className="skill-flip-card">
            <div className="skill-front">
              <div className="skill-logo">
                <StackIcon name="redux" />
              </div>
              <h3>Redux</h3>
              <p>State Management</p>
            </div>
            <div className="skill-back">
              <div className="skill-logo">
                <StackIcon name="redux" />
              </div>
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
              <div className="skill-logo">
                <StackIcon name="typescript" />
              </div>
              <h3>TypeScript</h3>
              <p>Type Safety</p>
            </div>
            <div className="skill-back">
              <div className="skill-logo">
                <StackIcon name="typescript" />
              </div>
              <h3>TypeScript</h3>
              <div className="expertise-bar">
                <div className="expertise-fill" style={{width: '93%'}}></div>
                <div className="expertise-slider-halo" style={{left: 'calc(93% - 12px)'}}></div>
                <div className="expertise-slider-thumb" style={{left: 'calc(93% - 8px)'}}></div>
                <div className="expertise-percentage">93%</div>
              </div>
              <p>Expert Level</p>
            </div>
          </div>
        </div>
        
        <div className="skill-tile tallrect2" id="skill__11">
          <div className="skill-flip-card">
            <div className="skill-front">
              <div className="skill-logo">
                <StackIcon name="mongodb" />
              </div>
              <h3>MongoDB</h3>
              <p>Database Management</p>
            </div>
            <div className="skill-back">
              <div className="skill-logo">
                <StackIcon name="mongodb" />
              </div>
              <h3>MongoDB</h3>
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
              <div className="skill-logo">
                <StackIcon name="github" />
              </div>
              <h3>Git</h3>
              <p>Version Control</p>
            </div>
            <div className="skill-back">
              <div className="skill-logo">
                <StackIcon name="github" />
              </div>
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
              <div className="skill-logo">
                <StackIcon name="html5" />
              </div>
              <h3>HTML5</h3>
              <p>Markup Language</p>
            </div>
            <div className="skill-back">
              <div className="skill-logo">
                <StackIcon name="html5" />
              </div>
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
              <div className="skill-logo">
                <StackIcon name="django" />
              </div>
              <h3>Django</h3>
              <p>Python Web Framework</p>
            </div>
            <div className="skill-back">
              <div className="skill-logo">
                <StackIcon name="django" />
              </div>
              <h3>Django</h3>
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
              <div className="skill-logo">
                <StackIcon name="python" />
              </div>
              <h3>Python</h3>
              <p>Backend Programming</p>
            </div>
            <div className="skill-back">
              <div className="skill-logo">
                <StackIcon name="python" />
              </div>
              <h3>Python</h3>
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
        
        <div className="skill-tile smallsquare3" id="skill__16">
          <div className="skill-flip-card">
            <div className="skill-front">
              <div className="skill-logo">
                <StackIcon name="firebase" />
              </div>
              <h3>Firebase</h3>
              <p>Backend Services</p>
            </div>
            <div className="skill-back">
              <div className="skill-logo">
                <StackIcon name="firebase" />
              </div>
              <h3>Firebase</h3>
              <div className="expertise-bar">
                <div className="expertise-fill" style={{width: '91%'}}></div>
                <div className="expertise-slider-halo" style={{left: 'calc(91% - 12px)'}}></div>
                <div className="expertise-slider-thumb" style={{left: 'calc(91% - 8px)'}}></div>
                <div className="expertise-percentage">91%</div>
              </div>
              <p>Expert Level</p>
            </div>
          </div>
        </div>
        
        <div className="skill-tile tallrect3" id="skill__17">
          <div className="skill-flip-card">
            <div className="skill-front">
              <div className="skill-logo">
                <StackIcon name="docker" />
              </div>
              <h3>Docker</h3>
              <p>Containerization</p>
            </div>
            <div className="skill-back">
              <div className="skill-logo">
                <StackIcon name="docker" />
              </div>
              <h3>Docker</h3>
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
        
        <div className="skill-tile widerect3" id="skill__18">
          <div className="skill-flip-card">
            <div className="skill-front">
              <div className="skill-logo">
                <StackIcon name="postgresql" />
              </div>
              <h3>PostgreSQL</h3>
              <p>Database Management</p>
            </div>
            <div className="skill-back">
              <div className="skill-logo">
                <StackIcon name="postgresql" />
              </div>
              <h3>PostgreSQL</h3>
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

        {/* Fourth Mosaic Section */}
        <div className="skill-tile square7" id="skill__19">
          <div className="skill-flip-card">
            <div className="skill-front">
              <div className="skill-logo">
                <StackIcon name="supabase" />
              </div>
              <h3>Supabase</h3>
              <p>Database & Backend</p>
            </div>
            <div className="skill-back">
              <div className="skill-logo">
                <StackIcon name="supabase" />
              </div>
              <h3>Supabase</h3>
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
        
        <div className="skill-tile largesquare4" id="skill__20">
          <div className="skill-flip-card">
            <div className="skill-front">
              <div className="skill-logo">
                <StackIcon name="postman" />
              </div>
              <h3>Postman</h3>
              <p>API Testing</p>
            </div>
            <div className="skill-back">
              <div className="skill-logo">
                <StackIcon name="postman" />
              </div>
              <h3>Postman</h3>
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
        
        <div className="skill-tile square8" id="skill__21">
          <div className="skill-flip-card">
            <div className="skill-front">
              <div className="skill-logo">
                <StackIcon name="flask" />
              </div>
              <h3>Flask</h3>
              <p>Python Web Framework</p>
            </div>
            <div className="skill-back">
              <div className="skill-logo">
                <StackIcon name="flask" />
              </div>
              <h3>Flask</h3>
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
        
        <div className="skill-tile smallsquare4" id="skill__22">
          <div className="skill-flip-card">
            <div className="skill-front">
              <div className="skill-logo">
                <StackIcon name="langchain" />
              </div>
              <h3>Langchain</h3>
              <p>AI Framework</p>
            </div>
            <div className="skill-back">
              <div className="skill-logo">
                <StackIcon name="langchain" />
              </div>
              <h3>Langchain</h3>
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
        
        <div className="skill-tile tallrect4" id="skill__23">
          <div className="skill-flip-card">
            <div className="skill-front">
              <div className="skill-logo">
                <StackIcon name="huggingface" />
              </div>
              <h3>Huggingface</h3>
              <p>AI Models</p>
            </div>
            <div className="skill-back">
              <div className="skill-logo">
                <StackIcon name="huggingface" />
              </div>
              <h3>Huggingface</h3>
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
        
        <div className="skill-tile widerect4" id="skill__24">
          <div className="skill-flip-card">
            <div className="skill-front">
              <div className="skill-logo">
                <StackIcon name="gcloud" />
              </div>
              <h3>Google Cloud Platform</h3>
              <p>Cloud Services</p>
            </div>
            <div className="skill-back">
              <div className="skill-logo">
                <StackIcon name="gcloud" />
              </div>
              <h3>Google Cloud Platform</h3>
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


      </div>
    </div>
  );
};

export default SkillsSection; 