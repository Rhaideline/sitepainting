import { Metadata } from "next";
import Image from "next/image";
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
import {
  Phone,
  MapPin,
  Shield,
  Star,
  CheckCircle2,
  ArrowRight,
  Clock,
  Award,
  Users,
  ChevronRight,
  Home,
  Paintbrush,
  Building2,
  PaintBucket,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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

  const title = `${service.name} in ${city.name}, MA | Mass Painters Pro | Free Estimate`;
  const description = `Top-rated ${service.name.toLowerCase()} in ${city.name}, Massachusetts. Local pros, fast scheduling, 5-year warranty. Serving ${city.county} County. Licensed, insured. Get your free estimate today!`;

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
      `best painters ${city.name} massachusetts`,
    ],
    openGraph: {
      title,
      description,
      url: `https://masspainter.pro/ma/${city.slug}/${service.slug}`,
      siteName: businessInfo.name,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: "https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/695a97fe6e700e1a414da216.svg",
          width: 1200,
          height: 630,
          alt: `${service.name} in ${city.name}, MA - Mass Painters Pro`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/695a97fe6e700e1a414da216.svg"],
    },
    alternates: {
      canonical: `https://masspainter.pro/ma/${city.slug}/${service.slug}`,
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
      {
        "@type": "LocalBusiness",
        "@id": `https://masspainter.pro/ma/${city.slug}/${service.slug}#business`,
        name: businessInfo.name,
        image: "https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/695a97fe6e700e1a414da216.svg",
        description: `Professional ${service.name.toLowerCase()} services in ${city.name}, MA`,
        url: `https://masspainter.pro/ma/${city.slug}/${service.slug}`,
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
      {
        "@type": "Service",
        "@id": `https://masspainter.pro/ma/${city.slug}/${service.slug}#service`,
        name: `${service.name} in ${city.name}, MA`,
        description: service.description,
        provider: {
          "@id": `https://masspainter.pro/ma/${city.slug}/${service.slug}#business`,
        },
        areaServed: {
          "@type": "City",
          name: city.name,
        },
        serviceType: service.name,
      },
      {
        "@type": "FAQPage",
        "@id": `https://masspainter.pro/ma/${city.slug}/${service.slug}#faq`,
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
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://masspainter.pro",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Massachusetts",
            item: "https://masspainter.pro/ma",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: city.name,
            item: `https://masspainter.pro/ma/${city.slug}`,
          },
          {
            "@type": "ListItem",
            position: 4,
            name: service.name,
            item: `https://masspainter.pro/ma/${city.slug}/${service.slug}`,
          },
        ],
      },
    ],
  };
}

// Service icon mapping
const serviceIcons: Record<string, any> = {
  "interior-painting": Home,
  "exterior-painting": Paintbrush,
  "cabinet-refinishing": PaintBucket,
  "commercial-painting": Building2,
};

// Service image mapping
const serviceImages: Record<string, string> = {
  "interior-painting": "https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/695ad1a7edb8a226dcd5b69f.png",
  "exterior-painting": "https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/695ad0ef3ccdd6a866021204.png",
  "cabinet-refinishing": "https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/695ad202edb8a223b9d5c8c9.png",
  "commercial-painting": "https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/695ad3283ccdd6426a027fb6.png",
};

