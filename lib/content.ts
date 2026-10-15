// ============================================
// PROGRAMMATIC CONTENT ENGINE (city x service)
// Goal: every /<city>/<service> page reads as its own page, not a city-name swap.
// Method (local-seo-launch skill): multi-factor hash -> independent pick on each
// axis from pools of 8 variants, plus real per-city data (facts, challenges,
// home styles, nearby towns with real distances).
// No phone numbers, no warranties, no ratings, no years-in-business claims.
// ============================================

import type { City } from "./cities";
import { nearbyCities, milesBetween } from "./cities";
import type { Service } from "./services";
import { SITE } from "./site";

// ---------- deterministic hash (FNV-1a) ----------
export function hash(input: string): number {
  let h = 0x811c9dc5;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return h >>> 0;
}

const popBucket = (p: number) => (p < 8000 ? "small" : p < 20000 ? "mid" : p < 45000 ? "large" : "city");
const keyFor = (c: City, s: Service) => `${c.slug}::${s.slug}::${c.region}::${popBucket(c.population)}::${c.county.slice(0, 2)}`;

/** Pick one item; each axis gets its own salt so axes rotate independently. */
export function pick<T>(pool: T[], key: string, salt: string): T {
  return pool[hash(`${key}#${salt}`) % pool.length];
}

/** Pick n distinct items in a stable, page-specific order. */
export function pickMany<T>(pool: T[], n: number, key: string, salt: string): T[] {
  return [...pool]
    .map((item, i) => ({ item, w: hash(`${key}#${salt}#${i}`) }))
    .sort((a, b) => a.w - b.w)
    .slice(0, Math.min(n, pool.length))
    .map((x) => x.item);
}

const fill = (t: string, v: Record<string, string>) => t.replace(/\{(\w+)\}/g, (_, k) => v[k] ?? `{${k}}`);

const listText = (items: string[]) =>
  items.length <= 1 ? items.join("") : `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`;

const sizePhrase: Record<string, string[]> = {
  small: ["a small town of about {pop} residents", "a close-knit community of roughly {pop} people", "a quiet town of around {pop} residents"],
  mid: ["a town of about {pop} residents", "a community of roughly {pop} people", "a growing town of around {pop} residents"],
  large: ["a busy community of about {pop} residents", "a sizeable town of roughly {pop} people", "a well-established community of around {pop} residents"],
  city: ["a city of about {pop} residents", "one of the larger communities in the area, with roughly {pop} people", "a dense city of around {pop} residents"],
};

// ---------- pools (8 variants per axis) ----------
const INTRO = [
  "Looking for {noun} in {city}? Mass Painters Pro connects {city} homeowners with independent local painters who already work in {county} County, so you can get a written estimate without calling around.",
  "{city} is {size}, and its homes need {noun} that holds up to Massachusetts weather. Fill out one short form and we match you with a vetted local painter for your project.",
  "Getting {noun} done right in {city} starts with the right contractor. We connect you with an independent painting pro who serves {city} and nearby {region} towns.",
  "Whether you own a {style1} or a {style2} in {city}, {noun} is only as good as the prep behind it. Tell us about the job and we will match you with a local painter.",
  "Planning {noun} in {city}, MA? Skip the cold calls: describe your project once and a local, independent painter who works in {county} County follows up with you.",
  "Homeowners in {city} ask us for {noun} for all kinds of reasons, from a fresh look before selling to repairing years of wear. We help you find the right local pro for it.",
  "In {city}, {size}, finding an available painter for {noun} can take weeks of phone tag. One request through Mass Painters Pro puts you in touch with a local contractor.",
  "{noun_cap} in {city} is a project worth doing once and doing well. We match {city} property owners with independent painters who know {region} homes.",
];

const LOCAL = [
  "{facts} Homes here range from {stylesList}, and each needs a slightly different approach to {noun}.",
  "{facts} That mix of {stylesList} means a painter working in {city} has to adapt prep and products to each house.",
  "About {city}: {facts} For {noun}, local painters most often see {stylesList} on their estimates.",
  "{facts} Typical {city} housing includes {stylesList}, which shapes how {noun} is planned and priced.",
  "Local context matters. {facts} Painters who work in {city} regularly handle {stylesList}.",
  "{facts} Across {city}'s neighborhoods you will find {stylesList}, and the condition of the existing finish varies a lot from street to street.",
  "Why local experience helps in {city}: {facts} Common home types include {stylesList}.",
  "{facts} From {style1} to {style2}, {city} homes give {noun} contractors plenty of variety.",
];

