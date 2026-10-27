import { about, companies, person } from '../data/portfolio'
import { EYEBROW, SECTION } from '../styles'

export function About() {
  const current = companies[0]

  return (
    <section id="about" className={SECTION} aria-labelledby="about-title">
      <div className="mx-auto max-w-6xl">
        <div className="md:grid md:grid-cols-12 md:gap-8">
          {/* Left: the heading, then the facts that stop the column falling empty. */}
          <div className="md:col-span-5">
            <p className={EYEBROW}>About</p>
            <h2
              id="about-title"
              className="mt-5 text-white"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(26px, 3.3vw, 40px)',
                lineHeight: 1.08,
                letterSpacing: '-0.025em',
              }}
            >
              {about.lead}
            </h2>

            <dl className="mt-10 flex flex-col gap-4 border-t border-white/12 pt-8">
              <div>
                <dt className="text-[12px] uppercase tracking-[0.14em] text-white/35">Now</dt>
                <dd className="mt-1 text-[15px] text-white">
                  {person.role}
                  <span className="block text-white/55">{current.org}</span>
                </dd>
              </div>
              <div>
                <dt className="text-[12px] uppercase tracking-[0.14em] text-white/35">Based in</dt>
                <dd className="mt-1 text-[15px] text-white">{person.location}</dd>
              </div>
            </dl>
          </div>

          {/* Right: the prose, set large enough to hold its own beside the heading. */}
          <div className="mt-10 flex max-w-xl flex-col gap-6 md:col-span-6 md:col-start-7 md:mt-0">
            {about.paragraphs.map((paragraph, index) => {
              // The story runs in even grey; the closing line is the point, so it lifts.
              const isLast = index === about.paragraphs.length - 1
              return (
                <p
                  key={paragraph}
                  className={isLast ? 'text-white' : 'text-white/60'}
                  style={{
                    fontSize: isLast ? 'clamp(18px, 1.8vw, 21px)' : 'clamp(16px, 1.5vw, 18px)',
                    lineHeight: isLast ? 1.45 : 1.6,
                    letterSpacing: isLast ? '-0.005em' : '0',
                  }}
                >
                  {paragraph}
                </p>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
