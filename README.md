# BreakdownInsurance.co.nz

New Zealand's independent Mechanical Breakdown Insurance (MBI) information and lead generation website. Built with Next.js + Tailwind CSS, statically exported and hosted on GitHub Pages.

Operated by **Cover4You Limited** — connecting NZ vehicle owners with licensed insurance advisors.

---

## Tech Stack

- **Framework**: Next.js 15 (App Router, static export)
- **Styling**: Tailwind CSS v4
- **Deployment**: GitHub Pages (orphan `gh-pages` branch)
- **Forms**: FormSubmit.co (no server required)
- **Data**: Apify-powered JSON data files (pre-compiled into static build)
- **Images**: Google Gemini Imagen API (local generation script)

---

## Project Structure

```
breakdowninsurance.co.nz/
├── public/
│   ├── images/          # Hero images (hero-1.jpg through hero-8.jpg)
│   ├── CNAME            # breakdowninsurance.co.nz
│   ├── robots.txt
│   └── llms.txt
├── scripts/
│   ├── generate-images.py     # Gemini Imagen image generator
│   └── fetch-apify-data.js    # Apify data fetcher
├── src/
│   ├── app/             # Next.js App Router pages
│   ├── components/      # Shared components
│   └── data/            # Static JSON/TS data files
├── .env.local           # API keys (not committed)
└── next.config.ts
```

---

## Local Development

### Prerequisites

- Node.js 18+
- Python 3.9+ (for image generation)

### Setup

```bash
# Install dependencies
npm install

# Copy env template and add your keys
cp .env.local.example .env.local
# Edit .env.local with your API keys

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Generating Hero Images

Hero images are **not committed** to the repository. Generate them locally using the Gemini Imagen API:

```bash
# Install Python dependencies
pip install requests pillow

# Set your Gemini API key
export GEMINI_API_KEY="your-key-here"

# Generate all 8 hero images
python3 scripts/generate-images.py
```

Images are saved to `public/images/` as 1920×1080 JPEG files. After generating, rebuild the site.

> **Note:** If you don't have a Gemini API key, add any 1920×1080 JPEG images named `hero-1.jpg` through `hero-8.jpg` to `public/images/` manually.

---

## Refreshing Apify Data

The site uses Apify to scrape competitor data and industry news. Data is stored in JSON files (`src/data/apify-*.json`) and compiled into the static build.

### Setup

Add your Apify API token to `.env.local`:
```
APIFY_API_TOKEN=your_token_here
```

### Refresh Commands

```bash
# Refresh all data
node scripts/fetch-apify-data.js

# Refresh only content feed
node scripts/fetch-apify-data.js --type=content

# Refresh only competitor/provider data
node scripts/fetch-apify-data.js --type=providers

# After refreshing, rebuild the site
npm run build
```

### What Gets Updated

| File | Contents |
|------|----------|
| `src/data/apify-content.json` | Industry news articles from ICNZ, MIA, AA |
| `src/data/apify-providers.json` | Competitor insights and market pricing data |

---

## Building for Production

```bash
npm run build
```

Output is generated in the `out/` directory.

---

## Deploying to GitHub Pages

### First-time Setup

1. Create a GitHub repository: `darinbutler/breakdowninsurance.co.nz`
2. In repository **Settings → Pages**, set source to **Deploy from branch** → `gh-pages`
3. Point your domain DNS to GitHub Pages (CNAME record)

### Deploy

```bash
# Build the site
npm run build

# Create a clean deploy directory
mkdir -p /tmp/gh-pages-deploy
cd /tmp/gh-pages-deploy
rm -rf *

# Copy build output
cp -r /path/to/breakdowninsurance.co.nz/out/. .
touch .nojekyll

# Push to gh-pages branch
git init
git checkout -b gh-pages
git add -A
git commit -m "Deploy: $(date +%Y-%m-%d)"
git remote add origin https://github.com/darinbutler/breakdowninsurance.co.nz.git
git push --force origin gh-pages
```

---

## Environment Variables

See `.env.local.example` for all required variables.

| Variable | Required | Description |
|----------|----------|-------------|
| `APIFY_API_TOKEN` | For data refresh | Apify API token for scraping |
| `GEMINI_API_KEY` | For image generation | Google Gemini API key |

---

## Pages & Routes

| Route | Description |
|-------|-------------|
| `/` | Home — MBI overview, providers, quote form |
| `/coverage` | All MBI coverage types |
| `/compare` | Provider comparison table |
| `/blog` | MBI guides and articles |
| `/blog/[slug]` | Individual blog post |
| `/faqs` | Frequently asked questions |
| `/contact` | Free quote request form |
| `/about` | About BreakdownInsurance.co.nz |
| `/types/[slug]` | Coverage type detail pages (6) |
| `/breakdown-insurance/[slug]` | SEO landing pages (18) |
| `/privacy` | Privacy Policy |
| `/terms` | Terms of Use |
| `/disclaimer` | Full Disclaimer |
| `/admin` | Data refresh admin UI |
| `/thank-you` | Form submission confirmation |

---

## Form Submissions

Quote requests are handled by [FormSubmit.co](https://formsubmit.co) — no server required. Submissions go to:

- **Primary**: hello@cover4you.co.nz
- **CC**: butlerdarin@gmail.com

To activate FormSubmit for the first time, submit the form once and click the confirmation email sent to hello@cover4you.co.nz.

---

## License

© Cover4You Limited. All rights reserved.
