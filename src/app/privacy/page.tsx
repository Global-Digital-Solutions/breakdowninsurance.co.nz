import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | BreakdownInsurance.co.nz',
  description: 'Privacy Policy for BreakdownInsurance.co.nz — how we collect, use and protect your personal information in accordance with the Privacy Act 2020.',
  alternates: { canonical: 'https://breakdowninsurance.co.nz/privacy' },
};

export default function PrivacyPage() {
  return (
    <>
      <div className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 to-slate-900/30" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Privacy Policy</h1>
          <p className="text-xl text-slate-300">How we collect, use and protect your personal information.</p>
        </div>
      </div>

      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-slate-500 text-sm mb-10">Last updated: May 2026</p>

          <div className="space-y-10 text-slate-700 leading-relaxed">

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">1. Introduction</h2>
              <p>BreakdownInsurance.co.nz (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is operated by Cover4You as an independent mechanical breakdown insurance (MBI) comparison and information service. We are not an insurer, underwriter, or licensed financial adviser. This Privacy Policy explains how we collect, use, store and protect your personal information in accordance with New Zealand&apos;s Privacy Act 2020.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">2. Information We Collect</h2>
              <p className="mb-3">We collect a limited amount of information in the course of operating this website:</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li><strong>Email enquiries:</strong> If you contact us directly at hello@cover4you.co.nz, we collect your name and email address to respond to your enquiry.</li>
                <li><strong>Analytics data:</strong> We collect standard website usage data including page views, referral sources, device type and approximate location (country/region level). This data is aggregated and does not identify you personally.</li>
                <li><strong>Cookies:</strong> Our website uses cookies to understand how visitors use the site. You can disable cookies in your browser settings, though some site functionality may be affected.</li>
              </ul>
              <p className="mt-3">BreakdownInsurance.co.nz does not operate a quote request form. When you click through to a provider&apos;s website, that provider&apos;s own privacy policy applies to any information you provide to them.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">3. How We Use Your Information</h2>
              <p className="mb-3">We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li>Respond to email enquiries you send to us</li>
                <li>Improve the content, structure and usability of our website</li>
                <li>Understand how visitors find and use our comparison tools</li>
                <li>Monitor site performance and resolve technical issues</li>
              </ul>
              <p className="mt-3">We do not use your information for unsolicited marketing, and we do not sell your personal information to any third party.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">4. Referral Links and Third-Party Sites</h2>
              <p>Our website contains links to external breakdown insurance provider websites. When you click these links, you leave BreakdownInsurance.co.nz and are subject to the privacy policies of those third-party sites. We are not responsible for the privacy practices of external websites. Cover4You may receive a referral fee where your visit results in a policy purchase — this is disclosed in our <Link href="/disclaimer" className="text-amber-700 underline hover:text-amber-800">Disclaimer</Link>.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">5. Data Security</h2>
              <p>We use industry-standard SSL/TLS encryption to protect data transmitted through our website. Email enquiries sent to hello@cover4you.co.nz are handled securely. We take reasonable steps to protect any personal information we hold, but no internet transmission is completely secure and we cannot guarantee absolute security.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">6. Data Retention</h2>
              <p>We retain email enquiry data only for as long as necessary to respond to and resolve your enquiry, and for a reasonable period thereafter for record-keeping purposes. Analytics data is retained in aggregated form. You may request deletion of any personal information we hold about you at any time.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">7. Your Rights</h2>
              <p>Under the Privacy Act 2020, you have the right to access personal information we hold about you, to request correction of that information if it is inaccurate, and to request deletion where appropriate. To exercise any of these rights, contact us at <a href="mailto:hello@cover4you.co.nz" className="text-amber-700 underline hover:text-amber-800">hello@cover4you.co.nz</a>. We will respond to your request within a reasonable timeframe.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">8. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time to reflect changes in our practices or in New Zealand privacy law. The date of the most recent update is shown at the top of this page. Continued use of this website after any changes constitutes your acceptance of the updated policy.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">9. Contact</h2>
              <p>For privacy enquiries or to exercise your rights under the Privacy Act 2020, contact us at <a href="mailto:hello@cover4you.co.nz" className="text-amber-700 underline hover:text-amber-800">hello@cover4you.co.nz</a>. If you are not satisfied with our response, you may contact the <a href="https://www.privacy.org.nz" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-800">Office of the Privacy Commissioner</a>.</p>
            </div>

          </div>

          <div className="mt-12 bg-amber-50 border border-amber-200 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold text-slate-900 mb-3">Compare Breakdown Insurance Providers</h3>
            <p className="text-slate-600 mb-6">See 6 providers side by side and click through to get a quote directly with the one that suits you.</p>
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
