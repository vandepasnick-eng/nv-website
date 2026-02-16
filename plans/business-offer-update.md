# Plan: Business Offer Update

**Date:** 2026-02-16
**Source:** `website-update-brief.md` from Nick
**Status:** Ready for review

---

## Goal

Update the NV Web Design site to reflect the new two-option pricing model, stronger outcome-led messaging, ownership positioning, and a free mock-up CTA. The aim is to lower the barrier to entry and differentiate from rental competitors.

---

## Changes Overview

All changes are in `src/app/page.tsx` unless noted. The site stays single-page, same branding, same overall design language.

---

## Steps

### 1. Hero Section — New Messaging

**Current:** "Websites that work as hard as you do" + generic subtext
**New:**
- Headline: "Get found on Google. Get more calls. Site live in a week."
- Subtext: lead with outcomes, mention the free mock-up
- Primary CTA: **"Get Your Free Mock-Up"** (replaces "Get a Free Quote")
- Secondary CTA: **"See Pricing"** (stays the same, scrolls to #services)

### 2. TrustBar — Update Stats

**Current:** "2 weeks" / "100%" / "$0" / "24hr"
**New:**
- "5–7 days" → "Average turnaround" (faster, matches new offer)
- "100%" → "NZ based" (keep)
- "$0" → "Hidden fees" (keep)
- "24hr" → "Response time" (keep)

### 3. Services/Pricing Section — Two Payment Options

Replace the current two-card layout (website design + hosting) with two pricing cards showing the same product, different payment structures:

**Card layout:** Side-by-side, Option B (No Upfront) highlighted/default on the left or with a "Popular" badge.

**Option B — No Upfront ($0 to start):**
- $0 setup, $179/month, 24-month term
- Badge: "Most Popular" or "Easy Start"
- Highlighted card (accent border, like current hosting card)

**Option A — Pay Upfront (best value):**
- $1,200 setup, $129/month, 6-month minimum
- Badge: "Best Value"
- Standard card style

**Shared inclusions list below both cards** (not duplicated in each):
- Custom-designed website (3–5 pages)
- Mobile-friendly & fast-loading
- Contact / quote request form
- Basic SEO setup (Google-ready)
- Domain setup assistance
- Live within 5–7 business days
- Hosting, SSL & security updates
- Regular backups & uptime monitoring
- Minor content updates (up to 2/month)
- Email support — 24hr response

Each card gets a "Get Started" CTA button.

### 4. New Section — Ownership Callout

Add a new section **between Services and About** (or as the first block inside About).

- Headline: "Your site. Your name. Yours to keep."
- Copy points as bullet items or icon grid:
  - Domain registered in your name
  - All content, images, and files belong to you
  - Cancel anytime — we hand everything over, no tricks
  - Unlike rental sites, yours never goes offline
- This is a key differentiator — make it visually distinct (maybe navy background like TrustBar, or a bordered callout)

### 5. New Section — Free Mock-Up CTA

Add a prominent section **between Ownership and About** (or just before Contact).

- Headline: "See your site before you pay a cent"
- Subtext: "We'll design a free homepage mock-up for your business — no commitment, no pressure. Don't like it? No hard feelings."
- CTA button: "Get Your Free Mock-Up" → scrolls to #contact

### 6. Competitor Comparison Table (Optional — Recommended)

Add below the pricing cards or as part of the About section.

| | NV Web Design | Web Agencies | DIY (Wix) | Website Rental |
|---|---|---|---|---|
| Setup cost | $1,200 or $0 | $3,000–$8,000+ | $0 (you build it) | $0 |
| Monthly | $129–$179 | $300+ | $30–$40 + your time | $99 |
| You own it | Yes — always | Yes | Yes | No — gone if you cancel |
| Turnaround | 5–7 days | 4–8 weeks | Whenever you finish | 1–2 weeks |
| Ongoing support | Included | Extra cost | None | Basic |

### 7. Contact Form — Minor Update

- No structural changes to the form itself
- The heading could shift from "Let's get your business online" to something like "Ready for your free mock-up?" or keep it as-is with updated subtext mentioning the mock-up
- Form fields stay the same

### 8. Value Prop Line

Make sure this line appears somewhere prominent (hero subtext, above pricing, or as a standalone callout):
> "One job you're losing to a competitor who shows up on Google first covers the entire cost."

---

## What NOT to Change

Per the brief:
- Business name, branding, and overall site design
- Contact details, footer structure
- Colour palette, typography, general visual style
- Target audience (NZ tradies)

---

## Considerations

- **Mobile responsiveness:** The comparison table will need careful mobile treatment — could stack or scroll horizontally on small screens
- **Card highlight:** Option B (no upfront) should feel like the default/recommended choice visually, even though Option A is better value. This matches the brief's goal of lowering the barrier.
- **Section count:** Adding Ownership + Mock-Up CTA + Comparison = 3 new sections. The page shouldn't feel bloated — keep each section concise
- **SEO:** Update the meta description in `layout.tsx` to reflect the new offer (mention $0 upfront option, 5–7 days)

---

## File Changes

| File | Change |
|------|--------|
| `src/app/page.tsx` | Hero, TrustBar, Services, new Ownership section, new MockUp CTA, optional Comparison, Contact subtext |
| `src/app/layout.tsx` | Update meta description |
| `context/current-state.md` | Update after implementation |

---

*Ready for Nick's review before implementation.*
