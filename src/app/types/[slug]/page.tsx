import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { coverageTypes } from '@/data/coverage-types';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const dynamicParams = false;

const heroImages: Record<string, string> = {
  comprehensive: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&q=80',
  drivetrain: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1600&q=80',
  electrical: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?w=1600&q=80',
  'ev-hybrid': 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1600&q=80',
  'roadside-assistance': 'https://images.unsplash.com/photo-1568844293986-8d0400bd4745?w=1600&q=80',
  'extended-warranty': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80',
};

export async function generateStaticParams() {
  return coverageTypes.map((type) => ({ slug: type.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const type = coverageTypes.find((t) => t.slug === slug);
  if (!type) return { title: 'Not Found' };
  return {
    title: type.metaTitle,
    description: type.metaDescription,
    alternates: { canonical: `https://breakdowninsurance.co.nz/types/${slug}` },
    openGraph: {
      title: type.metaTitle,
      description: type.metaDescription,
      url: `https://breakdowninsurance.co.nz/types/${slug}`,
      type: 'article',
    },
  };
}

export default async function CoverageTypePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const type = coverageTypes.find((t) => t.slug === slug);
  if (!type) notFound();

  const imageUrl = heroImages[slug] || 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1600&q=80';
  const otherTypes = coverageTypes.filter((t) => t.slug !== slug);
  const pageUrl = `https://breakdowninsurance.co.nz/types/${slug}`;
  const publishDate = '2026-04-10';
  const modifiedDate = '2026-05-13';

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: type.metaTitle,
    description: type.metaDescription,
    url: pageUrl,
    datePublished: publishDate,
    dateModified: modifiedDate,
    author: {
      '@type': 'Organization',
      name: 'BreakdownInsurance.co.nz Editorial Team',
      url: 'https://breakdowninsurance.co.nz/about',
    },
    publisher: {
      '@type': 'Organization',
      name: 'BreakdownInsurance.co.nz',
      url: 'https://breakdowninsurance.co.nz',
      logo: { '@type': 'ImageObject', url: 'https://breakdowninsurance.co.nz/android-chrome-512x512.png' },
    },
    image: imageUrl,
    mainEntityOfPage: { '@type': 'WebPage', '@id': pageUrl },
  };

  const faqSchema = type.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: type.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  } : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://breakdowninsurance.co.nz' },
        { name: 'Coverage Types', url: 'https://breakdowninsurance.co.nz/coverage' },
        { name: type.title, url: pageUrl },
      ]} />

      {/* Hero */}
      <div className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/88 to-slate-900/30" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <Link href="/coverage" className="text-amber-300 hover:text-amber-200 text-sm font-medium mb-4 block">← Coverage Types</Link>
          <div className="text-5xl mb-4">{type.icon}</div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">{type.title}</h1>
          <p className="text-xl text-slate-300 mb-2 max-w-2xl">{type.description}</p>
          <p className="text-sm text-slate-400 mb-8">
            By <span className="text-amber-300 font-medium">BreakdownInsurance.co.nz Editorial Team</span> · Updated {new Date(modifiedDate).toLocaleDateString('en-NZ', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>
          <Link href="/compare" className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-xl">
            Compare Providers
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Content */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Main content */}
            <div className="lg:col-span-2">

              {/* Intro */}
              <p className="text-lg text-slate-600 leading-relaxed mb-10 border-l-4 border-amber-400 pl-5">
                {type.details}
              </p>

              {/* Long-form sections */}
              {type.longFormSections.map((section) => (
                <div key={section.heading} className="mb-10">
                  <h2 className="text-2xl font-extrabold text-slate-900 mb-4">{section.heading}</h2>
                  {section.body.split('\n\n').map((para, i) => (
                    <p key={i} className="text-slate-600 leading-relaxed mb-4">{para}</p>
                  ))}
                </div>
              ))}

              {/* Covered / Excluded */}
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {[
                  { icon: '✅', label: 'Typically Covered', items: ['Sudden & unexpected component failure', 'Parts and labour at approved workshops', 'Towing costs to repairer', 'Rental car during repairs', 'Accommodation if stranded'] },
                  { icon: '❌', label: 'Typically Excluded', items: ['Wear and tear items', 'Scheduled maintenance', 'Pre-existing conditions', 'Accident damage', 'Undisclosed modifications'] },
                ].map((section) => (
                  <div key={section.label} className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                    <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">{section.icon} {section.label}</h3>
                    <ul className="space-y-2">
                      {section.items.map((item) => <li key={item} className="text-sm text-slate-600 flex items-start gap-2"><span className="text-slate-400 mt-0.5">•</span>{item}</li>)}
                    </ul>
                  </div>
                ))}
              </div>

              {/* FAQ Section */}
              {type.faqs.length > 0 && (
                <div className="mt-12">
                  <h2 className="text-2xl font-extrabold text-slate-900 mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-4">
                    {type.faqs.map((faq, i) => (
                      <details key={i} className="group bg-slate-50 border border-slate-200 rounded-xl overflow-hidden">
                        <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-semibold text-slate-900 hover:bg-amber-50 transition-colors list-none">
                          {faq.q}
                          <svg className="w-5 h-5 text-amber-500 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </summary>
                        <div className="px-6 pb-5 pt-2 text-slate-600 leading-relaxed border-t border-slate-200">{faq.a}</div>
                      </details>
                    ))}
                  </div>
                </div>
              )}

              {/* Internal links */}
              {type.internalLinks.length > 0 && (
                <div className="mt-10 bg-amber-50 border border-amber-200 rounded-2xl p-6">
                  <h3 className="font-bold text-slate-900 mb-4">Related Guides</h3>
                  <ul className="space-y-2">
                    {type.internalLinks.map((link) => (
                      <li key={link.href}>
                        <Link href={link.href} className="text-amber-700 hover:text-amber-900 font-medium hover:underline flex items-center gap-2">
                          <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                          {link.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-6">
              {/* Compare CTA */}
              <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-6 text-white sticky top-6">
                <h3 className="font-bold text-xl mb-2">Compare Providers</h3>
                <p className="text-amber-100 text-sm mb-5">See all 6 providers side by side — cover, claim limits, EV options, and more.</p>
                <Link href="/compare" className="block w-full text-center bg-white text-amber-700 font-bold py-3 rounded-xl hover:bg-amber-50 transition-colors">
                  See Full Comparison →
                </Link>
              </div>

              {/* Author box */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-3 text-sm uppercase tracking-wide">About This Guide</h3>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 text-lg">📋</div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">BreakdownInsurance.co.nz Editorial Team</p>
                    <p className="text-slate-500 text-xs mt-1">Independent breakdown insurance research and comparison. Published by Cover4You.</p>
                    <p className="text-slate-400 text-xs mt-2">Updated: {new Date(modifiedDate).toLocaleDateString('en-NZ', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
                  </div>
                </div>
              </div>

              {/* Other coverage types */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-4">Other Coverage Types</h3>
                <div className="space-y-2">
                  {otherTypes.map((ot) => (
                    <Link key={ot.slug} href={`/types/${ot.slug}`} className="flex items-center gap-3 p-3 rounded-xl hover:bg-amber-50 hover:border-amber-200 border border-transparent transition-all group">
                      <span className="text-xl">{ot.icon}</span>
                      <span className="text-sm font-medium text-slate-700 group-hover:text-amber-700 transition-colors">{ot.title}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Trust signals */}
              <div className="bg-slate-900 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-base mb-4">Why Compare with Us?</h3>
                {[
                  { icon: '⚖️', text: 'Independent — no provider pays for placement' },
                  { icon: '🔍', text: '6 providers compared side by side' },
                  { icon: '🔗', text: 'Direct links to each provider\'s website' },
                  { icon: '📅', text: 'Updated with 2026 market data' },
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-3 mb-3">
                    <span className="text-lg flex-shrink-0">{item.icon}</span>
                    <span className="text-slate-300 text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
