import type { Metadata } from 'next';
import Link from 'next/link';
import { coverageTypes } from '@/data/coverage-types';

export const metadata: Metadata = {
  title: 'Breakdown Insurance Coverage Types NZ | Mechanical Breakdown Insurance Cover Options',
  description: 'Explore all mechanical breakdown insurance coverage types available in New Zealand — comprehensive cover, EV battery protection, drivetrain, electrical systems, and roadside assistance.',
  alternates: { canonical: 'https://breakdowninsurance.co.nz/coverage' },
};

export default function CoveragePage() {
  return (
    <>
      <div
        className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1568844293986-8d0400bd4745?w=1600&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 to-slate-900/30" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Breakdown Insurance Coverage Types in NZ</h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">From comprehensive engine and transmission cover to EV battery protection — understand all your MBI options before you compare.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/compare"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-xl"
            >
              Compare Providers
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/faqs"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 border border-white/20"
            >
              Read FAQs
            </Link>
          </div>
        </div>
      </div>

      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
              6 coverage types explained
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">All Breakdown Insurance Coverage Options</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Choose the cover level that best matches your vehicle type, age, and budget — then compare providers side by side.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {coverageTypes.map((type) => (
              <div key={type.slug} className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-md hover:border-amber-200 transition-all duration-300">
                <div className="flex items-start gap-5 mb-5">
                  <div className="text-4xl w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center flex-shrink-0">{type.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{type.title}</h3>
                    <p className="text-amber-700 font-medium text-sm">{type.description}</p>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed mb-6 text-sm">{type.details.substring(0, 280)}...</p>
                <div className="flex gap-3">
                  <Link
                    href={`/types/${type.slug}`}
                    className="flex-1 text-center bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-semibold py-2.5 rounded-xl transition-all duration-200 text-sm"
                  >
                    Learn More
                  </Link>
                  <Link
                    href="/compare"
                    className="flex-1 text-center border border-amber-300 text-amber-700 hover:bg-amber-50 font-semibold py-2.5 rounded-xl transition-all duration-200 text-sm"
                  >
                    Compare Providers
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Not Sure Which Cover You Need?</h2>
          <p className="text-slate-600 mb-6 max-w-xl mx-auto">Use our comparison tool to see all six providers side by side — filter by cover type, vehicle type, and EV capability. Then click through directly to the provider of your choice.</p>
          <Link
            href="/compare"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:from-amber-600 hover:to-orange-700 transition-all"
          >
            Compare All Providers
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
