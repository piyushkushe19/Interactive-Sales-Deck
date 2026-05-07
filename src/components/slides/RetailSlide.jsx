import React, { useRef } from 'react'
import { motion } from 'framer-motion'

const CARDS = [
  { icon: '👑', title: 'Ultra-Luxury', count: '25+ Flagship Stores', desc: 'Louis Vuitton, Hermès, Cartier, and more — exclusive East Coast flagships in the most visited retail destination in the Americas.' },
  { icon: '✦', title: 'Premium Fashion', count: '80+ Boutiques', desc: 'From contemporary to couture — a full-spectrum fashion offering that draws affluent shoppers from Manhattan and beyond.' },
  { icon: '💎', title: 'Jewelry & Watches', count: '18 Fine Jewelers', desc: 'The highest concentration of fine jewelry and watch retailers in a single US shopping destination.' },
  { icon: '🏠', title: 'Home & Lifestyle', count: '35+ Concept Stores', desc: 'Curated home design, wellness brands, and lifestyle concepts that drive extended dwell time and repeat visits.' },
  { icon: '⚡', title: 'Technology', count: '12 Tech Retailers', desc: 'Apple, Samsung, and next-generation tech retailers positioned at the forefront of consumer electronics.' },
  { icon: '🌿', title: 'Beauty & Wellness', count: '30+ Destinations', desc: 'From Sephora to boutique spa experiences — a wellness corridor that keeps shoppers on property longer.' },
  { icon: '👟', title: 'Streetwear & Sport', count: '40+ Active Brands', desc: 'Nike, Adidas, exclusive streetwear drops — capturing the next generation of luxury consumer.' },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function RetailSlide({ isActive }) {
  const trackRef = useRef(null)
  const dragRef = useRef({ isDragging: false, startX: 0, scrollLeft: 0 })

  const onMouseDown = (e) => {
    dragRef.current = { isDragging: true, startX: e.pageX - trackRef.current.offsetLeft, scrollLeft: trackRef.current.scrollLeft }
  }
  const onMouseUp = () => { dragRef.current.isDragging = false }
  const onMouseMove = (e) => {
    if (!dragRef.current.isDragging) return
    const x = e.pageX - trackRef.current.offsetLeft
    trackRef.current.scrollLeft = dragRef.current.scrollLeft - (x - dragRef.current.startX)
  }

  return (
    <section style={{
      width: '100vw', height: '100vh',
      flexShrink: 0,
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--dark)',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: `url('https://images.unsplash.com/photo-1481437156560-3205f6a55735?w=1600&q=70') center/cover no-repeat`,
        opacity: 0.07,
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to right, rgba(8,10,14,0.97) 40%, rgba(8,10,14,0.5) 100%)',
      }} />

      <motion.div
        variants={container} initial="hidden" animate={isActive ? 'visible' : 'hidden'}
        style={{
          position: 'relative', zIndex: 2,
          height: '100%',
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          padding: '5rem 8vw 3rem',
          paddingTop: 'calc(64px + 3rem)',
        }}
      >
        <motion.div variants={item} style={{ marginBottom: '2.5rem' }}>
          <p style={{ fontSize: '0.68rem', letterSpacing: '0.3em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            Curated Commerce
          </p>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(2.2rem, 3.5vw, 3.5rem)', fontWeight: 300,
            color: 'var(--off-white)',
          }}>
            The <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Retail</em> Ecosystem
          </h2>
        </motion.div>

        <motion.div
          id="retail-cards-track"
          ref={trackRef}
          variants={item}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          onMouseMove={onMouseMove}
          style={{
            display: 'flex', gap: '1.5rem',
            overflowX: 'auto', paddingBottom: '1rem',
            scrollbarWidth: 'thin', scrollbarColor: 'var(--gold-dim) transparent',
            cursor: 'grab', userSelect: 'none',
          }}
        >
          {CARDS.map((card, i) => (
            <RetailCard key={i} card={card} />
          ))}
        </motion.div>

        <motion.p variants={item} style={{ marginTop: '1.25rem', fontSize: '0.72rem', letterSpacing: '0.2em', color: 'rgba(201,168,76,0.4)', textTransform: 'uppercase' }}>
          ← Drag to explore all categories →
        </motion.p>
      </motion.div>
    </section>
  )
}

function RetailCard({ card }) {
  const [hovered, setHovered] = React.useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        flexShrink: 0, width: '280px',
        border: `1px solid ${hovered ? 'rgba(201,168,76,0.5)' : 'var(--border)'}`,
        padding: '2rem 1.75rem',
        background: 'rgba(15,19,24,0.8)',
        backdropFilter: 'blur(8px)',
        transform: hovered ? 'translateY(-6px)' : 'none',
        transition: 'all 0.4s cubic-bezier(0.25,0.46,0.45,0.94)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
        background: 'linear-gradient(90deg, transparent, var(--gold), transparent)',
        opacity: hovered ? 1 : 0, transition: 'opacity 0.4s',
      }} />
      <span style={{ fontSize: '2rem', marginBottom: '1.2rem', display: 'block' }}>{card.icon}</span>
      <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.4rem', fontWeight: 400, color: 'var(--off-white)', marginBottom: '0.75rem' }}>{card.title}</h3>
      <p style={{ fontSize: '0.72rem', letterSpacing: '0.2em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '0.75rem' }}>{card.count}</p>
      <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.7, fontWeight: 300 }}>{card.desc}</p>
    </div>
  )
}
