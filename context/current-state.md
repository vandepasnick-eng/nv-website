# Current State

## What's Built

Full single-page marketing site with all core sections:
- **Header** — fixed nav with logo, Pricing/About links, "Free Mock-Up" CTA, mobile hamburger menu
- **Hero** — outcome-led headline ("Get found on Google. Get more calls."), free mock-up CTA, "See Pricing" secondary CTA
- **TrustBar** — 4 stats (5–7 days turnaround, 100% NZ, $0 hidden fees, 24hr response)
- **Services/Pricing** — two payment option cards (No Upfront $0+$179/mo highlighted as "Most Popular", Pay Upfront $1,200+$129/mo as "Best Value"), shared inclusions list below
- **Ownership** — "Your site. Your name. Yours to keep." section with 4 icon cards (domain, content, no lock-in, always online) on navy background
- **MockUpCTA** — standalone CTA section: "See your site before you pay a cent"
- **Comparison** — desktop table + mobile cards comparing NV vs agencies vs DIY vs rental
- **About** — "Why work with me?" section with engineer background, 3 value props (NZ Based, Fair Pricing, Fast Turnaround), trades understanding
- **Contact** — functional form (name, email, phone, trade dropdown, message) with "Get My Free Mock-Up" submit button
- **Footer** — branding, quick links (Pricing, About, Free Mock-Up), contact info, copyright

Additional:
- Functional contact form with Resend email integration
- Responsive design across mobile, tablet, and desktop
- Custom Tailwind CSS 4 theme with navy + accent orange tokens
- Smooth scroll behavior
- Meta title/description updated to reflect $0 upfront and 5–7 day turnaround

## What's Live

The site is deployed (contact form uses a verified sender domain, security headers configured). Likely hosted on Vercel.

## Recent Changes (Feb 2026)

Implemented the business offer update per `plans/business-offer-update.md`:
- Two payment options replacing single pricing
- Outcome-led hero messaging
- Ownership section (key differentiator vs rental competitors)
- Free mock-up CTA throughout (header, hero, standalone section, contact form, footer)
- Competitor comparison table with mobile-responsive card layout
- Updated turnaround from 2 weeks to 5–7 days
- Value prop quote in pricing section
- Updated meta description

## What Could Use Work

- **No tests configured** — Playwright is installed but no test files exist
- **No favicon or social meta** — no Open Graph images, Twitter cards, or favicon beyond defaults
- **No analytics** — no tracking to measure if the site is converting visitors
- **SEO** — has title/description, but no structured data (LocalBusiness schema), no sitemap, no robots.txt
- **No portfolio/examples section** — the site sells web design but doesn't show any work
- **Single page only** — no blog, case studies, or additional landing pages for specific trades
- **No cookie/privacy policy** — may be needed depending on analytics or NZ privacy requirements
- **Form could be enhanced** — no honeypot spam protection, no rate limiting on the API route
- **Accessibility** — no skip-to-content link, aria-labels are minimal, no focus management after form submission
- **Performance** — entire page is client-rendered (`"use client"`); could benefit from server components for static sections
- **Lint config** — `npm run lint` needs ESLint configured (Next.js 15 deprecation of built-in lint setup)
