import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Disclaimer | BreakdownInsurance.co.nz',
  description: 'Full disclaimer for BreakdownInsurance.co.nz — an independent comparison and information service operated by Cover4You.',
  alternates: { canonical: 'https://breakdowninsurance.co.nz/disclaimer' },
};

export default function DisclaimerPage() {
  return (
    <>
      <div className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1493238792000-8113da705763?w=1600&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 to-slate-900/30" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Disclaimer</h1>
          <p className="text-xl text-slate-300">Important information about the nature and limitations of this service.</p>
        </div>
      </div>

      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-slate-500 text-sm mb-10">Last updated: May 2026</p>

          <div className="space-y-10 text-slate-700 leading-relaxed">

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Nature of This Service</h2>
              <p>BreakdownInsurance.co.nz is operated by Cover4You as an independent information and comparison service for mechanical breakdown insurance (MBI) in New Zealand. We are not an insurance company, underwriter, or licensed financial adviser. We do not sell insurance products directly. Our service is to compare leading MBI providers based on publicly available information and link users directly to those providers&apos; own websites.</p>
              <p className="mt-3">Cover4You is not regulated as a financial advice provider under the Financial Markets Conduct Act 2013. The insurance products we reference are offered by independently licensed insurers and underwriters who operate under their own regulatory obligations.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">General Information Only</h2>
              <p>All information published on BreakdownInsurance.co.nz — including provider comparisons, coverage descriptions, pricing guides, and educational content — is general in nature and is intended for informational purposes only. It does not take into account your individual financial situation, objectives, or needs, and does not constitute:</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700 mt-3">
                <li>Financial advice or a financial advice service</li>
                <li>Insurance advice or a recommendation to purchase any specific product</li>
                <li>A quotation, offer, or contract of insurance</li>
              </ul>
              <p className="mt-3">You should always seek independent professional advice from a licensed financial adviser or insurance broker before purchasing any insurance product. They can assess your specific circumstances and provide personalised recommendations.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Referral Arrangements</h2>
              <p>This website contains links to third-party breakdown insurance provider websites. Cover4You may receive referral fees from providers where a user&apos;s visit, originating from a link on this site, results in a policy sale. These referral arrangements help fund the operation of this comparison service.</p>
              <p className="mt-3">Our referral arrangements do not influence the content of our comparisons or the information we publish. All providers listed on our <Link href="/compare" className="text-amber-700 underline hover:text-amber-800">comparison page</Link> are assessed against the same criteria. No provider can pay to improve their ranking, alter their comparison data, or influence our editorial content.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Accuracy and Currency of Information</h2>
              <p>We make reasonable efforts to ensure the information on this website is accurate and current. However, breakdown insurance products, premiums, coverage terms, claim limits, and provider availability change frequently. Cover4You makes no representation or warranty as to the completeness, accuracy, or suitability of any information published on this site.</p>
              <p className="mt-3">Always verify current product details, pricing, and terms directly with the provider before making any purchasing decision. The comparison data on this site is a general guide only.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Regulatory Framework</h2>
              <p>Mechanical breakdown insurance products in New Zealand are regulated insurance contracts. The key regulatory bodies overseeing the insurance sector are:</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700 mt-3">
                <li><a href="https://www.rbnz.govt.nz" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-800">Reserve Bank of New Zealand (RBNZ)</a> — prudential regulation of insurers</li>
                <li><a href="https://www.fma.govt.nz" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-800">Financial Markets Authority (FMA)</a> — conduct regulation and licensing of financial advice providers</li>
                <li><a href="https://www.icnz.org.nz" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-800">Insurance Council of New Zealand (ICNZ)</a> — industry standards and the Fair Insurance Code</li>
              </ul>
              <p className="mt-3">We recommend consulting these bodies&apos; resources when evaluating any insurance product or provider.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Limitation of Liability</h2>
              <p>To the fullest extent permitted by New Zealand law, Cover4You accepts no liability for any loss or damage — direct, indirect, consequential or otherwise — arising from your use of this website, your reliance on any information published on it, or any transaction you enter into with a provider to whom we link. Use of this website is at your own risk.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Contact</h2>
              <p>For enquiries about this disclaimer or the nature of our service, contact us at <a href="mailto:hello@cover4you.co.nz" className="text-amber-700 underline hover:text-amber-800">hello@cover4you.co.nz</a>.</p>
            </div>

          </div>

          <div className="mt-12 bg-amber-50 border border-amber-200 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold text-slate-900 mb-3">Compare Providers Independently</h3>
            <p className="text-slate-600 mb-6">Our comparison is unbiased and ad-free. See all 6 providers side by side — click through to get your quote directly.</p>
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
