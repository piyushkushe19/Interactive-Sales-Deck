import React from 'react'

const NAV_ITEMS = [
  'Overview',
  'Why This Property',
  'Retail',
  'Luxury',
  'Dining',
  'Entertainment',
  'Events',
]

export default function TopNav({ current, goTo }) {
  return (
    <nav
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 3rem',
        height: '64px',
        background: 'linear-gradient(to bottom, rgba(8,10,14,0.97) 0%, transparent 100%)',
        borderBottom: '1px solid rgba(201,168,76,0.1)',
      }}
    >
      <div
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: '1.1rem',
          fontWeight: 600,
          letterSpacing: '0.14em',
          color: 'var(--gold)',
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
        }}
      >
        American Dream
      </div>

      <ul style={{ display: 'flex', gap: 0, listStyle: 'none' }}>
        {NAV_ITEMS.map((label, i) => (
          <li key={i}>
            <button
              onClick={() => goTo(i)}
              style={{
                background: 'none',
                border: 'none',
                borderBottom: current === i ? '1px solid var(--gold)' : '1px solid transparent',
                color: current === i ? 'var(--gold)' : 'rgba(245,241,235,0.5)',
                fontFamily: "'Outfit', sans-serif",
                fontSize: '0.68rem',
                fontWeight: 500,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                padding: '0.5rem 0.85rem',
                cursor: 'pointer',
                transition: 'color 0.3s, border-color 0.3s',
              }}
              onMouseEnter={(e) => {
                if (current !== i) e.currentTarget.style.color = 'var(--gold)'
              }}
              onMouseLeave={(e) => {
                if (current !== i) e.currentTarget.style.color = 'rgba(245,241,235,0.5)'
              }}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
