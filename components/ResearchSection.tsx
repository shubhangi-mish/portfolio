'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const researchProjects = [
  {
    title: 'AI Ethics & Bias',
    description: 'Research on mitigating bias in machine learning algorithms and ensuring ethical AI deployment',
    tech: ['Ethics', 'Bias Detection', 'Fairness'],
    icon: '⚖️',
    color: '#ff6b9d'
  },
  {
    title: 'Quantum Computing',
    description: 'Exploring quantum algorithms for optimization problems and cryptography',
    tech: ['Quantum', 'Qiskit', 'Algorithms'],
    icon: '⚛️',
    color: '#00ffff'
  },
  {
    title: 'Federated Learning',
    description: 'Research on privacy-preserving machine learning across distributed networks',
    tech: ['Privacy', 'Federated', 'Distributed'],
    icon: '🔒',
    color: '#00ff41'
  },
  {
    title: 'Explainable AI',
    description: 'Developing interpretable AI models for critical decision-making systems',
    tech: ['XAI', 'Interpretability', 'Transparency'],
    icon: '🔍',
    color: '#f0932b'
  }
]

const publications = [
  {
    title: 'Neural Architecture Search for Computer Vision',
    journal: 'ICML 2023',
    citations: 45,
    icon: '📄'
  },
  {
    title: 'Blockchain-based Federated Learning',
    journal: 'AAAI 2023',
    citations: 32,
    icon: '🔗'
  },
  {
    title: 'Ethical AI in Healthcare',
    journal: 'Nature AI',
    citations: 78,
    icon: '🏥'
  },
  {
    title: 'Quantum Machine Learning',
    journal: 'Quantum Computing',
    citations: 56,
    icon: '⚛️'
  }
]

export default function ResearchSection() {
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
            RESEARCH & INNOVATION 🔬
          </h2>
          <p className="text-xl text-cyan-400 font-silkscreen">
            Pushing the boundaries of AI, blockchain, and technology
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Research Projects */}
          <motion.div>
            <h3 className="text-3xl font-bold text-neon-pink font-righteous mb-8">
              Research Projects & Innovation 🧬
            </h3>
            
            <div className="space-y-6">
              {researchProjects.map((project, index) => (
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

          {/* Publications */}
          <motion.div>
            <h3 className="text-3xl font-bold text-neon-green font-fredoka mb-8">
              Publications & Papers 📚
            </h3>
            
            <div className="space-y-6">
              {publications.map((pub, index) => (
                <motion.div
                  key={pub.title}
                  className="blockchain-block cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{pub.icon}</div>
                    <div>
                      <h4 className="text-lg font-bold text-white font-righteous mb-2">
                        {pub.title}
                      </h4>
                      <p className="text-gray-300 font-silkscreen mb-2">
                        {pub.journal}
                      </p>
                      <div className="flex items-center gap-4">
                        <span className="text-cyan-400 font-bold font-fredoka">
                          {pub.citations} citations
                        </span>
                        <span className="text-green-400 text-sm font-silkscreen">
                          📈 High Impact
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Research Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8 grid grid-cols-2 gap-4"
            >
              <div className="ai-research-card text-center">
                <div className="text-2xl font-bold text-white font-orbitron">15+</div>
                <div className="text-sm text-gray-300 font-silkscreen">Publications</div>
              </div>
              <div className="ai-research-card text-center">
                <div className="text-2xl font-bold text-white font-orbitron">500+</div>
                <div className="text-sm text-gray-300 font-silkscreen">Citations</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Research Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-3xl font-bold text-neon-yellow font-rubik-vinyl mb-8">
            Research Impact Visualization 📊
          </h3>
          
          <div className="grid grid-cols-5 gap-4 max-w-3xl mx-auto">
            {Array.from({ length: 10 }, (_, index) => (
              <motion.div
                key={index}
                className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ 
                  duration: 2.5, 
                  repeat: Infinity, 
                  delay: index * 0.2 
                }}
              >
                {index + 1}
              </motion.div>
            ))}
          </div>
          
          <p className="text-gray-400 font-silkscreen mt-4">
            Each node represents a research paper and its impact factor
          </p>
        </motion.div>

        {/* Research Areas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          <div className="blockchain-block text-center">
            <div className="text-2xl mb-2">🤖</div>
            <div className="text-lg font-bold text-white font-righteous">AI Ethics</div>
            <div className="text-sm text-gray-300 font-silkscreen">Bias Detection</div>
          </div>
          <div className="blockchain-block text-center">
            <div className="text-2xl mb-2">⚛️</div>
            <div className="text-lg font-bold text-white font-righteous">Quantum AI</div>
            <div className="text-sm text-gray-300 font-silkscreen">Quantum Computing</div>
          </div>
          <div className="blockchain-block text-center">
            <div className="text-2xl mb-2">🔒</div>
            <div className="text-lg font-bold text-white font-righteous">Privacy</div>
            <div className="text-sm text-gray-300 font-silkscreen">Federated Learning</div>
          </div>
          <div className="blockchain-block text-center">
            <div className="text-2xl mb-2">🔍</div>
            <div className="text-lg font-bold text-white font-righteous">XAI</div>
            <div className="text-sm text-gray-300 font-silkscreen">Explainable AI</div>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 