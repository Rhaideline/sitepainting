import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Shield,
  Users,
  Award,
  Home,
  Paintbrush,
  Building2,
  ChevronRight,
  Star,
  Clock,
  CheckCircle2,
  Facebook,
  Instagram,
  Linkedin,
  ArrowRight,
  Sparkles,
  PaintBucket,
  Palette,
  Eye,
  Heart,
  Layers,
} from "lucide-react";
import { cities, services, businessInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Interior Painting Services Massachusetts | Mass Painters Pro",
  description:
    "Professional interior painting services in Massachusetts. Transform your home with premium paints, expert color consultation, and flawless finishes. Licensed, insured, 5-year warranty. Free estimates!",
  keywords: [
    "interior painting Massachusetts",
    "interior painters MA",
    "house painters Boston",
    "room painting services",
    "wall painting Massachusetts",
    "ceiling painting MA",
    "trim painting services",
    "interior house painting",
    "professional painters Massachusetts",
    "residential painting MA",
  ],
  openGraph: {
    title: "Interior Painting Services | Mass Painters Pro",
    description:
      "Transform your home with Massachusetts' most trusted interior painters. Premium paints, expert craftsmanship, and a 5-year warranty. Get your free estimate today!",
    url: "https://masspainter.pro/interior-painting",
    siteName: "Mass Painters Pro",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/695a97fe6e700e1a414da216.svg",
        width: 1200,
        height: 630,
        alt: "Interior Painting Services - Mass Painters Pro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Interior Painting Services | Mass Painters Pro",
    description:
      "Transform your home with Massachusetts' most trusted interior painters. Premium paints and expert craftsmanship.",
    images: ["https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/695a97fe6e700e1a414da216.svg"],
  },
  alternates: {
    canonical: "https://masspainter.pro/interior-painting",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Interior Painting Services",
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
    "Professional interior painting services for homes and businesses throughout Massachusetts. Premium paints, expert color consultation, and flawless finishes.",
  serviceType: "Interior Painting",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "USD",
    },
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "200",
  },
};

