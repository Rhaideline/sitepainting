import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { businessInfo, services } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-[#1C1F2E] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/695a97fe6e700e1a414da216.svg"
                alt="Mass Painters Pro"
                width={160}
                height={45}
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-gray-400 mb-6">
              Massachusetts&apos; trusted painting professionals. Serving {businessInfo.citiesServed}+ cities with quality craftsmanship since 2009.
            </p>
            <div className="flex gap-4">
              <a href={businessInfo.social.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-emerald-500 rounded-full flex items-center justify-center transition-colors">
                <Facebook size={18} />
              </a>
              <a href={businessInfo.social.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-emerald-500 rounded-full flex items-center justify-center transition-colors">
                <Instagram size={18} />
              </a>
              <a href={businessInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-emerald-500 rounded-full flex items-center justify-center transition-colors">
                <Linkedin size={18} />
              </a>
              <a href={businessInfo.social.youtube} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-emerald-500 rounded-full flex items-center justify-center transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Our Services</h3>
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
                <Link href="/magazine" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Magazine
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
                <Link href="/#areas" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Service Areas
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={20} className="text-emerald-500 flex-shrink-0 mt-1" />
                <div>
                  <a href={`tel:${businessInfo.phoneRaw}`} className="text-gray-400 hover:text-emerald-400 transition-colors">
                    {businessInfo.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={20} className="text-emerald-500 flex-shrink-0 mt-1" />
                <div>
                  <a href={`mailto:${businessInfo.email}`} className="text-gray-400 hover:text-emerald-400 transition-colors">
                    {businessInfo.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-emerald-500 flex-shrink-0 mt-1" />
                <div className="text-gray-400">
                  {businessInfo.address.street}<br />
                  {businessInfo.address.city}, {businessInfo.address.state} {businessInfo.address.zip}
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-gray-400 text-sm text-center">
            &copy; {new Date().getFullYear()} Mass Painters Pro. All rights reserved. | Licensed & Insured in Massachusetts
          </p>
        </div>
      </div>
    </footer>
  );
}
