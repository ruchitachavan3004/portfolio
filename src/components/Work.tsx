import { useState } from 'react'
import { companies, projects } from '../data/portfolio'
import { CHIP, EYEBROW, SECTION } from '../styles'
import { CompanyDetail } from './CompanyDetail'

export function Work() {
  const [openSlug, setOpenSlug] = useState<string | null>(null)
  const open = companies.find((company) => company.slug === openSlug)

  return (
    <section id="work" className={SECTION} aria-labelledby="work-title">
      <div className="mx-auto max-w-6xl">
        <header className="mb-16">
          <p className={EYEBROW}>Work</p>
          <h2
            id="work-title"
            className="mt-4 max-w-2xl text-white"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(30px, 5vw, 56px)',
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
            }}
          >
            Where I have worked.
          </h2>
        </header>

        {/* One row per employer. The detail lives behind a click, so the list stays short. */}
        <ul className="flex flex-col">
          {companies.map((company) => (
            <li key={company.slug}>
              <button
                type="button"
                onClick={() => setOpenSlug(company.slug)}
                aria-haspopup="dialog"
                className="group w-full border-t border-white/12 py-9 text-left transition-colors duration-200 hover:border-white/30 md:grid md:grid-cols-12 md:gap-8"
              >
                <p className="text-[13px] text-white/45 md:col-span-3">
                  {company.when}
                  {company.where && (
                    <>
                      <br />
                      <span className="text-white/30">{company.where}</span>
                    </>
                  )}
                </p>

                <div className="mt-3 md:col-span-8 md:col-start-5 md:mt-0">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3
                      className="text-white"
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: 'clamp(24px, 3.4vw, 38px)',
                        lineHeight: 1.05,
                        letterSpacing: '-0.025em',
                      }}
                    >
                      {company.org}
                    </h3>
                    <span
                      aria-hidden="true"
                      className="shrink-0 text-[13px] text-white/40 transition-colors duration-200 group-hover:text-white"
                    >
                      View →
                    </span>
                  </div>

                  <p className="mt-2 text-[15px] text-white/55">{company.role}</p>
                  <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-white/65">
                    {company.blurb}
                  </p>
                </div>
              </button>
            </li>
          ))}
        </ul>

        <header className="mt-28 mb-16">
          <p className={EYEBROW}>Selected projects</p>
          <h2
            className="mt-4 max-w-2xl text-white"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(30px, 5vw, 56px)',
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
            }}
          >
            Three agent systems, built and shipped.
          </h2>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-white/55 sm:text-[17px]">
            Two of these are professional work at Mindstix Software Labs, described at a high
            level, without internal data, screens or code. The third is my own.
          </p>
        </header>

        <div className="flex flex-col gap-20 sm:gap-28">
          {projects.map((project) => (
            <article
              key={project.title}
              className="border-t border-white/12 pt-10 md:grid md:grid-cols-12 md:gap-8"
            >
              <div className="md:col-span-5">
                <div className="flex items-baseline gap-4">
                  <span
                    className="text-white/35"
                    style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(20px, 3vw, 28px)' }}
                    aria-hidden="true"
                  >
                    {project.index}
                  </span>
                  <h3
                    className="text-white"
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: 'clamp(22px, 3.2vw, 34px)',
                      lineHeight: 1.1,
                      letterSpacing: '-0.025em',
                    }}
                  >
                    {project.title}
                  </h3>
                </div>

                <p className="mt-3 text-[12px] uppercase tracking-[0.14em] text-white/35">
                  {project.context}
                </p>

                <p className="mt-4 max-w-md text-[15px] leading-relaxed text-white/70 sm:text-[17px]">
                  {project.summary}
                </p>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li key={tech} className={CHIP}>
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              <ul className="mt-10 flex flex-col gap-5 md:col-span-6 md:col-start-7 md:mt-0">
                {project.points.map((point) => (
                  <li
                    key={point}
                    className="border-l border-white/15 pl-5 text-[14px] leading-relaxed text-white/60 sm:text-[15px]"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>

      {open && <CompanyDetail company={open} onClose={() => setOpenSlug(null)} />}
    </section>
  )
}
