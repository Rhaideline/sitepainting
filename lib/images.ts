// ============================================
// IMAGE CATALOG - single place to swap stock photography.
// Rules:
//  - Only stock photos with a license that allows commercial use (Unsplash / Pexels).
//  - Never present stock photos as "our work" or as projects for a specific town.
//  - Every image has descriptive alt text and the photographer credit.
// TODO(unsplash): replace/extend these with curated Unsplash photos per service
//   once the Unsplash connector is authorized. Services with an empty list render
//   a branded gradient instead of a photo, so nothing ever breaks.
// ============================================

import type { ServiceSlug } from "./services";

export interface StockImage {
  src: string;
  alt: string;
  credit: string; // "Photo: Name / Pexels"
  width: number;
  height: number;
}

const pexels = (id: number, alt: string, credit: string): StockImage => ({
  src: `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1600`,
  alt,
  credit,
  width: 1600,
  height: 1067,
});

// Interiors already licensed through Pexels and used on the site.
const INTERIORS: StockImage[] = [
  pexels(1571460, "Bright living room with freshly painted neutral walls", "Photo: Pexels"),
  pexels(1457842, "Modern living room with soft gray painted walls", "Photo: Pexels"),
  pexels(1643383, "Open-plan living and dining area with white walls", "Photo: Pexels"),
  pexels(1648776, "Cozy living room with warm painted accent wall", "Photo: Pexels"),
  pexels(1571468, "Sunlit sitting area with light painted walls", "Photo: Pexels"),
  pexels(1571459, "Contemporary living space with clean painted finishes", "Photo: Pexels"),
  pexels(1571447, "Living room interior with crisp white trim", "Photo: Pexels"),
  pexels(1571463, "Calm bedroom-style interior with muted wall color", "Photo: Pexels"),
  pexels(1571452, "Kitchen and dining area with painted cabinetry", "Photo: Pexels"),
  pexels(1571458, "Living room with smooth painted walls and ceiling", "Photo: Pexels"),
  pexels(1571453, "Interior with coordinated paint colors", "Photo: Pexels"),
];

export const SERVICE_IMAGES: Record<ServiceSlug, StockImage[]> = {
  "interior-painting": INTERIORS.slice(0, 6),
  "cabinet-painting": [INTERIORS[8], INTERIORS[2]],
  "color-consultation": [INTERIORS[3], INTERIORS[10], INTERIORS[5]],
  "wallpaper-removal": [INTERIORS[6], INTERIORS[9]],
  "drywall-repair": [INTERIORS[9], INTERIORS[7]],
  "commercial-painting": [],
  "exterior-painting": [],
  "deck-staining": [],
  "power-washing": [],
};

export const HERO_IMAGE: StockImage | null = INTERIORS[0];

/** Stable pick so each city page shows a different photo of the same service. */
export function imageFor(service: ServiceSlug, seed: number): StockImage | null {
  const list = SERVICE_IMAGES[service];
  return list.length ? list[seed % list.length] : null;
}
