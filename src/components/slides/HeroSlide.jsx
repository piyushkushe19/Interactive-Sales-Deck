import React, { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.85, ease: [0.25, 0.46, 0.45, 0.94], delay },
  }),
}

const STATS = [
  { num: '3M', label: 'Square Feet' },
  { num: '450+', label: 'Retail Stores' },
  { num: '40M', label: 'Projected Annual Visitors' },
  { num: '55%', label: 'Entertainment & Dining' },
]

export default function HeroSlide({ isActive, goTo }) {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    if (isActive) {
      video.play().catch(() => {
        // Autoplay blocked by browser policy — silent fail
      })
    } else {
      video.pause()
    }
  }, [isActive])

  return (
    <section
      style={{
        width: '100vw', height: '100vh',
        flexShrink: 0,
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--dark)',
      }}
    >
      {/* Background video */}
      <video
        ref={videoRef}
        src="/Hero_Video_Mobile.mp4"
        muted
        loop
        playsInline
        preload="auto"
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover',
          opacity: 1,
          zIndex: 0,
        }}
      />

      {/* Dark gradient overlay — keeps text legible over video */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'radial-gradient(ellipse 80% 60% at 60% 50%, rgba(201,168,76,0.06) 0%, transparent 70%), linear-gradient(135deg, rgba(8,10,14,0.85) 0%, rgba(15,19,24,0.75) 40%, rgba(20,27,38,0.65) 100%)',
      }} />

      {/* Main content */}
      <div style={{
        position: 'relative', zIndex: 2,
        display: 'flex', flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
        padding: '0 8vw',
        maxWidth: '900px',
        paddingBottom: '100px',
      }}>
        <motion.p
          custom={0.3} variants={fadeUp}
          initial="hidden" animate={isActive ? 'visible' : 'hidden'}
          style={{ fontSize: '0.72rem', letterSpacing: '0.3em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '1.5rem' }}
        >
          East Rutherford, New Jersey · Est. 2019
        </motion.p>

        <motion.h1
          custom={0.5} variants={fadeUp}
          initial="hidden" animate={isActive ? 'visible' : 'hidden'}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(3.5rem, 6vw, 6rem)',
            fontWeight: 300, lineHeight: 1.08,
            color: 'var(--off-white)',
            marginBottom: '1.8rem',
          }}
        >
          More than a mall.<br />
          <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>A global destination.</em>
        </motion.h1>

        <motion.p
          custom={0.7} variants={fadeUp}
          initial="hidden" animate={isActive ? 'visible' : 'hidden'}
          style={{ fontSize: '1.05rem', fontWeight: 300, color: 'var(--muted)', maxWidth: '480px', lineHeight: 1.7, marginBottom: '2.5rem' }}
        >
          3 million sq ft. 450 stores. One incomparable address. American Dream redefines what retail, entertainment, and luxury can be — under one roof.
        </motion.p>

        <motion.div
          custom={0.9} variants={fadeUp}
          initial="hidden" animate={isActive ? 'visible' : 'hidden'}
          style={{ display: 'flex', gap: '1rem' }}
        >
          <BtnPrimary onClick={() => goTo(1)}>Explore the Property →</BtnPrimary>
          <BtnOutline onClick={() => goTo(6)}>Book a Meeting</BtnOutline>
        </motion.div>
      </div>

      {/* Stat bar */}
      <motion.div
        custom={1.1} variants={fadeUp}
        initial="hidden" animate={isActive ? 'visible' : 'hidden'}
        style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          display: 'flex',
          borderTop: '1px solid var(--border)',
          background: 'rgba(8,10,14,0.75)',
          backdropFilter: 'blur(10px)',
          zIndex: 2,
        }}
      >
        {STATS.map((s, i) => (
          <div key={i} style={{
            flex: 1, padding: '1.2rem 2rem',
            borderRight: i < STATS.length - 1 ? '1px solid var(--border)' : 'none',
            display: 'flex', flexDirection: 'column', gap: '0.25rem',
          }}>
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.9rem', fontWeight: 300, color: 'var(--gold)', lineHeight: 1 }}>{s.num}</span>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--muted)' }}>{s.label}</span>
          </div>
        ))}
      </motion.div>

      {/* Side label */}
      <div style={{
        position: 'absolute', right: '4vw', top: '50%',
        transform: 'translateY(-50%) rotate(90deg)',
        fontSize: '0.62rem', letterSpacing: '0.25em',
        color: 'rgba(201,168,76,0.35)', textTransform: 'uppercase', zIndex: 2,
      }}>
        Scroll or use arrow keys to explore
      </div>
    </section>
  )
}

function BtnPrimary({ children, onClick }) {
  const [hovered, setHovered] = React.useState(false)
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: '0.85rem 2rem',
        background: hovered ? 'var(--gold-light)' : 'var(--gold)',
        color: 'var(--dark)',
        border: 'none',
        fontFamily: "'Outfit', sans-serif",
        fontSize: '0.78rem', fontWeight: 600,
        letterSpacing: '0.14em', textTransform: 'uppercase',
        cursor: 'pointer',
        transform: hovered ? 'translateY(-2px)' : 'none',
        transition: 'all 0.3s',
      }}
    >
      {children}
    </button>
  )
}

function BtnOutline({ children, onClick }) {
  const [hovered, setHovered] = React.useState(false)
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: '0.85rem 2rem',
        background: 'transparent',
        color: hovered ? 'var(--gold)' : 'var(--off-white)',
        border: `1px solid ${hovered ? 'var(--gold)' : 'rgba(245,241,235,0.3)'}`,
        fontFamily: "'Outfit', sans-serif",
        fontSize: '0.78rem', fontWeight: 500,
        letterSpacing: '0.14em', textTransform: 'uppercase',
        cursor: 'pointer',
        transition: 'all 0.3s',
      }}
    >
      {children}
    </button>
  )
}