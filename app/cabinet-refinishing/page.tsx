import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  MapPin,
  Star,
  CheckCircle2,
  ArrowRight,
  PaintBucket,
  Palette,
  Clock,
  DollarSign,
  Sparkles,
  Home,
  Layers,
  RefreshCcw,
} from "lucide-react";
import { cities } from "@/lib/data";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cabinet Refinishing & Painting Massachusetts | Mass Painters Pro",
  description:
    "Professional cabinet refinishing and painting in Massachusetts. Transform your kitchen for a fraction of replacement cost. Factory-quality finishes, any color. Licensed, insured, guaranteed. Free estimates!",
  keywords: [
    "cabinet refinishing Massachusetts",
    "cabinet painting MA",
    "kitchen cabinet painting Boston",
    "cabinet refacing services",
    "bathroom vanity painting",
    "cabinet makeover Massachusetts",
    "professional cabinet painters",
    "kitchen renovation MA",
    "cabinet restoration services",
    "wood cabinet refinishing",
  ],
  openGraph: {
    title: "Cabinet Refinishing Services | Mass Painters Pro",
    description:
      "Transform your kitchen cabinets for a fraction of replacement cost. Factory-quality finishes in any color. Get your free estimate today!",
    url: "https://masspainter.pro/cabinet-refinishing",
    siteName: "Mass Painters Pro",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/695a97fe6e700e1a414da216.svg",
        width: 1200,
        height: 630,
        alt: "Cabinet Refinishing Services - Mass Painters Pro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cabinet Refinishing Services | Mass Painters Pro",
    description:
      "Transform your kitchen cabinets for a fraction of replacement cost. Factory-quality finishes.",
    images: ["https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/695a97fe6e700e1a414da216.svg"],
  },
  alternates: {
    canonical: "https://masspainter.pro/cabinet-refinishing",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Cabinet Refinishing Services",
  provider: {
    "@type": "LocalBusiness",
    name: "Mass Painters Pro",
    telephone: "+1-774-341-5233",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Main Street",
      addressLocality: "Marlborough",
      addressRegion: "MA",
      postalCode: "01752",
      addressCountry: "US",
    },
  },
  areaServed: {
    "@type": "State",
    name: "Massachusetts",
  },
  description:
    "Professional cabinet refinishing and painting services. Transform your kitchen for a fraction of replacement cost with factory-quality finishes.",
  serviceType: "Cabinet Refinishing",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "200",
  },
};

