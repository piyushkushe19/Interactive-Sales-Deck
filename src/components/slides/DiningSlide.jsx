import React from 'react'
import { motion } from 'framer-motion'

const STATS = [
  { num: '100+', label: 'Dining Venues' },
  { num: '4hrs', label: 'Avg. Dwell Time' },
  { num: '32%', label: 'of Total Spend' },
  { num: '18', label: 'Celebrity Chef Concepts' },
]

const ITEMS = [
  { icon: '🍽️', title: 'Fine Dining', detail: 'Michelin-recognized chefs. Reservations 3 months out.', count: '18' },
  { icon: '🍜', title: 'International Food Hall', detail: '50,000 sq ft of global cuisine under one dramatic roof', count: '1' },
  { icon: '☕', title: 'Specialty Coffee & Bars', detail: 'Third-wave coffee roasters and craft cocktail lounges', count: '24' },
  { icon: '🎂', title: 'Patisserie & Dessert', detail: 'European-trained pastry chefs and artisan confectioners', count: '15' },
  { icon: '🌮', title: 'Casual & Fast Casual', detail: 'Premium fast-casual concepts and celebrity-backed brands', count: '45+' },
]

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.09, delayChildren: 0.25 } } }
const item = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }

export default function DiningSlide({ isActive }) {
  return (
    <section style={{
      width: '100vw', height: '100vh',
      flexShrink: 0, position: 'relative', overflow: 'hidden',
      background: 'var(--dark2)',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: `url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=70') center/cover no-repeat`,
        opacity: 0.12,
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(135deg, rgba(8,10,14,0.95) 0%, rgba(8,10,14,0.7) 100%)',
      }} />

      <div style={{
        position: 'relative', zIndex: 2,
        height: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr',
        paddingTop: '64px',
      }}>
        {/* Left */}
        <motion.div
          variants={container} initial="hidden" animate={isActive ? 'visible' : 'hidden'}
          style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '3rem 4rem 3rem 8vw' }}
        >
          <motion.p variants={item} style={{ fontSize: '0.68rem', letterSpacing: '0.3em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '1.2rem' }}>
            Culinary Destination
          </motion.p>
          <motion.h2 variants={item} style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(2.5rem, 4vw, 4rem)', fontWeight: 300, lineHeight: 1.15,
            color: 'var(--off-white)', marginBottom: '1.5rem',
          }}>
            Dining That<br /><em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Defines</em> the Visit
          </motion.h2>
          <motion.p variants={item} style={{ fontSize: '0.95rem', fontWeight: 300, color: 'var(--muted)', lineHeight: 1.8, maxWidth: '440px', marginBottom: '2rem' }}>
            With over 100 dining options across every format — from Michelin-recognized chefs to immersive food halls — American Dream transforms a shopping trip into a full-day culinary journey.
          </motion.p>
          <motion.div variants={item} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            {STATS.map((s, i) => (
              <div key={i} style={{ padding: '1.25rem', border: '1px solid var(--border)', background: 'rgba(8,10,14,0.6)' }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2.2rem', fontWeight: 300, color: 'var(--gold)', lineHeight: 1 }}>{s.num}</div>
                <div style={{ fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--muted)', marginTop: '0.35rem' }}>{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right */}
        <motion.div
          variants={container} initial="hidden" animate={isActive ? 'visible' : 'hidden'}
          style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '3rem 8vw 3rem 3rem', gap: '0.85rem' }}
        >
          {ITEMS.map((d, i) => (
            <DiningItem key={i} item={d} variants={item} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function DiningItem({ item: d, variants }) {
  const [hovered, setHovered] = React.useState(false)
  return (
    <motion.div
      variants={variants}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex', alignItems: 'center', gap: '1.5rem',
        padding: '1.25rem 1.5rem',
        border: `1px solid ${hovered ? 'rgba(201,168,76,0.5)' : 'var(--border)'}`,
        background: 'rgba(8,10,14,0.6)', backdropFilter: 'blur(8px)',
        transform: hovered ? 'translateX(6px)' : 'none',
        transition: 'all 0.35s',
        cursor: 'default',
      }}
    >
      <span style={{ fontSize: '1.5rem', minWidth: '1.5rem' }}>{d.icon}</span>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--off-white)', marginBottom: '0.2rem' }}>{d.title}</div>
        <div style={{ fontSize: '0.75rem', color: 'var(--muted)', fontWeight: 300 }}>{d.detail}</div>
      </div>
      <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.8rem', color: 'var(--gold)', fontWeight: 300 }}>{d.count}</span>
    </motion.div>
  )
}
