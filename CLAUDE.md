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
- `npm run lint` — Run ESLint via Next.js

No test framework is configured (Playwright is installed but no tests written).

## Architecture

This is a **Next.js 15 single-page marketing site** for NV Web Design (a NZ-based web design service targeting trades businesses). It uses the App Router with all source code under `src/app/`.

**Stack:** React 19, TypeScript 5.7 (strict), Tailwind CSS 4 (via PostCSS), Resend (email)

**Key files:**
- `src/app/layout.tsx` — Root layout with metadata and Inter font
- `src/app/page.tsx` — Entire site in one file: Header, Hero, TrustBar, Services, About, Contact, Footer (all local components)
- `src/app/globals.css` — Tailwind import and custom theme colors
- `src/app/api/contact/route.ts` — Contact form API route (Resend email)

**The entire page is a client component** (`"use client"`) because Header and Contact use `useState` for mobile menu toggle and form submission state.

## Styling

Custom color tokens are defined in `globals.css` using Tailwind CSS 4's `@theme` directive:
- `navy-50` through `navy-900` — primary blue/navy palette
- `accent-400/500/600` — orange accent colors (amber/orange tones)

Use these via Tailwind classes like `text-navy-900`, `bg-accent-500`, etc.

## Path Aliases

`@/*` maps to `./src/*` (configured in tsconfig.json).

## Working on This Site

This is a **live business site**. Be careful with changes:
- Always run `npm run build` and `npm run lint` after changes
- Follow existing patterns — use the theme tokens, keep the single-file architecture
- Update `context/current-state.md` after significant changes
