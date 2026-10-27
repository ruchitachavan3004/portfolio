import { useEffect, useState } from 'react'

function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

/**
 * Reveals `text` one character at a time.
 *
 * @param text       the full string to type out
 * @param speed      milliseconds between characters
 * @param startDelay milliseconds to wait before the first character
 *
 * Anyone who asks for reduced motion gets the finished sentence immediately,
 * since a sentence that arrives letter by letter is hard to read for some people.
 */
export function useTypewriter(text: string, speed = 38, startDelay = 600) {
  const [reduced] = useState(prefersReducedMotion)
  const [displayed, setDisplayed] = useState(() => (prefersReducedMotion() ? text : ''))
  const [done, setDone] = useState(reduced)

  useEffect(() => {
    if (reduced) return

    let interval: ReturnType<typeof setInterval> | undefined

    const timeout = setTimeout(() => {
      // Start from nothing here rather than on the way in, so a change of text
      // does not blank the line while the delay runs.
      setDisplayed('')
      setDone(false)

      let i = 0
      interval = setInterval(() => {
        i += 1
        setDisplayed(text.slice(0, i))
        if (i >= text.length) {
          clearInterval(interval)
          setDone(true)
        }
      }, speed)
    }, startDelay)

    return () => {
      clearTimeout(timeout)
      clearInterval(interval)
    }
  }, [text, speed, startDelay, reduced])

  return { displayed, done }
}
