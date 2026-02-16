# Current State

## What's Built

Full single-page marketing site with server/client component architecture:

- **Header** (`components/Header.tsx`, client) — fixed nav with SVG monogram logo + "Web Design" wordmark, Pricing/About links, "Free Mock-Up" CTA, animated mobile hamburger menu (CSS transition)
- **Hero** — outcome-led headline ("Get found on Google. Get more calls."), free mock-up CTA, "See Pricing" secondary CTA
- **TrustBar** — 4 stats (5–7 days turnaround, 100% NZ, $0 hidden fees, 24hr response)
- **Services/Pricing** — two payment option cards with matched visual weight (No Upfront $0+$179/mo as "Recommended", Pay Upfront $1,200+$129/mo as "Best Value" with navy border), shared inclusions list, "Get Your Free Mock-Up" CTAs, no button drop shadows
- **Ownership** — "Your site. Your name. Yours to keep." section with 4 white icon cards (orange icons, navy text) on navy background
- **Comparison** — desktop table (NV column highlighted with orange-50 tint) + mobile cards comparing NV vs agencies vs DIY vs rental
- **About** — "Why work with me?" section with Nick's headshot (circle crop), engineer background, 3 left-aligned icon+text rows (NZ Based, Fair Pricing, Fast Turnaround), trades understanding
- **Contact** (`components/Contact.tsx`, client) — functional form (name, email, phone, trade dropdown, message) with "Get My Free Mock-Up" submit button
- **Footer** — logo, quick links, contact info (phone, email, location), NZBN (9429053448422), copyright

## Technical Details

- **Architecture:** Server component page (`page.tsx`) with client components extracted for Header and Contact
- **SEO:** favicon (`icon.svg`), `robots.ts`, `sitemap.ts`, Open Graph + Twitter card meta, LocalBusiness JSON-LD structured data
- **Email:** Resend integration via `/api/contact` route, verified sender domain
- **Styling:** Tailwind CSS 4 custom theme (navy + accent orange tokens), smooth scroll
- **Responsive:** Mobile-first, animated mobile menu (max-h + opacity CSS transitions)

## What's Live

Deployed on Vercel at nicholasvandepas.com. Contact form uses verified sender domain, security headers configured.

## What Could Use Work

- **No social proof** — no testimonials, reviews, or client logos
- **No portfolio/examples** — no screenshots of sites built
- **No privacy policy** — collecting personal data without one (NZ Privacy Act 2020)
- **No analytics** — no tracking to measure conversions
- **About bio is vague** — "years as an engineer" needs specifics
- **No spam protection** — no honeypot, rate limiting, or CAPTCHA on contact form
- **No tests configured** — Playwright installed but no test files
- **TrustBar stats are unverifiable** — need real proof to back claims
- **Comparison table feels biased** — could acknowledge trade-offs more honestly
