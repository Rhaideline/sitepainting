"use client";

import { useState } from "react";
import { Phone, Sparkles, Check, Palette, MousePointer } from "lucide-react";
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

export default function ColorVisualizer() {
  const [selectedColor, setSelectedColor] = useState(trendingColors[0]);

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
            Click on any color to see how it would look in a modern living room. Visualize your space before you paint.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Room Preview - Enhanced with Detailed Furniture */}
          <div className="lg:col-span-2">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-[16/10]">
              {/* Wall Color Background */}
              <div
                className="absolute inset-0 transition-colors duration-700"
                style={{ backgroundColor: selectedColor.hex }}
              />

              {/* Room Interior - Realistic Furniture */}
              <div className="absolute inset-0">
                {/* Floor - Wooden Planks Effect */}
                <div className="absolute bottom-0 left-0 right-0 h-[28%]">
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-950 via-amber-900 to-amber-800" />
                  {/* Wood grain lines */}
                  {[...Array(12)].map((_, i) => (
                    <div key={i} className="absolute bottom-0 left-0 right-0 border-t border-amber-950/30" style={{ bottom: `${i * 8}%` }} />
                  ))}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* Baseboard */}
                <div className="absolute bottom-[28%] left-0 right-0 h-[2%] bg-white/90 shadow-md" />

                {/* Modern Sectional Sofa */}
                <div className="absolute bottom-[18%] left-[5%] w-[55%]">
                  {/* Sofa Shadow */}
                  <div className="absolute -bottom-2 left-2 right-2 h-4 bg-black/30 blur-md rounded-full" />

                  {/* Main Sofa Body */}
                  <div className="relative">
                    {/* Back Cushions */}
                    <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-slate-700 to-slate-800 rounded-t-2xl" />

                    {/* Left Arm */}
                    <div className="absolute top-0 left-0 w-8 h-24 bg-gradient-to-r from-slate-600 to-slate-700 rounded-tl-2xl rounded-bl-lg" />

                    {/* Right Arm (Lower - Chaise) */}
                    <div className="absolute top-4 right-0 w-8 h-20 bg-gradient-to-l from-slate-600 to-slate-700 rounded-tr-lg rounded-br-lg" />

                    {/* Seat Cushions */}
                    <div className="relative top-16 h-12 flex gap-1 px-8">
                      <div className="flex-1 bg-gradient-to-b from-slate-600 to-slate-700 rounded-lg shadow-inner" />
                      <div className="flex-1 bg-gradient-to-b from-slate-600 to-slate-700 rounded-lg shadow-inner" />
                      <div className="flex-1 bg-gradient-to-b from-slate-600 to-slate-700 rounded-lg shadow-inner" />
                    </div>

                    {/* Sofa Legs */}
                    <div className="absolute -bottom-2 left-4 w-3 h-3 bg-amber-900 rounded" />
                    <div className="absolute -bottom-2 left-1/2 w-3 h-3 bg-amber-900 rounded" />
                    <div className="absolute -bottom-2 right-4 w-3 h-3 bg-amber-900 rounded" />

                    {/* Throw Pillows */}
                    <div className="absolute top-2 left-10 w-14 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg transform -rotate-6 shadow-lg" />
                    <div className="absolute top-3 left-24 w-12 h-10 bg-gradient-to-br from-amber-400 to-amber-500 rounded-lg transform rotate-3 shadow-lg" />
                    <div className="absolute top-2 right-16 w-14 h-12 bg-gradient-to-br from-slate-400 to-slate-500 rounded-lg transform rotate-6 shadow-lg" />

                    {/* Throw Blanket */}
                    <div className="absolute top-10 right-4 w-20 h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded opacity-90 transform rotate-12">
                      <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_5px,rgba(0,0,0,0.05)_5px,rgba(0,0,0,0.05)_10px)]" />
                    </div>
                  </div>
                </div>

                {/* Modern Coffee Table */}
                <div className="absolute bottom-[12%] left-[30%] w-[25%]">
                  {/* Table Shadow */}
                  <div className="absolute -bottom-2 left-2 right-2 h-3 bg-black/30 blur-md rounded-full" />

                  {/* Table Top - Marble Effect */}
                  <div className="relative h-3 bg-gradient-to-r from-gray-100 via-white to-gray-200 rounded-lg shadow-lg">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(0,0,0,0.05)_0%,transparent_50%)]" />
                  </div>

                  {/* Metal Frame */}
                  <div className="absolute top-3 left-2 right-2 h-8 border-l-2 border-r-2 border-amber-700" />
                  <div className="absolute bottom-0 left-2 right-2 h-1 bg-amber-700" />

                  {/* Items on Table */}
                  <div className="absolute -top-5 left-[15%] w-7 h-10 bg-gradient-to-b from-white to-gray-100 rounded shadow-md">
                    <div className="absolute top-1 left-1 right-1 bottom-3 bg-gradient-to-br from-emerald-100 to-teal-200" />
                  </div>
                  <div className="absolute -top-4 left-[35%] w-5 h-5 bg-gradient-to-br from-amber-200 to-amber-300 rounded-full shadow-md" />
                  <div className="absolute -top-3 right-[20%] w-10 h-3 bg-gradient-to-r from-green-600 to-green-500 rounded-full shadow-md" />
                  <div className="absolute -top-6 right-[35%] w-4 h-8 bg-gradient-to-b from-gray-300 to-gray-400 rounded shadow-md" />
                </div>

                {/* Floor Lamp */}
                <div className="absolute bottom-[18%] right-[12%]">
                  {/* Lamp Shadow */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-2 bg-black/30 blur-sm rounded-full" />

                  {/* Base */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-2 bg-gradient-to-t from-amber-900 to-amber-800 rounded-full" />

                  {/* Pole */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-36 bg-gradient-to-r from-amber-800 to-amber-700 rounded-full" />

                  {/* Lamp Shade */}
                  <div className="absolute bottom-36 left-1/2 -translate-x-1/2 w-20 h-14 bg-gradient-to-b from-amber-50 to-amber-100 rounded-b-full rounded-t-lg shadow-lg">
                    {/* Inner glow */}
                    <div className="absolute inset-2 bg-gradient-to-b from-amber-200/50 to-transparent rounded-b-full" />
                  </div>

                  {/* Light Glow Effect */}
                  <div className="absolute bottom-32 left-1/2 -translate-x-1/2 w-32 h-32 bg-amber-200/20 rounded-full blur-2xl" />
                </div>

                {/* Side Table with Plant */}
                <div className="absolute bottom-[18%] right-[25%]">
                  {/* Table */}
                  <div className="relative">
                    <div className="w-14 h-2 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg shadow-lg" />
                    <div className="absolute top-2 left-2 w-1 h-12 bg-gray-900" />
                    <div className="absolute top-2 right-2 w-1 h-12 bg-gray-900" />

                    {/* Small Vase */}
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                      <div className="w-4 h-6 bg-gradient-to-b from-teal-400 to-teal-600 rounded-lg" />
                      <div className="absolute -top-4 left-0 w-2 h-5 bg-green-500 rounded-full transform -rotate-12" />
                      <div className="absolute -top-5 left-1 w-2 h-6 bg-green-600 rounded-full transform rotate-6" />
                    </div>
                  </div>
                </div>

                {/* Large Decorative Plant */}
                <div className="absolute bottom-[18%] right-[3%]">
                  {/* Pot */}
                  <div className="relative">
                    <div className="w-12 h-3 bg-gradient-to-b from-amber-600 to-amber-700 rounded-t-lg" />
                    <div className="w-10 h-10 mx-auto bg-gradient-to-b from-amber-700 to-amber-800 rounded-b-lg" />

                    {/* Plant Leaves */}
                    <div className="absolute -top-20 left-1/2 -translate-x-1/2">
                      <div className="absolute w-3 h-16 bg-gradient-to-t from-green-700 to-green-500 rounded-full transform -rotate-[20deg] left-0" />
                      <div className="absolute w-3 h-20 bg-gradient-to-t from-green-600 to-green-400 rounded-full transform rotate-[10deg] left-2" />
                      <div className="absolute w-3 h-14 bg-gradient-to-t from-green-800 to-green-600 rounded-full transform -rotate-[35deg] left-4" />
                      <div className="absolute w-3 h-[72px] bg-gradient-to-t from-green-700 to-green-500 rounded-full transform rotate-[25deg] left-1" />
                      <div className="absolute w-2 h-12 bg-gradient-to-t from-green-600 to-green-400 rounded-full transform -rotate-[5deg] left-3" />
                    </div>
                  </div>
                </div>

                {/* Wall Art - Large Frame */}
                <div className="absolute top-[12%] left-[15%]">
                  {/* Frame Shadow */}
                  <div className="absolute top-2 left-2 w-28 h-36 bg-black/20 blur-md rounded" />

                  {/* Frame */}
                  <div className="relative w-28 h-36 bg-gradient-to-br from-amber-100 to-white rounded shadow-xl p-2">
                    <div className="w-full h-full bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600 rounded overflow-hidden">
                      {/* Abstract Art Pattern */}
                      <div className="absolute top-2 left-2 w-8 h-8 bg-white/30 rounded-full" />
                      <div className="absolute bottom-4 right-2 w-12 h-6 bg-amber-300/40 rounded-full transform rotate-45" />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-16 bg-white/20 rounded-full transform rotate-12" />
                    </div>
                  </div>
                </div>

                {/* Wall Art - Circle Frame */}
                <div className="absolute top-[18%] left-[42%]">
                  <div className="absolute top-1 left-1 w-[72px] h-[72px] bg-black/20 blur-md rounded-full" />
                  <div className="relative w-[72px] h-[72px] bg-gradient-to-br from-white to-gray-100 rounded-full shadow-xl p-2">
                    <div className="w-full h-full bg-gradient-to-br from-amber-400 via-orange-500 to-red-500 rounded-full" />
                  </div>
                </div>

                {/* Wall Art - Small Frame */}
                <div className="absolute top-[25%] left-[55%]">
                  <div className="relative w-12 h-16 bg-white rounded shadow-lg p-1">
                    <div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-500 rounded" />
                  </div>
                </div>

                {/* Window with Curtains */}
                <div className="absolute top-[8%] right-[6%]">
                  {/* Window Frame */}
                  <div className="relative w-24 h-32 bg-gradient-to-b from-sky-200 to-sky-100 rounded-lg border-4 border-white shadow-xl">
                    {/* Window Panes */}
                    <div className="absolute inset-0 flex">
                      <div className="w-1/2 border-r-2 border-white/80" />
                    </div>
                    <div className="absolute top-1/2 left-0 right-0 border-b-2 border-white/80" />

                    {/* Light Reflection */}
                    <div className="absolute top-2 left-2 w-6 h-10 bg-white/40 rounded-sm transform -skew-x-12" />
                  </div>

                  {/* Left Curtain */}
                  <div className="absolute -left-4 top-0 w-6 h-36 bg-gradient-to-b from-slate-200 to-slate-300 rounded-b-lg shadow-md">
                    <div className="absolute inset-0 bg-[repeating-linear-gradient(180deg,transparent,transparent_4px,rgba(0,0,0,0.03)_4px,rgba(0,0,0,0.03)_8px)]" />
                  </div>

                  {/* Right Curtain */}
                  <div className="absolute -right-4 top-0 w-6 h-36 bg-gradient-to-b from-slate-200 to-slate-300 rounded-b-lg shadow-md">
                    <div className="absolute inset-0 bg-[repeating-linear-gradient(180deg,transparent,transparent_4px,rgba(0,0,0,0.03)_4px,rgba(0,0,0,0.03)_8px)]" />
                  </div>

                  {/* Curtain Rod */}
                  <div className="absolute -left-6 -top-2 w-36 h-1.5 bg-amber-700 rounded-full shadow-md" />
                  <div className="absolute -left-7 -top-2 w-2 h-2 bg-amber-800 rounded-full" />
                  <div className="absolute -right-7 -top-2 w-2 h-2 bg-amber-800 rounded-full" />
                </div>

                {/* Ceiling Light */}
                <div className="absolute top-[3%] left-[40%]">
                  <div className="w-1 h-6 bg-gray-600 mx-auto" />
                  <div className="w-16 h-4 bg-gradient-to-b from-amber-100 to-amber-200 rounded-b-full shadow-lg" />
                </div>

                {/* Rug under Coffee Table */}
                <div className="absolute bottom-[8%] left-[22%] w-[40%] h-[12%]">
                  <div className="w-full h-full bg-gradient-to-br from-slate-600/60 to-slate-700/60 rounded-lg">
                    <div className="absolute inset-2 border border-slate-500/30 rounded-lg" />
                    <div className="absolute inset-4 border border-slate-500/20 rounded-lg" />
                  </div>
                </div>
              </div>

              {/* Color Name Overlay */}
              <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-md rounded-xl px-5 py-3 border border-white/20 shadow-xl">
                <p className="text-white font-bold text-lg">{selectedColor.name}</p>
                <p className="text-emerald-400 text-sm">{selectedColor.brand}</p>
              </div>

              {/* Instructions Overlay */}
              <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/10">
                <p className="text-white/80 text-xs flex items-center gap-2">
                  <MousePointer size={12} />
                  Click colors to change wall
                </p>
              </div>
            </div>
          </div>

          {/* Color Palette */}
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10">
            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
              <Palette size={20} className="text-emerald-400" />
              2025 Trending Colors
            </h3>
            <p className="text-gray-400 text-sm mb-6">Click any color to preview it on the wall</p>

            <div className="grid grid-cols-2 gap-3">
              {trendingColors.map((color) => (
                <button
                  key={color.hex}
                  type="button"
                  onClick={() => setSelectedColor(color)}
                  className={`group relative p-3 rounded-xl transition-all duration-300 ${
                    selectedColor.hex === color.hex
                      ? "ring-2 ring-emerald-400 ring-offset-2 ring-offset-slate-800 scale-105 shadow-lg"
                      : "hover:scale-105 hover:shadow-md"
                  }`}
                  style={{ backgroundColor: color.hex }}
                >
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 rounded-xl transition-colors" />
                  {selectedColor.hex === color.hex && (
                    <div className="absolute top-1 right-1 w-5 h-5 bg-emerald-400 rounded-full flex items-center justify-center">
                      <Check size={12} className="text-white" />
                    </div>
                  )}
                  <div className={`text-xs font-bold text-center relative z-10 drop-shadow-sm ${
                    ["#F5F3EF", "#D0CDC8", "#C2B9A7", "#D4A5A5", "#A3B899"].includes(color.hex) ? "text-gray-800" : "text-white"
                  }`}>
                    {color.name}
                  </div>
                  <div className={`text-[10px] text-center relative z-10 mt-1 ${
                    ["#F5F3EF", "#D0CDC8", "#C2B9A7", "#D4A5A5", "#A3B899"].includes(color.hex) ? "text-gray-600" : "text-white/70"
                  }`}>
                    {color.brand}
                  </div>
                </button>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-6 p-4 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-xl border border-emerald-500/30">
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
