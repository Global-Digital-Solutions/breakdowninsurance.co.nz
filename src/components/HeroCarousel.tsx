'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const heroImages = [
  { url: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1600&q=80', alt: 'Modern car on open highway at golden hour' },
  { url: 'https://images.unsplash.com/photo-1493238792000-8113da705763?w=1600&q=80', alt: 'Mechanic inspecting a vehicle engine in a professional workshop' },
  { url: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1600&q=80', alt: 'Auto repair workshop with vehicles being serviced' },
  { url: 'https://images.unsplash.com/photo-1568844293986-8d0400bd4745?w=1600&q=80', alt: 'Family SUV on the road' },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden bg-slate-900">
      {heroImages.map((img, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: current === index ? 1 : 0 }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${img.url})` }}
            role="img"
            aria-label={img.alt}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/35" />
        </div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className={`max-w-3xl transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/30 text-amber-300 px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
            Trusted by Kiwi drivers — independent, unbiased, up to date
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Compare Breakdown
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400"> Insurance</span>
            <br />— Save Time & Money
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
            We compare every leading mechanical breakdown insurance provider side by side — any vehicle, any driver, any location. Find the right cover and go straight to the provider.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/compare"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-xl shadow-amber-500/30 hover:shadow-2xl hover:-translate-y-0.5 text-lg"
            >
              Compare Providers
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/coverage"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 border border-white/20 text-lg"
            >
              Explore Coverage Types
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { icon: '🚗', label: 'Any Vehicle', sub: 'Car, ute, SUV, EV' },
              { icon: '📍', label: 'Any Location', sub: 'Nationwide coverage' },
              { icon: '👤', label: 'Any Driver', sub: 'New or experienced' },
              { icon: '⚖️', label: 'Independent', sub: '6 providers compared' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3">
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <div>
                  <div className="text-white font-bold text-sm leading-tight">{item.label}</div>
                  <div className="text-slate-300 text-xs leading-tight mt-0.5">{item.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 rounded-full transition-all duration-300 ${current === index ? 'w-8 bg-amber-400' : 'w-2 bg-white/40 hover:bg-white/60'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
