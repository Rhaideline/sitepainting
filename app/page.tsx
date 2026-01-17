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
  PaintBucket,
  ChevronRight,
  Star,
  Clock,
  CheckCircle2,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

/**
 * Mass Painters Pro - Landing Page
 *
 * SEO Strategy:
 * - Primary keyword: "Painting Professionals Massachusetts"
 * - Secondary keywords: "Boston painters", "MA painting services", "Bay State painters"
 * - Local SEO: Multiple mentions of service areas throughout the page
 * - Semantic HTML structure for better crawling
 */

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll for sticky header styling
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
          TOP BAR - Contact info for quick access
          SEO: Phone number and email for local business schema
          ============================================ */}
      <div className="bg-navy-900 text-white py-2 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
            <div className="flex items-center gap-4">
              <a
                href="tel:+15551234567"
                className="flex items-center gap-1 hover:text-orange-400 transition-colors"
              >
                <Phone size={14} />
                <span>(555) 123-4567</span>
              </a>
              <a
                href="mailto:info@masspainterspro.com"
                className="flex items-center gap-1 hover:text-orange-400 transition-colors"
              >
                <Mail size={14} />
                <span>info@masspainterspro.com</span>
              </a>
            </div>
            {/* SEO: Geographic service area mention */}
            <div className="flex items-center gap-1 text-gray-300">
              <MapPin size={14} />
              <span>Serving All of Massachusetts</span>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================
          STICKY HEADER - Navigation
          Includes logo, nav links, and primary CTA
          ============================================ */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-lg"
            : "bg-white/95 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/695a97fe6e700e1a414da216.svg"
                alt="Mass Painters Pro - Professional Painting Services in Massachusetts"
                width={180}
                height={50}
                className="h-12 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link
                href="#services"
                className="text-navy-900 hover:text-orange-500 font-medium transition-colors"
              >
                Services
              </Link>
              <Link
                href="#about"
                className="text-navy-900 hover:text-orange-500 font-medium transition-colors"
              >
                About Us
              </Link>
              <Link
                href="#areas"
                className="text-navy-900 hover:text-orange-500 font-medium transition-colors"
              >
                Service Areas
              </Link>
              <Link
                href="#contact"
                className="text-navy-900 hover:text-orange-500 font-medium transition-colors"
              >
                Contact
              </Link>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <a
                href="#quote"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get My Free Quote
                <ChevronRight size={18} />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-navy-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <nav className="flex flex-col gap-4">
                <Link
                  href="#services"
                  className="text-navy-900 hover:text-orange-500 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="#about"
                  className="text-navy-900 hover:text-orange-500 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  href="#areas"
                  className="text-navy-900 hover:text-orange-500 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Service Areas
                </Link>
                <Link
                  href="#contact"
                  className="text-navy-900 hover:text-orange-500 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                <a
                  href="#quote"
                  className="inline-flex items-center justify-center gap-2 bg-orange-500 text-white font-bold py-3 px-6 rounded-lg mt-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get My Free Quote
                  <ChevronRight size={18} />
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* ============================================
          HERO SECTION
          SEO: Primary H1 with main keyword
          High-impact headline for conversions
          ============================================ */}
      <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white overflow-hidden">
        {/* Decorative paint brush strokes */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-orange-400 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              {/* SEO: Primary H1 with location keyword */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Top-Rated{" "}
                <span className="text-orange-500">Painting Professionals</span>{" "}
                in Massachusetts
              </h1>

              {/* SEO: Secondary keywords in subtitle */}
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Interior & Exterior painting you can trust.{" "}
                <span className="text-white font-semibold">
                  Licensed, Insured, and Ready to Transform Your Space.
                </span>
              </p>

              {/* SEO: Service area mention */}
              <p className="text-gray-400 mb-8">
                Proudly serving Boston, Worcester, Springfield, and all
                surrounding areas across the Bay State.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#quote"
                  className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
                >
                  Get Your Free Estimate
                  <ChevronRight size={20} />
                </a>
                <a
                  href="tel:+15551234567"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 border border-white/30"
                >
                  <Phone size={20} />
                  Call Now
                </a>
              </div>
            </div>

            {/* Hero Image/Visual */}
            <div className="hidden lg:block relative">
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 text-center">
                    <div className="text-4xl font-bold">15+</div>
                    <div className="text-sm mt-1">Years Experience</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-6 text-center">
                    <div className="text-4xl font-bold">5,000+</div>
                    <div className="text-sm mt-1">Projects Completed</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-6 text-center">
                    <div className="text-4xl font-bold">100%</div>
                    <div className="text-sm mt-1">Satisfaction Rate</div>
                  </div>
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 text-center">
                    <div className="text-4xl font-bold flex items-center justify-center gap-1">
                      4.9 <Star size={24} fill="currentColor" />
                    </div>
                    <div className="text-sm mt-1">Google Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          TRUST SIGNALS BAR
          SEO: Business credentials for E-E-A-T
          ============================================ */}
      <section className="bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Licensed & Insured */}
            <div className="flex items-center justify-center gap-4">
              <div className="flex-shrink-0 w-14 h-14 bg-navy-900 rounded-full flex items-center justify-center">
                <Shield className="text-orange-500" size={28} />
              </div>
              <div>
                <h3 className="font-bold text-navy-900 text-lg">
                  Licensed & Insured
                </h3>
                <p className="text-gray-600 text-sm">
                  Full coverage for your peace of mind
                </p>
              </div>
            </div>

            {/* Family Owned */}
            <div className="flex items-center justify-center gap-4">
              <div className="flex-shrink-0 w-14 h-14 bg-navy-900 rounded-full flex items-center justify-center">
                <Users className="text-orange-500" size={28} />
              </div>
              <div>
                <h3 className="font-bold text-navy-900 text-lg">Family Owned</h3>
                <p className="text-gray-600 text-sm">
                  Local Massachusetts business since 2009
                </p>
              </div>
            </div>

            {/* Satisfaction Guaranteed */}
            <div className="flex items-center justify-center gap-4">
              <div className="flex-shrink-0 w-14 h-14 bg-navy-900 rounded-full flex items-center justify-center">
                <Award className="text-orange-500" size={28} />
              </div>
              <div>
                <h3 className="font-bold text-navy-900 text-lg">
                  Satisfaction Guaranteed
                </h3>
                <p className="text-gray-600 text-sm">
                  We&apos;re not done until you&apos;re happy
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          SERVICES SECTION
          SEO: Service-specific keywords for each card
          ============================================ */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Professional Painting Services in Massachusetts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From cozy Boston apartments to sprawling Worcester estates, we
              deliver exceptional results for every project.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Residential Interior Card */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-orange-200">
              <div className="h-48 bg-gradient-to-br from-navy-800 to-navy-900 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Home
                  size={64}
                  className="text-white group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-navy-900 mb-3">
                  Residential Interior
                </h3>
                <p className="text-gray-600 mb-6">
                  Transform your living spaces with premium interior painting.
                  Bedrooms, kitchens, living rooms, and more throughout
                  Massachusetts homes.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 size={18} className="text-orange-500" />
                    Wall & ceiling painting
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 size={18} className="text-orange-500" />
                    Trim & molding work
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 size={18} className="text-orange-500" />
                    Color consultation included
                  </li>
                </ul>
                <a
                  href="#quote"
                  className="inline-flex items-center gap-2 text-orange-500 font-bold hover:text-orange-600 transition-colors"
                >
                  Request a Quote
                  <ChevronRight size={18} />
                </a>
              </div>
            </div>

            {/* Exterior Painting Card */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-orange-200">
              <div className="h-48 bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Paintbrush
                  size={64}
                  className="text-white group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-navy-900 mb-3">
                  Exterior Painting
                </h3>
                <p className="text-gray-600 mb-6">
                  Weather-resistant exterior painting built to withstand New
                  England&apos;s harsh seasons. Protect and beautify your property.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 size={18} className="text-orange-500" />
                    Siding & trim painting
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 size={18} className="text-orange-500" />
                    Deck & fence staining
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 size={18} className="text-orange-500" />
                    Power washing prep
                  </li>
                </ul>
                <a
                  href="#quote"
                  className="inline-flex items-center gap-2 text-orange-500 font-bold hover:text-orange-600 transition-colors"
                >
                  Request a Quote
                  <ChevronRight size={18} />
                </a>
              </div>
            </div>

            {/* Cabinet Refinishing Card */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-orange-200">
              <div className="h-48 bg-gradient-to-br from-navy-800 to-navy-900 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <PaintBucket
                  size={64}
                  className="text-white group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-navy-900 mb-3">
                  Cabinet Refinishing
                </h3>
                <p className="text-gray-600 mb-6">
                  Give your kitchen a stunning makeover without the cost of
                  replacement. Expert cabinet painting and refinishing services.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 size={18} className="text-orange-500" />
                    Kitchen cabinets
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 size={18} className="text-orange-500" />
                    Bathroom vanities
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 size={18} className="text-orange-500" />
                    Built-in furniture
                  </li>
                </ul>
                <a
                  href="#quote"
                  className="inline-flex items-center gap-2 text-orange-500 font-bold hover:text-orange-600 transition-colors"
                >
                  Request a Quote
                  <ChevronRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          LOCAL EXPERTISE SECTION
          SEO: Heavy local keyword optimization
          Focus on New England weather expertise
          ============================================ */}
      <section id="about" className="py-20 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Massachusetts Trusts{" "}
                <span className="text-orange-500">Mass Painters Pro</span>
              </h2>

              {/* SEO: Local expertise and weather-specific content */}
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                As a family-owned Bay State business, we understand the unique
                challenges that Massachusetts weather brings to your home&apos;s
                exterior and interior.
              </p>

              <p className="text-gray-400 mb-8">
                From the humid summers to the brutal nor&apos;easters, our painting
                solutions are specifically chosen for New England durability.
                We use premium paints and primers that resist cracking, peeling,
                and fading—even after the harshest winters.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                    <Clock size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">15+ Years of Local Experience</h3>
                    <p className="text-gray-400">
                      Serving Massachusetts communities since 2009
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                    <Shield size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Weather-Resistant Solutions</h3>
                    <p className="text-gray-400">
                      Products specifically selected for New England climate
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                    <Star size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">5-Year Warranty</h3>
                    <p className="text-gray-400">
                      We stand behind our work with industry-leading guarantees
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats/Social Proof */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Trusted Across the Commonwealth
              </h3>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-4 bg-white/5 rounded-xl">
                  <div className="text-4xl font-bold text-orange-500">5,000+</div>
                  <div className="text-gray-400 mt-1">Homes Painted</div>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-xl">
                  <div className="text-4xl font-bold text-orange-500">200+</div>
                  <div className="text-gray-400 mt-1">5-Star Reviews</div>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-xl">
                  <div className="text-4xl font-bold text-orange-500">50+</div>
                  <div className="text-gray-400 mt-1">Towns Served</div>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-xl">
                  <div className="text-4xl font-bold text-orange-500">100%</div>
                  <div className="text-gray-400 mt-1">Satisfaction</div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-white/5 rounded-xl p-6">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="text-orange-500"
                      fill="#f26522"
                    />
                  ))}
                </div>
                <p className="text-gray-300 italic mb-4">
                  &quot;Mass Painters Pro transformed our 100-year-old Victorian in
                  Worcester. Their attention to detail and knowledge of
                  historic home painting was exceptional. Highly recommend!&quot;
                </p>
                <p className="text-white font-semibold">
                  — Sarah M., Worcester, MA
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          QUOTE FORM SECTION
          Primary conversion point
          ============================================ */}
      <section id="quote" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                Get Your Free Painting Estimate
              </h2>
              <p className="text-xl text-gray-600">
                Fill out the form below and we&apos;ll get back to you within 24
                hours with a detailed quote.
              </p>
            </div>

            <form className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-semibold text-navy-900 mb-2"
                  >
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-semibold text-navy-900 mb-2"
                  >
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-navy-900 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-navy-900 mb-2"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="city"
                  className="block text-sm font-semibold text-navy-900 mb-2"
                >
                  City/Town in Massachusetts *
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                  placeholder="Boston, Worcester, Springfield..."
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="service"
                  className="block text-sm font-semibold text-navy-900 mb-2"
                >
                  Service Needed *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                >
                  <option value="">Select a service...</option>
                  <option value="interior">Residential Interior Painting</option>
                  <option value="exterior">Exterior Painting</option>
                  <option value="cabinet">Cabinet Refinishing</option>
                  <option value="commercial">Commercial Painting</option>
                  <option value="other">Other / Multiple Services</option>
                </select>
              </div>

              <div className="mb-8">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-navy-900 mb-2"
                >
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                  placeholder="Tell us about your project (rooms, square footage, timeline, etc.)..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
              >
                Get My Free Quote
              </button>

              <p className="text-center text-gray-500 text-sm mt-4">
                No obligation. We respect your privacy and will never share your
                information.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* ============================================
          AREAS WE SERVE SECTION
          SEO: Comprehensive local area coverage
          ============================================ */}
      <section id="areas" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Areas We Serve Across Massachusetts
            </h2>
            <p className="text-xl text-gray-600">
              From the coast to the Berkshires, we bring professional painting
              services to your doorstep.
            </p>
          </div>

          {/* SEO: Geographic keywords for local search */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "Boston",
              "Worcester",
              "Springfield",
              "Cambridge",
              "Lowell",
              "Brockton",
              "New Bedford",
              "Quincy",
              "Lynn",
              "Fall River",
              "Newton",
              "Somerville",
              "Lawrence",
              "Framingham",
              "Haverhill",
              "Waltham",
              "Brookline",
              "Plymouth",
              "Medford",
              "Taunton",
              "Weymouth",
              "Revere",
              "Peabody",
              "Methuen",
            ].map((city) => (
              <div
                key={city}
                className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-orange-50 hover:border-orange-200 border border-gray-100 transition-colors"
              >
                <MapPin size={16} className="text-orange-500 flex-shrink-0" />
                <span className="text-navy-900 font-medium">{city}</span>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-600 mt-8">
            Don&apos;t see your town?{" "}
            <a href="#quote" className="text-orange-500 font-semibold hover:underline">
              Contact us
            </a>{" "}
            — we likely serve your area too!
          </p>
        </div>
      </section>

      {/* ============================================
          FOOTER
          SEO: NAP consistency (Name, Address, Phone)
          ============================================ */}
      <footer id="contact" className="bg-navy-900 text-white">
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
                Massachusetts&apos; trusted painting professionals. Quality
                workmanship, honest pricing, and exceptional customer service
                since 2009.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    Our Services
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#areas"
                    className="text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    Service Areas
                  </a>
                </li>
                <li>
                  <a
                    href="#quote"
                    className="text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    Free Estimate
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-bold mb-6">Our Services</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    Interior Painting
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    Exterior Painting
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    Cabinet Refinishing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    Commercial Painting
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    Color Consultation
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info - SEO: NAP consistency */}
            <div>
              <h3 className="text-lg font-bold mb-6">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin size={20} className="text-orange-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-400">
                    123 Main Street
                    <br />
                    Boston, MA 02101
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={20} className="text-orange-500 flex-shrink-0" />
                  <a
                    href="tel:+15551234567"
                    className="text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    (555) 123-4567
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={20} className="text-orange-500 flex-shrink-0" />
                  <a
                    href="mailto:info@masspainterspro.com"
                    className="text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    info@masspainterspro.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} Mass Painters Pro. All rights
                reserved. | Licensed & Insured in Massachusetts
              </p>
              <div className="flex gap-6 text-sm">
                <a
                  href="#"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
