import type { Metadata } from 'next';
import Link from 'next/link';
import { providers } from '@/data/providers';

export const metadata: Metadata = {
  title: 'Compare Breakdown Insurance Providers 2026 | Mechanical Breakdown Insurance Comparison',
  description: 'Compare the top mechanical breakdown insurance providers side by side. Autosure, AA, Assurant, Provident, Autolife and Quest — find the right policy for your vehicle.',
  alternates: { canonical: 'https://breakdowninsurance.co.nz/compare' },
};

const featureMatrix = [
  { label: 'Engine & Transmission', key: 'engine' },
  { label: 'Electrical Systems', key: 'electrical' },
  { label: 'EV / Hybrid Battery', key: 'ev' },
  { label: 'Roadside Assistance', key: 'roadside' },
  { label: 'Towing Cover', key: 'towing' },
  { label: 'Rental Car Benefit', key: 'rental' },
  { label: 'Accommodation Cover', key: 'accommodation' },
  { label: 'Online Quote Available', key: 'onlineQuote' },
];

// Feature matrix data per provider
const providerFeatureData: Record<string, Record<string, boolean>> = {
  'Autosure': { engine: true, electrical: true, ev: true, roadside: true, towing: true, rental: true, accommodation: true, onlineQuote: true },
  'AA Mechanical Care': { engine: true, electrical: true, ev: true, roadside: true, towing: true, rental: true, accommodation: true, onlineQuote: false },
  'Assurant Vehicle Care': { engine: true, electrical: true, ev: true, roadside: true, towing: true, rental: false, accommodation: false, onlineQuote: false },
  'Provident Insurance': { engine: true, electrical: true, ev: false, roadside: false, towing: true, rental: false, accommodation: true, onlineQuote: false },
  'Autolife': { engine: true, electrical: true, ev: true, roadside: true, towing: true, rental: true, accommodation: true, onlineQuote: true },
  'Quest Insurance': { engine: true, electrical: true, ev: false, roadside: false, towing: true, rental: false, accommodation: true, onlineQuote: false },
};

