"use client";

import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-navy-100 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-xl font-bold text-navy-900">
            NV<span className="text-accent-500"> Web Design</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#services"
              className="text-navy-600 hover:text-navy-900 transition-colors"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-navy-600 hover:text-navy-900 transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="bg-accent-500 hover:bg-accent-600 text-white px-5 py-2 rounded-lg font-medium transition-all shadow-md hover:shadow-lg"
            >
              Get in Touch
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-navy-600"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile nav */}
        {menuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-3">
            <a
              href="#services"
              className="text-navy-600 hover:text-navy-900 transition-colors py-1"
              onClick={() => setMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#about"
              className="text-navy-600 hover:text-navy-900 transition-colors py-1"
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#contact"
              className="bg-accent-500 hover:bg-accent-600 text-white px-5 py-2 rounded-lg font-medium transition-colors text-center"
              onClick={() => setMenuOpen(false)}
            >
              Get in Touch
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 bg-gradient-to-br from-navy-50 via-white to-navy-50 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-navy-200/20 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-navy-900/5 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 bg-accent-500 rounded-full" />
            <span className="text-sm font-medium text-navy-700">
              NZ-based web design for trades
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-900 leading-tight">
            Websites that work as hard as{" "}
            <span className="text-accent-500">you do</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-navy-600 leading-relaxed max-w-2xl mx-auto">
            Affordable, professional websites for New Zealand trades businesses.
            I help plumbers, electricians, landscapers and builders get online —
            so your customers can find you.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg shadow-accent-500/25 hover:shadow-xl hover:shadow-accent-500/30"
            >
              Get a Free Quote
            </a>
            <a
              href="#services"
              className="border-2 border-navy-200 hover:border-navy-300 hover:bg-navy-50 text-navy-700 px-8 py-4 rounded-xl font-semibold text-lg transition-all"
            >
              View Pricing
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const stats = [
    { value: "2 weeks", label: "Average turnaround" },
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
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-navy-500 max-w-2xl mx-auto">
            No hidden fees. No complicated packages. Just a great website and
            reliable hosting at a price that makes sense for your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Website Design */}
          <div className="border-2 border-navy-100 rounded-2xl p-8 hover:border-accent-400 transition-all shadow-sm hover:shadow-lg relative group">
            <div className="absolute -top-4 left-8 bg-navy-800 text-white text-sm font-semibold px-4 py-1 rounded-full">
              One-time
            </div>
            <div className="w-14 h-14 bg-navy-50 rounded-xl flex items-center justify-center mb-6">
              <svg
                className="w-7 h-7 text-navy-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-navy-900">
              Custom Website Design
            </h3>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="text-4xl font-bold text-navy-900">$1,200</span>
              <span className="text-navy-500">one-off</span>
            </div>
            <ul className="mt-6 space-y-3">
              {[
                "Professional design tailored to your trade",
                "Mobile-friendly & fast-loading",
                "Built to rank on Google",
                "Contact forms & click-to-call",
                "Photos & content setup included",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-navy-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Hosting */}
          <div className="border-2 border-accent-400 rounded-2xl p-8 relative shadow-sm hover:shadow-lg transition-all bg-gradient-to-b from-accent-400/5 to-transparent">
            <div className="absolute -top-4 left-8 bg-accent-500 text-white text-sm font-semibold px-4 py-1 rounded-full">
              Ongoing
            </div>
            <div className="w-14 h-14 bg-navy-50 rounded-xl flex items-center justify-center mb-6">
              <svg
                className="w-7 h-7 text-navy-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-navy-900">
              Hosting & Maintenance
            </h3>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="text-4xl font-bold text-navy-900">$129</span>
              <span className="text-navy-500">/month</span>
            </div>
            <p className="text-sm text-navy-400 mt-1">
              6-month minimum commitment
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Fast, reliable NZ-based hosting",
                "SSL certificate & security updates",
                "Regular backups & uptime monitoring",
                "Content updates & minor changes",
                "Ongoing support via email or phone",
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
              <h3 className="text-xl font-bold text-navy-900 mb-4">
                Engineer turned web developer
              </h3>
              <p className="text-navy-600 leading-relaxed">
                I spent years as an engineer before moving into web development.
                That means I approach every project with the same attention to
                detail and problem-solving mindset — your website won&apos;t just
                look good, it&apos;ll be built properly under the hood.
              </p>
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
                  Most sites live within 2 weeks
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

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setError("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      trade: (form.elements.namedItem("trade") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const result = await res.json();
        throw new Error(result.error || "Something went wrong");
      }

      setSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to send. Please try again."
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900">
            Let&apos;s get your business online
          </h2>
          <p className="mt-4 text-lg text-navy-500">
            Drop me a message and I&apos;ll get back to you within 24 hours.
            No obligation, just a friendly chat about what you need.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          {submitted ? (
            <div className="text-center py-12 bg-navy-50 rounded-2xl border border-navy-100">
              <svg
                className="w-16 h-16 text-accent-500 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="text-xl font-bold text-navy-900">
                Thanks for reaching out!
              </h3>
              <p className="mt-2 text-navy-600">
                I&apos;ll be in touch within 24 hours.
              </p>
            </div>
          ) : (
            <div className="bg-navy-50 rounded-2xl p-6 sm:p-10 border border-navy-100">
              <form
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-navy-700 mb-1.5"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-navy-200 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 outline-none transition-all text-navy-900 bg-white"
                      placeholder="e.g. John Smith"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-navy-700 mb-1.5"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-navy-200 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 outline-none transition-all text-navy-900 bg-white"
                      placeholder="john@example.co.nz"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-navy-700 mb-1.5"
                    >
                      Phone{" "}
                      <span className="text-navy-400 font-normal">(optional)</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 rounded-lg border border-navy-200 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 outline-none transition-all text-navy-900 bg-white"
                      placeholder="021 123 4567"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="trade"
                      className="block text-sm font-medium text-navy-700 mb-1.5"
                    >
                      What trade are you in?
                    </label>
                    <select
                      id="trade"
                      name="trade"
                      className="w-full px-4 py-3 rounded-lg border border-navy-200 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 outline-none transition-all text-navy-900 bg-white"
                    >
                      <option value="">Select your trade</option>
                      <option value="plumbing">Plumbing</option>
                      <option value="electrical">Electrical</option>
                      <option value="landscaping">Landscaping</option>
                      <option value="building">Building / Construction</option>
                      <option value="painting">Painting</option>
                      <option value="roofing">Roofing</option>
                      <option value="hvac">HVAC / Heat Pumps</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-navy-700 mb-1.5"
                  >
                    Tell me a bit about your business
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-navy-200 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 outline-none transition-all text-navy-900 resize-none bg-white"
                    placeholder="What services do you offer? Do you have an existing website?"
                  />
                </div>

                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-accent-500 hover:bg-accent-600 disabled:bg-accent-500/50 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all cursor-pointer shadow-lg shadow-accent-500/25 hover:shadow-xl hover:shadow-accent-500/30 disabled:cursor-not-allowed disabled:shadow-none"
                >
                  {sending ? "Sending..." : "Send Message"}
                </button>
              </form>

              <p className="text-center text-sm text-navy-400 mt-4">
                No spam, no obligation — just a friendly chat.
              </p>
            </div>
          )}
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
            <span className="text-xl font-bold text-white">
              NV<span className="text-accent-500"> Web Design</span>
            </span>
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
                Services & Pricing
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
                Get in Touch
              </a>
            </nav>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-3">Get in Touch</h4>
            <div className="flex flex-col gap-2 text-sm text-navy-400">
              <span>Based in New Zealand</span>
              <span>Response within 24 hours</span>
              <a
                href="#contact"
                className="text-accent-400 hover:text-accent-500 transition-colors font-medium"
              >
                Send a message &rarr;
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-navy-800 mt-10 pt-8 text-center">
          <p className="text-sm text-navy-500">
            &copy; {new Date().getFullYear()} NV Web Design. All rights
            reserved.
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
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
