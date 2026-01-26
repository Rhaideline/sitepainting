"use client";

import { useState } from "react";
import Image from "next/image";
import { Phone, Sparkles, RotateCcw, Check } from "lucide-react";
import { businessInfo } from "@/lib/data";

// 2025 trending paint colors with real brand names
const trendingColors = [
  { name: "Mocha Mousse", hex: "#A47864", brand: "Pantone 2025" },
  { name: "Whipped Sage", hex: "#A3B899", brand: "Benjamin Moore" },
  { name: "Naval", hex: "#34495E", brand: "Sherwin-Williams" },
  { name: "Warm Honey", hex: "#D4A84B", brand: "Behr" },
  { name: "Dusty Rose", hex: "#D4A5A5", brand: "PPG" },
  { name: "Simply White", hex: "#F5F3EF", brand: "Benjamin Moore" },
  { name: "Agreeable Gray", hex: "#D0CDC8", brand: "Sherwin-Williams" },
  { name: "Hale Navy", hex: "#434C56", brand: "Benjamin Moore" },
  { name: "Evergreen Fog", hex: "#96A48B", brand: "Sherwin-Williams" },
  { name: "Revere Pewter", hex: "#C2B9A7", brand: "Benjamin Moore" },
];

// Room presets
const rooms = [
  {
    id: "living",
    name: "Living Room",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80"
  },
  {
    id: "bedroom",
    name: "Bedroom",
    image: "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=800&q=80"
  },
  {
    id: "kitchen",
    name: "Kitchen",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80"
  },
];

export default function ColorVisualizer() {
  const [selectedColor, setSelectedColor] = useState(trendingColors[0]);
  const [selectedRoom, setSelectedRoom] = useState(rooms[0]);
  const [intensity, setIntensity] = useState(60);

  const resetColor = () => {
    setSelectedColor(trendingColors[0]);
    setIntensity(60);
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-full px-4 py-2 mb-4 text-sm font-medium">
            <Sparkles size={16} />
            <span>Interactive Color Visualizer</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
            Test Paint Colors On Your Walls
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Click on any color to see how it would look in different rooms. Adjust the intensity to match your lighting conditions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Room Preview */}
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10">
            {/* Room Selector */}
            <div className="flex gap-2 mb-4">
              {rooms.map((room) => (
                <button
                  key={room.id}
                  type="button"
                  onClick={() => setSelectedRoom(room)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedRoom.id === room.id
                      ? "bg-emerald-500 text-white"
                      : "bg-white/10 text-gray-300 hover:bg-white/20"
                  }`}
                >
                  {room.name}
                </button>
              ))}
            </div>

            {/* Preview with Color Overlay */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <Image
                src={selectedRoom.image}
                alt={`${selectedRoom.name} preview`}
                fill
                className="object-cover"
              />
              {/* Color Overlay */}
              <div
                className="absolute inset-0 mix-blend-multiply transition-all duration-500"
                style={{
                  backgroundColor: selectedColor.hex,
                  opacity: intensity / 100,
                }}
              />
              {/* Gradient for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

              {/* Selected Color Info */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-black/70 backdrop-blur-sm rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-lg shadow-lg border-2 border-white/30"
                      style={{ backgroundColor: selectedColor.hex }}
                    />
                    <div>
                      <p className="text-white font-bold text-lg">{selectedColor.name}</p>
                      <p className="text-emerald-400 text-sm">{selectedColor.brand}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Intensity Slider */}
            <div className="mt-4">
              <div className="flex justify-between items-center mb-2">
                <label className="text-gray-300 text-sm font-medium">Color Intensity</label>
                <span className="text-emerald-400 font-bold">{intensity}%</span>
              </div>
              <input
                type="range"
                min="20"
                max="100"
                value={intensity}
                onChange={(e) => setIntensity(Number(e.target.value))}
                className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Lighter</span>
                <span>Darker</span>
              </div>
            </div>

            {/* Reset Button */}
            <button
              type="button"
              onClick={resetColor}
              className="mt-4 flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
            >
              <RotateCcw size={16} />
              Reset to default
            </button>
          </div>

          {/* Color Palette */}
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10">
            <h3 className="text-white font-bold text-xl mb-2">2025 Trending Colors</h3>
            <p className="text-gray-400 text-sm mb-6">Click any color to preview it on the wall</p>

            <div className="grid grid-cols-2 gap-3">
              {trendingColors.map((color) => (
                <button
                  key={color.hex}
                  type="button"
                  onClick={() => setSelectedColor(color)}
                  className={`flex items-center gap-3 p-3 rounded-xl transition-all ${
                    selectedColor.hex === color.hex
                      ? "bg-white/20 ring-2 ring-emerald-500"
                      : "bg-white/5 hover:bg-white/10"
                  }`}
                >
                  <div className="relative">
                    <div
                      className="w-12 h-12 rounded-lg shadow-md"
                      style={{ backgroundColor: color.hex }}
                    />
                    {selectedColor.hex === color.hex && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Check size={20} className="text-white drop-shadow-lg" />
                      </div>
                    )}
                  </div>
                  <div className="text-left">
                    <p className="text-white font-medium text-sm">{color.name}</p>
                    <p className="text-gray-400 text-xs">{color.brand}</p>
                  </div>
                </button>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8 p-5 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-xl border border-emerald-500/30">
              <h4 className="text-white font-bold mb-2">Love this color?</h4>
              <p className="text-gray-300 text-sm mb-4">
                Our color experts can bring large samples to your home for a true-to-life preview in your actual lighting conditions.
              </p>
              <a
                href={`tel:${businessInfo.phoneRaw}`}
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-6 rounded-full transition-all text-sm"
              >
                <Phone size={16} />
                Schedule Free Color Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
