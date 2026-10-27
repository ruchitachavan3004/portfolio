# Mainframe®

A full-screen hero landing page for a creative agency. React 19, TypeScript, Vite and Tailwind CSS 4, and nothing else.

## Run it

```bash
npm install
npm run dev
```

Then open the URL Vite prints. `npm run build` type-checks and builds; `npm run lint` runs oxlint.

## What is on the page

| Piece | File |
| --- | --- |
| Mouse-scrubbed background clip | `src/components/BackgroundVideo.tsx` |
| Fixed bar, desktop links, mobile sheet | `src/components/Navbar.tsx` |
| Blurred label, typed greeting, pill buttons | `src/components/Hero.tsx` |
| The typing effect | `src/hooks/useTypewriter.ts` |
| Font variables and the caret keyframes | `src/index.css` |

Layers, back to front: the video (`z-0`), the hero (`z-1`), the mobile sheet (`z-9`) and the bar (`z-10`), so the close button always sits above the sheet it closes.

## The background clip

It never plays on its own. Moving the mouse horizontally scrubs it in both directions: the distance moved, as a fraction of the window width, is multiplied by `SENSITIVITY` (0.8) and the clip's duration, so one full sweep of the window covers about 80% of the clip. The time is clamped to the clip, and only one seek is ever in flight — when a seek finishes, it chases the target again if the hand has moved on. That is what keeps fast movement from flooding the decoder.

There is no touch equivalent, so on a phone or tablet the clip holds on its first frame.

## Before this goes live

- **Fonts.** Helvetica Now Display is a commercial Monotype typeface, and the two `<link>` tags in `index.html` load it from a third-party mirror rather than from a licence you hold. Buy a licence and self-host, or swap the two variables in `src/index.css` for a face you can use.
- **The clip** is an external CloudFront URL that you do not control and that may stop resolving. Download it and serve it from `public/` instead.
- **Navigation links** (Labs, Studio, Openings, Shop) are `href="#"` placeholders in `src/components/Navbar.tsx`. The four white pills are buttons with no action yet.
- **The email address** `hello@mainframe.co` appears in both `Navbar.tsx` and `Hero.tsx`.

## Choices worth knowing

- The typed greeting appears in full, immediately, for anyone who asks for reduced motion, because text arriving letter by letter is hard for some people to read.
- The mobile sheet is `inert` while closed, so its links cannot be reached by keyboard behind the page, and Escape closes it.
- Copying the address announces itself to screen readers through a visually hidden live region. If the browser refuses clipboard access, nothing breaks; the address is on screen to copy by hand.
