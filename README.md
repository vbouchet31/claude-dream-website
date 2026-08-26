# Somnium Atlas

A fictional illustrated field guide to places encountered only in dreams. Presented
as a scholarly atlas with careful typography and a dark, atmospheric design.

**Live site:** https://vbouchet31.github.io/claude-dream-website/

## What was built

Three pages of content, fully static HTML/CSS/JS with no build step:

- **Home** (`index.html`): Landing page with hero, editorial introduction, and a
  three-card preview of featured territories.
- **Atlas** (`atlas.html`): Full catalog of six documented dream territories, each
  with a placeholder image, coordinate notation, written description, and a tag
  classification. Entries alternate left/right layout.
- **Field Notes** (`fieldnotes.html`): Research methodology, the classification
  system, recurring phenomena documented across multiple territories, navigation
  guidance, and a glossary of terms.

## Why this

The repository name "claude-dream-website" pointed clearly toward a dream-themed site.
The interesting constraint was to treat something fundamentally irrational (dream
geography) with the visual and rhetorical apparatus of serious scholarship — a tension
that drives both the content and the design.

The dark typographic aesthetic (deep navy, warm cream, gold accents) fits the subject
without resorting to obvious clichés. The serif/sans pairing ("IM Fell English" for
display, "Source Sans 3" for body) borrows from old-atlas conventions without
reproducing them literally.

## Images

All images are placeholders from placehold.co. Each `<img>` tag carries a `title`
attribute with a generation prompt (subject, style, exact dimensions) suitable for
pasting into Gemini Nano Banana. The full list of placeholders is in `JOURNAL.md`.

## Technical notes

- No framework, no build step, no dependencies beyond Google Fonts (CDN)
- All asset paths are relative — the site works correctly from the
  `/claude-dream-website/` GitHub Pages subpath
- Minimal JavaScript: nav scroll state, hero parallax, scroll-driven fade-in for
  territory entries, ToC active-section highlighting
- CSS custom properties for the full design system — palette, typography, spacing
