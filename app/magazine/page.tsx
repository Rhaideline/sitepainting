"use client";

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Phone,
  ArrowRight,
  Star,
  Palette,
  Brush,
  Sparkles,
  TrendingUp,
  Eye,
  Heart,
  Layers,
  Sun,
  Moon,
  Droplets,
  Mountain,
  Flower2,
  Gem,
  Play,
  ChevronRight,
  Zap,
  Clock,
  BookOpen,
  Home,
  Sofa,
  Lamp,
  Frame,
  Newspaper,
  Bell,
  ExternalLink,
  MousePointer,
} from "lucide-react";
import { businessInfo } from "@/lib/data";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// 2026 Color Trends Data - Updated for 2026
const colorTrends2026 = [
  {
    id: "peach-fuzz-evolution",
    name: "Burnt Sienna Dream",
    hex: "#C65D3B",
    brand: "Pantone 18-1345",
    category: "Color of the Year 2026",
    description: "A bold evolution of warm earth tones. This rich terracotta speaks to our desire for grounding and authenticity in an increasingly digital world.",
    psychology: "Evokes warmth, creativity, and connection to earth",
    bestFor: "Living rooms, dining rooms, creative spaces",
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
    article: "/blog/paint-color-trends-2025-massachusetts",
  },
  {
    id: "digital-lavender",
    name: "Digital Lavender",
    hex: "#E6E6FA",
    brand: "Benjamin Moore 2026-60",
    category: "Tech-Inspired",
    description: "A soft, ethereal purple that bridges the physical and digital worlds. The color of AI interfaces and calming tech spaces.",
    psychology: "Promotes focus, creativity, and digital wellness",
    bestFor: "Home offices, meditation rooms, bedrooms",
    image: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800",
    article: "/blog/choosing-paint-colors-massachusetts-homes",
  },
  {
    id: "forest-bathing",
    name: "Forest Bathing Green",
    hex: "#2D5A4A",
    brand: "Sherwin-Williams SW 2026",
    category: "Biophilic Design",
    description: "A deep, saturated forest green inspired by the Japanese practice of Shinrin-yoku. Brings the restorative power of nature indoors.",
    psychology: "Reduces stress, improves concentration, connects to nature",
    bestFor: "Bedrooms, bathrooms, reading nooks",
    image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
    article: "/blog/modern-interior-design-styles-paint",
  },
  {
    id: "warm-concrete",
    name: "Warm Concrete",
    hex: "#A69F98",
    brand: "Farrow & Ball No. 2026",
    category: "Industrial Luxe",
    description: "The industrial aesthetic evolves with warmth. This sophisticated gray-beige hybrid brings urban edge with cozy undertones.",
    psychology: "Creates grounding, modern sophistication with warmth",
    bestFor: "Kitchens, lofts, contemporary spaces",
    image: "https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800",
    article: "/blog/paint-finishes-textures-guide",
  },
];

// Breaking News Items
const breakingNews = [
  "NEW: Pantone reveals 2026 Color of the Year - Burnt Sienna Dream",
  "TREND ALERT: AI-generated color palettes are revolutionizing interior design",
  "HOT: Limewash finishes see 300% increase in demand across Massachusetts",
  "EXCLUSIVE: Benjamin Moore launches sustainable paint line for 2026",
];

// Interactive Room Colors
const roomColors = [
  { name: "Burnt Sienna Dream", hex: "#C65D3B" },
  { name: "Digital Lavender", hex: "#E6E6FA" },
  { name: "Forest Bathing Green", hex: "#2D5A4A" },
  { name: "Warm Concrete", hex: "#A69F98" },
  { name: "Classic White", hex: "#F8F6F4" },
  { name: "Midnight Navy", hex: "#1B2838" },
];

