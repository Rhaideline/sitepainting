import Link from "next/link";
import Image from "next/image";
import { services } from "@/lib/services";
import { cities } from "@/lib/cities";
import { SITE } from "@/lib/site";

// Footer links to the largest towns: strong internal links without listing all 109.
const topCities = [...cities].sort((a, b) => b.population - a.population).slice(0, 12);

export default function Footer() {
  return (
    <footer className="bg-[#1C1F2E] text-gray-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <Image src={SITE.logo} alt={SITE.name} width={170} height={48} className="h-10 w-auto rounded bg-white p-1" />
          <p className="mt-4 text-sm leading-relaxed text-gray-400">{SITE.description}</p>
          <Link href="/contact" className="mt-5 inline-block rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-bold text-white hover:bg-emerald-400">
            Get a free estimate
          </Link>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-white">Services</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}><Link href={`/services/${s.slug}`} className="hover:text-emerald-400">{s.name}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-white">Popular towns</h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
            {topCities.map((c) => (
              <li key={c.slug}><Link href={`/${c.slug}`} className="hover:text-emerald-400">{c.name}</Link></li>
            ))}
          </ul>
          <Link href="/service-areas" className="mt-4 inline-block text-sm font-semibold text-emerald-400 hover:text-emerald-300">All {cities.length} service areas →</Link>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-white">Company</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/how-it-works" className="hover:text-emerald-400">How it works</Link></li>
            <li><Link href="/about" className="hover:text-emerald-400">About</Link></li>
            <li><Link href="/blog" className="hover:text-emerald-400">Blog</Link></li>
            <li><Link href="/magazine" className="hover:text-emerald-400">Magazine</Link></li>
            <li><Link href="/contact" className="hover:text-emerald-400">Free estimate</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-6 text-xs leading-relaxed text-gray-500 sm:px-6 lg:px-8">
          <p>{SITE.disclosure}</p>
          <p className="mt-2">© {new Date().getFullYear()} {SITE.name}. Stock photography used under the Unsplash and Pexels licenses.</p>
        </div>
      </div>
    </footer>
  );
}
