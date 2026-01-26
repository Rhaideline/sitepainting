import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  ArrowRight,
  Mail,
  MapPin,
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
} from "lucide-react";
import { businessInfo, services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Paint Trends Magazine 2025 | Colors, Textures & Design Inspiration | Mass Painters Pro",
  description: "Discover 2025's hottest paint colors, textures, and design trends. Expert insights on Pantone's Mocha Mousse, biophilic design, limewash finishes, and more. Your complete guide to transforming any space.",
  keywords: [
    "2025 paint trends",
    "Pantone color of the year",
    "Mocha Mousse",
    "interior design trends",
    "paint textures",
    "limewash walls",
    "color psychology",
    "Massachusetts painting trends",
  ],
  openGraph: {
    title: "Paint Trends Magazine 2025 | Mass Painters Pro",
    description: "Discover 2025's hottest paint colors, textures, and design inspiration.",
    url: "https://masspainter.pro/magazine",
    siteName: "Mass Painters Pro",
    locale: "en_US",
    type: "website",
  },
};

// 2025 Color Trends Data - Real information
const colorTrends2025 = [
  {
    name: "Mocha Mousse",
    hex: "#A47864",
    brand: "Pantone 17-1230",
    category: "Color of the Year 2025",
    description: "A warming brown rooted in nature. This evocative soft brown emits the rich, delicious quality of chocolate and coffee, satisfying our craving for comfort.",
    psychology: "Creates feelings of warmth, security, and sophisticated comfort",
    bestFor: "Living rooms, bedrooms, home offices",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  },
  {
    name: "Whipped Sage",
    hex: "#A3B899",
    brand: "Benjamin Moore",
    category: "Nature-Inspired",
    description: "A muted, dusty sage green that brings the outdoors in. Part of the biophilic design movement that connects interior spaces with nature.",
    psychology: "Promotes calm, balance, and a connection to the natural world",
    bestFor: "Bathrooms, kitchens, meditation spaces",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
  },
  {
    name: "Hale Navy",
    hex: "#434C56",
    brand: "Benjamin Moore HC-154",
    category: "Bold Statement",
    description: "A rich, complex navy with depth and sophistication. The perfect backdrop for brass accents and warm wood tones.",
    psychology: "Evokes trust, intelligence, and timeless elegance",
    bestFor: "Dining rooms, libraries, accent walls",
    image: "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=600&q=80",
  },
  {
    name: "Evergreen Fog",
    hex: "#96A48B",
    brand: "Sherwin-Williams SW 9130",
    category: "2022 Color of the Year - Still Trending",
    description: "A sophisticated gray-green that references the natural world in an understated way. Continues to dominate design in 2025.",
    psychology: "Brings serenity and a sense of renewal",
    bestFor: "Whole-house color, exteriors, cabinetry",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
  },
];

// Texture Trends
const textureTrends = [
  {
    name: "Limewash",
    description: "This ancient technique is having a major moment in 2025. Limewash creates a soft, mottled appearance with incredible depth and movement. As the lime carbonates, it becomes part of the wall itself.",
    finish: "Matte, chalky, organic",
    bestColors: ["Warm whites", "Soft pinks", "Earthy terracottas"],
    difficulty: "Professional recommended",
    icon: Droplets,
    image: "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=400&q=80",
  },
  {
    name: "Venetian Plaster",
    description: "Luxurious polished plaster that creates a marble-like finish. Multiple thin layers are burnished to achieve a lustrous, reflective surface.",
    finish: "Glossy, stone-like, dimensional",
    bestColors: ["Warm taupes", "Soft grays", "Cream"],
    difficulty: "Expert only",
    icon: Gem,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
  },
  {
    name: "German Smear (Schmear)",
    description: "A mortar-wash technique for brick that creates a European, Old-World aesthetic. Unlike whitewashing, German smear uses actual mortar.",
    finish: "Rustic, textured, authentic",
    bestColors: ["White", "Gray", "Cream"],
    difficulty: "DIY possible with prep",
    icon: Mountain,
    image: "https://images.unsplash.com/photo-1560185007-5f0bb1866cab?w=400&q=80",
  },
  {
    name: "Suede Effect",
    description: "Creates the soft, tactile appearance of suede fabric on walls. Perfect for bedrooms and intimate spaces where warmth is desired.",
    finish: "Soft, velvety, matte",
    bestColors: ["Deep blues", "Warm grays", "Forest greens"],
    difficulty: "Advanced DIY",
    icon: Flower2,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80",
  },
];

