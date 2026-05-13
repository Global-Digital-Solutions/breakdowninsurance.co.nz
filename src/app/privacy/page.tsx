import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | BreakdownInsurance.co.nz',
  description: 'Privacy Policy for BreakdownInsurance.co.nz operated by Cover4You Limited.',
  alternates: { canonical: 'https://breakdowninsurance.co.nz/privacy' },
};

export default function PrivacyPage() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-2">Privacy Policy</h1>
        <p className="text-slate-500 text-sm mb-8">Last updated: April 2026</p>
        <div className="prose prose-slate max-w-none">
          <h2>1. Introduction</h2>
          <p>BreakdownInsurance.co.nz is operated by Cover4You Limited (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;). We are committed to protecting your personal information in accordance with New Zealand&apos;s Privacy Act 2020.</p>
          <h2>2. Information We Collect</h2>
          <p>When you submit a quote request through our website, we collect: your name, email address, phone number, and vehicle details you provide. We also collect standard web analytics data (page views, referral sources) through cookies.</p>
          <h2>3. How We Use Your Information</h2>
          <p>We use your information to: forward your quote request to licensed NZ insurance brokers, follow up on your enquiry if necessary, and improve our website and services. We do not sell your personal information to third parties.</p>
          <h2>4. Who We Share Your Information With</h2>
          <p>We share your submitted information with licensed NZ insurance brokers and advisors who will contact you with breakdown insurance options. These partners operate under their own privacy policies and are bound by New Zealand privacy law.</p>
          <h2>5. Data Security</h2>
          <p>We use industry-standard SSL encryption to protect data transmitted through our website. Quote request submissions are processed through FormSubmit.co, which uses 256-bit SSL encryption.</p>
          <h2>6. Your Rights</h2>
          <p>Under the Privacy Act 2020, you have the right to access personal information we hold about you and to request corrections. Contact us at hello@cover4you.co.nz to exercise these rights.</p>
          <h2>7. Contact</h2>
          <p>For privacy enquiries, contact us at <a href="mailto:hello@cover4you.co.nz" className="text-amber-700">hello@cover4you.co.nz</a>.</p>
        </div>
        <Link href="/" className="inline-flex items-center gap-2 mt-8 text-amber-700 font-semibold hover:text-amber-800">← Back to Home</Link>
      </div>
    </section>
  );
}
