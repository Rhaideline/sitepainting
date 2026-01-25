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
  Home,
  Paintbrush,
  Building2,
  PaintBucket,
  Play,
  Quote,
  Calendar,
  Sparkles,
  Menu,
  X,
} from "lucide-react";
import { businessInfo, services, cities, testimonials } from "@/lib/data";

// ============================================
// METADATA - Maximum SEO
// ============================================
export const metadata: Metadata = {
  title: "Mass Painters Pro | #1 Professional Painting Contractor in Massachusetts",
  description: "Massachusetts' trusted painting professionals. Interior, exterior, cabinet refinishing & commercial painting. Serving 100+ MA cities. Licensed, insured, 5-year warranty. Free estimates: (774) 341-5233",
  keywords: [
    "painting contractor massachusetts",
    "house painters near me",
    "interior painting massachusetts",
    "exterior painting massachusetts",
    "cabinet refinishing massachusetts",
    "commercial painting massachusetts",
    "painters marlborough ma",
    "painters framingham ma",
    "painters worcester ma",
    "painters boston ma",
    "best painters massachusetts",
    "professional painters near me",
  ],
  openGraph: {
    title: "Mass Painters Pro | Professional Painting Contractor in Massachusetts",
    description: "Massachusetts' trusted painting professionals. Interior, exterior, cabinet refinishing & commercial painting. 100+ cities served. Free estimates!",
    url: "https://masspainter.pro",
    siteName: "Mass Painters Pro",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/695ad3283ccdd6426a027fb6.png",
        width: 1200,
        height: 630,
        alt: "Mass Painters Pro - Professional Painting Services in Massachusetts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mass Painters Pro | Professional Painting Contractor in Massachusetts",
    description: "Massachusetts' trusted painting professionals. Interior, exterior, cabinet refinishing & commercial painting. Free estimates!",
    images: ["https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/695ad3283ccdd6426a027fb6.png"],
  },
  alternates: {
    canonical: "https://masspainter.pro",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// ============================================
// JSON-LD SCHEMA - Complete Business Schema
// ============================================
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://masspainter.pro/#business",
      name: businessInfo.name,
      legalName: businessInfo.legalName,
      description: "Professional painting services for homes and businesses throughout Massachusetts. Interior painting, exterior painting, cabinet refinishing, and commercial painting.",
      url: "https://masspainter.pro",
      telephone: businessInfo.phoneFormatted,
      email: businessInfo.email,
      image: "https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/695a97fe6e700e1a414da216.svg",
      logo: "https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/695a97fe6e700e1a414da216.svg",
      address: {
        "@type": "PostalAddress",
        streetAddress: businessInfo.address.street,
        addressLocality: businessInfo.address.city,
        addressRegion: businessInfo.address.state,
        postalCode: businessInfo.address.zip,
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: businessInfo.coordinates.latitude,
        longitude: businessInfo.coordinates.longitude,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "07:00",
          closes: "18:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "08:00",
          closes: "14:00",
        },
      ],
      priceRange: "$$",
      areaServed: {
        "@type": "State",
        name: "Massachusetts",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: businessInfo.rating,
        reviewCount: businessInfo.reviewCount,
        bestRating: "5",
        worstRating: "1",
      },
      sameAs: [
        businessInfo.social.facebook,
        businessInfo.social.instagram,
        businessInfo.social.linkedin,
        businessInfo.social.youtube,
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Painting Services",
        itemListElement: services.map((service, index) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.name,
            description: service.description,
          },
          position: index + 1,
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://masspainter.pro/#website",
      url: "https://masspainter.pro",
      name: "Mass Painters Pro",
      publisher: {
        "@id": "https://masspainter.pro/#business",
      },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://masspainter.pro/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Organization",
      "@id": "https://masspainter.pro/#organization",
      name: businessInfo.name,
      url: "https://masspainter.pro",
      logo: "https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/695a97fe6e700e1a414da216.svg",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: businessInfo.phoneFormatted,
        contactType: "customer service",
        availableLanguage: ["English", "Portuguese", "Spanish"],
      },
    },
  ],
};

