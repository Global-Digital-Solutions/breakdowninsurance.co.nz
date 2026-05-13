import type { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '@/data/blog-posts';

export const metadata: Metadata = {
  title: 'Breakdown Insurance Blog & Guides | Mechanical Breakdown Insurance NZ | BreakdownInsurance.co.nz',
  description: 'Expert guides and articles about Mechanical Breakdown Insurance. Learn about cover options, costs, claims, and how to choose the right policy.',
  alternates: { canonical: 'https://breakdowninsurance.co.nz/blog' },
};

export default function BlogPage() {
  return (
    <>
      <div className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1632823471565-1ecdf5c6da2f?w=1600&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 to-slate-900/30" />
        <div className="relative max-w-4xl mx-auto text-center z-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Breakdown Insurance Guides & Insights</h1>
          <p className="text-xl text-slate-300">Expert articles to help you understand and choose the right Mechanical Breakdown Insurance.</p>
        </div>
      </div>

      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-amber-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col">
                <div className="relative h-48 overflow-hidden bg-slate-200">
                  <div
                    className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                    style={{ backgroundImage: `url(${post.image})` }}
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">{post.category}</span>
                    <span className="text-xs text-slate-400">{post.readTime}</span>
                  </div>
                  <h2 className="font-bold text-slate-900 text-lg mb-3 leading-snug group-hover:text-amber-700 transition-colors flex-1">{post.title}</h2>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-slate-400 pt-3 border-t border-slate-100">
                    <span>{post.author}</span>
                    <span>{new Date(post.date).toLocaleDateString('en-NZ', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">Ready to compare breakdown insurance cover? See all leading providers side by side.</p>
            <Link href="/compare" className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:from-amber-600 hover:to-orange-700 transition-all">
              Compare Providers →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
