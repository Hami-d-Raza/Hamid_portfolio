# Plan: Hamid Raza Portfolio

A clean, editorial, typographically strong personal portfolio. No gradients, no glow, no neon — off-white paper background, near-black text, single electric-blue accent.

## Notes on stack (small adjustments to your spec)

- The project is **TanStack Start** (not plain Vite + React Router). Routing is file-based in `src/routes/`. Functionally identical for your needs and gives proper SSR + per-page SEO.
- **Tailwind v4** is already configured via `src/styles.css` (no `tailwind.config.js`). Custom colors/fonts will be added there as theme tokens.
- **Framer Motion** is not installed yet — I will add it.
- I will **not** use shadcn/MUI/Chakra for the portfolio components — raw Tailwind only, as requested. (Existing shadcn files in the template are left untouched.)
- The uploaded `hamid_cv_new.pdf` will be copied to `public/hamid_cv.pdf` so the Download CV button serves the real file.

## Design tokens (added to `src/styles.css`)

- `--background: #F5F4F0`, `--foreground: #111111`, `--accent: #2A6BFF`, `--border: #E0E0E0`, `--muted: #6B6B6B`
- Fonts loaded via Google Fonts `<link>` in `__root.tsx` head: **Inter** (400/500/600) + **DM Serif Display** (400 + italic)
- Tailwind utilities: `font-sans` (Inter, default body), `font-serif` (DM Serif Display)
- Faint paper grain: SVG noise data-URI applied as a `body::before` overlay at ~4% opacity, fixed, pointer-events:none
- Smooth scroll: `html { scroll-behavior: smooth }`

## Route structure

Single landing route with anchor sections (matches the spec's `#work`, `#about`, `#skills`, `#contact` nav IDs and the "scroll between sections" requirement):

```
src/routes/index.tsx        → renders all sections in order
src/routes/__root.tsx       → font links, global head meta, paper-grain overlay
```

Per-section components (one file each):

```
src/components/portfolio/
  Navbar.tsx
  Hero.tsx
  Marquee.tsx
  Work.tsx
  About.tsx
  Skills.tsx
  Experience.tsx
  Achievements.tsx
  Contact.tsx
  Footer.tsx
  FadeUp.tsx          → small Framer Motion wrapper (whileInView fade+translate)
  TerminalBlock.tsx   → CSS-only blinking terminal cursor for hero right side
```

## Section-by-section build

1. **Navbar** — sticky top. `HMR` monogram (DM Serif 22px) left, text links right. On scroll past 20px, adds `backdrop-blur-md` + `border-b border-[#E0E0E0]`. Mobile: hamburger toggling a full-screen `fixed inset-0 bg-[#F5F4F0]` overlay with large serif links.

2. **Hero** — `min-h-screen` flex, left-aligned, vertically centered, `max-w-6xl` container. Lines exactly as specced. CTAs: filled `#111` button + ghost border button (links to `/hamid_cv.pdf`, `download` attr). Right column (≥lg) renders `TerminalBlock` — a small monospace box with `> hamid@portfolio:~$ _` and a CSS keyframe blinking caret. Bottom: `Marquee` strip — pure CSS `@keyframes` translateX loop, 40s linear infinite, duplicated content for seamless scroll.

3. **Work** (`id="work"`) — section label + heading, then a stacked list (no grid). Each row: `grid-cols-12` on desktop (name+year col-span-4, description col-span-5, tags+arrow col-span-3), thin bottom border. Hover: `group-hover:bg-[#111] group-hover:text-white` with `transition-colors duration-300`. All 5 projects from the spec.

4. **About** (`id="about"`) — two-column grid (`lg:grid-cols-[2fr_1fr]`). Left: serif heading + two paragraphs. Right: stat block — large serif numbers with small uppercase labels underneath, separated by thin top borders, no card.

5. **Skills** (`id="skills"`) — 3-column plain text list (`md:grid-cols-3`). Each category: small uppercase label + comma-separated items in body weight. Generous vertical spacing.

6. **Experience** — vertical line (`border-l border-[#E0E0E0]`) on the left with a small filled dot at each entry. Role title in serif, company in body, dates muted, bullet points below.

7. **Achievements** — simple `<ul>` with small leading icon, no cards, thin row dividers.

8. **Contact** (`id="contact"`) — huge serif heading, sub-text, then three big text-only links (email, LinkedIn, GitHub) each with a `→` that translates on hover and an underline that animates from 0 to full width using the accent blue.

9. **Footer** — left-aligned, muted, small.

## Animations

`FadeUp` wraps section content: `initial={{opacity:0, y:24}} whileInView={{opacity:1, y:0}} viewport={{once:true, margin:"-80px"}} transition={{duration:0.6, ease:"easeOut"}}`. Used on section intros only — no continuous animations, no parallax, no scroll-jacking.

## SEO / head

Title: `Muhammad Hamid Raza — Full-Stack & ML Developer`. Meta description, og:title, og:description, twitter card set in `index.tsx` route `head()`. Single H1 (the hero name).

## Files I'll create or modify

- `src/styles.css` — add color tokens, fonts, paper grain, smooth scroll
- `src/routes/__root.tsx` — add Google Fonts `<link>` tags
- `src/routes/index.tsx` — replace placeholder with portfolio composition + `head()` SEO
- `src/components/portfolio/*` — 11 new component files listed above
- `public/hamid_cv.pdf` — copied from your upload
- `package.json` — add `framer-motion` via `bun add`

## Verification

After implementation: read final files, confirm no placeholder remains, confirm CV file is in `public/`, and visually check the preview for the off-white background, serif headings, and hover-invert project rows.
