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

### 5. No business registration or credentials — Footer
No NZBN, no mention of being a registered business, no industry memberships. The footer is generic copyright text. Compare to any established NZ service business — they show their credentials.

---

## Generic / Template Feel

### 6. Text-only logo — Header
`NV Web Design` in plain Inter font with a coloured span. This screams "I made this in 5 minutes." Every template site has this exact pattern. A proper logo (even a simple wordmark SVG) immediately separates you from DIY sites.

### 7. Stock icon soup — About, Ownership, Services
Every visual element is a Heroicons SVG stroke icon. Location pin, dollar sign, lightning bolt, globe, document, shield, lock — this is the exact icon set every SaaS template uses. There's nothing visually distinct. The Ownership section is four generic icons that could be on literally any website.

### 8. Hero has no imagery — Hero
Just text on a gradient with invisible blur blobs (`bg-accent-400/5` — that's 5% opacity, essentially invisible). No hero image, no illustration, no screenshot of a real site, no photo of a tradie on a job. It reads like a Tailwind UI template with the placeholder text swapped.

### 9. Every section follows the same pattern — page.tsx
Centered heading -> subtext -> grid of cards. Repeat 10 times. Hero: centered text + 2 buttons. TrustBar: grid of stats. Services: grid of cards. Ownership: grid of cards. Comparison: grid/table. About: grid of cards. Contact: centered text + form. There's zero visual variety. It feels like a single Tailwind component copy-pasted with different content.

### 10. Decorative blobs do nothing — Hero
```
bg-accent-400/5  -> 5% opacity orange on white = invisible
bg-navy-200/20   -> 20% opacity light blue on light blue = barely visible
```
These are ghost elements. They exist in the code but contribute nothing visually. Either make them visible or remove the dead weight.

---

## Credibility & Copy Issues

### 11. "Most Popular" badge is dishonest — Services
The site has no customers yet (or at least shows none). Labelling Option B as "Most Popular" when there's no data to back it up is a recognisable sales tactic that erodes trust with a sceptical audience. "Easy Start" or "Recommended" would be honest.

### 12. Value prop quote feels self-attributed — Services
> "One job you're losing to a competitor who shows up on Google first covers the entire cost."

This is in quotation marks but attributed to no one. It reads like you're quoting yourself. Either attribute it to a real client or remove the quote marks and present it as a statement.

### 13. TrustBar stats are filler — TrustBar
"100% NZ based" and "$0 hidden fees" aren't stats — they're baseline expectations. Real trust bars show: "X websites built", "X years in business", "X 5-star reviews." Your bar has two actual claims (5-7 days, 24hr response) and two padding items.

### 14. "How we compare" is self-serving — Comparison
Every comparison table where you write both sides is inherently suspect. The "Web Agencies" column says "$3,000-$8,000+" and "4-8 weeks" — are these real numbers or worst-case strawmen? Without a source, this looks like you're making up the competition's numbers. The highlighted NV column (`bg-accent-400/5`) makes the bias obvious.

### 15. MockUpCTA section is redundant — MockUpCTA
This section says "See your site before you pay a cent" — the same message as the hero, with the same CTA button, pointing to the same #contact anchor. It adds length without adding information. Three "Get Your Free Mock-Up" CTAs (hero, this section, contact) before the user even reaches the form feels pushy.

---

## Technical Issues That Affect Perception

### 16. No favicon — layout.tsx
The browser tab shows the default Next.js icon or nothing. This is immediately noticeable and screams unfinished.

### 17. No Open Graph / social meta — layout.tsx
Share this link on Facebook, LinkedIn, or in a text message and it'll show a generic preview with no image. For a web design business, the link preview IS a demonstration of your skill.

### 18. No `<link rel="canonical">`, no robots.txt, no sitemap — missing files
The site claims to offer "Basic SEO setup (Google-ready)" but doesn't have basic SEO set up on its own site. If a prospective client checks view-source (unlikely but possible) or if another web person vets you, this is embarrassing.

### 19. Entire page is client-rendered — page.tsx (line 1)
`"use client"` on the whole page means Google gets an empty HTML shell on first crawl. For a site that promises "Built to rank on Google" / "Basic SEO setup (Google-ready)", shipping a client-rendered SPA is contradictory. The Header and Contact need state, but the other 8 sections don't.

### 20. No loading/transition states — Header mobile menu
The mobile menu snaps open/closed with a boolean toggle. No animation, no slide, no fade. It feels janky compared to any modern mobile nav. Small detail but tradies are used to polished apps on their phones.

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
