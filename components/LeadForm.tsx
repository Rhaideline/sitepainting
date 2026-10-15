"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, Lock } from "lucide-react";
import { services } from "@/lib/services";

interface Props {
  city?: string; // pre-filled from the page (city name)
  service?: string; // pre-filled service slug
  compact?: boolean;
  heading?: string;
}

type Status = "idle" | "sending" | "done" | "error";

export default function LeadForm({ city, service, compact, heading }: Props) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, page: window.location.pathname }),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(body.error || "Something went wrong. Please try again.");
      setStatus("done");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "done") {
    return (
      <div className="rounded-3xl bg-white p-8 text-center shadow-2xl border border-gray-100" role="status">
        <CheckCircle2 className="mx-auto text-emerald-500" size={48} />
        <h3 className="mt-4 text-2xl font-black text-gray-900">Request received</h3>
        <p className="mt-2 text-gray-600">
          Thank you! A local painter will contact you by email or text to schedule your free estimate.
        </p>
      </div>
    );
  }

  const field =
    "w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20";

  return (
    <form onSubmit={onSubmit} className="rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-gray-100" noValidate={false}>
      <h3 className="text-2xl font-black text-gray-900">{heading || "Get your free estimate"}</h3>
      <p className="mt-1 mb-6 text-sm text-gray-600">
        Tell us about your project. A local painter{city ? ` serving ${city}` : ""} will follow up with you.
      </p>

      {/* honeypot: hidden from people, filled by bots */}
      <div className="hidden" aria-hidden="true">
        <label>
          Company website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className={`grid gap-4 ${compact ? "" : "sm:grid-cols-2"}`}>
        <div>
          <label htmlFor="lf-name" className="mb-1 block text-sm font-semibold text-gray-700">Full name</label>
          <input id="lf-name" name="name" required autoComplete="name" className={field} placeholder="Jane Smith" />
        </div>
        <div>
          <label htmlFor="lf-email" className="mb-1 block text-sm font-semibold text-gray-700">Email</label>
          <input id="lf-email" name="email" type="email" required autoComplete="email" className={field} placeholder="jane@email.com" />
        </div>
        <div>
          <label htmlFor="lf-phone" className="mb-1 block text-sm font-semibold text-gray-700">Mobile (for texts)</label>
          <input id="lf-phone" name="phone" type="tel" required autoComplete="tel" className={field} placeholder="(508) 555-0100" />
        </div>
        <div>
          <label htmlFor="lf-zip" className="mb-1 block text-sm font-semibold text-gray-700">ZIP code</label>
          <input id="lf-zip" name="zip" required inputMode="numeric" pattern="\d{5}" maxLength={5} autoComplete="postal-code" className={field} placeholder="01752" />
        </div>
        <div className={compact ? "" : "sm:col-span-2"}>
          <label htmlFor="lf-service" className="mb-1 block text-sm font-semibold text-gray-700">Service</label>
          <select id="lf-service" name="service" required defaultValue={service || ""} className={field}>
            <option value="" disabled>Choose a service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>{s.name}</option>
            ))}
          </select>
        </div>
        <div className={compact ? "" : "sm:col-span-2"}>
          <label htmlFor="lf-msg" className="mb-1 block text-sm font-semibold text-gray-700">Project details</label>
          <textarea id="lf-msg" name="message" rows={compact ? 3 : 4} className={field} placeholder="Rooms or areas, approximate size, timeline..." />
        </div>
      </div>
      <input type="hidden" name="city" value={city || ""} />

      {status === "error" && (
        <p className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">{error}</p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-500 py-4 text-lg font-bold text-white shadow-xl shadow-emerald-500/30 transition hover:bg-emerald-400 disabled:opacity-60"
      >
        {status === "sending" ? <Loader2 className="animate-spin" size={20} /> : null}
        {status === "sending" ? "Sending..." : "Get My Free Estimate"}
      </button>
      <p className="mt-3 flex items-center justify-center gap-1.5 text-center text-xs text-gray-500">
        <Lock size={12} /> Free and no obligation. We share your request only with the painter matched to your project.
      </p>
    </form>
  );
}
