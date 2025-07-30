'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const aiProjects = [
  {
    title: 'Neural Network Architecture',
    description: 'Designed and implemented custom neural network architectures for computer vision tasks',
    tech: ['PyTorch', 'TensorFlow', 'Computer Vision'],
    icon: '🧠',
    color: '#ff6b9d'
  },
  {
    title: 'Natural Language Processing',
    description: 'Built advanced NLP models for text classification and sentiment analysis',
    tech: ['BERT', 'Transformers', 'NLP'],
    icon: '📝',
    color: '#c44569'
  },
  {
    title: 'Reinforcement Learning',
    description: 'Developed RL agents for autonomous decision-making systems',
    tech: ['OpenAI Gym', 'Q-Learning', 'RL'],
    icon: '🎮',
    color: '#f0932b'
  },
  {
    title: 'Computer Vision',
    description: 'Created computer vision models for object detection and image segmentation',
    tech: ['OpenCV', 'YOLO', 'CNN'],
    icon: '👁️',
    color: '#00ff41'
  }
]

const aiSkills = [
  { name: 'Machine Learning', level: 95, icon: '🤖' },
  { name: 'Deep Learning', level: 90, icon: '🧠' },
  { name: 'Computer Vision', level: 88, icon: '👁️' },
  { name: 'NLP', level: 85, icon: '📝' },
  { name: 'Reinforcement Learning', level: 80, icon: '🎮' },
  { name: 'Data Science', level: 92, icon: '📊' }
]

export default function AISection() {
  const [selectedProject, setSelectedProject] = useState(0)

  return (
    <div className="min-h-screen flex items-center justify-center p-8 tech-bg">
      {/* Neural Network Background */}
      <div className="neural-network" />
      
      <div className="max-w-6xl w-full">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black text-white font-orbitron mb-4">
            AI & MACHINE LEARNING 🤖
          </h2>
          <p className="text-xl text-cyan-400 font-silkscreen">
            Building intelligent systems that learn and adapt
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* AI Projects */}
          <motion.div>
            <h3 className="text-3xl font-bold text-neon-pink font-righteous mb-8">
              AI Projects & Research 🧠
            </h3>
            
            <div className="space-y-6">
              {aiProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  className={`ai-research-card cursor-pointer ${
                    selectedProject === index ? 'ring-4 ring-cyan-400' : ''
                  }`}
                  onClick={() => setSelectedProject(index)}
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{project.icon}</div>
                    <div>
                      <h4 className="text-xl font-bold text-white font-righteous mb-2">
                        {project.title}
                      </h4>
                      <p className="text-gray-300 font-silkscreen mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-white/10 text-white text-sm rounded-full font-fredoka"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* AI Skills */}
          <motion.div>
            <h3 className="text-3xl font-bold text-neon-green font-fredoka mb-8">
              AI Skills & Expertise ⚡
            </h3>
            
            <div className="space-y-6">
              {aiSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="glass rounded-2xl p-6"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{skill.icon}</span>
                      <span className="font-semibold text-white font-righteous">{skill.name}</span>
                    </div>
                    <span className="text-cyan-400 font-bold font-fredoka">{skill.level}%</span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-black/30 rounded-full h-3">
                    <motion.div
                      className="h-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* AI Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8 grid grid-cols-2 gap-4"
            >
              <div className="blockchain-block text-center">
                <div className="text-2xl font-bold text-white font-orbitron">50+</div>
                <div className="text-sm text-gray-300 font-silkscreen">AI Models Built</div>
              </div>
              <div className="blockchain-block text-center">
                <div className="text-2xl font-bold text-white font-orbitron">95%</div>
                <div className="text-sm text-gray-300 font-silkscreen">Accuracy Rate</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* AI Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-3xl font-bold text-neon-yellow font-rubik-vinyl mb-8">
            Neural Network Visualization 🧬
          </h3>
          
          <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
            {Array.from({ length: 8 }, (_, index) => (
              <motion.div
                key={index}
                className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  delay: index * 0.2 
                }}
              >
                {index + 1}
              </motion.div>
            ))}
          </div>
          
          <p className="text-gray-400 font-silkscreen mt-4">
            Each node represents a neural connection in my AI systems
          </p>
        </motion.div>
      </div>
    </div>
  )
} 