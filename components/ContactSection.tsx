'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import toast from 'react-hot-toast'

const contactMethods = [
  {
    name: 'Email',
    icon: '📧',
    value: 'your.email@example.com',
    color: 'from-neon-pink to-neon-purple',
    action: () => {
      window.open('mailto:your.email@example.com', '_blank')
      toast.success('Opening email client... 📧')
    }
  },
  {
    name: 'LinkedIn',
    icon: '💼',
    value: 'linkedin.com/in/yourprofile',
    color: 'from-neon-blue to-neon-green',
    action: () => {
      window.open('https://linkedin.com/in/yourprofile', '_blank')
      toast.success('Opening LinkedIn... 💼')
    }
  },
  {
    name: 'GitHub',
    icon: '🐙',
    value: 'github.com/yourusername',
    color: 'from-neon-yellow to-neon-orange',
    action: () => {
      window.open('https://github.com/yourusername', '_blank')
      toast.success('Opening GitHub... 🐙')
    }
  },
  {
    name: 'Twitter',
    icon: '🐦',
    value: '@yourhandle',
    color: 'from-neon-green to-neon-blue',
    action: () => {
      window.open('https://twitter.com/yourhandle', '_blank')
      toast.success('Opening Twitter... 🐦')
    }
  }
]

export default function ContactSection() {
  const [draggedSticker, setDraggedSticker] = useState<string | null>(null)
  const [isDragOver, setIsDragOver] = useState(false)
  const [message, setMessage] = useState('')

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, sticker: string) => {
    setDraggedSticker(sticker)
    e.dataTransfer.setData('text/plain', sticker)
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragOver(true)
  }

  const handleDragLeave = () => {
    setIsDragOver(false)
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragOver(false)
    const sticker = e.dataTransfer.getData('text/plain')
    
    if (sticker) {
      const contactMethod = contactMethods.find(method => method.name === sticker)
      if (contactMethod) {
        contactMethod.action()
      }
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (message.trim()) {
      toast.success('Message sent! I\'ll get back to you soon! 🚀')
      setMessage('')
    } else {
      toast.error('Please enter a message! 📝')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black mosaic-text font-orbitron mb-4">
            Let's Collab IRL 🤝
          </h2>
          <p className="text-xl text-gray-300 font-silkscreen">
            Drag a sticker into the message box to contact me
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Stickers */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-neon-blue mb-8">
              Contact Stickers 📞
            </h3>
            
            <div className="grid grid-cols-2 gap-6">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="cursor-grab active:cursor-grabbing"
                >
                  <div 
                    draggable
                    onDragStart={(e: React.DragEvent<HTMLDivElement>) => handleDragStart(e, method.name)}
                    className={`mosaic-tile rounded-3xl p-6 text-center transition-all duration-300 hover:shadow-lg hover:shadow-neon-pink/20`}
                    style={{ 
                      '--tile-color-1': method.color.includes('pink') ? '#e94560' : 
                                         method.color.includes('blue') ? '#533483' : 
                                         method.color.includes('yellow') ? '#16213e' : '#0f3460',
                      '--tile-color-2': method.color.includes('pink') ? '#0f3460' : 
                                         method.color.includes('blue') ? '#16213e' : 
                                         method.color.includes('yellow') ? '#e94560' : '#533483',
                      '--tile-color-3': method.color.includes('pink') ? '#533483' : 
                                         method.color.includes('blue') ? '#e94560' : 
                                         method.color.includes('yellow') ? '#533483' : '#e94560'
                    } as React.CSSProperties}
                  >
                    <div className="text-4xl mb-4">{method.icon}</div>
                    <h4 className="text-xl font-semibold text-white mb-2 font-righteous">{method.name}</h4>
                    <p className="text-sm text-gray-400 mb-4 font-silkscreen">{method.value}</p>
                    <div className={`w-full h-2 rounded-full bg-gradient-to-r ${method.color}`} />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Floating Speech Bubble */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-8 glass rounded-2xl p-6 relative"
            >
              <div className="absolute -top-3 left-8 w-6 h-6 bg-black transform rotate-45" />
              <p className="text-gray-300 text-center">
                👀 You scrolled this far, might as well say hi.
              </p>
            </motion.div>
          </motion.div>

          {/* Message Box */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-3xl font-bold text-neon-green mb-8">
              Drop Zone 📬
            </h3>
            
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`glass rounded-3xl p-8 transition-all duration-300 ${
                isDragOver ? 'border-2 border-neon-pink bg-neon-pink/10' : ''
              }`}
            >
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">📬</div>
                <h4 className="text-2xl font-bold text-white mb-2">
                  {isDragOver ? 'Drop it here! 🎯' : 'Drag a sticker here'}
                </h4>
                <p className="text-gray-400">
                  {isDragOver 
                    ? 'Release to contact me!' 
                    : 'Or send me a direct message below'
                  }
                </p>
              </div>

              {/* Direct Message Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-black/30 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-neon-blue focus:outline-none transition-colors"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-black/30 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-neon-blue focus:outline-none transition-colors"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 bg-black/30 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-neon-blue focus:outline-none transition-colors resize-none"
                    rows={4}
                    placeholder="Tell me about your project or just say hi! 👋"
                    required
                  />
                </div>
                
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-6 py-4 bg-gradient-to-r from-neon-green to-neon-blue rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-neon-green/30 transition-all duration-300"
                >
                  Send Message 🚀
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Quick Contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 glass rounded-3xl p-8"
        >
          <h3 className="text-2xl font-bold text-neon-yellow mb-6 text-center">
            Quick Contact Options ⚡
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {contactMethods.map((method, index) => (
              <motion.button
                key={method.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={method.action}
                className="flex flex-col items-center gap-2 p-4 glass rounded-2xl hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-2xl">{method.icon}</div>
                <span className="text-sm font-medium text-white">{method.name}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Fun Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8 text-center"
        >
          <p className="text-gray-400 text-sm">
            💡 Pro tip: I usually respond within 24 hours, unless I'm training a model! 🤖
          </p>
        </motion.div>
      </div>
    </div>
  )
} 