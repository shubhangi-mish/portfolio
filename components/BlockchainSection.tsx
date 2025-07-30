'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const blockchainProjects = [
  {
    title: 'DeFi Protocol',
    description: 'Built a decentralized finance protocol with yield farming and liquidity pools',
    tech: ['Solidity', 'Web3.js', 'DeFi'],
    icon: '💰',
    color: '#00ff41'
  },
  {
    title: 'Smart Contracts',
    description: 'Developed secure smart contracts for tokenization and governance',
    tech: ['Solidity', 'Hardhat', 'Ethereum'],
    icon: '📜',
    color: '#00ffff'
  },
  {
    title: 'NFT Marketplace',
    description: 'Created an NFT marketplace with minting and trading capabilities',
    tech: ['IPFS', 'MetaMask', 'NFTs'],
    icon: '🎨',
    color: '#ff6b9d'
  },
  {
    title: 'DAO Governance',
    description: 'Implemented decentralized autonomous organization governance systems',
    tech: ['DAO', 'Voting', 'Governance'],
    icon: '🏛️',
    color: '#f0932b'
  }
]

const blockchainSkills = [
  { name: 'Solidity', level: 95, icon: '⛓️' },
  { name: 'Smart Contracts', level: 92, icon: '📜' },
  { name: 'DeFi', level: 90, icon: '💰' },
  { name: 'Web3', level: 88, icon: '🌐' },
  { name: 'Ethereum', level: 85, icon: '🔗' },
  { name: 'Blockchain', level: 93, icon: '⛓️' }
]

export default function BlockchainSection() {
  const [selectedProject, setSelectedProject] = useState(0)

  return (
    <div className="min-h-screen flex items-center justify-center p-8 tech-bg">
      {/* Tech Grid Background */}
      <div className="tech-grid absolute inset-0 opacity-20" />
      
      <div className="max-w-6xl w-full">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black text-white font-orbitron mb-4">
            BLOCKCHAIN & WEB3 ⛓️
          </h2>
          <p className="text-xl text-cyan-400 font-silkscreen">
            Building the decentralized future
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Blockchain Projects */}
          <motion.div>
            <h3 className="text-3xl font-bold text-neon-green font-righteous mb-8">
              Blockchain Projects & DeFi 💰
            </h3>
            
            <div className="space-y-6">
              {blockchainProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  className={`blockchain-block cursor-pointer ${
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

          {/* Blockchain Skills */}
          <motion.div>
            <h3 className="text-3xl font-bold text-neon-pink font-fredoka mb-8">
              Blockchain Skills & Expertise ⚡
            </h3>
            
            <div className="space-y-6">
              {blockchainSkills.map((skill, index) => (
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
                      className="h-3 rounded-full bg-gradient-to-r from-green-500 to-cyan-500"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Blockchain Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8 grid grid-cols-2 gap-4"
            >
              <div className="ai-research-card text-center">
                <div className="text-2xl font-bold text-white font-orbitron">25+</div>
                <div className="text-sm text-gray-300 font-silkscreen">Smart Contracts</div>
              </div>
              <div className="ai-research-card text-center">
                <div className="text-2xl font-bold text-white font-orbitron">$2M+</div>
                <div className="text-sm text-gray-300 font-silkscreen">TVL Deployed</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Blockchain Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-3xl font-bold text-neon-yellow font-rubik-vinyl mb-8">
            Blockchain Network Visualization ⛓️
          </h3>
          
          <div className="grid grid-cols-6 gap-4 max-w-4xl mx-auto">
            {Array.from({ length: 12 }, (_, index) => (
              <motion.div
                key={index}
                className="w-12 h-12 bg-gradient-to-br from-green-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  delay: index * 0.3 
                }}
              >
                {index + 1}
              </motion.div>
            ))}
          </div>
          
          <p className="text-gray-400 font-silkscreen mt-4">
            Each block represents a transaction in the blockchain network
          </p>
        </motion.div>

        {/* DeFi Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="blockchain-block text-center">
            <div className="text-3xl font-bold text-white font-orbitron">15+</div>
            <div className="text-sm text-gray-300 font-silkscreen">DeFi Protocols</div>
          </div>
          <div className="blockchain-block text-center">
            <div className="text-3xl font-bold text-white font-orbitron">1000+</div>
            <div className="text-sm text-gray-300 font-silkscreen">Transactions</div>
          </div>
          <div className="blockchain-block text-center">
            <div className="text-3xl font-bold text-white font-orbitron">99.9%</div>
            <div className="text-sm text-gray-300 font-silkscreen">Uptime</div>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 