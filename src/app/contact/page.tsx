import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact | BreakdownInsurance.co.nz',
  description: 'Contact BreakdownInsurance.co.nz — independent mechanical breakdown insurance comparison and information service.',
  alternates: { canonical: 'https://breakdowninsurance.co.nz/contact' },
};

export default function ContactPage() {
  return (
    <>
      <div className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1600&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 to-slate-900/30" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Contact</h1>
          <p className="text-xl text-slate-300">Questions about breakdown insurance? Start with our provider comparison or reach us by email.</p>
        </div>
      </div>

      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8">
              <div className="text-3xl mb-4">🔍</div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">Compare Providers</h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-5">The fastest way to find the right policy is to use our provider comparison. Compare 6 providers side by side and click through to get a quote directly with them.</p>
              <Link href="/compare" className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold px-6 py-3 rounded-xl transition-all hover:from-amber-600 hover:to-orange-700">
                Compare Providers →
              </Link>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
              <div className="text-3xl mb-4">📧</div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">Email Us</h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-5">For general enquiries about breakdown insurance coverage or our site, email us and we&apos;ll respond within 1–2 business days.</p>
              <a href="mailto:hello@cover4you.co.nz" className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-3 rounded-xl transition-all">
                hello@cover4you.co.nz
              </a>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
            <p className="text-sm text-slate-600 leading-relaxed">
              BreakdownInsurance.co.nz is an independent information and comparison service. We do not sell insurance directly. Use our comparison tool to find and compare policies from leading providers, then click through to get a quote with the provider of your choice.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
