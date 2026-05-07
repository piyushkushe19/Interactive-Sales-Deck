import React from 'react'
import { motion } from 'framer-motion'

const COUNTERS = [
  { num: '3M sq ft', name: 'Total GLA', desc: 'Gross Leasable Area — 3× the size of the average US mall' },
  { num: '450+', name: 'Tenants', desc: 'A curated mix of luxury, lifestyle, and experiential brands' },
  { num: '40M', name: 'Annual Visitors', desc: 'Projected footfall across retail, dining, and attractions' },
  { num: '$5B+', name: 'Development Value', desc: 'Total investment in the most ambitious retail project in US history' },
]

const USPs = [
  { title: 'Strategic Location', desc: '8 miles from Midtown Manhattan, adjacent to MetLife Stadium' },
  { title: 'Unmatched Catchment', desc: '20M+ consumers within 60-minute drive radius' },
  { title: 'Irreplaceable Asset', desc: 'No comparable development possible in the tri-state area' },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function WhySlide({ isActive }) {
  return (
    <section style={{
      width: '100vw', height: '100vh',
      flexShrink: 0,
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--dark2)',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 60% 70% at 100% 50%, rgba(201,168,76,0.05) 0%, transparent 60%)',
      }} />

      <div style={{
        position: 'relative', zIndex: 1,
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        height: '100%', paddingTop: '64px',
      }}>
        {/* Left */}
        <motion.div
          variants={container} initial="hidden" animate={isActive ? 'visible' : 'hidden'}
          style={{
            display: 'flex', flexDirection: 'column', justifyContent: 'center',
            padding: '3rem 4rem 3rem 8vw',
            borderRight: '1px solid var(--border)',
          }}
        >
          <motion.p variants={item} style={{ fontSize: '0.68rem', letterSpacing: '0.3em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '1.2rem' }}>
            The Investment Case
          </motion.p>
          <motion.h2 variants={item} style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(2.5rem, 4vw, 4rem)', fontWeight: 300, lineHeight: 1.15,
            color: 'var(--off-white)', marginBottom: '1.5rem',
          }}>
            Why American<br /><em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Dream</em> Wins
          </motion.h2>
          <motion.p variants={item} style={{ fontSize: '0.95rem', fontWeight: 300, color: 'var(--muted)', lineHeight: 1.8, maxWidth: '440px', marginBottom: '2rem' }}>
            Located minutes from Manhattan, in the highest-income consumer corridor in the United States. American Dream captures what no other property can — a luxury retail ecosystem fused with world-class entertainment.
          </motion.p>
          {USPs.map((u, i) => (
            <motion.div key={i} variants={item} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '1rem' }}>
              <div style={{ width: '2px', height: '32px', background: 'var(--gold)', flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: '0.78rem', fontWeight: 500, color: 'var(--off-white)', marginBottom: '0.2rem' }}>{u.title}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--muted)', fontWeight: 300 }}>{u.desc}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Right — counters */}
        <motion.div
          variants={container} initial="hidden" animate={isActive ? 'visible' : 'hidden'}
          style={{
            display: 'flex', flexDirection: 'column', justifyContent: 'center',
            padding: '3rem 8vw 3rem 4rem',
          }}
        >
          {COUNTERS.map((c, i) => (
            <CounterRow key={i} counter={c} variants={item} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function CounterRow({ counter, variants }) {
  const [hovered, setHovered] = React.useState(false)
  return (
    <motion.div
      variants={variants}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex', padding: '1.8rem 0',
        borderBottom: '1px solid var(--border)',
        alignItems: 'center', gap: '1.5rem',
        background: hovered ? 'rgba(201,168,76,0.03)' : 'transparent',
        transition: 'background 0.3s',
        cursor: 'default',
      }}
    >
      <span style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: '3.5rem', fontWeight: 300,
        color: 'var(--gold)', lineHeight: 1,
        minWidth: '200px', letterSpacing: '-0.02em',
      }}>
        {counter.num}
      </span>
      <div>
        <div style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--off-white)', marginBottom: '0.3rem' }}>{counter.name}</div>
        <div style={{ fontSize: '0.78rem', color: 'var(--muted)', fontWeight: 300 }}>{counter.desc}</div>
      </div>
    </motion.div>
  )
}
