import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import LeadForm from "@/components/LeadForm";
import { Breadcrumbs, HowSteps } from "@/components/Blocks";
import { pageMetadata, breadcrumbLd } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Get a Free Painting Estimate | Mass Painters Pro",
  description: "Request a free painting estimate anywhere in our 109 Massachusetts towns. One short form, a local independent painter, no obligation.",
  path: "/contact",
});

export default function ContactPage() {
  const crumbs = [{ name: "Home", path: "/" }, { name: "Free Estimate", path: "/contact" }];
  return (
    <>
      <JsonLd data={breadcrumbLd(crumbs)} />
      <Header currentPage="contact" />
      <main id="main" className="bg-gray-50">
        <section className="bg-[#1C1F2E]">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <Breadcrumbs items={crumbs} />
            <h1 className="text-4xl font-black text-white md:text-5xl">Get a free painting estimate</h1>
            <p className="mt-4 max-w-2xl text-xl text-gray-300">Tell us about your project. A local independent painter will contact you by text or email.</p>
          </div>
        </section>
        <section className="py-14">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
            <div id="estimate" className="lg:col-span-3"><LeadForm /></div>
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900">What happens next</h2>
              <div className="mt-6 [&_ol]:grid-cols-1"><HowSteps /></div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
