import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

/**
 * SEO Metadata Configuration
 *
 * This metadata is optimized for:
 * - Local SEO (Massachusetts painting services)
 * - Rich snippets and social sharing
 * - Search engine visibility
 */
export const metadata: Metadata = {
  // Primary SEO title - includes main keyword and location
  title: "Mass Painters Pro | Professional Painting Services in Massachusetts",

  // Meta description - compelling copy with keywords
  description:
    "Top-rated painting professionals serving Boston, Worcester, Springfield and all of Massachusetts. Licensed, insured, family-owned. Interior, exterior painting & cabinet refinishing. Get your free estimate today!",

  // Keywords for search engines (though less important now)
  keywords: [
    "Massachusetts painters",
    "Boston painting services",
    "Worcester painters",
    "MA interior painting",
    "exterior painting Massachusetts",
    "cabinet refinishing Boston",
    "house painters near me",
    "professional painters MA",
    "residential painting Massachusetts",
    "commercial painting Boston",
  ],

  // Open Graph for social sharing
  openGraph: {
    title: "Mass Painters Pro | Top-Rated Painting Professionals in Massachusetts",
    description:
      "Transform your home with Massachusetts' most trusted painting professionals. Licensed, insured, and satisfaction guaranteed. Get your free estimate today!",
    url: "https://masspainter.pro",
    siteName: "Mass Painters Pro",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/695a97fe6e700e1a414da216.svg",
        width: 1200,
        height: 630,
        alt: "Mass Painters Pro - Professional Painting Services in Massachusetts",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Mass Painters Pro | Professional Painting Services in Massachusetts",
    description:
      "Transform your home with Massachusetts' most trusted painting professionals. Licensed, insured, and satisfaction guaranteed.",
    images: ["https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/695a97fe6e700e1a414da216.svg"],
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Canonical URL
  alternates: {
    canonical: "https://masspainter.pro",
  },

  // Verification (add your actual verification codes)
  verification: {
    google: "your-google-verification-code",
  },

  // Other metadata
  authors: [{ name: "Mass Painters Pro" }],
  creator: "Mass Painters Pro",
  publisher: "Mass Painters Pro",
  category: "Home Services",
};

/**
 * JSON-LD Structured Data for Local Business
 * This helps search engines understand your business details
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://masspainter.pro",
  name: "Mass Painters Pro",
  image: "https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/695a97fe6e700e1a414da216.svg",
  description:
    "Top-rated painting professionals serving all of Massachusetts. Interior, exterior painting & cabinet refinishing services.",
  url: "https://masspainter.pro",
  telephone: "+1-555-123-4567",
  email: "info@masspainterspro.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Main Street",
    addressLocality: "Boston",
    addressRegion: "MA",
    postalCode: "02101",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 42.3601,
    longitude: -71.0589,
  },
  areaServed: [
    {
      "@type": "State",
      name: "Massachusetts",
    },
    {
      "@type": "City",
      name: "Boston",
    },
    {
      "@type": "City",
      name: "Worcester",
    },
    {
      "@type": "City",
      name: "Springfield",
    },
    {
      "@type": "City",
      name: "Cambridge",
    },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "14:00",
    },
  ],
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "200",
  },
  sameAs: [
    "https://facebook.com/masspainterspro",
    "https://instagram.com/masspainterspro",
    "https://linkedin.com/company/masspainterspro",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Painting Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Interior Painting",
          description: "Professional interior painting for residential and commercial properties",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Exterior Painting",
          description: "Weather-resistant exterior painting built for New England climate",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Cabinet Refinishing",
          description: "Expert cabinet painting and refinishing services",
        },
      },
    ],
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
        {/* JSON-LD Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Preconnect to external resources for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://storage.googleapis.com" />
        {/* LeadConnector Form Embed Script */}
        <script src="https://link.msgsndr.com/js/form_embed.js" async />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
