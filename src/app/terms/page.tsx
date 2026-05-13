import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Use | BreakdownInsurance.co.nz',
  description: 'Terms of Use for BreakdownInsurance.co.nz operated by Cover4You Limited.',
  alternates: { canonical: 'https://breakdowninsurance.co.nz/terms' },
};

export default function TermsPage() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-2">Terms of Use</h1>
        <p className="text-slate-500 text-sm mb-8">Last updated: April 2026</p>
        <div className="prose prose-slate max-w-none">
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing BreakdownInsurance.co.nz, you agree to these Terms of Use. If you do not agree, please do not use this website.</p>
          <h2>2. Nature of Service</h2>
          <p>BreakdownInsurance.co.nz is an independent information and lead generation service operated by Cover4You Limited. We are not an insurance company, underwriter, or licensed financial adviser. Information on this website is general in nature and does not constitute financial advice.</p>
          <h2>3. Quote Requests</h2>
          <p>By submitting a quote request, you consent to your contact details and vehicle information being shared with licensed NZ insurance brokers for the purpose of preparing breakdown insurance quotes. You are under no obligation to proceed with any quote provided.</p>
          <h2>4. Accuracy of Information</h2>
          <p>We strive to maintain accurate information on this website but cannot guarantee that all information is current or complete. breakdown insurance product details, pricing, and availability are subject to change without notice. Always confirm details directly with your insurer or broker.</p>
          <h2>5. Limitation of Liability</h2>
          <p>Cover4You Limited is not liable for any loss or damage arising from your use of this website or reliance on information contained herein. This website is provided &quot;as is&quot; without warranty of any kind.</p>
          <h2>6. Intellectual Property</h2>
          <p>All content on BreakdownInsurance.co.nz is owned by Cover4You Limited. You may not reproduce content without written permission.</p>
          <h2>7. Governing Law</h2>
          <p>These terms are governed by the laws of New Zealand. Disputes are subject to the exclusive jurisdiction of New Zealand courts.</p>
        </div>
        <Link href="/" className="inline-flex items-center gap-2 mt-8 text-amber-700 font-semibold hover:text-amber-800">← Back to Home</Link>
      </div>
    </section>
  );
}
