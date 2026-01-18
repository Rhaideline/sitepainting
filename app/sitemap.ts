import { MetadataRoute } from "next";
import { cities, services } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://masspainter.pro";

  // Static pages (Next.js routes - no .html extension)
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];

  // Dynamic city/service pages (400+ pages)
  const dynamicPages: MetadataRoute.Sitemap = [];

  cities.forEach((city) => {
    services.forEach((service) => {
      dynamicPages.push({
        url: `${baseUrl}/ma/${city.slug}/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      });
    });
  });

  return [...staticPages, ...dynamicPages];
}