// Texture Trends 2026
const textureTrends2026 = [
  {
    name: "Microcement",
    description: "The ultimate seamless finish. Ultra-thin cement coating creates a continuous surface from floors to walls to countertops. The industrial-meets-luxe aesthetic of 2026.",
    finish: "Smooth, seamless, industrial",
    bestColors: ["Warm grays", "Off-whites", "Charcoal"],
    difficulty: "Professional only",
    icon: Gem,
    image: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "/blog/paint-finishes-textures-guide",
  },
  {
    name: "Clay Plaster",
    description: "Natural, breathable, and sustainable. Clay plaster regulates humidity and creates a soft, organic texture that's both ancient and ultra-modern.",
    finish: "Matte, organic, tactile",
    bestColors: ["Earth tones", "Terracotta", "Sage"],
    difficulty: "Professional recommended",
    icon: Mountain,
    image: "https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "/blog/paint-finishes-textures-guide",
  },
  {
    name: "Zellige Effect",
    description: "Moroccan-inspired hand-cut tile look achieved through paint. The perfectly imperfect aesthetic adds artisanal charm to any space.",
    finish: "Glossy, irregular, artisanal",
    bestColors: ["Deep blues", "Emerald", "Terracotta"],
    difficulty: "Advanced DIY",
    icon: Layers,
    image: "https://images.pexels.com/photos/1571447/pexels-photo-1571447.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "/blog/paint-finishes-textures-guide",
  },
  {
    name: "Ombre Walls",
    description: "Gradient color transitions from floor to ceiling. The ethereal effect adds dimension and drama while maintaining sophistication.",
    finish: "Gradient, dreamy, dimensional",
    bestColors: ["Blues", "Sunset tones", "Neutrals"],
    difficulty: "Professional recommended",
    icon: Droplets,
    image: "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "/blog/paint-finishes-textures-guide",
  },
];

// Featured Articles
const featuredArticles = [
  {
    title: "The Complete Guide to Sustainable Paints in 2026",
    excerpt: "Zero-VOC, carbon-negative, and biodegradable options for the eco-conscious homeowner.",
    category: "Sustainability",
    readTime: "8 min read",
    image: "https://images.pexels.com/photos/1571452/pexels-photo-1571452.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "/blog/best-premium-paints-2025",
    featured: true,
  },
  {
    title: "AI Color Matching: The Future is Here",
    excerpt: "How artificial intelligence is revolutionizing paint selection and interior design.",
    category: "Technology",
    readTime: "5 min read",
    image: "https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "/blog/choosing-paint-colors-massachusetts-homes",
    featured: false,
  },
  {
    title: "Japandi 2.0: The Evolution Continues",
    excerpt: "Japanese minimalism meets Scandinavian warmth in this enduring design trend.",
    category: "Design Trends",
    readTime: "6 min read",
    image: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "/blog/modern-interior-design-styles-paint",
    featured: false,
  },
];

// Design Movements 2026
const designMovements2026 = [
  {
    name: "Dopamine Decor",
    description: "Bold, joyful colors that spark happiness. After years of neutrals, 2026 embraces unapologetic color.",
    colors: ["Hot pink", "Electric blue", "Sunshine yellow", "Lime green"],
    icon: Zap,
    link: "/blog/paint-color-trends-2025-massachusetts",
  },
  {
    name: "Quiet Luxury 2.0",
    description: "The evolution continues with richer textures and deeper earth tones. Understated opulence.",
    colors: ["Chocolate brown", "Camel", "Burgundy", "Olive"],
    icon: Heart,
    link: "/blog/modern-interior-design-styles-paint",
  },
  {
    name: "Digital Detox",
    description: "Spaces designed for unplugging. Soft, calming colors that reduce screen fatigue.",
    colors: ["Soft sage", "Blush", "Cream", "Dusty blue"],
    icon: Sun,
    link: "/blog/choosing-paint-colors-massachusetts-homes",
  },
  {
    name: "Neo-Maximalism",
    description: "Pattern mixing, bold colors, and collected-over-time aesthetic. More is more in 2026.",
    colors: ["Jewel tones", "Deep teal", "Mustard", "Plum"],
    icon: Sparkles,
    link: "/blog/modern-interior-design-styles-paint",
  },
];

