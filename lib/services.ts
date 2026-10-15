// ============================================
// SERVICES (9) - same depth as the Wolfs Siding pattern (9 service lines)
// Copy rules: describe the work and Massachusetts-specific realities.
// No warranties, no years in business, no "our crew" claims: Mass Painters Pro
// is a referral service and the work is done by independent contractors.
// ============================================

export type ServiceSlug =
  | "interior-painting"
  | "exterior-painting"
  | "cabinet-painting"
  | "commercial-painting"
  | "deck-staining"
  | "drywall-repair"
  | "power-washing"
  | "wallpaper-removal"
  | "color-consultation";

export interface Service {
  slug: ServiceSlug;
  name: string;
  shortName: string;
  noun: string; // used in sentences: "a {noun} project"
  icon: "home" | "brush" | "cabinet" | "building" | "deck" | "wall" | "spray" | "paper" | "palette";
  metaSummary: string;
  headline: string;
  intro: string[];
  included: string[];
  signs: string[];
  massachusetts: string[];
  costFactors: string[];
  faqs: { q: string; a: string }[];
  related: ServiceSlug[];
  season: "year-round" | "warm-months";
}

export const services: Service[] = [
  {
    slug: "interior-painting",
    name: "Interior Painting",
    shortName: "Interior",
    noun: "interior painting",
    icon: "home",
    metaSummary: "Walls, ceilings, trim and doors painted by vetted local interior painters.",
    headline: "Interior painting, matched to a local pro",
    intro: [
      "Interior painting is the fastest way to change how a home feels, but the result depends almost entirely on preparation: patching, sanding, caulking and priming before a single finish coat goes on.",
      "Tell us about the rooms, ceilings and trim you want painted and we connect you with an independent interior painter who works in your town, so you can compare a written estimate without calling around.",
    ],
    included: [
      "Walls, ceilings, trim, doors and window casings",
      "Patching nail holes, dents and hairline cracks",
      "Caulking gaps at trim and baseboards",
      "Stain-blocking primer over water marks and smoke stains",
      "Furniture and floor protection, daily clean-up",
      "Low-odor and zero-VOC paint options",
    ],
    signs: [
      "Scuffed or marked walls that no longer wash clean",
      "Yellowed ceilings or old water stains",
      "Cracked caulk lines along trim and baseboards",
      "Dated colors before listing a home for sale",
    ],
    massachusetts: [
      "Many Massachusetts homes were built before 1978, when lead paint was common. Sanding or scraping those surfaces must be done by a contractor licensed by the state as a Lead-Safe Renovation Contractor.",
      "Dry winter heat followed by humid summers makes plaster and drywall seams move. Good painters re-tape or flexible-patch those cracks instead of just painting over them.",
    ],
    costFactors: [
      "Square footage and ceiling height",
      "Number of colors and how much trim is involved",
      "Condition of the surfaces (patching, priming, plaster repair)",
      "Paint line chosen (standard, premium, zero-VOC)",
    ],
    faqs: [
      { q: "How long does it take to paint a room?", a: "A typical bedroom is usually one to two days including prep and two finish coats. Whole-house interiors are commonly scheduled over several days to a couple of weeks depending on size and repairs." },
      { q: "Do I need to move my furniture?", a: "Most painters move and cover furniture as part of the job. Small fragile items and valuables are best put away before the crew arrives. Confirm what is included in your written estimate." },
      { q: "Is it safe to paint an older home?", a: "If the home was built before 1978, any work that disturbs old paint should be done by a Massachusetts Lead-Safe Renovation Contractor using lead-safe practices. Ask the contractor for their license before work starts." },
    ],
    related: ["cabinet-painting", "drywall-repair", "color-consultation"],
    season: "year-round",
  },
  {
    slug: "exterior-painting",
    name: "Exterior Painting",
    shortName: "Exterior",
    noun: "exterior painting",
    icon: "brush",
    metaSummary: "Siding, trim and doors repainted by local exterior painters built for New England weather.",
    headline: "Exterior painting that survives New England winters",
    intro: [
      "An exterior paint job in Massachusetts has to handle freeze-thaw cycles, coastal moisture, strong summer sun and snow piled against the siding for months. Most early paint failures come from skipped prep, not from the paint itself.",
      "Share the size and condition of your home and we match you with an independent exterior painter serving your town, who will inspect the siding and trim and give you a written estimate.",
    ],
    included: [
      "Washing and scraping loose or peeling paint",
      "Sanding, spot-priming bare wood and filling cracks",
      "Replacing failed caulk around windows, doors and trim",
      "Siding, trim, shutters, doors and porch ceilings",
      "Protection of landscaping, walkways and roofs",
      "Final walk-around and touch-ups",
    ],
    signs: [
      "Peeling, cracking or blistering paint",
      "Bare or graying wood on trim and sills",
      "Chalky residue when you rub the siding",
      "Mildew streaks on the shaded side of the house",
    ],
    massachusetts: [
      "Exterior work in Massachusetts is usually scheduled from late spring to mid-fall, when daytime and overnight temperatures stay within the paint manufacturer's application range.",
      "Older clapboard and cedar shingle homes are common across the state. Pre-1978 exteriors may contain lead paint, so scraping must follow lead-safe rules and be done by a licensed Lead-Safe Renovation Contractor.",
    ],
    costFactors: [
      "Home size, number of stories and access",
      "Amount of scraping, wood repair and priming",
      "Number of colors (body, trim, accents, doors)",
      "Siding type: clapboard, cedar shingle, vinyl or fiber cement",
    ],
    faqs: [
      { q: "When is the best time to paint a house in Massachusetts?", a: "Late spring through early fall, on dry days within the temperature range printed on the paint can. Many contractors book their summer schedule in the winter and early spring, so it pays to request estimates early." },
      { q: "How long does an exterior paint job last?", a: "It depends on preparation, the paint system and sun exposure. Well-prepared siding often goes many years between repaints, while south-facing trim and decks usually need attention sooner." },
      { q: "Can vinyl siding be painted?", a: "Yes, with paints rated for vinyl and colors that are not darker than the manufacturer allows, to avoid warping in direct sun. A good painter will check this before quoting." },
    ],
    related: ["power-washing", "deck-staining", "color-consultation"],
    season: "warm-months",
  },
  {
    slug: "cabinet-painting",
    name: "Cabinet Painting",
    shortName: "Cabinet",
    noun: "cabinet painting",
    icon: "cabinet",
    metaSummary: "Kitchen and bathroom cabinets refinished by local cabinet painting specialists.",
    headline: "Cabinet painting instead of a full kitchen remodel",
    intro: [
      "Painting cabinets can change a kitchen at a fraction of the cost and time of replacement, as long as the boxes are solid. The difference between a factory-like finish and one that chips in months is degreasing, sanding, bonding primer and a hard cabinet-grade topcoat.",
      "Describe your kitchen or bath and we connect you with an independent cabinet painting specialist near you for a written estimate.",
    ],
    included: [
      "Door and drawer removal, labeling and hardware handling",
      "Degreasing and scuff-sanding every surface",
      "Bonding primer and grain or knot sealing",
      "Cabinet-grade enamel, sprayed or brushed",
      "Masking of counters, appliances and floors",
      "Optional new hardware installation",
    ],
    signs: [
      "Solid cabinet boxes with dated finishes",
      "Worn or peeling finish near handles and the sink",
      "Oak or cherry tones that clash with a new design",
      "Planning to sell and want a quick kitchen update",
    ],
    massachusetts: [
      "Kitchens in older Massachusetts homes often have original solid-wood cabinets that are worth keeping and refinishing rather than replacing.",
      "Cabinet finishes cure slower in cold, damp months, so contractors usually plan extra cure time before doors are rehung in winter.",
    ],
    costFactors: [
      "Number of doors, drawers and cabinet boxes",
      "Spraying versus brushing and on-site versus shop work",
      "Repairs, filling grain and changing hardware locations",
      "Number of colors (for example, a different island color)",
    ],
    faqs: [
      { q: "Is painting cabinets cheaper than replacing them?", a: "Usually by a wide margin, because the boxes, counters and plumbing stay in place. Replacement makes more sense when the boxes are damaged or the layout needs to change." },
      { q: "How long will my kitchen be out of service?", a: "Many projects take about one to two weeks including cure time, depending on the number of doors and whether doors are finished off-site." },
      { q: "Will painted cabinets chip?", a: "Durability depends on prep and on using a cabinet-grade enamel with enough cure time. Ask the contractor which primer and topcoat they use." },
    ],
    related: ["interior-painting", "color-consultation", "wallpaper-removal"],
    season: "year-round",
  },
  {
    slug: "commercial-painting",
    name: "Commercial Painting",
    shortName: "Commercial",
    noun: "commercial painting",
    icon: "building",
    metaSummary: "Offices, retail, restaurants and multi-family buildings painted by local commercial painters.",
    headline: "Commercial painting with minimal downtime",
    intro: [
      "Commercial painting is scheduled around your business: nights, weekends and phased work so customers and tenants are not disrupted. It also involves more paperwork, from certificates of insurance to property-manager approvals.",
      "Tell us about the property and timeline and we match you with independent commercial painting contractors who work in your area.",
    ],
    included: [
      "Offices, retail, restaurants, medical and multi-family buildings",
      "After-hours and phased scheduling",
      "Interior and exterior repaints, stairwells and common areas",
      "Line striping, doors, railings and metal surfaces",
      "Durable, washable and low-odor coatings",
      "Coordination with property managers",
    ],
    signs: [
      "Scuffed common areas and high-traffic corridors",
      "Faded storefront or brand colors",
      "Turnover or move-in preparation in rental units",
      "Rust on railings, doors or metal trim",
    ],
    massachusetts: [
      "Multi-family and mixed-use buildings in Massachusetts often predate 1978, so lead-safe work rules apply to many common-area repaints.",
      "Exterior commercial work follows the same weather window as residential painting, so book spring and summer projects early.",
    ],
    costFactors: [
      "Square footage, ceiling heights and lift requirements",
      "After-hours or phased scheduling",
      "Surface types (drywall, block, metal, concrete)",
      "Insurance and documentation requirements",
    ],
    faqs: [
      { q: "Can the work be done after hours?", a: "Many commercial painters offer nights, weekends and phased schedules. Mention your constraints in the form so the contractor can plan for them." },
      { q: "Do commercial painters provide a certificate of insurance?", a: "Reputable contractors provide one on request, and most property managers require it before work begins." },
      { q: "Do you handle multi-family buildings?", a: "Yes. Common areas, hallways, stairwells and unit turnovers are typical commercial requests." },
    ],
    related: ["exterior-painting", "power-washing", "drywall-repair"],
    season: "year-round",
  },
  {
    slug: "deck-staining",
    name: "Deck Staining",
    shortName: "Deck",
    noun: "deck staining",
    icon: "deck",
    metaSummary: "Decks, porches and fences cleaned, sanded and stained by local deck pros.",
    headline: "Deck staining and sealing for Massachusetts summers",
    intro: [
      "Decks take the hardest beating of any painted or stained surface: direct sun, standing snow and foot traffic. Stain only lasts when the wood is cleaned, brightened and dry before it goes on.",
      "Share your deck size and current finish and we connect you with an independent deck staining contractor in your town.",
    ],
    included: [
      "Washing, stripping old stain and brightening the wood",
      "Sanding rough or raised grain",
      "Resetting popped nails and noting loose boards",
      "Transparent, semi-transparent or solid stains",
      "Railings, stairs, lattice and fences",
      "Protection of siding and plants",
    ],
    signs: [
      "Gray, weathered boards",
      "Water soaks in instead of beading",
      "Peeling solid stain or paint on walking surfaces",
      "Mildew in shaded areas",
    ],
    massachusetts: [
      "Deck work in Massachusetts is a warm-season job: the wood has to be dry and the weather stable for the stain to cure.",
      "Winter snow and ice sit on decks for months, so horizontal boards usually need recoating more often than railings.",
    ],
    costFactors: [
      "Deck size, railings and stairs",
      "Stripping an old solid stain versus a maintenance coat",
      "Wood type (pressure-treated, cedar, composite cleaning only)",
      "Stain type and number of coats",
    ],
    faqs: [
      { q: "How often should a deck be stained?", a: "Horizontal surfaces often need a maintenance coat every couple of years in New England, while railings last longer. Exposure to sun and snow makes the biggest difference." },
      { q: "Can composite decks be stained?", a: "Most composite decking is designed to be cleaned rather than stained. A contractor can wash it and advise on the manufacturer's recommendations." },
      { q: "When can we use the deck again?", a: "Usually after the stain is dry to the touch, but furniture should wait until it fully cures, often a couple of days." },
    ],
    related: ["power-washing", "exterior-painting", "color-consultation"],
    season: "warm-months",
  },
  {
    slug: "drywall-repair",
    name: "Drywall Repair",
    shortName: "Drywall",
    noun: "drywall repair",
    icon: "wall",
    metaSummary: "Holes, cracks, water damage and plaster repaired and repainted by local pros.",
    headline: "Drywall and plaster repair before you paint",
    intro: [
      "Paint shows every flaw underneath it. Holes, popped nails, cracked seams and old water damage need to be repaired and primed properly, or they reappear within a season.",
      "Describe the damage and we match you with an independent painting contractor near you who handles drywall and plaster repair along with the finish painting.",
    ],
    included: [
      "Patching holes from doorknobs, anchors and wiring",
      "Re-taping and mudding cracked seams",
      "Setting popped nails and screws",
      "Water-stain repair and stain-blocking primer",
      "Texture matching on walls and ceilings",
      "Plaster crack repair in older homes",
    ],
    signs: [
      "Cracks running from door and window corners",
      "Nail pops after a winter",
      "Stains or soft spots after a leak",
      "Visible patches showing through old paint",
    ],
    massachusetts: [
      "Many older Massachusetts homes have plaster and lath walls, which need different repair methods than modern drywall.",
      "Seasonal humidity swings cause seams and corners to crack. Flexible repair methods last longer than filler alone.",
    ],
    costFactors: [
      "Number and size of repairs",
      "Ceiling versus wall work",
      "Texture or plaster matching",
      "Whether the whole wall is repainted afterwards",
    ],
    faqs: [
      { q: "Can you just paint over cracks?", a: "Paint alone will not hold a crack together. Seams usually need to be re-taped or reinforced before painting so the crack does not return." },
      { q: "Should the leak be fixed first?", a: "Yes. Any active leak must be repaired and the area allowed to dry before drywall repair and painting." },
      { q: "Can you match my ceiling texture?", a: "Most texture can be matched closely. Repainting the full ceiling plane usually gives the most invisible result." },
    ],
    related: ["interior-painting", "wallpaper-removal", "commercial-painting"],
    season: "year-round",
  },
  {
    slug: "power-washing",
    name: "Power Washing",
    shortName: "Power Washing",
    noun: "power washing",
    icon: "spray",
    metaSummary: "Siding, decks, walkways and fences cleaned by local power washing pros.",
    headline: "Power washing and soft washing for homes and buildings",
    intro: [
      "Washing removes mildew, algae, pollen and dirt that shorten the life of paint and make a home look older than it is. Siding and roofs usually need low-pressure soft washing, while concrete can take more pressure.",
      "Tell us what needs cleaning and we connect you with an independent washing contractor in your town.",
    ],
    included: [
      "Soft washing vinyl, wood and fiber-cement siding",
      "Deck, fence and patio cleaning",
      "Walkways, driveways and concrete",
      "Mildew and algae treatment",
      "Pre-paint washing before exterior painting",
      "Gutter face brightening",
    ],
    signs: [
      "Green or black streaks on the north side",
      "Slippery walkways and steps",
      "Dull, dirty siding",
      "Preparing for exterior painting or staining",
    ],
    massachusetts: [
      "Shaded, wooded lots across Massachusetts grow mildew and algae quickly, especially on north-facing walls.",
      "Washing is a warm-season service: water and cleaning solutions should not be applied in freezing temperatures.",
    ],
    costFactors: [
      "Size of the home or surfaces",
      "Soft washing versus pressure washing",
      "Severity of mildew and stains",
      "Access, height and number of stories",
    ],
    faqs: [
      { q: "Will power washing damage my siding?", a: "High pressure can damage wood and force water behind siding. That is why siding is usually soft washed at low pressure with cleaning solution." },
      { q: "Should I wash before painting?", a: "Yes. Paint bonds poorly to dirt and mildew, so exterior painters typically wash and let the surface dry before prep work." },
      { q: "How often should a house be washed?", a: "Many homeowners wash every year or two, more often on shaded lots with heavy mildew." },
    ],
    related: ["exterior-painting", "deck-staining", "commercial-painting"],
    season: "warm-months",
  },
  {
    slug: "wallpaper-removal",
    name: "Wallpaper Removal",
    shortName: "Wallpaper",
    noun: "wallpaper removal",
    icon: "paper",
    metaSummary: "Old wallpaper removed and walls repaired and painted by local pros.",
    headline: "Wallpaper removal and wall prep for a clean paint finish",
    intro: [
      "Removing wallpaper is mostly about protecting the wall underneath. Old adhesive left behind causes paint to crack and bubble, and torn drywall paper needs to be sealed before it is skimmed and painted.",
      "Describe the rooms and we match you with an independent contractor near you who removes wallpaper and prepares the walls for paint.",
    ],
    included: [
      "Scoring, steaming and stripping wallpaper",
      "Adhesive removal and washing",
      "Sealing torn drywall face paper",
      "Skim coating and patching",
      "Primer suited for post-wallpaper walls",
      "Painting the finished walls",
    ],
    signs: [
      "Peeling seams or bubbling wallpaper",
      "Dated patterns before a sale or remodel",
      "Paint applied over wallpaper that is now cracking",
      "Multiple layers of old paper",
    ],
    massachusetts: [
      "Older homes often have several layers of wallpaper, sometimes applied directly over plaster, which takes more care to remove.",
      "In pre-1978 homes, painted-over wallpaper can contain lead paint, so removal should follow lead-safe practices.",
    ],
    costFactors: [
      "Number of layers and type of paper",
      "Wall material (drywall versus plaster)",
      "Amount of skim coating needed",
      "Whether painting is included",
    ],
    faqs: [
      { q: "Can you paint over wallpaper?", a: "It is possible but rarely recommended. Seams and adhesive often show through or bubble. Removal and proper priming gives a longer-lasting finish." },
      { q: "How long does wallpaper removal take?", a: "Often a day or two per room, plus drying time for skim coats before painting." },
      { q: "What if the drywall gets damaged?", a: "Torn face paper is sealed with a special primer and skimmed smooth before painting. This is a normal part of the job." },
    ],
    related: ["interior-painting", "drywall-repair", "color-consultation"],
    season: "year-round",
  },
  {
    slug: "color-consultation",
    name: "Color Consultation",
    shortName: "Color",
    noun: "color consultation",
    icon: "palette",
    metaSummary: "Paint color help for interiors and exteriors from local painting pros.",
    headline: "Choose paint colors with confidence",
    intro: [
      "Colors change with light, so a swatch that looks right in the store can look completely different on a north-facing wall or under warm bulbs. Testing large samples in place avoids expensive repaints.",
      "Tell us what you are painting and we connect you with an independent painting contractor near you who can help you test and choose colors as part of the estimate.",
    ],
    included: [
      "On-site review of lighting and fixed finishes",
      "Large sample swatches on the actual walls or siding",
      "Coordinated palettes for open floor plans",
      "Exterior schemes for body, trim and doors",
      "Sheen recommendations by room",
      "Guidance on historic district considerations",
    ],
    signs: [
      "Unsure how a color will look in your light",
      "Open floor plan with several connected rooms",
      "Exterior color change on a historic home",
      "Staging a home for sale",
    ],
    massachusetts: [
      "Some Massachusetts towns have historic districts where exterior color changes may require review. Check with your local historical commission before changing colors on a home in a district.",
      "Long winters mean less daylight, so many homeowners choose warmer interior colors than they would in sunnier climates.",
    ],
    costFactors: [
      "Number of rooms or exterior elements",
      "Number of sample colors tested",
      "Whether it is bundled with a painting estimate",
      "Historic district documentation",
    ],
    faqs: [
      { q: "Is color help included with a painting estimate?", a: "Many contractors include basic color guidance with the estimate. Ask when they contact you." },
      { q: "Do I need approval to change my exterior color?", a: "Only if your home is in a local historic district or an HOA. Check with your town before ordering paint." },
      { q: "How big should paint samples be?", a: "Larger samples, at least a couple of square feet, viewed at different times of day, give the most reliable result." },
    ],
    related: ["interior-painting", "exterior-painting", "cabinet-painting"],
    season: "year-round",
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);

// Legacy slug kept for 301 redirects only
export const LEGACY_SERVICE_SLUGS: Record<string, ServiceSlug> = {
  "cabinet-refinishing": "cabinet-painting",
};
