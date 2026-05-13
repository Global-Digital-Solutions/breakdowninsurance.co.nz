import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "BreakdownInsurance.co.nz | Compare Breakdown Insurance NZ | Any Vehicle, Any Driver",
  description: "Compare mechanical breakdown insurance providers in New Zealand — independently, side by side. Any vehicle, any driver, any location. Find the right MBI cover and go straight to the provider.",
  keywords: [
    "mechanical breakdown insurance NZ",
    "breakdown insurance New Zealand",
    "compare breakdown insurance NZ",
    "MBI providers NZ",
    "breakdown insurance comparison",
    "mechanical breakdown cover",
    "used car warranty NZ",
    "vehicle breakdown insurance",
    "engine failure insurance NZ",
    "transmission insurance NZ",
    "EV breakdown insurance NZ",
    "electric vehicle breakdown insurance",
    "cheap breakdown insurance NZ",
    "best mechanical breakdown insurance",
    "roadside assistance NZ",
    "breakdown insurance Auckland",
    "breakdown insurance cost NZ",
    "Japanese import breakdown insurance NZ",
    "breakdown insurance extended warranty NZ",
    "drivetrain insurance NZ",
  ],
  authors: [{ name: "BreakdownInsurance.co.nz" }],
  alternates: { canonical: "https://breakdowninsurance.co.nz" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: "website",
    locale: "en_NZ",
    url: "https://breakdowninsurance.co.nz",
    title: "BreakdownInsurance.co.nz | Compare Breakdown Insurance NZ",
    description: "Compare all leading NZ mechanical breakdown insurance providers side by side — any vehicle, any driver, any location. Independent, with no provider paying for placement.",
    siteName: "BreakdownInsurance.co.nz",
    images: [{ url: 'https://breakdowninsurance.co.nz/android-chrome-512x512.png', width: 512, height: 512, alt: 'BreakdownInsurance.co.nz' }],
  },
  twitter: {
    card: "summary_large_image",
    title: "BreakdownInsurance.co.nz | Compare Breakdown Insurance NZ",
    description: "Compare NZ's leading MBI providers side by side. Any vehicle, any driver, any location. Independent — no provider pays for placement.",
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    other: [{ rel: 'manifest', url: '/site.webmanifest' }],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "BreakdownInsurance.co.nz",
  "alternateName": "Cover4You",
  "url": "https://breakdowninsurance.co.nz",
  "logo": "https://breakdowninsurance.co.nz/android-chrome-512x512.png",
  "description": "Independent mechanical breakdown insurance comparison service for New Zealand vehicle owners. Any vehicle, any driver, any location.",
  "email": "hello@cover4you.co.nz",
  "areaServed": "NZ",
  "sameAs": [],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "BreakdownInsurance.co.nz",
  "url": "https://breakdowninsurance.co.nz",
  "description": "Compare mechanical breakdown insurance providers in New Zealand — independently, side by side.",
  "publisher": {
    "@type": "Organization",
    "name": "Cover4You",
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://breakdowninsurance.co.nz/breakdown-insurance/{search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#f59e0b" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white font-sans antialiased">
        <NavBar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
