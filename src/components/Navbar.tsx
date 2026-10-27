import { useEffect, useState } from 'react'
import { nav, person } from '../data/portfolio'
import { BUTTON_SOLID } from '../styles'

export function Navbar() {
  const [open, setOpen] = useState(false)

  // Escape closes the sheet, the way every other overlay on the web does.
  useEffect(() => {
    if (!open) return
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [open])

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-10 flex items-center justify-between px-5 py-4 sm:px-8 sm:py-5">
        <a
          href="#top"
          className="text-[21px] tracking-tight text-white transition-opacity hover:opacity-70 sm:text-[26px]"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {person.name}
        </a>

        {/* One rounded bar holding the sections, each its own pill. */}
        <nav
          className="hidden items-center gap-1 rounded-full border border-white/15 bg-black/30 p-1.5 backdrop-blur-md lg:flex"
          aria-label="Primary"
        >
          {nav.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-full px-4 py-2 text-[15px] text-white/80 transition-colors duration-200 hover:bg-white hover:text-black"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={person.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile (opens in a new tab)"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition-colors duration-200 hover:bg-white hover:text-black"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.5c0-1.31-.02-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9V21H9z" />
            </svg>
          </a>

          <a
            href={person.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile (opens in a new tab)"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition-colors duration-200 hover:bg-white hover:text-black"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.86l-.01 2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2z" />
            </svg>
          </a>

          <a href="#contact" className={BUTTON_SOLID}>
            Get in touch
          </a>
        </div>

        {/* Three bars that fold into a cross. */}
        <button
          type="button"
          className="flex flex-col gap-[5px] lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span
            className={`h-[2px] w-6 bg-white transition-all duration-300 ${
              open ? 'translate-y-[7px] rotate-45' : ''
            }`}
          />
          <span
            className={`h-[2px] w-6 bg-white transition-all duration-300 ${open ? 'opacity-0' : ''}`}
          />
          <span
            className={`h-[2px] w-6 bg-white transition-all duration-300 ${
              open ? '-translate-y-[7px] -rotate-45' : ''
            }`}
          />
        </button>
      </header>

      {/* The sheet sits below the bar, so the button stays reachable above it. */}
      <div
        id="mobile-menu"
        inert={!open}
        className={`fixed inset-0 z-[9] flex flex-col justify-center gap-8 bg-black/90 px-8 backdrop-blur-md transition-opacity duration-300 lg:hidden ${
          open ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ pointerEvents: open ? 'auto' : 'none' }}
      >
        {nav.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-[32px] font-medium text-white"
            onClick={() => setOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <a
          href={`mailto:${person.email}`}
          className="text-[32px] font-medium text-white underline underline-offset-2"
          onClick={() => setOpen(false)}
        >
          Get in touch
        </a>
      </div>
    </>
  )
}
