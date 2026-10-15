import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import JsonLd from "@/components/JsonLd";
import ServiceIcon from "@/components/ServiceIcon";
import { Breadcrumbs, Visual, CheckList, HowSteps, CtaBand, FaqList } from "@/components/Blocks";
import { cities, getCity } from "@/lib/cities";
import { services, getService } from "@/lib/services";
import { cityServiceContent, hash } from "@/lib/content";
import { imageFor } from "@/lib/images";
import { pageMetadata, breadcrumbLd, serviceLd } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return cities.flatMap((c) => services.map((s) => ({ city: c.slug, service: s.slug })));
}

type Params = { params: { city: string; service: string } };

export function generateMetadata({ params }: Params): Metadata {
  const city = getCity(params.city);
  const service = getService(params.service);
  if (!city || !service) return pageMetadata({ title: "Page not found", description: "This page could not be found.", path: `/${params.city}/${params.service}`, noIndex: true });
  const c = cityServiceContent(city, service);
  const img = imageFor(service.slug, hash(city.slug));
  return pageMetadata({ title: c.title, description: c.description, path: `/${city.slug}/${service.slug}`, image: img?.src });
}

export default function CityServicePage({ params }: Params) {
  const city = getCity(params.city);
  const service = getService(params.service);
  if (!city || !service) notFound();

  const c = cityServiceContent(city, service);
  const img = imageFor(service.slug, hash(city.slug));
  const path = `/${city.slug}/${service.slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: `${city.name}, MA`, path: `/${city.slug}` },
    { name: service.name, path },
  ];
  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <JsonLd data={[serviceLd(service, path, city), breadcrumbLd(crumbs)]} />
      <Header currentPage="services" />
      <main id="main">
        <section className="relative overflow-hidden bg-[#1C1F2E]">
          <div className="absolute right-0 top-0 h-[520px] w-[520px] rounded-full bg-emerald-500/10 blur-3xl" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-20">
            <div>
              <Breadcrumbs items={crumbs} />
              <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-400">
                <ServiceIcon icon={service.icon} size={16} /> {city.county} County
              </span>
              <h1 className="text-4xl font-black leading-[1.1] text-white md:text-5xl">
                {service.name} in <span className="text-emerald-400">{city.name}, MA</span>
              </h1>
              <p className="mt-6 text-xl leading-relaxed text-gray-300">{c.subhead}</p>
              <a href="#estimate" className="mt-8 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-8 py-4 text-lg font-bold text-white shadow-xl shadow-emerald-500/30 transition hover:bg-emerald-400">
                Get a Free Estimate <ArrowRight size={20} />
              </a>
            </div>
            <Visual image={img} service={service} priority className="hidden lg:block" />
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
            <article className="lg:col-span-2">
              <h2 className="text-3xl font-black text-gray-900">{service.headline}</h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-600">{c.intro}</p>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">{c.local}</p>

              <h2 className="mt-12 text-2xl font-bold text-gray-900">{c.challengeLead}</h2>
              <div className="mt-6"><CheckList items={c.challenges} /></div>
              <p className="mt-6 rounded-2xl border border-amber-100 bg-amber-50 p-5 text-gray-700">{c.massachusetts}</p>

              <h2 className="mt-12 text-2xl font-bold text-gray-900">What {service.noun} usually includes</h2>
              <div className="mt-6"><CheckList items={c.included} columns={2} /></div>

              <h2 className="mt-12 text-2xl font-bold text-gray-900">Signs it is time for {service.noun}</h2>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-lg text-gray-600">
                {c.signs.map((s) => <li key={s}>{s}</li>)}
              </ul>

              <h2 className="mt-12 text-2xl font-bold text-gray-900">What affects the cost in {city.name}</h2>
              <p className="mt-4 text-lg text-gray-600">{c.costLead}</p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-lg text-gray-600">
                {c.costFactors.map((s) => <li key={s}>{s}</li>)}
              </ul>

              <h2 className="mt-12 text-2xl font-bold text-gray-900">How Mass Painters Pro works</h2>
              <div className="mt-6"><HowSteps /></div>

              <h2 className="mt-12 text-2xl font-bold text-gray-900">{service.name} questions from {city.name}</h2>
              <div className="mt-6"><FaqList faqs={c.faqs} /></div>
            </article>

            <aside id="estimate" className="lg:col-span-1">
              <div className="lg:sticky lg:top-24">
                <LeadForm city={city.name} service={service.slug} compact heading={`Free ${service.noun} estimate in ${city.name}`} />
              </div>
            </aside>
          </div>
        </section>

        <section className="bg-gray-50 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900">{service.name} near {city.name}</h2>
            <ul className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
              {c.nearby.map(({ city: n, miles }) => (
                <li key={n.slug}>
                  <Link href={`/${n.slug}/${service.slug}`} className="flex items-center justify-between gap-2 rounded-xl border border-gray-100 bg-white p-4 transition hover:border-emerald-200 hover:shadow">
                    <span className="flex items-center gap-2 font-medium text-gray-800"><MapPin size={14} className="text-emerald-500" />{n.name}</span>
                    <span className="text-xs text-gray-500">{miles} mi</span>
                  </Link>
                </li>
              ))}
            </ul>

            <h2 className="mt-14 text-2xl font-bold text-gray-900">Other painting services in {city.name}</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {others.map((s) => (
                <li key={s.slug}>
                  <Link href={`/${city.slug}/${s.slug}`} className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white p-4 transition hover:border-emerald-200 hover:shadow">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700"><ServiceIcon icon={s.icon} size={18} /></span>
                    <span className="font-semibold text-gray-800">{s.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-gray-600">
              See everything we cover on the <Link href={`/${city.slug}`} className="font-semibold text-emerald-700 hover:underline">{city.name} painters page</Link> or learn more about <Link href={`/services/${service.slug}`} className="font-semibold text-emerald-700 hover:underline">{service.noun} in Massachusetts</Link>.
            </p>
          </div>
        </section>

        <CtaBand title={`Ready for ${service.noun} in ${city.name}?`} text={c.closing} />
      </main>
      <Footer />
    </>
  );
}
