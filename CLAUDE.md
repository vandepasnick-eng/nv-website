# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Context

Detailed context lives in the `context/` folder:
- `context/purpose.md` — what this site is for, who it serves, business model
- `context/design-decisions.md` — stack choices, architecture rationale, visual design
- `context/current-state.md` — what's built, what's live, what needs work
- `context/about-nick.md` — background on the site owner

Implementation plans are stored in `plans/`.

## Slash Commands

- `/prime` — Load all project context before starting work (read-only, no changes)
- `/update-site <description>` — Make a change to the live site with build verification
- `/create-plan <description>` — Write an implementation plan to `plans/` for review
- `/implement <plan name>` — Execute a plan from the `plans/` folder

## Dev Commands

- `npm run dev` — Start development server with hot reload
- `npm run build` — Production build
- `npm run start` — Start production server
- `npm run lint` — **Not configured** (prompts for interactive ESLint setup). The build step already includes type checking and linting.

**Testing:** Playwright is installed (`playwright` package) but `@playwright/test` must be installed separately to write tests. No test files or `playwright.config.ts` exist in the repo.

## Architecture

This is a **Next.js 15 single-page marketing site** for NV Web Design (a NZ-based web design service targeting trades businesses). It uses the App Router with all source code under `src/app/`.

**Stack:** React 19, TypeScript 5.7 (strict), Tailwind CSS 4 (via PostCSS), Resend (email)

**Key files:**
- `src/app/layout.tsx` — Root layout with metadata, Inter font, and LocalBusiness JSON-LD
- `src/app/page.tsx` — Server component with all static sections (Hero, TrustBar, Services, Ownership, Comparison, About, Footer)
- `src/app/components/Header.tsx` — Client component: fixed nav with logo, mobile menu
- `src/app/components/Contact.tsx` — Client component: contact form with submission state
- `src/app/globals.css` — Tailwind import and custom theme colors
- `src/app/api/contact/route.ts` — Contact form API route (Resend email)
- `src/app/icon.svg` — Favicon (SVG monogram)
- `src/app/robots.ts` — Auto-generates /robots.txt
- `src/app/sitemap.ts` — Auto-generates /sitemap.xml

**Server/client split:** `page.tsx` is a server component. Only `Header.tsx` and `Contact.tsx` are client components (they use `useState`).

## Styling

Custom color tokens are defined in `globals.css` using Tailwind CSS 4's `@theme` directive:
- `navy-50` through `navy-900` — primary blue/navy palette
- `accent-400/500/600` — orange accent colors (amber/orange tones)

Use these via Tailwind classes like `text-navy-900`, `bg-accent-500`, etc.

## Path Aliases

`@/*` maps to `./src/*` (configured in tsconfig.json).

## Working on This Site

This is a **live business site**. Be careful with changes:
- Always run `npm run build` after changes (lint is covered by the build step)
- Follow existing patterns — use the theme tokens, keep the single-file architecture
- Update `context/current-state.md` after significant changes

## Dev Server Notes

- Default port is 3000. Use `npm run dev -- --port <N>` to specify a different port.
- If a port is busy, try the next port up rather than killing processes.
- On Windows/MINGW, avoid `taskkill` to stop dev servers — it can leave dependent processes (e.g. Playwright) in a broken state. Use Ctrl+C or close the terminal instead.
