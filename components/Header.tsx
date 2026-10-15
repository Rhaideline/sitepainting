import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";
import { services } from "@/lib/services";
import { SITE } from "@/lib/site";
import ServiceIcon from "./ServiceIcon";
import MobileMenu from "./MobileMenu";

interface HeaderProps {
  currentPage?: string;
}

const nav = [
  { href: "/service-areas", label: "Service Areas", key: "areas" },
  { href: "/how-it-works", label: "How It Works", key: "how" },
  { href: "/blog", label: "Blog", key: "blog" },
  { href: "/magazine", label: "Magazine", key: "magazine" },
];

export default function Header({ currentPage }: HeaderProps) {
  const link = (active: boolean) => `font-semibold transition-colors ${active ? "text-emerald-600" : "text-gray-900 hover:text-emerald-600"}`;
  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 shadow-sm backdrop-blur">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded focus:bg-white focus:px-3 focus:py-2">
        Skip to content
      </a>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center" aria-label={`${SITE.name} home`}>
          <Image src={SITE.logo} alt={SITE.name} width={180} height={50} className="h-11 w-auto" priority />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          <div className="group relative">
            <Link href="/services" className={`${link(currentPage === "services")} flex items-center gap-1`}>
              Services <ChevronDown size={16} className="transition-transform group-hover:rotate-180" />
            </Link>
            <div className="invisible absolute left-1/2 top-full mt-4 w-[640px] -translate-x-1/2 rounded-2xl border border-gray-100 bg-white p-5 opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
              <div className="grid grid-cols-3 gap-2">
                {services.map((s) => (
                  <Link key={s.slug} href={`/services/${s.slug}`} className="flex items-center gap-3 rounded-xl p-3 transition hover:bg-emerald-50">
                    <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                      <ServiceIcon icon={s.icon} size={18} />
                    </span>
                    <span className="text-sm font-bold text-gray-900">{s.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {nav.map((n) => (
            <Link key={n.key} href={n.href} className={link(currentPage === n.key)}>
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 font-bold text-white shadow-lg shadow-emerald-500/25 transition hover:bg-emerald-600"
          >
            Free Estimate <ArrowRight size={18} />
          </Link>
        </div>
        <MobileMenu />
      </div>
    </header>
  );
}
