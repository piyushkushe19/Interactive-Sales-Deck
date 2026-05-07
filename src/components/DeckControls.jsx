import React from 'react'

export function ProgressDots({ current, total, goTo }) {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 100,
        display: 'flex',
        gap: '0.6rem',
        alignItems: 'center',
      }}
    >
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          onClick={() => goTo(i)}
          style={{
            width: current === i ? '24px' : '6px',
            height: '6px',
            borderRadius: current === i ? '3px' : '50%',
            background: current === i ? 'var(--gold)' : 'rgba(201,168,76,0.3)',
            cursor: 'pointer',
            transition: 'all 0.35s cubic-bezier(0.25,0.46,0.45,0.94)',
          }}
        />
      ))}
    </div>
  )
}

export function SlideNumber({ current, total }) {
  const num = String(current + 1).padStart(2, '0')
  const tot = String(total).padStart(2, '0')
  return (
    <div
      style={{
        position: 'fixed',
        bottom: '4.5rem',
        right: '3rem',
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: '0.85rem',
        color: 'rgba(201,168,76,0.4)',
        letterSpacing: '0.1em',
        zIndex: 100,
      }}
    >
      {num} / {tot}
    </div>
  )
}

export function NavArrows({ current, total, prev, next }) {
  const arrowStyle = (disabled) => ({
    position: 'fixed',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 100,
    background: 'rgba(201,168,76,0.1)',
    border: '1px solid rgba(201,168,76,0.25)',
    color: 'var(--gold)',
    width: '44px',
    height: '44px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s',
    opacity: disabled ? 0.3 : 1,
    fontSize: '1.1rem',
  })

  return (
    <>
      <button
        onClick={prev}
        style={{ ...arrowStyle(current === 0), left: '1.5rem' }}
        onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(201,168,76,0.2)'; e.currentTarget.style.borderColor = 'var(--gold)' }}
        onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(201,168,76,0.1)'; e.currentTarget.style.borderColor = 'rgba(201,168,76,0.25)' }}
      >
        ←
      </button>
      <button
        onClick={next}
        style={{ ...arrowStyle(current === total - 1), right: '1.5rem' }}
        onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(201,168,76,0.2)'; e.currentTarget.style.borderColor = 'var(--gold)' }}
        onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(201,168,76,0.1)'; e.currentTarget.style.borderColor = 'rgba(201,168,76,0.25)' }}
      >
        →
      </button>
    </>
  )
}
