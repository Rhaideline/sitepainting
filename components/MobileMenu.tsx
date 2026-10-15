"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { services } from "@/lib/services";
import ServiceIcon from "./ServiceIcon";

const links = [
  { href: "/service-areas", label: "Service Areas" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/blog", label: "Blog" },
  { href: "/magazine", label: "Magazine" },
  { href: "/about", label: "About" },
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <>
      <button type="button" onClick={() => setIsOpen(true)} className="p-2 text-gray-900 hover:text-emerald-600 lg:hidden" aria-label="Open menu">
        <Menu size={28} />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Menu">
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={close} />
          <div className="fixed right-0 top-0 h-full w-80 max-w-full overflow-y-auto bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-gray-200 p-4">
              <span className="text-xl font-bold text-gray-900">Menu</span>
              <button type="button" onClick={close} className="p-2 text-gray-600 hover:text-gray-900" aria-label="Close menu">
                <X size={24} />
              </button>
            </div>
            <nav className="p-4" aria-label="Mobile">
              <button
                type="button"
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex w-full items-center justify-between rounded-lg px-4 py-3 font-semibold text-gray-900 hover:bg-gray-50"
                aria-expanded={servicesOpen}
              >
                Services <ChevronDown size={20} className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </button>
              {servicesOpen && (
                <div className="ml-2 mt-1 space-y-1">
                  {services.map((s) => (
                    <Link key={s.slug} href={`/services/${s.slug}`} onClick={close} className="flex items-center gap-3 rounded-lg px-4 py-3 text-gray-700 hover:bg-emerald-50 hover:text-emerald-700">
                      <ServiceIcon icon={s.icon} size={18} className="text-emerald-500" />
                      {s.name}
                    </Link>
                  ))}
                </div>
              )}
              {links.map((l) => (
                <Link key={l.href} href={l.href} onClick={close} className="flex items-center rounded-lg px-4 py-3 font-semibold text-gray-900 hover:bg-gray-50">
                  {l.label}
                </Link>
              ))}
            </nav>
            <div className="border-t border-gray-200 p-4">
              <Link href="/contact" onClick={close} className="flex w-full items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-4 font-bold text-white shadow-lg hover:bg-emerald-600">
                Get a Free Estimate <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
