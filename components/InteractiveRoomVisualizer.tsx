"use client";

import { useState } from "react";
import { Phone, Palette, MousePointer, ArrowRight } from "lucide-react";
import Link from "next/link";
import { businessInfo } from "@/lib/data";

// Interactive Room Colors
const roomColors = [
  { name: "Burnt Sienna Dream", hex: "#C65D3B" },
  { name: "Digital Lavender", hex: "#E6E6FA" },
  { name: "Forest Bathing Green", hex: "#2D5A4A" },
  { name: "Warm Concrete", hex: "#A69F98" },
  { name: "Classic White", hex: "#F8F6F4" },
  { name: "Midnight Navy", hex: "#1B2838" },
];

interface InteractiveRoomVisualizerProps {
  title?: string;
  subtitle?: string;
  showCTA?: boolean;
  compact?: boolean;
}

export default function InteractiveRoomVisualizer({
  title = "Visualize Your Space",
  subtitle = "Click on a color to see how it transforms this modern living room",
  showCTA = true,
  compact = false,
}: InteractiveRoomVisualizerProps) {
  const [selectedWallColor, setSelectedWallColor] = useState("#C65D3B");

  return (
    <section className={`${compact ? "py-12" : "py-20"} bg-gradient-to-b from-gray-900 to-gray-800`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-400 rounded-full px-5 py-2 mb-4 text-sm font-bold backdrop-blur-sm border border-emerald-500/30">
            <MousePointer size={16} />
            <span>Interactive Experience</span>
          </div>
          <h2 className={`${compact ? "text-3xl md:text-4xl" : "text-4xl md:text-5xl"} font-black text-white mb-4`}>
            {title}
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Room Preview */}
          <div className="lg:col-span-2">
            <div className={`relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 ${compact ? "aspect-[16/9]" : "aspect-[16/10]"}`}>
              {/* Wall Color Background */}
              <div
                className="absolute inset-0 transition-colors duration-700"
                style={{ backgroundColor: selectedWallColor }}
              />

              {/* Room Interior */}
              <div className="absolute inset-0 flex items-end justify-center p-6">
                {/* Floor */}
                <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-amber-900/40 to-transparent" />

                {/* Furniture - Sofa */}
                <div className="absolute bottom-[15%] left-[10%] w-[45%]">
                  <div className="relative">
                    <div className="bg-gray-800 h-20 rounded-t-3xl shadow-xl" />
                    <div className="bg-gray-700 h-10 rounded-b-lg shadow-xl">
                      <div className="absolute bottom-0 left-4 right-4 h-6 bg-gray-600 rounded-lg" />
                    </div>
                    <div className="absolute top-3 left-3 w-14 h-12 bg-emerald-600 rounded-lg transform -rotate-6" />
                    <div className="absolute top-3 right-3 w-14 h-12 bg-amber-600 rounded-lg transform rotate-6" />
                  </div>
                </div>

                {/* Coffee Table */}
                <div className="absolute bottom-[12%] left-[35%] w-[18%]">
                  <div className="bg-amber-800 h-3 rounded-lg shadow-lg" />
                  <div className="flex justify-between mt-1">
                    <div className="w-1 h-6 bg-amber-900" />
                    <div className="w-1 h-6 bg-amber-900" />
                  </div>
                  <div className="absolute -top-2 left-1/4 w-5 h-7 bg-white/80 rounded" />
                  <div className="absolute -top-1 right-1/4 w-6 h-2 bg-green-600 rounded-full" />
                </div>

                {/* Floor Lamp */}
                <div className="absolute bottom-[15%] right-[15%]">
                  <div className="w-1 h-28 bg-gray-700 mx-auto" />
                  <div className="w-14 h-8 bg-amber-100 rounded-full -mt-2 shadow-lg shadow-amber-200/50" />
                  <div className="w-3 h-3 bg-gray-800 rounded-full mx-auto -mt-6" />
                </div>

                {/* Side Table */}
                <div className="absolute bottom-[15%] right-[25%]">
                  <div className="w-10 h-14 bg-gray-800 rounded-lg shadow-lg">
                    <div className="absolute top-2 left-1 right-1 h-3 bg-emerald-500/50 rounded" />
                  </div>
                </div>

                {/* Wall Art */}
                <div className="absolute top-[12%] left-[18%] w-20 h-28 bg-white/90 rounded-lg shadow-xl p-1.5">
                  <div className="w-full h-full bg-gradient-to-br from-emerald-400 to-teal-600 rounded" />
                </div>
                <div className="absolute top-[18%] left-[42%] w-14 h-14 bg-white/90 rounded-full shadow-xl p-1.5">
                  <div className="w-full h-full bg-gradient-to-br from-amber-400 to-orange-600 rounded-full" />
                </div>

                {/* Plant */}
                <div className="absolute bottom-[15%] right-[5%]">
                  <div className="w-7 h-8 bg-amber-700 rounded-lg" />
                  <div className="absolute -top-14 left-1/2 -translate-x-1/2">
                    <div className="w-3 h-10 bg-green-700 rounded-full transform -rotate-12" />
                    <div className="w-3 h-12 bg-green-600 rounded-full transform rotate-12 -mt-8 ml-2" />
                    <div className="w-3 h-8 bg-green-800 rounded-full -mt-10 -ml-1" />
                  </div>
                </div>

                {/* Window */}
                <div className="absolute top-[8%] right-[8%] w-16 h-24 bg-white/20 rounded-lg border-4 border-white/40 backdrop-blur-sm">
                  <div className="absolute inset-0 flex">
                    <div className="w-1/2 border-r border-white/40" />
                  </div>
                  <div className="absolute top-1/2 left-0 right-0 border-b border-white/40" />
                </div>
              </div>

              {/* Color Name Overlay */}
              <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm rounded-xl px-3 py-2 border border-white/20">
                <p className="text-white font-bold text-sm">
                  {roomColors.find(c => c.hex === selectedWallColor)?.name}
                </p>
                <p className="text-gray-300 text-xs">{selectedWallColor}</p>
              </div>
            </div>
          </div>

          {/* Color Picker */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Palette size={18} className="text-emerald-400" />
              Select Wall Color
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {roomColors.map((color) => (
                <button
                  type="button"
                  key={color.hex}
                  onClick={() => setSelectedWallColor(color.hex)}
                  className={`group relative p-3 rounded-xl transition-all ${
                    selectedWallColor === color.hex
                      ? "ring-2 ring-emerald-400 ring-offset-2 ring-offset-gray-900 scale-105"
                      : "hover:scale-105"
                  }`}
                  style={{ backgroundColor: color.hex }}
                >
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 rounded-xl transition-colors" />
                  <div className={`text-xs font-bold ${
                    ["#E6E6FA", "#F8F6F4", "#A69F98"].includes(color.hex) ? "text-gray-800" : "text-white"
                  } text-center relative z-10`}>
                    {color.name}
                  </div>
                </button>
              ))}
            </div>

            {showCTA && (
              <div className="mt-5 p-4 bg-emerald-500/20 rounded-xl border border-emerald-500/30">
                <p className="text-emerald-400 text-sm font-medium mb-2">Pro Tip:</p>
                <p className="text-gray-300 text-xs">
                  Want to see this color in YOUR home? Call us for a free in-home color consultation!
                </p>
                <a
                  href={`tel:${businessInfo.phoneRaw}`}
                  className="mt-2 inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-bold text-sm"
                >
                  <Phone size={14} />
                  {businessInfo.phone}
                </a>
              </div>
            )}

            <Link
              href="/magazine"
              className="mt-4 w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-bold py-3 px-4 rounded-xl transition-all text-sm"
            >
              Explore 2026 Trends
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
