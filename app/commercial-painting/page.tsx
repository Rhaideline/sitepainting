import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Shield,
  Star,
  CheckCircle2,
  Facebook,
  Instagram,
  Linkedin,
  ArrowRight,
  Building2,
  Clock,
  Users,
  Briefcase,
  Store,
  Warehouse,
  Hospital,
  GraduationCap,
  Home,
  Calendar,
} from "lucide-react";
import { cities, services, businessInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Commercial Painting Services Massachusetts | Mass Painters Pro",
  description:
    "Professional commercial painting services in Massachusetts. Offices, retail, restaurants, warehouses. After-hours work, minimal disruption. Licensed, insured, fast turnaround. Free estimates!",
  keywords: [
    "commercial painting Massachusetts",
    "office painting MA",
    "commercial painters Boston",
    "business painting services",
    "retail store painting",
    "restaurant painting Massachusetts",
    "warehouse painting MA",
    "industrial painting services",
    "commercial painting contractors",
    "office renovation painting",
  ],
  openGraph: {
    title: "Commercial Painting Services | Mass Painters Pro",
    description:
      "Professional commercial painting with minimal business disruption. Offices, retail, restaurants, and more. Get your free estimate today!",
    url: "https://masspainter.pro/commercial-painting",
    siteName: "Mass Painters Pro",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/695a97fe6e700e1a414da216.svg",
        width: 1200,
        height: 630,
        alt: "Commercial Painting Services - Mass Painters Pro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial Painting Services | Mass Painters Pro",
    description:
      "Professional commercial painting with minimal business disruption. Fast turnaround, quality results.",
    images: ["https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/695a97fe6e700e1a414da216.svg"],
  },
  alternates: {
    canonical: "https://masspainter.pro/commercial-painting",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Commercial Painting Services",
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
    "Professional commercial painting services for offices, retail, restaurants, and warehouses throughout Massachusetts.",
  serviceType: "Commercial Painting",
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

export default function CommercialPaintingPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center">
              <Image
                src="https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/695a97fe6e700e1a414da216.svg"
                alt="Mass Painters Pro"
                width={180}
                height={50}
                className="h-11 w-auto"
                priority
              />
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              <Link href="/interior-painting" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
                Interior
              </Link>
              <Link href="/exterior-painting" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
                Exterior
              </Link>
              <Link href="/cabinet-refinishing" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
                Cabinets
              </Link>
              <Link href="/commercial-painting" className="text-purple-600 font-semibold">
                Commercial
              </Link>
            </nav>

            <div className="hidden lg:flex items-center gap-4">
              <a href="tel:+17743415233" className="flex items-center gap-2 text-gray-700 hover:text-emerald-600 font-medium">
                <Phone size={18} />
                {businessInfo.phone}
              </a>
              <a
                href="#quote"
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-6 rounded-full transition-all shadow-lg shadow-emerald-500/25"
              >
                Free Quote
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-[#1C1F2E] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1C1F2E] via-[#1C1F2E] to-purple-900/20" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-400 rounded-full px-4 py-2 mb-6 text-sm font-medium">
              <Building2 size={16} />
              <span>Commercial Painting Services</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6">
              Professional Commercial Painting{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-500">
                Zero Business Disruption
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              From offices to retail spaces, restaurants to warehouses—we deliver exceptional results on your schedule. After-hours work, large crews, and fast turnarounds keep your business running.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="#quote"
                className="inline-flex items-center justify-center gap-2 bg-purple-500 hover:bg-purple-400 text-white font-bold py-4 px-8 rounded-full text-lg transition-all shadow-xl shadow-purple-500/30 hover:scale-105"
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
                <CheckCircle2 size={18} className="text-purple-500" />
                <span>After-Hours Available</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-purple-500" />
                <span>Large Crew Capacity</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-purple-500" />
                <span>Fast Turnarounds</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl shadow-black/30">
                <Image
                  src="https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/695ad3283ccdd6426a027fb6.png"
                  alt="Commercial painting services in Massachusetts"
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

      {/* Industries We Serve */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Specialized commercial painting expertise for every type of business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Briefcase,
                title: "Office Buildings",
                desc: "Professional environments that impress clients and boost employee morale.",
                color: "blue",
              },
              {
                icon: Store,
                title: "Retail Spaces",
                desc: "Eye-catching finishes that enhance your brand and attract customers.",
                color: "pink",
              },
              {
                icon: Home,
                title: "Restaurants & Hospitality",
                desc: "Food-safe paints and finishes for dining establishments.",
                color: "amber",
              },
              {
                icon: Warehouse,
                title: "Warehouses & Industrial",
                desc: "Durable coatings for high-traffic industrial environments.",
                color: "gray",
              },
              {
                icon: Hospital,
                title: "Healthcare Facilities",
                desc: "Antimicrobial paints and healthcare-grade finishes.",
                color: "emerald",
              },
              {
                icon: GraduationCap,
                title: "Educational Facilities",
                desc: "Safe, durable paints for schools and universities.",
                color: "indigo",
              },
              {
                icon: Building2,
                title: "Multi-Family Housing",
                desc: "Common areas, hallways, and exterior painting for apartment complexes.",
                color: "teal",
              },
              {
                icon: Building2,
                title: "Property Management",
                desc: "Ongoing maintenance painting programs for property portfolios.",
                color: "purple",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all"
              >
                <div className={`w-12 h-12 bg-${item.color}-500/10 rounded-xl flex items-center justify-center mb-4`}>
                  <item.icon className={`text-${item.color}-600`} size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
                Why Businesses Choose Mass Painters Pro
              </h2>

              <div className="space-y-6">
                {[
                  {
                    icon: Clock,
                    title: "Flexible Scheduling",
                    desc: "Nights, weekends, holidays—we work when you're closed to minimize disruption.",
                  },
                  {
                    icon: Users,
                    title: "Scalable Crews",
                    desc: "Need a large project done fast? We have the manpower to meet tight deadlines.",
                  },
                  {
                    icon: Shield,
                    title: "Fully Insured",
                    desc: "$2M liability coverage and workers' comp protect you from any liability.",
                  },
                  {
                    icon: Calendar,
                    title: "Project Management",
                    desc: "Dedicated project managers keep you informed and ensure on-time completion.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center">
                      <item.icon className="text-purple-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1 text-gray-900">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200">
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={24} className="text-yellow-400" fill="#facc15" />
                ))}
              </div>

              <blockquote className="text-xl text-gray-700 italic mb-6">
                &quot;Mass Painters Pro painted our entire 20,000 sq ft office over one weekend. Monday morning, our employees walked into a completely transformed space. Incredible work ethic and quality.&quot;
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                  DM
                </div>
                <div>
                  <div className="font-bold text-gray-900">David M.</div>
                  <div className="text-gray-600">Facilities Manager, Tech Company, Cambridge</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 lg:py-24 bg-[#1C1F2E] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Our Commercial Painting Process
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A streamlined process designed for business needs and minimal disruption.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Site Assessment", desc: "We survey your space, understand your requirements, and assess any special considerations." },
              { step: "2", title: "Custom Scheduling", desc: "We create a detailed timeline that works around your business operations." },
              { step: "3", title: "Area Preparation", desc: "Furniture covered, floors protected, and workspaces secured for painting." },
              { step: "4", title: "Professional Application", desc: "Our crews execute the work efficiently with commercial-grade equipment." },
              { step: "5", title: "Quality Control", desc: "Project managers inspect all work to ensure it meets our exacting standards." },
              { step: "6", title: "Final Walkthrough", desc: "We review the completed project with you and address any concerns immediately." },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-3 -top-3 w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
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
                Get Your Free Commercial Painting Quote
              </h2>

              <p className="text-xl text-gray-600 mb-8">
                Tell us about your commercial project and we&apos;ll provide a comprehensive proposal within 48 hours.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Detailed scope of work",
                  "Competitive pricing",
                  "Flexible scheduling options",
                  "Project timeline and milestones",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-purple-500" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-purple-50 rounded-xl border border-purple-200">
                <p className="text-purple-800 text-sm">
                  <span className="font-bold">Property Managers:</span> Ask about our volume discounts and ongoing maintenance programs for multi-property portfolios.
                </p>
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
              Commercial Painting Services Across Massachusetts
            </h2>
            <p className="text-xl text-gray-600">
              Serving businesses throughout the Bay State.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {cities.slice(0, 24).map((city) => (
              <Link
                key={city.slug}
                href={`/ma/${city.slug}/commercial-painting`}
                className="flex items-center gap-2 p-3 bg-gray-50 rounded-xl hover:bg-purple-50 hover:border-purple-200 border border-gray-100 transition-all group"
              >
                <MapPin size={14} className="text-purple-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium text-sm group-hover:text-purple-700">
                  {city.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1C1F2E] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <Image
                src="https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/695a97fe6e700e1a414da216.svg"
                alt="Mass Painters Pro"
                width={160}
                height={45}
                className="h-10 w-auto mb-6 brightness-0 invert"
              />
              <p className="text-gray-400 mb-6">
                Massachusetts&apos; trusted painting professionals since 2009.
              </p>
              <div className="flex gap-3">
                <a href={businessInfo.social.facebook} className="w-10 h-10 bg-white/10 hover:bg-emerald-500 rounded-full flex items-center justify-center transition-colors">
                  <Facebook size={18} />
                </a>
                <a href={businessInfo.social.instagram} className="w-10 h-10 bg-white/10 hover:bg-emerald-500 rounded-full flex items-center justify-center transition-colors">
                  <Instagram size={18} />
                </a>
                <a href={businessInfo.social.linkedin} className="w-10 h-10 bg-white/10 hover:bg-emerald-500 rounded-full flex items-center justify-center transition-colors">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6">Services</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link href={`/${service.slug}`} className="text-gray-400 hover:text-emerald-400 transition-colors">
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6">Popular Areas</h3>
              <ul className="space-y-3">
                {cities.slice(0, 6).map((city) => (
                  <li key={city.slug}>
                    <Link href={`/ma/${city.slug}/commercial-painting`} className="text-gray-400 hover:text-emerald-400 transition-colors">
                      {city.name} Commercial
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin size={20} className="text-emerald-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-400">
                    {businessInfo.address.street}<br />
                    {businessInfo.address.city}, {businessInfo.address.state} {businessInfo.address.zip}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={20} className="text-emerald-500 flex-shrink-0" />
                  <a href="tel:+17743415233" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    {businessInfo.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={20} className="text-emerald-500 flex-shrink-0" />
                  <a href={`mailto:${businessInfo.email}`} className="text-gray-400 hover:text-emerald-400 transition-colors">
                    {businessInfo.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8">
            <p className="text-gray-400 text-sm text-center">
              &copy; {new Date().getFullYear()} Mass Painters Pro. All rights reserved. | Licensed & Insured in MA
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