export default function ComparePage() {
  return (
    <>
      {/* Hero */}
      <section className="py-10 pt-14 pb-16 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Compare Breakdown Insurance Providers 2026</h1>
          <p className="text-xl text-slate-300 mb-8">Side-by-side comparison of leading mechanical breakdown insurance providers. Find the right policy for your vehicle and budget — then click through to get a quote directly.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-slate-400">
            {['6 providers compared', 'Updated 2026', 'Independent & unbiased', 'Direct provider links'].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Provider Cards — Mobile */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-3">Mechanical Breakdown Insurance Comparison</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Premiums vary by vehicle make, model, age, mileage and cover level — the information below is a guide only. Click through to any provider to get a quote directly.</p>
          </div>

          {/* Mobile cards */}
          <div className="lg:hidden space-y-6 mb-12">
            {providers.map((p) => (
              <div key={p.name} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{p.logo}</span>
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg leading-tight">{p.name}</h3>
                      <div className="flex items-center gap-1 mt-0.5">
                        <span className="text-amber-500 text-sm">{'★'.repeat(Math.floor(p.rating))}</span>
                        <span className="text-sm text-slate-500">{p.rating}/5</span>
                        {p.reviewCount !== 'N/A' && <span className="text-xs text-slate-400 ml-1">({p.reviewCount} reviews)</span>}
                      </div>
                    </div>
                  </div>
                  <span className="font-bold text-slate-600 text-xl">{p.price}</span>
                </div>

                <div className="p-6">
                  <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
                    <div className="bg-slate-50 rounded-lg px-3 py-2">
                      <div className="font-semibold text-slate-500 uppercase tracking-wide mb-0.5">Tiers</div>
                      <div className="text-slate-700">{p.tiers.join(' / ')}</div>
                    </div>
                    <div className="bg-slate-50 rounded-lg px-3 py-2">
                      <div className="font-semibold text-slate-500 uppercase tracking-wide mb-0.5">EV Cover</div>
                      <div className={p.evCover ? 'text-green-600 font-semibold' : 'text-slate-400'}>
                        {p.evCover ? '✓ Yes' : '✗ No'}
                      </div>
                    </div>
                  </div>

                  <div className="bg-amber-50 border border-amber-100 rounded-lg px-4 py-3 mb-4 text-sm">
                    <div className="font-semibold text-amber-800 mb-0.5 text-xs uppercase tracking-wide">Claim Limit</div>
                    <div className="text-amber-900">{p.claimLimit}</div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.features.slice(0, 4).map((f) => (
                      <span key={f} className="text-xs bg-amber-50 text-amber-700 border border-amber-200 px-2.5 py-1 rounded-full">{f}</span>
                    ))}
                  </div>

                  <p className="text-sm text-green-700 mb-1.5"><strong>✓</strong> {p.pros}</p>
                  <p className="text-sm text-slate-500 mb-3"><strong>△</strong> {p.cons}</p>
                  <p className="text-xs text-amber-700 bg-amber-50 px-3 py-2 rounded-lg mb-4"><strong>Best for:</strong> {p.bestFor}</p>

                  {p.quoteUrl ? (
                    <a href={p.quoteUrl} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold py-3 rounded-xl transition-all duration-200 text-sm shadow-sm">
                      Get a Quote →
                    </a>
                  ) : (
                    <span className="block w-full text-center bg-slate-200 text-slate-500 font-bold py-3 rounded-xl text-sm">
                      Contact Provider
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Desktop table */}
          <div className="hidden lg:block overflow-x-auto rounded-2xl border border-slate-200 shadow-sm mb-10">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-900">
                  <th className="text-left px-6 py-4 text-white font-semibold text-sm w-44">Provider</th>
                  <th className="text-left px-6 py-4 text-white font-semibold text-sm">Rating</th>
                  <th className="text-left px-6 py-4 text-white font-semibold text-sm">Price</th>
                  <th className="text-left px-6 py-4 text-white font-semibold text-sm">Policy Tiers</th>
                  <th className="text-left px-6 py-4 text-white font-semibold text-sm">Max Claim Limit</th>
                  <th className="text-center px-4 py-4 text-white font-semibold text-sm">EV Cover</th>
                  <th className="text-left px-6 py-4 text-white font-semibold text-sm">Best For</th>
                  <th className="px-6 py-4" />
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {providers.map((p, i) => (
                  <tr key={p.name} className={`${i % 2 === 0 ? 'bg-white' : 'bg-slate-50'} hover:bg-amber-50 transition-colors duration-150`}>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{p.logo}</span>
                        <div>
                          <div className="font-bold text-slate-900 leading-tight">{p.name}</div>
                          {p.reviewCount !== 'N/A' && (
                            <div className="text-xs text-slate-400 mt-0.5">{p.reviewCount} reviews</div>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-1">
                        <span className="text-amber-500 text-sm">{'★'.repeat(Math.floor(p.rating))}</span>
                        <span className="text-sm text-slate-600 font-semibold">{p.rating}</span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <span className="font-bold text-slate-700 text-lg">{p.price}</span>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex flex-col gap-1">
                        {p.tiers.map((t) => (
                          <span key={t} className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md inline-block w-fit">{t}</span>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-5 text-sm text-slate-600 max-w-xs">{p.claimLimit}</td>
                    <td className="px-4 py-5 text-center">
                      {p.evCover
                        ? <span className="text-green-600 font-bold text-lg">✓</span>
                        : <span className="text-slate-300 font-bold text-lg">✗</span>
                      }
                    </td>
                    <td className="px-6 py-5 text-sm text-slate-600 max-w-xs">{p.bestFor}</td>
                    <td className="px-6 py-5">
                      {p.quoteUrl ? (
                        <a href={p.quoteUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-semibold px-4 py-2 rounded-lg text-sm transition-all duration-200 whitespace-nowrap shadow-sm hover:shadow-md hover:-translate-y-0.5">
                          Get a Quote
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 bg-slate-200 text-slate-500 font-semibold px-4 py-2 rounded-lg text-sm whitespace-nowrap">
                          Contact Provider
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Feature Matrix */}
          <div className="mb-10">
            <h3 className="text-xl font-bold text-slate-900 mb-5">Feature Coverage Matrix</h3>
            <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-800">
                    <th className="text-left px-5 py-3 text-white font-semibold">Feature</th>
                    {providers.map((p) => (
                      <th key={p.name} className="text-center px-3 py-3 text-white font-semibold text-xs">{p.name.split(' ')[0]}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {featureMatrix.map((feature, i) => (
                    <tr key={feature.key} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                      <td className="px-5 py-3 text-slate-700 font-medium">{feature.label}</td>
                      {providers.map((p) => {
                        const hasFeature = providerFeatureData[p.name]?.[feature.key];
                        return (
                          <td key={p.name} className="text-center px-3 py-3">
                            {hasFeature
                              ? <span className="text-green-600 font-bold">✓</span>
                              : <span className="text-slate-300">✗</span>
                            }
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 sm:p-8 text-center">
            <div className="text-amber-700 font-semibold text-sm mb-2">Important Note</div>
            <p className="text-slate-700 max-w-2xl mx-auto">Provider ratings, features and claim limits shown are general guides based on publicly available information. Actual premiums vary by vehicle make, model, age, mileage and cover level. Click through to any provider above to get a quote directly from them.</p>
          </div>
        </div>
      </section>

      {/* Why compare section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-6">Why Compare Providers?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                icon: '💸',
                title: 'Premiums vary significantly',
                text: 'For the same vehicle, premiums can differ by hundreds of dollars between providers. Comparing is the only way to ensure you\'re not overpaying.',
              },
              {
                icon: '📋',
                title: 'Coverage scope differs',
                text: 'What\'s covered varies widely. One provider may include EV battery cover; another may exclude it entirely. Claims limits range from $5,000 to $15,000+.',
              },
              {
                icon: '🔧',
                title: 'Repairer networks matter',
                text: 'Some providers require you to use their authorised repairer network. If the nearest repairer is far from home, this matters a lot in an emergency.',
              },
              {
                icon: '⚡',
                title: 'EV owners need specialist cover',
                text: 'Battery pack replacement can cost $20,000+. Only some providers cover EV batteries — and eligibility conditions vary. Don\'t assume — check before you buy.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white border border-slate-200 rounded-xl p-5 flex gap-4">
                <div className="text-2xl flex-shrink-0 mt-0.5">{item.icon}</div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
