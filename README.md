# NV Web Design

Marketing website for NV Web Design — a NZ-based freelance web design service targeting trades businesses (plumbers, electricians, landscapers, builders, etc.).

**Live site:** [nicholasvandepas.com](https://nicholasvandepas.com)

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **UI:** React 19, TypeScript 5.7 (strict)
- **Styling:** Tailwind CSS 4 (via PostCSS)
- **Email:** Resend SDK (contact form submissions)
- **Deployment:** Vercel

## Local Setup

```bash
npm install
npm run dev
```

The dev server starts at `http://localhost:3000`.

## Environment Variables

Create a `.env.local` file with the following:

| Variable | Description |
|----------|-------------|
| `RESEND_API_KEY` | API key from [resend.com](https://resend.com) for sending contact form emails |
| `CONTACT_EMAIL` | Email address where contact form submissions are delivered |

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint via Next.js |

## Project Structure

```
src/app/
├── layout.tsx              # Root layout, metadata, JSON-LD
├── page.tsx                # All page sections (server component)
├── globals.css             # Tailwind theme tokens
├── icon.svg                # Favicon
├── robots.ts               # Auto-generates /robots.txt
├── sitemap.ts              # Auto-generates /sitemap.xml
├── components/
│   ├── Header.tsx          # Nav + mobile menu (client component)
│   └── Contact.tsx         # Contact form (client component)
└── api/
    └── contact/
        └── route.ts        # Contact form API (Resend)
```

## Deployment

The site deploys automatically to Vercel on push to `master`. Environment variables (`RESEND_API_KEY`, `CONTACT_EMAIL`) must be configured in the Vercel project settings.

## Contact Form

Uses the [Resend](https://resend.com) SDK to send emails from `hello@nicholasvandepas.com` (verified sender domain). Submissions include HTML escaping for all user input. The form collects: name, email, phone (optional), trade, and a message.

## Known Issues / TODOs

- **No testimonials or social proof** — needs real customer quotes
- **No portfolio section** — needs screenshots of completed sites
- **No privacy policy page** — required under NZ Privacy Act 2020 when collecting personal data
- **No spam protection** — no honeypot field or rate limiting on the contact form API
- **No analytics** — no conversion tracking configured
- **About bio is vague** — "years as an engineer" should specify type and duration
- **No OG image** — Open Graph tags exist but no `og:image` is set
