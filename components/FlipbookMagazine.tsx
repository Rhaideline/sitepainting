"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  BookOpen,
  X,
  Maximize2,
} from "lucide-react";

// Magazine Pages Data - Clean and bright pages
const magazinePages = [
  {
    id: 1,
    type: "cover",
    title: "PAINT TRENDS",
    subtitle: "MAGAZINE 2026",
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
    headline: "THE COLOR REVOLUTION",
    tags: ["AI Design", "Sustainability", "Textures"],
  },
  {
    id: 2,
    type: "article",
    category: "COLOR OF THE YEAR",
    title: "Burnt Sienna Dream",
    subtitle: "PANTONE 18-1345",
    content: "A bold evolution of warm earth tones that speaks to our collective desire for grounding and authenticity in an increasingly digital world.",
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
    color: "#C65D3B",
  },
  {
    id: 3,
    type: "article",
    category: "TECH-INSPIRED",
    title: "Digital Lavender",
    subtitle: "Benjamin Moore 2026-60",
    content: "A soft, ethereal purple that bridges the physical and digital worlds. The color of AI interfaces and calming tech spaces.",
    image: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800",
    color: "#E6E6FA",
  },
  {
    id: 4,
    type: "spread",
    category: "BIOPHILIC DESIGN",
    title: "Forest Bathing Green",
    subtitle: "Sherwin-Williams SW 2026",
    content: "Inspired by the Japanese practice of Shinrin-yoku, this deep forest green brings the restorative power of nature indoors.",
    image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
    color: "#2D5A4A",
  },
  {
    id: 5,
    type: "article",
    category: "INDUSTRIAL LUXE",
    title: "Warm Concrete",
    subtitle: "Farrow & Ball No. 2026",
    content: "The industrial aesthetic evolves with warmth. This sophisticated gray-beige hybrid brings urban edge with cozy undertones.",
    image: "https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800",
    color: "#A69F98",
  },
  {
    id: 6,
    type: "textures",
    category: "TEXTURE TRENDS",
    title: "Beyond Flat Paint",
    items: [
      { name: "Microcement", desc: "Ultra-thin seamless finish" },
      { name: "Clay Plaster", desc: "Natural & breathable" },
      { name: "Zellige Effect", desc: "Moroccan artisanal charm" },
      { name: "Ombre Walls", desc: "Gradient color transitions" },
    ],
    image: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 7,
    type: "movements",
    category: "DESIGN MOVEMENTS 2026",
    title: "The Aesthetics of Tomorrow",
    movements: [
      { name: "Dopamine Decor", colors: ["Hot pink", "Electric blue"] },
      { name: "Quiet Luxury 2.0", colors: ["Chocolate", "Burgundy"] },
      { name: "Digital Detox", colors: ["Soft sage", "Blush"] },
      { name: "Neo-Maximalism", colors: ["Jewel tones", "Deep teal"] },
    ],
    image: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 8,
    type: "back",
    title: "MASS PAINTERS PRO",
    subtitle: "Bringing 2026 Trends to Your Home",
    content: "Expert color consultation • Premium paint finishes • Massachusetts homes transformed",
    phone: "(508) 578-9807",
    image: "https://images.pexels.com/photos/1571452/pexels-photo-1571452.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

export default function FlipbookMagazine() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState<"left" | "right" | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const bookRef = useRef<HTMLDivElement>(null);

  const totalPages = magazinePages.length;

  const goToNextPage = () => {
    if (currentPage < totalPages - 1 && !isFlipping) {
      setIsFlipping(true);
      setFlipDirection("left");
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
        setIsFlipping(false);
        setFlipDirection(null);
      }, 500);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 0 && !isFlipping) {
      setIsFlipping(true);
      setFlipDirection("right");
      setTimeout(() => {
        setCurrentPage(currentPage - 1);
        setIsFlipping(false);
        setFlipDirection(null);
      }, 500);
    }
  };

  const goToPage = (pageIndex: number) => {
    if (pageIndex !== currentPage && !isFlipping) {
      setIsFlipping(true);
      setFlipDirection(pageIndex > currentPage ? "left" : "right");
      setTimeout(() => {
        setCurrentPage(pageIndex);
        setIsFlipping(false);
        setFlipDirection(null);
      }, 500);
    }
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const renderPage = (page: typeof magazinePages[0]) => {
    switch (page.type) {
      case "cover":
        return (
          <div className="relative w-full h-full overflow-hidden">
            <Image
              src={page.image}
              alt={page.title || ""}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute top-6 left-6 right-6">
              <div className="text-emerald-400 font-black text-xl md:text-2xl tracking-[0.2em] drop-shadow-lg">{page.title}</div>
              <div className="text-white text-xs tracking-[0.3em] mt-1">{page.subtitle}</div>
            </div>
            <div className="absolute bottom-8 left-6 right-6">
              <div className="text-white font-black text-3xl md:text-4xl leading-tight mb-4 drop-shadow-lg">
                {page.headline}
              </div>
              <div className="flex gap-2">
                {page.tags?.map((tag, i) => (
                  <span key={i} className="bg-emerald-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="absolute top-6 right-6 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded shadow-lg">
              JAN 2026
            </div>
          </div>
        );

      case "article":
        return (
          <div className="relative w-full h-full bg-white overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[45%]">
              <Image
                src={page.image}
                alt={page.title || ""}
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-[60%] p-5 bg-white">
              <div
                className="w-14 h-14 rounded-xl mb-3 shadow-lg border-2 border-gray-100"
                style={{ backgroundColor: page.color }}
              />
              <span className="text-emerald-600 text-xs font-bold tracking-wider uppercase">{page.category}</span>
              <h3 className="text-xl md:text-2xl font-black text-gray-900 mt-1">{page.title}</h3>
              <p className="text-sm text-gray-500 font-medium">{page.subtitle}</p>
              <p className="text-gray-600 text-sm mt-3 leading-relaxed">{page.content}</p>
            </div>
          </div>
        );

      case "spread":
        return (
          <div className="relative w-full h-full overflow-hidden">
            <Image
              src={page.image}
              alt={page.title || ""}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-5 right-5 md:max-w-[70%]">
              <div
                className="w-12 h-12 rounded-lg mb-3 shadow-lg border-2 border-white/30"
                style={{ backgroundColor: page.color }}
              />
              <span className="text-emerald-400 text-xs font-bold tracking-wider uppercase">{page.category}</span>
              <h3 className="text-2xl md:text-3xl font-black text-white mt-1 drop-shadow-lg">{page.title}</h3>
              <p className="text-sm text-emerald-300 font-medium">{page.subtitle}</p>
              <p className="text-white/90 text-sm mt-2 leading-relaxed">{page.content}</p>
            </div>
          </div>
        );

      case "textures":
        return (
          <div className="relative w-full h-full overflow-hidden">
            <Image
              src={page.image}
              alt={page.title || ""}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <span className="text-emerald-400 text-xs font-bold tracking-wider uppercase">{page.category}</span>
              <h3 className="text-xl md:text-2xl font-black text-white mt-1 mb-4">{page.title}</h3>
              <div className="grid grid-cols-2 gap-2">
                {page.items?.map((item, i) => (
                  <div key={i} className="bg-white/95 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-gray-900 font-bold text-sm">{item.name}</div>
                    <div className="text-gray-500 text-xs">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case "movements":
        return (
          <div className="relative w-full h-full bg-white overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-20">
              <Image
                src={page.image}
                alt={page.title || ""}
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 p-5">
              <span className="text-emerald-600 text-xs font-bold tracking-wider uppercase">{page.category}</span>
              <h3 className="text-xl md:text-2xl font-black text-gray-900 mt-1 mb-4">{page.title}</h3>
              <div className="space-y-2">
                {page.movements?.map((movement, i) => (
                  <div key={i} className="bg-gray-50 rounded-lg p-3 border border-gray-100">
                    <div className="text-gray-900 font-bold text-sm">{movement.name}</div>
                    <div className="flex gap-2 mt-1">
                      {movement.colors.map((color, j) => (
                        <span key={j} className="text-xs text-gray-600 bg-white px-2 py-0.5 rounded-full border border-gray-200">
                          {color}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case "back":
        return (
          <div className="relative w-full h-full bg-gradient-to-br from-emerald-500 to-teal-600 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-6">
                <div className="text-white/20 font-black text-6xl md:text-7xl mb-4">MP</div>
                <h3 className="text-xl md:text-2xl font-black text-white">{page.title}</h3>
                <p className="text-emerald-100 mt-2 text-sm">{page.subtitle}</p>
                <p className="text-white/90 text-xs mt-4 max-w-[200px] mx-auto">{page.content}</p>
                <div className="mt-6 bg-white text-emerald-600 font-bold py-3 px-6 rounded-full inline-block shadow-lg">
                  {page.phone}
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const currentPageData = magazinePages[currentPage];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-400 rounded-full px-5 py-2 mb-4 text-sm font-bold backdrop-blur-sm border border-amber-500/30">
            <BookOpen size={16} />
            <span>Interactive Flipbook</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
            Browse Our Digital Magazine
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Click the arrows to flip through pages of our exclusive 2026 trends guide
          </p>
        </div>

        {/* Flipbook Container */}
        <div
          className={`relative mx-auto transition-all duration-500 ${
            isFullscreen
              ? "fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 md:p-8"
              : "max-w-3xl"
          }`}
        >
          {/* Fullscreen Toggle */}
          <div className={`absolute top-4 right-4 z-20 ${isFullscreen ? "" : "hidden md:block"}`}>
            <button
              type="button"
              onClick={toggleFullscreen}
              className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors border border-white/20"
            >
              {isFullscreen ? <X size={18} /> : <Maximize2 size={18} />}
            </button>
          </div>

          {/* Book */}
          <div
            ref={bookRef}
            className={`relative mx-auto ${isFullscreen ? "w-full max-w-4xl" : "w-full"}`}
            style={{ perspective: "2000px" }}
          >
            {/* Book Shadow */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[85%] h-6 bg-black/30 blur-xl rounded-full" />

            {/* Book Spine */}
            <div className="absolute left-1/2 top-0 bottom-0 w-3 -translate-x-1/2 bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700 z-10 hidden md:block rounded" />

            {/* Pages Container */}
            <div className={`relative ${isFullscreen ? "aspect-[3/2]" : "aspect-[4/3]"} flex rounded-xl overflow-hidden shadow-2xl`}>
              {/* Left Page */}
              <div
                className={`w-1/2 relative bg-gray-100 overflow-hidden transition-transform duration-500 origin-right ${
                  isFlipping && flipDirection === "right" ? "animate-flip-reverse" : ""
                }`}
                style={{ transformStyle: "preserve-3d" }}
              >
                {currentPage > 0 ? (
                  renderPage(magazinePages[currentPage - 1])
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <div className="text-gray-400 text-sm font-medium">Front Cover</div>
                  </div>
                )}
              </div>

              {/* Right Page */}
              <div
                className={`w-1/2 relative bg-white overflow-hidden transition-transform duration-500 origin-left ${
                  isFlipping && flipDirection === "left" ? "animate-flip" : ""
                }`}
                style={{ transformStyle: "preserve-3d" }}
              >
                {renderPage(currentPageData)}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              type="button"
              onClick={goToPrevPage}
              disabled={currentPage === 0 || isFlipping}
              className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:-translate-x-full w-11 h-11 md:w-12 md:h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-700 transition-all z-20 ${
                currentPage === 0 ? "opacity-30 cursor-not-allowed" : "hover:bg-emerald-500 hover:text-white hover:scale-110"
              }`}
            >
              <ChevronLeft size={22} />
            </button>

            <button
              type="button"
              onClick={goToNextPage}
              disabled={currentPage === totalPages - 1 || isFlipping}
              className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-full w-11 h-11 md:w-12 md:h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-700 transition-all z-20 ${
                currentPage === totalPages - 1 ? "opacity-30 cursor-not-allowed" : "hover:bg-emerald-500 hover:text-white hover:scale-110"
              }`}
            >
              <ChevronRight size={22} />
            </button>
          </div>

          {/* Page Indicator */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="flex gap-1.5">
              {magazinePages.map((_, index) => (
                <button
                  type="button"
                  key={index}
                  onClick={() => goToPage(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    currentPage === index
                      ? "bg-emerald-400 scale-125"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
            <div className="text-gray-400 text-sm">
              Page {currentPage + 1} of {totalPages}
            </div>
          </div>

          {/* Thumbnails */}
          <div className="flex gap-2 mt-5 overflow-x-auto pb-2 justify-center">
            {magazinePages.map((page, index) => (
              <button
                type="button"
                key={index}
                onClick={() => goToPage(index)}
                className={`relative flex-shrink-0 w-14 h-18 md:w-16 md:h-20 rounded-lg overflow-hidden transition-all border-2 ${
                  currentPage === index
                    ? "border-emerald-400 scale-105"
                    : "border-transparent opacity-70 hover:opacity-100"
                }`}
              >
                <Image
                  src={page.image}
                  alt={`Page ${index + 1}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-0.5 left-0.5 right-0.5 text-[7px] text-white font-bold truncate bg-black/40 rounded px-1">
                  {page.title}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Styles for Flip Animation */}
      <style jsx>{`
        @keyframes flip {
          0% { transform: rotateY(0deg); }
          100% { transform: rotateY(-180deg); }
        }
        @keyframes flip-reverse {
          0% { transform: rotateY(0deg); }
          100% { transform: rotateY(180deg); }
        }
        .animate-flip {
          animation: flip 0.5s ease-in-out;
        }
        .animate-flip-reverse {
          animation: flip-reverse 0.5s ease-in-out;
        }
      `}</style>
    </section>
  );
}
