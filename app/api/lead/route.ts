import { NextResponse } from "next/server";
import { getService } from "@/lib/services";

// Leads go to the dedicated "Mass Painters Pro" GHL sub-account.
// Required Vercel env vars (never commit these):
//   GHL_PIT          Private Integration Token with contacts.write
//   GHL_LOCATION_ID  sub-account (location) id
export const runtime = "nodejs";

const clean = (v: unknown, max = 500) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: bots fill the hidden field. Pretend success, store nothing.
  if (clean(body.website)) return NextResponse.json({ ok: true });

  const name = clean(body.name, 120);
  const email = clean(body.email, 200).toLowerCase();
  const phone = clean(body.phone, 40);
  const zip = clean(body.zip, 10);
  const serviceSlug = clean(body.service, 60);
  const message = clean(body.message, 2000);
  const city = clean(body.city, 80);
  const page = clean(body.page, 200);

  const service = getService(serviceSlug);
  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || phone.replace(/\D/g, "").length < 10 || !/^\d{5}$/.test(zip) || !service) {
    return NextResponse.json({ error: "Please fill in your name, a valid email, mobile number, 5-digit ZIP and a service." }, { status: 422 });
  }

  const token = process.env.GHL_PIT;
  const locationId = process.env.GHL_LOCATION_ID;
  if (!token || !locationId) {
    console.error("lead: GHL_PIT / GHL_LOCATION_ID not configured");
    return NextResponse.json({ error: "Our request system is temporarily unavailable. Please try again shortly." }, { status: 503 });
  }

  const [firstName, ...rest] = name.split(/\s+/);
  const tags = ["masspainter.pro", `service:${service.slug}`, city ? `city:${city.toLowerCase().replace(/\s+/g, "-")}` : "city:unknown"];

  const res = await fetch("https://services.leadconnectorhq.com/contacts/upsert", {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, Version: "2021-07-28", "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      locationId,
      firstName,
      lastName: rest.join(" ") || undefined,
      email,
      phone,
      postalCode: zip,
      city: city || undefined,
      state: "MA",
      source: "masspainter.pro",
      tags,
    }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    console.error("lead: GHL upsert failed", res.status, JSON.stringify(data).slice(0, 300));
    return NextResponse.json({ error: "We could not submit your request. Please try again in a moment." }, { status: 502 });
  }

  const contactId = data?.contact?.id;
  if (contactId) {
    const note = [`Service: ${service.name}`, city && `City page: ${city}`, `ZIP: ${zip}`, page && `Page: ${page}`, message && `Details: ${message}`]
      .filter(Boolean)
      .join("\n");
    await fetch(`https://services.leadconnectorhq.com/contacts/${contactId}/notes`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, Version: "2021-07-28", "Content-Type": "application/json" },
      body: JSON.stringify({ body: note }),
    }).catch((e) => console.error("lead: note failed", e));
  }

  return NextResponse.json({ ok: true });
}
