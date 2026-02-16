# Site Audit — Feb 2026

Brutal review of everything that makes the site look unprofessional, low-trust, or generic. Items marked [FIXED] have been addressed.

---

## Trust Killers

### 1. Zero social proof — entire site
No testimonials, no reviews, no client logos, no "X businesses served", no Google review stars, no case studies. The site asks people to hand over $1,200 (or commit to $4,296 over 24 months) with zero evidence anyone has done so before. This is the single biggest trust gap. A tradie wouldn't hire a subbie with no references — why would they hire a web designer with none?

### 2. [FIXED] No photo of Nick — About component
~~"Engineer turned web developer" from a faceless stranger.~~ Headshot added to About section with circle crop and border treatment.

### 3. No examples of work — entire site
You're selling web design and the site doesn't show a single website you've built. No screenshots, no before/afters, no "here's what a plumber's site looks like." The `screenshots/` folder exists with before/after images but they're not used anywhere on the site. A visitor has no idea what they'd actually get.

### 4. [FIXED] No real contact details — Footer, Contact
~~No phone number, no email address, no physical location (even city).~~ Phone (04 488 7496), email (hello@nicholasvandepas.com), and location (Wellington, New Zealand) added to footer.

### 5. [FIXED] No business registration or credentials — Footer
~~No NZBN, no mention of being a registered business.~~ NZBN (9429053448422) added to footer.

---

## Generic / Template Feel

### 6. [FIXED] Text-only logo — Header
~~Plain text logo.~~ SVG monogram added (navy rounded square with orange "NV" text) alongside "Web Design" wordmark.

### 7. Stock icon soup — About, Ownership, Services
Every visual element is a Heroicons SVG stroke icon. Location pin, dollar sign, lightning bolt, globe, document, shield, lock — this is the exact icon set every SaaS template uses. There's nothing visually distinct. The Ownership section is four generic icons that could be on literally any website.

### 8. Hero has no imagery — Hero
Just text on a gradient with invisible blur blobs (`bg-accent-400/5` — that's 5% opacity, essentially invisible). No hero image, no illustration, no screenshot of a real site, no photo of a tradie on a job. It reads like a Tailwind UI template with the placeholder text swapped.

### 9. Every section follows the same pattern — page.tsx
Centered heading -> subtext -> grid of cards. Repeat 10 times. Hero: centered text + 2 buttons. TrustBar: grid of stats. Services: grid of cards. Ownership: grid of cards. Comparison: grid/table. About: grid of cards. Contact: centered text + form. There's zero visual variety. It feels like a single Tailwind component copy-pasted with different content.

### 10. [FIXED] Decorative blobs do nothing — Hero
~~Blobs at 5% opacity were invisible.~~ Opacity increased to visible levels (accent-400/20, navy-200/40).

---

## Credibility & Copy Issues

### 11. [FIXED] "Most Popular" badge is dishonest — Services
~~"Most Popular" with no data to back it up.~~ Changed to "Recommended".

### 12. [FIXED] Value prop quote feels self-attributed — Services
~~In quotation marks but attributed to no one.~~ Quotation marks removed, presented as a plain statement.

### 13. TrustBar stats are filler — TrustBar
"100% NZ based" and "$0 hidden fees" aren't stats — they're baseline expectations. Real trust bars show: "X websites built", "X years in business", "X 5-star reviews." Your bar has two actual claims (5-7 days, 24hr response) and two padding items.

### 14. [FIXED] "How we compare" is self-serving — Comparison
~~Heading was biased and NV column was highlighted.~~ Heading changed to neutral "Your options". NV column now uses a subtle `bg-orange-50` tint instead of aggressive highlighting.

### 15. [FIXED] MockUpCTA section is redundant — MockUpCTA
~~Redundant standalone CTA section repeating the same message as the hero.~~ Section deleted entirely.

---

## Technical Issues That Affect Perception

### 16. [FIXED] No favicon — layout.tsx
~~Default Next.js icon.~~ Custom `icon.svg` added matching the logo monogram.

### 17. [FIXED] No Open Graph / social meta — layout.tsx
~~Generic link previews.~~ Open Graph and Twitter card metadata added.

### 18. [FIXED] No robots.txt or sitemap — missing files
~~No SEO fundamentals.~~ `robots.ts` and `sitemap.ts` added, auto-generating `/robots.txt` and `/sitemap.xml`.

### 19. [FIXED] Entire page is client-rendered — page.tsx
~~`"use client"` on the whole page.~~ Split into server component (`page.tsx`) with client components extracted (`Header.tsx`, `Contact.tsx`). Google now gets real HTML for all static sections.

### 20. [FIXED] No loading/transition states — Header mobile menu
~~Menu snaps open/closed.~~ CSS transitions added (max-height + opacity) for smooth animation.

---

## Missing Fundamentals

### 21. No privacy policy or terms — missing entirely
You're collecting names, emails, phone numbers, and trade information via a form. NZ Privacy Act 2020 requires you to have a privacy statement explaining what you do with this data. Its absence is a legal gap and a trust signal — legitimate businesses have one.

### 22. No spam protection on the contact form — route.ts, Contact
No honeypot field, no rate limiting, no CAPTCHA. The API route accepts unlimited POST requests. Once the site gets any traffic, it'll get hammered by bots. This isn't just a technical issue — if the form gets abused and responses stop working, you'll silently lose real leads.

### 23. No success tracking — entire site
No analytics, no conversion tracking, no way to know if the free mock-up CTA is working better than the old "Get a Free Quote." You're flying blind. You can't optimise what you can't measure.

---

## Priority Fixes (ranked by trust/professionalism impact)

1. **Add social proof** — even 2-3 testimonials with names and trades
2. **Show your work** — screenshots of real sites you've built
3. ~~Put your face on it~~ [FIXED]
4. ~~Add real contact info~~ [FIXED]
5. **Get a proper logo** — even a simple designed wordmark
