// ============================================
// MASSACHUSETTS CITIES DATA
// 100+ cities within 20 miles of Marlborough, MA
// ============================================

export const cities = [
  // Metro West (Primary Area)
  { slug: "marlborough", name: "Marlborough", county: "Middlesex", population: 41793 },
  { slug: "framingham", name: "Framingham", county: "Middlesex", population: 72032 },
  { slug: "natick", name: "Natick", county: "Middlesex", population: 36050 },
  { slug: "sudbury", name: "Sudbury", county: "Middlesex", population: 19655 },
  { slug: "hudson", name: "Hudson", county: "Middlesex", population: 20390 },
  { slug: "northborough", name: "Northborough", county: "Worcester", population: 15155 },
  { slug: "southborough", name: "Southborough", county: "Worcester", population: 10450 },
  { slug: "westborough", name: "Westborough", county: "Worcester", population: 19035 },
  { slug: "shrewsbury", name: "Shrewsbury", county: "Worcester", population: 38325 },
  { slug: "grafton", name: "Grafton", county: "Worcester", population: 19563 },

  // Worcester Area
  { slug: "worcester", name: "Worcester", county: "Worcester", population: 206518 },
  { slug: "auburn", name: "Auburn", county: "Worcester", population: 16933 },
  { slug: "millbury", name: "Millbury", county: "Worcester", population: 14147 },
  { slug: "holden", name: "Holden", county: "Worcester", population: 19719 },
  { slug: "leicester", name: "Leicester", county: "Worcester", population: 11553 },
  { slug: "spencer", name: "Spencer", county: "Worcester", population: 12195 },
  { slug: "paxton", name: "Paxton", county: "Worcester", population: 5056 },
  { slug: "rutland", name: "Rutland", county: "Worcester", population: 9277 },
  { slug: "princeton", name: "Princeton", county: "Worcester", population: 3500 },
  { slug: "sterling", name: "Sterling", county: "Worcester", population: 8174 },

  // Boston Metro
  { slug: "boston", name: "Boston", county: "Suffolk", population: 675647 },
  { slug: "cambridge", name: "Cambridge", county: "Middlesex", population: 118403 },
  { slug: "somerville", name: "Somerville", county: "Middlesex", population: 81360 },
  { slug: "brookline", name: "Brookline", county: "Norfolk", population: 63191 },
  { slug: "newton", name: "Newton", county: "Middlesex", population: 88923 },
  { slug: "wellesley", name: "Wellesley", county: "Norfolk", population: 29673 },
  { slug: "needham", name: "Needham", county: "Norfolk", population: 31388 },
  { slug: "waltham", name: "Waltham", county: "Middlesex", population: 65051 },
  { slug: "watertown", name: "Watertown", county: "Middlesex", population: 35939 },
  { slug: "belmont", name: "Belmont", county: "Middlesex", population: 27295 },

  // North Shore
  { slug: "lexington", name: "Lexington", county: "Middlesex", population: 34454 },
  { slug: "concord", name: "Concord", county: "Middlesex", population: 19569 },
  { slug: "acton", name: "Acton", county: "Middlesex", population: 24370 },
  { slug: "bedford", name: "Bedford", county: "Middlesex", population: 14685 },
  { slug: "burlington", name: "Burlington", county: "Middlesex", population: 28701 },
  { slug: "woburn", name: "Woburn", county: "Middlesex", population: 41393 },
  { slug: "reading", name: "Reading", county: "Middlesex", population: 26165 },
  { slug: "stoneham", name: "Stoneham", county: "Middlesex", population: 24126 },
  { slug: "winchester", name: "Winchester", county: "Middlesex", population: 22970 },
  { slug: "arlington", name: "Arlington", county: "Middlesex", population: 46308 },

  // South Shore
  { slug: "quincy", name: "Quincy", county: "Norfolk", population: 101636 },
  { slug: "braintree", name: "Braintree", county: "Norfolk", population: 39867 },
  { slug: "weymouth", name: "Weymouth", county: "Norfolk", population: 57746 },
  { slug: "milton", name: "Milton", county: "Norfolk", population: 28600 },
  { slug: "dedham", name: "Dedham", county: "Norfolk", population: 25756 },
  { slug: "norwood", name: "Norwood", county: "Norfolk", population: 31450 },
  { slug: "canton", name: "Canton", county: "Norfolk", population: 24370 },
  { slug: "stoughton", name: "Stoughton", county: "Norfolk", population: 29312 },
  { slug: "randolph", name: "Randolph", county: "Norfolk", population: 34984 },
  { slug: "holbrook", name: "Holbrook", county: "Norfolk", population: 11309 },

  // I-495 Corridor
  { slug: "lowell", name: "Lowell", county: "Middlesex", population: 115554 },
  { slug: "chelmsford", name: "Chelmsford", county: "Middlesex", population: 35824 },
  { slug: "billerica", name: "Billerica", county: "Middlesex", population: 43899 },
  { slug: "tewksbury", name: "Tewksbury", county: "Middlesex", population: 31688 },
  { slug: "andover", name: "Andover", county: "Essex", population: 36352 },
  { slug: "north-andover", name: "North Andover", county: "Essex", population: 31188 },
  { slug: "lawrence", name: "Lawrence", county: "Essex", population: 89143 },
  { slug: "methuen", name: "Methuen", county: "Essex", population: 51108 },
  { slug: "haverhill", name: "Haverhill", county: "Essex", population: 67706 },
  { slug: "dracut", name: "Dracut", county: "Middlesex", population: 32096 },

  // Route 2 Corridor
  { slug: "littleton", name: "Littleton", county: "Middlesex", population: 10376 },
  { slug: "westford", name: "Westford", county: "Middlesex", population: 25098 },
  { slug: "groton", name: "Groton", county: "Middlesex", population: 11656 },
  { slug: "ayer", name: "Ayer", county: "Middlesex", population: 8512 },
  { slug: "shirley", name: "Shirley", county: "Middlesex", population: 7792 },
  { slug: "lunenburg", name: "Lunenburg", county: "Worcester", population: 12109 },
  { slug: "leominster", name: "Leominster", county: "Worcester", population: 43782 },
  { slug: "fitchburg", name: "Fitchburg", county: "Worcester", population: 41449 },
  { slug: "gardner", name: "Gardner", county: "Worcester", population: 21822 },
  { slug: "ashburnham", name: "Ashburnham", county: "Worcester", population: 6394 },

  // South Central
  { slug: "hopkinton", name: "Hopkinton", county: "Middlesex", population: 18758 },
  { slug: "ashland", name: "Ashland", county: "Middlesex", population: 18336 },
  { slug: "holliston", name: "Holliston", county: "Middlesex", population: 15117 },
  { slug: "medway", name: "Medway", county: "Norfolk", population: 13431 },
  { slug: "millis", name: "Millis", county: "Norfolk", population: 8400 },
  { slug: "medfield", name: "Medfield", county: "Norfolk", population: 12841 },
  { slug: "dover", name: "Dover", county: "Norfolk", population: 6355 },
  { slug: "sherborn", name: "Sherborn", county: "Middlesex", population: 4326 },
  { slug: "wayland", name: "Wayland", county: "Middlesex", population: 14060 },
  { slug: "weston", name: "Weston", county: "Middlesex", population: 12135 },

  // Franklin County & Beyond
  { slug: "milford", name: "Milford", county: "Worcester", population: 30461 },
  { slug: "franklin", name: "Franklin", county: "Norfolk", population: 34087 },
  { slug: "bellingham", name: "Bellingham", county: "Norfolk", population: 17935 },
  { slug: "mendon", name: "Mendon", county: "Worcester", population: 6386 },
  { slug: "upton", name: "Upton", county: "Worcester", population: 8000 },
  { slug: "hopedale", name: "Hopedale", county: "Worcester", population: 5922 },
  { slug: "uxbridge", name: "Uxbridge", county: "Worcester", population: 14501 },
  { slug: "northbridge", name: "Northbridge", county: "Worcester", population: 17085 },
  { slug: "douglas", name: "Douglas", county: "Worcester", population: 9030 },
  { slug: "sutton", name: "Sutton", county: "Worcester", population: 9800 },

  // Cape Ann & North
  { slug: "salem", name: "Salem", county: "Essex", population: 44480 },
  { slug: "peabody", name: "Peabody", county: "Essex", population: 54251 },
  { slug: "danvers", name: "Danvers", county: "Essex", population: 28287 },
  { slug: "beverly", name: "Beverly", county: "Essex", population: 42670 },
  { slug: "gloucester", name: "Gloucester", county: "Essex", population: 30273 },
  { slug: "rockport", name: "Rockport", county: "Essex", population: 7347 },
  { slug: "ipswich", name: "Ipswich", county: "Essex", population: 14150 },
  { slug: "newburyport", name: "Newburyport", county: "Essex", population: 18289 },
  { slug: "amesbury", name: "Amesbury", county: "Essex", population: 17968 },
  { slug: "salisbury", name: "Salisbury", county: "Essex", population: 9259 },
];