// Design Movements
const designMovements = [
  {
    name: "Quiet Luxury",
    description: "Less is more in 2025. Think rich, muted tones, premium materials, and understated elegance. No logos, no flash—just quality craftsmanship and timeless design.",
    colors: ["Taupe", "Greige", "Soft black", "Warm white"],
    icon: Heart,
  },
  {
    name: "Biophilic Design",
    description: "Connecting interior spaces with nature through organic colors, natural textures, and materials that reference the outdoors. Green is the dominant color family.",
    colors: ["Sage", "Olive", "Terracotta", "Sky blue"],
    icon: Flower2,
  },
  {
    name: "Warm Minimalism",
    description: "The cold, stark minimalism of the 2010s is out. 2025 embraces minimalism with warmth—think earthy neutrals and cozy textures.",
    colors: ["Warm whites", "Caramel", "Soft clay"],
    icon: Sun,
  },
  {
    name: "Dark Academia",
    description: "Inspired by old libraries, universities, and classical architecture. Deep, scholarly colors create spaces perfect for reading and contemplation.",
    colors: ["Hunter green", "Burgundy", "Navy", "Brown"],
    icon: Moon,
  },
];

export default function MagazinePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-emerald-500 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2">
                <MapPin size={14} />
                Serving All Massachusetts
              </span>
              <a href={`mailto:${businessInfo.email}`} className="hidden md:flex items-center gap-2 hover:text-white/80 transition-colors">
                <Mail size={14} />
                {businessInfo.email}
              </a>
            </div>
            <a href={`tel:${businessInfo.phoneRaw}`} className="flex items-center gap-2 font-semibold hover:text-white/80 transition-colors">
              <Phone size={14} />
              {businessInfo.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center">
              <Image
                src="https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/695a97fe6e700e1a414da216.svg"
                alt="Mass Painters Pro"
                width={180}
                height={50}
                className="h-11 w-auto"
                priority
              />
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              <Link href="/" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
                Home
              </Link>
              <div className="relative group">
                <button type="button" className="text-gray-700 hover:text-emerald-600 font-medium flex items-center gap-1">
                  Services
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  {services.map((service) => (
                    <Link key={service.slug} href={`/${service.slug}`} className="block px-4 py-3 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors">
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
              <Link href="/magazine" className="text-emerald-600 font-semibold">
                Magazine
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
                Blog
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
                Contact
              </Link>
            </nav>

            <div className="hidden lg:flex items-center">
              <a href={`tel:${businessInfo.phoneRaw}`} className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-6 rounded-full transition-all">
                <Phone size={18} />
                {businessInfo.phone}
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Magazine Cover Style */}
      <section className="relative bg-[#1C1F2E] overflow-hidden min-h-[80vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80"
            alt="2025 Paint Trends"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1C1F2E] via-[#1C1F2E]/80 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-emerald-500 text-white px-4 py-1 text-sm font-bold tracking-wider uppercase">
                2025 Edition
              </div>
              <div className="bg-white/20 text-white px-4 py-1 text-sm font-medium">
                Paint Trends Magazine
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6">
              The Colors
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-500">
                Defining 2025
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              From Pantone&apos;s Mocha Mousse to the resurgence of limewash textures, discover the trends that are transforming homes across Massachusetts and beyond.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#trends"
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-8 rounded-full transition-all"
              >
                Explore Trends
                <ArrowRight size={20} />
              </a>
              <a
                href={`tel:${businessInfo.phoneRaw}`}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-full transition-all border border-white/30"
              >
                <Phone size={20} />
                Get Color Consultation
              </a>
            </div>
          </div>
        </div>

        {/* Magazine Issue Badge */}
        <div className="absolute top-20 right-10 hidden lg:block">
          <div className="w-32 h-32 rounded-full bg-emerald-500 flex flex-col items-center justify-center text-white transform rotate-12 shadow-2xl">
            <span className="text-sm font-medium">Issue</span>
            <span className="text-3xl font-black">#01</span>
            <span className="text-xs">2025</span>
          </div>
        </div>
      </section>

      {/* Color of the Year Feature */}
      <section id="trends" className="py-20 bg-gradient-to-b from-[#A47864]/10 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#A47864] text-white rounded-full px-4 py-2 mb-6 text-sm font-bold">
                <Star size={16} fill="white" />
                Pantone Color of the Year 2025
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                Mocha Mousse
                <span className="block text-2xl font-medium text-[#A47864] mt-2">PANTONE 17-1230</span>
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                &quot;A warming brown rooted in nature, Mocha Mousse emits the rich, delicious quality of chocolate and coffee, satisfying our craving for comfort.&quot;
              </p>
              <p className="text-gray-600 mb-8">
                This evocative soft brown reflects our desire for comfort in uncertain times. It pairs beautifully with warm whites, sage greens, and terracotta accents. In Massachusetts homes, we&apos;re seeing it used in living rooms and home offices where warmth and sophistication are desired.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                  <Eye size={24} className="mx-auto mb-2 text-[#A47864]" />
                  <p className="font-bold text-gray-900">Comfort</p>
                  <p className="text-sm text-gray-500">Evokes security</p>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                  <Heart size={24} className="mx-auto mb-2 text-[#A47864]" />
                  <p className="font-bold text-gray-900">Warmth</p>
                  <p className="text-sm text-gray-500">Cozy & inviting</p>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                  <Palette size={24} className="mx-auto mb-2 text-[#A47864]" />
                  <p className="font-bold text-gray-900">Versatile</p>
                  <p className="text-sm text-gray-500">Pairs easily</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-12 h-12 rounded-lg" style={{ backgroundColor: "#A47864" }} title="Mocha Mousse" />
                <div className="w-12 h-12 rounded-lg" style={{ backgroundColor: "#F5F3EF" }} title="Warm White" />
                <div className="w-12 h-12 rounded-lg" style={{ backgroundColor: "#A3B899" }} title="Sage" />
                <div className="w-12 h-12 rounded-lg" style={{ backgroundColor: "#C4A484" }} title="Caramel" />
                <div className="w-12 h-12 rounded-lg" style={{ backgroundColor: "#8B7355" }} title="Deep Brown" />
              </div>
              <p className="text-sm text-gray-500 mt-2">Suggested color palette</p>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                  alt="Mocha Mousse interior"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="w-20 h-20 rounded-xl mb-3" style={{ backgroundColor: "#A47864" }} />
                <p className="font-bold text-gray-900">Mocha Mousse</p>
                <p className="text-sm text-gray-500">PANTONE 17-1230</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Colors Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-600 rounded-full px-4 py-2 mb-4 text-sm font-medium">
              <TrendingUp size={16} />
              <span>Top Colors of 2025</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Colors Making Waves This Year
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These carefully curated colors from leading paint brands are defining the look of 2025
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {colorTrends2025.map((color, index) => (
              <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-64">
                  <Image
                    src={color.image}
                    alt={color.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {color.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 flex items-center gap-3">
                    <div
                      className="w-16 h-16 rounded-xl shadow-lg border-4 border-white"
                      style={{ backgroundColor: color.hex }}
                    />
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                      <p className="font-bold text-gray-900">{color.name}</p>
                      <p className="text-sm text-gray-600">{color.brand}</p>
                    </div>
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Texture Trends */}
      <section className="py-20 bg-[#1C1F2E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 text-emerald-400 rounded-full px-4 py-2 mb-4 text-sm font-medium">
              <Layers size={16} />
              <span>Texture Trends</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Beyond Flat Paint: Textures That Transform
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              2025 is the year of texture. These finishes add depth, character, and visual interest that flat paint simply cannot achieve.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {textureTrends.map((texture, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-emerald-500/50 transition-all">
                <div className="relative h-48">
                  <Image
                    src={texture.image}
                    alt={texture.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1F2E] to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-3">
                    <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                      <texture.icon className="text-emerald-400" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{texture.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 mb-4">{texture.description}</p>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Finish:</span>
                      <span className="text-white font-medium">{texture.finish}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Best Colors:</span>
                      <span className="text-emerald-400 font-medium">{texture.bestColors.join(", ")}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Difficulty:</span>
                      <span className="text-white font-medium">{texture.difficulty}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Texture CTA */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-2xl p-8 border border-emerald-500/30 max-w-2xl mx-auto">
              <h3 className="text-white text-2xl font-bold mb-3">Want a Specialty Finish?</h3>
              <p className="text-gray-400 mb-6">
                Our master painters are trained in limewash, Venetian plaster, and other specialty techniques. Let&apos;s discuss your vision.
              </p>
              <a
                href={`tel:${businessInfo.phoneRaw}`}
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-6 rounded-full transition-all"
              >
                <Phone size={18} />
                Discuss Your Project
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Design Movements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-600 rounded-full px-4 py-2 mb-4 text-sm font-medium">
              <Brush size={16} />
              <span>Design Movements</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              The Styles Shaping 2025 Interiors
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding these movements will help you choose colors that feel current yet timeless
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {designMovements.map((movement, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                  <movement.icon className="text-emerald-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{movement.name}</h3>
                <p className="text-gray-600 mb-4 text-sm">{movement.description}</p>
                <div className="flex flex-wrap gap-2">
                  {movement.colors.map((color, i) => (
                    <span key={i} className="bg-white px-3 py-1 rounded-full text-sm text-gray-600 border border-gray-200">
                      {color}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Color Psychology Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-600 rounded-full px-4 py-2 mb-4 text-sm font-medium">
              <Sparkles size={16} />
              <span>Color Psychology</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              How Colors Affect Your Mood
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The right color can transform not just a room, but how you feel in it
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-blue-500">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <div className="w-8 h-8 rounded-full bg-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Blues & Greens</h3>
              <p className="text-gray-600 mb-4">
                Calming and restorative. These colors lower heart rate and reduce anxiety. Perfect for bedrooms, bathrooms, and spaces meant for relaxation.
              </p>
              <p className="text-sm text-gray-500">Best rooms: Bedrooms, bathrooms, offices</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-amber-500">
              <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                <div className="w-8 h-8 rounded-full bg-amber-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Yellows & Oranges</h3>
              <p className="text-gray-600 mb-4">
                Energizing and optimistic. These warm tones stimulate creativity and conversation. Use in kitchens and social spaces.
              </p>
              <p className="text-sm text-gray-500">Best rooms: Kitchens, dining rooms, playrooms</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-gray-700">
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                <div className="w-8 h-8 rounded-full bg-gray-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Neutrals & Earth Tones</h3>
              <p className="text-gray-600 mb-4">
                Grounding and sophisticated. Browns, taupes, and warm grays create a sense of stability and timeless elegance.
              </p>
              <p className="text-sm text-gray-500">Best rooms: Living rooms, whole-house palettes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[#1C1F2E]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Our color experts can bring these trends to life in your Massachusetts home. Schedule a free consultation and let&apos;s create something beautiful together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${businessInfo.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-8 rounded-full transition-all"
            >
              <Phone size={20} />
              {businessInfo.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-full transition-all border border-white/30"
            >
              Request Free Estimate
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <Image
                src="https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/695a97fe6e700e1a414da216.svg"
                alt="Mass Painters Pro"
                width={160}
                height={45}
                className="h-10 w-auto brightness-0 invert mb-4"
              />
              <p className="text-gray-400 text-sm">
                Massachusetts&apos; trusted painting professionals since 2009.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link href={`/${service.slug}`} className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">Home</Link></li>
                <li><Link href="/magazine" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">Magazine</Link></li>
                <li><Link href="/blog" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">Blog</Link></li>
                <li><Link href="/about" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">About</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Phone size={16} className="text-emerald-500" />
                  <a href={`tel:${businessInfo.phoneRaw}`} className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                    {businessInfo.phone}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={16} className="text-emerald-500" />
                  <a href={`mailto:${businessInfo.email}`} className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                    {businessInfo.email}
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin size={16} className="text-emerald-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-400 text-sm">
                    {businessInfo.address.street}<br />
                    {businessInfo.address.city}, {businessInfo.address.state} {businessInfo.address.zip}
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500 text-sm text-center">
              &copy; {new Date().getFullYear()} Mass Painters Pro. All rights reserved. | Licensed & Insured in Massachusetts
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
