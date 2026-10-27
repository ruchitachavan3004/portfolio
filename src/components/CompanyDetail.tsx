import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import type { companies } from '../data/portfolio'
import { CHIP, EYEBROW } from '../styles'

type Company = (typeof companies)[number]

/**
 * The full account of one employer, over the top of the page.
 *
 * Closes on Escape or on the backdrop, locks the page behind it so the background
 * cannot scroll, and takes focus on open so a keyboard lands inside rather than
 * somewhere behind the panel.
 */
export function CompanyDetail({ company, onClose }: { company: Company; onClose: () => void }) {
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    panelRef.current?.focus()

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [onClose])

  // Rendered into <body>: the Work section sits inside a stacking context that would
  // otherwise trap this panel underneath the fixed navbar.
  return createPortal(
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-[var(--band-a)] backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-label={`${company.org}, ${company.role}`}
    >
      <div
        ref={panelRef}
        tabIndex={-1}
        className="mx-auto min-h-full max-w-5xl px-5 py-10 outline-none sm:px-8 sm:py-14 md:px-10"
      >
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className={EYEBROW}>{company.when}</p>
            <h2
              className="mt-3 text-white"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(30px, 5.5vw, 60px)',
                lineHeight: 1.02,
                letterSpacing: '-0.035em',
              }}
            >
              {company.org}
            </h2>
            <p className="mt-3 text-[16px] text-white/60 sm:text-[18px]">
              {company.role}
              {company.where && ` · ${company.where}`}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 text-white transition-colors duration-200 hover:bg-white hover:text-black"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M3.5 3.5l9 9m0-9l-9 9"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <p className="mt-8 max-w-2xl text-[17px] leading-relaxed text-white/75 sm:text-[20px]">
          {company.intro}
        </p>

        <div className="mt-16 flex flex-col gap-14">
          {company.streams.map((stream) => (
            <section key={stream.title} className="border-t border-white/12 pt-8">
              <div className="md:grid md:grid-cols-12 md:gap-8">
                <div className="md:col-span-4">
                  <h3
                    className="text-white"
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: 'clamp(20px, 2.6vw, 28px)',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {stream.title}
                  </h3>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {stream.stack.split(', ').map((tech) => (
                      <li key={tech} className={CHIP}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>

                <ul className="mt-8 flex flex-col gap-5 md:col-span-7 md:col-start-6 md:mt-0">
                  {stream.points.map((point) => (
                    <li
                      key={point}
                      className="border-l border-white/15 pl-5 text-[14px] leading-relaxed text-white/65 sm:text-[16px]"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          ))}
        </div>

        <button
          type="button"
          onClick={onClose}
          className="mt-16 text-[15px] text-white/60 underline underline-offset-4 transition-colors hover:text-white"
        >
          Close
        </button>
      </div>
    </div>,
    document.body,
  )
}
