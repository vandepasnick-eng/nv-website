import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NV Web Design — Websites for NZ Trades Businesses | From $0 Upfront",
  description:
    "Professional websites for NZ plumbers, electricians, landscapers and trades businesses. From $0 upfront, live in 5–7 days. Free mock-up — no obligation.",
  metadataBase: new URL("https://nicholasvandepas.com"),
  openGraph: {
    title: "NV Web Design — Websites for NZ Trades Businesses",
    description:
      "Professional websites from $0 upfront, live in 5–7 days. Free mock-up — no obligation.",
    url: "https://nicholasvandepas.com",
    siteName: "NV Web Design",
    locale: "en_NZ",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "NV Web Design — Websites for NZ Trades Businesses",
    description:
      "Professional websites from $0 upfront, live in 5–7 days. Free mock-up — no obligation.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "NV Web Design",
              description:
                "Professional websites for NZ trades businesses. From $0 upfront, live in 5–7 days.",
              url: "https://nicholasvandepas.com",
              telephone: "+64-4-488-7496",
              email: "hello@nicholasvandepas.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Wellington",
                addressCountry: "NZ",
              },
              founder: {
                "@type": "Person",
                name: "Nick van de Pas",
              },
              areaServed: {
                "@type": "Country",
                name: "New Zealand",
              },
              priceRange: "$129–$179/mo",
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
