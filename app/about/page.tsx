import { Metadata } from "next";
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
  Youtube,
  ArrowRight,
  Clock,
  Award,
  Users,
  ChevronRight,
  Target,
  Heart,
  Zap,
} from "lucide-react";
import { businessInfo, services, testimonials } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Mass Painters Pro | Massachusetts' Trusted Painting Contractor",
  description: `Learn about Mass Painters Pro - ${businessInfo.yearsInBusiness}+ years of professional painting experience in Massachusetts. Family-owned, licensed, insured. ${businessInfo.projectsCompleted.toLocaleString()}+ projects completed.`,
  openGraph: {
    title: "About Mass Painters Pro | Massachusetts' Trusted Painting Contractor",
    description: `Learn about Mass Painters Pro - ${businessInfo.yearsInBusiness}+ years of professional painting experience in Massachusetts.`,
    url: "https://masspainter.pro/about",
    siteName: "Mass Painters Pro",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://masspainter.pro/about",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  mainEntity: {
    "@type": "LocalBusiness",
    name: businessInfo.name,
    description: "Professional painting services for homes and businesses throughout Massachusetts.",
    foundingDate: "2009",
    numberOfEmployees: "10-50",
    founder: {
      "@type": "Person",
      name: businessInfo.founder.name,
      jobTitle: businessInfo.founder.title,
    },
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-white">
        {/* Top Bar */}
        <div className="bg-emerald-500 text-white py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center gap-6">
                <span className="flex items-center gap-2">
                  <MapPin size={14} />
                  Serving Marlborough, Massachusetts
                </span>
                <a href={`mailto:${businessInfo.email}`} className="hidden md:flex items-center gap-2 hover:text-white/80 transition-colors">
                  <Mail size={14} />
                  {businessInfo.email}
                </a>
              </div>
              <a href={`tel:${businessInfo.phoneRaw}`} className="flex items-center gap-2 font-semibold hover:text-white/80 transition-colors">
                <Phone size={14} />
                {businessInfo.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Header */}
        <header className="sticky top-0 z-50 bg-[#1C1F2E] shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <Link href="/" className="flex items-center">
                <Image
                  src="https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/695a97fe6e700e1a414da216.svg"
                  alt="Mass Painters Pro"
                  width={180}
                  height={50}
                  className="h-11 w-auto brightness-0 invert"
                  priority
                />
              </Link>

              <nav className="hidden lg:flex items-center gap-8">
                <Link href="/" className="text-white hover:text-emerald-400 font-medium transition-colors">
                  Home
                </Link>
                <div className="relative group">
                  <button type="button" className="text-white hover:text-emerald-400 font-medium transition-colors flex items-center gap-1">
                    Services
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                    <Link href="/interior-painting" className="block px-4 py-3 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors">Interior Painting</Link>
                    <Link href="/exterior-painting" className="block px-4 py-3 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors">Exterior Painting</Link>
                    <Link href="/cabinet-refinishing" className="block px-4 py-3 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors">Cabinet Refinishing</Link>
                    <Link href="/commercial-painting" className="block px-4 py-3 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors">Commercial Painting</Link>
                  </div>
                </div>
                <Link href="/blog" className="text-white hover:text-emerald-400 font-medium transition-colors">
                  Blog
                </Link>
                <Link href="/about" className="text-emerald-400 font-medium">
                  About
                </Link>
                <Link href="/contact" className="text-white hover:text-emerald-400 font-medium transition-colors">
                  Contact
                </Link>
              </nav>

              <div className="hidden lg:flex items-center">
                <a href={`tel:${businessInfo.phoneRaw}`} className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-6 rounded-full transition-all">
                  <Phone size={18} />
                  {businessInfo.phone}
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative bg-[#1C1F2E] overflow-hidden py-16 lg:py-24">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1C1F2E] via-[#1C1F2E] to-emerald-900/20" />
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight size={14} />
              <span className="text-emerald-400">About Us</span>
            </nav>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-400 rounded-full px-4 py-2 mb-6 text-sm font-medium">
                <Users size={16} />
                <span>About Mass Painters Pro</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6">
                Massachusetts&apos; Most Trusted{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-500">
                  Painting Professionals
                </span>
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed">
                For over {businessInfo.yearsInBusiness} years, we&apos;ve been transforming homes and businesses
                across Massachusetts with exceptional craftsmanship and unmatched customer service.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="bg-white border-b border-gray-200 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: `${businessInfo.yearsInBusiness}+`, label: "Years in Business" },
                { value: `${(businessInfo.projectsCompleted / 1000).toFixed(0)}K+`, label: "Projects Completed" },
                { value: `${businessInfo.citiesServed}+`, label: "Cities Served" },
                { value: `${businessInfo.rating}★`, label: "Google Rating" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-4xl font-black text-emerald-600 mb-1">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-600 rounded-full px-4 py-2 mb-4 text-sm font-medium">
                  <Heart size={16} />
                  <span>Our Story</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
                  From Small Beginnings to Massachusetts&apos; Premier Painting Company
                </h2>
                <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                  <p>
                    Mass Painters Pro was founded in 2009 in Marlborough, Massachusetts, with a simple mission:
                    deliver exceptional painting results while treating every customer like family.
                  </p>
                  <p>
                    What started as a small operation with just a few dedicated painters has grown into one of
                    Massachusetts&apos; most trusted painting contractors. Today, we serve over 100 communities
                    from Boston to Worcester, from the North Shore to the South Shore.
                  </p>
                  <p>
                    Our growth has been built on a foundation of quality workmanship, transparent pricing,
                    and genuine care for our customers&apos; homes and businesses. We&apos;ve never lost sight of
                    the values that got us here.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-xl">
                  <Image
                    src="https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/695ad8f105b511665630cfba.png"
                    alt="Mass Painters Pro team"
                    width={600}
                    height={450}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-emerald-500 rounded-2xl p-6 shadow-xl">
                  <div className="text-white text-center">
                    <div className="text-4xl font-black">Since</div>
                    <div className="text-emerald-100 text-2xl font-bold">2009</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-600 rounded-full px-4 py-2 mb-4 text-sm font-medium">
                <Target size={16} />
                <span>Our Values</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                What Sets Us Apart
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our commitment to excellence goes beyond painting—it&apos;s in everything we do.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Award,
                  title: "Quality First",
                  desc: "We use only premium paints and materials, never cutting corners on quality.",
                },
                {
                  icon: Users,
                  title: "Customer Focus",
                  desc: "Your satisfaction is our priority. We listen, communicate, and deliver.",
                },
                {
                  icon: Shield,
                  title: "Fully Insured",
                  desc: "Complete liability and workers' comp coverage for your peace of mind.",
                },
                {
                  icon: Zap,
                  title: "On-Time, On-Budget",
                  desc: "We respect your time and money with accurate estimates and timely completion.",
                },
              ].map((value, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <div className="w-14 h-14 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-4">
                    <value.icon className="text-emerald-600" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-600 rounded-full px-4 py-2 mb-4 text-sm font-medium">
                  <Shield size={16} />
                  <span>Credentials</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
                  Licensed, Certified & Insured
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  We maintain the highest industry standards and certifications to ensure every
                  project meets or exceeds expectations. Our team is continuously trained on the
                  latest techniques and safety protocols.
                </p>

                <div className="space-y-4">
                  {businessInfo.certifications.map((cert, i) => (
                    <div key={i} className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                      <CheckCircle2 size={24} className="text-emerald-500 flex-shrink-0" />
                      <span className="text-gray-900 font-medium">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  "https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/695ad89205b511551530c27b.png",
                  "https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/695ad7123ccdd6fdb803536b.png",
                  "https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/695ad674edb8a28b37d6bce7.png",
                  "https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/695ad5cf05b5112dd73058c0.png",
                ].map((img, i) => (
                  <div key={i} className="rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src={img}
                      alt={`Mass Painters Pro work example ${i + 1}`}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 lg:py-24 bg-[#1C1F2E]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-400 rounded-full px-4 py-2 mb-4 text-sm font-medium">
                <Star size={16} />
                <span>Customer Reviews</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                What Our Customers Say
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.slice(0, 3).map((testimonial, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, j) => (
                      <Star key={j} size={18} className="text-yellow-400" fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4">&quot;{testimonial.text}&quot;</p>
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div>
                      <div className="font-bold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.location}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-20 bg-gradient-to-r from-emerald-600 to-emerald-500">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
              Ready to Work With Massachusetts&apos; Best?
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              Get a free, no-obligation estimate for your painting project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#quote"
                className="inline-flex items-center justify-center gap-2 bg-white text-emerald-600 font-bold py-4 px-8 rounded-full text-lg transition-all hover:bg-gray-100 hover:scale-105 shadow-xl"
              >
                Get Free Estimate
                <ArrowRight size={20} />
              </Link>
              <a
                href={`tel:${businessInfo.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-4 px-8 rounded-full text-lg transition-all"
              >
                <Phone size={20} />
                {businessInfo.phone}
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
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
                  <a href={businessInfo.social.facebook} className="w-10 h-10 bg-white/10 hover:bg-emerald-500 rounded-full flex items-center justify-center transition-colors" aria-label="Facebook">
                    <Facebook size={18} />
                  </a>
                  <a href={businessInfo.social.instagram} className="w-10 h-10 bg-white/10 hover:bg-emerald-500 rounded-full flex items-center justify-center transition-colors" aria-label="Instagram">
                    <Instagram size={18} />
                  </a>
                  <a href={businessInfo.social.linkedin} className="w-10 h-10 bg-white/10 hover:bg-emerald-500 rounded-full flex items-center justify-center transition-colors" aria-label="LinkedIn">
                    <Linkedin size={18} />
                  </a>
                  <a href={businessInfo.social.youtube} className="w-10 h-10 bg-white/10 hover:bg-emerald-500 rounded-full flex items-center justify-center transition-colors" aria-label="YouTube">
                    <Youtube size={18} />
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
                  <li><Link href="/about" className="text-gray-400 hover:text-emerald-400 transition-colors">About Us</Link></li>
                  <li><Link href="/blog" className="text-gray-400 hover:text-emerald-400 transition-colors">Blog</Link></li>
                  <li><Link href="/contact" className="text-gray-400 hover:text-emerald-400 transition-colors">Contact</Link></li>
                  <li><Link href="/#quote" className="text-gray-400 hover:text-emerald-400 transition-colors">Free Estimate</Link></li>
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
                    <a href={`tel:${businessInfo.phoneRaw}`} className="text-gray-400 hover:text-emerald-400 transition-colors">
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

            <div className="border-t border-white/10 pt-8">
              <p className="text-gray-400 text-sm text-center">
                &copy; {new Date().getFullYear()} Mass Painters Pro. All rights reserved. | Licensed & Insured in MA
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