export default function CabinetRefinishingPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header currentPage="cabinet-refinishing" />

      {/* Hero Section */}
      <section className="relative bg-[#1C1F2E] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1C1F2E] via-[#1C1F2E] to-amber-900/20" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-400 rounded-full px-4 py-2 mb-6 text-sm font-medium">
              <PaintBucket size={16} />
              <span>Cabinet Refinishing Services</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6">
              Transform Your Kitchen{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                Without the Renovation Cost
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Get a stunning kitchen makeover at a fraction of the cost of new cabinets. Our factory-quality cabinet refinishing brings your vision to life in any color you desire.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="#quote"
                className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-bold py-4 px-8 rounded-full text-lg transition-all shadow-xl shadow-amber-500/30 hover:scale-105"
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

            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-amber-500" />
                <span>Save 50-70% vs Replacement</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-amber-500" />
                <span>Any Color Available</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-amber-500" />
                <span>Factory-Quality Finish</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl shadow-black/30">
                <Image
                  src="https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/695ad202edb8a223b9d5c8c9.png"
                  alt="Cabinet refinishing services in Massachusetts"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Why Refinish Instead of Replace?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Smart homeowners choose cabinet refinishing for stunning results at a smart price.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: DollarSign,
                title: "Save 50-70%",
                desc: "Compared to full cabinet replacement, refinishing saves you thousands.",
                color: "emerald",
              },
              {
                icon: Clock,
                title: "Quick Turnaround",
                desc: "Most projects completed in 3-5 days, not weeks like a full renovation.",
                color: "blue",
              },
              {
                icon: Palette,
                title: "Any Color",
                desc: "Choose from unlimited colors—white, gray, navy, or any custom shade.",
                color: "amber",
              },
              {
                icon: RefreshCcw,
                title: "Eco-Friendly",
                desc: "Keep existing cabinets out of landfills while updating your space.",
                color: "green",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all text-center"
              >
                <div className={`w-16 h-16 bg-${item.color}-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <item.icon className={`text-${item.color}-600`} size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Refinish */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              What We Can Refinish
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From kitchen cabinets to bathroom vanities, we transform all your built-in woodwork.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Kitchen Cabinets", desc: "Upper and lower cabinets, including doors, drawers, and frames.", icon: Home },
              { title: "Bathroom Vanities", desc: "Transform dated bathroom cabinets with a fresh, modern finish.", icon: PaintBucket },
              { title: "Built-In Bookcases", desc: "Refresh living room and office built-ins for a cohesive look.", icon: Layers },
              { title: "Entertainment Centers", desc: "Update built-in media cabinets and shelving units.", icon: Home },
              { title: "Laundry Cabinets", desc: "Brighten your laundry room with refinished cabinetry.", icon: Sparkles },
              { title: "Pantry Cabinets", desc: "Complete your kitchen makeover with matching pantry refinishing.", icon: Home },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-2xl p-6 hover:bg-amber-50 hover:border-amber-200 border border-gray-100 transition-all"
              >
                <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="text-amber-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 lg:py-24 bg-[#1C1F2E] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Our Cabinet Refinishing Process
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A meticulous process that delivers factory-quality results every time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Assessment", desc: "We evaluate your cabinets, discuss color options, and provide a detailed quote." },
              { step: "2", title: "Door Removal", desc: "Cabinet doors and hardware are carefully removed and labeled for reinstallation." },
              { step: "3", title: "Deep Cleaning", desc: "All surfaces are thoroughly degreased and cleaned for optimal paint adhesion." },
              { step: "4", title: "Sanding & Priming", desc: "Surfaces are sanded smooth and coated with bonding primer." },
              { step: "5", title: "Professional Spraying", desc: "Multiple coats of premium cabinet paint applied with HVLP sprayers." },
              { step: "6", title: "Reinstallation", desc: "Doors rehung, hardware installed, and final quality inspection completed." },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-3 -top-3 w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {item.step}
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 pt-8 border border-white/10 h-full">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="quote" className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
                Get Your Free Cabinet Refinishing Quote
              </h2>

              <p className="text-xl text-gray-600 mb-8">
                Tell us about your cabinet project and we&apos;ll provide a detailed estimate within 24 hours.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Free color consultation",
                  "Detailed, no-surprise pricing",
                  "Before/after photos of similar projects",
                  "5-year finish warranty",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-amber-500" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-gray-200 bg-gray-50">
                <div className="flex items-center gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={20} className="text-yellow-400" fill="#facc15" />
                  ))}
                </div>
                <blockquote className="text-gray-700 italic mb-3">
                  &quot;We almost spent $25,000 on new cabinets until we found Mass Painters Pro. For a fraction of the cost, our kitchen looks completely transformed. Best decision we made!&quot;
                </blockquote>
                <div className="font-bold text-gray-900">— Lisa R., Natick, MA</div>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/PAkCy4I8PqgdMLhpiPb0"
                className="w-full h-[550px] border-none rounded-lg"
                id="inline-PAkCy4I8PqgdMLhpiPb0"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Form 1"
                data-height="550"
                data-layout-iframe-id="inline-PAkCy4I8PqgdMLhpiPb0"
                data-form-id="PAkCy4I8PqgdMLhpiPb0"
                title="Free Estimate Form"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Cabinet Refinishing Services Across Massachusetts
            </h2>
            <p className="text-xl text-gray-600">
              Transforming kitchens throughout the Bay State.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {cities.slice(0, 24).map((city) => (
              <Link
                key={city.slug}
                href={`/ma/${city.slug}/cabinet-refinishing`}
                className="flex items-center gap-2 p-3 bg-gray-50 rounded-xl hover:bg-amber-50 hover:border-amber-200 border border-gray-100 transition-all group"
              >
                <MapPin size={14} className="text-amber-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium text-sm group-hover:text-amber-700">
                  {city.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

<Footer />
    </div>
  );
}
