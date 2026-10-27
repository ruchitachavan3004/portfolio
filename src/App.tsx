import { About } from './components/About'
import { Contact } from './components/Contact'
import { Education } from './components/Education'
import { Hero } from './components/Hero'
import { HeroBackdrop } from './components/HeroBackdrop'
import { Navbar } from './components/Navbar'
import { Skills } from './components/Skills'
import { Work } from './components/Work'

export default function App() {
  return (
    <div id="top">
      <HeroBackdrop />
      <Navbar />

      <main className="relative z-[1]">
        {/* The hero is transparent, so the clip behind it shows through. */}
        <Hero />

        {/* Everything below is solid, and covers the clip as it scrolls up. The sections
            alternate between the two band tones, so the page keeps a rhythm on the way down. */}
        <div>
          <div className="bg-[var(--band-a)]">
            <About />
          </div>
          <div className="bg-[var(--band-b)]">
            <Work />
          </div>
          <div className="bg-[var(--band-a)]">
            <Skills />
          </div>
          <div className="bg-[var(--band-b)]">
            <Education />
          </div>
          <div className="bg-[var(--band-a)]">
            <Contact />
          </div>
        </div>
      </main>
    </div>
  )
}
