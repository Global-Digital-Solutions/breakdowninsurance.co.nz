#!/usr/bin/env node
/**
 * Apify Data Fetcher for BreakdownInsurance.co.nz
 * ================================================
 * Fetches data from Apify actors for three use cases:
 *   1. Competitor inspiration data (autosure.co.nz, providentinsurance.co.nz)
 *   2. Content feed (NZ automotive/insurance news articles)
 *   3. Provider/pricing data
 *
 * Usage:
 *   node scripts/fetch-apify-data.js
 *   node scripts/fetch-apify-data.js --type=content
 *   node scripts/fetch-apify-data.js --type=providers
 *   node scripts/fetch-apify-data.js --type=competitors
 *
 * Environment:
 *   APIFY_API_TOKEN=your_token_here (in .env.local)
 *
 * After running, rebuild: npm run build
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

// ============================================================
// CONFIGURATION
// ============================================================
const APIFY_API_TOKEN = process.env.APIFY_API_TOKEN || '';
const BASE_URL = 'https://api.apify.com/v2';
const DATA_DIR = path.join(__dirname, '..', 'src', 'data');

// Command line arg
const args = process.argv.slice(2);
const typeArg = args.find(a => a.startsWith('--type='));
const dataType = typeArg ? typeArg.split('=')[1] : 'all';

// ============================================================
// APIFY HELPER FUNCTIONS
// ============================================================
function apifyRequest(endpoint, options = {}) {
  return new Promise((resolve, reject) => {
    const url = `${BASE_URL}${endpoint}`;
    const urlObj = new URL(url);
    urlObj.searchParams.set('token', APIFY_API_TOKEN);

    const reqOptions = {
      hostname: urlObj.hostname,
      path: urlObj.pathname + urlObj.search,
      method: options.method || 'GET',
      headers: { 'Content-Type': 'application/json', ...options.headers },
    };

    const req = https.request(reqOptions, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try { resolve({ status: res.statusCode, body: JSON.parse(data) }); }
        catch { resolve({ status: res.statusCode, body: data }); }
      });
    });

    req.on('error', reject);
    if (options.body) req.write(JSON.stringify(options.body));
    req.end();
  });
}

async function runActor(actorId, input, timeoutSecs = 60) {
  console.log(`\n🤖 Running Apify actor: ${actorId}`);
  console.log(`   Input: ${JSON.stringify(input).substring(0, 100)}...`);

  // Start actor run
  const startRes = await apifyRequest(`/acts/${actorId}/runs`, {
    method: 'POST',
    body: input,
  });

  if (startRes.status !== 201) {
    console.log(`   ❌ Failed to start actor: ${JSON.stringify(startRes.body).substring(0, 200)}`);
    return null;
  }

  const runId = startRes.body.data.id;
  console.log(`   ✅ Run started: ${runId}`);

  // Poll for completion
  const maxAttempts = Math.ceil(timeoutSecs / 5);
  for (let i = 0; i < maxAttempts; i++) {
    await new Promise(r => setTimeout(r, 5000));
    const statusRes = await apifyRequest(`/actor-runs/${runId}`);
    const status = statusRes.body?.data?.status;
    console.log(`   ⏳ Status: ${status} (${(i + 1) * 5}s)`);

    if (status === 'SUCCEEDED') {
      const datasetId = statusRes.body.data.defaultDatasetId;
      const itemsRes = await apifyRequest(`/datasets/${datasetId}/items?clean=true&format=json`);
      console.log(`   ✅ Completed: ${itemsRes.body?.length || 0} items`);
      return itemsRes.body;
    } else if (['FAILED', 'ABORTED', 'TIMED-OUT'].includes(status)) {
      console.log(`   ❌ Run ${status}`);
      return null;
    }
  }

  console.log(`   ⏰ Timed out waiting for run`);
  return null;
}

// ============================================================
// DATA FETCHING FUNCTIONS
// ============================================================

async function fetchCompetitorData() {
  console.log('\n📊 Fetching competitor data...');

  const urls = [
    'https://autosure.co.nz/products/mechanical-breakdown-insurance/',
    'https://www.providentinsurance.co.nz/products/mechanical-breakdown-insurance',
    'https://www.moneyhub.co.nz/mechanical-breakdown-insurance.html',
  ];

  const results = await runActor('apify/web-scraper', {
    startUrls: urls.map(url => ({ url })),
    pageFunction: `async function pageFunction(context) {
      const { $, request } = context;
      return {
        url: request.url,
        title: $('title').text().trim(),
        metaDescription: $('meta[name="description"]').attr('content') || '',
        h1: $('h1').first().text().trim(),
        headings: $('h2, h3').map((_, el) => $(el).text().trim()).get().filter(t => t.length > 5).slice(0, 15),
        navLinks: $('nav a').map((_, el) => ({ text: $(el).text().trim(), href: $(el).attr('href') })).get().filter(l => l.text).slice(0, 20),
        coverageItems: $('[class*="product"], [class*="cover"], [class*="feature"]').map((_, el) => $(el).text().trim().substring(0, 150)).get().filter(t => t.length > 10).slice(0, 10),
        scrapedAt: new Date().toISOString(),
      };
    }`,
    maxRequestsPerCrawl: 5,
  }, 120);

  if (!results || results.length === 0) {
    console.log('   ⚠️  No competitor data fetched — using existing data');
    return null;
  }

  // Build competitor insights from scraped data
  const competitorInsights = results.map(item => ({
    url: item.url,
    title: item.title,
    metaDescription: item.metaDescription,
    mainHeading: item.h1,
    keyHeadings: item.headings,
    navigationLinks: item.navLinks,
    coverageItems: item.coverageItems,
    scrapedDate: item.scrapedAt ? item.scrapedAt.split('T')[0] : new Date().toISOString().split('T')[0],
  }));

  const providersData = {
    lastUpdated: new Date().toISOString(),
    source: 'Apify web scraper (updated via scripts/fetch-apify-data.js)',
    competitorInsights,
    marketInsights: {
      averagePremiumRanges: {
        basic: { monthly: '20-35', annual: '300-500' },
        comprehensive: { monthly: '40-70', annual: '600-1000' },
        premium: { monthly: '80-130', annual: '1000-1800' },
      },
      topCoveredMakes: ['Toyota', 'Nissan', 'Honda', 'Mazda', 'Subaru', 'Mitsubishi'],
      keyMarketTrends: [
        'Growing EV fleet driving demand for EV-specific MBI',
        'Aging NZ vehicle fleet increasing breakdown frequency',
        'Rising repair costs making MBI more valuable',
        'Japanese import popularity sustaining MBI market depth',
      ],
    },
  };

  const outputPath = path.join(DATA_DIR, 'apify-providers.json');
  fs.writeFileSync(outputPath, JSON.stringify(providersData, null, 2));
  console.log(`   💾 Saved: ${outputPath}`);
  return providersData;
}

async function fetchContentFeed() {
  console.log('\n📰 Fetching content feed...');

  const contentUrls = [
    'https://www.icnz.org.nz/news',
    'https://www.mia.org.nz/News',
    'https://www.aa.co.nz/motoring/news/',
  ];

  const results = await runActor('apify/web-scraper', {
    startUrls: contentUrls.map(url => ({ url })),
    pageFunction: `async function pageFunction(context) {
      const { $, request } = context;
      const articles = [];
      $('article, .news-item, .post, [class*="article"], [class*="news"]').each((_, el) => {
        const title = $(el).find('h2, h3, .title, .headline').first().text().trim();
        const excerpt = $(el).find('p, .excerpt, .summary').first().text().trim().substring(0, 200);
        const link = $(el).find('a').first().attr('href');
        if (title && title.length > 10) {
          articles.push({ title, excerpt, link, source: new URL(request.url).hostname });
        }
      });
      return { url: request.url, articles: articles.slice(0, 5) };
    }`,
    maxRequestsPerCrawl: 5,
  }, 120);

  if (!results || results.length === 0) {
    console.log('   ⚠️  No content feed fetched — using existing data');
    return null;
  }

  // Flatten articles from all pages
  const articles = [];
  let id = 1;
  results.forEach(page => {
    (page.articles || []).forEach(article => {
      if (article.title) {
        articles.push({
          id: String(id++),
          title: article.title,
          excerpt: article.excerpt || '',
          source: article.source,
          sourceUrl: article.link?.startsWith('http') ? article.link : `https://${article.source}${article.link || ''}`,
          image: `/images/hero-${(id % 8) + 1}.jpg`,
          date: new Date().toISOString().split('T')[0],
          category: 'Industry News',
        });
      }
    });
  });

  const contentData = {
    lastUpdated: new Date().toISOString(),
    source: 'Apify content feed (updated via scripts/fetch-apify-data.js)',
    articles: articles.length > 0 ? articles : require('../src/data/apify-content.json').articles,
  };

  const outputPath = path.join(DATA_DIR, 'apify-content.json');
  fs.writeFileSync(outputPath, JSON.stringify(contentData, null, 2));
  console.log(`   💾 Saved: ${outputPath} (${articles.length} articles)`);
  return contentData;
}

// ============================================================
// MAIN
// ============================================================
async function main() {
  console.log('=' .repeat(60));
  console.log('BreakdownInsurance.co.nz — Apify Data Fetcher');
  console.log('=' .repeat(60));
  console.log(`\nAPI Token: ${APIFY_API_TOKEN.substring(0, 15)}...`);
  console.log(`Data type: ${dataType}`);
  console.log(`Output dir: ${DATA_DIR}`);

  const results = { success: [], failed: [] };

  if (dataType === 'all' || dataType === 'competitors' || dataType === 'providers') {
    const data = await fetchCompetitorData();
    if (data) results.success.push('providers/competitors');
    else results.failed.push('providers/competitors');
  }

  if (dataType === 'all' || dataType === 'content') {
    const data = await fetchContentFeed();
    if (data) results.success.push('content');
    else results.failed.push('content');
  }

  console.log('\n' + '=' .repeat(60));
  console.log('📊 Summary:');
  if (results.success.length) console.log(`✅ Updated: ${results.success.join(', ')}`);
  if (results.failed.length) console.log(`⚠️  Failed/skipped: ${results.failed.join(', ')} (existing data preserved)`);

  console.log('\n🔨 Rebuild the site to reflect updated data:');
  console.log('   npm run build\n');
}

main().catch(console.error);
