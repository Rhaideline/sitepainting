import Link from "next/link";
import { MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { Breadcrumbs, CtaBand } from "@/components/Blocks";
import { cities, citiesByRegion } from "@/lib/cities";
import { pageMetadata, breadcrumbLd } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Service Areas | 109 Massachusetts Towns | Mass Painters Pro",
  description: "Find a local painter in 109 Massachusetts towns across MetroWest, Central MA, the North Shore and South Shore. Free estimate.",
  path: "/service-areas",
});

export default function ServiceAreas() {
  const crumbs = [{ name: "Home", path: "/" }, { name: "Service Areas", path: "/service-areas" }];
  const regions = citiesByRegion();
  return (
    <>
      <JsonLd data={breadcrumbLd(crumbs)} />
      <Header currentPage="areas" />
      <main id="main">
        <section className="bg-[#1C1F2E]">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <Breadcrumbs items={crumbs} />
            <h1 className="text-4xl font-black text-white md:text-5xl">Painters in {cities.length} Massachusetts towns</h1>
            <p className="mt-6 max-w-2xl text-xl text-gray-300">Choose your town to see local painting services, nearby areas and a free estimate form.</p>
          </div>
        </section>
        <section className="py-16">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
            {regions.map(([region, list]) => (
              <div key={region}>
                <h2 className="text-xl font-black text-gray-900">{region}</h2>
                <p className="text-sm text-gray-500">{list.length} towns</p>
                <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2">
                  {list.map((c) => (
                    <li key={c.slug}>
                      <Link href={`/${c.slug}`} className="inline-flex items-center gap-1.5 text-gray-700 hover:text-emerald-700">
                        <MapPin size={13} className="text-emerald-500" /> {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
        <CtaBand title="Don't see your town?" text="We may still be able to match you with a painter nearby. Send a request and include your ZIP code." href="/contact" />
      </main>
      <Footer />
    </>
  );
}
