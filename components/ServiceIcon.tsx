import { Home, Paintbrush, PaintBucket, Building2, Fence, Hammer, Droplets, Layers, Palette } from "lucide-react";
import type { Service } from "@/lib/services";

const MAP = {
  home: Home,
  brush: Paintbrush,
  cabinet: PaintBucket,
  building: Building2,
  deck: Fence,
  wall: Hammer,
  spray: Droplets,
  paper: Layers,
  palette: Palette,
} as const;

export default function ServiceIcon({ icon, size = 20, className }: { icon: Service["icon"]; size?: number; className?: string }) {
  const Icon = MAP[icon] ?? Paintbrush;
  return <Icon size={size} className={className} aria-hidden="true" />;
}
