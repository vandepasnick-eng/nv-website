import Image from "next/image";
import Header from "./components/Header";
import Contact from "./components/Contact";

function Hero() {
  return (
    <section className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 bg-gradient-to-br from-navy-50 via-white to-navy-50 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-navy-200/40 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-navy-900/5 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 bg-accent-500 rounded-full" />
            <span className="text-sm font-medium text-navy-700">
              NZ-based web design for trades
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-900 leading-tight">
            Get found on Google.{" "}
            <span className="text-accent-500">Get more calls.</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-navy-600 leading-relaxed max-w-2xl mx-auto">
            Professional websites for NZ trades businesses — live in a week,
            from $0 upfront. See a free mock-up of your site before you
            pay a cent.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg shadow-accent-500/25 hover:shadow-xl hover:shadow-accent-500/30"
            >
              Get Your Free Mock-Up
            </a>
            <a
              href="#services"
              className="border-2 border-navy-200 hover:border-navy-300 hover:bg-navy-50 text-navy-700 px-8 py-4 rounded-xl font-semibold text-lg transition-all"
            >
              See Pricing
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const stats = [
    { value: "5–7 days", label: "Average turnaround" },
    { value: "100%", label: "NZ based" },
    { value: "$0", label: "Hidden fees" },
    { value: "24hr", label: "Response time" },
  ];

  return (
    <section className="py-10 bg-navy-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white">
                {stat.value}
              </div>
              <div className="text-sm text-navy-300 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg
      className="w-5 h-5 text-accent-500 mt-0.5 shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}

function Services() {
  return (
    <section id="services" className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-navy-500 max-w-2xl mx-auto">
            Two ways to pay, same great service. Pick the option that suits
            your business.
          </p>
        </div>

        <p className="text-center text-navy-600 font-medium text-lg max-w-2xl mx-auto mb-12">
          One job you&apos;re losing to a competitor who shows up on
          Google first covers the entire cost.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Option B — No Upfront (highlighted as recommended) */}
          <div className="border-2 border-accent-400 rounded-2xl p-8 relative shadow-sm hover:shadow-lg transition-all bg-gradient-to-b from-accent-400/5 to-transparent">
            <div className="absolute -top-4 left-8 bg-accent-500 text-white text-sm font-semibold px-4 py-1 rounded-full">
              Recommended
            </div>
            <h3 className="text-xl font-bold text-navy-900">
              No Upfront
            </h3>
            <p className="text-sm text-navy-500 mt-1">
              Nothing to pay today — spread the cost
            </p>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="text-4xl font-bold text-navy-900">$0</span>
              <span className="text-navy-500">setup</span>
            </div>
            <div className="mt-2 flex items-baseline gap-1">
              <span className="text-2xl font-bold text-navy-900">$179</span>
              <span className="text-navy-500">/month</span>
            </div>
            <p className="text-sm text-navy-400 mt-1">
              24-month term
            </p>
            <a
              href="#contact"
              className="mt-6 block text-center bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-xl font-semibold transition-all shadow-lg shadow-accent-500/25 hover:shadow-xl hover:shadow-accent-500/30"
            >
              Get Your Free Mock-Up
            </a>
          </div>

          {/* Option A — Pay Upfront */}
          <div className="border-2 border-navy-100 rounded-2xl p-8 hover:border-accent-400 transition-all shadow-sm hover:shadow-lg relative">
            <div className="absolute -top-4 left-8 bg-navy-800 text-white text-sm font-semibold px-4 py-1 rounded-full">
              Best Value
            </div>
            <h3 className="text-xl font-bold text-navy-900">
              Pay Upfront
            </h3>
            <p className="text-sm text-navy-500 mt-1">
              Save $1,200 over two years
            </p>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="text-4xl font-bold text-navy-900">$1,200</span>
              <span className="text-navy-500">setup</span>
            </div>
            <div className="mt-2 flex items-baseline gap-1">
              <span className="text-2xl font-bold text-navy-900">$129</span>
              <span className="text-navy-500">/month</span>
            </div>
            <p className="text-sm text-navy-400 mt-1">
              6-month minimum
            </p>
            <a
              href="#contact"
              className="mt-6 block text-center border-2 border-navy-200 hover:border-accent-400 hover:bg-navy-50 text-navy-700 px-6 py-3 rounded-xl font-semibold transition-all"
            >
              Get Your Free Mock-Up
            </a>
          </div>
        </div>

        {/* Shared inclusions */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-navy-900 text-center mb-8">
            Everything included with both options
          </h3>
          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-4">
            <div>
              <h4 className="font-semibold text-navy-800 mb-3">The Build</h4>
              <ul className="space-y-3">
                {[
                  "Custom-designed website (3–5 pages)",
                  "Mobile-friendly & fast-loading",
                  "Contact / quote request form",
                  "Basic SEO setup (Google-ready)",
                  "Domain setup assistance",
                  "Live within 5–7 business days",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="text-navy-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-navy-800 mb-3">Ongoing</h4>
              <ul className="space-y-3">
                {[
                  "Website hosting",
                  "SSL certificate & security updates",
                  "Regular backups & uptime monitoring",
                  "Minor content updates (up to 2/month)",
                  "Email support — 24hr response",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="text-navy-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Ownership() {
  const items = [
    {
      d: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
      title: "Your domain",
      text: "Registered in your name",
    },
    {
      d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
      title: "Your content",
      text: "All files and images belong to you",
    },
    {
      d: "M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z",
      title: "No lock-in tricks",
      text: "Cancel and we hand everything over",
    },
    {
      d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      title: "Always online",
      text: "Your site never disappears",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-navy-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Your site. Your name.{" "}
            <span className="text-accent-400">Yours to keep.</span>
          </h2>
          <p className="mt-4 text-lg text-navy-300">
            Unlike website rental companies, you actually own what you pay for.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {items.map((item) => (
            <div
              key={item.title}
              className="text-center p-6 rounded-2xl border border-navy-700/50 bg-navy-800/50"
            >
              <div className="w-12 h-12 bg-accent-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-accent-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d={item.d}
                  />
                </svg>
              </div>
              <h4 className="font-bold text-white">{item.title}</h4>
              <p className="text-sm text-navy-300 mt-1">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MockUpCTA() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-navy-50 via-white to-navy-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900">
            See your site before you pay a cent
          </h2>
          <p className="mt-4 text-lg text-navy-600 leading-relaxed">
            I&apos;ll design a free homepage mock-up for your business — no
            commitment, no pressure. Don&apos;t like it? No hard feelings.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-block bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg shadow-accent-500/25 hover:shadow-xl hover:shadow-accent-500/30"
          >
            Get Your Free Mock-Up
          </a>
        </div>
      </div>
    </section>
  );
}

function Comparison() {
  const rows = [
    {
      label: "Setup cost",
      nv: "$1,200 or $0",
      agency: "$3,000–$8,000+",
      diy: "$0 (you build it)",
      rental: "$0",
    },
    {
      label: "Monthly",
      nv: "$129–$179",
      agency: "$300+",
      diy: "$30–$40 + your time",
      rental: "$99",
    },
    {
      label: "You own it",
      nv: "Yes — always",
      agency: "Yes",
      diy: "Yes",
      rental: "No — gone if you cancel",
    },
    {
      label: "Turnaround",
      nv: "5–7 days",
      agency: "4–8 weeks",
      diy: "Whenever you finish",
      rental: "1–2 weeks",
    },
    {
      label: "Ongoing support",
      nv: "Included",
      agency: "Extra cost",
      diy: "None",
      rental: "Basic",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900">
            Your options
          </h2>
          <p className="mt-4 text-lg text-navy-500 max-w-2xl mx-auto">
            There are a few ways to get a website. Here&apos;s how they compare.
          </p>
        </div>

        {/* Desktop table */}
        <div className="hidden md:block max-w-4xl mx-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b-2 border-navy-100">
                <th className="py-4 pr-4 text-sm font-medium text-navy-500" />
                <th className="py-4 px-4 text-sm font-bold text-accent-600">
                  NV Web Design
                </th>
                <th className="py-4 px-4 text-sm font-medium text-navy-500">
                  Web Agencies
                </th>
                <th className="py-4 px-4 text-sm font-medium text-navy-500">
                  DIY (Wix etc.)
                </th>
                <th className="py-4 px-4 text-sm font-medium text-navy-500">
                  Website Rental
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr
                  key={row.label}
                  className="border-b border-navy-100"
                >
                  <td className="py-4 pr-4 font-medium text-navy-700">
                    {row.label}
                  </td>
                  <td className="py-4 px-4 font-semibold text-navy-900">
                    {row.nv}
                  </td>
                  <td className="py-4 px-4 text-navy-600">{row.agency}</td>
                  <td className="py-4 px-4 text-navy-600">{row.diy}</td>
                  <td className="py-4 px-4 text-navy-600">{row.rental}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="md:hidden space-y-4">
          {rows.map((row) => (
            <div
              key={row.label}
              className="bg-navy-50 rounded-xl p-4 border border-navy-100"
            >
              <div className="text-sm font-medium text-navy-500 mb-2">
                {row.label}
              </div>
              <div className="font-semibold text-navy-900 mb-2">
                <span className="text-accent-600">NV: </span>
                {row.nv}
              </div>
              <div className="grid grid-cols-3 gap-2 text-sm text-navy-500">
                <div>
                  <span className="block text-xs text-navy-400">Agency</span>
                  {row.agency}
                </div>
                <div>
                  <span className="block text-xs text-navy-400">DIY</span>
                  {row.diy}
                </div>
                <div>
                  <span className="block text-xs text-navy-400">Rental</span>
                  {row.rental}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-navy-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 text-center">
            Why work with me?
          </h2>

          <div className="mt-12 space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-md border border-navy-100/50">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <Image
                  src="/nick-headshot.jpg"
                  alt="Nick van de Pas"
                  width={120}
                  height={120}
                  className="rounded-full shrink-0 border-4 border-navy-100"
                />
                <div>
                  <h3 className="text-xl font-bold text-navy-900 mb-4 text-center sm:text-left">
                    Engineer turned web developer
                  </h3>
                  <p className="text-navy-600 leading-relaxed">
                    I spent years as an engineer before moving into web development.
                    That means I approach every project with the same attention to
                    detail and problem-solving mindset — your website won&apos;t just
                    look good, it&apos;ll be built properly under the hood.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-8 shadow-md border border-navy-100/50 text-center">
                <div className="w-16 h-16 bg-accent-500/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <svg
                    className="w-8 h-8 text-accent-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-navy-900">NZ Based</h4>
                <p className="text-navy-500 text-sm mt-2 leading-relaxed">
                  Local support, no offshore runaround
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-md border border-navy-100/50 text-center">
                <div className="w-16 h-16 bg-accent-500/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <svg
                    className="w-8 h-8 text-accent-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-navy-900">Fair Pricing</h4>
                <p className="text-navy-500 text-sm mt-2 leading-relaxed">
                  Honest rates, no surprise invoices
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-md border border-navy-100/50 text-center">
                <div className="w-16 h-16 bg-accent-500/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <svg
                    className="w-8 h-8 text-accent-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-navy-900">Fast Turnaround</h4>
                <p className="text-navy-500 text-sm mt-2 leading-relaxed">
                  Most sites live within a week
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-md border border-navy-100/50">
              <h3 className="text-xl font-bold text-navy-900 mb-4">
                I understand trades businesses
              </h3>
              <p className="text-navy-600 leading-relaxed">
                You&apos;re busy running jobs, not sitting at a computer. I make
                the whole process easy — from an initial chat about what you
                need, to a finished site you&apos;re proud to show customers.
                And when you need something changed, you just get in touch and
                I&apos;ll sort it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-navy-900 text-navy-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <a href="#" className="flex items-center gap-2">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                <rect width="32" height="32" rx="8" fill="#102a43" />
                <text x="16" y="22" textAnchor="middle" fill="#d97706" fontSize="16" fontWeight="700" fontFamily="Inter, system-ui, sans-serif">NV</text>
              </svg>
              <span className="text-xl font-bold text-white">
                <span className="text-accent-500">Web Design</span>
              </span>
            </a>
            <p className="text-sm mt-3 leading-relaxed text-navy-400">
              Professional websites for NZ trades businesses. Get online with a
              site that works as hard as you do.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-3">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <a
                href="#services"
                className="text-sm text-navy-400 hover:text-white transition-colors"
              >
                Pricing
              </a>
              <a
                href="#about"
                className="text-sm text-navy-400 hover:text-white transition-colors"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-sm text-navy-400 hover:text-white transition-colors"
              >
                Free Mock-Up
              </a>
            </nav>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-3">Get in Touch</h4>
            <div className="flex flex-col gap-2 text-sm text-navy-400">
              <a
                href="tel:044887496"
                className="hover:text-white transition-colors"
              >
                04 488 7496
              </a>
              <a
                href="mailto:hello@nicholasvandepas.com"
                className="hover:text-white transition-colors"
              >
                hello@nicholasvandepas.com
              </a>
              <span>Based in Wellington, New Zealand</span>
              <a
                href="#contact"
                className="text-accent-400 hover:text-accent-500 transition-colors font-medium"
              >
                Request a mock-up &rarr;
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-navy-800 mt-10 pt-8 text-center">
          <p className="text-sm text-navy-500">
            &copy; {new Date().getFullYear()} NV Web Design. All rights
            reserved.
          </p>
          <p className="text-xs text-navy-600 mt-2">
            NZBN: 9429053448422
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <TrustBar />
      <Services />
      <Ownership />
      <MockUpCTA />
      <Comparison />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
