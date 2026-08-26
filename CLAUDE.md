# CLAUDE.md — Experimental "carte blanche" site

## Context

This repository is public and starts empty. GitHub Pages is already enabled by the
repository owner, do not spend time configuring it. You (the Claude Code instance
working here) have full creative freedom to build the site you would want to build if
the decision were entirely yours. The owner will not review or approve anything along
the way. The end result must be publishable as is on GitHub Pages, with no human pass
afterward.

## Hard constraint: budget

The session has a budget of 10 USD of API usage. This is a hard limit enforced on the
account side, not a soft target. Expected behavior:

- Work in short steps and commit often, so that a stop at any point still leaves a
  working, publishable state.
- You are not required to use any single model for the whole session. Use your judgment:
  reach for a smaller, cheaper model for repetitive or low-complexity work (boilerplate
  markup, filler copy, small variations of an existing page, straightforward CSS
  tweaks), and reserve the more capable default model for architecture decisions, design
  direction, and anything that needs real reasoning. In practice this means: define
  subagents for repetitive subtasks and set a cheaper model in their configuration, then
  delegate to them instead of doing every single step yourself at full cost.
- Keep web lookups (WebSearch, WebFetch) to what is genuinely useful for a design or
  content decision. 5 requests for the whole session is a reasonable ceiling.
- Check your consumption with `/cost` at regular intervals (for example after each step
  marked in PLAN.md).
- If you pass 50% of the estimated budget without a publishable site, scale down your
  ambition rather than pushing through the original plan.
- A simple but finished, live site always beats an ambitious one that gets cut off
  halfway.

## Technical constraint: GitHub Pages

- The site must be 100% static (HTML/CSS/JS). A simple static site generator is fine if
  you find it useful, but it is not required.
- No backend, no database, no third-party API key ever committed.
- GitHub Pages is already configured, you do not need to touch repository settings for
  this. If you do need to interact with GitHub beyond git (checking Pages status,
  repository metadata, etc.), the `gh` CLI is available.
- The site must work without a build step for visitors (plain JS or CDN-loaded
  libraries), unless you also commit the compiled output (dist/).
- Live URL: https://vbouchet31.github.io/claude-dream-website/. This is a GitHub Pages
  project site, not a custom domain, so it is served from a subpath, not from the root
  of the domain. Use relative paths everywhere (for links, `<img>` sources, stylesheets,
  scripts), or paths relative to `/claude-dream-website/` if you use root-relative paths.
  Never hardcode a root-relative path like `/style.css` or `/assets/...`, it will resolve
  to the wrong location and silently break navigation and assets in production.

## Illustrations

If the site calls for an image anywhere, do not try to generate or fetch a real image.
Instead insert a placeholder image tag pointing to placehold.co, sized to the actual slot
the image will occupy, for example:

```html
<img
  src="https://placehold.co/1200x600"
  alt="Short description for accessibility"
  title="A weathered brass compass resting on an old nautical map, warm afternoon light, shallow depth of field. Image ratio 2:1, landscape, 1200x600px."
/>
```

Rules for the `title` attribute:

- It must contain the exact prompt the owner will later paste into Gemini (Nano Banana)
  to generate the real image, nothing else.
- The prompt must describe the content of the image AND explicitly state the target
  dimensions or aspect ratio (matching the placeholder's width/height), since the
  generation step will happen outside this session with no other context.
- Keep `alt` as a short, normal accessibility description, separate from the generation
  prompt in `title`.

List every placeholder you used, with its location in the site, in JOURNAL.md so the
owner can find and replace them easily.

## Creative freedom

You freely choose the theme, subject, visual style, structure, number of pages, and
tone. The site does not need to be "professional": it can be experimental, artistic,
playful, even absurd. The only content limit: nothing illegal, nothing that violates
GitHub's terms of service, no gratuitously offensive content.

## Expected workflow

1. Before coding, write `PLAN.md` at the repository root: the concept in 3-4 sentences,
   the intended page structure, a rough estimate of how many iterations you expect.
2. Commit after each meaningful step (base structure, each page, each style iteration),
   with short, clear commit messages.
3. Keep `JOURNAL.md` updated with a dated one- or two-line summary of each step, so the
   owner can follow the history without reading every commit.
4. At the end (budget exhausted or site considered done), write `README.md`: what you
   built, why, and the GitHub Pages URL of the result.

## Security

- Never commit a secret, API key, or token.
- Never run a destructive command (force push, deleting a branch other than the one
  created in this session, hard reset over unsaved work).
- Stay strictly within this repository, do not touch any other repository on the
  account.

## Ending the session

Stop cleanly as soon as you consider the site publishable and finished, or as soon as
you are approaching the budget limit, even if PLAN.md is not fully realized. If you stop
partway through, note in JOURNAL.md what is left open.
