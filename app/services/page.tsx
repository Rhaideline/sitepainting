import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import ServiceIcon from "@/components/ServiceIcon";
import { Breadcrumbs, CtaBand } from "@/components/Blocks";
import { services } from "@/lib/services";
import { pageMetadata, breadcrumbLd } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Painting Services in Massachusetts | Mass Painters Pro",
  description: "Interior, exterior, cabinet, commercial, deck, drywall, power washing, wallpaper and color help. Get matched with a local painter. Free estimate.",
  path: "/services",
});

export default function ServicesIndex() {
  const crumbs = [{ name: "Home", path: "/" }, { name: "Services", path: "/services" }];
  return (
    <>
      <JsonLd data={breadcrumbLd(crumbs)} />
      <Header currentPage="services" />
      <main id="main">
        <section className="bg-[#1C1F2E]">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <Breadcrumbs items={crumbs} />
            <h1 className="text-4xl font-black text-white md:text-5xl">Painting services in Massachusetts</h1>
            <p className="mt-6 max-w-2xl text-xl text-gray-300">Nine services, one short form. We connect you with an independent local painter for a written estimate.</p>
          </div>
        </section>
        <section className="py-16">
          <ul className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="group flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition hover:border-emerald-200 hover:shadow-lg">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700"><ServiceIcon icon={s.icon} size={24} /></span>
                  <h2 className="mt-4 text-xl font-bold text-gray-900 group-hover:text-emerald-700">{s.name}</h2>
                  <p className="mt-2 flex-1 text-gray-600">{s.metaSummary}</p>
                  <span className="mt-4 inline-flex items-center gap-1 font-semibold text-emerald-700">Learn more <ArrowRight size={16} /></span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
        <CtaBand title="Not sure which service you need?" text="Describe the project in your own words and we will route it to the right local painter." href="/contact" />
      </main>
      <Footer />
    </>
  );
}