export default function InteriorPaintingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* JSON-LD */}
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
              <Link href="/" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
                About
              </Link>
              <div className="relative group">
                <button type="button" className="text-emerald-600 font-semibold flex items-center gap-1">
                  Services
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <Link href="/interior-painting" className="block px-4 py-2 text-emerald-600 bg-emerald-50 font-medium">Interior Painting</Link>
                  <Link href="/exterior-painting" className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600">Exterior Painting</Link>
                  <Link href="/cabinet-refinishing" className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600">Cabinet Refinishing</Link>
                  <Link href="/commercial-painting" className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600">Commercial Painting</Link>
                </div>
              </div>
              <Link href="/blog" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
                Blog
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
                Contact
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
          <div className="absolute inset-0 bg-gradient-to-br from-[#1C1F2E] via-[#1C1F2E] to-blue-900/20" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-400 rounded-full px-4 py-2 mb-6 text-sm font-medium">
              <Home size={16} />
              <span>Interior Painting Services</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6">
              Transform Your Living Spaces With{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                Expert Interior Painting
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              From bedrooms to living rooms, kitchens to bathrooms—we bring precision, premium paints, and 15+ years of Massachusetts expertise to every brushstroke.
            </p>

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

            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-emerald-500" />
                <span>Premium Low-VOC Paints</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-emerald-500" />
                <span>Color Consultation Included</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-emerald-500" />
                <span>5-Year Warranty</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl shadow-black/30">
                <Image
                  src="https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/695ad1a7edb8a226dcd5b69f.png"
                  alt="Interior painting services in Massachusetts"
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

      {/* What We Paint Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Complete Interior Painting Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every surface, every room—we do it all with meticulous attention to detail.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Layers,
                title: "Walls & Ceilings",
                desc: "Smooth, flawless finishes on all wall and ceiling surfaces using premium paints.",
              },
              {
                icon: Home,
                title: "Trim & Molding",
                desc: "Precise brushwork on baseboards, crown molding, door frames, and window trim.",
              },
              {
                icon: PaintBucket,
                title: "Doors & Windows",
                desc: "Expert painting of interior doors, window frames, and shutters.",
              },
              {
                icon: Palette,
                title: "Accent Walls",
                desc: "Create stunning focal points with professionally painted accent walls.",
              },
              {
                icon: Eye,
                title: "Textured Finishes",
                desc: "Specialty textures and faux finishes for unique, custom looks.",
              },
              {
                icon: Heart,
                title: "Color Consultation",
                desc: "Expert guidance to choose the perfect colors for your space.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-blue-200 transition-all"
              >
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Our Interior Painting Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A systematic approach that delivers perfect results every time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Free Consultation", desc: "We visit your home, discuss your vision, and provide a detailed, no-obligation quote." },
              { step: "2", title: "Color Selection", desc: "Our experts help you choose the perfect colors with samples and professional advice." },
              { step: "3", title: "Furniture Protection", desc: "We carefully move and cover all furniture, floors, and fixtures before any work begins." },
              { step: "4", title: "Surface Preparation", desc: "Walls are cleaned, patched, sanded, and primed for optimal paint adhesion." },
              { step: "5", title: "Professional Painting", desc: "Multiple coats of premium paint applied with precision for a flawless finish." },
              { step: "6", title: "Final Walkthrough", desc: "We inspect every detail with you and ensure 100% satisfaction before cleanup." },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-3 -top-3 w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {item.step}
                </div>
                <div className="bg-gray-50 rounded-2xl p-6 pt-8 h-full">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-[#1C1F2E] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black mb-6">
                Why Massachusetts Homeowners Choose Us for Interior Painting
              </h2>

              <div className="space-y-6">
                {[
                  { title: "Premium Low-VOC Paints", desc: "Safe for your family and pets. We use Benjamin Moore and Sherwin-Williams products." },
                  { title: "Clean, Respectful Crews", desc: "Background-checked professionals who treat your home like their own." },
                  { title: "Dust-Free Process", desc: "We use containment and HEPA filtration to keep your home clean during the project." },
                  { title: "On-Time, Every Time", desc: "We stick to our schedule and keep you informed throughout the project." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
                      <CheckCircle2 size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={24} className="text-yellow-400" fill="#facc15" />
                ))}
              </div>

              <blockquote className="text-xl text-gray-200 italic mb-6">
                &quot;They painted our entire first floor in just two days. The attention to detail on the trim work was incredible. You can&apos;t tell where the old paint ended and the new began—it&apos;s flawless!&quot;
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  JK
                </div>
                <div>
                  <div className="font-bold text-white">Jennifer K.</div>
                  <div className="text-gray-400">Newton, MA</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="quote" className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
                Get Your Free Interior Painting Estimate
              </h2>

              <p className="text-xl text-gray-600 mb-8">
                Tell us about your project and we&apos;ll provide a detailed, no-obligation quote within 24 hours.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Detailed room-by-room pricing",
                  "No hidden fees or surprises",
                  "Flexible scheduling options",
                  "5-year workmanship warranty",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-emerald-500" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
                <p className="text-blue-800 text-sm">
                  <span className="font-bold">Pro Tip:</span> Book your interior painting during fall or winter for faster scheduling and the same great results!
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
              Interior Painting Services Across Massachusetts
            </h2>
            <p className="text-xl text-gray-600">
              We bring expert interior painting to communities throughout the Bay State.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {cities.slice(0, 24).map((city) => (
              <Link
                key={city.slug}
                href={`/ma/${city.slug}/interior-painting`}
                className="flex items-center gap-2 p-3 bg-gray-50 rounded-xl hover:bg-blue-50 hover:border-blue-200 border border-gray-100 transition-all group"
              >
                <MapPin size={14} className="text-blue-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium text-sm group-hover:text-blue-700">
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
              <h3 className="text-lg font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/#areas" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    Service Areas
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    Contact
                  </Link>
                </li>
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
