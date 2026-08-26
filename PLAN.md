# PLAN.md — Somnium Atlas

## Concept

A fictional illustrated field guide to places encountered only in dreams. Presented
as a scholarly atlas with hand-drawn aesthetic meets typographic precision. Three
pages of content, dark atmospheric design, no framework, no build step.

The site leans into the tension between academic rigor (structured entries, formal
typography, numbered classifications) and the inherently irrational subject matter.
Every "location" is described with cartographic seriousness.

## Page structure

| File | Purpose |
|------|---------|
| `index.html` | Landing / home: hero image, project overview, featured dream territories |
| `atlas.html` | Full catalog of dream territories (6–8 entries with placeholder images) |
| `fieldnotes.html` | Research notes: phenomena, patterns, classification systems |
| `style.css` | Shared stylesheet |
| `script.js` | Minimal JS: parallax on hero, smooth nav transitions |

## Visual identity

- **Palette**: near-black navy (#0d0e1a) background, warm cream (#e8e4d9) text,
  muted purple (#8b7ca8) accents, warm gold (#c4a882) highlights
- **Typography**: "IM Fell English" (Google Fonts) for display headings — gives an
  old-atlas feel; "Source Sans 3" for body — legible, neutral
- **Motifs**: thin ruling lines, SVG ornamental dividers, subtle CSS grain texture,
  breathing/floating keyframe animations on hero

## Iterations

1. PLAN.md, JOURNAL.md skeleton → commit
2. style.css + shared layout shell → commit
3. index.html (home page) → commit
4. atlas.html (territory catalog) → commit
5. fieldnotes.html (research notes) → commit
6. script.js polish, cross-page consistency pass → commit
7. README.md + final JOURNAL.md update → commit + push

## Constraints tracked

- All image paths: `https://placehold.co/WxH` with generation prompts in `title`
- All asset paths relative (no root-relative `/` paths)
- No backend, no API keys, no secrets
- Works on `https://vbouchet31.github.io/claude-dream-website/` subpath
