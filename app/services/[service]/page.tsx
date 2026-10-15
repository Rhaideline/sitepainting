import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import JsonLd from "@/components/JsonLd";
import ServiceIcon from "@/components/ServiceIcon";
import { Breadcrumbs, Visual, CheckList, HowSteps, CtaBand, FaqList } from "@/components/Blocks";
import { services, getService } from "@/lib/services";
import { citiesByRegion } from "@/lib/cities";
import { imageFor } from "@/lib/images";
import { pageMetadata, breadcrumbLd, serviceLd } from "@/lib/seo";

export const dynamicParams = false;
export function generateStaticParams() {
  return services.map((s) => ({ service: s.slug }));
}

type Params = { params: { service: string } };

export function generateMetadata({ params }: Params): Metadata {
  const s = getService(params.service);
  if (!s) return pageMetadata({ title: "Page not found", description: "This page could not be found.", path: `/services/${params.service}`, noIndex: true });
  const title = `${s.name} in Massachusetts | Mass Painters Pro`.length <= 60 ? `${s.name} in Massachusetts | Mass Painters Pro` : `${s.name} in Massachusetts`;
  return pageMetadata({ title, description: `${s.metaSummary} 109 Massachusetts towns. Free estimate.`.slice(0, 155), path: `/services/${s.slug}`, image: imageFor(s.slug, 0)?.src });
}

export default function ServicePage({ params }: Params) {
  const s = getService(params.service);
  if (!s) notFound();
  const path = `/services/${s.slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: s.name, path },
  ];
  const regions = citiesByRegion();

  return (
    <>
      <JsonLd data={[serviceLd(s, path, null), breadcrumbLd(crumbs)]} />
      <Header currentPage="services" />
      <main id="main">
        <section className="bg-[#1C1F2E]">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-20">
            <div>
              <Breadcrumbs items={crumbs} />
              <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-400">
                <ServiceIcon icon={s.icon} size={16} /> Massachusetts
              </span>
              <h1 className="text-4xl font-black leading-[1.1] text-white md:text-5xl">{s.name} in Massachusetts</h1>
              <p className="mt-6 text-xl leading-relaxed text-gray-300">{s.headline}. {s.metaSummary}</p>
              <a href="#estimate" className="mt-8 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-8 py-4 text-lg font-bold text-white shadow-xl shadow-emerald-500/30 transition hover:bg-emerald-400">
                Get a Free Estimate <ArrowRight size={20} />
              </a>
            </div>
            <Visual image={imageFor(s.slug, 0)} service={s} priority className="hidden lg:block" />
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
            <article className="lg:col-span-2">
              {s.intro.map((p) => <p key={p} className="mb-4 text-lg leading-relaxed text-gray-600">{p}</p>)}
              <h2 className="mt-10 text-2xl font-bold text-gray-900">What {s.noun} includes</h2>
              <div className="mt-6"><CheckList items={s.included} columns={2} /></div>
              <h2 className="mt-12 text-2xl font-bold text-gray-900">Signs you need {s.noun}</h2>
              <div className="mt-6"><CheckList items={s.signs} columns={2} /></div>
              <h2 className="mt-12 text-2xl font-bold text-gray-900">{s.name} in Massachusetts: what to know</h2>
              {s.massachusetts.map((p) => <p key={p} className="mt-4 text-lg leading-relaxed text-gray-600">{p}</p>)}
              <h2 className="mt-12 text-2xl font-bold text-gray-900">What affects the price</h2>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-lg text-gray-600">{s.costFactors.map((f) => <li key={f}>{f}</li>)}</ul>
              <h2 className="mt-12 text-2xl font-bold text-gray-900">How it works</h2>
              <div className="mt-6"><HowSteps /></div>
              <h2 className="mt-12 text-2xl font-bold text-gray-900">{s.name} FAQ</h2>
              <div className="mt-6"><FaqList faqs={s.faqs} /></div>
              <h2 className="mt-12 text-2xl font-bold text-gray-900">Related services</h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-3">
                {s.related.map((r) => {
                  const rs = getService(r)!;
                  return (
                    <li key={r}>
                      <Link href={`/services/${r}`} className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white p-4 hover:border-emerald-200 hover:shadow">
                        <ServiceIcon icon={rs.icon} size={18} className="text-emerald-600" />
                        <span className="font-semibold text-gray-800">{rs.name}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </article>
            <aside id="estimate">
              <div className="lg:sticky lg:top-24"><LeadForm service={s.slug} compact heading={`Free ${s.noun} estimate`} /></div>
            </aside>
          </div>
        </section>

        <section className="bg-gray-50 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black text-gray-900">{s.name} by town</h2>
            <div className="mt-8 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
              {regions.map(([region, list]) => (
                <div key={region}>
                  <h3 className="text-lg font-bold text-gray-900">{region}</h3>
                  <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1.5 text-sm">
                    {list.map((c) => (
                      <li key={c.slug}>
                        <Link href={`/${c.slug}/${s.slug}`} className="inline-flex items-center gap-1 text-gray-700 hover:text-emerald-700"><MapPin size={12} className="text-emerald-500" />{c.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        <CtaBand title={`Get matched for ${s.noun}`} text="Tell us about your project and a local independent painter will follow up with a written estimate." />
      </main>
      <Footer />
    </>
  );
}
