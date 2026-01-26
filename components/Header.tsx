"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Home, Paintbrush, PaintBucket, Building2, CheckCircle2, ArrowRight } from "lucide-react";
import { businessInfo } from "@/lib/data";
import MobileMenu from "./MobileMenu";

interface HeaderProps {
  currentPage?: string;
}

export default function Header({ currentPage }: HeaderProps) {
  return (
    <>
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

      {/* Header - White Background */}
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

            {/* Main Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link
                href="/"
                className={`font-semibold transition-colors ${currentPage === 'home' ? 'text-emerald-600' : 'text-gray-900 hover:text-emerald-600'}`}
              >
                Home
              </Link>

              {/* Mega Menu for Services */}
              <div className="relative group">
                <button
                  type="button"
                  className={`font-semibold transition-colors flex items-center gap-1 ${
                    ['interior-painting', 'exterior-painting', 'cabinet-refinishing', 'commercial-painting'].includes(currentPage || '')
                      ? 'text-emerald-600'
                      : 'text-gray-900 hover:text-emerald-600'
                  }`}
                >
                  Services
                  <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Mega Menu Dropdown */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[600px] bg-white rounded-2xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 p-6">
                  <div className="grid grid-cols-2 gap-4">
                    <Link href="/interior-painting" className="flex items-start gap-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 transition-all group/item">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover/item:bg-blue-200 transition-colors">
                        <Home className="text-blue-600" size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 group-hover/item:text-blue-600 transition-colors">Interior Painting</h3>
                        <p className="text-sm text-gray-500 mt-1">Transform your living spaces with premium finishes</p>
                      </div>
                    </Link>

                    <Link href="/exterior-painting" className="flex items-start gap-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-emerald-50 hover:to-emerald-100 transition-all group/item">
                      <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover/item:bg-emerald-200 transition-colors">
                        <Paintbrush className="text-emerald-600" size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 group-hover/item:text-emerald-600 transition-colors">Exterior Painting</h3>
                        <p className="text-sm text-gray-500 mt-1">Weather-resistant coatings for New England</p>
                      </div>
                    </Link>

                    <Link href="/cabinet-refinishing" className="flex items-start gap-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-amber-50 hover:to-amber-100 transition-all group/item">
                      <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover/item:bg-amber-200 transition-colors">
                        <PaintBucket className="text-amber-600" size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 group-hover/item:text-amber-600 transition-colors">Cabinet Refinishing</h3>
                        <p className="text-sm text-gray-500 mt-1">Expert kitchen and bathroom cabinet painting</p>
                      </div>
                    </Link>

                    <Link href="/commercial-painting" className="flex items-start gap-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-purple-50 hover:to-purple-100 transition-all group/item">
                      <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover/item:bg-purple-200 transition-colors">
                        <Building2 className="text-purple-600" size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 group-hover/item:text-purple-600 transition-colors">Commercial Painting</h3>
                        <p className="text-sm text-gray-500 mt-1">Professional business and office painting</p>
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

              <Link
                href="/magazine"
                className={`font-semibold transition-colors ${currentPage === 'magazine' ? 'text-emerald-600' : 'text-gray-900 hover:text-emerald-600'}`}
              >
                Magazine
              </Link>
              <Link
                href="/blog"
                className={`font-semibold transition-colors ${currentPage === 'blog' ? 'text-emerald-600' : 'text-gray-900 hover:text-emerald-600'}`}
              >
                Blog
              </Link>
              <Link
                href="/about"
                className={`font-semibold transition-colors ${currentPage === 'about' ? 'text-emerald-600' : 'text-gray-900 hover:text-emerald-600'}`}
              >
                About
              </Link>
              <Link
                href="/contact"
                className={`font-semibold transition-colors ${currentPage === 'contact' ? 'text-emerald-600' : 'text-gray-900 hover:text-emerald-600'}`}
              >
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

            {/* Mobile Menu */}
            <MobileMenu />
          </div>
        </div>
      </header>
    </>
  );
}
