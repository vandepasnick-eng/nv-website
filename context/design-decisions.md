# Design Decisions

## Stack

| Layer | Choice | Why |
|-------|--------|-----|
| Framework | Next.js 15 (App Router) | Modern React framework, good for SEO, easy Vercel deployment |
| React | v19 | Latest, used with `"use client"` for interactive components |
| Language | TypeScript 5.7 (strict) | Type safety, catches errors early |
| Styling | Tailwind CSS 4 (PostCSS) | Utility-first, fast iteration, no separate CSS files to manage |
| Email | Resend SDK | Transactional email for the contact form |
| Testing | Playwright (installed, not configured) | Available for future E2E testing |

## Architecture Decisions

**Single-page app in one file:** The entire site lives in `src/app/page.tsx` with all sections (Header, Hero, TrustBar, Services, About, Contact, Footer) defined as local components. This is intentional — it's a simple marketing site and splitting into many files would add complexity without benefit.

**Client component for the whole page:** The page uses `"use client"` because Header needs `useState` for mobile menu toggle and Contact needs it for form submission state. Rather than splitting client/server boundaries across multiple files for a simple page, the whole thing is client-rendered.

**API route for contact form:** `src/app/api/contact/route.ts` handles form submissions server-side via Resend, keeping the API key secure. Includes HTML escaping to prevent injection.

**Verified sender domain:** Emails send from `hello@nicholasvandepas.com` — a verified domain with Resend, not the recipient's email.

## Visual Design

**Color palette:**
- Navy (`#102a43` to `#f0f4f8`) — primary palette, professional and trustworthy
- Accent orange/amber (`#f59e0b` / `#d97706` / `#b45309`) — CTAs and highlights, energetic and attention-grabbing

**Typography:** Inter (Google Fonts) — clean, modern, highly legible

**Layout:** Max-width 6xl (`1152px`), centered content. Cards use rounded-2xl corners, subtle shadows, and border treatments. The design is clean and modern without being flashy — appropriate for the target market.

**Responsive:** Mobile-first with breakpoints at `sm`, `md`, `lg`. Mobile nav uses a hamburger menu with toggle state.

## Security

- HTML escaping on all user-submitted contact form fields
- Server-side email validation
- API key stored in environment variable (`RESEND_API_KEY`)
- Contact email stored in environment variable (`CONTACT_EMAIL`)
- Security headers configured (referenced in git history)