// ============================================
// SERVICES DATA
// 4 main painting services
// ============================================

export const services = [
  {
    slug: "interior-painting",
    name: "Interior Painting",
    shortName: "Interior",
    icon: "home",
    description: "Professional interior painting services for homes and businesses",
    benefits: [
      "Premium low-VOC paints",
      "Expert color consultation",
      "Wall, ceiling, and trim painting",
      "Clean, professional work"
    ],
    process: [
      "Free in-home consultation",
      "Color selection assistance",
      "Furniture protection",
      "Surface preparation",
      "Professional painting",
      "Final walkthrough"
    ]
  },
  {
    slug: "exterior-painting",
    name: "Exterior Painting",
    shortName: "Exterior",
    icon: "sun",
    description: "Weather-resistant exterior painting built for New England climate",
    benefits: [
      "Weather-resistant paints",
      "Surface preparation",
      "Siding and trim painting",
      "Deck and fence staining"
    ],
    process: [
      "Exterior inspection",
      "Power washing",
      "Scraping and sanding",
      "Priming",
      "Two-coat application",
      "Clean-up and inspection"
    ]
  },
  {
    slug: "cabinet-refinishing",
    name: "Cabinet Refinishing",
    shortName: "Cabinets",
    icon: "layout",
    description: "Transform your kitchen without the cost of replacement",
    benefits: [
      "Factory-quality finish",
      "Any color available",
      "Fraction of replacement cost",
      "Quick turnaround"
    ],
    process: [
      "Cabinet assessment",
      "Door removal",
      "Degreasing and sanding",
      "Primer application",
      "Multiple paint coats",
      "Reinstallation"
    ]
  },
  {
    slug: "commercial-painting",
    name: "Commercial Painting",
    shortName: "Commercial",
    icon: "building",
    description: "Professional painting for offices, retail, and commercial properties",
    benefits: [
      "After-hours availability",
      "Minimal business disruption",
      "Large crew capacity",
      "Fast turnaround"
    ],
    process: [
      "Site assessment",
      "Custom scheduling",
      "Surface preparation",
      "Professional application",
      "Quality inspection",
      "Touch-ups as needed"
    ]
  }
];

