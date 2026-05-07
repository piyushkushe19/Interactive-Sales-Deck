import React from 'react'
import { motion } from 'framer-motion'

const LUXURY_CELLS = [
  { name: 'Fashion Maisons', cat: 'Haute Couture & RTW', img: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=70' },
  { name: 'Fine Jewelry', cat: 'Diamonds & Precious Stones', img: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=600&q=70' },
  { name: 'Prestige Watches', cat: 'Swiss & Independent', img: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600&q=70' },
  { name: 'Private Concierge', cat: 'VIP Shopping Suites', img: 'https://images.unsplash.com/photo-1583394293214-0b6f6c5e2f10?w=600&q=70' },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const item = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function LuxurySlide({ isActive }) {
  return (
    <section style={{
      width: '100vw', height: '100vh',
      flexShrink: 0, position: 'relative', overflow: 'hidden',
      background: '#050507',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 50% 60% at 50% 30%, rgba(201,168,76,0.06) 0%, transparent 60%)',
      }} />
      <div className="luxury-grid-bg" style={{ position: 'absolute', inset: 0 }} />

      <div style={{
        position: 'relative', zIndex: 2,
        height: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr',
        paddingTop: '64px',
      }}>
        {/* Left */}
        <motion.div
          variants={container} initial="hidden" animate={isActive ? 'visible' : 'hidden'}
          style={{
            display: 'flex', flexDirection: 'column', justifyContent: 'center',
            padding: '3rem 3rem 3rem 8vw',
            borderRight: '1px solid rgba(201,168,76,0.12)',
          }}
        >
          <motion.span variants={item} style={{
            display: 'inline-block', padding: '0.3rem 0.8rem',
            border: '1px solid rgba(201,168,76,0.4)',
            fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase',
            color: 'var(--gold)', marginBottom: '1.2rem', alignSelf: 'flex-start',
          }}>
            Premium Positioning
          </motion.span>

          <motion.p variants={item} style={{ fontSize: '0.68rem', letterSpacing: '0.3em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '1.2rem' }}>
            The Prestige Factor
          </motion.p>

          <motion.h2 variants={item} style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(2.5rem, 4vw, 4rem)', fontWeight: 300, lineHeight: 1.15,
            color: 'var(--off-white)', marginBottom: '1.5rem',
          }}>
            Where the World's<br /><em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Elite</em> Shops
          </motion.h2>

          <motion.p variants={item} style={{ fontSize: '0.95rem', fontWeight: 300, color: 'var(--muted)', lineHeight: 1.8, maxWidth: '440px' }}>
            American Dream has secured anchor agreements with the world's most exclusive luxury houses — names that have never before appeared in a suburban retail context.
          </motion.p>

          <motion.div variants={item} style={{ marginTop: '2.5rem' }}>
            <div style={{ fontSize: '0.78rem', color: 'var(--muted)', fontWeight: 300, lineHeight: 1.7, marginBottom: '0.75rem' }}>
              Average basket size among luxury visitors:
            </div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '3.5rem', fontWeight: 300, color: 'var(--gold)', lineHeight: 1 }}>
              $2,400+
            </div>
            <div style={{ fontSize: '0.72rem', letterSpacing: '0.2em', color: 'rgba(201,168,76,0.5)', textTransform: 'uppercase', marginTop: '0.35rem' }}>
              Per Visit Spend
            </div>
          </motion.div>

          <motion.div variants={item} style={{
            marginTop: '2rem', padding: '1.5rem',
            border: '1px solid rgba(201,168,76,0.15)',
            background: 'rgba(201,168,76,0.03)',
          }}>
            <p style={{ fontSize: '0.78rem', color: 'var(--muted)', fontWeight: 300, lineHeight: 1.7, fontStyle: 'italic' }}>
              "American Dream represents the single most important luxury retail opportunity in North America."
            </p>
            <p style={{ marginTop: '0.75rem', fontSize: '0.68rem', letterSpacing: '0.15em', color: 'var(--gold)', textTransform: 'uppercase' }}>
              — Leasing Strategy Report, 2024
            </p>
          </motion.div>
        </motion.div>

        {/* Right — image grid */}
        <motion.div
          initial={{ opacity: 0 }} animate={isActive ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr',
            gap: '1px', background: 'rgba(201,168,76,0.08)',
          }}
        >
          {LUXURY_CELLS.map((cell, i) => (
            <LuxuryCell key={i} cell={cell} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function LuxuryCell({ cell }) {
  const [hovered, setHovered] = React.useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? '#0a0a0e' : '#050507',
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        padding: '2rem', position: 'relative', overflow: 'hidden',
        cursor: 'default', transition: 'background 0.4s',
      }}
    >
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url('${cell.img}')`,
        backgroundSize: 'cover', backgroundPosition: 'center',
        opacity: hovered ? 0.4 : 0.25,
        transform: hovered ? 'scale(1.05)' : 'scale(1)',
        transition: 'opacity 0.5s, transform 0.6s',
      }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(5,5,7,0.85) 0%, transparent 60%)' }} />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.2rem', fontWeight: 400, color: 'var(--off-white)', marginBottom: '0.3rem' }}>
          {cell.name}
        </div>
        <div style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)' }}>
          {cell.cat}
        </div>
      </div>
    </div>
  )
}
