'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const stickers = [
  '✨', '🌟', '💫', '⭐', '🎉', '🎊', '🎈', '🎀', '🎁', '🎯',
  '🎪', '🎨', '🎭', '🎪', '🎫', '🎬', '🎤', '🎧', '🎼', '🎹',
  '🎸', '🎺', '🎻', '🎷', '🥁', '🎮', '🕹️', '🎲', '🧩', '🎯',
  '🎳', '🎰', '🎲', '🎭', '🎨', '🎪', '🎫', '🎬', '🎤', '🎧',
  '🐸', '🐱', '🐶', '🐼', '🐨', '🐯', '🦁', '🐮', '🐷', '🐸',
  '🍕', '🍔', '🍟', '🌭', '🍿', '🧂', '🥨', '🥯', '🥖', '🧀',
  '🍥', '🍡', '🍧', '🍨', '🍦', '🍰', '🧁', '🥧', '🍮', '🍭',
  '💖', '💕', '💗', '💓', '💝', '💘', '💞', '💟', '💌', '💋',
  '🔥', '💥', '⚡', '💢', '💦', '💨', '💫', '⭐', '🌟', '✨',
  '🌈', '☀️', '🌙', '⭐', '🌟', '💫', '✨', '🌙', '☀️', '🌈'
]

export default function StickerMode() {
  const [stickerElements, setStickerElements] = useState<Array<{
    id: number
    sticker: string
    x: number
    y: number
    rotation: number
    scale: number
  }>>([])

  useEffect(() => {
    // Create random stickers
    const newStickers = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      sticker: stickers[Math.floor(Math.random() * stickers.length)],
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      rotation: Math.random() * 360,
      scale: 0.5 + Math.random() * 1
    }))
    
    setStickerElements(newStickers)

    // Add new stickers periodically
    const interval = setInterval(() => {
      setStickerElements(prev => {
        const newSticker = {
          id: Date.now(),
          sticker: stickers[Math.floor(Math.random() * stickers.length)],
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          rotation: Math.random() * 360,
          scale: 0.5 + Math.random() * 1
        }
        return [...prev.slice(-15), newSticker] // Keep max 15 stickers
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      {stickerElements.map((element) => (
        <motion.div
          key={element.id}
          initial={{ 
            opacity: 0, 
            scale: 0,
            x: element.x,
            y: element.y,
            rotate: element.rotation
          }}
          animate={{ 
            opacity: [0, 1, 1, 0],
            scale: [0, element.scale, element.scale, 0],
            x: element.x,
            y: element.y - 100,
            rotate: element.rotation + 360
          }}
          transition={{ 
            duration: 4,
            ease: "easeOut"
          }}
          onAnimationComplete={() => {
            setStickerElements(prev => prev.filter(s => s.id !== element.id))
          }}
          className="absolute text-2xl"
          style={{
            left: element.x,
            top: element.y,
            transform: `rotate(${element.rotation}deg) scale(${element.scale})`
          }}
        >
          {element.sticker}
        </motion.div>
      ))}
    </div>
  )
} 