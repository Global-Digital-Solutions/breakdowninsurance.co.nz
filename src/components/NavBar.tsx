'use client';

import { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';

const coverageTypes = [
  { label: 'Comprehensive Breakdown Insurance', href: '/types/comprehensive' },
  { label: 'Drivetrain & Transmission', href: '/types/drivetrain' },
  { label: 'Electrical Systems', href: '/types/electrical' },
  { label: 'EV & Hybrid Battery', href: '/types/ev-hybrid' },
  { label: 'Roadside Assistance', href: '/types/roadside-assistance' },
  { label: 'Extended Warranty', href: '/types/extended-warranty' },
];

const navLinks = [
  { label: 'Coverage', href: '/coverage' },
  { label: 'Compare', href: '/compare' },
  { label: 'Resources', href: '/blog' },
  { label: 'FAQs', href: '/faqs' },
];

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [typesDropdownOpen, setTypesDropdownOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white border-b border-slate-200 shadow-sm">
        <nav className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex-shrink-0 hover:opacity-80 transition-opacity py-2 -ml-1 pl-1 pr-3 min-h-[44px] flex items-center">
              <Logo />
            </Link>

            <div className="hidden lg:flex items-center gap-8">
              <div className="relative group">
                <button className="text-slate-700 font-medium hover:text-amber-600 transition-colors flex items-center gap-2">
                  Coverage Types
                  <svg className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute left-0 mt-0 w-60 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 border border-slate-100">
                  {coverageTypes.map((type) => (
                    <Link key={type.href} href={type.href} className="block px-4 py-2.5 text-slate-700 hover:bg-amber-50 hover:text-amber-700 transition-colors text-sm">
                      {type.label}
                    </Link>
                  ))}
                </div>
              </div>

              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-slate-700 font-medium hover:text-amber-600 transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="hidden lg:block">
              <Link href="/compare" className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-semibold px-6 py-2.5 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg">
                Compare Providers
              </Link>
            </div>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2.5 -mr-1 hover:bg-slate-100 rounded-lg transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center" aria-label="Toggle menu">
              {mobileMenuOpen ? (
                <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="lg:hidden pb-5 border-t border-slate-200">
              <div className="pt-4 space-y-0.5">
                <button onClick={() => setTypesDropdownOpen(!typesDropdownOpen)} className="w-full text-left px-4 py-3 text-slate-700 font-medium hover:bg-slate-100 rounded-lg transition-colors flex items-center justify-between">
                  Coverage Types
                  <svg className={`w-4 h-4 transition-transform ${typesDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {typesDropdownOpen && (
                  <div className="pl-4 space-y-1">
                    {coverageTypes.map((type) => (
                      <Link key={type.href} href={type.href} className="block px-4 py-2.5 text-slate-600 hover:bg-amber-50 hover:text-amber-700 rounded-lg transition-colors text-sm" onClick={() => setMobileMenuOpen(false)}>
                        {type.label}
                      </Link>
                    ))}
                  </div>
                )}
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="block px-4 py-3 text-slate-700 font-medium hover:bg-slate-100 rounded-lg transition-colors" onClick={() => setMobileMenuOpen(false)}>
                    {link.label}
                  </Link>
                ))}
                <div className="pt-4 px-2">
                  <Link href="/compare" className="block w-full text-center bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold px-6 py-3.5 rounded-xl transition-all duration-200 shadow-md text-base" onClick={() => setMobileMenuOpen(false)}>
                    Compare Providers
                  </Link>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}
