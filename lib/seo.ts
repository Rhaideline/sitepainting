// ============================================
// SEO HELPERS - single source of truth for page metadata and JSON-LD.
// Site-wide schema lives in app/layout.tsx; page schema is built here per route.
// ============================================

import type { Metadata } from "next";
import { SITE, absoluteUrl } from "./site";
import { services } from "./services";
import { cities, type City } from "./cities";
import type { Service } from "./services";

interface PageMeta {
  title: string; // <= 60 chars, brand suffix NOT appended automatically
  description: string; // <= 155 chars
  path: string;
  noIndex?: boolean;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
}

export function pageMetadata({ title, description, path, noIndex, image, type = "website", publishedTime }: PageMeta): Metadata {
  const url = absoluteUrl(path);
  const img = image || SITE.logo;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: true } : { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE.name,
      locale: "en_US",
      type,
      images: [{ url: img, alt: title }],
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: { card: "summary_large_image", title, description, images: [img] },
  };
}

// ---------- JSON-LD ----------
const ORG_ID = `${SITE.url}/#organization`;
const WEBSITE_ID = `${SITE.url}/#website`;

/** Site-wide graph: rendered once in the root layout. No address, phone or rating (referral service). */
export function siteGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": ORG_ID,
        name: SITE.name,
        url: SITE.url,
        logo: { "@type": "ImageObject", url: SITE.logo },
        description: SITE.description,
        areaServed: { "@type": "State", name: "Massachusetts" },
        knowsAbout: services.map((s) => s.name),
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: SITE.url,
        name: SITE.name,
        publisher: { "@id": ORG_ID },
        inLanguage: "en-US",
      },
      {
        "@type": "SiteNavigationElement",
        name: ["Services", "Service Areas", "How It Works", "Blog", "Get a Free Estimate"],
        url: [absoluteUrl("/services"), absoluteUrl("/service-areas"), absoluteUrl("/how-it-works"), absoluteUrl("/blog"), absoluteUrl("/contact")],
      },
      {
        "@type": "ItemList",
        name: "Painting services in Massachusetts",
        itemListElement: services.map((s, i) => ({ "@type": "ListItem", position: i + 1, name: s.name, url: absoluteUrl(`/services/${s.slug}`) })),
      },
    ],
  };
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: absoluteUrl(it.path) })),
  };
}

/** A painting service offered (through referral) in a place. Provider is the Organization. */
export function serviceLd(service: Service, path: string, area: City | null) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(path)}#service`,
    name: area ? `${service.name} in ${area.name}, MA` : service.name,
    serviceType: service.name,
    description: service.metaSummary,
    url: absoluteUrl(path),
    provider: { "@id": ORG_ID },
    areaServed: area
      ? { "@type": "City", name: area.name, containedInPlace: { "@type": "State", name: "Massachusetts" } }
      : cities.map((c) => ({ "@type": "City", name: c.name })),
  };
}

export function faqLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
}
