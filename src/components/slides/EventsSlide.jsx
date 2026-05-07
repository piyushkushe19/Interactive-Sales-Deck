import React from 'react'
import { motion } from 'framer-motion'

const EVENT_TYPES = [
  { num: '01', title: 'Brand Activations & Pop-Ups', desc: 'Prime footfall zones, turnkey production services, and 40M annual visitors — the perfect canvas for immersive brand experiences and product launches.' },
  { num: '02', title: 'Corporate & Incentive', desc: 'Exclusive access to entertainment venues, private dining, and customized programming for corporate retreats, team-building, and client entertainment.' },
  { num: '03', title: 'Fashion & Media', desc: 'Runway-ready spaces, media production infrastructure, and proximity to New York\'s fashion and entertainment ecosystem.' },
  { num: '04', title: 'Private Hire', desc: 'Exclusive buyouts of individual attractions — from private ski sessions to after-hours theme park access — for truly unforgettable events.' },
]

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } } }
const item = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65 } } }

export default function EventsSlide({ isActive }) {
  return (
    <section style={{
      width: '100vw', height: '100vh',
      flexShrink: 0, position: 'relative', overflow: 'hidden',
      background: 'var(--dark)',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 80% 80% at 100% 50%, rgba(201,168,76,0.07) 0%, transparent 60%)',
      }} />
      <div className="event-lines-bg" style={{ position: 'absolute', inset: 0 }} />

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
            padding: '3rem 4rem 3rem 8vw',
            borderRight: '1px solid var(--border)',
          }}
        >
          <motion.p variants={item} style={{ fontSize: '0.68rem', letterSpacing: '0.3em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '1.2rem' }}>
            Private & Corporate
          </motion.p>
          <motion.h2 variants={item} style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(2.5rem, 4vw, 4rem)', fontWeight: 300, lineHeight: 1.15,
            color: 'var(--off-white)', marginBottom: '1.5rem',
          }}>
            Host Your Event<br />At the <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>World's</em><br />Most Visited Venue
          </motion.h2>
          <motion.p variants={item} style={{ fontSize: '0.95rem', fontWeight: 300, color: 'var(--muted)', lineHeight: 1.8, maxWidth: '440px', marginBottom: '2rem' }}>
            From intimate brand activations to stadium-scale corporate events — American Dream offers a portfolio of event spaces unlike anything else in the market.
          </motion.p>
          <motion.div variants={item} style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
            <BtnPrimary>Request a Proposal →</BtnPrimary>
            <BtnOutline>Download Media Kit</BtnOutline>
          </motion.div>
          <motion.div variants={item} style={{ padding: '1.5rem', border: '1px solid var(--border)', background: 'rgba(201,168,76,0.03)' }}>
            <div style={{ fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.75rem' }}>
              Contact Events
            </div>
            <div style={{ fontSize: '0.85rem', color: 'var(--muted)', fontWeight: 300, lineHeight: 1.9 }}>
              events@americandream.com<br />
              +1 (201) 531-2000<br />
              1 American Dream Way, East Rutherford, NJ
            </div>
          </motion.div>
        </motion.div>

        {/* Right */}
        <motion.div
          variants={container} initial="hidden" animate={isActive ? 'visible' : 'hidden'}
          style={{
            display: 'flex', flexDirection: 'column', justifyContent: 'center',
            padding: '3rem 8vw 3rem 4rem', gap: '0',
          }}
        >
          {EVENT_TYPES.map((e, i) => (
            <motion.div key={i} variants={item} style={{
              display: 'flex', gap: '1.5rem', alignItems: 'flex-start',
              paddingBottom: i < EVENT_TYPES.length - 1 ? '1.5rem' : 0,
              paddingTop: i > 0 ? '1.5rem' : 0,
              borderBottom: i < EVENT_TYPES.length - 1 ? '1px solid var(--border)' : 'none',
            }}>
              <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2.5rem', fontWeight: 300, color: 'var(--gold)', lineHeight: 1, minWidth: '3.5rem' }}>
                {e.num}
              </span>
              <div>
                <div style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--off-white)', marginBottom: '0.35rem', letterSpacing: '0.05em' }}>{e.title}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--muted)', fontWeight: 300, lineHeight: 1.65 }}>{e.desc}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function BtnPrimary({ children }) {
  const [h, setH] = React.useState(false)
  return (
    <button
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{
        padding: '0.85rem 2rem',
        background: h ? 'var(--gold-light)' : 'var(--gold)',
        color: 'var(--dark)', border: 'none',
        fontFamily: "'Outfit', sans-serif", fontSize: '0.78rem', fontWeight: 600,
        letterSpacing: '0.14em', textTransform: 'uppercase',
        cursor: 'pointer', transform: h ? 'translateY(-2px)' : 'none',
        transition: 'all 0.3s',
      }}
    >{children}</button>
  )
}

function BtnOutline({ children }) {
  const [h, setH] = React.useState(false)
  return (
    <button
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{
        padding: '0.85rem 2rem', background: 'transparent',
        color: h ? 'var(--gold)' : 'var(--off-white)',
        border: `1px solid ${h ? 'var(--gold)' : 'rgba(245,241,235,0.3)'}`,
        fontFamily: "'Outfit', sans-serif", fontSize: '0.78rem', fontWeight: 500,
        letterSpacing: '0.14em', textTransform: 'uppercase',
        cursor: 'pointer', transition: 'all 0.3s',
      }}
    >{children}</button>
  )
}