const CHALLENGE_LEAD = [
  "Common issues painters run into in {city}:",
  "What local contractors watch for in {city}:",
  "Typical {city} conditions that affect {noun}:",
  "Before quoting {noun} in {city}, a good painter checks for:",
  "Things that make {noun} in {city} different:",
  "Local factors that affect {noun} in {city}:",
  "What {city} homes tend to need:",
  "Why prep matters for {noun} in {city}:",
];

const COST_LEAD = [
  "Every {city} estimate is different. The main factors that move the price of {noun} are:",
  "There is no single price for {noun} in {city}. Contractors usually price based on:",
  "Want to understand your {noun} estimate? In {city}, it mostly comes down to:",
  "The cost of {noun} in {city} depends mainly on:",
  "When a local painter quotes {noun} in {city}, they look at:",
  "Here is what typically drives the price of {noun} for a {city} home:",
  "Estimates for {noun} in {city} usually reflect:",
  "To compare {noun} quotes in {city} fairly, check how each one handles:",
];

const CLOSING = [
  "Ready to get started in {city}? Request a free estimate and a local painter will reach out to discuss your {noun} project.",
  "Tell us about your {noun} project and we will connect you with an independent painter who serves {city}. It is free and there is no obligation.",
  "One short form is all it takes. Describe your {city} project and a local {noun} pro follows up with you.",
  "Get matched with a {noun} contractor who works in {city} and the rest of {county} County. Requesting an estimate is free.",
  "Your {city} home deserves a careful job. Request a free {noun} estimate and compare it on your own terms.",
  "Start your {noun} project in {city} today: fill out the form and a local painter will contact you to schedule a walkthrough.",
  "From {city} to nearby {near1} and {near2}, local painters are ready to quote your {noun} project. Request yours now.",
  "Don't spend days chasing contractors. Send one request and get connected with a {city} area painter for {noun}.",
];

const TITLE = [
  "{service} in {city}, MA | {brand}",
  "{city}, MA {service} | Free Estimates",
  "{service} {city} MA | Local Painters",
  "{city} {service} | Free Estimate | {brand}",
  "{service} Contractors in {city}, MA",
  "{service} in {city} MA | Get Matched Free",
  "Local {service} in {city}, MA",
  "{city}, Massachusetts {service} | {brand}",
];

const DESC = [
  "{service} in {city}, MA. {summary} Get matched with a local painter. Free estimate.",
  "Need {noun} in {city}? Connect with an independent {county} County painter in one short form. Free estimate.",
  "{city}, MA {noun}: {summaryLower} Request a free estimate online.",
  "Find a local {noun} contractor in {city}, MA. One form, a written estimate, no cold calls. Free estimate.",
  "Planning {noun} in {city}? We match you with painters who work in {region} towns. Free estimate.",
  "{service} for {city} homes and businesses. Tell us about your project and get a free estimate.",
  "Compare {noun} options in {city}, MA with a local painter. Fast online request. Free estimate.",
  "{city} {noun} by independent local painters. Describe your project once. Free estimate.",
];

export interface CityServiceContent {
  title: string;
  description: string;
  subhead: string;
  intro: string;
  local: string;
  challengeLead: string;
  challenges: string[];
  massachusetts: string;
  included: string[];
  signs: string[];
  costLead: string;
  costFactors: string[];
  faqs: { q: string; a: string }[];
  closing: string;
  nearby: { city: City; miles: number }[];
}

