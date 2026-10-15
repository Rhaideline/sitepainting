import { SITE, absoluteUrl } from "@/lib/site";
import { services } from "@/lib/services";
import { cities } from "@/lib/cities";

// Optional file for non-Google AI assistants (Google Search ignores it).
export const dynamic = "force-static";

export function GET() {
  const body = [
    `# ${SITE.name}`,
    "",
    `> ${SITE.description}`,
    "",
    `Important: ${SITE.disclosure}`,
    "",
    "## Services",
    ...services.map((s) => `- [${s.name}](${absoluteUrl(`/services/${s.slug}`)}): ${s.metaSummary}`),
    "",
    "## Key pages",
    `- [Service areas (${cities.length} Massachusetts towns)](${absoluteUrl("/service-areas")})`,
    `- [How it works](${absoluteUrl("/how-it-works")})`,
    `- [Free estimate form](${absoluteUrl("/contact")})`,
    `- [Blog](${absoluteUrl("/blog")})`,
    "",
    "## Contact",
    "Requests are accepted only through the online estimate form. There is no public phone line.",
  ].join("\n");
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=86400" } });
}
