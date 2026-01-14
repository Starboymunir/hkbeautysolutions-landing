'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

// Custom hook for scroll-triggered animations
function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isInView };
}

// Animated counter component
function Counter({ end, duration = 2000, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const { ref, isInView } = useInView();

  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [activeServiceImage, setActiveServiceImage] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeBrand, setActiveBrand] = useState(0);
  const [activeBrandImage, setActiveBrandImage] = useState(0);
  const [expandedAIFeature, setExpandedAIFeature] = useState<number | null>(null);
  const [activeBrandDev, setActiveBrandDev] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Reset carousel index when active service changes
  useEffect(() => {
    setActiveServiceImage(0);
  }, [activeService]);

  const services = [
    { 
      title: 'Private Brand Development', 
      description: 'Build your own beauty brand from concept to market — we handle naming, identity, and full market positioning',
      image: '/Photo of brands/Rebel Tatttoos/Rebel Tattoos _logo (2) (1).png',
      images: [
        '/Photo of brands/Rebel Tatttoos/Rebel Tattoos _logo (2) (1).png',
        '/Photo of brands/Rebel Tatttoos/eye liner star white bg.jpg',
        '/Photo of brands/Rebel Tatttoos/pink eyeliner heart amazon 6.jpg',
      ]
    },
    { 
      title: 'Event Activities', 
      description: 'Corporate tattoo bars, wedding events, sports sponsorships, nightclub activations, and promotional campaigns',
      image: '/Events Services_ Corporate Tatttoo_Tattoos Bars_Custom Tattoos for night club_Sport Events gear sponsorship/corporate tattoo KHY by Rebel Tattoos.jpg',
      images: [
        '/Events Services_ Corporate Tatttoo_Tattoos Bars_Custom Tattoos for night club_Sport Events gear sponsorship/corporate tattoo KHY by Rebel Tattoos.jpg',
        '/Events Services_ Corporate Tatttoo_Tattoos Bars_Custom Tattoos for night club_Sport Events gear sponsorship/Brian and Wendy wedding Х Rebel Tattoos.jpg',
        '/Events Services_ Corporate Tatttoo_Tattoos Bars_Custom Tattoos for night club_Sport Events gear sponsorship/Haloween Tattoo Bar by Rebel Tattoos.jpeg',
        '/Events Services_ Corporate Tatttoo_Tattoos Bars_Custom Tattoos for night club_Sport Events gear sponsorship/Haloween Tattoo Bar by Rebel Tattoos_2.jpeg',
        '/Events Services_ Corporate Tatttoo_Tattoos Bars_Custom Tattoos for night club_Sport Events gear sponsorship/Ibiza club event 2025 Х Rebel Tattoos.jpeg',
        '/Events Services_ Corporate Tatttoo_Tattoos Bars_Custom Tattoos for night club_Sport Events gear sponsorship/Pink Ribbon Event at LRC Hong Kong х COLORFIT.jpeg',
        '/Events Services_ Corporate Tatttoo_Tattoos Bars_Custom Tattoos for night club_Sport Events gear sponsorship/Pink Ribbon Event at LRC Hong Kong х COLORFIT _2.jpeg',
        '/Events Services_ Corporate Tatttoo_Tattoos Bars_Custom Tattoos for night club_Sport Events gear sponsorship/Pink ribbon Event at LRC Hong Kong х COLORFIT.jpg',
        '/Events Services_ Corporate Tatttoo_Tattoos Bars_Custom Tattoos for night club_Sport Events gear sponsorship/Pink Ribbon Event at LRC Hong Kong х COLORFIT_3.jpeg',
        '/Events Services_ Corporate Tatttoo_Tattoos Bars_Custom Tattoos for night club_Sport Events gear sponsorship/Secret Tattoo Bar Х Rebel Tatttoos.jpg',
      ]
    },
    { 
      title: 'Product Customization', 
      description: 'Tailor existing products to your specifications — custom colors, scents, formulations, and packaging',
      image: '/images/stock/beauty-products.jpg',
      images: ['/images/stock/beauty-products.jpg', '/images/stock/skincare-1.jpg']
    },
    { 
      title: 'Product Development', 
      description: 'From formulation to production — we create unique products tailored to your target market',
      image: '/Photo of brands/Coolboxbeauty/coolboxbeauty_1.jpg',
      images: [
        '/Photo of brands/Coolboxbeauty/coolboxbeauty_1.jpg',
        '/Photo of brands/Coolboxbeauty/mask.jpg',
        '/Photo of brands/Coolboxbeauty/mask2.jpg',
        '/Photo of brands/Coolboxbeauty/package.jpg',
      ]
    },
    { 
      title: 'AI Content', 
      description: 'AI-powered content creation: product descriptions, marketing copy, social media content, and visual assets',
      image: '/AI service/photo for ai.png',
      images: ['/AI service/photo for ai.png']
    },
    { 
      title: 'Packaging Development', 
      description: 'Full packaging solutions from concept sketches to production-ready designs that stand out on shelves',
      image: '/services/packaging.jpg',
      images: ['/services/packaging.jpg']
    },
    { 
      title: 'Product Sourcing', 
      description: 'Direct access to vetted manufacturers and suppliers across China and Southeast Asia',
      image: '/images/stock/factory.jpg',
      images: ['/images/stock/factory.jpg']
    },
    { 
      title: 'Production Controls & Quality Inspections', 
      description: 'In-line inspections and pre-shipment QC to ensure product standards meet your requirements',
      image: '/images/stock/quality.jpg',
      images: ['/images/stock/quality.jpg']
    },
  ];

  return (
    <main className="bg-[#FDF8F5] text-[#1A1A1A] overflow-x-hidden">
      {/* Cursor follower */}
      <div 
        className="fixed w-4 h-4 bg-[#B5525D] rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-100 hidden lg:block"
        style={{ 
          left: mousePosition.x - 8, 
          top: mousePosition.y - 8,
          transform: 'scale(1)'
        }}
      />

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled ? 'bg-white/90 backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Elegant Text-Based Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="flex flex-col items-center leading-none">
              <span className="text-2xl font-extralight tracking-tight text-[#1A1A1A] group-hover:text-[#B5525D] transition-colors">
                Beauty
              </span>
              <span className="text-xl font-light italic text-[#B5525D] -mt-1">
                Solutions
              </span>
            </div>
            <div className="hidden sm:flex flex-col items-start border-l-2 border-[#B5525D]/30 pl-3">
              <span className="text-[10px] tracking-[0.25em] text-[#3D3636] uppercase">Hong Kong</span>
              <span className="text-[9px] tracking-[0.2em] text-[#B5525D]">LIMITED</span>
            </div>
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            {[
              { label: 'About Us', href: '#about' },
              { label: 'Our Services', href: '#services' },
              { label: 'Our Brands', href: '#brands' },
              { label: 'Carriers & Cooperation', href: '#partners' },
            ].map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                className="text-sm tracking-wider hover:text-[#B5525D] transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#B5525D] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className={`w-6 h-0.5 bg-[#1A1A1A] transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-6 h-0.5 bg-[#1A1A1A] transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 bg-[#1A1A1A] transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>

          <a 
            href="#contact" 
            className="hidden md:block px-6 py-3 border border-[#1A1A1A] text-sm tracking-widest hover:bg-[#1A1A1A] hover:text-white transition-all duration-300"
          >
            Let&apos;s Talk
          </a>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-[#E8D8D8] transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>
          <div className="px-6 py-8 space-y-6">
            {[
              { label: 'About Us', href: '#about' },
              { label: 'Our Services', href: '#services' },
              { label: 'Our Brands', href: '#brands' },
              { label: 'Carriers & Cooperation', href: '#partners' },
              { label: 'Contact Us', href: '#contact' },
            ].map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-xl font-light text-[#1A1A1A] hover:text-[#B5525D] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero - Full viewport with split design */}
      <section className="min-h-screen relative flex items-center">
        {/* Background gradient orbs */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#ECC8D0] rounded-full blur-[120px] opacity-60" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#F0DDD0] rounded-full blur-[100px] opacity-50" />
        
        <div className="max-w-7xl mx-auto px-6 pt-32 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text */}
          <div className="space-y-8">
            <div className="overflow-hidden">
              <p className="text-[#B5525D] tracking-[0.3em] text-base animate-slideUp">
                BEAUTY SOLUTIONS HK
              </p>
            </div>
            
            <div className="overflow-hidden">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight leading-[0.9] animate-slideUp animation-delay-200">
                Where
                <br />
                <span className="italic text-[#B5525D]">ideas</span>
                <br />
                meet
                <br />
                <span className="font-medium">excellence</span>
              </h1>
            </div>
            
            <div className="overflow-hidden">
              <p className="text-xl text-[#2D2626] max-w-md animate-slideUp animation-delay-400 leading-relaxed">
                We source, develop, and manufacture beauty products, cosmetics, 
                and consumer goods for brands and retailers worldwide — from 
                concept to shelf.
              </p>
            </div>

            <div className="flex items-center gap-8 animate-slideUp animation-delay-600">
              <a 
                href="#services" 
                className="group flex items-center gap-4"
              >
                <span className="w-16 h-16 rounded-full border-2 border-[#B5525D] flex items-center justify-center group-hover:bg-[#B5525D] transition-all duration-300">
                  <svg className="w-5 h-5 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
                <span className="text-sm tracking-widest">Explore</span>
              </a>
            </div>
          </div>

          {/* Right - Image composition */}
          <div className="relative h-[600px] hidden lg:block">
            {/* Main hero image - beauty products */}
            <div className="absolute top-0 right-0 w-80 h-[450px] rounded-[2rem] overflow-hidden shadow-2xl animate-float">
              <Image
                src="/about.jpg"
                alt="Beauty Solutions"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#B5525D]/30 to-transparent" />
            </div>
            {/* Coolbox product image */}
            <div className="absolute bottom-0 left-0 w-64 h-80 rounded-[2rem] overflow-hidden shadow-xl animate-float animation-delay-1000">
              <Image
                src="/Photo of brands/Coolboxbeauty/coolboxbeauty_1.jpg"
                alt="Coolboxbeauty"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating company logo accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 bg-white rounded-full flex flex-col items-center justify-center animate-pulse-slow shadow-xl border-4 border-[#B5525D]/20">
              <span className="text-3xl font-extralight tracking-tighter text-[#1A1A1A]">Beauty</span>
              <span className="text-2xl font-light italic text-[#B5525D] -mt-1">Solutions</span>
              <span className="text-[8px] tracking-[0.3em] text-[#3D3636] mt-1">HK LIMITED</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-[#B5525D] to-transparent animate-pulse" />
        </div>
      </section>

      {/* Stats bar - Horizontal scroll on mobile */}
      <section className="py-16 border-y border-[#E8D8D8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {[
              { number: 7, suffix: '+', label: 'Countries' },
              { number: 100, suffix: '+', label: 'Brands Launched' },
              { number: 15, suffix: '+', label: 'Years Experience' },
              { number: 50, suffix: 'M+', label: 'Units Manufactured' },
            ].map((stat, i) => (
              <div key={i} className="text-center group cursor-default">
                <div className="text-4xl md:text-5xl font-extralight text-[#B5525D] group-hover:scale-110 transition-transform duration-300">
                  <Counter end={stat.number} suffix={stat.suffix} />
                </div>
                <p className="text-base tracking-wider text-[#3D3636] mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About - Asymmetric layout */}
      <section id="about" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* Left column - spanning 5 cols */}
            <div className="lg:col-span-5 space-y-8">
              <p className="text-[#B5525D] tracking-[0.3em] text-base">ABOUT US</p>
              <h2 className="text-4xl md:text-5xl font-extralight leading-tight">
                Where Ideas
                <br />
                Meet
                <br />
                <span className="italic text-[#B5525D]">Excellence</span>
              </h2>
            </div>

            {/* Right column - spanning 7 cols */}
            <div className="lg:col-span-7 space-y-8">
              <p className="text-xl text-[#2D2626] leading-relaxed">
                With extensive experience in sourcing, branding, and customization, 
                we enthusiastically respond to every request and embrace challenges 
                without hesitation.
              </p>
              <p className="text-[#3D3636] leading-relaxed text-lg">
                Our business ethics is defined by our slogan and company ethos: 
                &ldquo;where ideas meet excellence.&rdquo; We believe in turning visions 
                into reality through dedicated partnership and uncompromising quality. 
                Whether you need private label products, custom formulations, packaging 
                design, or full brand creation — we handle everything from factory sourcing 
                to quality control and logistics.
              </p>
              
              {/* Signature element */}
              <div className="flex items-center gap-6 pt-8">
                <div className="w-20 h-px bg-[#B5525D]" />
                <p className="text-sm tracking-widest text-[#3D3636]">
                  BEAUTY SOLUTIONS (HK) LIMITED
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          OUR SERVICES - SPECTACULAR SHOWCASE (Light & Feminine)
          ═══════════════════════════════════════════════════════════════════════════ */}
      <section id="services" className="relative overflow-hidden">
        {/* Light feminine background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FDF8F5] via-[#F5EBE8] to-[#FDF8F5]" />
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-[600px] h-[600px] bg-[#B5525D] rounded-full blur-[200px] opacity-10" />
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-[#E8B4B8] rounded-full blur-[180px] opacity-15" />
        </div>
        
        {/* Section Header */}
        <div className="relative py-24 text-center">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-[#B5525D] tracking-[0.5em] text-sm mb-6 uppercase">What We Do</p>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-extralight text-[#1A1A1A] leading-none">
              Our <span className="italic text-[#B5525D] font-light">Services</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#B5525D] to-transparent mx-auto mt-8" />
          </div>
        </div>

        {/* Service 1: Private Brand Development - SPECTACULAR SHOWCASE */}
        <div className="relative py-24 border-t border-[#E8D8D8] overflow-hidden">
          {/* Background elements */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#B5525D]/5 rounded-full blur-[100px]" />
          
          <div className="max-w-7xl mx-auto px-6">
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
              <div>
                <span className="text-8xl md:text-9xl font-extralight text-[#B5525D]/30 leading-none block mb-4">01</span>
                <h3 className="text-4xl md:text-6xl font-light text-[#1A1A1A] leading-tight">
                  Private Brand<br /><span className="text-[#B5525D] italic">Development</span>
                </h3>
              </div>
              <div className="max-w-lg">
                <p className="text-xl text-[#3D3636] leading-relaxed">
                  We help you build your own beauty brand from scratch — from naming and brand identity to market positioning and product development.
                </p>
              </div>
            </div>

            {/* Brand Showcase Tabs */}
            <div className="flex flex-wrap gap-4 mb-12">
              {['Rebel Tattoos', 'COOLBOXBEAUTY', 'COLORFIT'].map((brand, i) => (
                <button
                  key={brand}
                  onClick={() => setActiveBrandDev(i)}
                  className={`px-8 py-4 rounded-full text-lg font-light transition-all duration-300 ${
                    activeBrandDev === i 
                      ? 'bg-[#B5525D] text-white shadow-xl shadow-[#B5525D]/30 scale-105' 
                      : 'bg-white border border-[#E8D8D8] text-[#3D3636] hover:border-[#B5525D] hover:text-[#B5525D]'
                  }`}
                >
                  {brand}
                </button>
              ))}
            </div>

            {/* Rebel Tattoos Showcase */}
            {activeBrandDev === 0 && (
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Image Gallery */}
                <div className="space-y-4">
                  {/* Main featured image */}
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-[#B5525D]/10 bg-white">
                    <Image 
                      src={[
                        '/Photo of brands/Rebel Tatttoos/artistic Amazon 4 (1).jpg',
                        '/Photo of brands/Rebel Tatttoos/blue stars Amazon 1.2 (1).jpg',
                        '/Photo of brands/Rebel Tatttoos/blue stars Amazon 3.jpg',
                        '/Photo of brands/Rebel Tatttoos/eye liner star white bg.jpg',
                        '/Photo of brands/Rebel Tatttoos/pink eyeliner heart amazon 6.jpg',
                        '/Photo of brands/Rebel Tatttoos/Snow 2 вида Amazon 1.jpg',
                        '/Photo of brands/Rebel Tatttoos/Snow Amazon 56.jpg',
                        '/Photo of brands/Rebel Tatttoos/space Amazon 3 (1).jpg',
                        '/Photo of brands/Rebel Tatttoos/violet eyeliner butterfly amazon 4 (1).jpg',
                      ][activeBrandImage % 9]}
                      alt="Rebel Tattoos Product"
                      fill
                      className="object-contain p-8"
                    />
                    {/* Navigation */}
                    <button onClick={() => setActiveBrandImage(prev => prev - 1 < 0 ? 8 : prev - 1)} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110">
                      <svg className="w-5 h-5 text-[#1A1A1A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <button onClick={() => setActiveBrandImage(prev => (prev + 1) % 9)} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110">
                      <svg className="w-5 h-5 text-[#1A1A1A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </button>
                    <div className="absolute bottom-4 right-4 px-4 py-2 bg-white/90 rounded-full text-sm font-medium text-[#1A1A1A] shadow">
                      {(activeBrandImage % 9) + 1} / 9
                    </div>
                  </div>
                  {/* Thumbnail strip */}
                  <div className="grid grid-cols-9 gap-2">
                    {[
                      '/Photo of brands/Rebel Tatttoos/artistic Amazon 4 (1).jpg',
                      '/Photo of brands/Rebel Tatttoos/blue stars Amazon 1.2 (1).jpg',
                      '/Photo of brands/Rebel Tatttoos/blue stars Amazon 3.jpg',
                      '/Photo of brands/Rebel Tatttoos/eye liner star white bg.jpg',
                      '/Photo of brands/Rebel Tatttoos/pink eyeliner heart amazon 6.jpg',
                      '/Photo of brands/Rebel Tatttoos/Snow 2 вида Amazon 1.jpg',
                      '/Photo of brands/Rebel Tatttoos/Snow Amazon 56.jpg',
                      '/Photo of brands/Rebel Tatttoos/space Amazon 3 (1).jpg',
                      '/Photo of brands/Rebel Tatttoos/violet eyeliner butterfly amazon 4 (1).jpg',
                    ].map((img, i) => (
                      <button key={i} onClick={() => setActiveBrandImage(i)} className={`relative aspect-square rounded-lg overflow-hidden transition-all ${activeBrandImage % 9 === i ? 'ring-2 ring-[#B5525D] scale-105 z-10' : 'opacity-60 hover:opacity-100'}`}>
                        <Image src={img} alt="" fill className="object-cover" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Brand Info */}
                <div className="space-y-8 lg:sticky lg:top-32">
                  <div className="relative w-48 h-20">
                    <Image src="/Photo of brands/Rebel Tatttoos/Rebel Tattoos _logo (2) (1).png" alt="Rebel Tattoos Logo" fill className="object-contain" />
                  </div>
                  <h4 className="text-3xl font-light text-[#1A1A1A]">Temporary Tattoo Brand</h4>
                  <p className="text-lg text-[#3D3636] leading-relaxed">
                    A complete brand we developed from scratch — including naming, brand identity, product line development, packaging design, and Amazon marketplace optimization. Rebel Tattoos has become a leading temporary tattoo brand with products sold worldwide.
                  </p>
                  <div className="space-y-4">
                    <h5 className="text-sm tracking-widest text-[#B5525D] uppercase">What We Delivered</h5>
                    <div className="flex flex-wrap gap-3">
                      {['Brand Naming', 'Logo Design', 'Product Development', 'Packaging Design', 'Amazon Optimization', 'Marketing Strategy'].map((item) => (
                        <span key={item} className="px-4 py-2 bg-[#F5EBE8] rounded-full text-sm text-[#3D3636]">{item}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-6 pt-4">
                    <div className="text-center">
                      <span className="text-3xl font-light text-[#B5525D]">9+</span>
                      <p className="text-sm text-[#3D3636]">Products</p>
                    </div>
                    <div className="w-px h-12 bg-[#E8D8D8]" />
                    <div className="text-center">
                      <span className="text-3xl font-light text-[#B5525D]">5+</span>
                      <p className="text-sm text-[#3D3636]">Markets</p>
                    </div>
                    <div className="w-px h-12 bg-[#E8D8D8]" />
                    <div className="text-center">
                      <span className="text-3xl font-light text-[#B5525D]">100K+</span>
                      <p className="text-sm text-[#3D3636]">Units Sold</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* COOLBOXBEAUTY Showcase */}
            {activeBrandDev === 1 && (
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div className="space-y-4">
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-[#B5525D]/15 bg-white">
                    <Image src="/Photo of brands/Coolboxbeauty/coolboxbeauty_1.jpg" alt="Coolboxbeauty" fill className="object-cover" />
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {['/Photo of brands/Coolboxbeauty/coolboxbeauty_1.jpg', '/Photo of brands/Coolboxbeauty/mask.jpg', '/Photo of brands/Coolboxbeauty/mask2.jpg', '/Photo of brands/Coolboxbeauty/package.jpg'].map((img, i) => (
                      <div key={i} className="relative aspect-square rounded-lg overflow-hidden">
                        <Image src={img} alt="" fill className="object-cover hover:scale-110 transition-transform" />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-8 lg:sticky lg:top-32">
                  <h4 className="text-3xl font-light text-[#1A1A1A]">COOLBOXBEAUTY</h4>
                  <p className="text-lg text-[#3D3636] leading-relaxed">
                    Premium skincare and beauty brand focusing on innovative cooling technology products. We developed the complete brand identity, product formulations, and packaging to create a unique position in the K-beauty inspired market.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {['Brand Strategy', 'Product Formulation', 'Packaging Design', 'Market Launch'].map((item) => (
                      <span key={item} className="px-4 py-2 bg-[#F5EBE8] rounded-full text-sm text-[#3D3636]">{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* COLORFIT Showcase */}
            {activeBrandDev === 2 && (
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div className="space-y-4">
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-[#B5525D]/15 bg-white">
                    <Image src="/Photo of brands/Colorfit/colorfit.jpg" alt="Colorfit" fill className="object-cover" />
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {['/Photo of brands/Colorfit/colorfit.jpg', '/Photo of brands/Colorfit/colorfit 1.jpeg', '/Photo of brands/Colorfit/colorfit_2.jpeg'].map((img, i) => (
                      <div key={i} className="relative aspect-square rounded-lg overflow-hidden">
                        <Image src={img} alt="" fill className="object-cover hover:scale-110 transition-transform" />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-8 lg:sticky lg:top-32">
                  <h4 className="text-3xl font-light text-[#1A1A1A]">COLORFIT</h4>
                  <p className="text-lg text-[#3D3636] leading-relaxed">
                    Sports and active lifestyle beauty brand designed for fitness enthusiasts. Complete brand development including workout-proof cosmetics, sweat-resistant formulations, and sporty packaging design.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {['Sports Focus', 'Sweat-Proof Formulas', 'Active Lifestyle', 'Event Partnerships'].map((item) => (
                      <span key={item} className="px-4 py-2 bg-[#F5EBE8] rounded-full text-sm text-[#3D3636]">{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Service 2: Event Activities - Gallery */}
        <div className="relative py-24 bg-white/50">
          <div className="max-w-7xl mx-auto px-6 mb-12">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
              <div className="space-y-4">
                <span className="text-8xl font-extralight text-[#B5525D]/20">02</span>
                <h3 className="text-4xl md:text-5xl font-light text-[#1A1A1A] leading-tight">
                  Event<br /><span className="text-[#B5525D] italic">Activities</span>
                </h3>
              </div>
              <p className="text-xl text-[#3D3636] max-w-md">
                Corporate tattoo bars, wedding events, sports sponsorships, nightclub activations, and promotional campaigns.
              </p>
            </div>
          </div>
          
          {/* Main featured image - proper aspect ratio */}
          <div className="max-w-7xl mx-auto px-6 mb-8">
            <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl shadow-[#B5525D]/20 group">
              <Image 
                src={[
                  '/Events Services_ Corporate Tatttoo_Tattoos Bars_Custom Tattoos for night club_Sport Events gear sponsorship/corporate tattoo KHY by Rebel Tattoos.jpg',
                  '/Events Services_ Corporate Tatttoo_Tattoos Bars_Custom Tattoos for night club_Sport Events gear sponsorship/Brian and Wendy wedding Х Rebel Tattoos.jpg',
                  '/Events Services_ Corporate Tatttoo_Tattoos Bars_Custom Tattoos for night club_Sport Events gear sponsorship/Haloween Tattoo Bar by Rebel Tattoos.jpeg',
                  '/Events Services_ Corporate Tatttoo_Tattoos Bars_Custom Tattoos for night club_Sport Events gear sponsorship/Ibiza club event 2025 Х Rebel Tattoos.jpeg',
                  '/Events Services_ Corporate Tatttoo_Tattoos Bars_Custom Tattoos for night club_Sport Events gear sponsorship/Pink Ribbon Event at LRC Hong Kong х COLORFIT.jpeg',
                  '/Events Services_ Corporate Tatttoo_Tattoos Bars_Custom Tattoos for night club_Sport Events gear sponsorship/Haloween Tattoo Bar by Rebel Tattoos_2.jpeg',
                  '/Events Services_ Corporate Tatttoo_Tattoos Bars_Custom Tattoos for night club_Sport Events gear sponsorship/Pink Ribbon Event at LRC Hong Kong х COLORFIT _2.jpeg',
                  '/Events Services_ Corporate Tatttoo_Tattoos Bars_Custom Tattoos for night club_Sport Events gear sponsorship/Pink ribbon Event at LRC Hong Kong х COLORFIT.jpg',
                  '/Events Services_ Corporate Tatttoo_Tattoos Bars_Custom Tattoos for night club_Sport Events gear sponsorship/Pink Ribbon Event at LRC Hong Kong х COLORFIT_3.jpeg',
                  '/Events Services_ Corporate Tatttoo_Tattoos Bars_Custom Tattoos for night club_Sport Events gear sponsorship/Secret Tattoo Bar Х Rebel Tatttoos.jpg',
                ][activeServiceImage % 10]}
                alt="Event Activities"
                fill
                className="object-contain bg-[#F5EBE8]"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-white/80 text-sm tracking-widest mb-2">FEATURED EVENT</p>
                <p className="text-white text-2xl font-light">
                  {['Corporate Tattoo Bar - KHY', 'Wedding Event - Brian & Wendy', 'Halloween Tattoo Bar', 'Ibiza Club Event 2025', 'Pink Ribbon Event - Hong Kong', 'Halloween Tattoo Bar 2', 'Pink Ribbon Event 2', 'Pink Ribbon Event 3', 'Pink Ribbon Event 4', 'Secret Tattoo Bar'][activeServiceImage % 10]}
                </p>
              </div>
              {/* Navigation arrows */}
              <button onClick={() => setActiveServiceImage(prev => prev - 1 < 0 ? 9 : prev - 1)} className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110">
                <svg className="w-6 h-6 text-[#1A1A1A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button onClick={() => setActiveServiceImage(prev => (prev + 1) % 10)} className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110">
                <svg className="w-6 h-6 text-[#1A1A1A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
              {/* Image counter */}
              <div className="absolute top-6 right-6 px-4 py-2 bg-white/90 rounded-full text-[#1A1A1A] text-sm font-medium shadow-lg">
                {(activeServiceImage % 10) + 1} / 10
              </div>
            </div>
          </div>
          
          {/* Thumbnail row - proper aspect ratio */}
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-5 md:grid-cols-10 gap-3">
              {[
                '/Events Services_ Corporate Tatttoo_Tattoos Bars_Custom Tattoos for night club_Sport Events gear sponsorship/corporate tattoo KHY by Rebel Tattoos.jpg',
                '/Events Services_ Corporate Tatttoo_Tattoos Bars_Custom Tattoos for night club_Sport Events gear sponsorship/Brian and Wendy wedding Х Rebel Tattoos.jpg',
                '/Events Services_ Corporate Tatttoo_Tattoos Bars_Custom Tattoos for night club_Sport Events gear sponsorship/Haloween Tattoo Bar by Rebel Tattoos.jpeg',
                '/Events Services_ Corporate Tatttoo_Tattoos Bars_Custom Tattoos for night club_Sport Events gear sponsorship/Ibiza club event 2025 Х Rebel Tattoos.jpeg',
                '/Events Services_ Corporate Tatttoo_Tattoos Bars_Custom Tattoos for night club_Sport Events gear sponsorship/Pink Ribbon Event at LRC Hong Kong х COLORFIT.jpeg',
                '/Events Services_ Corporate Tatttoo_Tattoos Bars_Custom Tattoos for night club_Sport Events gear sponsorship/Haloween Tattoo Bar by Rebel Tattoos_2.jpeg',
                '/Events Services_ Corporate Tatttoo_Tattoos Bars_Custom Tattoos for night club_Sport Events gear sponsorship/Pink Ribbon Event at LRC Hong Kong х COLORFIT _2.jpeg',
                '/Events Services_ Corporate Tatttoo_Tattoos Bars_Custom Tattoos for night club_Sport Events gear sponsorship/Pink ribbon Event at LRC Hong Kong х COLORFIT.jpg',
                '/Events Services_ Corporate Tatttoo_Tattoos Bars_Custom Tattoos for night club_Sport Events gear sponsorship/Pink Ribbon Event at LRC Hong Kong х COLORFIT_3.jpeg',
                '/Events Services_ Corporate Tatttoo_Tattoos Bars_Custom Tattoos for night club_Sport Events gear sponsorship/Secret Tattoo Bar Х Rebel Tatttoos.jpg',
              ].map((img, i) => (
                <button key={i} onClick={() => setActiveServiceImage(i)} className={`relative aspect-square rounded-xl overflow-hidden transition-all duration-300 shadow-md ${activeServiceImage % 10 === i ? 'ring-4 ring-[#B5525D] scale-105 z-10 shadow-xl' : 'hover:scale-105 hover:shadow-lg'}`}>
                  <Image src={img} alt="" fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Event types tags */}
          <div className="max-w-7xl mx-auto px-6 mt-12">
            <div className="flex flex-wrap gap-4 justify-center">
              {['Corporate Events', 'Weddings', 'Nightclubs', 'Sports Sponsorship', 'Charity Events', 'Tattoo Bars'].map((tag) => (
                <span key={tag} className="px-6 py-3 bg-[#B5525D]/10 border border-[#B5525D]/30 rounded-full text-[#B5525D] text-sm font-medium hover:bg-[#B5525D]/20 transition-colors cursor-default">{tag}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Services 3-4: Side by Side Cards */}
        <div className="relative py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Product Customization */}
              <div className="group relative bg-white rounded-[2rem] p-8 overflow-hidden shadow-xl shadow-[#B5525D]/5 hover:shadow-2xl hover:shadow-[#B5525D]/15 transition-all duration-500 border border-[#E8D8D8]">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#B5525D]/5 rounded-full blur-3xl" />
                <span className="text-7xl font-extralight text-[#B5525D]/20">03</span>
                <h3 className="text-3xl font-light text-[#1A1A1A] mt-4 mb-4">
                  Product<br /><span className="text-[#B5525D] italic">Customization</span>
                </h3>
                <p className="text-[#3D3636] mb-6">
                  Tailor existing products to your specifications — custom colors, scents, formulations, and packaging.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="relative aspect-square rounded-xl overflow-hidden">
                    <Image src="/Product Customization/IMG_0989.png" alt="Product Customization" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="relative aspect-square rounded-xl overflow-hidden">
                    <Image src="/Product Customization/IMG_0994.png" alt="Product Customization" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                </div>
              </div>

              {/* Product Development */}
              <div className="group relative bg-white rounded-[2rem] p-8 overflow-hidden shadow-xl shadow-[#B5525D]/5 hover:shadow-2xl hover:shadow-[#B5525D]/15 transition-all duration-500 border border-[#E8D8D8]">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#E8B4B8]/10 rounded-full blur-3xl" />
                <span className="text-7xl font-extralight text-[#B5525D]/20">04</span>
                <h3 className="text-3xl font-light text-[#1A1A1A] mt-4 mb-4">
                  Product<br /><span className="text-[#B5525D] italic">Development</span>
                </h3>
                <p className="text-[#3D3636] mb-6">
                  From formulation to production — we create unique products tailored to your target market.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="relative aspect-square rounded-xl overflow-hidden">
                    <Image src="/Photo of brands/Coolboxbeauty/coolboxbeauty_1.jpg" alt="Development" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="relative aspect-square rounded-xl overflow-hidden">
                    <Image src="/Photo of brands/Coolboxbeauty/mask.jpg" alt="Development" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service 5: AI Content - Expandable Features */}
        <div className="relative py-24 bg-gradient-to-r from-[#B5525D]/5 via-white to-[#B5525D]/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-[#B5525D]/20 order-2 lg:order-1">
                <Image src="/AI service/photo for ai.png" alt="AI Content" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#B5525D]/20 to-transparent" />
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                <span className="text-8xl font-extralight text-[#B5525D]/20">05</span>
                <h3 className="text-4xl md:text-5xl font-light text-[#1A1A1A] leading-tight">
                  AI<br /><span className="text-[#B5525D] italic">Content</span>
                </h3>
                <p className="text-lg text-[#3D3636] leading-relaxed">
                  AI content generation offers significant benefits for businesses seeking high-quality visuals without high costs.
                </p>
                
                {/* Expandable AI Features */}
                <div className="space-y-3">
                  {[
                    { title: 'Cost Savings', desc: 'Traditional photoshoots can cost over $500, while AI-generated images are available for just $20. This allows companies to allocate resources more efficiently.' },
                    { title: 'Time Efficiency', desc: 'AI produces images in minutes, speeding up project timelines and enabling quicker campaign launches without sacrificing quality.' },
                    { title: 'Creative Flexibility', desc: 'With AI, you can easily experiment with various styles and themes, generating customized content that aligns with your brand\'s vision.' },
                    { title: 'Logistical Ease', desc: 'Bypassing the coordination needed for traditional photoshoots, AI eliminates logistical hassles, letting you focus on your core business.' },
                    { title: 'Consistency', desc: 'AI-generated images maintain high quality across the board, ensuring a cohesive brand identity.' },
                    { title: 'Sustainability', desc: 'Reducing the need for physical resources makes AI content generation a more eco-friendly option.' },
                  ].map((feature, i) => (
                    <div key={i} className="bg-white rounded-xl border border-[#E8D8D8] overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                      <button 
                        onClick={() => setExpandedAIFeature(expandedAIFeature === i ? null : i)}
                        className="w-full px-6 py-4 flex items-center justify-between text-left"
                      >
                        <span className="font-medium text-[#1A1A1A]">{feature.title}</span>
                        <svg className={`w-5 h-5 text-[#B5525D] transition-transform ${expandedAIFeature === i ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <div className={`px-6 overflow-hidden transition-all duration-300 ${expandedAIFeature === i ? 'pb-4 max-h-40' : 'max-h-0'}`}>
                        <p className="text-[#3D3636] text-sm">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services 6-8: Final Row */}
        <div className="relative py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Packaging Development */}
              <div className="group relative bg-white rounded-[2rem] overflow-hidden shadow-xl shadow-[#B5525D]/5 hover:shadow-2xl hover:shadow-[#B5525D]/15 transition-all duration-500 border border-[#E8D8D8]">
                <div className="relative aspect-[4/3]">
                  <Image src="/services/packaging.jpg" alt="Packaging" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                </div>
                <div className="p-6 -mt-12 relative z-10">
                  <span className="text-5xl font-extralight text-[#B5525D]/30">06</span>
                  <h3 className="text-2xl font-light text-[#1A1A1A] mt-2">
                    Packaging<br /><span className="text-[#B5525D] italic">Development</span>
                  </h3>
                  <p className="text-[#3D3636] mt-3 text-sm">
                    Full packaging solutions from concept to production-ready designs.
                  </p>
                </div>
              </div>

              {/* Product Sourcing */}
              <div className="group relative bg-white rounded-[2rem] overflow-hidden shadow-xl shadow-[#B5525D]/5 hover:shadow-2xl hover:shadow-[#B5525D]/15 transition-all duration-500 border border-[#E8D8D8]">
                <div className="relative aspect-[4/3]">
                  <Image src="/services/sourcing-1.jpg" alt="Sourcing" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                </div>
                <div className="p-6 -mt-12 relative z-10">
                  <span className="text-5xl font-extralight text-[#B5525D]/30">07</span>
                  <h3 className="text-2xl font-light text-[#1A1A1A] mt-2">
                    Product<br /><span className="text-[#B5525D] italic">Sourcing</span>
                  </h3>
                  <p className="text-[#3D3636] mt-3 text-sm">
                    Direct access to vetted manufacturers across China and Southeast Asia.
                  </p>
                </div>
              </div>

              {/* Quality Inspections */}
              <div className="group relative bg-white rounded-[2rem] overflow-hidden shadow-xl shadow-[#B5525D]/5 hover:shadow-2xl hover:shadow-[#B5525D]/15 transition-all duration-500 border border-[#E8D8D8]">
                <div className="relative aspect-[4/3]">
                  <Image src="/services/quality-1.jpg" alt="Quality" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                </div>
                <div className="p-6 -mt-12 relative z-10">
                  <span className="text-5xl font-extralight text-[#B5525D]/30">08</span>
                  <h3 className="text-2xl font-light text-[#1A1A1A] mt-2">
                    Quality<br /><span className="text-[#B5525D] italic">Inspections</span>
                  </h3>
                  <p className="text-[#3D3636] mt-3 text-sm">
                    In-line inspections and pre-shipment QC to ensure product standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="relative py-20 text-center bg-gradient-to-b from-transparent to-[#F5EBE8]">
          <div className="max-w-2xl mx-auto px-6">
            <p className="text-[#3D3636] text-lg mb-8">Ready to bring your vision to life?</p>
            <a href="#contact" className="inline-flex items-center gap-4 px-10 py-5 bg-[#B5525D] hover:bg-[#B35F6D] text-white rounded-full text-lg font-light transition-all hover:scale-105 shadow-xl shadow-[#B5525D]/30">
              Start Your Project
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Products - Spectacular Category Showcase */}
      <section id="products" className="relative py-32 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FDF8F5] via-white to-[#F5EBE8]" />
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#B5525D]/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#E8B4B8]/10 rounded-full blur-[120px]" />
        
        <div className="relative max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-20">
            <p className="text-[#B5525D] tracking-[0.5em] text-sm mb-6 uppercase">What We Source & Manufacture</p>
            <h2 className="text-5xl md:text-7xl font-extralight text-[#1A1A1A]">
              Product <span className="italic text-[#B5525D]">Categories</span>
            </h2>
            <p className="text-xl text-[#3D3636] max-w-2xl mx-auto mt-6">
              We source and manufacture products across these categories for retailers, 
              e-commerce brands, and distributors worldwide.
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#B5525D] to-transparent mx-auto mt-8" />
          </div>

          {/* Category Grid - Bento Style */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
            {/* Large Featured Category */}
            <div className="col-span-2 row-span-2 group relative rounded-[2rem] overflow-hidden bg-gradient-to-br from-[#B5525D] to-[#E8B4B8] p-1">
              <div className="h-full bg-white rounded-[1.8rem] p-8 flex flex-col justify-between min-h-[320px]">
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#B5525D] to-[#E8B4B8] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-light text-[#1A1A1A] mb-3">Skincare & <span className="text-[#B5525D] italic">Cosmetics</span></h3>
                  <p className="text-[#3D3636]">Premium skincare formulations, makeup products, and beauty essentials.</p>
                </div>
                <div className="flex items-center gap-2 text-[#B5525D] text-sm font-medium mt-4 group-hover:gap-4 transition-all">
                  <span>View Products</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </div>
              </div>
            </div>

            {/* Beauty Devices */}
            <div className="col-span-2 group relative rounded-[2rem] overflow-hidden bg-white border border-[#E8D8D8] hover:border-[#B5525D] p-6 transition-all hover:shadow-xl hover:shadow-[#B5525D]/10">
              <div className="w-12 h-12 rounded-xl bg-[#F5EBE8] flex items-center justify-center mb-4 group-hover:bg-[#B5525D] transition-colors">
                <svg className="w-6 h-6 text-[#B5525D] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-light text-[#1A1A1A] mb-2">Beauty <span className="text-[#B5525D] italic">Devices</span></h3>
              <p className="text-sm text-[#3D3636]">LED masks, facial massagers, hair tools & more</p>
            </div>

            {/* Cloth & Garment */}
            <div className="col-span-2 group relative rounded-[2rem] overflow-hidden bg-white border border-[#E8D8D8] hover:border-[#B5525D] p-6 transition-all hover:shadow-xl hover:shadow-[#B5525D]/10">
              <div className="w-12 h-12 rounded-xl bg-[#F5EBE8] flex items-center justify-center mb-4 group-hover:bg-[#B5525D] transition-colors">
                <svg className="w-6 h-6 text-[#B5525D] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4H6zM3 6h18M16 10a4 4 0 01-8 0" />
                </svg>
              </div>
              <h3 className="text-xl font-light text-[#1A1A1A] mb-2">Cloth & <span className="text-[#B5525D] italic">Garment</span></h3>
              <p className="text-sm text-[#3D3636]">Activewear, loungewear, accessories</p>
            </div>

            {/* Sport Items */}
            <div className="col-span-2 md:col-span-2 group relative rounded-[2rem] overflow-hidden bg-gradient-to-br from-[#1A1A1A] to-[#4A4040] p-6 text-white">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4 group-hover:bg-[#B5525D] transition-colors">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                </svg>
              </div>
              <h3 className="text-xl font-light mb-2">Sport <span className="text-[#B5525D] italic">Items</span></h3>
              <p className="text-sm text-white/70">Fitness equipment, yoga gear, sports accessories</p>
            </div>

            {/* Household Goods */}
            <div className="col-span-2 group relative rounded-[2rem] overflow-hidden bg-white border border-[#E8D8D8] hover:border-[#B5525D] p-6 transition-all hover:shadow-xl hover:shadow-[#B5525D]/10">
              <div className="w-12 h-12 rounded-xl bg-[#F5EBE8] flex items-center justify-center mb-4 group-hover:bg-[#B5525D] transition-colors">
                <svg className="w-6 h-6 text-[#B5525D] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-light text-[#1A1A1A] mb-2">Household <span className="text-[#B5525D] italic">Goods</span></h3>
              <p className="text-sm text-[#3D3636]">Home essentials, cleaning products, organizers</p>
            </div>

            {/* FMCG */}
            <div className="col-span-2 group relative rounded-[2rem] overflow-hidden bg-[#F5EBE8] p-6 hover:bg-[#B5525D]/10 transition-all">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-4 group-hover:bg-[#B5525D] transition-colors shadow-sm">
                <svg className="w-6 h-6 text-[#B5525D] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-light text-[#1A1A1A] mb-2">FMCG <span className="text-[#B5525D] italic">Categories</span></h3>
              <p className="text-sm text-[#3D3636]">Fast-moving consumer goods & everyday essentials</p>
            </div>

            {/* Others - Full Width CTA */}
            <div className="col-span-2 md:col-span-4 lg:col-span-2 group relative rounded-[2rem] overflow-hidden bg-gradient-to-r from-[#B5525D] to-[#E8B4B8] p-6 text-white cursor-pointer hover:shadow-2xl hover:shadow-[#B5525D]/30 transition-all">
              <div className="flex items-center justify-between h-full">
                <div>
                  <h3 className="text-xl font-light mb-1">Other Categories</h3>
                  <p className="text-sm text-white/80">Custom sourcing available</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Brands - Dynamic Visual Showcase */}
      <section id="brands" className="py-32 bg-[#1A1A1A] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-[#B5525D] tracking-[0.3em] text-base mb-4">OUR BRANDS & PRODUCTS</p>
            <h2 className="text-4xl md:text-6xl font-extralight leading-tight">
              Brands we&apos;ve <span className="italic text-[#B5525D]">created</span>
            </h2>
            <p className="text-[#B8A8A8] mt-6 max-w-2xl mx-auto text-lg">
              We don&apos;t just source — we build brands from the ground up. 
              Product design, manufacturing, packaging, and global distribution.
            </p>
          </div>

          {/* Brand Selector Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['Rebel Tattoos', 'COOLBOXBEAUTY', 'COLORFIT'].map((brand, index) => (
              <button
                key={brand}
                onClick={() => { setActiveBrand(index); setActiveBrandImage(0); }}
                className={`px-8 py-4 rounded-full text-lg font-light transition-all duration-300 ${
                  activeBrand === index 
                    ? 'bg-[#B5525D] text-white shadow-lg shadow-[#B5525D]/30' 
                    : 'border border-[#4A4040] text-[#B8A8A8] hover:border-[#B5525D] hover:text-white'
                }`}
              >
                {brand}
              </button>
            ))}
          </div>

          {/* Dynamic Brand Gallery */}
          {activeBrand === 0 && (
            <div className="grid lg:grid-cols-12 gap-8">
              {/* Main large image */}
              <div className="lg:col-span-7 relative h-[500px] rounded-3xl overflow-hidden group">
                <Image 
                  src={[
                    '/Photo of brands/Rebel Tatttoos/Rebel Tattoos _logo (2) (1).png',
                    '/Photo of brands/Rebel Tatttoos/eye liner star white bg.jpg',
                    '/Photo of brands/Rebel Tatttoos/pink eyeliner heart amazon 6.jpg',
                    '/Photo of brands/Rebel Tatttoos/violet eyeliner butterfly amazon 4 (1).jpg',
                    '/Photo of brands/Rebel Tatttoos/blue stars Amazon 1.2 (1).jpg',
                    '/Photo of brands/Rebel Tatttoos/Snow Amazon 56.jpg',
                    '/Photo of brands/Rebel Tatttoos/space Amazon 3 (1).jpg',
                    '/Photo of brands/Rebel Tatttoos/artistic Amazon 4 (1).jpg',
                  ][activeBrandImage]}
                  alt="Rebel Tattoos"
                  fill
                  className={activeBrandImage === 0 ? "object-contain bg-white p-8" : "object-cover"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              {/* Side info + thumbnails */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div className="space-y-6">
                  <h3 className="text-4xl font-light text-[#B5525D]">Rebel Tattoos</h3>
                  <p className="text-[#B8A8A8] text-lg leading-relaxed">
                    Premium temporary tattoos for fashion, events, and self-expression. 
                    Sold on Amazon and in retail stores across USA, Europe, and Asia.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {['Temporary Tattoos', 'Amazon Bestseller', 'Event Services'].map((tag, i) => (
                      <span key={i} className="px-4 py-2 border border-[#B5525D] rounded-full text-sm text-[#B5525D]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Thumbnail grid */}
                <div className="grid grid-cols-4 gap-3 mt-8">
                  {[
                    '/Photo of brands/Rebel Tatttoos/Rebel Tattoos _logo (2) (1).png',
                    '/Photo of brands/Rebel Tatttoos/eye liner star white bg.jpg',
                    '/Photo of brands/Rebel Tatttoos/pink eyeliner heart amazon 6.jpg',
                    '/Photo of brands/Rebel Tatttoos/violet eyeliner butterfly amazon 4 (1).jpg',
                    '/Photo of brands/Rebel Tatttoos/blue stars Amazon 1.2 (1).jpg',
                    '/Photo of brands/Rebel Tatttoos/Snow Amazon 56.jpg',
                    '/Photo of brands/Rebel Tatttoos/space Amazon 3 (1).jpg',
                    '/Photo of brands/Rebel Tatttoos/artistic Amazon 4 (1).jpg',
                  ].map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveBrandImage(i)}
                      className={`relative h-20 rounded-xl overflow-hidden transition-all ${
                        activeBrandImage === i ? 'ring-2 ring-[#B5525D] scale-105' : 'opacity-60 hover:opacity-100'
                      }`}
                    >
                      <Image src={img} alt="" fill className={i === 0 ? "object-contain bg-white p-2" : "object-cover"} />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeBrand === 1 && (
            <div className="grid lg:grid-cols-12 gap-8">
              <div className="lg:col-span-7 relative h-[500px] rounded-3xl overflow-hidden group">
                <Image 
                  src={[
                    '/Photo of brands/Coolboxbeauty/coolboxbeauty_1.jpg',
                    '/Photo of brands/Coolboxbeauty/mask.jpg',
                    '/Photo of brands/Coolboxbeauty/mask2.jpg',
                    '/Photo of brands/Coolboxbeauty/package.jpg',
                  ][activeBrandImage % 4]}
                  alt="COOLBOXBEAUTY"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div className="space-y-6">
                  <h3 className="text-4xl font-light text-[#B5525D]">COOLBOXBEAUTY</h3>
                  <p className="text-[#B8A8A8] text-lg leading-relaxed">
                    Beauty tools and accessories designed for the modern skincare routine. 
                    Ice rollers, gua sha, and innovative beauty devices.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {['Beauty Tools', 'Skincare Devices', 'Self-Care'].map((tag, i) => (
                      <span key={i} className="px-4 py-2 border border-[#B5525D] rounded-full text-sm text-[#B5525D]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-3 mt-8">
                  {[
                    '/Photo of brands/Coolboxbeauty/coolboxbeauty_1.jpg',
                    '/Photo of brands/Coolboxbeauty/mask.jpg',
                    '/Photo of brands/Coolboxbeauty/mask2.jpg',
                    '/Photo of brands/Coolboxbeauty/package.jpg',
                  ].map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveBrandImage(i)}
                      className={`relative h-20 rounded-xl overflow-hidden transition-all ${
                        activeBrandImage % 4 === i ? 'ring-2 ring-[#B5525D] scale-105' : 'opacity-60 hover:opacity-100'
                      }`}
                    >
                      <Image src={img} alt="" fill className="object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeBrand === 2 && (
            <div className="grid lg:grid-cols-12 gap-8">
              <div className="lg:col-span-7 relative h-[500px] rounded-3xl overflow-hidden group">
                <Image 
                  src={[
                    '/Photo of brands/Colorfit/colorfit.jpg',
                    '/Photo of brands/Colorfit/colorfit 1.jpeg',
                    '/Photo of brands/Colorfit/colorfit_2.jpeg',
                  ][activeBrandImage % 3]}
                  alt="COLORFIT"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div className="space-y-6">
                  <h3 className="text-4xl font-light text-[#B5525D]">COLORFIT</h3>
                  <p className="text-[#B8A8A8] text-lg leading-relaxed">
                    Activewear and fitness apparel that combines style with performance. 
                    Featured at Pink Ribbon charity events in Hong Kong.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {['Activewear', 'Fitness Apparel', 'Event Sponsor'].map((tag, i) => (
                      <span key={i} className="px-4 py-2 border border-[#B5525D] rounded-full text-sm text-[#B5525D]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3 mt-8">
                  {[
                    '/Photo of brands/Colorfit/colorfit.jpg',
                    '/Photo of brands/Colorfit/colorfit 1.jpeg',
                    '/Photo of brands/Colorfit/colorfit_2.jpeg',
                  ].map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveBrandImage(i)}
                      className={`relative h-20 rounded-xl overflow-hidden transition-all ${
                        activeBrandImage % 3 === i ? 'ring-2 ring-[#B5525D] scale-105' : 'opacity-60 hover:opacity-100'
                      }`}
                    >
                      <Image src={img} alt="" fill className="object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Partners - With Logos */}
      <section id="partners" className="py-24 bg-[#F5EBE8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#B5525D] tracking-[0.3em] text-base mb-4">CARRIERS & COOPERATION</p>
            <h2 className="text-3xl md:text-4xl font-extralight">
              We work with <span className="italic text-[#B5525D]">industry leaders</span>
            </h2>
            <p className="text-[#3D3636] mt-4 max-w-xl mx-auto">
              No matter what qualifications you have, as long as you have the desire and drive to succeed, we would like to welcome you to our team.
            </p>
          </div>
          
          {/* Partner logos - Elegant marquee */}
          <div className="relative overflow-hidden">
            {/* Gradient masks */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#F5EBE8] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#F5EBE8] to-transparent z-10" />
            
            <div className="flex animate-marquee">
              {[...Array(2)].map((_, setIndex) => (
                <div key={setIndex} className="flex items-center gap-16 px-8">
                  {[
                    { name: 'Amazon', logo: '/images/amazon.png' },
                    { name: 'TEMU', logo: '/images/temu.png' },
                    { name: 'Lazada', logo: '/images/lazada.png' },
                    { name: 'Decathlon', logo: '/images/decathlon.png' },
                    { name: 'Bookazine', logo: '/images/bookazine.png' },
                    { name: 'Faberlic', logo: '/images/faberlic.png' },
                    { name: 'KHY', logo: '/images/khy.png' },
                    { name: 'Louder', logo: '/louder-logo.jpg' },
                    { name: 'Sephora', logo: '/partners/sephora.svg' },
                    { name: 'Swire', logo: '/swire-vector-logo.png' },
                  ].map((partner, index) => (
                    <div 
                      key={`${setIndex}-${index}`}
                      className="relative w-32 h-16 flex-shrink-0 hover:scale-110 transition-transform duration-300"
                    >
                      <Image 
                        src={partner.logo}
                        alt={partner.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Global Reach - Spectacular World Map Design */}
      <section className="relative py-32 overflow-hidden">
        {/* Dynamic background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] via-[#3D3636] to-[#1A1A1A]" />
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #B5525D 1px, transparent 0)', backgroundSize: '60px 60px' }} />
        
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-1/4 w-[400px] h-[400px] bg-[#B5525D] rounded-full blur-[150px] opacity-20 animate-pulse" />
        <div className="absolute bottom-20 right-1/4 w-[300px] h-[300px] bg-[#E8B4B8] rounded-full blur-[120px] opacity-15 animate-pulse animation-delay-1000" />
        
        {/* Decorative circles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full" />
        
        <div className="relative max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-20">
            <p className="text-[#B5525D] tracking-[0.5em] text-sm mb-6 uppercase">Where We Operate</p>
            <h2 className="text-5xl md:text-7xl font-extralight text-white leading-tight">
              Global <span className="italic text-[#B5525D]">Presence</span>
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto mt-6">
              From our headquarters in Hong Kong, we serve clients across 7 countries with manufacturing hubs and distribution networks worldwide.
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#B5525D] to-transparent mx-auto mt-8" />
          </div>

          {/* Main Stats Row */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto mb-16">
            {[
              { number: '7+', label: 'Countries' },
              { number: '3', label: 'Continents' },
              { number: '24/7', label: 'Operations' },
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="text-4xl md:text-6xl font-extralight text-[#B5525D] group-hover:scale-110 transition-transform">{stat.number}</div>
                <p className="text-white/60 text-sm mt-2 tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Country Cards - Bento Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {/* Hong Kong - HQ - Featured */}
            <div className="col-span-2 md:col-span-2 lg:col-span-2 group relative rounded-[2rem] overflow-hidden bg-gradient-to-br from-[#B5525D] to-[#E8B4B8] p-1">
              <div className="h-full bg-[#1A1A1A] rounded-[1.8rem] p-6 flex flex-col justify-between min-h-[200px]">
                <div className="flex items-start justify-between">
                  <div className="relative w-16 h-12 rounded-lg overflow-hidden shadow-lg">
                    <Image src="/flags/hk.png" alt="Hong Kong" fill className="object-cover" />
                  </div>
                  <span className="px-3 py-1 bg-[#B5525D] rounded-full text-xs text-white font-medium">HQ</span>
                </div>
                <div>
                  <h3 className="text-2xl font-light text-white mb-1">Hong Kong</h3>
                  <p className="text-[#B5525D] text-sm">Headquarters & Operations</p>
                </div>
              </div>
            </div>

            {/* China - Manufacturing */}
            <div className="col-span-1 group relative rounded-[1.5rem] overflow-hidden bg-white/5 hover:bg-white/10 backdrop-blur-sm p-5 transition-all hover:scale-105 border border-white/10 hover:border-[#B5525D]/50">
              <div className="relative w-12 h-9 rounded-lg overflow-hidden mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <Image src="/flags/cn.png" alt="China" fill className="object-cover" />
              </div>
              <h3 className="text-lg font-light text-white mb-1">China</h3>
              <p className="text-[#B5525D] text-xs">Manufacturing</p>
            </div>

            {/* Vietnam - Manufacturing */}
            <div className="col-span-1 group relative rounded-[1.5rem] overflow-hidden bg-white/5 hover:bg-white/10 backdrop-blur-sm p-5 transition-all hover:scale-105 border border-white/10 hover:border-[#B5525D]/50">
              <div className="relative w-12 h-9 rounded-lg overflow-hidden mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <Image src="/flags/vn.png" alt="Vietnam" fill className="object-cover" />
              </div>
              <h3 className="text-lg font-light text-white mb-1">Vietnam</h3>
              <p className="text-[#B5525D] text-xs">Manufacturing</p>
            </div>

            {/* USA */}
            <div className="col-span-1 group relative rounded-[1.5rem] overflow-hidden bg-white/5 hover:bg-white/10 backdrop-blur-sm p-5 transition-all hover:scale-105 border border-white/10 hover:border-[#B5525D]/50">
              <div className="relative w-12 h-9 rounded-lg overflow-hidden mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <Image src="/flags/us.png" alt="USA" fill className="object-cover" />
              </div>
              <h3 className="text-lg font-light text-white mb-1">USA</h3>
              <p className="text-[#B5525D] text-xs">Distribution</p>
            </div>

            {/* Australia */}
            <div className="col-span-1 group relative rounded-[1.5rem] overflow-hidden bg-white/5 hover:bg-white/10 backdrop-blur-sm p-5 transition-all hover:scale-105 border border-white/10 hover:border-[#B5525D]/50">
              <div className="relative w-12 h-9 rounded-lg overflow-hidden mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <Image src="/flags/au.png" alt="Australia" fill className="object-cover" />
              </div>
              <h3 className="text-lg font-light text-white mb-1">Australia</h3>
              <p className="text-[#B5525D] text-xs">Distribution</p>
            </div>

            {/* Russia */}
            <div className="col-span-1 group relative rounded-[1.5rem] overflow-hidden bg-white/5 hover:bg-white/10 backdrop-blur-sm p-5 transition-all hover:scale-105 border border-white/10 hover:border-[#B5525D]/50">
              <div className="relative w-12 h-9 rounded-lg overflow-hidden mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <Image src="/flags/ru.png" alt="Russia" fill className="object-cover" />
              </div>
              <h3 className="text-lg font-light text-white mb-1">Russia</h3>
              <p className="text-[#B5525D] text-xs">Distribution</p>
            </div>

            {/* Korea */}
            <div className="col-span-2 md:col-span-1 group relative rounded-[1.5rem] overflow-hidden bg-white/5 hover:bg-white/10 backdrop-blur-sm p-5 transition-all hover:scale-105 border border-white/10 hover:border-[#B5525D]/50">
              <div className="relative w-12 h-9 rounded-lg overflow-hidden mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <Image src="/flags/kr.png" alt="Korea" fill className="object-cover" />
              </div>
              <h3 className="text-lg font-light text-white mb-1">Korea</h3>
              <p className="text-[#B5525D] text-xs">Distribution</p>
            </div>
          </div>

          {/* Bottom tagline */}
          <div className="text-center mt-16">
            <p className="text-white/40 text-lg font-light italic">
              "One Partner — <span className="text-[#B5525D]">Multiple Pathways</span>"
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials - Elegant editorial design */}
      <section className="py-32 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#F0DEDE] rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#EDD8CC] rounded-full blur-3xl opacity-50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-[#E8D8D8] rounded-full opacity-30" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-20">
            <div>
              <p className="text-[#B5525D] tracking-[0.3em] text-base mb-4">TESTIMONIALS</p>
              <h2 className="text-4xl md:text-6xl font-extralight leading-tight">
                Voices of<br />
                <span className="italic text-[#B5525D]">partnership</span>
              </h2>
            </div>
            <p className="text-[#3D3636] max-w-md mt-6 lg:mt-0 text-lg">
              From startups to global retailers, our partners share their experiences working with us.
            </p>
          </div>

          {/* Featured Testimonial - Large */}
          <div className="mb-16">
            <div className="relative bg-[#1A1A1A] text-white rounded-[3rem] p-12 md:p-16 overflow-hidden">
              {/* Decorative quote mark */}
              <div className="absolute -top-10 -left-10 text-[300px] font-serif text-[#B5525D] opacity-10 leading-none select-none">
                &ldquo;
              </div>
              <div className="relative z-10 grid lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2">
                  <blockquote className="text-2xl md:text-3xl font-extralight leading-relaxed mb-10">
                    They took our initial idea and delivered a complete product line — 
                    formulation, packaging, manufacturing, and logistics. 
                    A true end-to-end partner that made our vision a reality.
                  </blockquote>
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#B5525D] to-[#E8B4B8] flex items-center justify-center text-white text-xl font-light">
                      DL
                    </div>
                    <div>
                      <p className="text-xl font-light">David Liu</p>
                      <p className="text-[#B8A8A8]">Founder, Australian Skincare Brand</p>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:flex items-center justify-center">
                  <div className="w-32 h-32 border border-[#B5525D]/30 rounded-full flex items-center justify-center">
                    <div className="w-24 h-24 border border-[#B5525D]/50 rounded-full flex items-center justify-center">
                      <span className="text-4xl">★★★★★</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Cards - Staggered layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="lg:col-span-2 group">
              <div className="h-full border border-[#E8D8D8] hover:border-[#B5525D] rounded-3xl p-8 transition-all duration-500 hover:shadow-xl hover:shadow-[#B5525D]/5 bg-white/50 backdrop-blur-sm">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#B5525D]">★</span>
                  ))}
                </div>
                <blockquote className="text-lg font-light leading-relaxed text-[#2D2626] mb-8">
                  Their quality control is exceptional. Every shipment arrives exactly 
                  as specified, and their communication throughout the process 
                  is incredibly responsive.
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#F0DEDE] flex items-center justify-center text-[#B5525D] font-medium group-hover:bg-[#B5525D] group-hover:text-white transition-colors">
                    SK
                  </div>
                  <div>
                    <p className="font-medium text-[#1A1A1A]">Sarah Kim</p>
                    <p className="text-sm text-[#3D3636]">Procurement Manager, Korean Beauty Retailer</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group">
              <div className="h-full border border-[#E8D8D8] hover:border-[#B5525D] rounded-3xl p-8 transition-all duration-500 hover:shadow-xl hover:shadow-[#B5525D]/5 bg-white/50 backdrop-blur-sm">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#B5525D]">★</span>
                  ))}
                </div>
                <blockquote className="text-base font-light leading-relaxed text-[#2D2626] mb-6">
                  From concept to shelf in under 6 months — they made the impossible possible.
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#F0DEDE] flex items-center justify-center text-[#B5525D] text-sm font-medium group-hover:bg-[#B5525D] group-hover:text-white transition-colors">
                    MR
                  </div>
                  <div>
                    <p className="font-medium text-[#1A1A1A] text-sm">Michael Reynolds</p>
                    <p className="text-xs text-[#3D3636]">CEO, US E-commerce Brand</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group">
              <div className="h-full border border-[#E8D8D8] hover:border-[#B5525D] rounded-3xl p-8 transition-all duration-500 hover:shadow-xl hover:shadow-[#B5525D]/5 bg-white/50 backdrop-blur-sm">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#B5525D]">★</span>
                  ))}
                </div>
                <blockquote className="text-base font-light leading-relaxed text-[#2D2626] mb-6">
                  The event tattoo service was a hit at our corporate gala. Absolutely loved it.
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#F0DEDE] flex items-center justify-center text-[#B5525D] text-sm font-medium group-hover:bg-[#B5525D] group-hover:text-white transition-colors">
                    JW
                  </div>
                  <div>
                    <p className="font-medium text-[#1A1A1A] text-sm">Jennifer Wong</p>
                    <p className="text-xs text-[#3D3636]">Events Director, Hong Kong</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4 - Full width bottom */}
            <div className="md:col-span-2 lg:col-span-4 group">
              <div className="border border-[#E8D8D8] hover:border-[#B5525D] rounded-3xl p-8 md:p-12 transition-all duration-500 hover:shadow-xl hover:shadow-[#B5525D]/5 bg-gradient-to-r from-[#FDF8F6] to-white">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-[#B5525D] text-xl">★</span>
                      ))}
                    </div>
                    <blockquote className="text-xl md:text-2xl font-light leading-relaxed text-[#2D2626]">
                      Finding reliable suppliers in Asia was our biggest challenge 
                      until we partnered with Beauty Solutions. They&apos;ve streamlined 
                      our entire supply chain.
                    </blockquote>
                  </div>
                  <div className="flex items-center gap-4 md:justify-end">
                    <div>
                      <p className="font-medium text-[#1A1A1A] text-lg md:text-right">Anna Novak</p>
                      <p className="text-sm text-[#3D3636] md:text-right">Supply Chain Director, European Retailer</p>
                    </div>
                    <div className="w-14 h-14 rounded-full bg-[#F0DEDE] flex items-center justify-center text-[#B5525D] font-medium group-hover:bg-[#B5525D] group-hover:text-white transition-colors">
                      AN
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact - Clean form */}
      <section id="contact" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Left - Info */}
            <div className="space-y-12">
              <div>
                <p className="text-[#B5525D] tracking-[0.3em] text-base mb-4">GET IN TOUCH</p>
                <h2 className="text-4xl md:text-6xl font-extralight leading-tight">
                  Let&apos;s create
                  <br />
                  something
                  <br />
                  <span className="italic text-[#B5525D]">beautiful</span>
                </h2>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full border border-[#E8D8D8] flex items-center justify-center group-hover:border-[#B5525D] group-hover:bg-[#B5525D]/10 transition-all">
                    <svg className="w-5 h-5 text-[#B5525D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-[#3D3636]">Email</p>
                    <p className="font-light">info@hkbeautysolutions.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full border border-[#E8D8D8] flex items-center justify-center group-hover:border-[#B5525D] group-hover:bg-[#B5525D]/10 transition-all">
                    <svg className="w-5 h-5 text-[#B5525D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-[#3D3636]">WhatsApp</p>
                    <p className="font-light">+852 6367 1752</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full border border-[#E8D8D8] flex items-center justify-center group-hover:border-[#B5525D] group-hover:bg-[#B5525D]/10 transition-all">
                    <svg className="w-5 h-5 text-[#B5525D]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 01.213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 00.167-.054l1.903-1.114a.864.864 0 01.717-.098 10.16 10.16 0 002.837.403c4.801 0 8.692-3.287 8.692-7.342 0-4.054-3.89-7.341-8.692-7.341z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-[#3D3636]">WeChat</p>
                    <p className="font-light">ovorotnik</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div className="bg-[#F5EBE8] p-8 md:p-12 rounded-[2rem]">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-[#3D3636] mb-2">Name</label>
                    <input 
                      type="text" 
                      className="w-full px-0 py-3 bg-transparent border-b border-[#E8D8D8] focus:border-[#B5525D] outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-[#3D3636] mb-2">Company</label>
                    <input 
                      type="text" 
                      className="w-full px-0 py-3 bg-transparent border-b border-[#E8D8D8] focus:border-[#B5525D] outline-none transition-colors"
                      placeholder="Company name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-[#3D3636] mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-0 py-3 bg-transparent border-b border-[#E8D8D8] focus:border-[#B5525D] outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm text-[#3D3636] mb-2">Interest</label>
                  <select className="w-full px-0 py-3 bg-transparent border-b border-[#E8D8D8] focus:border-[#B5525D] outline-none transition-colors cursor-pointer">
                    <option value="">Select a service</option>
                    <option value="brand">Private Brand Development</option>
                    <option value="product">Product Development</option>
                    <option value="sourcing">Product Sourcing</option>
                    <option value="packaging">Packaging Design</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-[#3D3636] mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-0 py-3 bg-transparent border-b border-[#E8D8D8] focus:border-[#B5525D] outline-none transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full py-4 bg-[#1A1A1A] text-white tracking-widest text-sm hover:bg-[#B5525D] transition-colors duration-300 rounded-full mt-8"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Minimal */}
      <footer className="py-12 border-t border-[#E8D8D8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Footer Text Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="flex flex-col items-center leading-none">
                <span className="text-xl font-extralight tracking-tight text-[#1A1A1A] group-hover:text-[#B5525D] transition-colors">
                  Beauty
                </span>
                <span className="text-lg font-light italic text-[#B5525D] -mt-1">
                  Solutions
                </span>
              </div>
              <div className="flex flex-col items-start border-l-2 border-[#B5525D]/30 pl-3">
                <span className="text-[9px] tracking-[0.25em] text-[#3D3636] uppercase">Hong Kong</span>
                <span className="text-[8px] tracking-[0.2em] text-[#B5525D]">LIMITED</span>
              </div>
            </a>

            <div className="flex items-center gap-6">
              <a href="https://www.linkedin.com/company/104444059/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-[#E8D8D8] flex items-center justify-center hover:border-[#B5525D] hover:bg-[#B5525D]/10 transition-all">
                <svg className="w-4 h-4 text-[#3D3636]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://wa.me/85263671752" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-[#E8D8D8] flex items-center justify-center hover:border-[#B5525D] hover:bg-[#B5525D]/10 transition-all">
                <svg className="w-4 h-4 text-[#3D3636]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>

            <p className="text-sm text-[#3D3636]">
              © 2026 Beauty Solutions (HK) Limited
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
