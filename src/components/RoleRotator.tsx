import { useEffect, useState } from 'react'

/** How long each role is held before the next slides up. */
const HOLD = 2600

/** Line height of one role, in em. The mask is exactly this tall. */
const LINE = 1.25

/**
 * Cycles through the roles, sliding vertically inside a mask so only one shows at a
 * time. The whole thing is decorative repetition of the page's heading, so it is
 * hidden from screen readers; reduced motion gets the first role, held still.
 */
function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

export function RoleRotator({ roles }: { roles: string[] }) {
  const [index, setIndex] = useState(0)
  const [reduced] = useState(prefersReducedMotion)

  useEffect(() => {
    if (reduced || roles.length < 2) return
    const timer = setInterval(() => setIndex((value) => (value + 1) % roles.length), HOLD)
    return () => clearInterval(timer)
  }, [roles.length, reduced])

  return (
    <span
      className="inline-block overflow-hidden align-bottom"
      style={{ height: `${LINE}em` }}
      aria-hidden="true"
    >
      <span
        className="flex flex-col"
        style={{
          transform: `translateY(-${index * LINE}em)`,
          transition: reduced ? 'none' : 'transform 620ms cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      >
        {roles.map((role) => (
          <span key={role} className="whitespace-nowrap" style={{ height: `${LINE}em` }}>
            {role}
          </span>
        ))}
      </span>
    </span>
  )
}