export function cityServiceContent(city: City, service: Service): CityServiceContent {
  const key = keyFor(city, service);
  const near = nearbyCities(city, 8);
  const styles = pickMany(city.homeStyles, 3, key, "styles");
  const vars: Record<string, string> = {
    city: city.name,
    county: city.county,
    region: city.region,
    noun: service.noun,
    noun_cap: service.noun.charAt(0).toUpperCase() + service.noun.slice(1),
    service: service.name,
    brand: SITE.name,
    summary: service.metaSummary,
    summaryLower: service.metaSummary.charAt(0).toLowerCase() + service.metaSummary.slice(1),
    facts: city.localFacts,
    style1: styles[0]?.toLowerCase() ?? "colonial",
    style2: (styles[1] ?? styles[0] ?? "cape").toLowerCase(),
    stylesList: listText(styles.map((s) => s.toLowerCase())),
    near1: near[0]?.name ?? city.name,
    near2: near[1]?.name ?? city.name,
    pop: city.population.toLocaleString("en-US"),
  };
  vars.size = fill(pick(sizePhrase[popBucket(city.population)], key, "size"), vars);

  let title = fill(pick(TITLE, key, "title"), vars);
  if (title.length > 60) title = `${service.name} in ${city.name}, MA`;
  let description = fill(pick(DESC, key, "desc"), vars);
  if (description.length > 155) description = `${service.name} in ${city.name}, MA. Get matched with a local painter. Free estimate.`;

  const cityFaq = pick(
    [
      { q: `Do you cover all of ${city.name}?`, a: `Yes. Requests from anywhere in ${city.name} are matched with painters who also work in nearby towns such as ${vars.near1} and ${vars.near2}.` },
      { q: `How fast will a painter contact me in ${city.name}?`, a: `Most requests are passed to a local contractor right away, and the contractor reaches out to schedule a walkthrough. Timing depends on the season and the size of the job.` },
      { q: `Is the estimate free for ${city.name} homeowners?`, a: `Yes. Requesting an estimate through ${SITE.name} is free and there is no obligation to hire.` },
      { q: `Can I get ${service.noun} in ${city.name} during winter?`, a: service.season === "year-round" ? `Yes, ${service.noun} is usually done year-round because it is indoor or weather-independent work.` : `${service.name} is mostly a warm-season service in Massachusetts. Requesting an estimate in winter or early spring helps you get on the schedule.` },
    ],
    key,
    "cityfaq",
  );

  return {
    title,
    description,
    subhead: fill(pick(["Free estimates from independent painters who work in {city} and across {county} County.", "One short form connects you with a local {noun} pro serving {city}.", "Local painters, written estimates, no cold calls: {noun} for {city} homes and businesses.", "Get matched with a {region} painter for {noun} in {city}."], key, "subhead"), vars),
    intro: fill(pick(INTRO, key, "intro"), vars),
    local: fill(pick(LOCAL, key, "local"), vars),
    challengeLead: fill(pick(CHALLENGE_LEAD, key, "chlead"), vars),
    challenges: pickMany(city.challenges, 3, key, "challenges"),
    massachusetts: pick(service.massachusetts, key, "ma"),
    included: pickMany(service.included, 5, key, "included"),
    signs: pickMany(service.signs, 3, key, "signs"),
    costLead: fill(pick(COST_LEAD, key, "costlead"), vars),
    costFactors: pickMany(service.costFactors, 3, key, "cost"),
    faqs: [...pickMany(service.faqs, 2, key, "faq"), cityFaq],
    closing: fill(pick(CLOSING, key, "closing"), vars),
    nearby: near.map((c) => ({ city: c, miles: Math.round(milesBetween(city, c)) })),
  };
}

// ---------- city hub (/<city>) ----------
export function cityHubContent(city: City) {
  const key = `${city.slug}::hub::${city.region}`;
  const near = nearbyCities(city, 10);
  const vars = { city: city.name, county: city.county, region: city.region, facts: city.localFacts, pop: city.population.toLocaleString("en-US") };
  const titles = [
    `Painters in ${city.name}, MA | ${SITE.name}`,
    `${city.name}, MA Painting Contractors | Free Estimates`,
    `House Painters in ${city.name}, MA`,
    `${city.name} MA Painters | Get Matched Free`,
  ];
  let title = pick(titles, key, "title");
  if (title.length > 60) title = `Painters in ${city.name}, MA`;
  const descs = [
    `Find local painters in ${city.name}, MA for interior, exterior, cabinets, decks and more. One form, free estimate.`,
    `${city.name}, MA painting services: interior, exterior, cabinet and commercial painting by local pros. Free estimate.`,
    `Get matched with an independent painter in ${city.name}, ${city.county} County. Nine services, one form. Free estimate.`,
  ];
  return {
    title,
    description: pick(descs, key, "desc"),
    intro: fill(pick([
      "{city} is home to about {pop} people in {county} County. Mass Painters Pro helps {city} homeowners and businesses find independent local painters for every kind of painting project.",
      "Need a painter in {city}? We connect {city} property owners with independent painting contractors who work across {county} County and the {region} area.",
      "From a single room to a full exterior, {city} homeowners use Mass Painters Pro to get matched with a local painter and a written estimate.",
    ], key, "intro"), vars),
    nearby: near.map((c) => ({ city: c, miles: Math.round(milesBetween(city, c)) })),
  };
}