// ============================================
// BUSINESS INFO (NAP Consistency)
// ============================================

export const businessInfo = {
  name: "Mass Painters Pro",
  phone: "(774) 341-5233",
  phoneFormatted: "+1-774-341-5233",
  email: "info@masspainterspro.com",
  address: {
    street: "123 Main Street",
    city: "Marlborough",
    state: "MA",
    zip: "01752",
    full: "123 Main Street, Marlborough, MA 01752"
  },
  hours: {
    weekdays: "7:00 AM - 6:00 PM",
    saturday: "8:00 AM - 2:00 PM",
    sunday: "Closed"
  },
  social: {
    facebook: "https://facebook.com/masspainterspro",
    instagram: "https://instagram.com/masspainterspro",
    linkedin: "https://linkedin.com/company/masspainterspro"
  },
  rating: 4.9,
  reviewCount: 200,
  yearsInBusiness: 15,
  projectsCompleted: 5000
};

// ============================================
// HELPER FUNCTIONS
// ============================================

export function getCityBySlug(slug: string) {
  return cities.find(city => city.slug === slug);
}

export function getServiceBySlug(slug: string) {
  return services.find(service => service.slug === slug);
}

export function getAllCitySlugs() {
  return cities.map(city => city.slug);
}

export function getAllServiceSlugs() {
  return services.map(service => service.slug);
}

// Generate all possible city/service combinations
export function getAllCityServiceCombinations() {
  const combinations: { city: string; service: string }[] = [];

  cities.forEach(city => {
    services.forEach(service => {
      combinations.push({
        city: city.slug,
        service: service.slug
      });
    });
  });

  return combinations;
}
