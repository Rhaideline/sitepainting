import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  ArrowRight,
  Calendar,
  Clock,
  User,
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  Mail,
} from "lucide-react";
import { blogArticles, services, businessInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Painting Tips & Insights Blog | Mass Painters Pro",
  description:
    "Expert painting tips, advice, and insights from Massachusetts' trusted painting professionals. Learn about interior painting, exterior painting, color trends, and home improvement.",
  keywords: [
    "painting tips",
    "painting advice Massachusetts",
    "interior painting tips",
    "exterior painting guide",
    "house painting blog",
    "paint color trends",
    "home improvement tips",
    "painting preparation",
  ],
  openGraph: {
    title: "Painting Tips & Insights Blog | Mass Painters Pro",
    description:
      "Expert painting tips, advice, and insights from Massachusetts' trusted painting professionals.",
    url: "https://masspainter.pro/blog",
    siteName: "Mass Painters Pro",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/6840882903eee05c80e3e93e.jpeg",
        width: 1200,
        height: 630,
        alt: "Mass Painters Pro Blog",
      },
    ],
  },
  alternates: {
    canonical: "https://masspainter.pro/blog",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": "https://masspainter.pro/blog",
  name: "Mass Painters Pro Blog",
  description:
    "Expert painting tips, advice, and insights from Massachusetts' trusted painting professionals.",
  url: "https://masspainter.pro/blog",
  publisher: {
    "@type": "Organization",
    name: "Mass Painters Pro",
    logo: {
      "@type": "ImageObject",
      url: "https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/695a97fe6e700e1a414da216.svg",
    },
  },
  blogPost: blogArticles.map((article) => ({
    "@type": "BlogPosting",
    headline: article.title,
    description: article.excerpt,
    url: `https://masspainter.pro/blog/${article.slug}`,
    datePublished: article.date,
    author: {
      "@type": "Person",
      name: article.author,
    },
    image: article.image,
  })),
};

export default function BlogPage() {
  const featuredArticle = blogArticles[0];
  const recentArticles = blogArticles.slice(1);

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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
              <Link href="/blog" className="text-emerald-400 font-medium">
                Blog
              </Link>
              <Link href="/about" className="text-white hover:text-emerald-400 font-medium transition-colors">
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
      <section className="relative bg-[#1C1F2E] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1C1F2E] via-[#1C1F2E] to-emerald-900/20" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <nav className="flex items-center gap-2 text-sm mb-8">
            <Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
            <span className="text-gray-600">/</span>
            <span className="text-emerald-400">Blog</span>
          </nav>

          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6">
              Painting Tips &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-500">
                Insights
              </span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed">
              Expert advice, industry insights, and practical tips from Massachusetts&apos; trusted painting professionals. Stay informed and make the best decisions for your home.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href={`/blog/${featuredArticle.slug}`} className="group">
            <article className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden">
                <Image
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-emerald-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                  Featured
                </div>
              </div>
              <div>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full font-medium">
                    {featuredArticle.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {new Date(featuredArticle.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    {featuredArticle.readTime}
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors">
                  {featuredArticle.title}
                </h2>
                <p className="text-xl text-gray-600 mb-6">
                  {featuredArticle.excerpt}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                    <User size={20} className="text-emerald-600" />
                  </div>
                  <span className="font-medium text-gray-700">{featuredArticle.author}</span>
                </div>
              </div>
            </article>
          </Link>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-12">Latest Articles</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentArticles.map((article) => (
              <Link key={article.slug} href={`/blog/${article.slug}`} className="group">
                <article className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:border-emerald-200 transition-all">
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
                        {article.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {article.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        {new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </span>
                      <span className="text-emerald-600 font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read More <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-[#1C1F2E]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Ready to Transform Your Home?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get a free estimate from Massachusetts&apos; most trusted painting professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+17743415233"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#1C1F2E] font-bold py-4 px-8 rounded-full hover:bg-gray-100 transition-all"
            >
              <Phone size={20} />
              Call {businessInfo.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-8 rounded-full transition-all shadow-lg shadow-emerald-500/25"
            >
              Get Free Estimate
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1C1F2E] border-t border-white/10 text-white py-16">
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
                <a href={businessInfo.social.facebook} aria-label="Follow us on Facebook" title="Facebook" className="w-10 h-10 bg-white/10 hover:bg-emerald-500 rounded-full flex items-center justify-center transition-colors">
                  <Facebook size={18} />
                </a>
                <a href={businessInfo.social.instagram} aria-label="Follow us on Instagram" title="Instagram" className="w-10 h-10 bg-white/10 hover:bg-emerald-500 rounded-full flex items-center justify-center transition-colors">
                  <Instagram size={18} />
                </a>
                <a href={businessInfo.social.linkedin} aria-label="Connect with us on LinkedIn" title="LinkedIn" className="w-10 h-10 bg-white/10 hover:bg-emerald-500 rounded-full flex items-center justify-center transition-colors">
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
