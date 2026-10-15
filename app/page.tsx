import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, ClipboardList, Users, FileText } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import JsonLd from "@/components/JsonLd";
import ServiceIcon from "@/components/ServiceIcon";
import ColorVisualizer from "@/components/ColorVisualizer";
import { HowSteps, FaqList, CtaBand } from "@/components/Blocks";
import { services } from "@/lib/services";
import { cities, citiesByRegion } from "@/lib/cities";
import { HERO_IMAGE } from "@/lib/images";
import { SITE } from "@/lib/site";
import { pageMetadata, faqLd } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Mass Painters Pro | Find a Local Painter in Massachusetts",
  description: "Interior, exterior, cabinet and commercial painting in 109 Massachusetts towns. One form matches you with a local painter. Free estimate.",
  path: "/",
  image: HERO_IMAGE?.src,
});

const faqs = [
  { q: "How does Mass Painters Pro work?", a: "You fill out one short form with your town, service and project details. We pass it to an independent painting contractor who works in your area, and they contact you to provide a written estimate." },
  { q: "Is it free?", a: "Yes. Requesting an estimate is free for homeowners and businesses, and there is no obligation to hire the contractor." },
  { q: "Do you do the painting yourselves?", a: "No. Mass Painters Pro is a referral service. The estimate, contract and work are provided by independent local painting contractors." },
  { q: "Which towns do you cover?", a: `We cover ${cities.length} towns across MetroWest, Central Massachusetts, the North Shore, the South Shore and the Route 2 corridor. See the full list on our service areas page.` },
  { q: "When should I book exterior painting?", a: "Exterior painting in Massachusetts runs from late spring to mid-fall. Requesting estimates in winter or early spring gives you the best chance at your preferred dates." },
];

export default function HomePage() {
  const regions = citiesByRegion();
  return (
    <>
      <JsonLd data={faqLd(faqs)} />
      <Header currentPage="home" />
      <main id="main">
        <section className="relative overflow-hidden bg-[#1C1F2E]">
          {HERO_IMAGE && (
            <Image src={HERO_IMAGE.src} alt="" fill priority sizes="100vw" className="object-cover opacity-20" />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1C1F2E] via-[#1C1F2E]/90 to-[#1C1F2E]/60" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-400">
                <MapPin size={16} /> {cities.length} Massachusetts towns
              </span>
              <h1 className="mt-6 text-4xl font-black leading-[1.05] text-white md:text-6xl">
                Find a local <span className="text-emerald-400">painter</span> in Massachusetts
              </h1>
              <p className="mt-6 max-w-xl text-xl leading-relaxed text-gray-300">
                Interior, exterior, cabinets, decks and commercial painting. Describe your project once and an independent painter from your area follows up with a written estimate.
              </p>
              <ul className="mt-8 grid max-w-xl gap-4 sm:grid-cols-3">
                {[
                  { i: ClipboardList, t: "One short form" },
                  { i: Users, t: "Local independent pros" },
                  { i: FileText, t: "Free written estimate" },
                ].map(({ i: Icon, t }) => (
                  <li key={t} className="flex items-center gap-2 text-sm font-semibold text-white">
                    <Icon size={18} className="text-emerald-400" aria-hidden="true" /> {t}
                  </li>
                ))}
              </ul>
              {HERO_IMAGE && <p className="mt-8 text-[10px] text-gray-500">Background {HERO_IMAGE.credit.toLowerCase()}</p>}
            </div>
            <div id="estimate"><LeadForm heading="Get matched with a local painter" /></div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black text-gray-900 md:text-4xl">Painting services</h2>
            <p className="mt-3 max-w-2xl text-lg text-gray-600">Nine services, matched to independent painters who work in your town.</p>
            <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="group flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition hover:border-emerald-200 hover:shadow-lg">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700"><ServiceIcon icon={s.icon} size={24} /></span>
                    <h3 className="mt-4 text-xl font-bold text-gray-900 group-hover:text-emerald-700">{s.name}</h3>
                    <p className="mt-2 flex-1 text-gray-600">{s.metaSummary}</p>
                    <span className="mt-4 inline-flex items-center gap-1 font-semibold text-emerald-700">Learn more <ArrowRight size={16} /></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-gray-50 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black text-gray-900 md:text-4xl">How it works</h2>
            <div className="mt-10"><HowSteps /></div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black text-gray-900 md:text-4xl">Where we find painters</h2>
            <p className="mt-3 max-w-2xl text-lg text-gray-600">Choose your town to see local services and nearby areas.</p>
            <div className="mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
              {regions.map(([region, list]) => (
                <div key={region}>
                  <h3 className="text-lg font-bold text-gray-900">{region}</h3>
                  <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1.5 text-sm">
                    {list.map((c) => (
                      <li key={c.slug}><Link href={`/${c.slug}`} className="text-gray-700 hover:text-emerald-700">{c.name}</Link></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ColorVisualizer />

        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black text-gray-900 md:text-4xl">Frequently asked questions</h2>
            <div className="mt-8"><FaqList faqs={faqs} /></div>
            <p className="mt-8 text-sm text-gray-500">{SITE.disclosure}</p>
          </div>
        </section>

        <CtaBand title="Ready to get your project painted?" text="One short form, a local independent painter and a written estimate. Free and no obligation." />
      </main>
      <Footer />
    </>
  );
}
