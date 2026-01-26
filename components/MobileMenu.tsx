"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, ChevronDown, Home, Paintbrush, Building2, PaintBucket } from "lucide-react";
import { businessInfo, services } from "@/lib/data";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const serviceIcons: Record<string, React.ReactNode> = {
    "interior-painting": <Home size={20} className="text-emerald-500" />,
    "exterior-painting": <Paintbrush size={20} className="text-emerald-500" />,
    "cabinet-refinishing": <PaintBucket size={20} className="text-emerald-500" />,
    "commercial-painting": <Building2 size={20} className="text-emerald-500" />,
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="lg:hidden p-2 text-gray-900 hover:text-emerald-600"
        aria-label="Open menu"
        title="Open menu"
      >
        <Menu size={28} />
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Menu Panel */}
          <div className="fixed right-0 top-0 h-full w-80 max-w-full bg-white shadow-2xl overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <span className="font-bold text-xl text-gray-900">Menu</span>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-2 text-gray-600 hover:text-gray-900"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Navigation */}
            <nav className="p-4">
              {/* Services Dropdown */}
              <div className="mb-2">
                <button
                  type="button"
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center justify-between w-full py-3 px-4 text-gray-900 font-semibold hover:bg-gray-50 rounded-lg"
                >
                  <span>Services</span>
                  <ChevronDown
                    size={20}
                    className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {servicesOpen && (
                  <div className="ml-4 mt-2 space-y-1">
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/${service.slug}`}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-3 py-3 px-4 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition-colors"
                      >
                        {serviceIcons[service.slug]}
                        <span>{service.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Magazine Link */}
              <Link
                href="/magazine"
                onClick={() => setIsOpen(false)}
                className="flex items-center py-3 px-4 text-gray-900 font-semibold hover:bg-gray-50 rounded-lg"
              >
                Magazine
              </Link>

              {/* Blog Link */}
              <Link
                href="/blog"
                onClick={() => setIsOpen(false)}
                className="flex items-center py-3 px-4 text-gray-900 font-semibold hover:bg-gray-50 rounded-lg"
              >
                Blog
              </Link>

              {/* About Link */}
              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className="flex items-center py-3 px-4 text-gray-900 font-semibold hover:bg-gray-50 rounded-lg"
              >
                About
              </Link>

              {/* Contact Link */}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center py-3 px-4 text-gray-900 font-semibold hover:bg-gray-50 rounded-lg"
              >
                Contact
              </Link>
            </nav>

            {/* CTA Button */}
            <div className="p-4 border-t border-gray-200">
              <a
                href={`tel:${businessInfo.phoneRaw}`}
                className="flex items-center justify-center gap-2 w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-6 rounded-full transition-all shadow-lg"
              >
                <Phone size={20} />
                {businessInfo.phone}
              </a>
              <p className="text-center text-gray-500 text-sm mt-3">
                Free Estimates Available
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
