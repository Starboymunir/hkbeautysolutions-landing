"use client";

import Image from "next/image";
import React, { useState } from "react";

const COMPANY = {
  officialName: "Beauty Solutions (HK) Limited",
  marketingName: "Beauty Solutions",
  email: "info@hkbeautysolutions.com",
  phoneWhatsapp: "+85263671752",
  wechat: "ovorotnik",
  linkedin: "https://www.linkedin.com/company/104444059/admin/dashboard/",
  sloganPrimary: "Where Ideas Meet Excellence",
  sloganSecondary: "One Partner — Multiple Pathways",
  countries: ["USA", "Hong Kong", "China", "Australia", "Russia", "Korea", "Vietnam"],
} as const;

const PARTNERS = ["Bookazine", "Louder", "Faberlic", "Amazon", "KHY", "Swire", "Decathlon HK", "Lazada", "Sephora", "TEMU"];

const SERVICES = [
  {
    title: "Private Brand Development",
    description: "Build your own beauty brand from concept to market launch with our end-to-end development services.",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80",
  },
  {
    title: "Event Activities",
    description: "Create memorable brand experiences with our event planning and activation expertise.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
  },
  {
    title: "Product Customization",
    description: "Tailor-made solutions to differentiate your products and meet specific market demands.",
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800&q=80",
  },
  {
    title: "Product Development",
    description: "From formulation to final product, we bring your beauty visions to life.",
    image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=800&q=80",
  },
  {
    title: "AI Content",
    description: "Leverage cutting-edge AI technology for content creation and marketing optimization.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
  },
  {
    title: "Packaging Development",
    description: "Eye-catching, sustainable packaging solutions that elevate your brand presence.",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80",
  },
  {
    title: "Product Sourcing",
    description: "Global network access to premium suppliers and competitive pricing.",
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&q=80",
  },
  {
    title: "Quality Inspections",
    description: "Rigorous production controls ensuring every product meets the highest standards.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
  },
];

const PRODUCTS = [
  "Skincare & Cosmetics",
  "Cloth Garment",
  "Sport Items",
  "Beauty Devices",
  "Household Goods",
  "FMCG Categories",
];