// Service icons mapping
const serviceIcons = {
  "interior-painting": Home,
  "exterior-painting": Paintbrush,
  "cabinet-refinishing": PaintBucket,
  "commercial-painting": Building2,
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-white">
        {/* ============================================
            TOP BAR - RS Development Style
            ============================================ */}
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

        {/* ============================================
            HEADER - Modern White Navigation
            ============================================ */}
        <header className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              {/* Logo */}
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

              {/* Main Navigation - Modern Style */}
              <nav className="hidden lg:flex items-center gap-8">
                <Link href="/" className="text-gray-900 hover:text-emerald-600 font-semibold transition-colors">
                  Home
                </Link>

                {/* Modern Mega Menu for Services */}
                <div className="relative group">
                  <button type="button" className="text-gray-900 hover:text-emerald-600 font-semibold transition-colors flex items-center gap-1">
                    Services
                    <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Modern Mega Menu Dropdown */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[600px] bg-white rounded-2xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 p-6">
                    <div className="grid grid-cols-2 gap-4">
                      {/* Interior Painting */}
                      <Link href="/interior-painting" className="flex items-start gap-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 transition-all group/item">
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover/item:bg-blue-200 transition-colors">
                          <Home className="text-blue-600" size={24} />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 group-hover/item:text-blue-600 transition-colors">Interior Painting</h3>
                          <p className="text-sm text-gray-500 mt-1">Transform your living spaces with premium finishes</p>
                        </div>
                      </Link>

                      {/* Exterior Painting */}
                      <Link href="/exterior-painting" className="flex items-start gap-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-emerald-50 hover:to-emerald-100 transition-all group/item">
                        <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover/item:bg-emerald-200 transition-colors">
                          <Paintbrush className="text-emerald-600" size={24} />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 group-hover/item:text-emerald-600 transition-colors">Exterior Painting</h3>
                          <p className="text-sm text-gray-500 mt-1">Weather-resistant coatings for New England</p>
                        </div>
                      </Link>

                      {/* Cabinet Refinishing */}
                      <Link href="/cabinet-refinishing" className="flex items-start gap-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-amber-50 hover:to-amber-100 transition-all group/item">
                        <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover/item:bg-amber-200 transition-colors">
                          <PaintBucket className="text-amber-600" size={24} />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 group-hover/item:text-amber-600 transition-colors">Cabinet Refinishing</h3>
                          <p className="text-sm text-gray-500 mt-1">Factory-smooth finishes at a fraction of replacement</p>
                        </div>
                      </Link>

                      {/* Commercial Painting */}
                      <Link href="/commercial-painting" className="flex items-start gap-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-purple-50 hover:to-purple-100 transition-all group/item">
                        <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover/item:bg-purple-200 transition-colors">
                          <Building2 className="text-purple-600" size={24} />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 group-hover/item:text-purple-600 transition-colors">Commercial Painting</h3>
                          <p className="text-sm text-gray-500 mt-1">Minimal disruption for offices & businesses</p>
                        </div>
                      </Link>
                    </div>

                    {/* Mega Menu Footer */}
                    <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <CheckCircle2 size={16} className="text-emerald-500" />
                        <span>Free Estimates</span>
                        <span className="mx-2">•</span>
                        <CheckCircle2 size={16} className="text-emerald-500" />
                        <span>5-Year Warranty</span>
                      </div>
                      <Link href="/contact" className="text-emerald-600 hover:text-emerald-700 font-semibold text-sm flex items-center gap-1">
                        Get Quote <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>

                <Link href="/blog" className="text-gray-900 hover:text-emerald-600 font-semibold transition-colors">
                  Blog
                </Link>
                <Link href="/about" className="text-gray-900 hover:text-emerald-600 font-semibold transition-colors">
                  About
                </Link>
                <Link href="/contact" className="text-gray-900 hover:text-emerald-600 font-semibold transition-colors">
                  Contact
                </Link>
              </nav>

              {/* CTA Button */}
              <div className="hidden lg:flex items-center gap-4">
                <a
                  href={`tel:${businessInfo.phoneRaw}`}
                  className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-6 rounded-full transition-all shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40"
                >
                  <Phone size={18} />
                  {businessInfo.phone}
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button
                type="button"
                className="lg:hidden p-2 text-gray-900 hover:text-emerald-600"
                aria-label="Open menu"
                title="Open menu"
              >
                <Menu size={28} />
              </button>
            </div>
          </div>
        </header>

        {/* ============================================
            HERO SECTION - RS Development Style
            ============================================ */}
        <section className="relative bg-[#1C1F2E] overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1C1F2E] via-[#1C1F2E] to-emerald-900/20" />
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                {/* Badges */}
                <div className="flex flex-wrap gap-3 mb-6">
                  <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-400 rounded-full px-4 py-2 text-sm font-medium">
                    <MapPin size={16} />
                    <span>Serving {businessInfo.citiesServed}+ MA Cities</span>
                  </div>
                  <div className="inline-flex items-center gap-2 bg-yellow-500/20 text-yellow-400 rounded-full px-4 py-2 text-sm font-medium">
                    <Star size={16} fill="currentColor" />
                    <span>{businessInfo.rating} ({businessInfo.reviewCount} reviews)</span>
                  </div>
                </div>

                {/* Main Headline */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6">
                  Professional{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-500">
                    Painting Contractor
                  </span>{" "}
                  in Massachusetts
                </h1>

                {/* Subheadline */}
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Transform your home or business with Massachusetts&apos; most trusted painting professionals.
                  {businessInfo.yearsInBusiness}+ years of experience, {businessInfo.projectsCompleted.toLocaleString()}+ projects completed.
                  <span className="text-emerald-400 font-semibold"> Free estimates within 24 hours.</span>
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <a
                    href={`tel:${businessInfo.phoneRaw}`}
                    className="inline-flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-4 px-8 rounded-full text-lg transition-all shadow-xl shadow-emerald-500/30 hover:scale-105"
                  >
                    <Phone size={22} />
                    Call {businessInfo.phone}
                  </a>
                  <a
                    href="#quote"
                    className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-full text-lg transition-all border border-white/20 hover:border-white/40"
                  >
                    Get Free Estimate
                    <ArrowRight size={20} />
                  </a>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Shield size={18} className="text-emerald-500" />
                    <span>Licensed & Insured</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Clock size={18} className="text-emerald-500" />
                    <span>Same Day Response</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Award size={18} className="text-emerald-500" />
                    <span>5-Year Warranty</span>
                  </div>
                </div>
              </div>

              {/* Right - Hero Image with Stats */}
              <div className="hidden lg:block">
                <div className="relative">
                  {/* Main Image */}
                  <div className="rounded-3xl overflow-hidden shadow-2xl shadow-black/40">
                    <Image
                      src="https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/695ad3283ccdd6426a027fb6.png"
                      alt="Professional painting services in Massachusetts"
                      width={600}
                      height={450}
                      className="w-full h-auto object-cover"
                      priority
                    />
                  </div>

                  {/* Floating Stats Card - Top Right */}
                  <div className="absolute -top-4 -right-4 bg-emerald-500 rounded-2xl p-4 shadow-xl animate-pulse">
                    <div className="text-white text-center">
                      <div className="text-3xl font-black">{businessInfo.yearsInBusiness}+</div>
                      <div className="text-emerald-100 text-sm font-medium">Years Experience</div>
                    </div>
                  </div>

                  {/* Floating Stats Card - Bottom Left */}
                  <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-2xl">
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 bg-emerald-500 rounded-full flex items-center justify-center">
                        <Star className="text-white" size={28} fill="white" />
                      </div>
                      <div>
                        <div className="text-2xl font-black text-gray-900">{businessInfo.rating}★</div>
                        <div className="text-sm text-gray-600">{businessInfo.reviewCount}+ Google Reviews</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            TRUST BAR - Quick Stats
            ============================================ */}
        <section className="bg-gray-50 border-b border-gray-200 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: Shield, value: "Licensed", label: "& Insured" },
                { icon: Users, value: "Family", label: "Owned Business" },
                { icon: Award, value: "5-Year", label: "Warranty" },
                { icon: Clock, value: "Same Week", label: "Start Available" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center">
                    <item.icon className="text-emerald-600" size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{item.value}</div>
                    <div className="text-gray-500 text-sm">{item.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================
            SERVICES SECTION
            ============================================ */}
        <section id="services" className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-600 rounded-full px-4 py-2 mb-4 text-sm font-medium">
                <Paintbrush size={16} />
                <span>Our Services</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
                Professional Painting Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From interior transformations to exterior protection, we deliver exceptional results on every project.
              </p>
            </div>

            {/* Service Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, i) => {
                const Icon = serviceIcons[service.slug as keyof typeof serviceIcons] || Paintbrush;
                return (
                  <Link
                    key={i}
                    href={`/${service.slug}`}
                    className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-emerald-200"
                  >
                    {/* Image */}
                    <div className="h-48 relative overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.name}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-3 left-3">
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                          <Icon size={20} className="text-emerald-600" />
                        </div>
                      </div>
                      {i === 0 && (
                        <div className="absolute top-3 right-3 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                          POPULAR
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                      <div className="flex items-center text-emerald-600 font-semibold text-sm group-hover:gap-2 transition-all">
                        Learn More
                        <ChevronRight size={16} className="ml-1" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================================
            ABOUT SECTION
            ============================================ */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image Side */}
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-xl">
                  <Image
                    src="https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/695ad8f105b511665630cfba.png"
                    alt="Mass Painters Pro team at work"
                    width={600}
                    height={450}
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mt-6">
                  {[
                    { value: `${businessInfo.yearsInBusiness}+`, label: "Years Experience" },
                    { value: `${(businessInfo.projectsCompleted / 1000).toFixed(0)}K+`, label: "Projects Completed" },
                    { value: `${businessInfo.citiesServed}+`, label: "Cities Served" },
                    { value: `${businessInfo.rating}★`, label: "Google Rating" },
                  ].map((stat, i) => (
                    <div key={i} className="bg-white rounded-xl p-4 shadow-sm text-center">
                      <div className="text-2xl font-black text-emerald-600">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Content Side */}
              <div>
                <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-600 rounded-full px-4 py-2 mb-4 text-sm font-medium">
                  <Users size={16} />
                  <span>About Us</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
                  Massachusetts&apos; Trusted Painting Professionals
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  For over {businessInfo.yearsInBusiness} years, Mass Painters Pro has been transforming homes and businesses
                  across Massachusetts. What started as a small family operation in Marlborough has grown into one of
                  the region&apos;s most trusted painting contractors.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  We&apos;re not just painters—we&apos;re craftsmen who take pride in every brush stroke.
                  Our team understands the unique challenges of New England homes, from historic preservation
                  requirements to weather-resistant exterior coatings.
                </p>

                {/* Certifications */}
                <div className="space-y-3 mb-8">
                  {businessInfo.certifications.slice(0, 4).map((cert, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 size={20} className="text-emerald-500 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{cert}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-6 rounded-full transition-all shadow-lg shadow-emerald-500/25 hover:scale-105"
                >
                  Learn More About Us
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            PROCESS SECTION
            ============================================ */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-600 rounded-full px-4 py-2 mb-4 text-sm font-medium">
                <Calendar size={16} />
                <span>Our Process</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
                How We Work
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From first call to final walkthrough, we make the painting process simple and stress-free.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  title: "Free Consultation",
                  desc: "We visit your property, discuss your vision, and provide a detailed estimate within 24 hours.",
                },
                {
                  step: "02",
                  title: "Color Selection",
                  desc: "Our design experts help you choose the perfect colors for your space and style.",
                },
                {
                  step: "03",
                  title: "Expert Preparation",
                  desc: "Thorough surface prep ensures paint adhesion and lasting results.",
                },
                {
                  step: "04",
                  title: "Final Walkthrough",
                  desc: "We inspect every detail with you and ensure complete satisfaction.",
                },
              ].map((item, i) => (
                <div key={i} className="relative group">
                  <div className="bg-gray-50 rounded-2xl p-6 h-full border border-gray-100 hover:border-emerald-200 transition-all hover:shadow-lg">
                    <div className="text-5xl font-black text-emerald-500/20 mb-4 group-hover:text-emerald-500/30 transition-colors">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                  {i < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                      <ChevronRight className="text-emerald-300" size={24} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================
            BEFORE/AFTER GALLERY
            ============================================ */}
        <section className="py-16 lg:py-24 bg-[#1C1F2E]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-400 rounded-full px-4 py-2 mb-4 text-sm font-medium">
                <Sparkles size={16} />
                <span>Our Work</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
                Before & After Transformations
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                See the dramatic difference professional painting makes. Real projects from Massachusetts homes.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/695ad8f105b511665630cfba.png",
                "https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/695ad89205b511551530c27b.png",
                "https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/695ad7123ccdd6fdb803536b.png",
                "https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/695ad674edb8a28b37d6bce7.png",
                "https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/695ad5cf05b5112dd73058c0.png",
                "https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/695ad3283ccdd6426a027fb6.png",
              ].map((img, i) => (
                <div key={i} className="group relative rounded-2xl overflow-hidden">
                  <Image
                    src={img}
                    alt={`Before and After Painting Transformation ${i + 1}`}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                      <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">Before</span>
                      <span className="bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full">After</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <a
                href="#quote"
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-4 px-8 rounded-full text-lg transition-all shadow-lg shadow-emerald-500/30 hover:scale-105"
              >
                Start Your Transformation
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </section>

        {/* ============================================
            TESTIMONIALS
            ============================================ */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-600 rounded-full px-4 py-2 mb-4 text-sm font-medium">
                <Star size={16} />
                <span>Testimonials</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
                What Our Customers Say
              </h2>
              <p className="text-xl text-gray-600">
                Don&apos;t just take our word for it—hear from our satisfied customers.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, j) => (
                      <Star key={j} size={18} className="text-yellow-400" fill="currentColor" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-gray-700 mb-4 leading-relaxed">&quot;{testimonial.text}&quot;</p>

                  {/* Author */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <div className="font-bold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.location}</div>
                    </div>
                    <div className="text-xs text-emerald-600 font-medium bg-emerald-50 px-3 py-1 rounded-full">
                      {testimonial.service}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Google Reviews Badge */}
            <div className="text-center mt-10">
              <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-sm border border-gray-100">
                <Image
                  src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                  alt="Google"
                  width={70}
                  height={24}
                  className="h-6 w-auto"
                />
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400" fill="currentColor" />
                  ))}
                </div>
                <span className="font-bold text-gray-900">{businessInfo.rating}</span>
                <span className="text-gray-500">({businessInfo.reviewCount}+ reviews)</span>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            AI COLOR VISUALIZER SECTION
            ============================================ */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-full px-4 py-2 mb-4 text-sm font-medium">
                <Sparkles size={16} />
                <span>AI-Powered Color Preview</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
                Visualize Your Dream Colors
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how different paint colors will look in your space before painting. Our AI-powered visualizer helps you make confident color choices.
              </p>
            </div>

            {/* Color Visualizer Grid */}
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {/* Room Preview */}
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10">
                <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                  <Home size={20} className="text-emerald-400" />
                  Living Room Preview
                </h3>
                <div className="relative rounded-2xl overflow-hidden">
                  <Image
                    src="https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/695ad3283ccdd6426a027fb6.png"
                    alt="Living room color visualization"
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover"
                  />
                  {/* Color Overlay Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-transparent mix-blend-overlay" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black/70 backdrop-blur-sm rounded-xl p-4">
                      <p className="text-emerald-400 text-sm font-semibold mb-1">Suggested Color</p>
                      <p className="text-white font-bold">Benjamin Moore &quot;Sage Wisdom&quot; 2138-40</p>
                    </div>
                  </div>
                </div>

                {/* Color Palette Options */}
                <div className="mt-4">
                  <p className="text-gray-400 text-sm mb-3">Popular 2025 Color Palettes:</p>
                  <div className="flex gap-2">
                    {[
                      { name: "Mocha Mousse", color: "#A47864", brand: "Pantone 2025" },
                      { name: "Whipped Sage", color: "#A3B899", brand: "Benjamin Moore" },
                      { name: "Naval", color: "#34495E", brand: "Sherwin-Williams" },
                      { name: "Warm Honey", color: "#D4A84B", brand: "Behr" },
                      { name: "Dusty Rose", color: "#D4A5A5", brand: "PPG" },
                    ].map((color, i) => (
                      <div key={i} className="group relative">
                        <div
                          className="w-10 h-10 rounded-full cursor-pointer ring-2 ring-transparent hover:ring-white transition-all shadow-lg"
                          style={{ backgroundColor: color.color }}
                        />
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                          <div className="bg-white rounded-lg px-3 py-2 shadow-xl text-xs">
                            <p className="font-bold text-gray-900">{color.name}</p>
                            <p className="text-gray-500">{color.brand}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Kitchen/Cabinet Preview */}
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10">
                <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                  <PaintBucket size={20} className="text-amber-400" />
                  Kitchen Cabinet Preview
                </h3>
                <div className="relative rounded-2xl overflow-hidden">
                  <Image
                    src="https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/695ad674edb8a28b37d6bce7.png"
                    alt="Kitchen cabinet color visualization"
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black/70 backdrop-blur-sm rounded-xl p-4">
                      <p className="text-amber-400 text-sm font-semibold mb-1">Trending Cabinet Color</p>
                      <p className="text-white font-bold">Sherwin-Williams &quot;Alabaster&quot; SW 7008</p>
                    </div>
                  </div>
                </div>

                {/* Cabinet Color Options */}
                <div className="mt-4">
                  <p className="text-gray-400 text-sm mb-3">Top Cabinet Finishes:</p>
                  <div className="flex gap-2">
                    {[
                      { name: "Pure White", color: "#FFFFFF", brand: "All Brands" },
                      { name: "Chantilly Lace", color: "#F5F5F5", brand: "Benjamin Moore" },
                      { name: "Deep Navy", color: "#1C3A5F", brand: "Sherwin-Williams" },
                      { name: "Forest Green", color: "#2D5A3D", brand: "Behr" },
                      { name: "Charcoal", color: "#36454F", brand: "PPG" },
                    ].map((color, i) => (
                      <div key={i} className="group relative">
                        <div
                          className="w-10 h-10 rounded-full cursor-pointer ring-2 ring-transparent hover:ring-white transition-all shadow-lg"
                          style={{ backgroundColor: color.color }}
                        />
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                          <div className="bg-white rounded-lg px-3 py-2 shadow-xl text-xs">
                            <p className="font-bold text-gray-900">{color.name}</p>
                            <p className="text-gray-500">{color.brand}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-2xl p-8 border border-white/10 max-w-2xl mx-auto">
                <h3 className="text-white text-xl font-bold mb-2">Want a Personalized Color Consultation?</h3>
                <p className="text-gray-400 mb-6">Our color experts will visit your home with sample boards and help you choose the perfect palette.</p>
                <a
                  href={`tel:${businessInfo.phoneRaw}`}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-bold py-3 px-6 rounded-full transition-all shadow-lg shadow-emerald-500/25"
                >
                  <Phone size={18} />
                  Schedule Free Color Consultation
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            SERVICE AREAS WITH MAP
            ============================================ */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-600 rounded-full px-4 py-2 mb-4 text-sm font-medium">
                <MapPin size={16} />
                <span>Service Areas</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
                Serving {businessInfo.citiesServed}+ Massachusetts Cities
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From MetroWest to Boston, Worcester to the North Shore—we&apos;re your local painting professionals.
              </p>
            </div>

            {/* Map and Cities Grid */}
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              {/* Google Map */}
              <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d188759.91867584764!2d-71.83211668308838!3d42.34517779614685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e38a2f4d5b1f67%3A0x8f9c5c6f4d5b1f67!2sMarlborough%2C%20MA!5e0!3m2!1sen!2sus!4v1704000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mass Painters Pro Service Area Map"
                  className="w-full h-full"
                />
              </div>

              {/* City Grid */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Cities We Serve</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-h-[360px] overflow-y-auto pr-2">
                  {cities.slice(0, 30).map((city) => (
                    <Link
                      key={city.slug}
                      href={`/ma/${city.slug}/interior-painting`}
                      className="flex items-center gap-2 p-3 bg-gray-50 rounded-xl hover:bg-emerald-50 hover:border-emerald-200 border border-gray-100 transition-all group"
                    >
                      <MapPin size={14} className="text-emerald-500 flex-shrink-0" />
                      <span className="text-gray-700 font-medium text-sm group-hover:text-emerald-700 truncate">
                        {city.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Location Info Card */}
            <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl p-6 border border-emerald-100">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={32} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">Our Main Office</h3>
                    <p className="text-gray-600">
                      {businessInfo.address.street}, {businessInfo.address.city}, {businessInfo.address.state} {businessInfo.address.zip}
                    </p>
                    <p className="text-emerald-600 font-medium">Serving all of Massachusetts</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <a
                    href={`https://www.google.com/maps/dir//${encodeURIComponent(businessInfo.address.street + ', ' + businessInfo.address.city + ', ' + businessInfo.address.state + ' ' + businessInfo.address.zip)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 px-5 rounded-full transition-all border border-gray-200"
                  >
                    Get Directions
                  </a>
                  <a
                    href={`tel:${businessInfo.phoneRaw}`}
                    className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-5 rounded-full transition-all"
                  >
                    <Phone size={18} />
                    Call Now
                  </a>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold"
              >
                View All Service Areas
                <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* ============================================
            CTA / QUOTE SECTION
            ============================================ */}
        <section id="quote" className="py-16 lg:py-24 bg-[#1C1F2E]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-400 rounded-full px-4 py-2 mb-6 text-sm font-medium">
                  <Sparkles size={16} />
                  <span>Free Estimate</span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6">
                  Ready to Transform Your Space?
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Get a free, no-obligation estimate from Massachusetts&apos; most trusted painting professionals.
                  We respond within 24 hours and can often start within the same week.
                </p>

                {/* Benefits */}
                <div className="space-y-4 mb-8">
                  {[
                    "Free detailed estimate within 24 hours",
                    "No high-pressure sales tactics",
                    "Transparent pricing with no hidden fees",
                    "5-year warranty on all work",
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 size={20} className="text-emerald-500 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Phone CTA */}
                <div className="bg-white/10 rounded-2xl p-6 border border-white/10">
                  <p className="text-gray-400 mb-2">Or call us directly:</p>
                  <a
                    href={`tel:${businessInfo.phoneRaw}`}
                    className="flex items-center gap-3 text-2xl font-bold text-white hover:text-emerald-400 transition-colors"
                  >
                    <Phone size={28} className="text-emerald-500" />
                    {businessInfo.phone}
                  </a>
                </div>
              </div>

              {/* Right - Form */}
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Your Free Quote</h3>
                <p className="text-gray-600 mb-6">Fill out the form and we&apos;ll contact you within 24 hours.</p>

                <iframe
                  src="https://api.leadconnectorhq.com/widget/form/PAkCy4I8PqgdMLhpiPb0"
                  className="w-full h-[500px] border-none"
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
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            FOOTER
            ============================================ */}
        <footer className="bg-gray-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
              {/* Company Info */}
              <div>
                <Image
                  src="https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/695a97fe6e700e1a414da216.svg"
                  alt="Mass Painters Pro"
                  width={160}
                  height={45}
                  className="h-10 w-auto mb-6 brightness-0 invert"
                />
                <p className="text-gray-400 mb-6">
                  Massachusetts&apos; trusted painting professionals since 2009. Transforming homes and businesses with
                  quality craftsmanship and exceptional service.
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

              {/* Services */}
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

              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-bold mb-6">Quick Links</h3>
                <ul className="space-y-3">
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
                    <Link href="/contact" className="text-gray-400 hover:text-emerald-400 transition-colors">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link href="#quote" className="text-gray-400 hover:text-emerald-400 transition-colors">
                      Free Estimate
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact */}
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
                  <li className="flex items-center gap-3">
                    <Clock size={20} className="text-emerald-500 flex-shrink-0" />
                    <span className="text-gray-400">
                      Mon-Fri: {businessInfo.hours.weekdays}<br />
                      Sat: {businessInfo.hours.saturday}
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Certifications & Authority Links */}
            <div className="border-t border-white/10 pt-8 pb-8">
              <div className="text-center">
                <p className="text-gray-500 text-xs mb-4">Certified & Recognized By Industry Leaders</p>
                <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-gray-500">
                  <a href="https://www.epa.gov/lead/lead-renovation-repair-and-painting-program" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
                    EPA Lead-Safe Certified
                  </a>
                  <span className="hidden md:inline text-gray-700">|</span>
                  <a href="https://www.benjaminmoore.com/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
                    Benjamin Moore Partner
                  </a>
                  <span className="hidden md:inline text-gray-700">|</span>
                  <a href="https://www.sherwin-williams.com/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
                    Sherwin-Williams Pro
                  </a>
                  <span className="hidden md:inline text-gray-700">|</span>
                  <a href="https://www.mass.gov/orgs/division-of-professional-licensure" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
                    MA Licensed Contractor
                  </a>
                  <span className="hidden md:inline text-gray-700">|</span>
                  <a href="https://www.paintcare.org/states/massachusetts/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
                    PaintCare MA Member
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-400 text-sm text-center md:text-left">
                  &copy; {new Date().getFullYear()} Mass Painters Pro. All rights reserved. | Licensed & Insured in MA
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <Link href="/privacy" className="hover:text-emerald-400 transition-colors">
                    Privacy Policy
                  </Link>
                  <Link href="/terms" className="hover:text-emerald-400 transition-colors">
                    Terms of Service
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
