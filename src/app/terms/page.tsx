import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Use | BreakdownInsurance.co.nz',
  description: 'Terms of Use for BreakdownInsurance.co.nz — the rules governing your use of our independent breakdown insurance comparison service.',
  alternates: { canonical: 'https://breakdowninsurance.co.nz/terms' },
};

export default function TermsPage() {
  return (
    <>
      <div className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1600&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 to-slate-900/30" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Terms of Use</h1>
          <p className="text-xl text-slate-300">The terms governing your use of this independent comparison service.</p>
        </div>
      </div>

      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-slate-500 text-sm mb-10">Last updated: May 2026</p>

          <div className="space-y-10 text-slate-700 leading-relaxed">

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">1. Acceptance of Terms</h2>
              <p>By accessing and using BreakdownInsurance.co.nz, you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use this website. These terms apply to all visitors and users of the site.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">2. Nature of Service</h2>
              <p>BreakdownInsurance.co.nz is an independent information and comparison service operated by Cover4You. We are not an insurance company, underwriter, or licensed financial adviser under the Financial Markets Conduct Act 2013. Our service is limited to:</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700 mt-3">
                <li>Publishing general information and guides about mechanical breakdown insurance (MBI) in New Zealand</li>
                <li>Comparing MBI providers side by side based on publicly available information</li>
                <li>Linking users directly to provider websites where they can obtain a quote</li>
              </ul>
              <p className="mt-3">Nothing on this website constitutes financial advice, insurance advice, or a recommendation to purchase any specific product.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">3. Referral Links and Commercial Relationships</h2>
              <p>This website contains links to third-party breakdown insurance provider websites. Cover4You may receive referral fees from providers where your visit results in a policy purchase. These commercial relationships do not influence how providers are compared or presented — all providers are assessed against the same criteria. Referral arrangements are disclosed in our <Link href="/disclaimer" className="text-amber-700 underline hover:text-amber-800">Disclaimer</Link>.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">4. Accuracy of Information</h2>
              <p>We make reasonable efforts to maintain accurate, current information on this website. However, MBI product details, pricing, coverage terms, and provider availability are subject to change without notice. Cover4You does not guarantee that all information is complete, accurate, or up to date. Always confirm current details directly with your chosen provider before purchasing any product.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">5. No Financial Advice</h2>
              <p>The information on this website is general in nature and does not take into account your individual circumstances, financial situation, needs, or objectives. It should not be relied upon as financial advice. You should always seek independent professional advice before purchasing any financial or insurance product. A licensed financial adviser or insurance broker can provide personalised recommendations.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">6. Third-Party Websites</h2>
              <p>When you click through to a provider&apos;s website, you leave BreakdownInsurance.co.nz. Cover4You has no control over, and accepts no responsibility for, the content, privacy practices, or terms of any third-party website. Links are provided for convenience only and do not constitute endorsement of any provider&apos;s products, services, or terms.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">7. Limitation of Liability</h2>
              <p>To the fullest extent permitted by New Zealand law, Cover4You is not liable for any direct, indirect, incidental, or consequential loss or damage arising from your use of this website, your reliance on information contained on it, or your purchase of any product from a provider to which we link. This website is provided &quot;as is&quot; without warranty of any kind.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">8. Intellectual Property</h2>
              <p>All original content on BreakdownInsurance.co.nz — including text, layout, graphics, and data compilations — is owned by or licensed to Cover4You. You may not reproduce, copy, or redistribute any content from this website without prior written permission. Provider names, logos, and trademarks are the property of their respective owners.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">9. Governing Law</h2>
              <p>These Terms of Use are governed by the laws of New Zealand. Any dispute arising from your use of this website is subject to the exclusive jurisdiction of the New Zealand courts.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">10. Changes to These Terms</h2>
              <p>We may update these Terms of Use from time to time. The date of the most recent revision is shown at the top of this page. Continued use of this website following any changes constitutes your acceptance of the updated terms. We encourage you to review this page periodically.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">11. Contact</h2>
              <p>If you have questions about these Terms of Use, contact us at <a href="mailto:hello@cover4you.co.nz" className="text-amber-700 underline hover:text-amber-800">hello@cover4you.co.nz</a>.</p>
            </div>

          </div>

          <div className="mt-12 bg-amber-50 border border-amber-200 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold text-slate-900 mb-3">Ready to Compare Providers?</h3>
            <p className="text-slate-600 mb-6">Use our independent comparison to find the right breakdown cover — then go straight to the provider to get a quote.</p>
            <Link href="/compare" className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:from-amber-600 hover:to-orange-700 transition-all">
              Compare Providers
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
