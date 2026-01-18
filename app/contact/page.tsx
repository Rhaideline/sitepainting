import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  ArrowRight,
  CheckCircle2,
  MessageSquare,
} from "lucide-react";
import { services, businessInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Us | Mass Painters Pro - Massachusetts Painting Services",
  description:
    "Contact Mass Painters Pro for your painting needs in Massachusetts. Get a free estimate, schedule a consultation, or ask a question. Call (774) 341-5233 or fill out our form.",
  keywords: [
    "contact Mass Painters Pro",
    "painting estimate Massachusetts",
    "free painting quote MA",
    "painting consultation Boston",
    "painters phone number",
    "painting services contact",
  ],
  openGraph: {
    title: "Contact Mass Painters Pro | Free Estimates",
    description:
      "Get in touch with Massachusetts' most trusted painting professionals. Free estimates, fast response, quality guaranteed.",
    url: "https://masspainter.pro/contact",
    siteName: "Mass Painters Pro",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/695a97fe6e700e1a414da216.svg",
        width: 1200,
        height: 630,
        alt: "Contact Mass Painters Pro",
      },
    ],
  },
  alternates: {
    canonical: "https://masspainter.pro/contact",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://masspainter.pro",
  name: "Mass Painters Pro",
  image: "https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/695a97fe6e700e1a414da216.svg",
  description:
    "Professional painting services throughout Massachusetts. Interior, exterior, cabinet refinishing, and commercial painting.",
  url: "https://masspainter.pro",
  telephone: "+1-774-341-5233",
  email: "info@masspainterspro.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Main Street",
    addressLocality: "Marlborough",
    addressRegion: "MA",
    postalCode: "01752",
    addressCountry: "US",
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
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "200",
  },
};

export default function ContactPage() {
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
              <Link href="/commercial-painting" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
                Commercial
              </Link>
            </nav>

            <div className="hidden lg:flex items-center gap-4">
              <a href="tel:+17743415233" className="flex items-center gap-2 text-gray-700 hover:text-emerald-600 font-medium">
                <Phone size={18} />
                {businessInfo.phone}
              </a>
              <a
                href="#form"
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
          <div className="absolute inset-0 bg-gradient-to-br from-[#1C1F2E] via-[#1C1F2E] to-emerald-900/20" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-400 rounded-full px-4 py-2 mb-6 text-sm font-medium">
              <MessageSquare size={16} />
              <span>Get In Touch</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6">
              Contact{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-500">
                Mass Painters Pro
              </span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed">
              Ready to transform your space? Get in touch for a free estimate, schedule a consultation, or ask us anything about our painting services.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Phone */}
            <a
              href="tel:+17743415233"
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-emerald-200 transition-all group"
            >
              <div className="w-14 h-14 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-500 transition-colors">
                <Phone className="text-emerald-600 group-hover:text-white transition-colors" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
              <p className="text-2xl font-bold text-emerald-600 mb-1">{businessInfo.phone}</p>
              <p className="text-gray-600 text-sm">We answer calls 7 days a week</p>
            </a>

            {/* Email */}
            <a
              href={`mailto:${businessInfo.email}`}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-emerald-200 transition-all group"
            >
              <div className="w-14 h-14 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-500 transition-colors">
                <Mail className="text-emerald-600 group-hover:text-white transition-colors" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
              <p className="text-lg font-medium text-emerald-600 mb-1">{businessInfo.email}</p>
              <p className="text-gray-600 text-sm">We typically respond within 24 hours</p>
            </a>

            {/* Location */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="w-14 h-14 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-4">
                <MapPin className="text-emerald-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Our Location</h3>
              <p className="text-gray-700 mb-1">
                {businessInfo.address.street}<br />
                {businessInfo.address.city}, {businessInfo.address.state} {businessInfo.address.zip}
              </p>
              <p className="text-gray-600 text-sm">Serving all of Massachusetts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="form" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
                Request Your Free Estimate
              </h2>

              <p className="text-xl text-gray-600 mb-8">
                Fill out the form and one of our painting specialists will contact you within 24 hours to discuss your project.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "No-obligation, detailed estimates",
                  "Response within 24 hours",
                  "Expert recommendations",
                  "Flexible scheduling",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-emerald-500" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              {/* Business Hours */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="text-emerald-600" size={24} />
                  <h3 className="text-xl font-bold text-gray-900">Business Hours</h3>
                </div>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium">{businessInfo.hours.weekdays}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium">{businessInfo.hours.saturday}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium">{businessInfo.hours.sunday}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
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
                title="Contact Form"
              />
              <p className="text-center text-gray-500 text-sm mt-4">
                Your information is secure and will never be shared.
              </p>
            </div>
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
