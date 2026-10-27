import { person } from '../data/portfolio'
import { EYEBROW, SECTION } from '../styles'

/** Read once, when the module loads, rather than on every render. */
const YEAR = new Date().getFullYear()

const ELSEWHERE = [
  { label: 'GitHub', value: 'github.com/ruchitachavan3004', href: person.github },
  { label: 'LinkedIn', value: 'linkedin.com/in/ruchita-chavan-3004', href: person.linkedin },
]

export function Contact() {
  return (
    <section id="contact" className={SECTION} aria-labelledby="contact-title">
      <div className="mx-auto max-w-6xl">
        <p className={EYEBROW}>Contact</p>
        <h2
          id="contact-title"
          className="mt-4 max-w-2xl text-white"
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(30px, 5vw, 56px)',
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
          }}
        >
          Have an engineering problem in mind?
        </h2>

        <a
          href={`mailto:${person.email}`}
          className="mt-10 inline-block break-all text-white underline decoration-white/30 underline-offset-[6px] transition-colors hover:decoration-white"
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(22px, 4vw, 44px)',
            letterSpacing: '-0.025em',
          }}
        >
          {person.email}
        </a>

        <dl className="mt-16 grid gap-8 sm:grid-cols-3">
          {ELSEWHERE.map((item) => (
            <div key={item.label}>
              <dt className="text-[13px] text-white/40">{item.label}</dt>
              <dd className="mt-1">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[15px] text-white underline decoration-white/25 underline-offset-4 transition-colors hover:decoration-white"
                >
                  {item.value}
                </a>
              </dd>
            </div>
          ))}
          <div>
            <dt className="text-[13px] text-white/40">Based in</dt>
            <dd className="mt-1 text-[15px] text-white">{person.location}</dd>
          </div>
        </dl>

        <footer className="mt-28 flex flex-wrap items-baseline justify-between gap-4 border-t border-white/10 pt-8">
          <p className="text-[13px] text-white/40">
            © {YEAR} {person.fullName}
          </p>
          <a href="#top" className="text-[13px] text-white/60 transition-opacity hover:opacity-100">
            Back to top
          </a>
        </footer>
      </div>
    </section>
  )
}
