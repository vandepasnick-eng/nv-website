# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Start development server with hot reload
- `npm run build` — Production build
- `npm run start` — Start production server
- `npm run lint` — Run ESLint via Next.js

No test framework is configured.

## Architecture

This is a **Next.js 15 single-page marketing site** for NV Web Design (a NZ-based web design service targeting trades businesses). It uses the App Router with all source code under `src/app/`.

**Stack:** React 19, TypeScript 5.7 (strict), Tailwind CSS 4 (via PostCSS)

**Key files:**
- `src/app/layout.tsx` — Root layout with metadata and Inter font
- `src/app/page.tsx` — Entire site in one file: Header, Hero, Services, About, Contact, Footer (all defined as local components)
- `src/app/globals.css` — Tailwind import and custom theme colors

**The entire page is a client component** (`"use client"`) because Header and Contact use `useState` for mobile menu toggle and form submission state.

## Styling

Custom color tokens are defined in `globals.css` using Tailwind CSS 4's `@theme` directive:
- `navy-50` through `navy-900` — primary blue/navy palette
- `accent-400/500/600` — orange accent colors (amber/orange tones)

Use these via Tailwind classes like `text-navy-900`, `bg-accent-500`, etc.

## Path Aliases

`@/*` maps to `./src/*` (configured in tsconfig.json).