// Service color mapping
const serviceColors: Record<string, { bg: string; text: string; gradient: string }> = {
  "interior-painting": { bg: "bg-blue-500/10", text: "text-blue-600", gradient: "from-blue-500 to-blue-600" },
  "exterior-painting": { bg: "bg-emerald-500/10", text: "text-emerald-600", gradient: "from-emerald-500 to-emerald-600" },
  "cabinet-refinishing": { bg: "bg-amber-500/10", text: "text-amber-600", gradient: "from-amber-500 to-orange-500" },
  "commercial-painting": { bg: "bg-purple-500/10", text: "text-purple-600", gradient: "from-purple-500 to-purple-600" },
};

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
  const ServiceIcon = serviceIcons[service.slug] || Paintbrush;
  const colors = serviceColors[service.slug] || serviceColors["interior-painting"];

  // Get nearby cities for internal linking
  const nearbyCities = cities
    .filter((c) => c.county === city.county && c.slug !== city.slug)
    .slice(0, 6);

  // Get other services for internal linking
  const otherServices = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="min-h-screen bg-white">
        <Header currentPage="services" />

        {/* Hero Section */}
        <section className="relative bg-[#1C1F2E] overflow-hidden">
          <div className="absolute inset-0">
            <div className={`absolute inset-0 bg-gradient-to-br from-[#1C1F2E] via-[#1C1F2E] to-emerald-900/20`} />
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight size={14} />
              <Link href={`/${service.slug}`} className="hover:text-white transition-colors">{service.name}</Link>
              <ChevronRight size={14} />
              <span className="text-emerald-400">{city.name}, MA</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                {/* Badge */}
                <div className={`inline-flex items-center gap-2 ${colors.bg} ${colors.text} rounded-full px-4 py-2 mb-6 text-sm font-medium`}>
                  <ServiceIcon size={16} />
                  <span>{service.name} in {city.name}</span>
                </div>

                {/* H1 */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6">
                  {service.name} in{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-500">
                    {city.name}, MA
                  </span>
                </h1>

                {/* Sub-headline */}
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Professional {service.name.toLowerCase()} services for homes and businesses in {city.name}
                  and throughout {city.county} County. {businessInfo.yearsInBusiness}+ years of experience,
                  {businessInfo.projectsCompleted.toLocaleString()}+ projects completed.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <a
                    href="#quote"
                    className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-4 px-8 rounded-full text-lg transition-all shadow-xl shadow-emerald-500/30 hover:scale-105"
                  >
                    Get Your Free Quote
                    <ArrowRight size={20} />
                  </a>
                  <a
                    href="tel:+17743415233"
                    className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-full text-lg transition-all border border-white/20"
                  >
                    <Phone size={20} />
                    Call Now
                  </a>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2">
                    <CheckCircle2 size={16} className="text-emerald-500" />
                    <span>Licensed & Insured</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2">
                    <CheckCircle2 size={16} className="text-emerald-500" />
                    <span>5-Year Warranty</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2">
                    <Star size={16} className="text-yellow-400" />
                    <span>{businessInfo.rating}★ Rating</span>
                  </div>
                </div>
              </div>

              {/* Hero Image */}
              <div className="hidden lg:block">
                <div className="relative">
                  <div className="rounded-3xl overflow-hidden shadow-2xl shadow-black/30">
                    <Image
                      src={serviceImages[service.slug] || serviceImages["interior-painting"]}
                      alt={`${service.name} services in ${city.name}, Massachusetts`}
                      width={600}
                      height={450}
                      className="w-full h-auto object-cover"
                      priority
                    />
                  </div>
                  {/* Stats Overlay */}
                  <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center">
                        <Star className="text-white" size={24} fill="white" />
                      </div>
                      <div>
                        <div className="text-2xl font-black text-gray-900">{businessInfo.rating}★</div>
                        <div className="text-sm text-gray-600">{businessInfo.reviewCount}+ Reviews</div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 bg-emerald-500 text-white rounded-2xl px-4 py-2 shadow-xl">
                    <div className="text-lg font-bold">{businessInfo.yearsInBusiness}+ Years</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Bar */}
        <section className="bg-gray-50 border-b border-gray-200 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: Shield, title: "Licensed & Insured", desc: "Full coverage" },
                { icon: Users, title: "Family Owned", desc: "Local business" },
                { icon: Award, title: "5-Year Warranty", desc: "Guaranteed" },
                { icon: Clock, title: "Same Week Start", desc: "Fast scheduling" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                    <item.icon className="text-emerald-600" size={20} />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">{item.title}</div>
                    <div className="text-gray-500 text-xs">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Content */}
              <div className="lg:col-span-2">
                {/* Introduction */}
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
                  Professional {service.name} Services in {city.name}
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Looking for reliable {service.name.toLowerCase()} in {city.name}, Massachusetts?
                  Mass Painters Pro is {city.county} County&apos;s trusted painting contractor,
                  serving homeowners and businesses with exceptional craftsmanship since 2009.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Our team of experienced painters understands the unique challenges of New England
                  properties. From historic homes to modern construction, we deliver {service.name.toLowerCase()}
                  that protects your investment and enhances your property&apos;s value.
                </p>

                {/* Benefits */}
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Why Choose Our {service.shortName} Painting in {city.name}?
                </h3>
                <div className="grid md:grid-cols-2 gap-4 mb-12">
                  {service.benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100"
                    >
                      <CheckCircle2 size={20} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Process */}
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Our {service.shortName} Painting Process
                </h3>
                <div className="space-y-4 mb-12">
                  {service.process.map((processStep, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <span className="text-gray-900 font-semibold">{processStep.step}</span>
                        <p className="text-gray-600 text-sm mt-1">{processStep.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Local Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Serving {city.name} and {city.county} County
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  As a local {city.county} County painting company, we understand the specific needs
                  of {city.name} properties. Whether you own a colonial in the historic district
                  or a contemporary home in a newer development, our painters deliver results
                  that exceed expectations.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  With a population of {city.population.toLocaleString()}, {city.name} is home to
                  diverse architectural styles that require specialized painting expertise.
                  Our team is trained in the latest techniques and uses premium materials
                  suited for the Massachusetts climate.
                </p>

                {/* City-Specific Challenges Section */}
                {city.paintingChallenges && city.paintingChallenges.length > 0 && (
                  <div className="bg-gradient-to-br from-gray-50 to-emerald-50/30 rounded-2xl p-6 mb-8 border border-gray-100">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Common Painting Challenges in {city.name}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {city.name} homes face unique painting challenges due to the local climate and common home styles. Here&apos;s what we commonly address:
                    </p>
                    <ul className="space-y-3">
                      {city.paintingChallenges.map((challenge, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 size={20} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Local Facts */}
                {city.localFacts && (
                  <div className="bg-blue-50/50 rounded-2xl p-6 mb-8 border border-blue-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      About {city.name}, Massachusetts
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {city.localFacts}
                    </p>
                    {city.avgHomeAge && (
                      <p className="text-gray-600 text-sm mt-4">
                        <strong>Average Home Age:</strong> {city.avgHomeAge}
                      </p>
                    )}
                    {city.commonHomeStyles && city.commonHomeStyles.length > 0 && (
                      <p className="text-gray-600 text-sm mt-2">
                        <strong>Common Home Styles:</strong> {city.commonHomeStyles.join(", ")}
                      </p>
                    )}
                  </div>
                )}

                {/* Service-Specific Problems & Solutions */}
                {service.commonProblems && service.commonProblems.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                      {service.shortName} Painting Problems We Solve in {city.name}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {service.commonProblems.map((problem, idx) => (
                        <div key={idx} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                              <span className="text-red-600 font-bold text-sm">!</span>
                            </div>
                            <div>
                              <p className="font-medium text-gray-900">{problem}</p>
                              {service.solutions && service.solutions[idx] && (
                                <p className="text-sm text-emerald-600 mt-1">
                                  ✓ {service.solutions[idx]}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* FAQ Section */}
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      q: `How much does ${service.name.toLowerCase()} cost in ${city.name}?`,
                      a: `Costs vary based on project size, surface condition, and paint quality. Contact us for a free, no-obligation estimate tailored to your specific needs.`,
                    },
                    {
                      q: `How long does ${service.name.toLowerCase()} take?`,
                      a: `Most ${service.shortName.toLowerCase()} projects in ${city.name} are completed within 2-5 days. We'll provide a detailed timeline during your consultation.`,
                    },
                    {
                      q: `Do you offer a warranty?`,
                      a: `Yes! We offer a comprehensive 5-year warranty on all ${service.name.toLowerCase()} projects in ${city.name} and throughout ${city.county} County.`,
                    },
                  ].map((faq, i) => (
                    <details key={i} className="bg-gray-50 rounded-xl border border-gray-100 group">
                      <summary className="font-semibold text-gray-900 cursor-pointer p-4 hover:bg-gray-100 rounded-xl transition-colors">
                        {faq.q}
                      </summary>
                      <p className="px-4 pb-4 text-gray-600">{faq.a}</p>
                    </details>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                {/* Quote Form */}
                <div id="quote" className="bg-white rounded-3xl shadow-2xl p-6 border border-gray-100 sticky top-24">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Get Your Free Estimate
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Request a free quote for {service.name.toLowerCase()} in {city.name}
                  </p>
                  <iframe
                    src="https://api.leadconnectorhq.com/widget/form/PAkCy4I8PqgdMLhpiPb0"
                    className="w-full h-[500px] border-none rounded-lg"
                    id="inline-PAkCy4I8PqgdMLhpiPb0"
                    data-layout="{'id':'INLINE'}"
                    data-trigger-type="alwaysShow"
                    data-trigger-value=""
                    data-activation-type="alwaysActivated"
                    data-activation-value=""
                    data-deactivation-type="neverDeactivate"
                    data-deactivation-value=""
                    data-form-name="Form 1"
                    data-height="500"
                    data-layout-iframe-id="inline-PAkCy4I8PqgdMLhpiPb0"
                    data-form-id="PAkCy4I8PqgdMLhpiPb0"
                    title="Free Estimate Form"
                  />
                  <p className="text-center text-gray-500 text-xs mt-3">
                    Or call us: <a href="tel:+17743415233" className="text-emerald-600 font-medium">{businessInfo.phone}</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other Services */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Other Services in {city.name}, MA
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {otherServices.map((s) => {
                const Icon = serviceIcons[s.slug] || Paintbrush;
                const sColors = serviceColors[s.slug] || serviceColors["interior-painting"];
                return (
                  <Link
                    key={s.slug}
                    href={`/ma/${city.slug}/${s.slug}`}
                    className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-emerald-200 transition-all group"
                  >
                    <div className={`w-12 h-12 ${sColors.bg} rounded-xl flex items-center justify-center mb-4`}>
                      <Icon className={sColors.text} size={24} />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                      {s.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">{s.description}</p>
                    <span className="inline-flex items-center gap-1 text-emerald-600 font-medium text-sm group-hover:gap-2 transition-all">
                      Learn More
                      <ChevronRight size={16} />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* City Map Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-600 rounded-full px-4 py-2 mb-4 text-sm font-medium">
                <MapPin size={16} />
                <span>Service Area</span>
              </div>
              <h2 className="text-3xl font-black text-gray-900 mb-4">
                {service.name} in {city.name}, MA
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We proudly serve {city.name} and surrounding {city.county} County communities with professional painting services.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Google Map */}
              <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 h-[400px]">
                <iframe
                  src={`https://www.google.com/maps?q=${encodeURIComponent(city.name + ', Massachusetts')}&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${city.name}, MA - Mass Painters Pro Service Area`}
                  className="w-full h-full"
                />
              </div>

              {/* Nearby Cities */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.name} in Nearby {city.county} County Cities
                </h3>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {nearbyCities.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/ma/${c.slug}/${service.slug}`}
                      className="flex items-center gap-2 p-3 bg-gray-50 rounded-xl hover:bg-emerald-50 hover:border-emerald-200 border border-gray-100 transition-all group"
                    >
                      <MapPin size={14} className="text-emerald-500 flex-shrink-0" />
                      <span className="text-gray-700 font-medium text-sm group-hover:text-emerald-700">
                        {c.name}
                      </span>
                    </Link>
                  ))}
                </div>

                {/* Location Info Card */}
                <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl p-5 border border-emerald-100">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin size={24} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Serving {city.name}</h4>
                      <p className="text-gray-600 text-sm mt-1">
                        {city.county} County, Massachusetts
                      </p>
                      <p className="text-emerald-600 font-medium text-sm mt-2">
                        Population: {city.population.toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-emerald-200/50 flex gap-3">
                    <a
                      href={`https://www.google.com/maps/dir//${encodeURIComponent(city.name + ', MA')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-700 font-medium py-2 px-4 rounded-lg transition-all border border-gray-200 text-sm"
                    >
                      Get Directions
                    </a>
                    <a
                      href={`tel:${businessInfo.phoneRaw}`}
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-2 px-4 rounded-lg transition-all text-sm"
                    >
                      <Phone size={16} />
                      Call Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-20 bg-gradient-to-r from-emerald-600 to-emerald-500">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
              Ready for {service.name} in {city.name}?
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              Get a free, no-obligation estimate from {city.county} County&apos;s most trusted painters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#quote"
                className="inline-flex items-center justify-center gap-2 bg-white text-emerald-600 font-bold py-4 px-8 rounded-full text-lg transition-all hover:bg-gray-100 hover:scale-105 shadow-xl"
              >
                Get Free Estimate
                <ArrowRight size={20} />
              </a>
              <a
                href="tel:+17743415233"
                className="inline-flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-4 px-8 rounded-full text-lg transition-all"
              >
                <Phone size={20} />
                {businessInfo.phone}
              </a>
            </div>
          </div>
        </section>

<Footer />
      </div>
    </>
  );
}
