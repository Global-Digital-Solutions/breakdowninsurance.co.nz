import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Disclaimer | BreakdownInsurance.co.nz',
  description: 'Full disclaimer for BreakdownInsurance.co.nz — operated by Cover4You Limited.',
  alternates: { canonical: 'https://breakdowninsurance.co.nz/disclaimer' },
};

export default function DisclaimerPage() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-2">Disclaimer</h1>
        <p className="text-slate-500 text-sm mb-8">Last updated: April 2026</p>
        <div className="prose prose-slate max-w-none">
          <h2>Nature of This Service</h2>
          <p>BreakdownInsurance.co.nz is operated by Cover4You Limited. We are an independent information and lead generation service. We are not an insurance company, underwriter, or licensed financial adviser under the Financial Markets Conduct Act 2013.</p>
          <h2>General Information Only</h2>
          <p>All information published on BreakdownInsurance.co.nz is general in nature and is intended for informational purposes only. Nothing on this website constitutes financial advice, insurance advice, or a recommendation to purchase any specific product. You should always seek independent professional advice before purchasing any insurance product.</p>
          <h2>Quote Referrals</h2>
          <p>When you submit a quote request through this website, your details are forwarded to licensed New Zealand insurance brokers and advisors who operate independently of Cover4You Limited. These brokers will contact you directly and are responsible for the advice and quotes they provide. Cover4You Limited may receive a referral fee when such introductions result in policy sales.</p>
          <h2>Accuracy of Information</h2>
          <p>While we endeavour to maintain accurate, current information on this website, Cover4You Limited makes no representations or warranties about the completeness, accuracy, or suitability of any information. breakdown insurance products, pricing, and terms change frequently. Always verify information directly with the insurer or broker before making any financial decision.</p>
          <h2>Regulatory Context</h2>
          <p>Breakdown Insurance products in New Zealand are regulated by the Reserve Bank of New Zealand (RBNZ) and the Financial Markets Authority (FMA). The Insurance Council of New Zealand (ICNZ) maintains industry standards. We recommend consulting these regulatory bodies&apos; resources when evaluating any insurance product.</p>
          <h2>Contact</h2>
          <p>For enquiries about this disclaimer, contact us at <a href="mailto:hello@cover4you.co.nz" className="text-amber-700">hello@cover4you.co.nz</a>.</p>
        </div>
        <Link href="/" className="inline-flex items-center gap-2 mt-8 text-amber-700 font-semibold hover:text-amber-800">← Back to Home</Link>
      </div>
    </section>
  );
}
