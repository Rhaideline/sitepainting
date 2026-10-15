import type { MetadataRoute } from "next";
import { cities } from "@/lib/cities";
import { services } from "@/lib/services";
import { blogArticles } from "@/lib/data";
import { absoluteUrl } from "@/lib/site";

// Bump when page content actually changes (lastmod must reflect real updates, not build time).
const CONTENT_UPDATED = new Date("2026-10-15");

export default function sitemap(): MetadataRoute.Sitemap {
  const entry = (path: string, priority: number, changeFrequency: "weekly" | "monthly" = "monthly", lastModified = CONTENT_UPDATED) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency,
    priority,
  });

  return [
    entry("/", 1, "weekly"),
    entry("/services", 0.9),
    entry("/service-areas", 0.9),
    entry("/how-it-works", 0.6),
    entry("/about", 0.5),
    entry("/contact", 0.8),
    entry("/blog", 0.7, "weekly"),
    entry("/magazine", 0.5),
    ...services.map((s) => entry(`/services/${s.slug}`, 0.9)),
    ...cities.map((c) => entry(`/${c.slug}`, 0.8)),
    ...cities.flatMap((c) => services.map((s) => entry(`/${c.slug}/${s.slug}`, 0.7))),
    ...blogArticles.map((a) => entry(`/blog/${a.slug}`, 0.6, "monthly", new Date(a.date))),
  ];
}
