import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Heading to Your Provider | BreakdownInsurance.co.nz',
  description: 'You\'re being directed to your chosen breakdown insurance provider. Compare other providers or explore our guides while you\'re here.',
  robots: { index: false },
};

export default function ThankYouPage() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-4 py-20 bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-lg mx-auto text-center">
        <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-amber-500/30">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">You&apos;re on Your Way</h1>
        <p className="text-lg text-slate-600 mb-3">You should now be heading directly to your chosen provider&apos;s website to get an accurate quote for your specific vehicle.</p>
        <p className="text-slate-500 mb-8">Quotes come straight from the provider — no middlemen, no delays.</p>

        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-8 text-left">
          <h3 className="font-bold text-slate-800 mb-2">What to have ready</h3>
          <ul className="space-y-2 text-sm text-slate-600">
            <li className="flex items-start gap-2"><span className="text-amber-500 font-bold mt-0.5">1.</span> Vehicle registration plate or VIN</li>
            <li className="flex items-start gap-2"><span className="text-amber-500 font-bold mt-0.5">2.</span> Current odometer reading</li>
            <li className="flex items-start gap-2"><span className="text-amber-500 font-bold mt-0.5">3.</span> Vehicle make, model, and year</li>
            <li className="flex items-start gap-2"><span className="text-amber-500 font-bold mt-0.5">4.</span> Service history documentation if available</li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/compare"
            className="bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold px-6 py-3 rounded-xl shadow-md hover:from-amber-600 hover:to-orange-700 transition-all"
          >
            Back to Comparison
          </Link>
          <Link
            href="/blog"
            className="border border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Read Breakdown Insurance Guides
          </Link>
        </div>
      </div>
    </section>
  );
}
