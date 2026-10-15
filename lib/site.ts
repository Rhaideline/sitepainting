// ============================================
// SITE IDENTITY
// Mass Painters Pro is a free referral service: it connects Massachusetts
// homeowners and businesses with independent local painting contractors.
// It does not perform painting work itself, so this file deliberately has
// NO phone, NO street address, NO ratings, NO years-in-business claims.
// Leads arrive only through the estimate form (see app/api/lead/route.ts).
// ============================================

export const SITE = {
  name: "Mass Painters Pro",
  url: "https://masspainter.pro",
  logo: "https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/695a97fe6e700e1a414da216.svg",
  state: "Massachusetts",
  stateCode: "MA",
  tagline: "Matched with a local Massachusetts painter in one form",
  description:
    "Mass Painters Pro is a free referral service that connects Massachusetts homeowners and businesses with independent local painting contractors for interior, exterior, cabinet, commercial and specialty painting.",
  // Shown in the footer and on /how-it-works. Keep it accurate to how the business actually operates.
  disclosure:
    "Mass Painters Pro is a free referral service. We do not perform painting work. Projects are quoted, contracted and completed by independent painting contractors, who are responsible for their own licensing, insurance and workmanship. Always confirm a contractor's Massachusetts Home Improvement Contractor (HIC) registration before signing a contract.",
} as const;

export const absoluteUrl = (path = "/") => `${SITE.url}${path === "/" ? "" : path}`;