// ═══════════════════════════════════════════════════════════════
// HEADER - Asymmetric floating nav
// ═══════════════════════════════════════════════════════════════
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Diagonal slice header */}
      <div className="relative">
        <div className="absolute inset-0 bg-black/80 backdrop-blur-2xl" style={{ clipPath: "polygon(0 0, 100% 0, 100% 70%, 0 100%)" }} />
        <div className="relative flex items-center justify-between px-6 lg:px-16 h-24">
          {/* Logo with vertical text accent */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-rose-500 rounded-2xl rotate-12 group-hover:rotate-0 transition-transform duration-500 flex items-center justify-center">
              <span className="text-white font-black text-xl -rotate-12 group-hover:rotate-0 transition-transform duration-500">B</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tight text-white leading-none">BEAUTY</span>
              <span className="text-xs font-bold tracking-[0.3em] text-rose-400">SOLUTIONS</span>
            </div>
          </a>

          {/* Floating pill nav */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/5 backdrop-blur-xl rounded-full px-2 py-2 border border-white/10">
            {["Services", "Portfolio", "Products", "About", "Contact"].map((item, i) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative px-5 py-2 text-sm font-medium text-white/70 hover:text-white transition-all duration-300 rounded-full hover:bg-white/10"
              >
                {item}
                {i === 0 && <span className="absolute -top-1 -right-1 w-2 h-2 bg-rose-500 rounded-full animate-pulse" />}
              </a>
            ))}
          </nav>

          {/* CTA with diagonal cut */}
          <a
            href="#contact"
            className="hidden lg:inline-flex px-8 py-4 bg-rose-500 text-white text-sm font-bold transition-all duration-300 hover:bg-rose-400 hover:scale-105"
            style={{ clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0 100%)" }}
          >
            Start Project →
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden w-12 h-12 bg-rose-500 rounded-xl flex items-center justify-center"
            aria-label="Menu"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Full screen takeover */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black z-50 flex flex-col">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-rose-500" style={{ clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0 100%)" }} />
          <button onClick={() => setMenuOpen(false)} className="absolute top-8 right-6 z-10 w-12 h-12 bg-white rounded-xl flex items-center justify-center">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="relative flex-1 flex flex-col justify-center px-8 space-y-4">
            {["Services", "Portfolio", "Products", "About", "Contact"].map((item, i) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-5xl md:text-7xl font-black text-white hover:text-rose-400 transition-colors"
                style={{ transform: `translateX(${i * 10}px)` }}
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

// ═══════════════════════════════════════════════════════════════
// HERO - Chaotic overlapping asymmetric madness
// ═══════════════════════════════════════════════════════════════
function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Main hero image with diagonal mask */}
      <div className="absolute inset-0" style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)" }}>
        <Image
          src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1920&q=90"
          alt="Beauty cosmetics hero"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/60 to-transparent" />
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute top-1/4 right-10 w-64 h-64 border-2 border-rose-500/30 rounded-full animate-spin" style={{ animationDuration: "20s" }} />
      <div className="absolute bottom-1/3 left-20 w-32 h-32 bg-rose-500/10 rotate-45" />
      <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-rose-500 rounded-full" />
      <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-white rounded-full" />

      {/* Vertical text on left edge */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:block">
        <p className="text-white/20 text-xs tracking-[0.5em] uppercase" style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
          Beauty Solutions HK — Since 2010
        </p>
      </div>

      {/* Main content - Staggered layout */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center px-6 lg:px-24 pt-32">
        <div className="max-w-7xl">
          {/* Tagline with pill */}
          <div className="flex items-center gap-4 mb-8">
            <span className="px-5 py-2 bg-rose-500 text-white text-xs font-bold tracking-wider uppercase rounded-full">
              7+ Countries
            </span>
            <span className="text-white/40 text-sm font-medium">{COMPANY.sloganSecondary}</span>
          </div>

          {/* Massive staggered headline */}
          <div className="space-y-0">
            <h1 className="text-6xl md:text-8xl lg:text-[150px] font-black text-white leading-[0.85] tracking-tighter">
              Where
            </h1>
            <h1 className="text-6xl md:text-8xl lg:text-[150px] font-black leading-[0.85] tracking-tighter lg:ml-24" style={{ WebkitTextStroke: "2px white", WebkitTextFillColor: "transparent" }}>
              Ideas
            </h1>
            <h1 className="text-6xl md:text-8xl lg:text-[150px] font-black text-rose-500 leading-[0.85] tracking-tighter lg:ml-48">
              Meet
            </h1>
          </div>

          {/* Floating description box */}
          <div className="mt-12 lg:mt-0 lg:absolute lg:right-16 lg:top-1/2 lg:-translate-y-1/2 lg:w-96">
            <div className="bg-white/5 backdrop-blur-xl p-8 border border-white/10" style={{ clipPath: "polygon(0 0, 100% 5%, 95% 100%, 5% 95%)" }}>
              <p className="text-white/70 text-lg leading-relaxed">
                Your trusted partner for sourcing, branding, customization, and production of beauty products.
              </p>
              <div className="mt-6 flex items-center gap-4">
                <a
                  href="#contact"
                  className="flex-1 py-4 bg-rose-500 text-white text-center font-bold hover:bg-rose-400 transition-colors"
                  style={{ clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0 100%)" }}
                >
                  Get Started
                </a>
                <a
                  href="#services"
                  className="w-14 h-14 border-2 border-white/30 flex items-center justify-center hover:border-rose-500 hover:text-rose-500 text-white transition-colors rounded-full"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom stats bar - Overlapping the hero */}
        <div className="absolute bottom-0 left-0 right-0 bg-white" style={{ clipPath: "polygon(0 40%, 100% 0, 100% 100%, 0 100%)" }}>
          <div className="flex flex-wrap justify-center lg:justify-between items-end px-8 lg:px-24 py-8 pt-16 gap-8">
            {[
              { number: "500+", label: "Products" },
              { number: "100+", label: "Partners" },
              { number: "15+", label: "Years" },
            ].map((stat, i) => (
              <div key={stat.label} className="text-center lg:text-left" style={{ transform: `translateY(${i * -10}px)` }}>
                <div className="text-4xl lg:text-6xl font-black text-black">{stat.number}</div>
                <div className="text-black/50 text-sm font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
            <div className="hidden lg:block w-48 h-1 bg-rose-500" />
          </div>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════
// PARTNERS MARQUEE - Seamless diagonal strips
// ═══════════════════════════════════════════════════════════════
function PartnersMarquee() {
  const doubled = [...PARTNERS, ...PARTNERS, ...PARTNERS];

  return (
    <div className="relative py-16 lg:py-20 overflow-hidden">
      {/* Main diagonal marquee strip */}
      <div className="relative flex items-center" style={{ transform: "rotate(-2deg)" }}>
        <div className="bg-rose-500 py-5 w-[200%] flex animate-marquee">
          {doubled.map((partner, i) => (
            <span key={i} className="mx-10 lg:mx-16 text-white text-lg lg:text-2xl font-black tracking-wider whitespace-nowrap flex items-center gap-4">
              {partner}
              <span className="w-2 h-2 lg:w-3 lg:h-3 bg-white/30 rounded-full" />
            </span>
          ))}
        </div>
      </div>
      {/* Second marquee going opposite */}
      <div className="relative flex items-center mt-4" style={{ transform: "rotate(2deg)" }}>
        <div className="border-y border-white/10 py-3 w-[200%] flex animate-marquee" style={{ animationDirection: "reverse", animationDuration: "40s" }}>
          {doubled.map((partner, i) => (
            <span key={i} className="mx-10 lg:mx-16 text-white/20 text-base lg:text-lg font-bold tracking-wider whitespace-nowrap">
              {partner}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// ABOUT SECTION - Extreme asymmetry with overlapping elements
// ═══════════════════════════════════════════════════════════════
function AboutSection() {
  return (
    <section id="about" className="relative bg-[#0a0a0a] overflow-hidden">
      {/* Giant background text */}
      <div className="absolute -top-20 -left-10 text-[300px] font-black text-white/[0.02] leading-none select-none pointer-events-none">
        ABOUT
      </div>

      <div className="relative min-h-screen py-32 px-6 lg:px-0">
        <div className="max-w-7xl mx-auto">
          {/* Offset grid layout */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-0">
            {/* Left column - Image stack */}
            <div className="lg:col-span-5 relative">
              <div className="relative">
                {/* Main image - diagonal cut */}
                <div className="relative h-[500px] lg:h-[700px] overflow-hidden" style={{ clipPath: "polygon(0 0, 100% 5%, 95% 100%, 0 90%)" }}>
                  <Image
                    src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1200&q=85"
                    alt="About Beauty Solutions"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                {/* Floating accent image */}
                <div className="absolute -bottom-10 -right-10 lg:-right-20 w-48 h-48 lg:w-64 lg:h-64 border-8 border-rose-500 overflow-hidden" style={{ clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0 100%)" }}>
                  <Image
                    src="https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&q=80"
                    alt="Product detail"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute top-10 -left-5 w-10 h-32 bg-rose-500" />
                <div className="absolute top-0 left-0 w-full h-full border-2 border-rose-500/20 -translate-x-4 -translate-y-4 pointer-events-none" style={{ clipPath: "polygon(0 0, 100% 5%, 95% 100%, 0 90%)" }} />
              </div>
            </div>

            {/* Right column - Content with extreme offset */}
            <div className="lg:col-span-7 lg:pl-20 lg:-mt-20 flex items-center">
              <div className="lg:ml-auto lg:max-w-xl">
                {/* Section label with line */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-[2px] bg-rose-500" />
                  <span className="text-rose-400 text-sm font-bold tracking-[0.3em] uppercase">About Us</span>
                </div>

                <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[0.9]">
                  Making
                  <br />
                  Beauty
                  <br />
                  <span className="text-rose-500" style={{ WebkitTextStroke: "2px currentColor", WebkitTextFillColor: "transparent" }}>
                    Accessible
                  </span>
                </h2>

                <div className="mt-10 space-y-6">
                  <p className="text-xl text-white/60 leading-relaxed border-l-4 border-rose-500 pl-6">
                    With extensive experience in sourcing, branding, and customization, we enthusiastically respond to every request.
                  </p>
                  <p className="text-lg text-white/40 leading-relaxed">
                    Our business ethics is defined by our slogan: "Where ideas meet excellence." We believe in finding win-win solutions.
                  </p>
                </div>

                {/* Countries as floating pills */}
                <div className="mt-12 flex flex-wrap gap-3">
                  {COMPANY.countries.map((country, i) => (
                    <span
                      key={country}
                      className="px-5 py-3 bg-white/5 text-white/70 text-sm font-medium hover:bg-rose-500 hover:text-white transition-all duration-300 cursor-default"
                      style={{ 
                        clipPath: i % 2 === 0 ? "polygon(5% 0, 100% 0, 95% 100%, 0 100%)" : "polygon(0 0, 95% 0, 100% 100%, 5% 100%)",
                        transform: `translateY(${i % 3 * 5}px)`
                      }}
                    >
                      {country}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="inline-flex mt-12 px-10 py-5 bg-rose-500 text-white font-bold hover:bg-rose-400 transition-all duration-300 group"
                  style={{ clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0 100%)" }}
                >
                  Work With Us
                  <svg className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════
// SERVICES SECTION - Chaotic Bento Grid (FIXED)
// ═══════════════════════════════════════════════════════════════
function ServicesSection() {
  return (
    <section id="services" className="relative bg-white overflow-hidden">
      {/* Diagonal top accent - positioned above content */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-[#0a0a0a]" style={{ clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 100%)" }} />

      <div className="relative pt-32 pb-32 px-6 lg:px-16">
        {/* Header with giant number */}
        <div className="flex items-start gap-8 mb-16 lg:mb-20">
          <span className="text-[150px] lg:text-[250px] font-black text-black/5 leading-none -mt-10 hidden lg:block">8</span>
          <div className="lg:-ml-24">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-[2px] bg-rose-500" />
              <span className="text-rose-500 text-sm font-bold tracking-[0.3em] uppercase">Services</span>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-black text-black leading-[0.9]">
              Everything
              <br />
              <span className="text-rose-500">You Need</span>
            </h2>
          </div>
        </div>

        {/* Chaotic Bento Grid */}
        <div className="grid grid-cols-12 gap-4 lg:gap-6">
          {/* Large featured card */}
          <div className="col-span-12 lg:col-span-8 row-span-2 group relative h-[400px] lg:h-[500px] overflow-hidden" style={{ clipPath: "polygon(0 0, 100% 0, 100% 95%, 95% 100%, 0 100%)" }}>
            <Image src={SERVICES[0].image} alt={SERVICES[0].title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" unoptimized />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
              <span className="inline-block px-4 py-2 bg-rose-500 text-white text-xs font-bold tracking-wider uppercase mb-4">Featured</span>
              <h3 className="text-3xl lg:text-5xl font-black text-white mb-4">{SERVICES[0].title}</h3>
              <p className="text-white/60 text-lg max-w-md">{SERVICES[0].description}</p>
            </div>
          </div>

          {/* Tall right card */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4 row-span-2 group relative h-[300px] lg:h-[500px] overflow-hidden" style={{ clipPath: "polygon(3% 0, 100% 0, 100% 100%, 0 100%, 0 3%)" }}>
            <Image src={SERVICES[1].image} alt={SERVICES[1].title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" unoptimized />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8 pb-8">
              <span className="text-rose-400 text-5xl lg:text-6xl font-black mb-2">02</span>
              <h3 className="text-xl lg:text-2xl font-black text-white">{SERVICES[1].title}</h3>
              <p className="text-white/60 text-sm mt-2 lg:hidden">{SERVICES[1].description}</p>
            </div>
          </div>

          {/* Row of 3 medium cards with different shapes */}
          {SERVICES.slice(2, 5).map((service, i) => (
            <div
              key={service.title}
              className={`col-span-12 md:col-span-6 lg:col-span-4 group relative h-[280px] overflow-hidden`}
              style={{ 
                clipPath: i === 0 
                  ? "polygon(0 0, 100% 0, 100% 100%, 5% 100%, 0 95%)" 
                  : i === 1 
                    ? "polygon(0 5%, 5% 0, 100% 0, 100% 95%, 95% 100%, 0 100%)" 
                    : "polygon(0 0, 95% 0, 100% 5%, 100% 100%, 0 100%)"
              }}
            >
              <Image src={service.image} alt={service.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" unoptimized />
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 pb-8">
                <span className="text-rose-400 text-3xl lg:text-4xl font-black mb-2">0{i + 3}</span>
                <h3 className="text-lg lg:text-xl font-black text-white group-hover:text-rose-400 transition-colors">{service.title}</h3>
                <p className="text-white/60 text-sm mt-2 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity line-clamp-2">{service.description}</p>
              </div>
            </div>
          ))}

          {/* Bottom row - varied sizes */}
          <div className="col-span-12 md:col-span-4 lg:col-span-3 group relative h-[200px] overflow-hidden border-4 border-rose-500">
            <Image src={SERVICES[5].image} alt={SERVICES[5].title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" unoptimized />
            <div className="absolute inset-0 bg-black/70 group-hover:bg-rose-500/80 transition-colors flex flex-col items-center justify-center p-4">
              <span className="text-rose-400 lg:hidden text-2xl font-black mb-1">06</span>
              <h3 className="text-lg lg:text-xl font-black text-white text-center">{SERVICES[5].title}</h3>
              <p className="text-white/60 text-xs mt-2 text-center lg:hidden line-clamp-2">{SERVICES[5].description}</p>
            </div>
          </div>

          <div className="col-span-12 md:col-span-8 lg:col-span-5 group relative h-[200px] overflow-hidden" style={{ clipPath: "polygon(2% 0, 100% 0, 98% 100%, 0 100%)" }}>
            <Image src={SERVICES[6].image} alt={SERVICES[6].title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" unoptimized />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent flex items-center">
              <div className="p-6">
                <span className="text-rose-400 text-2xl lg:text-3xl font-black">07</span>
                <h3 className="text-xl lg:text-2xl font-black text-white mt-2">{SERVICES[6].title}</h3>
                <p className="text-white/60 text-sm mt-2 lg:hidden line-clamp-2">{SERVICES[6].description}</p>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-4 group relative h-[220px] lg:h-[200px] overflow-hidden bg-rose-500 flex items-center justify-center" style={{ clipPath: "polygon(3% 0, 100% 0, 97% 100%, 0 100%)" }}>
            <div className="text-center px-6 py-4">
              <span className="text-white/30 text-4xl lg:text-5xl font-black">08</span>
              <h3 className="text-lg lg:text-xl font-black text-white mt-2">{SERVICES[7].title}</h3>
              <p className="text-white/80 text-sm mt-2 line-clamp-3">{SERVICES[7].description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════
// FULL WIDTH CTA BANNER - Diagonal split
// ═══════════════════════════════════════════════════════════════
function CtaBanner() {
  return (
    <section className="relative h-[80vh] lg:h-screen overflow-hidden">
      {/* Split diagonal background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black" style={{ clipPath: "polygon(0 0, 60% 0, 40% 100%, 0 100%)" }}>
          <div className="h-full flex flex-col justify-center px-8 lg:px-20">
            <span className="text-rose-500 text-sm font-bold tracking-[0.3em] uppercase mb-6">The Process</span>
            <h2 className="text-5xl md:text-7xl lg:text-[120px] font-black text-white leading-[0.85]">
              From
              <br />
              <span style={{ WebkitTextStroke: "2px white", WebkitTextFillColor: "transparent" }}>Concept</span>
              <br />
              To Shelf
            </h2>
            <p className="mt-8 text-xl text-white/50 max-w-md">
              We handle every detail so you can focus on growing your brand
            </p>
            <a
              href="#contact"
              className="mt-10 inline-flex w-fit items-center gap-3 px-10 py-5 bg-rose-500 text-white font-bold hover:bg-rose-400 transition-colors"
              style={{ clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0 100%)" }}
            >
              Start Your Journey
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
        <div className="absolute inset-0" style={{ clipPath: "polygon(60% 0, 100% 0, 100% 100%, 40% 100%)" }}>
          <Image
            src="https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1920&q=85"
            alt="Beauty products showcase"
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-rose-500/20" />
        </div>
      </div>

      {/* Floating process steps */}
      <div className="absolute bottom-10 right-10 lg:bottom-20 lg:right-20 hidden lg:block">
        <div className="flex flex-col gap-4">
          {["Ideate", "Design", "Produce", "Launch"].map((step, i) => (
            <div key={step} className="flex items-center gap-4 group cursor-default" style={{ transform: `translateX(${i * 20}px)` }}>
              <span className="w-12 h-12 bg-white/10 backdrop-blur-xl flex items-center justify-center text-white font-black group-hover:bg-rose-500 transition-colors">
                {i + 1}
              </span>
              <span className="text-white font-bold group-hover:text-rose-400 transition-colors">{step}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════
// PORTFOLIO SECTION - Overlapping cards chaos
// ═══════════════════════════════════════════════════════════════
function PortfolioSection() {
  const projects = [
    {
      name: "Rebel Tattoos",
      category: "Full Brand Development",
      description: "Complete brand identity, product line, and market launch strategy.",
      image: "https://images.unsplash.com/photo-1611042553484-d61f84d22784?w=1400&q=85",
      featured: true,
    },
    {
      name: "COOLBOXBEAUTY",
      category: "Packaging & Sourcing",
      description: "Premium packaging solutions and global supplier network.",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80",
      featured: false,
    },
    {
      name: "COLORFIT",
      category: "Product Customization",
      description: "Custom formulations for fitness-focused beauty products.",
      image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&q=80",
      featured: false,
    },
  ];

  return (
    <section id="portfolio" className="relative bg-[#0a0a0a] overflow-hidden">
      {/* Giant rotated background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[400px] font-black text-white/[0.02] leading-none select-none pointer-events-none whitespace-nowrap" style={{ transform: "translate(-50%, -50%) rotate(-15deg)" }}>
        PORTFOLIO
      </div>

      <div className="relative py-32 lg:py-48">
        {/* Header - Off-center */}
        <div className="px-6 lg:px-16 mb-20">
          <div className="lg:ml-auto lg:w-1/2">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-rose-400 text-sm font-bold tracking-[0.3em] uppercase">Portfolio</span>
              <div className="flex-1 h-[2px] bg-rose-500/30" />
            </div>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.85]">
              Brands
              <br />
              We've <span className="text-rose-500">Built</span>
            </h2>
          </div>
        </div>

        {/* Overlapping Cards Layout */}
        <div className="relative px-6 lg:px-16">
          {/* Featured Project - Huge diagonal card */}
          <div className="relative mb-8 lg:mb-0">
            <div
              className="group relative h-[60vh] lg:h-[80vh] overflow-hidden"
              style={{ clipPath: "polygon(0 5%, 100% 0, 100% 95%, 0 100%)" }}
            >
              <Image
                src={projects[0].image}
                alt={projects[0].name}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />

              <div className="absolute inset-0 flex items-center">
                <div className="px-8 lg:px-20 max-w-2xl">
                  <span className="inline-block px-6 py-3 bg-rose-500 text-white text-sm font-bold tracking-wider uppercase mb-6" style={{ clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0 100%)" }}>
                    Featured Project
                  </span>
                  <h3 className="text-5xl lg:text-8xl font-black text-white mb-6">
                    {projects[0].name}
                  </h3>
                  <p className="text-xl text-white/60 mb-8">
                    {projects[0].description}
                  </p>
                  <span className="text-rose-400 text-sm font-bold tracking-wider uppercase flex items-center gap-2">
                    {projects[0].category}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>

            {/* Floating number */}
            <div className="absolute -bottom-10 right-10 lg:right-32 text-[200px] lg:text-[300px] font-black text-rose-500/10 leading-none pointer-events-none">
              01
            </div>
          </div>

          {/* Secondary projects - Overlapping offset cards */}
          <div className="grid md:grid-cols-2 gap-8 lg:-mt-32 lg:ml-20">
            {projects.slice(1).map((project, i) => (
              <div
                key={project.name}
                className="group relative h-[400px] overflow-hidden"
                style={{
                  clipPath: i === 0 ? "polygon(0 0, 100% 5%, 100% 100%, 0 95%)" : "polygon(0 5%, 100% 0, 100% 95%, 0 100%)",
                  transform: `translateY(${i * 40}px)`
                }}
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />

                {/* Project number */}
                <div className="absolute top-6 right-6 text-6xl font-black text-white/20">
                  0{i + 2}
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                  <span className="text-rose-400 text-xs font-bold tracking-wider uppercase mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-2xl lg:text-3xl font-black text-white group-hover:text-rose-400 transition-colors">
                    {project.name}
                  </h3>
                  <p className="mt-2 lg:mt-3 text-white/60 text-sm lg:opacity-0 lg:group-hover:opacity-100 transition-opacity line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════
// PRODUCTS SECTION - Hexagonal/Diamond mosaic
// ═══════════════════════════════════════════════════════════════
function ProductsSection() {
  const productImages = [
    "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80",
    "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&q=80",
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80",
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80",
    "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
    "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&q=80",
  ];

  return (
    <section id="products" className="relative bg-white overflow-hidden py-32 lg:py-48">
      {/* Diagonal slice top - smaller on mobile */}
      <div className="absolute top-0 left-0 right-0 h-20 lg:h-32 bg-[#0a0a0a]" style={{ clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 100%)" }} />

      {/* Header */}
      <div className="relative px-6 lg:px-16 mb-20 pt-8 lg:pt-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-[2px] bg-rose-500" />
              <span className="text-rose-500 text-sm font-bold tracking-[0.3em] uppercase">Products</span>
            </div>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-black leading-[0.85]">
              What We
              <br />
              <span className="text-rose-500">Source</span>
            </h2>
          </div>
          <p className="text-xl text-black/50 max-w-md lg:text-right">
            From skincare to sportswear, we source and develop products across multiple categories
          </p>
        </div>
      </div>

      {/* Diamond/Rotated Grid */}
      <div className="px-6 lg:px-16">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((product, i) => (
            <div
              key={product}
              className={`group relative overflow-hidden ${
                i === 0 ? "col-span-2 lg:col-span-1 h-[400px]" :
                i === 1 ? "h-[300px] lg:h-[350px]" :
                i === 2 ? "h-[300px] lg:h-[400px]" :
                i === 3 ? "h-[350px]" :
                i === 4 ? "col-span-2 lg:col-span-1 h-[300px]" :
                "h-[350px]"
              }`}
              style={{
                clipPath: i % 3 === 0 
                  ? "polygon(0 0, 100% 0, 100% 90%, 50% 100%, 0 90%)"
                  : i % 3 === 1
                    ? "polygon(0 10%, 50% 0, 100% 10%, 100% 100%, 0 100%)"
                    : "polygon(0 0, 100% 0, 100% 100%, 50% 90%, 0 100%)",
                transform: `rotate(${i % 2 === 0 ? 0 : 0}deg) translateY(${i % 2 === 0 ? 0 : 20}px)`
              }}
            >
              <Image
                src={productImages[i]}
                alt={product}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                unoptimized
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-rose-500/70 transition-all duration-500" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <span className="text-white/30 text-7xl lg:text-9xl font-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 group-hover:opacity-10 transition-opacity">
                  0{i + 1}
                </span>
                <h3 className="relative text-2xl lg:text-3xl font-black text-white group-hover:scale-110 transition-transform">
                  {product}
                </h3>
                <div className="mt-4 w-12 h-1 bg-rose-500 group-hover:w-24 transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating CTA */}
      <div className="mt-20 text-center">
        <a
          href="#contact"
          className="inline-flex items-center gap-4 px-12 py-6 bg-black text-white font-bold text-lg hover:bg-rose-500 transition-colors"
          style={{ clipPath: "polygon(3% 0, 97% 0, 100% 50%, 97% 100%, 3% 100%, 0 50%)" }}
        >
          Request Product Catalog
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════
// STATS SECTION - Massive staggered numbers (FIXED)
// ═══════════════════════════════════════════════════════════════
function StatsSection() {
  const stats = [
    { number: "7+", label: "Countries", sublabel: "Global Reach" },
    { number: "500+", label: "Products", sublabel: "Launched Successfully" },
    { number: "100+", label: "Partners", sublabel: "Worldwide" },
    { number: "15+", label: "Years", sublabel: "Of Excellence" },
  ];

  return (
    <section className="relative bg-rose-500 overflow-hidden" style={{ clipPath: "polygon(0 5%, 100% 0, 100% 95%, 0 100%)" }}>
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 border-2 border-white rounded-full" />
        <div className="absolute bottom-10 right-10 w-60 h-60 border-2 border-white rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-white rotate-45" />
      </div>

      <div className="relative py-32 lg:py-40 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Stats grid - each stat is self-contained */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="text-center"
                style={{ transform: `translateY(${i % 2 === 1 ? 20 : 0}px)` }}
              >
                <div className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-none mb-4">
                  {stat.number}
                </div>
                <div className="text-white font-bold text-lg lg:text-xl">{stat.label}</div>
                <div className="text-white/60 text-sm mt-1">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════
// TESTIMONIALS - Diagonal floating cards
// ═══════════════════════════════════════════════════════════════
function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Beauty Solutions transformed our idea into a premium product line. Their attention to detail and industry expertise is truly unmatched.",
      name: "Sarah Chen",
      role: "Founder, Lumina Skincare",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    },
    {
      quote: "The quality control and sourcing expertise saved us months of work. They understand the beauty industry inside and out.",
      name: "Michael Park",
      role: "CEO, GlowUp Cosmetics",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    },
    {
      quote: "From packaging to production, they handled everything seamlessly. Our brand launch was a huge success thanks to their team.",
      name: "Emma Liu",
      role: "Brand Director, Velvet Beauty",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    },
  ];

  return (
    <section className="relative bg-[#0a0a0a] overflow-hidden py-32 lg:py-48">
      {/* Giant quote mark background */}
      <div className="absolute top-20 left-10 text-[400px] font-serif text-white/[0.02] leading-none select-none pointer-events-none">
        "
      </div>

      <div className="relative px-6 lg:px-16">
        {/* Header - Centered with flourish */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="w-16 h-[2px] bg-rose-500" />
            <span className="text-rose-400 text-sm font-bold tracking-[0.3em] uppercase">Testimonials</span>
            <div className="w-16 h-[2px] bg-rose-500" />
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white">
            Client <span style={{ WebkitTextStroke: "2px white", WebkitTextFillColor: "transparent" }}>Stories</span>
          </h2>
        </div>

        {/* Staggered Cards - No transforms on mobile */}
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-6 lg:gap-10">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`group relative ${i === 0 ? 'lg:-rotate-2 lg:-translate-y-8' : i === 2 ? 'lg:rotate-2 lg:translate-y-8' : ''}`}
            >
              {/* Card background - simpler clip-path for better text visibility */}
              <div
                className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-6 lg:p-10 transition-all duration-500 group-hover:bg-white/10 group-hover:border-rose-500/50"
              >
                {/* Quote icon */}
                <div className="w-16 h-16 bg-rose-500 flex items-center justify-center mb-8 -mt-4 -ml-4" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 30% 100%)" }}>
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                <p className="text-lg lg:text-xl text-white/80 leading-relaxed mb-10">
                  {t.quote}
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 overflow-hidden" style={{ clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0 100%)" }}>
                    <Image src={t.image} alt={t.name} fill className="object-cover" unoptimized />
                  </div>
                  <div>
                    <div className="font-bold text-white text-lg">{t.name}</div>
                    <div className="text-rose-400 text-sm">{t.role}</div>
                  </div>
                </div>
              </div>

              {/* Decorative number */}
              <div className="absolute -bottom-6 -right-2 text-8xl font-black text-rose-500/10 pointer-events-none">
                0{i + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════
// CAREERS SECTION - Split diagonal with floating content
// ═══════════════════════════════════════════════════════════════
function CareersSection() {
  return (
    <section className="relative min-h-[80vh] lg:min-h-[80vh] overflow-hidden">
      {/* On mobile: stacked layout, on desktop: diagonal split */}
      <div className="lg:absolute lg:inset-0 bg-white py-20 lg:py-0" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}>
        <div className="h-full flex items-center px-6 lg:px-20">
          <div className="max-w-md lg:max-w-lg">
            <span className="text-rose-500 text-sm font-bold tracking-[0.3em] uppercase mb-6 block">Careers</span>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-black leading-[0.85] mb-6 lg:mb-8">
              Join
              <br className="hidden lg:block" />
              <span className="lg:hidden"> </span>Our
              <br className="hidden lg:block" />
              <span className="lg:hidden"> </span><span className="text-rose-500">Team</span>
            </h2>
            <p className="text-lg lg:text-xl text-black/50 leading-relaxed">
              No matter what qualifications you have — as long as you have the desire and drive to succeed, we'd love to welcome you.
            </p>
            <a
              href="#contact"
              className="inline-flex mt-8 lg:mt-10 items-center gap-3 px-8 lg:px-10 py-4 lg:py-5 bg-black text-white font-bold hover:bg-rose-500 transition-colors"
              style={{ clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0 100%)" }}
            >
              Get In Touch
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="hidden lg:block absolute inset-0" style={{ clipPath: "polygon(55% 0, 100% 0, 100% 100%, 45% 100%)" }}>
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=85"
          alt="Join our team"
          fill
          className="object-cover"
          unoptimized
        />
        <div className="absolute inset-0 bg-rose-500/20" />
      </div>

      {/* Floating badges */}
      <div className="absolute bottom-10 right-10 lg:bottom-20 lg:right-20 hidden lg:flex flex-col gap-4">
        {["Remote OK", "Flexible Hours", "Growth Path"].map((badge, i) => (
          <div
            key={badge}
            className="px-6 py-3 bg-white/90 backdrop-blur-xl text-black font-bold text-sm"
            style={{
              clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0 100%)",
              transform: `translateX(${i * -20}px)`
            }}
          >
            {badge}
          </div>
        ))}
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════
// CONTACT SECTION - Extreme asymmetric layout
// ═══════════════════════════════════════════════════════════════
function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:${COMPANY.email}?subject=Project Inquiry from ${formData.name}&body=${encodeURIComponent(
      `Name: ${formData.name}\nCompany: ${formData.company}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="relative min-h-screen overflow-hidden">
      {/* Background image with diagonal mask */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1920&q=85"
          alt="Contact us"
          fill
          className="object-cover"
          unoptimized
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 border border-rose-500/20 rotate-45 hidden lg:block" />
      <div className="absolute bottom-40 left-10 w-32 h-32 bg-rose-500/10" style={{ clipPath: "polygon(50% 0, 100% 50%, 50% 100%, 0 50%)" }} />

      <div className="relative py-32 lg:py-48 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-8">
            {/* Left - Contact Info with extreme styling */}
            <div className="lg:col-span-5">
              <div className="sticky top-32">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-[2px] bg-rose-500" />
                  <span className="text-rose-400 text-sm font-bold tracking-[0.3em] uppercase">Contact</span>
                </div>

                <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[0.85] mb-10">
                  Let's Build
                  <br />
                  Something
                  <br />
                  <span className="text-rose-500" style={{ WebkitTextStroke: "2px currentColor", WebkitTextFillColor: "transparent" }}>
                    Beautiful
                  </span>
                </h2>

                <p className="text-xl text-white/50 leading-relaxed mb-12">
                  Ready to bring your vision to life? Our team responds within 24 hours.
                </p>

                {/* Contact cards - Staggered */}
                <div className="space-y-4">
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="group flex items-center gap-6 p-6 bg-white/5 border border-white/10 hover:border-rose-500 transition-all"
                    style={{ clipPath: "polygon(0 0, 100% 0, 97% 100%, 3% 100%)" }}
                  >
                    <div className="w-14 h-14 bg-rose-500 flex items-center justify-center shrink-0" style={{ clipPath: "polygon(20% 0, 100% 0, 80% 100%, 0 100%)" }}>
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-white/40 text-xs uppercase tracking-wider mb-1">Email</div>
                      <div className="text-white font-bold group-hover:text-rose-400 transition-colors">{COMPANY.email}</div>
                    </div>
                  </a>

                  <a
                    href={`https://wa.me/${COMPANY.phoneWhatsapp.replace(/\+/g, "")}`}
                    className="group flex items-center gap-6 p-6 bg-white/5 border border-white/10 hover:border-rose-500 transition-all ml-6"
                    style={{ clipPath: "polygon(3% 0, 97% 0, 100% 100%, 0 100%)" }}
                  >
                    <div className="w-14 h-14 bg-green-500 flex items-center justify-center shrink-0" style={{ clipPath: "polygon(20% 0, 100% 0, 80% 100%, 0 100%)" }}>
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-white/40 text-xs uppercase tracking-wider mb-1">WhatsApp</div>
                      <div className="text-white font-bold group-hover:text-rose-400 transition-colors">{COMPANY.phoneWhatsapp}</div>
                    </div>
                  </a>

                  <div
                    className="flex items-center gap-6 p-6 bg-white/5 border border-white/10 ml-12"
                    style={{ clipPath: "polygon(0 0, 100% 0, 97% 100%, 3% 100%)" }}
                  >
                    <div className="w-14 h-14 bg-emerald-500 flex items-center justify-center shrink-0" style={{ clipPath: "polygon(20% 0, 100% 0, 80% 100%, 0 100%)" }}>
                      <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 01.213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 00.167-.054l1.903-1.114a.864.864 0 01.717-.098 10.16 10.16 0 002.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178A1.17 1.17 0 014.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178 1.17 1.17 0 01-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 01.598.082l1.584.926a.272.272 0 00.14.045c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 01-.023-.156.49.49 0 01.201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088V8.89c-.135-.01-.269-.03-.406-.03zm-2.53 3.274c.535 0 .969.44.969.982a.976.976 0 01-.969.983.976.976 0 01-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 01-.969.983.976.976 0 01-.969-.983c0-.542.434-.982.969-.982z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-white/40 text-xs uppercase tracking-wider mb-1">WeChat</div>
                      <div className="text-white font-bold">{COMPANY.wechat}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Form with wild styling */}
            <div className="lg:col-span-7">
              <div className="relative">
                {/* Form background shape */}
                <div
                  className="bg-white p-8 lg:p-12"
                  style={{ clipPath: "polygon(0 3%, 100% 0, 100% 97%, 0 100%)" }}
                >
                  <h3 className="text-3xl font-black text-black mb-2">Send us a message</h3>
                  <p className="text-black/50 mb-10">Fill out the form and we'll be in touch shortly.</p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="group">
                        <label className="block text-sm font-bold text-black/60 mb-2 group-focus-within:text-rose-500 transition-colors">Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-0 py-4 bg-transparent border-b-2 border-black/10 focus:border-rose-500 outline-none transition-colors font-medium"
                          placeholder="Your name"
                        />
                      </div>
                      <div className="group">
                        <label className="block text-sm font-bold text-black/60 mb-2 group-focus-within:text-rose-500 transition-colors">Email *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-0 py-4 bg-transparent border-b-2 border-black/10 focus:border-rose-500 outline-none transition-colors font-medium"
                          placeholder="you@company.com"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="group">
                        <label className="block text-sm font-bold text-black/60 mb-2 group-focus-within:text-rose-500 transition-colors">Phone</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-0 py-4 bg-transparent border-b-2 border-black/10 focus:border-rose-500 outline-none transition-colors font-medium"
                          placeholder="+1234567890"
                        />
                      </div>
                      <div className="group">
                        <label className="block text-sm font-bold text-black/60 mb-2 group-focus-within:text-rose-500 transition-colors">Company</label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-0 py-4 bg-transparent border-b-2 border-black/10 focus:border-rose-500 outline-none transition-colors font-medium"
                          placeholder="Your company"
                        />
                      </div>
                    </div>
                    <div className="group">
                      <label className="block text-sm font-bold text-black/60 mb-2 group-focus-within:text-rose-500 transition-colors">Message *</label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-0 py-4 bg-transparent border-b-2 border-black/10 focus:border-rose-500 outline-none transition-colors font-medium resize-none"
                        placeholder="Tell us about your project, timeline, and requirements..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-6 bg-black text-white text-lg font-bold hover:bg-rose-500 transition-all duration-300 group"
                      style={{ clipPath: "polygon(2% 0, 98% 0, 100% 50%, 98% 100%, 2% 100%, 0 50%)" }}
                    >
                      <span className="flex items-center justify-center gap-3">
                        Send Message
                        <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </button>
                  </form>
                </div>

                {/* Decorative corner */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-rose-500" style={{ clipPath: "polygon(100% 0, 100% 100%, 0 0)" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════
// FOOTER - Wild asymmetric design
// ═══════════════════════════════════════════════════════════════
function Footer() {
  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Diagonal top slice */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-rose-500" style={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 100%)" }} />

      {/* Giant background text */}
      <div className="absolute bottom-0 right-0 text-[300px] font-black text-white/[0.02] leading-none select-none pointer-events-none translate-x-1/4 translate-y-1/4">
        BS
      </div>

      <div className="relative pt-32 pb-12 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Main footer content */}
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
            {/* Brand column */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-rose-500 flex items-center justify-center" style={{ clipPath: "polygon(20% 0, 100% 0, 80% 100%, 0 100%)" }}>
                  <span className="text-white font-black text-2xl">B</span>
                </div>
                <div>
                  <h3 className="text-3xl font-black">BEAUTY</h3>
                  <p className="text-rose-400 text-sm font-bold tracking-[0.2em]">SOLUTIONS</p>
                </div>
              </div>
              <p className="text-white/50 text-lg leading-relaxed max-w-md mb-8">
                Your trusted partner for sourcing, branding, customization, and production of beauty products across the globe.
              </p>
              <p className="text-white/30 text-sm">
                {COMPANY.officialName}
              </p>

              {/* Social icons with wild shapes */}
              <div className="mt-10 flex gap-4">
                <a
                  href={COMPANY.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-white/5 flex items-center justify-center hover:bg-rose-500 transition-colors"
                  style={{ clipPath: "polygon(20% 0, 100% 0, 80% 100%, 0 100%)" }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href={`https://wa.me/${COMPANY.phoneWhatsapp.replace(/\+/g, "")}`}
                  className="w-14 h-14 bg-white/5 flex items-center justify-center hover:bg-green-500 transition-colors"
                  style={{ clipPath: "polygon(0 0, 80% 0, 100% 100%, 20% 100%)" }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="w-14 h-14 bg-white/5 flex items-center justify-center hover:bg-rose-500 transition-colors"
                  style={{ clipPath: "polygon(20% 0, 100% 0, 80% 100%, 0 100%)" }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Links columns */}
            <div className="lg:col-span-3 lg:col-start-7">
              <h4 className="font-bold text-lg mb-8 flex items-center gap-4">
                <div className="w-8 h-[2px] bg-rose-500" />
                Navigation
              </h4>
              <ul className="space-y-4">
                {["Services", "Portfolio", "Products", "About", "Contact"].map((item, i) => (
                  <li key={item} style={{ transform: `translateX(${i * 5}px)` }}>
                    <a href={`#${item.toLowerCase()}`} className="text-white/50 hover:text-rose-400 transition-colors font-medium">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-3">
              <h4 className="font-bold text-lg mb-8 flex items-center gap-4">
                <div className="w-8 h-[2px] bg-rose-500" />
                Contact
              </h4>
              <ul className="space-y-4 text-white/50">
                <li className="flex items-start gap-3">
                  <span className="text-rose-400 text-xs mt-1">→</span>
                  <a href={`mailto:${COMPANY.email}`} className="hover:text-rose-400 transition-colors">{COMPANY.email}</a>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose-400 text-xs mt-1">→</span>
                  <a href={`https://wa.me/${COMPANY.phoneWhatsapp.replace(/\+/g, "")}`} className="hover:text-rose-400 transition-colors">{COMPANY.phoneWhatsapp}</a>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose-400 text-xs mt-1">→</span>
                  <span>WeChat: {COMPANY.wechat}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar with diagonal slice */}
          <div className="relative pt-8">
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
              <p className="text-white/30 text-sm">
                © {new Date().getFullYear()} {COMPANY.officialName}. All rights reserved.
              </p>
              <p className="text-white/30 text-sm font-medium tracking-wider">
                {COMPANY.sloganPrimary}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ═══════════════════════════════════════════════════════════════
// MAIN PAGE
// ═══════════════════════════════════════════════════════════════
export default function Home() {
  return (
    <main className="bg-black">
      <Header />
      <Hero />
      <PartnersMarquee />
      <AboutSection />
      <ServicesSection />
      <CtaBanner />
      <PortfolioSection />
      <ProductsSection />
      <StatsSection />
      <TestimonialsSection />
      <CareersSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
