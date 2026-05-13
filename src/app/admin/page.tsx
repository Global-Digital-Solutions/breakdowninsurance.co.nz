'use client';
import { useState } from 'react';
import apifyContent from '@/data/apify-content.json';
import apifyProviders from '@/data/apify-providers.json';

export default function AdminPage() {
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleRefresh = async (dataType: string) => {
    setLoading(true);
    setStatus(null);
    try {
      setStatus(`⚠️ To refresh ${dataType} data, run the Apify script locally:\n\nnode scripts/fetch-apify-data.js --type=${dataType}\n\nThis will update src/data/apify-${dataType}.json and rebuild the site.`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-6">
          <h1 className="text-2xl font-bold text-slate-900 mb-2">BreakdownInsurance.co.nz Admin</h1>
          <p className="text-slate-600 text-sm mb-6">Manage Apify data refresh for the breakdown insurance site. Data is stored in JSON files and compiled into the static site build.</p>

          <div className="space-y-4">
            {[
              { key: 'content', label: 'Industry News Content Feed', description: 'Refreshes the news articles displayed on the home page and blog pages.', lastUpdated: apifyContent.lastUpdated },
              { key: 'providers', label: 'Provider & Competitor Data', description: 'Updates competitor insights and market pricing data used in comparisons.', lastUpdated: apifyProviders.lastUpdated },
            ].map((item) => (
              <div key={item.key} className="border border-slate-200 rounded-xl p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-slate-900">{item.label}</h3>
                    <p className="text-sm text-slate-500 mt-1">{item.description}</p>
                    <p className="text-xs text-slate-400 mt-2">Last updated: {new Date(item.lastUpdated).toLocaleString('en-NZ')}</p>
                  </div>
                  <button onClick={() => handleRefresh(item.key)} disabled={loading} className="flex-shrink-0 bg-amber-500 hover:bg-amber-600 disabled:opacity-50 text-white font-semibold px-4 py-2 rounded-lg text-sm transition-colors">
                    {loading ? 'Processing...' : 'Refresh'}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {status && (
            <div className="mt-6 bg-slate-900 rounded-xl p-4">
              <pre className="text-amber-400 text-sm whitespace-pre-wrap font-mono">{status}</pre>
            </div>
          )}
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
          <h2 className="text-lg font-bold text-slate-900 mb-4">Manual Data Refresh Instructions</h2>
          <div className="space-y-3 text-sm text-slate-600">
            <p><strong>1.</strong> Ensure <code className="bg-slate-100 px-1.5 py-0.5 rounded">APIFY_API_TOKEN</code> is set in your <code className="bg-slate-100 px-1.5 py-0.5 rounded">.env.local</code> file.</p>
            <p><strong>2.</strong> Run: <code className="bg-slate-100 px-1.5 py-0.5 rounded">node scripts/fetch-apify-data.js</code></p>
            <p><strong>3.</strong> This updates the JSON data files in <code className="bg-slate-100 px-1.5 py-0.5 rounded">src/data/</code></p>
            <p><strong>4.</strong> Rebuild and deploy: <code className="bg-slate-100 px-1.5 py-0.5 rounded">npm run build</code> then push to GitHub</p>
          </div>
          <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p className="text-xs text-amber-800"><strong>Note:</strong> This is a static site. Real-time data refresh requires a rebuild and redeployment. For automated refreshes, set up a GitHub Actions scheduled workflow using the fetch-apify-data.js script.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
