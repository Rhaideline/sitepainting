import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import LeadForm from "@/components/LeadForm";
import { Breadcrumbs, HowSteps, FaqList } from "@/components/Blocks";
import { SITE } from "@/lib/site";
import { pageMetadata, breadcrumbLd } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "How It Works | Mass Painters Pro",
  description: "How Mass Painters Pro connects Massachusetts homeowners with independent local painters: one form, a local match and a written estimate.",
  path: "/how-it-works",
});

const faqs = [
  { q: "Is Mass Painters Pro a painting company?", a: "No. We are a free referral service. Independent painting contractors provide the estimate, sign the contract and do the work." },
  { q: "How much does it cost to use Mass Painters Pro?", a: "Nothing for homeowners and businesses. Requesting an estimate is free and there is no obligation to hire." },
  { q: "Who will contact me?", a: "An independent painting contractor who works in your area. They usually reach out by text or email to schedule a walkthrough." },
  { q: "What should I check before hiring?", a: "Ask for a written estimate, proof of insurance and the contractor's Massachusetts Home Improvement Contractor (HIC) registration. For homes built before 1978, also ask for their Lead-Safe Renovation Contractor license." },
  { q: "What happens to my information?", a: "Your request is shared only with the painting contractor matched to your project so they can contact you about the estimate." },
];

export default function HowItWorks() {
  const crumbs = [{ name: "Home", path: "/" }, { name: "How It Works", path: "/how-it-works" }];
  return (
    <>
      <JsonLd data={breadcrumbLd(crumbs)} />
      <Header currentPage="how" />
      <main id="main">
        <section className="bg-[#1C1F2E]">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <Breadcrumbs items={crumbs} />
            <h1 className="text-4xl font-black text-white md:text-5xl">How Mass Painters Pro works</h1>
            <p className="mt-6 max-w-2xl text-xl text-gray-300">One form connects you with an independent painter in your town. You get a written estimate and decide on your own terms.</p>
          </div>
        </section>
        <section className="py-16">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
            <div className="lg:col-span-2">
              <HowSteps />
              <h2 className="mt-12 text-2xl font-bold text-gray-900">Our role</h2>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">{SITE.disclosure}</p>
              <h2 className="mt-12 text-2xl font-bold text-gray-900">Questions</h2>
              <div className="mt-6"><FaqList faqs={faqs} /></div>
            </div>
            <aside id="estimate"><div className="lg:sticky lg:top-24"><LeadForm compact /></div></aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
