import React from 'react'
import { useDeck } from './hooks/useDeck'
import TopNav from './components/TopNav'
import { ProgressDots, SlideNumber, NavArrows } from './components/DeckControls'
import HeroSlide from './components/slides/HeroSlide'
import WhySlide from './components/slides/WhySlide'
import RetailSlide from './components/slides/RetailSlide'
import LuxurySlide from './components/slides/LuxurySlide'
import DiningSlide from './components/slides/DiningSlide'
import EntertainmentSlide from './components/slides/EntertainmentSlide'
import EventsSlide from './components/slides/EventsSlide'

export default function App() {
  const { current, goTo, next, prev, total } = useDeck()

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden' }}>
      {/* Persistent chrome */}
      <TopNav current={current} goTo={goTo} />
      <NavArrows current={current} total={total} prev={prev} next={next} />
      <ProgressDots current={current} total={total} goTo={goTo} />
      <SlideNumber current={current} total={total} />

      {/* Slides track */}
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          transform: `translateX(-${current * 100}vw)`,
          transition: 'transform 0.8s cubic-bezier(0.77, 0, 0.175, 1)',
          willChange: 'transform',
        }}
      >
        <HeroSlide isActive={current === 0} goTo={goTo} />
        <WhySlide isActive={current === 1} />
        <RetailSlide isActive={current === 2} />
        <LuxurySlide isActive={current === 3} />
        <DiningSlide isActive={current === 4} />
        <EntertainmentSlide isActive={current === 5} />
        <EventsSlide isActive={current === 6} />
      </div>
    </div>
  )
}
