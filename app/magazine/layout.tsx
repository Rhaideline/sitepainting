import { pageMetadata } from "@/lib/seo";

// The magazine page is a client component, so its metadata lives here.
export const metadata = pageMetadata({
  title: "Paint Color & Design Trends Magazine | Mass Painters Pro",
  description: "Paint color and finish trends for Massachusetts homes, with an interactive room color preview. Get matched with a local painter for a free estimate.",
  path: "/magazine",
});

export default function MagazineLayout({ children }: { children: React.ReactNode }) {
  return children;
}
