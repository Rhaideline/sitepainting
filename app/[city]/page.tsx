import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import JsonLd from "@/components/JsonLd";
import ServiceIcon from "@/components/ServiceIcon";
import { Breadcrumbs, CheckList, HowSteps, CtaBand } from "@/components/Blocks";
import { cities, getCity } from "@/lib/cities";
import { services } from "@/lib/services";
import { cityHubContent } from "@/lib/content";
import { pageMetadata, breadcrumbLd } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

type Params = { params: { city: string } };

export function generateMetadata({ params }: Params): Metadata {
  const city = getCity(params.city);
  if (!city) return pageMetadata({ title: "Page not found", description: "This page could not be found.", path: `/${params.city}`, noIndex: true });
  const c = cityHubContent(city);
  return pageMetadata({ title: c.title, description: c.description, path: `/${city.slug}` });
}

export default function CityHubPage({ params }: Params) {
  const city = getCity(params.city);
  if (!city) notFound();
  const c = cityHubContent(city);
  const crumbs = [
    { name: "Home", path: "/" },
    { name: `${city.name}, MA`, path: `/${city.slug}` },
  ];
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Painting services in ${city.name}, MA`,
    itemListElement: services.map((s, i) => ({ "@type": "ListItem", position: i + 1, name: `${s.name} in ${city.name}`, url: absoluteUrl(`/${city.slug}/${s.slug}`) })),
  };

  return (
    <>
      <JsonLd data={[breadcrumbLd(crumbs), itemList]} />
      <Header currentPage="areas" />
      <main id="main">
        <section className="bg-[#1C1F2E]">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <Breadcrumbs items={crumbs} />
            <h1 className="max-w-3xl text-4xl font-black leading-[1.1] text-white md:text-5xl">
              Painters in <span className="text-emerald-400">{city.name}, MA</span>
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-gray-300">{c.intro}</p>
            <a href="#estimate" className="mt-8 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-8 py-4 text-lg font-bold text-white shadow-xl shadow-emerald-500/30 transition hover:bg-emerald-400">
              Get a Free Estimate <ArrowRight size={20} />
            </a>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black text-gray-900">Painting services in {city.name}</h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/${city.slug}/${s.slug}`} className="group flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:border-emerald-200 hover:shadow-lg">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700"><ServiceIcon icon={s.icon} size={24} /></span>
                    <h3 className="mt-4 text-lg font-bold text-gray-900 group-hover:text-emerald-700">{s.name} in {city.name}</h3>
                    <p className="mt-2 flex-1 text-sm text-gray-600">{s.metaSummary}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-emerald-700">Learn more <ArrowRight size={14} /></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-gray-50 py-16">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-black text-gray-900">About painting in {city.name}</h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-600">{city.localFacts}</p>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                {city.name} has about {city.population.toLocaleString("en-US")} residents (2020 Census) in {city.county} County. Common home styles include {city.homeStyles.join(", ")}.
              </p>
              <h3 className="mt-10 text-2xl font-bold text-gray-900">What painters watch for in {city.name}</h3>
              <div className="mt-6"><CheckList items={city.challenges} /></div>
              <h3 className="mt-10 text-2xl font-bold text-gray-900">How it works</h3>
              <div className="mt-6"><HowSteps /></div>
              <h3 className="mt-10 text-2xl font-bold text-gray-900">Nearby towns we also cover</h3>
              <ul className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3">
                {c.nearby.map(({ city: n, miles }) => (
                  <li key={n.slug}>
                    <Link href={`/${n.slug}`} className="flex items-center justify-between gap-2 rounded-xl border border-gray-100 bg-white p-4 transition hover:border-emerald-200 hover:shadow">
                      <span className="flex items-center gap-2 font-medium text-gray-800"><MapPin size={14} className="text-emerald-500" />{n.name}</span>
                      <span className="text-xs text-gray-500">{miles} mi</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <aside id="estimate">
              <div className="lg:sticky lg:top-24">
                <LeadForm city={city.name} compact heading={`Free estimate in ${city.name}`} />
              </div>
            </aside>
          </div>
        </section>

        <CtaBand title={`Find a painter in ${city.name} today`} text="One short form, a local independent contractor and a written estimate. Free and no obligation." />
      </main>
      <Footer />
    </>
  );
}
