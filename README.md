# The Blue Lake, Igatpuri — Next.js + Tailwind

The resort site built into your Next.js 16 (App Router) + Tailwind CSS v4 + React 19 scaffold.
Same content, layout and behavior as the design — Header, Hero (with a working booking-bar:
date pickers, guest/room counter popover), feature strip, rooms & suites, experiences carousel,
gallery, and footer with a newsletter form.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build

```bash
npm run build
npm start
```

## Structure

- `src/app/layout.tsx` — root layout, page metadata, Google Fonts (Playfair Display + Inter)
- `src/app/page.tsx` — home page, assembles all sections
- `src/app/globals.css` — design tokens (colors, fonts, shadows) as a Tailwind v4 `@theme` block,
  plus small global resets
- `src/components/` — `Header`, `Hero`, `FeatureStrip`, `RoomsSuites`, `ExperiencesStrip`,
  `Gallery`, `Footer`, `PhotoPlaceholder`, `icons.tsx`
- `src/data/content.ts` — nav links, feature items, rooms, experience cards, gallery captions,
  contact details — edit this file to change site copy without touching components

## Notes

- All photos are rendered via `PhotoPlaceholder`, a labeled placeholder at the exact crop ratio
  used in the design. Pass a real `src` prop to any `PhotoPlaceholder` usage to swap in real
  photography — the caption disappears automatically once a `src` is provided.
- Colors/fonts live in `globals.css` under `@theme`, so classes like `bg-navy-deep`,
  `text-gold`, `font-display` are available anywhere in the project.
