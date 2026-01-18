import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getCityBySlug,
  getServiceBySlug,
  getAllCityServiceCombinations,
  businessInfo,
  cities,
  services,
} from "@/lib/data";

// ============================================
// STATIC PARAMS - Generate all 400+ pages at build time
// ============================================
export async function generateStaticParams() {
  return getAllCityServiceCombinations();
}

// ============================================
// DYNAMIC METADATA - Unique SEO for each page
// ============================================
export async function generateMetadata({
  params,
}: {
  params: { city: string; service: string };
}): Promise<Metadata> {
  const city = getCityBySlug(params.city);
  const service = getServiceBySlug(params.service);

  if (!city || !service) {
    return { title: "Page Not Found" };
  }

  const title = `${service.name} in ${city.name}, MA — ${businessInfo.name} | Free Estimate`;
  const description = `Top ${service.name.toLowerCase()} in ${city.name}, MA. Local pros, fast scheduling, 5-year warranty. Serving ${city.county} County. Get a free estimate today!`;

  return {
    title,
    description,
    keywords: [
      `${service.name.toLowerCase()} ${city.name}`,
      `painters ${city.name} MA`,
      `${service.shortName.toLowerCase()} painting ${city.name}`,
      `house painters ${city.name}`,
      `painting contractors ${city.county} county`,
      `professional painters near ${city.name}`,
    ],
    openGraph: {
      title,
      description,
      url: `https://masspainterspro.com/ma/${city.slug}/${service.slug}`,
      siteName: businessInfo.name,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: `https://masspainterspro.com/ma/${city.slug}/${service.slug}`,
    },
  };
}

