import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import { SITE } from "@/lib/site";
import { siteGraph } from "@/lib/seo";

const inter = Inter({ subsets: ["latin"], display: "swap" });

const ICON = "https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/6976aa87a87beb85c3e447e1.png";

// Site-wide identity only. Titles, descriptions, canonicals and robots are set per page (lib/seo.ts).
export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: SITE.name, template: `%s | ${SITE.name}` },
  applicationName: SITE.name,
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
  category: "Home Services",
  icons: { icon: [{ url: ICON, type: "image/png" }], apple: [{ url: ICON }] },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#1C1F2E",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <JsonLd data={siteGraph()} />
        {children}
      </body>
    </html>
  );
}
