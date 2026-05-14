import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us | BreakdownInsurance.co.nz | Independent Breakdown Insurance Comparison',
  description: 'About BreakdownInsurance.co.nz — independent mechanical breakdown insurance comparison and information service.',
  alternates: { canonical: 'https://breakdowninsurance.co.nz/about' },
};

export default function AboutPage() {
  return (
    <>
      <div className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 to-slate-900/30" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">About BreakdownInsurance.co.nz</h1>
          <p className="text-xl text-slate-300">Independent Mechanical Breakdown Insurance comparison and information.</p>
        </div>
      </div>

      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Who We Are</h2>
            <p className="text-slate-600 leading-relaxed mb-6">BreakdownInsurance.co.nz is operated by Cover4You, a Kiwi owned company focused on helping vehicle owners understand and compare Mechanical Breakdown Insurance (MBI) products. We are an independent information and comparison service — not an insurer or underwriter.</p>
            <p className="text-slate-600 leading-relaxed mb-8">We believe the breakdown insurance market lacks transparency and that independent, jargon-free information is genuinely valuable for vehicle owners. Our comparison tools give you a clear, unbiased view of the leading providers so you can make an informed choice.</p>

            <h2 className="text-3xl font-extrabold text-slate-900 mb-6">What We Do</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {[
                { icon: '📚', title: 'Independent Information', text: 'We publish detailed, unbiased guides about breakdown insurance products, providers, and coverage options to help you make informed decisions.' },
                { icon: '🔍', title: 'Provider Comparison', text: 'We compare leading breakdown insurance providers across coverage breadth, claim limits, EV cover, pricing, and additional benefits.' },
                { icon: '🔗', title: 'Direct Provider Access', text: 'Each provider listed on our comparison table links directly to their own website so you can get a quote straight from the source.' },
                { icon: '🎓', title: 'Consumer Education', text: 'We explain breakdown insurance in plain English — no jargon, no misleading claims — so you understand exactly what you\'re buying.' },
              ].map((item) => (
                <div key={item.title} className="bg-slate-50 rounded-2xl p-6">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Our Commitment</h2>
            <p className="text-slate-600 leading-relaxed mb-4">We are committed to providing accurate, up-to-date information about breakdown insurance. We do not accept advertising from specific providers in exchange for favourable coverage, and our editorial content reflects our genuine assessment of the market.</p>
            <p className="text-slate-600 leading-relaxed mb-8">Our comparison links directly to provider websites. Cover4You may receive referral fees where applicable — this is disclosed in our <a href="/disclaimer" className="text-amber-700 underline">disclaimer</a>. Our referral arrangements do not influence the comparisons or information we publish — all providers are presented fairly.</p>

            <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Regulatory Framework</h2>
            <p className="text-slate-600 leading-relaxed mb-4">The breakdown insurance products we reference are insurance products regulated by the <a href="https://www.rbnz.govt.nz" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline">Reserve Bank of New Zealand (RBNZ)</a> and the <a href="https://www.fma.govt.nz" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline">Financial Markets Authority (FMA)</a>. The <a href="https://www.icnz.org.nz" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline">Insurance Council of New Zealand (ICNZ)</a> provides industry guidelines that reputable providers adhere to.</p>
          </div>

          <div className="mt-10 bg-amber-50 border border-amber-200 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold text-slate-900 mb-3">Compare Breakdown Insurance Providers</h3>
            <p className="text-slate-600 mb-6">See 6 providers side by side — click through to get a quote directly with the one that suits you.</p>
            <Link href="/compare" className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:from-amber-600 hover:to-orange-700 transition-all">
              View Comparison
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
