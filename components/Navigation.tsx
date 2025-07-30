'use client'

import { motion } from 'framer-motion'

interface NavigationProps {
  currentSection: string
  setCurrentSection: (section: string) => void
  stickerMode: boolean
  pixelMode: boolean
  resumeMode: boolean
}

const sections = [
  { id: 'home', name: 'Brain', icon: '🧠' },
  { id: 'ai', name: 'AI/ML', icon: '🤖' },
  { id: 'blockchain', name: 'Blockchain', icon: '⛓️' },
  { id: 'research', name: 'Research', icon: '🔬' },
  { id: 'contact', name: 'Contact', icon: '📞' }
]

export default function Navigation({
  currentSection,
  setCurrentSection,
  stickerMode,
  pixelMode,
  resumeMode
}: NavigationProps) {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 p-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold gradient-text cursor-pointer"
            onClick={() => setCurrentSection('home')}
          >
            YourName.dev
          </motion.div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-2">
            {sections.map((section) => (
              <motion.button
                key={section.id}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentSection(section.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  currentSection === section.id
                    ? 'bg-gradient-to-r from-neon-pink to-neon-purple text-white shadow-lg shadow-neon-pink/50'
                    : 'glass text-gray-300 hover:bg-white/10'
                }`}
              >
                <span className="mr-2">{section.icon}</span>
                {section.name}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="md:hidden text-2xl text-white"
          >
            ☰
          </motion.button>
        </div>

        {/* Mode Indicators */}
        <div className="flex items-center gap-2 mt-2">
          {stickerMode && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="px-2 py-1 bg-gradient-to-r from-neon-blue to-neon-green rounded-full text-xs text-white"
            >
              ✨ Stickers
            </motion.div>
          )}
          {pixelMode && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="px-2 py-1 bg-gradient-to-r from-neon-yellow to-neon-orange rounded-full text-xs text-white"
            >
              🎮 8-bit
            </motion.div>
          )}
          {resumeMode && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="px-2 py-1 bg-gradient-to-r from-neon-green to-neon-blue rounded-full text-xs text-white"
            >
              📄 Resume
            </motion.div>
          )}
        </div>
      </div>
    </motion.nav>
  )
} 