/** @type {import('next').NextConfig} */

// Cities that existed on the old /ma/... structure but are not part of the
// new 109-town service area (same list as wolfs-siding.com). Their old URLs
// are permanently redirected to the matching statewide service page.
const REMOVED_CITIES = [
  "amesbury", "andover", "ashburnham", "billerica", "boston", "dracut", "gardner", "gloucester", "haverhill",
  "holbrook", "ipswich", "lawrence", "lowell", "methuen", "newburyport", "north-andover", "rockport", "salisbury", "tewksbury",
];

// Old service slugs -> new service slugs
const SERVICE_MAP = {
  "interior-painting": "interior-painting",
  "exterior-painting": "exterior-painting",
  "cabinet-refinishing": "cabinet-painting",
  "commercial-painting": "commercial-painting",
};

const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "storage.googleapis.com", pathname: "/msgsndr/**" },
      { protocol: "https", hostname: "images.pexels.com", pathname: "/**" },
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
    ],
  },
  async redirects() {
    const rules = [];
    // 1) old top-level service pages -> /services/<slug>
    for (const [oldSlug, newSlug] of Object.entries(SERVICE_MAP)) {
      rules.push({ source: `/${oldSlug}`, destination: `/services/${newSlug}`, permanent: true });
    }
    // 2) removed cities -> statewide service page
    for (const city of REMOVED_CITIES) {
      rules.push({ source: `/ma/${city}`, destination: "/service-areas", permanent: true });
      for (const [oldSlug, newSlug] of Object.entries(SERVICE_MAP)) {
        rules.push({ source: `/ma/${city}/${oldSlug}`, destination: `/services/${newSlug}`, permanent: true });
      }
    }
    // 3) cabinet-refinishing renamed on kept cities
    rules.push({ source: "/ma/:city/cabinet-refinishing", destination: "/:city/cabinet-painting", permanent: true });
    // 4) every other old city/service URL keeps the same city and service
    rules.push({ source: "/ma/:city/:service", destination: "/:city/:service", permanent: true });
    rules.push({ source: "/ma/:city", destination: "/:city", permanent: true });
    rules.push({ source: "/ma", destination: "/service-areas", permanent: true });
    return rules;
  },
};

module.exports = nextConfig;
