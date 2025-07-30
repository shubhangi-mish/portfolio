'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface File {
  id: string
  name: string
  icon: string
  content: React.ReactNode
  language: string
}

const files: File[] = [
  {
    id: 'about',
    name: 'about.tsx',
    icon: '📄',
    language: 'typescript',
    content: (
      <div className="file-content">
        <div className="file-header">// About Me</div>
        <div className="file-description">Personal information and background</div>
        
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white mb-4">Shubhangi Mishra</h2>
          <p className="text-gray-300 mb-4">AI Engineer & Blockchain Developer</p>
          <p className="text-gray-400 text-sm mb-6">Passionate about building intelligent systems and decentralized applications that solve real-world problems.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-blue-400 mb-3">Personal Info</h3>
            <div className="space-y-2 text-sm">
              <div><span className="text-gray-500">📍 Location:</span> <span className="text-white">India</span></div>
              <div><span className="text-gray-500">🎓 Education:</span> <span className="text-white">Computer Science</span></div>
              <div><span className="text-gray-500">💼 Experience:</span> <span className="text-white">3+ Years</span></div>
              <div><span className="text-gray-500">🌐 Languages:</span> <span className="text-white">English, Hindi</span></div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-green-400 mb-3">Interests</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-900 text-blue-300 rounded-full text-xs">Machine Learning</span>
              <span className="px-3 py-1 bg-purple-900 text-purple-300 rounded-full text-xs">Blockchain</span>
              <span className="px-3 py-1 bg-green-900 text-green-300 rounded-full text-xs">Web3</span>
              <span className="px-3 py-1 bg-yellow-900 text-yellow-300 rounded-full text-xs">Research</span>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'experience',
    name: 'experience.tsx',
    icon: '💼',
    language: 'typescript',
    content: (
      <div className="file-content">
        <div className="file-header">// Work Experience</div>
        <div className="file-description">Professional journey and achievements</div>
        
        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 pl-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-semibold text-white">Senior AI Engineer</h3>
              <span className="text-sm text-gray-400">2022 - Present</span>
            </div>
            <p className="text-blue-400 font-medium mb-2">TechCorp AI</p>
            <p className="text-gray-300 text-sm mb-3">Leading machine learning initiatives and developing AI solutions for enterprise clients.</p>
            <div className="space-y-1">
              <div className="flex items-center text-sm text-gray-400">
                <span className="text-green-400 mr-2">✓</span>
                Led ML model development for 10M+ users
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <span className="text-green-400 mr-2">✓</span>
                Reduced inference time by 60%
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <span className="text-green-400 mr-2">✓</span>
                Mentored 5 junior developers
              </div>
            </div>
          </div>

          <div className="border-l-4 border-purple-500 pl-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-semibold text-white">Smart Contract Developer</h3>
              <span className="text-sm text-gray-400">2021 - 2022</span>
            </div>
            <p className="text-purple-400 font-medium mb-2">Blockchain Labs</p>
            <p className="text-gray-300 text-sm mb-3">Developed and deployed smart contracts for DeFi protocols and blockchain applications.</p>
            <div className="space-y-1">
              <div className="flex items-center text-sm text-gray-400">
                <span className="text-green-400 mr-2">✓</span>
                Deployed 25+ smart contracts
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <span className="text-green-400 mr-2">✓</span>
                Secured $2M+ in DeFi protocols
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <span className="text-green-400 mr-2">✓</span>
                Optimized gas costs by 40%
              </div>
            </div>
          </div>

          <div className="border-l-4 border-green-500 pl-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-semibold text-white">ML Research Intern</h3>
              <span className="text-sm text-gray-400">2020 - 2021</span>
            </div>
            <p className="text-green-400 font-medium mb-2">AI Research Institute</p>
            <p className="text-gray-300 text-sm mb-3">Conducted research on natural language processing and computer vision applications.</p>
            <div className="space-y-1">
              <div className="flex items-center text-sm text-gray-400">
                <span className="text-green-400 mr-2">✓</span>
                Published 3 research papers
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <span className="text-green-400 mr-2">✓</span>
                Developed novel NLP algorithms
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <span className="text-green-400 mr-2">✓</span>
                Presented at 2 international conferences
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'projects',
    name: 'projects.tsx',
    icon: '🚀',
    language: 'typescript',
    content: (
      <div className="file-content">
        <div className="file-header">// Featured Projects</div>
        <div className="file-description">Key projects and contributions</div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-gray-700 rounded-lg p-4 hover:border-blue-500 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold text-white">AI-Powered Trading Bot</h3>
              <span className="text-xs bg-green-900 text-green-300 px-2 py-1 rounded">Live</span>
            </div>
            <p className="text-gray-300 text-sm mb-3">ML-based cryptocurrency trading system with real-time market analysis and automated decision making.</p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="px-2 py-1 bg-blue-900 text-blue-300 rounded text-xs">Python</span>
              <span className="px-2 py-1 bg-orange-900 text-orange-300 rounded text-xs">TensorFlow</span>
              <span className="px-2 py-1 bg-purple-900 text-purple-300 rounded text-xs">WebSocket</span>
            </div>
            <div className="flex items-center text-sm text-gray-400">
              <span className="mr-2">📊</span>
              <span>95% accuracy rate</span>
            </div>
          </div>

          <div className="border border-gray-700 rounded-lg p-4 hover:border-purple-500 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold text-white">DeFi Yield Optimizer</h3>
              <span className="text-xs bg-blue-900 text-blue-300 px-2 py-1 rounded">DeFi</span>
            </div>
            <p className="text-gray-300 text-sm mb-3">Automated yield farming strategy that maximizes returns across multiple DeFi protocols.</p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="px-2 py-1 bg-yellow-900 text-yellow-300 rounded text-xs">Solidity</span>
              <span className="px-2 py-1 bg-blue-900 text-blue-300 rounded text-xs">React</span>
              <span className="px-2 py-1 bg-green-900 text-green-300 rounded text-xs">Web3.js</span>
            </div>
            <div className="flex items-center text-sm text-gray-400">
              <span className="mr-2">💰</span>
              <span>$2M+ TVL secured</span>
            </div>
          </div>

          <div className="border border-gray-700 rounded-lg p-4 hover:border-green-500 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold text-white">Research Paper Analyzer</h3>
              <span className="text-xs bg-purple-900 text-purple-300 px-2 py-1 rounded">NLP</span>
            </div>
            <p className="text-gray-300 text-sm mb-3">NLP tool for academic research that extracts insights and generates summaries from research papers.</p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="px-2 py-1 bg-blue-900 text-blue-300 rounded text-xs">Python</span>
              <span className="px-2 py-1 bg-orange-900 text-orange-300 rounded text-xs">BERT</span>
              <span className="px-2 py-1 bg-green-900 text-green-300 rounded text-xs">FastAPI</span>
            </div>
            <div className="flex items-center text-sm text-gray-400">
              <span className="mr-2">📚</span>
              <span>10,000+ papers analyzed</span>
            </div>
          </div>

          <div className="border border-gray-700 rounded-lg p-4 hover:border-yellow-500 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold text-white">Smart Contract Auditor</h3>
              <span className="text-xs bg-red-900 text-red-300 px-2 py-1 rounded">Security</span>
            </div>
            <p className="text-gray-300 text-sm mb-3">Automated smart contract security analysis tool that detects vulnerabilities and provides recommendations.</p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="px-2 py-1 bg-yellow-900 text-yellow-300 rounded text-xs">Solidity</span>
              <span className="px-2 py-1 bg-blue-900 text-blue-300 rounded text-xs">Python</span>
              <span className="px-2 py-1 bg-green-900 text-green-300 rounded text-xs">Slither</span>
            </div>
            <div className="flex items-center text-sm text-gray-400">
              <span className="mr-2">🔒</span>
              <span>100+ contracts audited</span>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'skills',
    name: 'skills.tsx',
    icon: '⚡',
    language: 'typescript',
    content: (
      <div className="file-content">
        <div className="file-header">// Technical Skills</div>
        <div className="file-description">Programming languages and technologies</div>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-blue-400 mb-4">Programming Languages</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center justify-between">
                <span className="text-white">Python</span>
                <div className="flex items-center">
                  <div className="w-32 bg-gray-700 rounded-full h-2 mr-3">
                    <div className="bg-blue-500 h-2 rounded-full" style={{width: '95%'}}></div>
                  </div>
                  <span className="text-sm text-gray-400">95%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white">JavaScript</span>
                <div className="flex items-center">
                  <div className="w-32 bg-gray-700 rounded-full h-2 mr-3">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{width: '90%'}}></div>
                  </div>
                  <span className="text-sm text-gray-400">90%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white">Solidity</span>
                <div className="flex items-center">
                  <div className="w-32 bg-gray-700 rounded-full h-2 mr-3">
                    <div className="bg-purple-500 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                  <span className="text-sm text-gray-400">85%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white">TypeScript</span>
                <div className="flex items-center">
                  <div className="w-32 bg-gray-700 rounded-full h-2 mr-3">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '88%'}}></div>
                  </div>
                  <span className="text-sm text-gray-400">88%</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-green-400 mb-4">Frameworks & Libraries</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center justify-between">
                <span className="text-white">TensorFlow</span>
                <div className="flex items-center">
                  <div className="w-32 bg-gray-700 rounded-full h-2 mr-3">
                    <div className="bg-orange-500 h-2 rounded-full" style={{width: '92%'}}></div>
                  </div>
                  <span className="text-sm text-gray-400">92%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white">PyTorch</span>
                <div className="flex items-center">
                  <div className="w-32 bg-gray-700 rounded-full h-2 mr-3">
                    <div className="bg-red-500 h-2 rounded-full" style={{width: '88%'}}></div>
                  </div>
                  <span className="text-sm text-gray-400">88%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white">React</span>
                <div className="flex items-center">
                  <div className="w-32 bg-gray-700 rounded-full h-2 mr-3">
                    <div className="bg-cyan-500 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                  <span className="text-sm text-gray-400">85%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white">Ethereum</span>
                <div className="flex items-center">
                  <div className="w-32 bg-gray-700 rounded-full h-2 mr-3">
                    <div className="bg-blue-400 h-2 rounded-full" style={{width: '90%'}}></div>
                  </div>
                  <span className="text-sm text-gray-400">90%</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-purple-400 mb-4">Tools & Technologies</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">Git</span>
              <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">Docker</span>
              <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">AWS</span>
              <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">PostgreSQL</span>
              <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">MongoDB</span>
              <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">Redis</span>
              <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">Kubernetes</span>
              <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">Jenkins</span>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'contact',
    name: 'contact.tsx',
    icon: '📧',
    language: 'typescript',
    content: (
      <div className="file-content">
        <div className="file-header">// Contact Information</div>
        <div className="file-description">Get in touch for collaborations</div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-blue-400 mb-4">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-2xl mr-3">📧</span>
                <div>
                  <div className="text-white font-medium">Email</div>
                  <div className="text-gray-400 text-sm">shubhangi@example.com</div>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-3">💼</span>
                <div>
                  <div className="text-white font-medium">LinkedIn</div>
                  <div className="text-gray-400 text-sm">linkedin.com/in/shubhangi-mishra</div>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-3">🐙</span>
                <div>
                  <div className="text-white font-medium">GitHub</div>
                  <div className="text-gray-400 text-sm">github.com/shubhangi</div>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-3">🐦</span>
                <div>
                  <div className="text-white font-medium">Twitter</div>
                  <div className="text-gray-400 text-sm">@shubhangi_ai</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-green-400 mb-4">Let's Collaborate</h3>
            <p className="text-gray-300 text-sm mb-4">I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.</p>
            
            <div className="space-y-3">
              <div className="flex items-center text-sm">
                <span className="text-green-400 mr-2">✓</span>
                <span className="text-gray-300">Available for freelance projects</span>
              </div>
              <div className="flex items-center text-sm">
                <span className="text-green-400 mr-2">✓</span>
                <span className="text-gray-300">Open to full-time opportunities</span>
              </div>
              <div className="flex items-center text-sm">
                <span className="text-green-400 mr-2">✓</span>
                <span className="text-gray-300">Interested in research collaborations</span>
              </div>
              <div className="flex items-center text-sm">
                <span className="text-green-400 mr-2">✓</span>
                <span className="text-gray-300">Mentoring and speaking opportunities</span>
              </div>
            </div>

            <div className="mt-6">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
]

export default function VSCodePortfolio() {
  const [openFiles, setOpenFiles] = useState<File[]>([files[0]])
  const [activeFile, setActiveFile] = useState<string>(files[0].id)
  const [activeActivity, setActiveActivity] = useState<string>('explorer')

  const openFile = (file: File) => {
    if (!openFiles.find(f => f.id === file.id)) {
      setOpenFiles([...openFiles, file])
    }
    setActiveFile(file.id)
  }

  const closeFile = (fileId: string) => {
    const newOpenFiles = openFiles.filter(f => f.id !== fileId)
    if (newOpenFiles.length > 0) {
      setOpenFiles(newOpenFiles)
      if (activeFile === fileId) {
        setActiveFile(newOpenFiles[0].id)
      }
    }
  }

  const getActiveFile = () => openFiles.find(f => f.id === activeFile)

  const activityItems = [
    { id: 'explorer', icon: '📁', label: 'Explorer', badge: null },
    { id: 'search', icon: '🔍', label: 'Search', badge: null },
    { id: 'source-control', icon: '🌿', label: 'Source Control', badge: '40' },
    { id: 'run-debug', icon: '🐛', label: 'Run and Debug', badge: null },
    { id: 'extensions', icon: '🧩', label: 'Extensions', badge: '7' },
    { id: 'remote', icon: '🖥️', label: 'Remote Explorer', badge: null },
    { id: 'testing', icon: '🧪', label: 'Testing', badge: null },
    { id: 'profiles', icon: '🌍', label: 'Profiles', badge: null },
    { id: 'docker', icon: '📦', label: 'Docker', badge: null },
    { id: 'settings', icon: '⚙️', label: 'Settings', badge: '1' }
  ]

  return (
    <div className="vscode-bg h-screen flex flex-col">
      {/* Top Navigation Bar */}
      <div className="vscode-header">
        <div className="vscode-menu-bar">
          <div className="vscode-menu-item">File</div>
          <div className="vscode-menu-item">Edit</div>
          <div className="vscode-menu-item">Selection</div>
          <div className="vscode-menu-item">View</div>
          <div className="vscode-menu-item">Go</div>
          <div className="vscode-menu-item">Run</div>
          <div className="vscode-menu-item">...</div>
        </div>
        
        <div className="vscode-search-bar">
          <span className="vscode-search-icon">🔍</span>
          <input 
            type="text" 
            className="vscode-search-input" 
            placeholder="Fastrr payments"
          />
        </div>
        
        <div className="vscode-header-right">
          <div className="vscode-header-icon">👤</div>
          <div className="vscode-header-icon">⊞</div>
          <div className="vscode-header-icon">🔔</div>
          <div className="vscode-window-controls">
            <div className="vscode-window-control">─</div>
            <div className="vscode-window-control">□</div>
            <div className="vscode-window-control close">✕</div>
          </div>
        </div>
      </div>

      {/* Tabs Bar */}
      <div className="vscode-tabs-bar">
        {openFiles.map((file) => (
          <div
            key={file.id}
            className={`vscode-tab ${activeFile === file.id ? 'active' : ''}`}
            onClick={() => setActiveFile(file.id)}
          >
            <span className="vscode-tab-icon">{file.icon}</span>
            <span>{file.name}</span>
            <span
              className="vscode-tab-close"
              onClick={(e) => {
                e.stopPropagation()
                closeFile(file.id)
              }}
            >
              ×
            </span>
          </div>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="flex flex-1">
        {/* VS Code Activity Bar */}
        <div className="vscode-activity-bar">
          {activityItems.map((item) => (
            <div
              key={item.id}
              className={`vscode-activity-item ${activeActivity === item.id ? 'active' : ''}`}
              onClick={() => setActiveActivity(item.id)}
              title={item.label}
            >
              <span>{item.icon}</span>
              {item.badge && (
                <div className="vscode-activity-badge">
                  {item.badge}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* VS Code Sidebar */}
        <div className="vscode-sidebar">
          <div className="vscode-sidebar-header">
            Explorer
          </div>
          {files.map((file) => (
            <div
              key={file.id}
              className={`vscode-file-item ${activeFile === file.id ? 'active' : ''}`}
              onClick={() => openFile(file)}
            >
              <span className="vscode-file-icon">{file.icon}</span>
              {file.name}
            </div>
          ))}
        </div>

        {/* VS Code Main Area */}
        <div className="vscode-main">
          {/* Editor Area */}
          <div className="vscode-editor">
            <AnimatePresence mode="wait">
              {getActiveFile() && (
                <motion.div
                  key={activeFile}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {getActiveFile()?.content}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Status Bar */}
          <div className="vscode-statusbar">
            <div className="vscode-statusbar-left">
              <div className="vscode-status-item">
                <span className="vscode-status-icon">🌐</span>
                <span>Background Agents</span>
              </div>
              <div className="vscode-status-item">
                <span className="vscode-status-icon">🌿</span>
                <span>main*</span>
                <span className="vscode-status-icon">🔄</span>
              </div>
              <div className="vscode-status-item vscode-status-error">
                <div className="vscode-status-badge">1</div>
                <span>Error</span>
              </div>
              <div className="vscode-status-item vscode-status-warning">
                <div className="vscode-status-badge warning">4</div>
                <span>Warning</span>
              </div>
            </div>
            
            <div className="vscode-statusbar-right">
              <div className="vscode-status-item">
                <span>Cursor Tab</span>
              </div>
              <div className="vscode-status-item">
                <span>Ln 1, Col 1</span>
              </div>
              <div className="vscode-status-item">
                <span>Spaces: 4</span>
              </div>
              <div className="vscode-status-item">
                <span>UTF-8</span>
              </div>
              <div className="vscode-status-item">
                <span>CRLF</span>
              </div>
              <div className="vscode-status-item">
                <span className="vscode-status-icon">&#123;&#125;</span>
                <span>TypeScript JSX</span>
              </div>
              <div className="vscode-status-item">
                <span className="vscode-status-icon">📡</span>
                <span>Go Live</span>
              </div>
              <div className="vscode-status-item">
                <span className="vscode-status-icon">🔔</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 