// ============================================
// JSON-LD SCHEMA GENERATOR
// ============================================
function generateSchema(city: any, service: any) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      // LocalBusiness Schema
      {
        "@type": "LocalBusiness",
        "@id": `https://masspainterspro.com/ma/${city.slug}/${service.slug}#business`,
        name: businessInfo.name,
        image: "https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/695a97fe6e700e1a414da216.svg",
        description: `Professional ${service.name.toLowerCase()} services in ${city.name}, MA`,
        url: `https://masspainterspro.com/ma/${city.slug}/${service.slug}`,
        telephone: businessInfo.phoneFormatted,
        email: businessInfo.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: businessInfo.address.street,
          addressLocality: businessInfo.address.city,
          addressRegion: businessInfo.address.state,
          postalCode: businessInfo.address.zip,
          addressCountry: "US",
        },
        areaServed: {
          "@type": "City",
          name: city.name,
          containedInPlace: {
            "@type": "State",
            name: "Massachusetts",
          },
        },
        priceRange: "$$",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: businessInfo.rating,
          reviewCount: businessInfo.reviewCount,
        },
      },
      // Service Schema
      {
        "@type": "Service",
        "@id": `https://masspainterspro.com/ma/${city.slug}/${service.slug}#service`,
        name: `${service.name} in ${city.name}, MA`,
        description: service.description,
        provider: {
          "@id": `https://masspainterspro.com/ma/${city.slug}/${service.slug}#business`,
        },
        areaServed: {
          "@type": "City",
          name: city.name,
        },
        serviceType: service.name,
      },
      // FAQPage Schema
      {
        "@type": "FAQPage",
        "@id": `https://masspainterspro.com/ma/${city.slug}/${service.slug}#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: `How much does ${service.name.toLowerCase()} cost in ${city.name}?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `${service.name} costs in ${city.name} vary based on project size, surface condition, and paint quality. Contact ${businessInfo.name} for a free, no-obligation estimate tailored to your specific needs.`,
            },
          },
          {
            "@type": "Question",
            name: `How long does ${service.name.toLowerCase()} take in ${city.name}?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `Project timelines depend on scope and preparation needs. Most ${service.shortName.toLowerCase()} projects in ${city.name} are completed within 2-5 days. We'll provide a detailed timeline during your free consultation.`,
            },
          },
          {
            "@type": "Question",
            name: `Do you offer a warranty for ${service.name.toLowerCase()} in ${city.name}?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `Yes! ${businessInfo.name} offers a comprehensive 5-year warranty on all ${service.name.toLowerCase()} projects in ${city.name} and throughout ${city.county} County.`,
            },
          },
        ],
      },
    ],
  };
}

// ============================================
// PAGE COMPONENT
// ============================================
export default function CityServicePage({
  params,
}: {
  params: { city: string; service: string };
}) {
  const city = getCityBySlug(params.city);
  const service = getServiceBySlug(params.service);

  if (!city || !service) {
    notFound();
  }

  const schema = generateSchema(city, service);

  // Get nearby cities for internal linking
  const nearbyCities = cities
    .filter((c) => c.county === city.county && c.slug !== city.slug)
    .slice(0, 6);

  // Get other services for internal linking
  const otherServices = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="min-h-screen bg-white">
        {/* TOP BAR */}
        <div className="bg-[#1C1F2E] text-white py-2 text-sm">
          <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
            <a href={`tel:${businessInfo.phoneFormatted}`} className="hover:text-[#00B894]">
              {businessInfo.phone}
            </a>
            <span>Serving {city.name}, MA & {city.county} County</span>
          </div>
        </div>

        {/* HEADER */}
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-[#1C1F2E]">
              {businessInfo.name}
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link href="/#services" className="hover:text-[#00B894]">Services</Link>
              <Link href="/#about" className="hover:text-[#00B894]">About</Link>
              <Link href="/#contact" className="hover:text-[#00B894]">Contact</Link>
            </nav>
            <a
              href={`tel:${businessInfo.phoneFormatted}`}
              className="bg-[#00B894] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#00a085] transition"
            >
              Free Estimate
            </a>
          </div>
        </header>

        {/* HERO SECTION */}
        <section className="bg-gradient-to-br from-[#1C1F2E] to-[#2a2d3e] text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="max-w-3xl">
              {/* Breadcrumb */}
              <nav className="text-sm text-gray-400 mb-4">
                <Link href="/" className="hover:text-white">Home</Link>
                {" / "}
                <Link href="/ma" className="hover:text-white">Massachusetts</Link>
                {" / "}
                <Link href={`/ma/${city.slug}`} className="hover:text-white">{city.name}</Link>
                {" / "}
                <span className="text-[#00B894]">{service.name}</span>
              </nav>

              {/* H1 - Primary SEO keyword */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {service.name} in{" "}
                <span className="text-[#00B894]">{city.name}, MA</span>
              </h1>

              <p className="text-xl text-gray-300 mb-8">
                Professional {service.name.toLowerCase()} services for homes and businesses in {city.name}
                and throughout {city.county} County. {businessInfo.yearsInBusiness}+ years of experience,
                {businessInfo.projectsCompleted.toLocaleString()}+ projects completed.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <span className="bg-white/10 px-4 py-2 rounded-full text-sm">✓ Licensed & Insured</span>
                <span className="bg-white/10 px-4 py-2 rounded-full text-sm">✓ 5-Year Warranty</span>
                <span className="bg-white/10 px-4 py-2 rounded-full text-sm">✓ Free Estimates</span>
                <span className="bg-white/10 px-4 py-2 rounded-full text-sm">✓ {businessInfo.rating}★ Rating</span>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#quote"
                  className="bg-[#00B894] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#00a085] transition"
                >
                  Get Your Free Estimate →
                </a>
                <a
                  href={`tel:${businessInfo.phoneFormatted}`}
                  className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition"
                >
                  Call {businessInfo.phone}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                {/* Introduction */}
                <h2 className="text-3xl font-bold text-[#1C1F2E] mb-6">
                  Professional {service.name} Services in {city.name}
                </h2>
                <p className="text-[#6B7175] mb-6 text-lg leading-relaxed">
                  Looking for reliable {service.name.toLowerCase()} in {city.name}, Massachusetts?
                  {businessInfo.name} is {city.county} County's trusted painting contractor,
                  serving homeowners and businesses with exceptional craftsmanship since 2009.
                </p>
                <p className="text-[#6B7175] mb-8 text-lg leading-relaxed">
                  Our team of experienced painters understands the unique challenges of New England
                  properties. From historic homes to modern construction, we deliver {service.name.toLowerCase()}
                  that protects your investment and enhances your property's value.
                </p>

                {/* Benefits */}
                <h3 className="text-2xl font-bold text-[#1C1F2E] mb-4">
                  Why Choose Our {service.shortName} Painting in {city.name}?
                </h3>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {service.benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg"
                    >
                      <span className="text-[#00B894] text-xl">✓</span>
                      <span className="text-[#1C1F2E] font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Process */}
                <h3 className="text-2xl font-bold text-[#1C1F2E] mb-4">
                  Our {service.shortName} Painting Process
                </h3>
                <div className="space-y-4 mb-8">
                  {service.process.map((step, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <span className="w-10 h-10 bg-[#00B894] text-white rounded-full flex items-center justify-center font-bold">
                        {index + 1}
                      </span>
                      <span className="text-[#1C1F2E] text-lg">{step}</span>
                    </div>
                  ))}
                </div>

                {/* Local Content */}
                <h3 className="text-2xl font-bold text-[#1C1F2E] mb-4">
                  Serving {city.name} and {city.county} County
                </h3>
                <p className="text-[#6B7175] mb-6 text-lg leading-relaxed">
                  As a local {city.county} County painting company, we understand the specific needs
                  of {city.name} properties. Whether you own a colonial in the historic district
                  or a contemporary home in a newer development, our painters deliver results
                  that exceed expectations.
                </p>
                <p className="text-[#6B7175] mb-8 text-lg leading-relaxed">
                  With a population of {city.population.toLocaleString()}, {city.name} is home to
                  diverse architectural styles that require specialized painting expertise.
                  Our team is trained in the latest techniques and uses premium materials
                  suited for the Massachusetts climate.
                </p>

                {/* FAQ Section */}
                <h3 className="text-2xl font-bold text-[#1C1F2E] mb-4">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-4 mb-8">
                  <details className="bg-gray-50 rounded-lg p-4">
                    <summary className="font-semibold text-[#1C1F2E] cursor-pointer">
                      How much does {service.name.toLowerCase()} cost in {city.name}?
                    </summary>
                    <p className="mt-3 text-[#6B7175]">
                      Costs vary based on project size, surface condition, and paint quality.
                      Contact us for a free, no-obligation estimate tailored to your specific needs.
                    </p>
                  </details>
                  <details className="bg-gray-50 rounded-lg p-4">
                    <summary className="font-semibold text-[#1C1F2E] cursor-pointer">
                      How long does {service.name.toLowerCase()} take?
                    </summary>
                    <p className="mt-3 text-[#6B7175]">
                      Most {service.shortName.toLowerCase()} projects in {city.name} are completed
                      within 2-5 days. We'll provide a detailed timeline during your consultation.
                    </p>
                  </details>
                  <details className="bg-gray-50 rounded-lg p-4">
                    <summary className="font-semibold text-[#1C1F2E] cursor-pointer">
                      Do you offer a warranty?
                    </summary>
                    <p className="mt-3 text-[#6B7175]">
                      Yes! We offer a comprehensive 5-year warranty on all {service.name.toLowerCase()}
                      projects in {city.name} and throughout {city.county} County.
                    </p>
                  </details>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                {/* Quote Form */}
                <div id="quote" className="bg-[#1C1F2E] text-white p-6 rounded-xl mb-8 sticky top-24">
                  <h3 className="text-xl font-bold mb-4">
                    Get Your Free Estimate
                  </h3>
                  <p className="text-gray-300 mb-6 text-sm">
                    Request a free quote for {service.name.toLowerCase()} in {city.name}
                  </p>
                  <form className="space-y-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400"
                    />
                    <select className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white">
                      <option value="">Select Service</option>
                      {services.map((s) => (
                        <option key={s.slug} value={s.slug} selected={s.slug === service.slug}>
                          {s.name}
                        </option>
                      ))}
                    </select>
                    <textarea
                      placeholder="Project Details"
                      rows={3}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400"
                    />
                    <button
                      type="submit"
                      className="w-full bg-[#00B894] text-white py-4 rounded-lg font-bold hover:bg-[#00a085] transition"
                    >
                      Get Free Quote →
                    </button>
                  </form>
                  <p className="text-xs text-gray-400 mt-4 text-center">
                    Or call us: {businessInfo.phone}
                  </p>
                </div>

                {/* Trust Signals */}
                <div className="bg-gray-50 p-6 rounded-xl mb-8">
                  <h4 className="font-bold text-[#1C1F2E] mb-4">Why Choose Us</h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="text-[#00B894]">✓</span>
                      {businessInfo.yearsInBusiness}+ Years Experience
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#00B894]">✓</span>
                      {businessInfo.projectsCompleted.toLocaleString()}+ Projects Completed
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#00B894]">✓</span>
                      {businessInfo.rating}★ Google Rating ({businessInfo.reviewCount}+ reviews)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#00B894]">✓</span>
                      Licensed & Fully Insured
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#00B894]">✓</span>
                      5-Year Workmanship Warranty
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INTERNAL LINKING - Other Services */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-[#1C1F2E] mb-6">
              Other Services in {city.name}, MA
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {otherServices.map((s) => (
                <Link
                  key={s.slug}
                  href={`/ma/${city.slug}/${s.slug}`}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100"
                >
                  <h3 className="font-bold text-[#1C1F2E] mb-2">{s.name}</h3>
                  <p className="text-sm text-[#6B7175] mb-3">{s.description}</p>
                  <span className="text-[#00B894] font-medium text-sm">
                    Learn More →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* INTERNAL LINKING - Nearby Cities */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-[#1C1F2E] mb-6">
              {service.name} in Nearby {city.county} County Cities
            </h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
              {nearbyCities.map((c) => (
                <Link
                  key={c.slug}
                  href={`/ma/${c.slug}/${service.slug}`}
                  className="bg-gray-50 p-4 rounded-lg text-center hover:bg-[#00B894] hover:text-white transition group"
                >
                  <span className="font-medium group-hover:text-white text-[#1C1F2E]">
                    {c.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-16 bg-[#1C1F2E] text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready for {service.name} in {city.name}?
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Get a free, no-obligation estimate from {city.county} County's trusted painters.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#quote"
                className="bg-[#00B894] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#00a085] transition"
              >
                Get Free Estimate
              </a>
              <a
                href={`tel:${businessInfo.phoneFormatted}`}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-[#1C1F2E] transition"
              >
                Call {businessInfo.phone}
              </a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-[#0f1118] text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-4">{businessInfo.name}</h4>
                <p className="text-gray-400 text-sm mb-4">
                  {businessInfo.address.full}
                </p>
                <p className="text-gray-400 text-sm">
                  {businessInfo.phone}<br />
                  {businessInfo.email}
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-4">Services</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  {services.map((s) => (
                    <li key={s.slug}>
                      <Link href={`/ma/${city.slug}/${s.slug}`} className="hover:text-white">
                        {s.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4">Service Areas</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  {cities.slice(0, 6).map((c) => (
                    <li key={c.slug}>
                      <Link href={`/ma/${c.slug}/${service.slug}`} className="hover:text-white">
                        {c.name}, MA
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4">Hours</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Mon-Fri: {businessInfo.hours.weekdays}</li>
                  <li>Saturday: {businessInfo.hours.saturday}</li>
                  <li>Sunday: {businessInfo.hours.sunday}</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
              © {new Date().getFullYear()} {businessInfo.name}. All rights reserved.
              <br />
              Serving {city.name}, {city.county} County, and all of Massachusetts.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
