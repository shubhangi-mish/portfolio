'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const aiMessages = [
  "Training loss going down ⬇️",
  "Deploy me to production pls 🥲",
  "Need more coffee ☕",
  "Bug found in production 😱",
  "Code review time! 👀",
  "Stack overflow is my friend 🤖",
  "Git commit -m 'fix everything' 🚀",
  "Why is it always DNS? 🤔",
  "It works on my machine 💻",
  "Time to refactor! 🔧",
  "Another day, another merge conflict 😅",
  "Who needs sleep anyway? 😴",
  "Let's ship it! 🚢",
  "Debugging is like being a detective 🔍",
  "Clean code is happy code ✨",
  "Time for a coffee break ☕",
  "The best code is no code 🤯",
  "Stack trace is my favorite story 📚",
  "Deploying to production... fingers crossed 🤞",
  "Code review: 'LGTM' 😎"
]

export default function AICompanion() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentMessage, setCurrentMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    // Show AI companion after 5 seconds
    const showTimer = setTimeout(() => {
      setIsVisible(true)
    }, 5000)

    return () => clearTimeout(showTimer)
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const showMessage = () => {
      setIsTyping(true)
      const randomMessage = aiMessages[Math.floor(Math.random() * aiMessages.length)]
      
      // Simulate typing effect
      setTimeout(() => {
        setCurrentMessage(randomMessage)
        setIsTyping(false)
      }, 1000)
    }

    // Show first message
    showMessage()

    // Show new message every 10-20 seconds
    const messageInterval = setInterval(() => {
      showMessage()
    }, 10000 + Math.random() * 10000)

    return () => clearInterval(messageInterval)
  }, [isVisible])

  if (!isVisible) return null

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed bottom-6 right-6 z-50"
    >
      {/* AI Mascot */}
      <motion.div
        animate={{ 
          y: [0, -10, 0],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="relative"
      >
        {/* AI Bot */}
        <div className="w-16 h-16 bg-gradient-to-r from-neon-pink to-neon-purple rounded-full flex items-center justify-center text-2xl shadow-lg shadow-neon-pink/50 cursor-pointer">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🤖
          </motion.div>
        </div>

        {/* Speech Bubble */}
        <AnimatePresence>
          {currentMessage && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.8, x: 20 }}
              className="absolute bottom-full right-0 mb-2 w-48 p-3 glass rounded-2xl text-sm text-white"
            >
              {/* Speech bubble tail */}
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/20" />
              
              <div className="relative z-10">
                {isTyping ? (
                  <div className="flex items-center gap-1">
                    <span>Typing</span>
                    <motion.div
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="text-neon-green"
                    >
                      ...
                    </motion.div>
                  </div>
                ) : (
                  <p>{currentMessage}</p>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulse effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-neon-pink to-neon-purple rounded-full opacity-20"
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>

      {/* Status indicator */}
      <motion.div
        className="absolute -top-1 -right-1 w-4 h-4 bg-neon-green rounded-full"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
      />
    </motion.div>
  )
} 