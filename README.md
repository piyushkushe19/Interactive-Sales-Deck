# American Dream Mall — Interactive Sales Deck

A world-class, browser-based interactive sales deck for American Dream Mall (East Rutherford, NJ). Built for commercial teams to close retail leasing, sponsorship, and event booking deals.

## 🚀 Project Preview
Explore the live interactive sales deck here:
👉 https://interactive-sales-deck.vercel.app/


## Tech Stack

- **React 18** — component architecture
- **Vite 5** — lightning-fast dev server + build
- **Framer Motion 11** — staggered entrance animations per slide
- **Tailwind CSS 3** — utility classes + custom design tokens
- **Google Fonts** — Cormorant Garamond (display) + Outfit (body)



## AI Tools Used
- **Claude (Anthropic)** — architecture, component design, backend API
- **Midjourney / DALL·E** — hero visuals, section imagery, brand renders
- **GitHub Copilot** — code acceleration

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Navigation

| Input | Action |
|-------|--------|
| `→` / `↓` Arrow keys | Next slide |
| `←` / `↑` Arrow keys | Previous slide |
| Mouse wheel (down) | Next slide |
| Mouse wheel (up) | Previous slide |
| Touch swipe left | Next slide |
| Touch swipe right | Previous slide |
| Top nav buttons | Jump to slide |
| Progress dots | Jump to slide |
| Side arrow buttons | Prev / Next |

## Project Structure

```
american-dream-deck/
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── src/
    ├── main.jsx               # Entry point
    ├── App.jsx                # Root orchestrator — slide track + chrome
    ├── styles/
    │   └── globals.css        # Global CSS + Tailwind directives
    ├── hooks/
    │   └── useDeck.js         # All navigation logic (keyboard, wheel, touch)
    └── components/
        ├── TopNav.jsx         # Fixed top navigation bar
        ├── DeckControls.jsx   # ProgressDots, SlideNumber, NavArrows
        └── slides/
            ├── HeroSlide.jsx           # Slide 1: Hero + stat bar
            ├── WhySlide.jsx            # Slide 2: Why This Property + counters
            ├── RetailSlide.jsx         # Slide 3: Retail ecosystem cards
            ├── LuxurySlide.jsx         # Slide 4: Dark luxury + image grid
            ├── DiningSlide.jsx         # Slide 5: Culinary destination
            ├── EntertainmentSlide.jsx  # Slide 6: 6-attraction grid
            └── EventsSlide.jsx         # Slide 7: Events + CTA
```


## Design System

| Token | Value |
|-------|-------|
| `--gold` | `#C9A84C` |
| `--dark` | `#080A0E` |
| `--off-white` | `#F5F1EB` |
| `--muted` | `rgba(245,241,235,0.55)` |
| `--border` | `rgba(201,168,76,0.25)` |
| Display font | Cormorant Garamond |
| Body font | Outfit |

## Build for Production

```bash
npm run build
npm run preview
```

Output goes to `/dist` — deployable to Vercel, Netlify, or any static host.
