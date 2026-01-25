"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
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
  ThumbsUp,
  Calendar,
  BadgeCheck,
  Zap,
  Heart,
  Timer,
  PaintBucket,
} from "lucide-react";
import { cities, services, businessInfo } from "@/lib/data";

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* ============================================
          ANNOUNCEMENT BAR - Urgency & Trust
          ============================================ */}
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 text-white py-2.5 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2 font-medium">
            <Sparkles size={16} className="animate-pulse" />
            <span>Limited Time: Free Color Consultation with Every Quote</span>
            <span className="hidden sm:inline">|</span>
            <a href="tel:+17743415233" className="hidden sm:flex items-center gap-1 hover:underline">
              <Phone size={14} />
              Call Now: {businessInfo.phone}
            </a>
          </div>
        </div>
      </div>

      {/* ============================================
          STICKY HEADER - Modern Navigation
          ============================================ */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100"
            : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center">
              <Image
                src="https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/695a97fe6e700e1a414da216.svg"
                alt="Mass Painters Pro - Professional Painting Services in Massachusetts"
                width={180}
                height={50}
                className="h-11 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {[
                { href: "/interior-painting", label: "Interior" },
                { href: "/exterior-painting", label: "Exterior" },
                { href: "/cabinet-refinishing", label: "Cabinets" },
                { href: "/commercial-painting", label: "Commercial" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-emerald-600 font-medium transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
              <Link
                href="#areas"
                className="text-gray-700 hover:text-emerald-600 font-medium transition-colors relative group"
              >
                Areas
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 group-hover:w-full transition-all duration-300" />
              </Link>
            </nav>

            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+17743415233"
                className="flex items-center gap-2 text-gray-700 hover:text-emerald-600 font-medium transition-colors"
              >
                <Phone size={18} />
                <span>{businessInfo.phone}</span>
              </a>
              <a
                href="#quote"
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-105"
              >
                Free Quote
                <ArrowRight size={18} />
              </a>
            </div>

            <button
              className="lg:hidden p-2 text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-100 animate-in slide-in-from-top duration-200">
              <nav className="flex flex-col gap-3">
                {[
                  { href: "/interior-painting", label: "Interior Painting" },
                  { href: "/exterior-painting", label: "Exterior Painting" },
                  { href: "/cabinet-refinishing", label: "Cabinet Refinishing" },
                  { href: "/commercial-painting", label: "Commercial Painting" },
                  { href: "#areas", label: "Service Areas" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-gray-700 hover:text-emerald-600 font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <a
                  href="tel:+17743415233"
                  className="flex items-center gap-2 text-gray-700 font-medium py-2 px-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Phone size={18} className="text-emerald-500" />
                  {businessInfo.phone}
                </a>
                <a
                  href="#quote"
                  className="inline-flex items-center justify-center gap-2 bg-emerald-500 text-white font-bold py-3 px-6 rounded-full mt-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Free Quote
                  <ArrowRight size={18} />
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* ============================================
          HERO SECTION - VSL Style (Bold Headline)
          ============================================ */}
      <section className="relative overflow-hidden bg-[#1C1F2E]">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1C1F2E] via-[#1C1F2E] to-emerald-900/20" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
                <div className="flex -space-x-1">
                  {[1,2,3,4,5].map((i) => (
                    <Star key={i} size={14} className="text-yellow-400" fill="#facc15" />
                  ))}
                </div>
                <span className="text-white/90 text-sm font-medium">Rated 4.9/5 by 200+ Homeowners</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6">
                Transform Your Home With{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-500">
                  Massachusetts&apos; #1 Rated
                </span>{" "}
                Painting Pros
              </h1>

              {/* Sub-headline */}
              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Join 5,000+ happy homeowners who chose quality, reliability, and stunning results.
                <span className="text-white font-semibold"> Licensed, Insured, and Satisfaction Guaranteed.</span>
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <a
                  href="#quote"
                  className="group inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-105"
                >
                  Get Your Free Quote
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="tel:+17743415233"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 border border-white/20 backdrop-blur-sm"
                >
                  <Phone size={20} />
                  Call Now
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-emerald-500" />
                  <span>Free Estimates</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-emerald-500" />
                  <span>5-Year Warranty</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-emerald-500" />
                  <span>Same Week Start</span>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl shadow-black/30">
                  <Image
                    src="https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/695ad3283ccdd6426a027fb6.png"
                    alt="Professional painting services in Massachusetts"
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
                      <Star size={24} className="text-white" fill="white" />
                    </div>
                    <div>
                      <div className="text-2xl font-black text-gray-900">5,000+</div>
                      <div className="text-gray-500 text-sm">Projects Completed</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-emerald-500 rounded-2xl p-4 shadow-xl">
                  <div className="text-white text-center">
                    <div className="text-2xl font-black">15+</div>
                    <div className="text-emerald-100 text-sm">Years</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          SOCIAL PROOF BAR - Trust Signals
          ============================================ */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: Shield, title: "Licensed & Insured", desc: "Full coverage protection" },
              { icon: Users, title: "Family Owned", desc: "Local MA business" },
              { icon: Award, title: "5-Year Warranty", desc: "Guaranteed workmanship" },
              { icon: BadgeCheck, title: "Background Checked", desc: "Trusted professionals" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center">
                  <item.icon className="text-emerald-600" size={24} />
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

      {/* ============================================
          PROBLEM/AGITATE SECTION - VSL Style
          ============================================ */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 rounded-full px-4 py-2 mb-6 text-sm font-medium">
            <Timer size={16} />
            <span>Don&apos;t Let This Happen to You</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight">
            Tired of Painters Who Show Up Late, Leave a Mess, and Cut Corners?
          </h2>

          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            We&apos;ve heard the horror stories. Contractors who ghost you mid-project. Paint that starts peeling after one New England winter. Furniture damaged by careless crews.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { problem: "Unreliable contractors", solution: "We show up on time, every time" },
              { problem: "Poor quality paint jobs", solution: "Premium paints + skilled craftsmen" },
              { problem: "Hidden fees & surprises", solution: "Transparent, upfront pricing" },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 text-left">
                <div className="text-red-500 line-through text-sm mb-2">{item.problem}</div>
                <div className="flex items-center gap-2 text-emerald-600 font-semibold">
                  <CheckCircle2 size={18} />
                  {item.solution}
                </div>
              </div>
            ))}
          </div>

          <a
            href="#quote"
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 shadow-lg shadow-emerald-500/25 hover:scale-105"
          >
            Experience the Difference
            <ArrowRight size={20} />
          </a>
        </div>
      </section>

      {/* ============================================
          BEFORE/AFTER GALLERY - Real Results
          ============================================ */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-600 rounded-full px-4 py-2 mb-4 text-sm font-medium">
              <Sparkles size={16} />
              <span>Real Results</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              Before & After Transformations
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See the dramatic difference professional painting makes. These are real projects from Massachusetts homes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/695ad8f105b511665630cfba.png",
              "https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/695ad89205b511551530c27b.png",
              "https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/695ad7123ccdd6fdb803536b.png",
              "https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/695ad674edb8a28b37d6bce7.png",
              "https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/695ad5cf05b5112dd73058c0.png",
            ].map((img, i) => (
              <div key={i} className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <Image
                  src={img}
                  alt={`Before and After Painting Transformation ${i + 1}`}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex justify-between text-white text-sm font-medium">
                      <span className="bg-red-500/80 px-3 py-1 rounded-full">Before</span>
                      <span className="bg-emerald-500/80 px-3 py-1 rounded-full">After</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="#quote"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 shadow-lg shadow-emerald-500/25 hover:scale-105"
            >
              Get Your Free Quote
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* ============================================
          SERVICES SECTION - Modern Cards
          ============================================ */}
      <section id="services" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-600 rounded-full px-4 py-2 mb-4 text-sm font-medium">
              <Paintbrush size={16} />
              <span>Our Services</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              Professional Painting Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From cozy apartments to sprawling estates, we deliver exceptional results across Massachusetts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Home,
                title: "Interior Painting",
                desc: "Transform your living spaces with premium paints and expert craftsmanship.",
                features: ["Walls & Ceilings", "Trim & Molding", "Color Consultation"],
                href: "/interior-painting",
                image: "https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/695ad1a7edb8a226dcd5b69f.png",
              },
              {
                icon: Paintbrush,
                title: "Exterior Painting",
                desc: "Weather-resistant finishes built to withstand New England's harsh climate.",
                features: ["Siding & Trim", "Deck Staining", "Power Washing"],
                href: "/exterior-painting",
                image: "https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/695ad0ef3ccdd6a866021204.png",
              },
              {
                icon: PaintBucket,
                title: "Cabinet Refinishing",
                desc: "Give your kitchen a stunning makeover at a fraction of replacement cost.",
                features: ["Kitchen Cabinets", "Bathroom Vanities", "Built-ins"],
                href: "/cabinet-refinishing",
                image: "https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/695ad202edb8a223b9d5c8c9.png",
              },
              {
                icon: Building2,
                title: "Commercial Painting",
                desc: "Minimal disruption, maximum impact for your business space.",
                features: ["After-Hours Work", "Large Crews", "Fast Turnaround"],
                href: "/commercial-painting",
                image: "https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/695ad3283ccdd6426a027fb6.png",
              },
            ].map((service, i) => (
              <Link
                key={i}
                href={service.href}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-emerald-200"
              >
                <div className="h-48 relative overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <service.icon size={20} className="text-emerald-600" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{service.desc}</p>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle2 size={14} className="text-emerald-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-1 text-emerald-600 font-semibold text-sm group-hover:gap-2 transition-all">
                    Learn More
                    <ChevronRight size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          WHY CHOOSE US - VSL Benefits Section
          ============================================ */}
      <section className="py-16 lg:py-24 bg-[#1C1F2E] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-400 rounded-full px-4 py-2 mb-6 text-sm font-medium">
                <Heart size={16} />
                <span>Why Homeowners Love Us</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 leading-tight">
                The Mass Painters Pro{" "}
                <span className="text-emerald-400">Difference</span>
              </h2>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                We&apos;re not just painters—we&apos;re craftsmen who take pride in transforming homes
                across the Bay State. Here&apos;s why 5,000+ homeowners trust us:
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: Clock,
                    title: "15+ Years Local Experience",
                    desc: "We know Massachusetts homes and what it takes to protect them from harsh New England weather.",
                  },
                  {
                    icon: Shield,
                    title: "5-Year Workmanship Warranty",
                    desc: "We stand behind our work with one of the industry&apos;s strongest guarantees.",
                  },
                  {
                    icon: Zap,
                    title: "Premium Materials Only",
                    desc: "Benjamin Moore, Sherwin-Williams—we use only top-tier paints for lasting results.",
                  },
                  {
                    icon: ThumbsUp,
                    title: "100% Satisfaction Promise",
                    desc: "We&apos;re not done until you&apos;re thrilled with every brushstroke.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center">
                      <item.icon size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial Card */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <div className="flex items-center gap-1 mb-4">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} size={24} className="text-yellow-400" fill="#facc15" />
                ))}
              </div>

              <blockquote className="text-xl text-gray-200 italic mb-6 leading-relaxed">
                &quot;Mass Painters Pro transformed our 100-year-old Victorian in Worcester.
                Their attention to detail and knowledge of historic home painting was exceptional.
                Three neighbors have already asked for their number!&quot;
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  SM
                </div>
                <div>
                  <div className="font-bold text-white">Sarah M.</div>
                  <div className="text-gray-400">Worcester, MA • Verified Customer</div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-black text-emerald-400">200+</div>
                    <div className="text-gray-400 text-sm">5-Star Reviews</div>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-emerald-400">98%</div>
                    <div className="text-gray-400 text-sm">Referral Rate</div>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-emerald-400">A+</div>
                    <div className="text-gray-400 text-sm">BBB Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          QUOTE FORM SECTION - Primary Conversion
          ============================================ */}
      <section id="quote" className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-600 rounded-full px-4 py-2 mb-6 text-sm font-medium">
                <Calendar size={16} />
                <span>Get Started Today</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight">
                Get Your Free, No-Obligation Quote in 24 Hours
              </h2>

              <p className="text-xl text-gray-600 mb-8">
                Fill out the form and one of our painting specialists will contact you
                with a detailed, transparent estimate.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "No high-pressure sales tactics",
                  "Detailed, itemized estimates",
                  "Flexible scheduling options",
                  "Financing available (0% APR)",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 size={14} className="text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4 p-4 bg-amber-50 rounded-xl border border-amber-200">
                <Sparkles className="text-amber-500 flex-shrink-0" size={24} />
                <p className="text-amber-800 text-sm">
                  <span className="font-bold">Limited Time:</span> Book this month and receive a complimentary color consultation ($150 value)!
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-3xl shadow-2xl shadow-gray-200/50 p-8 border border-gray-100">
              <div style={{ minHeight: '550px' }}>
                <iframe
                  src="https://api.leadconnectorhq.com/widget/form/PAkCy4I8PqgdMLhpiPb0"
                  style={{ width: '100%', height: '550px', border: 'none', borderRadius: '8px' }}
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
              <p className="text-center text-gray-500 text-sm mt-4">
                Your information is secure and will never be shared.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          AREAS WE SERVE - SEO Rich Section
          ============================================ */}
      <section id="areas" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-600 rounded-full px-4 py-2 mb-4 text-sm font-medium">
              <MapPin size={16} />
              <span>Service Areas</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              Serving 100+ Massachusetts Communities
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From Boston to Worcester, we bring professional painting services to your doorstep.
            </p>
          </div>

          {/* City Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-8">
            {cities.slice(0, 24).map((city) => (
              <Link
                key={city.slug}
                href={`/ma/${city.slug}/interior-painting`}
                className="flex items-center gap-2 p-3 bg-gray-50 rounded-xl hover:bg-emerald-50 hover:border-emerald-200 border border-gray-100 transition-all duration-300 group"
              >
                <MapPin size={14} className="text-emerald-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium text-sm group-hover:text-emerald-700">{city.name}</span>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-4">
              Don&apos;t see your town? We serve all of Massachusetts!
            </p>
            <a
              href="#quote"
              className="inline-flex items-center gap-2 text-emerald-600 font-bold hover:text-emerald-700 transition-colors"
            >
              Contact us for service in your area
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* ============================================
          FINAL CTA - Urgency Section
          ============================================ */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-emerald-600 to-emerald-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6">
            Ready to Transform Your Home?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied Massachusetts homeowners. Get your free quote today and see why we&apos;re the Bay State&apos;s most trusted painters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#quote"
              className="inline-flex items-center justify-center gap-2 bg-white text-emerald-600 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:bg-gray-100 hover:scale-105 shadow-xl"
            >
              Get My Free Quote
              <ArrowRight size={20} />
            </a>
            <a
              href="tel:+17743415233"
              className="inline-flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300"
            >
              <Phone size={20} />
              {businessInfo.phone}
            </a>
          </div>
        </div>
      </section>

      {/* ============================================
          FOOTER - Modern Design
          ============================================ */}
      <footer className="bg-[#1C1F2E] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
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
                Massachusetts&apos; trusted painting professionals. Quality workmanship,
                honest pricing, and exceptional service since 2009.
              </p>
              <div className="flex gap-3">
                {[
                  { icon: Facebook, href: businessInfo.social.facebook },
                  { icon: Instagram, href: businessInfo.social.instagram },
                  { icon: Linkedin, href: businessInfo.social.linkedin },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    className="w-10 h-10 bg-white/10 hover:bg-emerald-500 rounded-full flex items-center justify-center transition-colors"
                    aria-label={social.icon.name}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-bold mb-6">Services</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/${service.slug}`}
                      className="text-gray-400 hover:text-emerald-400 transition-colors"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Areas */}
            <div>
              <h3 className="text-lg font-bold mb-6">Popular Areas</h3>
              <ul className="space-y-3">
                {cities.slice(0, 6).map((city) => (
                  <li key={city.slug}>
                    <Link
                      href={`/ma/${city.slug}/interior-painting`}
                      className="text-gray-400 hover:text-emerald-400 transition-colors"
                    >
                      {city.name} Painters
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
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
                  <a
                    href="tel:+17743415233"
                    className="text-gray-400 hover:text-emerald-400 transition-colors"
                  >
                    {businessInfo.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={20} className="text-emerald-500 flex-shrink-0" />
                  <a
                    href={`mailto:${businessInfo.email}`}
                    className="text-gray-400 hover:text-emerald-400 transition-colors"
                  >
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

          {/* Bottom Bar */}
          <div className="border-t border-white/10 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} Mass Painters Pro. All rights reserved. | Licensed & Insured in MA
              </p>
              <div className="flex gap-6 text-sm">
                <Link href="/privacy" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
