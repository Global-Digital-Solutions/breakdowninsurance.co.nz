import type { Metadata } from 'next';
import Link from 'next/link';
import HeroCarousel from '@/components/HeroCarousel';
import AnimatedStats from '@/components/AnimatedStats';
import HowItWorksSection from '@/components/HowItWorksSection';
import { coverageTypes } from '@/data/coverage-types';
import { blogPosts } from '@/data/blog-posts';
import { providers } from '@/data/providers';
import apifyContent from '@/data/apify-content.json';

export const metadata: Metadata = {
  title: 'BreakdownInsurance.co.nz | Mechanical Breakdown Insurance NZ | Compare & Save',
  description: 'Compare mechanical breakdown insurance in New Zealand. Independent breakdown insurance comparison from leading NZ providers. Engine, transmission, electrical, EV battery cover.',
  alternates: { canonical: 'https://breakdowninsurance.co.nz' },
};

const schemaOrg = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'BreakdownInsurance.co.nz',
  url: 'https://breakdowninsurance.co.nz',
  description: 'Independent mechanical breakdown insurance information and comparison service.',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://breakdowninsurance.co.nz/blog?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

export default function HomePage() {
  const featuredPosts = blogPosts.slice(0, 3);
  const topProviders = providers.slice(0, 3);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }} />

      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Animated Stats */}
      <AnimatedStats />

      {/* Coverage Types Grid */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold text-amber-600 uppercase tracking-widest bg-amber-100 border border-amber-200 px-4 py-1.5 rounded-full mb-4">What Can MBI Cover?</span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-5 leading-tight">
              Breakdown Insurance
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500"> Coverage Types</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">From engine and transmission through to EV battery packs — understand what each policy type covers before you compare providers.</p>
            <div className="mt-6 w-16 h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coverageTypes.map((type) => (
              <Link key={type.slug} href={`/types/${type.slug}`} className="group bg-white border border-slate-200 rounded-2xl p-7 hover:border-amber-300 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300">
                <div className="w-14 h-14 bg-amber-50 border border-amber-100 rounded-2xl flex items-center justify-center text-3xl mb-5 group-hover:bg-amber-100 transition-colors">{type.icon}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2.5 group-hover:text-amber-700 transition-colors">{type.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-5">{type.description}</p>
                <span className="inline-flex items-center gap-1.5 text-amber-600 font-semibold text-sm group-hover:gap-2.5 transition-all">
                  Explore this cover
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/compare" className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-amber-500/25">
              Compare All Providers
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why breakdown insurance Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-amber-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6">
                Why Every Vehicle Owner Should Consider Breakdown Insurance
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                The vehicle fleet averages 15 years old — among the oldest in the developed world. When manufacturer warranties expire, the full cost of unexpected mechanical failures falls on you. A single engine or transmission repair can cost $5,000–$20,000. The right breakdown insurance policy eliminates that risk entirely.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { icon: '🔧', title: 'Engine & Transmission', text: 'Covers the most expensive repairs your vehicle will ever need.' },
                  { icon: '⚡', title: 'Electrical Systems', text: 'Modern cars are computers on wheels. Protect against ECU and sensor failures.' },
                  { icon: '🔋', title: 'EV Battery Cover', text: 'Battery pack replacement can cost $20,000+. Specialised cover protects EV owners.' },
                  { icon: '🚗', title: '24/7 Roadside Assist', text: 'Never be stranded — nationwide towing and emergency assistance included.' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0 text-xl">{item.icon}</div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                      <p className="text-slate-600 text-sm">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/coverage" className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-amber-500/25">
                Explore All Coverage Options
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="relative">
              <div
                className="rounded-2xl overflow-hidden shadow-2xl h-80 lg:h-96 bg-cover bg-center"
                style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80)' }}
              />
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-5 border border-amber-200">
                <div className="text-2xl font-extrabold text-amber-600">$0</div>
                <div className="text-sm text-slate-600 font-medium">Out-of-pocket on covered repairs</div>
              </div>
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl shadow-xl p-5 text-white">
                <div className="text-2xl font-extrabold">6</div>
                <div className="text-sm font-medium">Providers Compared</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <HowItWorksSection />

      {/* Top Providers Preview */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3">Leading Breakdown Insurance Providers</h2>
              <p className="text-lg text-slate-600">Compare policies from top mechanical breakdown insurers — side by side.</p>
            </div>
            <Link href="/compare" className="text-amber-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all whitespace-nowrap">
              Full Comparison
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topProviders.map((provider) => (
              <div key={provider.name} className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-md hover:border-amber-200 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl">{provider.logo}</div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-slate-900 leading-tight">{provider.name}</h3>
                    <div className="flex items-center gap-1 mt-0.5">
                      <span className="text-amber-500 text-sm">{'★'.repeat(Math.floor(provider.rating))}</span>
                      <span className="text-sm text-slate-500">{provider.rating}</span>
                    </div>
                  </div>
                  <span className="text-slate-500 font-bold text-lg flex-shrink-0">{provider.price}</span>
                </div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {provider.features.slice(0, 3).map((f) => (
                    <span key={f} className="text-xs bg-amber-50 text-amber-700 border border-amber-200 px-2.5 py-1 rounded-full">{f}</span>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-xs mb-3">
                  <span className={`font-semibold px-2 py-0.5 rounded-full ${provider.evCover ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-500'}`}>
                    {provider.evCover ? '✓ EV Cover' : '✗ No EV Cover'}
                  </span>
                  <span className="text-slate-400">{provider.tiers.join(' / ')}</span>
                </div>
                <p className="text-sm text-slate-600 line-clamp-2">{provider.pros}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/compare" className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg">
              Compare All Providers
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Industry News (Apify Content Feed) */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3">Breakdown Insurance Industry News</h2>
              <p className="text-lg text-slate-600">Latest news and research from the vehicle and insurance sector.</p>
            </div>
            <span className="text-xs text-slate-400 bg-slate-200 px-3 py-1.5 rounded-full">Updated {new Date(apifyContent.lastUpdated).toLocaleDateString('en-NZ', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {apifyContent.articles.slice(0, 3).map((article) => (
              <a key={article.id} href={article.sourceUrl} target="_blank" rel="noopener noreferrer" className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-md hover:border-amber-200 transition-all duration-300">
                <div className="h-40 bg-cover bg-center" style={{ backgroundImage: `url(${article.image})` }} />
                <div className="p-5">
                  <span className="text-xs font-semibold text-amber-600 uppercase tracking-wider">{article.category}</span>
                  <h3 className="font-bold text-slate-900 mt-1.5 mb-2 group-hover:text-amber-700 transition-colors leading-snug">{article.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{article.excerpt}</p>
                  <div className="mt-3 text-xs text-slate-400">{article.source} · {new Date(article.date).toLocaleDateString('en-NZ', { day: 'numeric', month: 'short' })}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3">Breakdown Insurance Resources</h2>
              <p className="text-lg text-slate-600">Independent guides to help you understand your options and choose the right mechanical breakdown cover.</p>
            </div>
            <Link href="/blog" className="text-amber-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all whitespace-nowrap">
              All Resources
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="relative h-48 overflow-hidden bg-slate-200">
                  <div
                    className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                    style={{ backgroundImage: `url(${post.image})` }}
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold text-amber-600 uppercase tracking-wider">{post.category}</span>
                  <h3 className="font-bold text-slate-900 mt-1.5 mb-2 leading-snug group-hover:text-amber-700 transition-colors">{post.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-3 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <span>{new Date(post.date).toLocaleDateString('en-NZ', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Find the Right Cover — Any Vehicle, Any Driver</h2>
          <p className="text-lg text-slate-300 mb-8">We&apos;ve compared every leading provider so you don&apos;t have to. See them side by side and go straight to the one that suits you.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/compare" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-xl shadow-amber-500/30 text-lg">
              Compare Providers
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="/coverage" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 border border-white/20 text-lg">
              Explore Coverage Types
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
