import { skills } from '../data/portfolio'
import { EYEBROW, SECTION } from '../styles'

export function Skills() {
  return (
    <section id="skills" className={SECTION} aria-labelledby="skills-title">
      <div className="mx-auto max-w-6xl">
        <header className="mb-14">
          <p className={EYEBROW}>Skills</p>
          <h2
            id="skills-title"
            className="mt-4 max-w-xl text-white"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(30px, 5vw, 56px)',
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
            }}
          >
            Grouped by the layer of a system they serve.
          </h2>
        </header>

        <dl className="flex flex-col">
          {skills.map((row) => (
            <div
              key={row.group}
              className="border-t border-white/12 py-7 md:grid md:grid-cols-12 md:gap-8"
            >
              <dt
                className="text-white md:col-span-4"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(18px, 2.2vw, 24px)',
                  letterSpacing: '-0.02em',
                }}
              >
                {row.group}
              </dt>
              <dd className="mt-3 text-[15px] leading-relaxed text-white/65 sm:text-[17px] md:col-span-7 md:col-start-6 md:mt-0">
                {row.items.join(', ')}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
