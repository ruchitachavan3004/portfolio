/** The pill is the one repeated shape on the site, so its measurements live in one place. */
export const PILL =
  'inline-flex items-center justify-center whitespace-nowrap rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.35em] mx-[0.2em] mb-[0.4em] transition-colors duration-200'

export const PILL_FILLED = `${PILL} border border-black/10 bg-white text-black hover:bg-black hover:text-white`

export const PILL_OUTLINE = `${PILL} border border-white/70 bg-transparent text-white hover:bg-white hover:text-black`

/** The solid white call to action. Shared so the navbar and hero buttons cannot drift apart. */
export const BUTTON_SOLID =
  'inline-flex items-center justify-center whitespace-nowrap rounded-full bg-white px-5 py-2.5 text-[15px] text-black transition-colors duration-200 hover:bg-white/80'

/** A quieter chip, for listing a stack rather than inviting a click. */
export const CHIP =
  'inline-flex items-center rounded-full border border-white/20 px-3 py-[0.3em] text-[12px] sm:text-[13px] text-white/70'

export const SECTION = 'px-5 sm:px-8 md:px-10 py-24 sm:py-32 md:py-40'

/** The small capitalised label above each section. */
export const EYEBROW =
  'text-[14px] sm:text-[16px] font-medium uppercase tracking-[0.2em] text-white/60'
