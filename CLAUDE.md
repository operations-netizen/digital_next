# Digital Next — Project Guide

Website for **Digital Next**, a **technology holding company** that builds, acquires,
invests in, and scales internet businesses (six companies today). The site must read as
a premium, editorial, billion-dollar corporate brand — inspiration from Eternal, Stripe,
Linear, Vercel, Apple, OpenAI, Tiny Capital, Alphabet — **not** an agency, template, or
startup landing page.

> **v3 (current) — rebuilt from scratch on Next.js + TypeScript, "editorial holding co"
> design system below. Supersedes the earlier Vite/React versions.**

## Tech stack
- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS 3.4**
- **Framer Motion 11**
- Fonts via `next/font/google`
- No backend; forms stubbed (`onSubmit` prevents default).

Note: `next@14.2.5` carries npm-audit advisories; pin kept stable intentionally. Don't
`audit fix --force` (breaking major bump) without discussing.

## Approved design system (locked, v3)

### Palette (Tailwind tokens — `tailwind.config.ts`)
| Token | Hex | Use |
|---|---|---|
| `bg` | `#FFFFFF` | Page background |
| `ink` | `#111111` | Primary text + dark UI on light |
| `muted` | `#666666` | Secondary text |
| `line` | `#EAEAEA` | Borders / dividers |
| `accent` | `#4F46FF` | THE accent (indigo) — used with restraint: one italic word per headline, active states, hovers, stat suffixes, orbit center ring |
| `dark` | `#0F1118` | Dark sections (Philosophy, Footer) |

No colorful gradients, no illustrations, no random color.

### Typography — 3 roles (never one font for everything)
- **Display / headings:** **Fraunces** (variable serif, light weight, `tracking-tightest`). Highlighted phrases are `<em>` italic in `accent`.
- **Body / UI:** **Inter**.
- **Labels / eyebrows / data:** **IBM Plex Mono**, 11px uppercase, `tracking-meta` (0.2em).
- All wired through CSS variables (`--font-serif/sans/mono`) set by `next/font` in `app/layout.tsx`.
- Fluid sizes: `.text-hero`, `.text-statement`, `.text-figure` (clamp-based) in `globals.css`.

### Layout & spacing
12-col grids, `.shell` = max-width **1440px** with generous responsive gutters, `.section`
= 24/32/40 vertical rhythm (`py-24 sm:py-32 lg:py-40`). 8px base. Lots of breathing room.

### Motion (Framer Motion, subtle/luxury)
- `Reveal` — scroll fade-up (workhorse).
- `TextReveal` — line-mask rise for headlines (each line clipped, staggered).
- `CountUp` — animated counters (easeOutExpo, in-view triggered).
- Nav shrinks + turns from transparent → white-blur on scroll.
- Ecosystem orbit: slow CSS rotation, nodes counter-rotate to stay upright.
- **Everything respects `prefers-reduced-motion`** (each component checks `useReducedMotion`; global CSS safety net in `globals.css`).

## Site structure (homepage = cinematic scroll)
01 Hero (+ ecosystem viz) · 02 Who We Are · 03 Portfolio ★ · 04 Philosophy (Found/Build/
Scale) · 05 Impact · 06 Ecosystem ★ · 07 Timeline · 08 Why Digital Next · 09 Leadership ·
10 Insights · 11 Contact.
Routes (nav): `/portfolio`, `/about`, `/culture`, `/careers`, `/insights` (+ homepage anchors).
★ = the two signature moments (expandable Portfolio rows; interactive Ecosystem orbit).

## Key components
```
app/
  layout.tsx        fonts + Nav + Footer + metadata
  page.tsx          homepage composition
  globals.css       tokens, .shell/.section/.eyebrow/.display, fluid text utils
  icon.svg          favicon
  {portfolio,about,culture,careers,insights}/page.tsx   route stubs
components/
  nav/Nav.tsx               sticky, shrink-on-scroll, mobile drawer
  layout/Footer.tsx         dark 4-col + newsletter (stub)
  layout/RoutePlaceholder.tsx
  ui/                       Eyebrow, Reveal, TextReveal, CountUp, Button
  home/                     Hero, EcosystemOrbit, WhoWeAre, Portfolio, PortfolioRow, Philosophy
lib/
  companies.ts     6 companies (single source of truth) + filter tags
  site.ts          nav, impactStats, philosophy, timeline, advantages, insights, brandOptions, CONTACT_EMAIL
```

## Commands
- `npm run dev` — dev server (http://localhost:3000)
- `npm run build` — production build
- `npm run start` — serve the build

## Build status (page-by-page, pausing for review)
- [x] Foundation: scaffold, design system, data, Nav, Footer
- [x] Hero, Who We Are, Portfolio, Philosophy  ← **top half; awaiting review**
- [ ] Impact (6 animated stats), Ecosystem (interactive orbit), Timeline
- [ ] Why Digital Next (advantages grid), Leadership, Insights
- [ ] Contact (split CTA + brand-selector form, client-side validation, stubbed submit)

## Quality bar
"Does this look like a billion-dollar holding company?" If any part reads as a template,
generic SaaS layout, or agency site — redo it. Typography over decoration, spacing over
clutter, motion used sparingly. Every component is custom; avoid generic Tailwind looks.
