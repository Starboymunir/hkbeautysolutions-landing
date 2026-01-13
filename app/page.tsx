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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

  const services = [
    { 
      title: 'Private Label & Brand Creation', 
      description: 'Build your own brand — we handle naming, identity, and full market positioning',
      image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80'
    },
    { 
      title: 'Product Development', 
      description: 'Custom formulations and product design tailored to your market needs',
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80'
    },
    { 
      title: 'Packaging & Design', 
      description: 'Full packaging solutions from concept sketches to production-ready files',
      image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80'
    },
    { 
      title: 'Factory Sourcing', 
      description: 'Direct access to vetted manufacturers in China and Southeast Asia',
      image: 'https://images.unsplash.com/photo-1591375372226-3e4fbec43a86?w=800&q=80'
    },
    { 
      title: 'Quality Inspections', 
      description: 'In-line inspections and pre-shipment QC to ensure product standards',
      image: 'https://images.unsplash.com/photo-1576426863848-c21f53c60b19?w=800&q=80'
    },
  ];

  return (
    <main className="bg-[#FDF8F5] text-[#2D2626] overflow-x-hidden">
      {/* Cursor follower */}
      <div 
        className="fixed w-4 h-4 bg-[#C4707E] rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-100 hidden lg:block"
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
          <a href="#" className="text-2xl font-light tracking-[0.3em] text-[#2D2626]">
            BEAUTY<span className="text-[#C4707E]">.</span>
          </a>
          
          <div className="hidden md:flex items-center gap-12">
            {['About', 'Services', 'Products', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-sm tracking-widest hover:text-[#C4707E] transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#C4707E] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          <a 
            href="#contact" 
            className="hidden md:block px-6 py-3 border border-[#2D2626] text-sm tracking-widest hover:bg-[#2D2626] hover:text-white transition-all duration-300"
          >
            Let&apos;s Talk
          </a>
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
              <p className="text-[#C4707E] tracking-[0.3em] text-base animate-slideUp">
                BEAUTY SOLUTIONS HK
              </p>
            </div>
            
            <div className="overflow-hidden">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight leading-[0.9] animate-slideUp animation-delay-200">
                Where
                <br />
                <span className="italic text-[#C4707E]">ideas</span>
                <br />
                meet
                <br />
                <span className="font-medium">excellence</span>
              </h1>
            </div>
            
            <div className="overflow-hidden">
              <p className="text-xl text-[#4A4040] max-w-md animate-slideUp animation-delay-400 leading-relaxed">
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
                <span className="w-16 h-16 rounded-full border-2 border-[#C4707E] flex items-center justify-center group-hover:bg-[#C4707E] transition-all duration-300">
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
            <div className="absolute top-0 right-0 w-72 h-96 rounded-[2rem] overflow-hidden shadow-2xl animate-float">
              <Image
                src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80"
                alt="Beauty products"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-64 h-80 rounded-[2rem] overflow-hidden shadow-xl animate-float animation-delay-1000">
              <Image
                src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&q=80"
                alt="Cosmetics"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#ECC8D0] rounded-full flex items-center justify-center animate-pulse-slow">
              <span className="text-4xl font-light text-[#C4707E]">✦</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-[#C4707E] to-transparent animate-pulse" />
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
                <div className="text-4xl md:text-5xl font-extralight text-[#C4707E] group-hover:scale-110 transition-transform duration-300">
                  <Counter end={stat.number} suffix={stat.suffix} />
                </div>
                <p className="text-base tracking-wider text-[#5D5050] mt-2">{stat.label}</p>
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
              <p className="text-[#C4707E] tracking-[0.3em] text-base">WHO WE ARE</p>
              <h2 className="text-4xl md:text-5xl font-extralight leading-tight">
                One Partner,
                <br />
                <span className="italic text-[#C4707E]">Multiple</span>
                <br />
                Pathways
              </h2>
            </div>

            {/* Right column - spanning 7 cols */}
            <div className="lg:col-span-7 space-y-8">
              <p className="text-xl text-[#4A4040] leading-relaxed">
                We are a Hong Kong-based sourcing and brand development company 
                specializing in beauty, cosmetics, and FMCG products. We connect 
                global retailers with trusted manufacturers across Asia.
              </p>
              <p className="text-[#5D5050] leading-relaxed text-lg">
                Whether you need private label products, custom formulations, 
                packaging design, or full brand creation — we handle everything 
                from factory sourcing to quality control and logistics. Your vision, 
                our expertise.
              </p>
              
              {/* Signature element */}
              <div className="flex items-center gap-6 pt-8">
                <div className="w-20 h-px bg-[#C4707E]" />
                <p className="text-sm tracking-widest text-[#5D5050]">
                  Based in Hong Kong, serving globally
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services - Interactive showcase */}
      <section id="services" className="py-32 bg-[#F5EBE8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-[#C4707E] tracking-[0.3em] text-base mb-4">WHAT WE DO</p>
            <h2 className="text-4xl md:text-6xl font-extralight">
              Our <span className="italic text-[#C4707E]">expertise</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left - Service list */}
            <div className="space-y-0">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`group cursor-pointer border-b border-[#E8D8D8] py-8 transition-all duration-500 ${
                    activeService === index ? 'bg-white -mx-8 px-8' : ''
                  }`}
                  onMouseEnter={() => setActiveService(index)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <span className={`text-5xl font-extralight transition-colors duration-300 ${
                        activeService === index ? 'text-[#C4707E]' : 'text-[#E8D8D8]'
                      }`}>
                        0{index + 1}
                      </span>
                      <div>
                        <h3 className={`text-xl md:text-2xl font-light transition-colors duration-300 ${
                          activeService === index ? 'text-[#C4707E]' : ''
                        }`}>
                          {service.title}
                        </h3>
                        <p className={`text-base text-[#5D5050] mt-2 transition-all duration-300 ${
                          activeService === index ? 'opacity-100' : 'opacity-0'
                        }`}>
                          {service.description}
                        </p>
                      </div>
                    </div>
                    <svg 
                      className={`w-6 h-6 transition-all duration-300 ${
                        activeService === index ? 'rotate-45 text-[#C4707E]' : 'text-[#8B7B7B]'
                      }`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>

            {/* Right - Active service image */}
            <div className="sticky top-32 hidden lg:block">
              <div className="relative h-[500px] rounded-[2rem] overflow-hidden">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-700 ${
                      activeService === index ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#C4707E]/30 to-transparent" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products - Horizontal scroll showcase */}
      <section id="products" className="py-32">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <p className="text-[#C4707E] tracking-[0.3em] text-base mb-4">CATEGORIES</p>
              <h2 className="text-4xl md:text-6xl font-extralight">
                Product <span className="italic text-[#C4707E]">range</span>
              </h2>
            </div>
            <p className="text-[#5D5050] max-w-md">
              We source and manufacture products across these categories for retailers, 
              e-commerce brands, and distributors worldwide.
            </p>
          </div>
        </div>

        {/* Horizontal scrolling products */}
        <div className="overflow-x-auto hide-scrollbar">
          <div className="flex gap-6 px-6 pb-8" style={{ width: 'max-content' }}>
            {[
              { name: 'Skincare & Cosmetics', image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=500&q=80' },
              { name: 'Beauty Devices', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&q=80' },
              { name: 'Cloth & Garment', image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=500&q=80' },
              { name: 'Sport Items', image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500&q=80' },
              { name: 'Household Goods', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=500&q=80' },
              { name: 'FMCG', image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?w=500&q=80' },
            ].map((product, index) => (
              <div 
                key={index} 
                className="group relative w-72 h-96 flex-shrink-0 rounded-[1.5rem] overflow-hidden cursor-pointer"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D2626]/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-light">{product.name}</h3>
                  <div className="w-0 h-px bg-white group-hover:w-full transition-all duration-500 mt-2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Brands - Powerful Visual Showcase */}
      <section className="py-32 bg-[#2D2626] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-20">
            <p className="text-[#C4707E] tracking-[0.3em] text-base mb-4">OUR BRANDS</p>
            <h2 className="text-4xl md:text-6xl font-extralight leading-tight">
              Brands we&apos;ve <span className="italic text-[#C4707E]">created</span>
            </h2>
            <p className="text-[#B8A8A8] mt-6 max-w-2xl mx-auto text-lg">
              We don&apos;t just source — we build brands from the ground up. 
              Product design, manufacturing, packaging, and global distribution.
            </p>
          </div>

          {/* Brand 1: Rebel Tattoos - Hero Feature */}
          <div className="mb-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="w-48 h-20 relative">
                  <Image 
                    src="/images/brands/rebel-tattoos/logo.png"
                    alt="Rebel Tattoos Logo"
                    fill
                    className="object-contain object-left"
                  />
                </div>
                <h3 className="text-3xl md:text-4xl font-light">Rebel Tattoos</h3>
                <p className="text-[#B8A8A8] text-lg leading-relaxed">
                  Premium temporary tattoos for fashion, events, and self-expression. 
                  Sold on Amazon and in retail stores across USA, Europe, and Asia.
                </p>
                <div className="flex flex-wrap gap-3">
                  {['Temporary Tattoos', 'Amazon Bestseller', 'Event Services'].map((tag, i) => (
                    <span key={i} className="px-4 py-2 border border-[#4A4040] rounded-full text-sm text-[#C4707E]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-64 rounded-2xl overflow-hidden">
                  <Image 
                    src="/images/brands/rebel-tattoos/pink-eyeliner.jpg"
                    alt="Rebel Tattoos Product"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden">
                  <Image 
                    src="/images/brands/rebel-tattoos/violet-butterfly.jpg"
                    alt="Rebel Tattoos Product"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden">
                  <Image 
                    src="/images/brands/rebel-tattoos/blue-stars-1.jpg"
                    alt="Rebel Tattoos Product"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden">
                  <Image 
                    src="/images/brands/rebel-tattoos/snow.jpg"
                    alt="Rebel Tattoos Product"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#4A4040] to-transparent mb-24" />

          {/* Brand 2 & 3: Side by side */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* COOLBOXBEAUTY */}
            <div className="group">
              <div className="relative h-80 rounded-2xl overflow-hidden mb-6">
                <Image 
                  src="/images/brands/Coolboxbeauty/coolboxbeauty_1.jpg"
                  alt="CoolBoxBeauty Products"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D2626] via-transparent to-transparent" />
              </div>
              <h3 className="text-2xl md:text-3xl font-light mb-3">COOLBOXBEAUTY</h3>
              <p className="text-[#B8A8A8] mb-4 text-lg">
                Beauty tools and accessories designed for the modern skincare routine. 
                Ice rollers, gua sha, and innovative beauty devices.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Beauty Tools', 'Skincare Devices', 'Self-Care'].map((tag, i) => (
                  <span key={i} className="px-3 py-1 border border-[#4A4040] rounded-full text-xs text-[#C4707E]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* COLORFIT */}
            <div className="group">
              <div className="relative h-80 rounded-2xl overflow-hidden mb-6">
                <Image 
                  src="/images/brands/Colorfit/colorfit-1.jpeg"
                  alt="ColorFit Products"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D2626] via-transparent to-transparent" />
              </div>
              <h3 className="text-2xl md:text-3xl font-light mb-3">COLORFIT</h3>
              <p className="text-[#B8A8A8] mb-4 text-lg">
                Activewear and fitness apparel that combines style with performance. 
                Featured at Pink Ribbon charity events in Hong Kong.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Activewear', 'Fitness Apparel', 'Event Sponsor'].map((tag, i) => (
                  <span key={i} className="px-3 py-1 border border-[#4A4040] rounded-full text-xs text-[#C4707E]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners - With Logos */}
      <section className="py-24 bg-[#F5EBE8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#C4707E] tracking-[0.3em] text-base mb-4">TRUSTED PARTNERS</p>
            <h2 className="text-3xl md:text-4xl font-extralight">
              We work with <span className="italic text-[#C4707E]">industry leaders</span>
            </h2>
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
                    { name: 'Louder', logo: '/images/louder.png' },
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

          {/* Additional partners as elegant text */}
          <div className="mt-16 flex flex-wrap justify-center items-center gap-6">
            <span className="text-sm text-[#4A4040] tracking-wider">ALSO TRUSTED BY</span>
            <span className="w-12 h-px bg-[#C4707E]/40" />
            {['Sephora', 'Swire'].map((partner, index) => (
              <span 
                key={index}
                className="text-lg font-light text-[#4A4040] hover:text-[#C4707E] transition-colors cursor-default"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-[#C4707E] tracking-[0.3em] text-base mb-4">GLOBAL PRESENCE</p>
            <h2 className="text-4xl md:text-6xl font-extralight">
              We operate <span className="italic text-[#C4707E]">worldwide</span>
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {[
              { country: 'Hong Kong', flag: '🇭🇰', role: 'HQ' },
              { country: 'China', flag: '🇨🇳', role: 'Manufacturing' },
              { country: 'USA', flag: '🇺🇸', role: 'Distribution' },
              { country: 'Australia', flag: '🇦🇺', role: 'Distribution' },
              { country: 'Russia', flag: '🇷🇺', role: 'Distribution' },
              { country: 'Korea', flag: '🇰🇷', role: 'Distribution' },
              { country: 'Vietnam', flag: '🇻🇳', role: 'Manufacturing' },
            ].map((location, index) => (
              <div 
                key={index}
                className="group relative px-8 py-6 border border-[#E8D8D8] hover:border-[#C4707E] hover:bg-[#FDF8F6] transition-all duration-300 rounded-full cursor-default"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{location.flag}</span>
                  <div>
                    <p className="font-light">{location.country}</p>
                    <p className="text-sm text-[#5D5050]">{location.role}</p>
                  </div>
                </div>
              </div>
            ))}
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
              <p className="text-[#C4707E] tracking-[0.3em] text-base mb-4">TESTIMONIALS</p>
              <h2 className="text-4xl md:text-6xl font-extralight leading-tight">
                Voices of<br />
                <span className="italic text-[#C4707E]">partnership</span>
              </h2>
            </div>
            <p className="text-[#5D5050] max-w-md mt-6 lg:mt-0 text-lg">
              From startups to global retailers, our partners share their experiences working with us.
            </p>
          </div>

          {/* Featured Testimonial - Large */}
          <div className="mb-16">
            <div className="relative bg-[#2D2626] text-white rounded-[3rem] p-12 md:p-16 overflow-hidden">
              {/* Decorative quote mark */}
              <div className="absolute -top-10 -left-10 text-[300px] font-serif text-[#C4707E] opacity-10 leading-none select-none">
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
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#C4707E] to-[#E8B4B8] flex items-center justify-center text-white text-xl font-light">
                      DL
                    </div>
                    <div>
                      <p className="text-xl font-light">David Liu</p>
                      <p className="text-[#B8A8A8]">Founder, Australian Skincare Brand</p>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:flex items-center justify-center">
                  <div className="w-32 h-32 border border-[#C4707E]/30 rounded-full flex items-center justify-center">
                    <div className="w-24 h-24 border border-[#C4707E]/50 rounded-full flex items-center justify-center">
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
              <div className="h-full border border-[#E8D8D8] hover:border-[#C4707E] rounded-3xl p-8 transition-all duration-500 hover:shadow-xl hover:shadow-[#C4707E]/5 bg-white/50 backdrop-blur-sm">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#C4707E]">★</span>
                  ))}
                </div>
                <blockquote className="text-lg font-light leading-relaxed text-[#4A4040] mb-8">
                  Their quality control is exceptional. Every shipment arrives exactly 
                  as specified, and their communication throughout the process 
                  is incredibly responsive.
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#F0DEDE] flex items-center justify-center text-[#C4707E] font-medium group-hover:bg-[#C4707E] group-hover:text-white transition-colors">
                    SK
                  </div>
                  <div>
                    <p className="font-medium text-[#2D2626]">Sarah Kim</p>
                    <p className="text-sm text-[#5D5050]">Procurement Manager, Korean Beauty Retailer</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group">
              <div className="h-full border border-[#E8D8D8] hover:border-[#C4707E] rounded-3xl p-8 transition-all duration-500 hover:shadow-xl hover:shadow-[#C4707E]/5 bg-white/50 backdrop-blur-sm">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#C4707E]">★</span>
                  ))}
                </div>
                <blockquote className="text-base font-light leading-relaxed text-[#4A4040] mb-6">
                  From concept to shelf in under 6 months — they made the impossible possible.
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#F0DEDE] flex items-center justify-center text-[#C4707E] text-sm font-medium group-hover:bg-[#C4707E] group-hover:text-white transition-colors">
                    MR
                  </div>
                  <div>
                    <p className="font-medium text-[#2D2626] text-sm">Michael Reynolds</p>
                    <p className="text-xs text-[#5D5050]">CEO, US E-commerce Brand</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group">
              <div className="h-full border border-[#E8D8D8] hover:border-[#C4707E] rounded-3xl p-8 transition-all duration-500 hover:shadow-xl hover:shadow-[#C4707E]/5 bg-white/50 backdrop-blur-sm">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#C4707E]">★</span>
                  ))}
                </div>
                <blockquote className="text-base font-light leading-relaxed text-[#4A4040] mb-6">
                  The event tattoo service was a hit at our corporate gala. Absolutely loved it.
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#F0DEDE] flex items-center justify-center text-[#C4707E] text-sm font-medium group-hover:bg-[#C4707E] group-hover:text-white transition-colors">
                    JW
                  </div>
                  <div>
                    <p className="font-medium text-[#2D2626] text-sm">Jennifer Wong</p>
                    <p className="text-xs text-[#5D5050]">Events Director, Hong Kong</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4 - Full width bottom */}
            <div className="md:col-span-2 lg:col-span-4 group">
              <div className="border border-[#E8D8D8] hover:border-[#C4707E] rounded-3xl p-8 md:p-12 transition-all duration-500 hover:shadow-xl hover:shadow-[#C4707E]/5 bg-gradient-to-r from-[#FDF8F6] to-white">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-[#C4707E] text-xl">★</span>
                      ))}
                    </div>
                    <blockquote className="text-xl md:text-2xl font-light leading-relaxed text-[#4A4040]">
                      Finding reliable suppliers in Asia was our biggest challenge 
                      until we partnered with Beauty Solutions. They&apos;ve streamlined 
                      our entire supply chain.
                    </blockquote>
                  </div>
                  <div className="flex items-center gap-4 md:justify-end">
                    <div>
                      <p className="font-medium text-[#2D2626] text-lg md:text-right">Anna Novak</p>
                      <p className="text-sm text-[#5D5050] md:text-right">Supply Chain Director, European Retailer</p>
                    </div>
                    <div className="w-14 h-14 rounded-full bg-[#F0DEDE] flex items-center justify-center text-[#C4707E] font-medium group-hover:bg-[#C4707E] group-hover:text-white transition-colors">
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
                <p className="text-[#C4707E] tracking-[0.3em] text-base mb-4">GET IN TOUCH</p>
                <h2 className="text-4xl md:text-6xl font-extralight leading-tight">
                  Let&apos;s create
                  <br />
                  something
                  <br />
                  <span className="italic text-[#C4707E]">beautiful</span>
                </h2>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full border border-[#E8D8D8] flex items-center justify-center group-hover:border-[#C4707E] group-hover:bg-[#C4707E]/10 transition-all">
                    <svg className="w-5 h-5 text-[#C4707E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-[#5D5050]">Email</p>
                    <p className="font-light">info@hkbeautysolutions.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full border border-[#E8D8D8] flex items-center justify-center group-hover:border-[#C4707E] group-hover:bg-[#C4707E]/10 transition-all">
                    <svg className="w-5 h-5 text-[#C4707E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-[#5D5050]">WhatsApp</p>
                    <p className="font-light">+852 6367 1752</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full border border-[#E8D8D8] flex items-center justify-center group-hover:border-[#C4707E] group-hover:bg-[#C4707E]/10 transition-all">
                    <svg className="w-5 h-5 text-[#C4707E]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 01.213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 00.167-.054l1.903-1.114a.864.864 0 01.717-.098 10.16 10.16 0 002.837.403c4.801 0 8.692-3.287 8.692-7.342 0-4.054-3.89-7.341-8.692-7.341z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-[#5D5050]">WeChat</p>
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
                    <label className="block text-sm text-[#5D5050] mb-2">Name</label>
                    <input 
                      type="text" 
                      className="w-full px-0 py-3 bg-transparent border-b border-[#E8D8D8] focus:border-[#C4707E] outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-[#5D5050] mb-2">Company</label>
                    <input 
                      type="text" 
                      className="w-full px-0 py-3 bg-transparent border-b border-[#E8D8D8] focus:border-[#C4707E] outline-none transition-colors"
                      placeholder="Company name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-[#5D5050] mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-0 py-3 bg-transparent border-b border-[#E8D8D8] focus:border-[#C4707E] outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm text-[#5D5050] mb-2">Interest</label>
                  <select className="w-full px-0 py-3 bg-transparent border-b border-[#E8D8D8] focus:border-[#C4707E] outline-none transition-colors cursor-pointer">
                    <option value="">Select a service</option>
                    <option value="brand">Private Brand Development</option>
                    <option value="product">Product Development</option>
                    <option value="sourcing">Product Sourcing</option>
                    <option value="packaging">Packaging Design</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-[#5D5050] mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-0 py-3 bg-transparent border-b border-[#E8D8D8] focus:border-[#C4707E] outline-none transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full py-4 bg-[#2D2626] text-white tracking-widest text-sm hover:bg-[#C4707E] transition-colors duration-300 rounded-full mt-8"
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
            <a href="#" className="text-2xl font-light tracking-[0.3em] text-[#2D2626]">
              BEAUTY<span className="text-[#C4707E]">.</span>
            </a>

            <div className="flex items-center gap-6">
              <a href="https://www.linkedin.com/company/104444059/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-[#E8D8D8] flex items-center justify-center hover:border-[#C4707E] hover:bg-[#C4707E]/10 transition-all">
                <svg className="w-4 h-4 text-[#5D5050]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://wa.me/85263671752" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-[#E8D8D8] flex items-center justify-center hover:border-[#C4707E] hover:bg-[#C4707E]/10 transition-all">
                <svg className="w-4 h-4 text-[#5D5050]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>

            <p className="text-sm text-[#5D5050]">
              © 2026 Beauty Solutions (HK) Limited
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
