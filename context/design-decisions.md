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

**Server/client component split:** The main page (`page.tsx`) is a server component. Only `Header.tsx` and `Contact.tsx` are client components (they need `useState`). This means Google gets real HTML for all static sections (Hero, TrustBar, Services, Ownership, Comparison, About, Footer) on first crawl — better for SEO. JS bundle reduced from ~12 kB to ~8 kB.

**Component structure:** Static sections (Hero, TrustBar, Services, Ownership, Comparison, About, Footer) are defined as local functions in `page.tsx`. Interactive components live in `src/app/components/`:
- `Header.tsx` — mobile menu toggle state
- `Contact.tsx` — form submission state (submitted, sending, error)

**API route for contact form:** `src/app/api/contact/route.ts` handles form submissions server-side via Resend, keeping the API key secure. Includes HTML escaping to prevent injection.

**Verified sender domain:** Emails send from `hello@nicholasvandepas.com` — a verified domain with Resend, not the recipient's email.

**SEO files:** Favicon via `icon.svg` (App Router convention), `robots.ts` and `sitemap.ts` auto-generate `/robots.txt` and `/sitemap.xml`. LocalBusiness JSON-LD schema in `layout.tsx` for Google rich results.

## Visual Design

**Color palette:**
- Navy (`#102a43` to `#f0f4f8`) — primary palette, professional and trustworthy
- Accent orange/amber (`#f59e0b` / `#d97706` / `#b45309`) — CTAs and highlights, energetic and attention-grabbing

**Typography:** Inter (Google Fonts) — clean, modern, highly legible

**Logo:** SVG monogram (navy rounded square with orange "NV" text) + "Web Design" wordmark. Used in header and footer.

**Layout:** Max-width 6xl (`1152px`), centered content. Cards use rounded-2xl corners, subtle shadows, and border treatments. The design is clean and modern without being flashy — appropriate for the target market.

**Responsive:** Mobile-first with breakpoints at `sm`, `md`, `lg`. Mobile nav uses animated hamburger menu (CSS max-height + opacity transitions).

## Security

- HTML escaping on all user-submitted contact form fields
- Server-side email validation
- API key stored in environment variable (`RESEND_API_KEY`)
- Contact email stored in environment variable (`CONTACT_EMAIL`)
- Security headers configured (CSP, X-Frame-Options, HSTS, etc.)
