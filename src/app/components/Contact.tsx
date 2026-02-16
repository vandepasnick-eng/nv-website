"use client";

import { useState } from "react";

export default function Contact() {
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
    <section id="contact" className="py-16 sm:py-24 bg-navy-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900">
            Ready for your free mock-up?
          </h2>
          <p className="mt-4 text-lg text-navy-500">
            Tell me about your business and I&apos;ll design a homepage
            mock-up — free, no obligation. I&apos;ll be in touch within
            24 hours.
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
                I&apos;ll be in touch within 24 hours with your mock-up details.
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
                  {sending ? "Sending..." : "Get My Free Mock-Up"}
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
