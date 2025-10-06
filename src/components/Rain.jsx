import React from 'react'

// Rain of emojis across the page. Purely decorative, pointer-events: none.
export default function Rain({count = 36}){
  const emojis = ['🌱','🌿','🌾','🍃','💧','☔️']
  const drops = Array.from({length: count}).map((_, i) => {
    const left = Math.random() * 100
  const duration = 12 + Math.random() * 28 // seconds (now 12s - 40s)
  const delay = -Math.random() * 40 // negative to start all over time (more spread)
    const size = 16 + Math.random() * 36 // px
    const emoji = emojis[Math.floor(Math.random() * emojis.length)]
    return {id: i, left, duration, delay, size, emoji}
  })

  return (
    <div className="emoji-rain" aria-hidden>
      {drops.map(d => (
        <span
          key={d.id}
          className="emoji"
          style={{
            left: `${d.left}%`,
            fontSize: `${d.size}px`,
            animationDuration: `${d.duration}s`,
            animationDelay: `${d.delay}s`,
            transform: `translateY(-10vh)`,
          }}
        >{d.emoji}</span>
      ))}
    </div>
  )
}
