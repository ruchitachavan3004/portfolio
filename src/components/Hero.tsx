import { hero, person, resume } from '../data/portfolio'
import { BUTTON_SOLID } from '../styles'
import { RoleRotator } from './RoleRotator'

/**
 * The hero is deliberately still. The only thing that moves is the designation,
 * which cycles inside RoleRotator; everything else is painted once and left alone.
 */
export function Hero() {
  return (
    <section className="relative flex h-screen flex-col justify-end overflow-hidden px-5 pb-12 sm:px-8 md:justify-center md:px-10 md:pb-0">
      <div className="relative z-10 max-w-xl">
        {/* The page needs one real heading. The greeting is conversational, so it is a
            paragraph, and the name and role carry the heading for search and screen readers. */}
        <h1 className="sr-only">
          {person.name} — {person.role}, {person.location}
        </h1>

        <p
          className="text-white"
          style={{
            fontSize: 'clamp(22px, 4.6vw, 34px)',
            lineHeight: 1.2,
            fontWeight: 500,
            letterSpacing: '-0.02em',
          }}
        >
          {hero.greeting}
        </p>

        <p
          className="mt-2 text-white/75"
          style={{ fontSize: 'clamp(18px, 3.4vw, 26px)', lineHeight: 1.25 }}
        >
          I’m <RoleRotator roles={hero.roles} />
        </p>

        <p
          className="mt-6 max-w-lg text-white/60"
          style={{ fontSize: 'clamp(15px, 1.5vw, 18px)', lineHeight: 1.6 }}
        >
          {hero.summary}
        </p>

        {/* The navbar carries the sections and the social links, so the hero keeps the
            one action none of them duplicate. It appears once the PDF exists. */}
        {resume.available && (
          <div className="mt-8 flex flex-wrap gap-y-1">
            <a href={resume.href} download={resume.filename} className={`${BUTTON_SOLID} gap-2`}>
              Download CV
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden="true"
                className="shrink-0"
              >
                <path
                  d="M6 1.4v6.2m0 0L3.6 5.2M6 7.6l2.4-2.4M1.8 9.4v.4a.8.8 0 0 0 .8.8h6.8a.8.8 0 0 0 .8-.8v-.4"
                  stroke="currentColor"
                  strokeWidth="1.1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
