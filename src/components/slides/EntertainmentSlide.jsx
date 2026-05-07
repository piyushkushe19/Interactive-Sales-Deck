import React from 'react'
import { motion } from 'framer-motion'

const ATTRACTIONS = [
  { tag: 'Indoor', emoji: '🎢', title: 'Nickelodeon Universe', sub: 'Theme Park · 450,000 sq ft', desc: 'The world\'s largest indoor theme park. 35 rides and attractions inside a fully enclosed, climate-controlled mega-structure.' },
  { tag: 'Year-Round', emoji: '⛷️', title: 'Big SNOW', sub: 'Indoor Ski Resort · 180,000 sq ft', desc: 'America\'s first and only year-round indoor ski and snow park. Skiing, snowboarding, and snowtubing — in New Jersey — every single day.' },
  { tag: 'Family', emoji: '🌊', title: 'DreamWorks Water Park', sub: 'Indoor Water Park · 532,000 sq ft', desc: 'The largest indoor water park in the Western Hemisphere. 40+ attractions and a 1,000-person wave pool — rain or shine.' },
  { tag: 'Premium', emoji: '🎬', title: 'Luxury Cinema', sub: '16-Screen Complex · IMAX + 4DX', desc: 'A fully immersive luxury cinema experience featuring recliner seating, in-seat dining, and every cutting-edge format.' },
  { tag: 'Exclusive', emoji: '🏒', title: 'Ice Rink', sub: 'NHL-Regulation · Event-Ready', desc: 'Seasonal ice skating and year-round events in an architectural showpiece rink at the heart of the property.' },
  { tag: 'Next-Gen', emoji: '🎮', title: 'Gaming & XR', sub: 'Extended Reality · E-Sports', desc: 'Competitive gaming lounges, VR arcades, and professional e-sports infrastructure attracting the next generation of visitors.' },
]

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } } }
const item = { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }

export default function EntertainmentSlide({ isActive }) {
  return (
    <section style={{
      width: '100vw', height: '100vh',
      flexShrink: 0, position: 'relative', overflow: 'hidden',
      background: 'var(--dark)',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,40,80,0.5) 0%, transparent 60%), linear-gradient(180deg, #080A0E 0%, #0a1020 100%)',
      }} />

      <motion.div
        variants={container} initial="hidden" animate={isActive ? 'visible' : 'hidden'}
        style={{
          position: 'relative', zIndex: 2,
          height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center',
          padding: '3rem 8vw',
          paddingTop: 'calc(64px + 2rem)',
        }}
      >
        <motion.div variants={item} style={{ marginBottom: '2.5rem' }}>
          <p style={{ fontSize: '0.68rem', letterSpacing: '0.3em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            World-Class Experiences
          </p>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(2.2rem, 3.5vw, 3.5rem)', fontWeight: 300, color: 'var(--off-white)',
          }}>
            Entertainment Like Nowhere <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>On Earth</em>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
          {ATTRACTIONS.map((a, i) => (
            <motion.div key={i} variants={item}>
              <EntCard attraction={a} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

function EntCard({ attraction: a }) {
  const [hovered, setHovered] = React.useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: `1px solid ${hovered ? 'rgba(201,168,76,0.4)' : 'var(--border)'}`,
        padding: '1.75rem',
        background: 'rgba(10,15,25,0.8)', backdropFilter: 'blur(8px)',
        position: 'relative', overflow: 'hidden',
        transform: hovered ? 'translateY(-8px)' : 'none',
        transition: 'all 0.45s cubic-bezier(0.25,0.46,0.45,0.94)',
        cursor: 'default',
      }}
    >
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '100px',
        background: 'linear-gradient(to top, rgba(201,168,76,0.06), transparent)',
        opacity: hovered ? 1 : 0, transition: 'opacity 0.4s',
      }} />
      <div style={{
        position: 'absolute', top: '1.25rem', right: '1.25rem',
        fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase',
        color: 'var(--gold)', border: '1px solid rgba(201,168,76,0.3)',
        padding: '0.2rem 0.55rem',
      }}>
        {a.tag}
      </div>
      <span style={{ fontSize: '2.2rem', marginBottom: '1rem', display: 'block' }}>{a.emoji}</span>
      <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.4rem', fontWeight: 400, color: 'var(--off-white)', marginBottom: '0.4rem' }}>{a.title}</h3>
      <p style={{ fontSize: '0.7rem', letterSpacing: '0.15em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '0.75rem' }}>{a.sub}</p>
      <p style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.7, fontWeight: 300 }}>{a.desc}</p>
    </div>
  )
}
