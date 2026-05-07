import { useState, useEffect, useCallback, useRef } from 'react'

const TOTAL_SLIDES = 7
const TRANSITION_DURATION = 820

export function useDeck() {
  const [current, setCurrent] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const wheelDeltaRef = useRef(0)
  const wheelTimerRef = useRef(null)
  const touchStartXRef = useRef(0)

  const goTo = useCallback((index) => {
    if (index < 0 || index >= TOTAL_SLIDES || isAnimating) return
    setCurrent(index)
    setIsAnimating(true)
    setTimeout(() => setIsAnimating(false), TRANSITION_DURATION)
  }, [isAnimating])

  const next = useCallback(() => goTo(current + 1), [current, goTo])
  const prev = useCallback(() => goTo(current - 1), [current, goTo])

  // Keyboard
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next()
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') prev()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [next, prev])

  // Mouse wheel
  useEffect(() => {
    const handler = (e) => {
      // Allow horizontal scroll inside the retail card track
      if (e.target.closest('#retail-cards-track')) return
      e.preventDefault()
      wheelDeltaRef.current += e.deltaY
      if (wheelTimerRef.current) clearTimeout(wheelTimerRef.current)
      wheelTimerRef.current = setTimeout(() => {
        if (wheelDeltaRef.current > 40) next()
        else if (wheelDeltaRef.current < -40) prev()
        wheelDeltaRef.current = 0
      }, 80)
    }
    window.addEventListener('wheel', handler, { passive: false })
    return () => window.removeEventListener('wheel', handler)
  }, [next, prev])

  // Touch swipe
  useEffect(() => {
    const onStart = (e) => { touchStartXRef.current = e.touches[0].clientX }
    const onEnd = (e) => {
      const dx = touchStartXRef.current - e.changedTouches[0].clientX
      if (Math.abs(dx) > 60) dx > 0 ? next() : prev()
    }
    window.addEventListener('touchstart', onStart)
    window.addEventListener('touchend', onEnd)
    return () => {
      window.removeEventListener('touchstart', onStart)
      window.removeEventListener('touchend', onEnd)
    }
  }, [next, prev])

  return { current, goTo, next, prev, total: TOTAL_SLIDES }
}
