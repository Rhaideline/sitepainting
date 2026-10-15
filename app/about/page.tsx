import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { Breadcrumbs, CheckList, CtaBand } from "@/components/Blocks";
import { SITE } from "@/lib/site";
import { cities } from "@/lib/cities";
import { services } from "@/lib/services";
import { pageMetadata, breadcrumbLd } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About Mass Painters Pro",
  description: "Mass Painters Pro is a free referral service connecting Massachusetts homeowners and businesses with independent local painting contractors.",
  path: "/about",
});

export default function AboutPage() {
  const crumbs = [{ name: "Home", path: "/" }, { name: "About", path: "/about" }];
  return (
    <>
      <JsonLd data={breadcrumbLd(crumbs)} />
      <Header currentPage="about" />
      <main id="main">
        <section className="bg-[#1C1F2E]">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <Breadcrumbs items={crumbs} />
            <h1 className="text-4xl font-black text-white md:text-5xl">About {SITE.name}</h1>
            <p className="mt-6 max-w-3xl text-xl text-gray-300">{SITE.description}</p>
          </div>
        </section>
        <section className="py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900">Why we exist</h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Finding an available, qualified painter in Massachusetts often means days of calls and voicemails, especially during the short exterior season. {SITE.name} replaces that with one request: you describe the job, and we route it to an independent painter who works in your town.
            </p>
            <h2 className="mt-10 text-2xl font-bold text-gray-900">What we cover</h2>
            <p className="mt-4 text-lg text-gray-600">
              {services.length} services across <Link href="/service-areas" className="font-semibold text-emerald-700 hover:underline">{cities.length} Massachusetts towns</Link> in MetroWest, Central Massachusetts, the North Shore, the South Shore and the Route 2 corridor.
            </p>
            <h2 className="mt-10 text-2xl font-bold text-gray-900">Before you hire any painter</h2>
            <div className="mt-6">
              <CheckList items={[
                "Get a written estimate that lists prep, materials and number of coats",
                "Ask for proof of liability insurance",
                "Confirm the contractor's Massachusetts Home Improvement Contractor (HIC) registration",
                "For homes built before 1978, confirm the contractor's Lead-Safe Renovation Contractor license",
                "Agree on a start date, timeline and payment schedule in writing",
              ]} />
            </div>
            <h2 className="mt-10 text-2xl font-bold text-gray-900">Our role</h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">{SITE.disclosure}</p>
          </div>
        </section>
        <CtaBand title="Start with one request" text="Tell us about your project and get matched with a local painter." href="/contact" />
      </main>
      <Footer />
    </>
  );
}
