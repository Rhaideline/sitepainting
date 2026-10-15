import Link from "next/link";
import Image from "next/image";
import { ChevronRight, CheckCircle2, ArrowRight } from "lucide-react";
import type { StockImage } from "@/lib/images";
import type { Service } from "@/lib/services";
import ServiceIcon from "./ServiceIcon";

export function Breadcrumbs({ items }: { items: { name: string; path?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-400">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((it, i) => (
          <li key={i} className="flex items-center gap-1.5">
            {i > 0 && <ChevronRight size={14} aria-hidden="true" />}
            {it.path && i < items.length - 1 ? (
              <Link href={it.path} className="hover:text-white">{it.name}</Link>
            ) : (
              <span className="text-emerald-400" aria-current="page">{it.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/** Stock photo when available, otherwise a branded pattern with the service icon. Never a broken image. */
export function Visual({ image, service, priority, className = "" }: { image: StockImage | null; service: Service; priority?: boolean; className?: string }) {
  if (image) {
    return (
      <figure className={`relative overflow-hidden rounded-3xl shadow-2xl shadow-black/30 ${className}`}>
        <Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes="(min-width: 1024px) 560px, 100vw" className="h-full w-full object-cover" priority={priority} />
        <figcaption className="absolute bottom-2 right-3 rounded bg-black/40 px-2 py-0.5 text-[10px] text-white/80">{image.credit}</figcaption>
      </figure>
    );
  }
  return (
    <div className={`relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-500 via-emerald-600 to-[#1C1F2E] shadow-2xl ${className}`} aria-hidden="true">
      <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:22px_22px]" />
      <ServiceIcon icon={service.icon} size={96} className="relative text-white/90" />
    </div>
  );
}

export function CheckList({ items, columns = 1 }: { items: string[]; columns?: 1 | 2 }) {
  return (
    <ul className={`grid gap-3 ${columns === 2 ? "md:grid-cols-2" : ""}`}>
      {items.map((t) => (
        <li key={t} className="flex items-start gap-3 rounded-xl border border-gray-100 bg-gray-50 p-4">
          <CheckCircle2 size={20} className="mt-0.5 flex-shrink-0 text-emerald-500" aria-hidden="true" />
          <span className="font-medium text-gray-700">{t}</span>
        </li>
      ))}
    </ul>
  );
}

export function HowSteps() {
  const steps = [
    { t: "Tell us about the job", d: "Fill out one short form with your town, the service you need and a few project details." },
    { t: "Get matched locally", d: "We pass your request to an independent painting contractor who works in your area." },
    { t: "Compare and decide", d: "The contractor contacts you, visits if needed and gives you a written estimate. No obligation." },
  ];
  return (
    <ol className="grid gap-6 md:grid-cols-3">
      {steps.map((s, i) => (
        <li key={s.t} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 font-black text-white">{i + 1}</span>
          <h3 className="mt-4 text-lg font-bold text-gray-900">{s.t}</h3>
          <p className="mt-2 text-gray-600">{s.d}</p>
        </li>
      ))}
    </ol>
  );
}

export function CtaBand({ title, text, href = "#estimate" }: { title: string; text: string; href?: string }) {
  return (
    <section className="bg-gradient-to-r from-emerald-600 to-emerald-500 py-16">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-white md:text-4xl">{title}</h2>
        <p className="mt-4 text-lg text-emerald-50">{text}</p>
        <a href={href} className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-emerald-700 shadow-xl transition hover:bg-gray-100">
          Get My Free Estimate <ArrowRight size={20} />
        </a>
      </div>
    </section>
  );
}

export function FaqList({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <div className="space-y-3">
      {faqs.map((f) => (
        <details key={f.q} className="group rounded-xl border border-gray-100 bg-gray-50">
          <summary className="cursor-pointer list-none rounded-xl p-4 font-semibold text-gray-900 hover:bg-gray-100">{f.q}</summary>
          <p className="px-4 pb-4 text-gray-600">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