export default function MagazinePage() {
  const [selectedWallColor, setSelectedWallColor] = useState("#C65D3B");
  const [newsIndex, setNewsIndex] = useState(0);

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="magazine" />

      {/* Breaking News Ticker */}
      <div className="bg-gradient-to-r from-red-600 via-red-500 to-red-600 text-white py-2 overflow-hidden relative">
        <div className="absolute left-0 top-0 bottom-0 bg-red-700 px-4 flex items-center gap-2 z-10 shadow-lg">
          <Bell size={16} className="animate-pulse" />
          <span className="font-black text-sm uppercase tracking-wider">Breaking</span>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pl-32">
          <div className="flex items-center gap-8 animate-marquee whitespace-nowrap">
            {[...breakingNews, ...breakingNews].map((news, i) => (
              <span key={i} className="flex items-center gap-4 text-sm font-medium">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                {news}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Section - Magazine Cover 2026 */}
      <section className="relative bg-[#0A0B0D] overflow-hidden min-h-[90vh] flex items-center">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A0B0D] via-[#1a1a2e] to-[#0A0B0D]" />
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-emerald-500/20 via-purple-500/10 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-orange-500/20 via-red-500/10 to-transparent rounded-full blur-3xl" />
          {/* Floating Elements */}
          <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-emerald-400 rounded-full animate-bounce opacity-60" />
          <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-purple-400 rounded-full animate-bounce delay-300 opacity-60" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Edition Badge */}
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-5 py-2 text-sm font-black tracking-widest uppercase rounded-full shadow-lg shadow-red-500/30">
                  January 2026
                </div>
                <div className="bg-white/10 backdrop-blur-sm text-white px-5 py-2 text-sm font-medium rounded-full border border-white/20">
                  <Newspaper size={14} className="inline mr-2" />
                  Digital Edition
                </div>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
                  Paint Trends
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 animate-gradient">
                  Magazine 2026
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-xl">
                The definitive guide to colors, textures, and design movements
                transforming homes in the new year.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Link
                  href="#interactive-room"
                  className="group inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-bold py-4 px-8 rounded-full transition-all shadow-xl shadow-emerald-500/30 hover:scale-105"
                >
                  <MousePointer size={20} />
                  Try Interactive Visualizer
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="#trends"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-full transition-all border border-white/30 backdrop-blur-sm"
                >
                  <BookOpen size={20} />
                  Read Articles
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: "12+", label: "Trend Reports" },
                  { value: "50+", label: "Color Palettes" },
                  { value: "2026", label: "Predictions" },
                ].map((stat, i) => (
                  <div key={i} className="text-center p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
                    <div className="text-2xl font-black text-emerald-400">{stat.value}</div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Magazine Cover Preview */}
            <div className="relative hidden lg:block">
              <div className="relative perspective-1000">
                {/* 3D Magazine Stack Effect */}
                <div className="absolute top-8 left-8 w-full h-full bg-gray-800 rounded-2xl transform rotate-6 opacity-30" />
                <div className="absolute top-4 left-4 w-full h-full bg-gray-700 rounded-2xl transform rotate-3 opacity-50" />
                <div className="relative bg-gradient-to-br from-[#1C1F2E] to-[#0A0B0D] rounded-2xl overflow-hidden shadow-2xl border border-white/10 transform hover:rotate-0 transition-transform duration-500">
                  <div className="aspect-[3/4] relative">
                    <Image
                      src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Magazine Cover - Modern Interior 2026"
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Cover Content */}
                    <div className="absolute top-4 left-4 right-4">
                      <div className="text-emerald-400 font-black text-xl tracking-wider">PAINT TRENDS</div>
                      <div className="text-white text-xs tracking-widest mt-1">JANUARY 2026</div>
                    </div>

                    <div className="absolute bottom-6 left-4 right-4">
                      <div className="text-white font-black text-3xl leading-tight mb-2">
                        THE COLOR
                        <br />REVOLUTION
                      </div>
                      <div className="flex gap-2 mt-3">
                        <span className="bg-emerald-500/80 text-white text-xs px-2 py-1 rounded-full">AI Design</span>
                        <span className="bg-purple-500/80 text-white text-xs px-2 py-1 rounded-full">Sustainability</span>
                        <span className="bg-orange-500/80 text-white text-xs px-2 py-1 rounded-full">Textures</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex flex-col items-center justify-center text-white transform rotate-12 shadow-2xl animate-bounce-slow">
                <span className="text-xs font-medium">Issue</span>
                <span className="text-2xl font-black">#01</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Room Visualizer */}
      <section id="interactive-room" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-400 rounded-full px-5 py-2 mb-4 text-sm font-bold backdrop-blur-sm border border-emerald-500/30">
              <MousePointer size={16} />
              <span>Interactive Experience</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Visualize Your Space
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Click on a color below to see how it transforms this modern living room with furniture
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Room Preview */}
            <div className="lg:col-span-2">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-[16/10]">
                {/* Wall Color Background */}
                <div
                  className="absolute inset-0 transition-colors duration-700"
                  style={{ backgroundColor: selectedWallColor }}
                />

                {/* Room Interior SVG Overlay */}
                <div className="absolute inset-0 flex items-end justify-center p-8">
                  {/* Floor */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-amber-900/40 to-transparent" />

                  {/* Furniture - Sofa */}
                  <div className="absolute bottom-[15%] left-[10%] w-[45%]">
                    <div className="relative">
                      {/* Sofa Back */}
                      <div className="bg-gray-800 h-24 rounded-t-3xl shadow-xl" />
                      {/* Sofa Seat */}
                      <div className="bg-gray-700 h-12 rounded-b-lg shadow-xl">
                        <div className="absolute bottom-0 left-4 right-4 h-8 bg-gray-600 rounded-lg" />
                      </div>
                      {/* Pillows */}
                      <div className="absolute top-4 left-4 w-16 h-14 bg-emerald-600 rounded-lg transform -rotate-6" />
                      <div className="absolute top-4 right-4 w-16 h-14 bg-amber-600 rounded-lg transform rotate-6" />
                    </div>
                  </div>

                  {/* Coffee Table */}
                  <div className="absolute bottom-[12%] left-[35%] w-[20%]">
                    <div className="bg-amber-800 h-4 rounded-lg shadow-lg" />
                    <div className="flex justify-between mt-1">
                      <div className="w-1 h-8 bg-amber-900" />
                      <div className="w-1 h-8 bg-amber-900" />
                    </div>
                    {/* Items on table */}
                    <div className="absolute -top-2 left-1/4 w-6 h-8 bg-white/80 rounded" />
                    <div className="absolute -top-1 right-1/4 w-8 h-3 bg-green-600 rounded-full" />
                  </div>

                  {/* Floor Lamp */}
                  <div className="absolute bottom-[15%] right-[15%]">
                    <div className="w-1 h-32 bg-gray-700 mx-auto" />
                    <div className="w-16 h-10 bg-amber-100 rounded-full -mt-2 shadow-lg shadow-amber-200/50" />
                    <div className="w-4 h-4 bg-gray-800 rounded-full mx-auto -mt-8" />
                  </div>

                  {/* Side Table */}
                  <div className="absolute bottom-[15%] right-[25%]">
                    <div className="w-12 h-16 bg-gray-800 rounded-lg shadow-lg">
                      <div className="absolute top-2 left-2 right-2 h-4 bg-emerald-500/50 rounded" />
                    </div>
                  </div>

                  {/* Wall Art */}
                  <div className="absolute top-[15%] left-[20%] w-24 h-32 bg-white/90 rounded-lg shadow-xl p-2">
                    <div className="w-full h-full bg-gradient-to-br from-emerald-400 to-teal-600 rounded" />
                  </div>
                  <div className="absolute top-[20%] left-[45%] w-16 h-16 bg-white/90 rounded-full shadow-xl p-2">
                    <div className="w-full h-full bg-gradient-to-br from-amber-400 to-orange-600 rounded-full" />
                  </div>

                  {/* Plant */}
                  <div className="absolute bottom-[15%] right-[5%]">
                    <div className="w-8 h-10 bg-amber-700 rounded-lg" />
                    <div className="absolute -top-16 left-1/2 -translate-x-1/2">
                      <div className="w-4 h-12 bg-green-700 rounded-full transform -rotate-12" />
                      <div className="w-4 h-14 bg-green-600 rounded-full transform rotate-12 -mt-10 ml-2" />
                      <div className="w-4 h-10 bg-green-800 rounded-full -mt-12 -ml-1" />
                    </div>
                  </div>

                  {/* Window */}
                  <div className="absolute top-[10%] right-[10%] w-20 h-28 bg-white/20 rounded-lg border-4 border-white/40 backdrop-blur-sm">
                    <div className="absolute inset-0 flex">
                      <div className="w-1/2 border-r border-white/40" />
                    </div>
                    <div className="absolute top-1/2 left-0 right-0 border-b border-white/40" />
                  </div>
                </div>

                {/* Color Name Overlay */}
                <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/20">
                  <p className="text-white font-bold">
                    {roomColors.find(c => c.hex === selectedWallColor)?.name}
                  </p>
                  <p className="text-gray-300 text-sm">{selectedWallColor}</p>
                </div>
              </div>
            </div>

            {/* Color Picker */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Palette size={20} className="text-emerald-400" />
                Select Wall Color
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {roomColors.map((color) => (
                  <button
                    type="button"
                    key={color.hex}
                    onClick={() => setSelectedWallColor(color.hex)}
                    className={`group relative p-4 rounded-xl transition-all ${
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

              <div className="mt-6 p-4 bg-emerald-500/20 rounded-xl border border-emerald-500/30">
                <p className="text-emerald-400 text-sm font-medium mb-2">Pro Tip:</p>
                <p className="text-gray-300 text-sm">
                  Want to see this color in YOUR home? Call us for a free in-home color consultation!
                </p>
                <a
                  href={`tel:${businessInfo.phoneRaw}`}
                  className="mt-3 inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-bold text-sm"
                >
                  <Phone size={14} />
                  {businessInfo.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Color of the Year 2026 */}
      <section id="trends" className="py-20 bg-gradient-to-b from-[#C65D3B]/10 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#C65D3B] to-orange-500 text-white rounded-full px-5 py-2 mb-6 text-sm font-bold shadow-lg">
                <Star size={16} fill="white" />
                Pantone Color of the Year 2026
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                Burnt Sienna Dream
                <span className="block text-2xl font-medium text-[#C65D3B] mt-2">PANTONE 18-1345</span>
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                &ldquo;A bold evolution of warm earth tones that speaks to our collective desire for grounding and authenticity in an increasingly digital world.&rdquo;
              </p>
              <p className="text-gray-600 mb-8">
                This rich terracotta connects us to the earth while energizing our spaces. In Massachusetts homes, we&apos;re seeing it paired with soft whites, deep greens, and brass accents for a sophisticated yet warm aesthetic.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { icon: Sun, title: "Energizing", desc: "Sparks creativity" },
                  { icon: Heart, title: "Grounding", desc: "Earth connection" },
                  { icon: Sparkles, title: "Bold", desc: "Statement color" },
                ].map((item, i) => (
                  <div key={i} className="text-center p-4 bg-white rounded-xl shadow-lg border border-gray-100">
                    <item.icon size={24} className="mx-auto mb-2 text-[#C65D3B]" />
                    <p className="font-bold text-gray-900">{item.title}</p>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                ))}
              </div>

              <Link
                href="/blog/paint-color-trends-2025-massachusetts"
                className="inline-flex items-center gap-2 text-[#C65D3B] hover:text-orange-600 font-bold transition-colors"
              >
                Read Full Article
                <ExternalLink size={18} />
              </Link>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Burnt Sienna Dream interior"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="w-20 h-20 rounded-xl mb-3 shadow-inner" style={{ backgroundColor: "#C65D3B" }} />
                <p className="font-bold text-gray-900">Burnt Sienna Dream</p>
                <p className="text-sm text-gray-500">PANTONE 18-1345</p>
              </div>
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-2xl px-4 py-2 shadow-xl font-bold">
                #1 Trend 2026
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Colors Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-600 rounded-full px-5 py-2 mb-4 text-sm font-bold">
              <TrendingUp size={16} />
              <span>Top Colors of 2026</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Colors Defining the Year
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Click on any color to read the full trend report and see pairing suggestions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {colorTrends2026.map((color) => (
              <Link
                key={color.id}
                href={color.article}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
              >
                <div className="relative h-64">
                  <Image
                    src={color.image}
                    alt={color.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-black/70 text-white px-4 py-1 rounded-full text-sm font-bold backdrop-blur-sm">
                      {color.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 flex items-center gap-3">
                    <div
                      className="w-16 h-16 rounded-xl shadow-lg border-4 border-white"
                      style={{ backgroundColor: color.hex }}
                    />
                    <div className="bg-white/95 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg">
                      <p className="font-bold text-gray-900">{color.name}</p>
                      <p className="text-sm text-gray-600">{color.brand}</p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                      Read More <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">{color.description}</p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-bold text-gray-900 mb-1">Psychology</p>
                      <p className="text-gray-600">{color.psychology}</p>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 mb-1">Best For</p>
                      <p className="text-gray-600">{color.bestFor}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-600 rounded-full px-5 py-2 mb-4 text-sm font-bold">
              <BookOpen size={16} />
              <span>Featured Articles</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Deep Dives & Expert Insights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              In-depth articles from our design experts
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredArticles.map((article, index) => (
              <Link
                key={index}
                href={article.link}
                className={`group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 ${
                  article.featured ? "lg:col-span-2 lg:row-span-2" : ""
                }`}
              >
                <div className={`relative ${article.featured ? "h-80 lg:h-full" : "h-48"}`}>
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                        {article.category}
                      </span>
                      <span className="text-white/80 text-sm flex items-center gap-1">
                        <Clock size={12} />
                        {article.readTime}
                      </span>
                    </div>
                    <h3 className={`font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors ${
                      article.featured ? "text-2xl lg:text-3xl" : "text-lg"
                    }`}>
                      {article.title}
                    </h3>
                    <p className={`text-gray-300 ${article.featured ? "text-base" : "text-sm"}`}>
                      {article.excerpt}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Texture Trends 2026 */}
      <section className="py-20 bg-[#0A0B0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 text-emerald-400 rounded-full px-5 py-2 mb-4 text-sm font-bold backdrop-blur-sm border border-white/10">
              <Layers size={16} />
              <span>Texture Trends 2026</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Beyond Flat Paint
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The textures that are transforming walls into works of art
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {textureTrends2026.map((texture, index) => (
              <Link
                key={index}
                href={texture.link}
                className="group bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-emerald-500/50 transition-all hover:-translate-y-2"
              >
                <div className="relative h-56">
                  <Image
                    src={texture.image}
                    alt={texture.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0D] via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-3">
                    <div className="w-12 h-12 bg-emerald-500/30 backdrop-blur-sm rounded-xl flex items-center justify-center border border-emerald-500/30">
                      <texture.icon className="text-emerald-400" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{texture.name}</h3>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                      Learn More <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 mb-4">{texture.description}</p>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500">Finish:</span>
                      <span className="text-white font-medium">{texture.finish}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500">Best Colors:</span>
                      <span className="text-emerald-400 font-medium">{texture.bestColors.join(", ")}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500">Difficulty:</span>
                      <span className="text-white font-medium">{texture.difficulty}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Design Movements 2026 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-600 rounded-full px-5 py-2 mb-4 text-sm font-bold">
              <Brush size={16} />
              <span>Design Movements</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              The Aesthetics of 2026
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The design philosophies shaping how we think about color and space
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {designMovements2026.map((movement, index) => (
              <Link
                key={index}
                href={movement.link}
                className="group bg-gray-50 rounded-2xl p-6 hover:shadow-xl transition-all hover:-translate-y-2 border border-gray-100 hover:border-emerald-200"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <movement.icon className="text-emerald-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                  {movement.name}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">{movement.description}</p>
                <div className="flex flex-wrap gap-2">
                  {movement.colors.map((color, i) => (
                    <span key={i} className="bg-white px-3 py-1 rounded-full text-xs text-gray-600 border border-gray-200">
                      {color}
                    </span>
                  ))}
                </div>
                <div className="mt-4 text-emerald-600 font-medium text-sm flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  Read Article <ArrowRight size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Bring These Trends to Life
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Our color experts can help you choose the perfect palette for your Massachusetts home.
            Schedule a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${businessInfo.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 bg-white text-emerald-600 font-bold py-4 px-8 rounded-full transition-all hover:bg-gray-100 hover:scale-105 shadow-xl"
            >
              <Phone size={20} />
              {businessInfo.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-4 px-8 rounded-full transition-all border border-emerald-500"
            >
              Book Color Consultation
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0) rotate(12deg); }
          50% { transform: translateY(-10px) rotate(12deg); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
