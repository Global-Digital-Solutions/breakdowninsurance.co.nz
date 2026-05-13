import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { insurancePages } from '@/data/insurance-pages';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const dynamicParams = false;

const heroImages = [
  'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1600&q=80',
  'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1600&q=80',
  'https://images.unsplash.com/photo-1568844293986-8d0400bd4745?w=1600&q=80',
  'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1600&q=80',
  'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?w=1600&q=80',
  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80',
  'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1600&q=80',
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80',
];

export async function generateStaticParams() {
  return insurancePages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = insurancePages.find((p) => p.slug === slug);
  if (!page) return { title: 'Not Found' };
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: `https://breakdowninsurance.co.nz/breakdown-insurance/${slug}` },
  };
}

export default async function InsurancePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = insurancePages.find((p) => p.slug === slug);
  if (!page) notFound();

  const pageIndex = insurancePages.findIndex((p) => p.slug === slug);
  const heroImage = heroImages[pageIndex % heroImages.length];

  const relatedPages = insurancePages.filter((p) => p.slug !== slug).slice(0, 4);

  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://breakdowninsurance.co.nz' },
        { name: page.title, url: `https://breakdowninsurance.co.nz/breakdown-insurance/${slug}` },
      ]} />

      {/* Hero */}
      <div className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 to-slate-900/30" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">{page.heroHeading}</h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl">{page.heroSubtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/compare"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-xl shadow-amber-500/30"
            >
              Compare Providers
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/coverage"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 border border-white/20"
            >
              Explore Coverage Types
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Main content */}
            <div className="lg:col-span-2">
              <p className="text-lg text-slate-600 leading-relaxed mb-8">{page.intro}</p>

              <div className="space-y-8">
                {page.sections.map((section, i) => (
                  <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                    <h2 className="text-xl font-bold text-slate-900 mb-3">{section.heading}</h2>
                    <p className="text-slate-600 leading-relaxed">{section.content}</p>
                  </div>
                ))}
              </div>

              {/* Mid-content CTA */}
              <div className="mt-10 bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-3">Compare Providers Side by Side</h3>
                <p className="text-amber-100 mb-6 max-w-lg">See all six leading MBI providers in one place — component cover, claim limits, EV capability, and workshop access. Independent, with no provider paying for placement.</p>
                <Link
                  href="/compare"
                  className="inline-flex items-center gap-2 bg-white text-amber-700 font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-amber-50 transition-colors"
                >
                  See Full Comparison
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-6">

              {/* Compare CTA widget */}
              <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-xl mb-2">Compare Providers</h3>
                <p className="text-amber-100 text-sm mb-5 leading-relaxed">All six leading NZ breakdown insurance providers compared side by side — cover, limits, claims, and more.</p>
                <Link
                  href="/compare"
                  className="block w-full text-center bg-white text-amber-700 font-bold py-3 rounded-xl hover:bg-amber-50 transition-colors text-sm"
                >
                  See Full Comparison →
                </Link>
              </div>

              {/* Related guides */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-4">Related Breakdown Insurance Guides</h3>
                <div className="space-y-3">
                  {relatedPages.map((related) => (
                    <Link
                      key={related.slug}
                      href={`/breakdown-insurance/${related.slug}`}
                      className="block p-3 rounded-xl hover:bg-amber-50 border border-transparent hover:border-amber-200 transition-all"
                    >
                      <p className="text-sm font-medium text-slate-700 hover:text-amber-700 leading-snug">{related.title}</p>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Coverage types */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-slate-900 mb-3">Coverage Types</h3>
                <div className="space-y-2 text-sm">
                  {[
                    { label: 'Comprehensive Breakdown Insurance', href: '/types/comprehensive' },
                    { label: 'Drivetrain Cover', href: '/types/drivetrain' },
                    { label: 'Electrical Systems', href: '/types/electrical' },
                    { label: 'EV & Hybrid Battery', href: '/types/ev-hybrid' },
                    { label: 'Roadside Assistance', href: '/types/roadside-assistance' },
                  ].map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex items-center gap-2 text-amber-700 hover:text-amber-800 font-medium py-0.5"
                    >
                      <span className="text-xs">→</span>{link.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Trust signals */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wide">Why Compare With Us</h3>
                <div className="space-y-3">
                  {[
                    { icon: '⚖️', label: 'Independently assessed', sub: 'No provider pays for placement' },
                    { icon: '🔗', label: 'Go direct to providers', sub: 'No middlemen or data forms' },
                    { icon: '🚗', label: 'Any vehicle', sub: 'ICE, hybrid, EV, PHEV' },
                    { icon: '📍', label: 'Nationwide cover', sub: 'Any NZ location' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <span className="text-xl flex-shrink-0 mt-0.5">{item.icon}</span>
                      <div>
                        <div className="text-slate-800 font-semibold text-sm leading-tight">{item.label}</div>
                        <div className="text-slate-500 text-xs mt-0.5">{item.sub}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
