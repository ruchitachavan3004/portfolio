import { useCallback, useEffect, useRef } from 'react'
import { heroMedia } from '../data/portfolio'

/** How far a full-width sweep of the mouse travels through a clip. */
const SENSITIVITY = 0.35

/** Close enough to the wanted frame that another seek would be wasted. */
const EPSILON = 0.001

/** How far a still drifts sideways between one edge of the window and the other. */
const PARALLAX_X = 64

/** How far it drifts vertically between the top of the window and the bottom. */
const PARALLAX_Y = 26

/** A degree of tilt, which reads as the figure leaning rather than sliding. */
const TILT = 0.7

/** How quickly a still catches up with the pointer. Lower is heavier. */
const EASE = 0.09

/** Below this the picture has arrived and the loop can stop. */
const SETTLED = 0.0005

/**
 * Whatever sits behind the hero. A clip is scrubbed frame by frame as the mouse moves
 * across; a still drifts instead, so the figure answers the pointer either way.
 * Neither runs while the pointer is still.
 */
export function HeroBackdrop() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)

  // Clip state.
  const targetTimeRef = useRef(0)
  const seekingRef = useRef(false)
  const prevXRef = useRef<number | null>(null)

  // Still state, as {x, y} in 0..1 across the window.
  const targetRef = useRef({ x: 0.5, y: 0.5 })
  const currentRef = useRef({ x: 0.5, y: 0.5 })
  const frameRef = useRef(0)

  // Ask for the frame at the target time, unless a seek is already in flight.
  const seek = useCallback(() => {
    const video = videoRef.current
    if (!video || seekingRef.current) return
    if (!Number.isFinite(video.duration)) return
    if (Math.abs(video.currentTime - targetTimeRef.current) < EPSILON) return

    seekingRef.current = true
    video.currentTime = targetTimeRef.current
  }, [])

  // One seek at a time. When it lands, chase the target if the hand has moved on.
  const handleSeeked = useCallback(() => {
    seekingRef.current = false
    const video = videoRef.current
    if (!video) return
    if (Math.abs(video.currentTime - targetTimeRef.current) > EPSILON) seek()
  }, [seek])

  useEffect(() => {
    if (heroMedia.kind !== 'video') return

    const handleMouseMove = (event: MouseEvent) => {
      const video = videoRef.current
      if (!video || !Number.isFinite(video.duration) || video.duration === 0) return

      // The first movement only establishes where the pointer started.
      if (prevXRef.current === null) {
        prevXRef.current = event.clientX
        return
      }

      const delta = event.clientX - prevXRef.current
      prevXRef.current = event.clientX

      const offset = (delta / window.innerWidth) * SENSITIVITY * video.duration
      targetTimeRef.current = Math.min(
        video.duration,
        Math.max(0, targetTimeRef.current + offset),
      )
      seek()
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [seek])

  useEffect(() => {
    if (heroMedia.kind !== 'image') return
    const image = imageRef.current
    if (!image) return

    const paint = (x: number, y: number) => {
      const driftX = (x - 0.5) * 2
      const driftY = (y - 0.5) * 2
      image.style.transform =
        `translate3d(${-driftX * PARALLAX_X}px, ${-driftY * PARALLAX_Y}px, 0)` +
        ` rotate(${driftX * TILT}deg) scale(1.12)`
    }

    paint(0.5, 0.5)

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const tick = () => {
      const target = targetRef.current
      const current = currentRef.current
      current.x += (target.x - current.x) * EASE
      current.y += (target.y - current.y) * EASE

      if (
        Math.abs(target.x - current.x) < SETTLED &&
        Math.abs(target.y - current.y) < SETTLED
      ) {
        current.x = target.x
        current.y = target.y
        paint(current.x, current.y)
        frameRef.current = 0
        return
      }

      paint(current.x, current.y)
      frameRef.current = requestAnimationFrame(tick)
    }

    const handleMouseMove = (event: MouseEvent) => {
      targetRef.current = {
        x: Math.min(1, Math.max(0, event.clientX / window.innerWidth)),
        y: Math.min(1, Math.max(0, event.clientY / window.innerHeight)),
      }
      if (!frameRef.current) frameRef.current = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
      frameRef.current = 0
    }
  }, [])

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-[var(--band-b)]" aria-hidden="true">
      {heroMedia.kind === 'video' ? (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: heroMedia.focus }}
          src={heroMedia.src}
          muted
          playsInline
          preload="auto"
          tabIndex={-1}
          onSeeked={handleSeeked}
        />
      ) : (
        <img
          ref={imageRef}
          className="absolute inset-0 h-full w-full object-cover will-change-transform"
          style={{ objectPosition: heroMedia.focus }}
          src={heroMedia.src}
          alt=""
          draggable={false}
        />
      )}

      {/* Beds the text column on the left and darkens the foot for narrow layouts. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, rgba(8,8,11,0.68) 0%, rgba(8,8,11,0.42) 26%, rgba(8,8,11,0.08) 52%, rgba(8,8,11,0) 72%),' +
            'linear-gradient(to top, rgba(8,8,11,0.80) 0%, rgba(8,8,11,0.28) 26%, rgba(8,8,11,0) 56%)',
        }}
      />
    </div>
  )
}
