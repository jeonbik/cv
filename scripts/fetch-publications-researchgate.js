#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const RG_URL = process.env.RESEARCHGATE_URL || '';
const RG_USERNAME = process.env.RG_USERNAME || '';
const RG_PASSWORD = process.env.RG_PASSWORD || '';
const MAX_PUBS = parseInt(process.env.MAX_PUBS || '200', 10);

function getMeta(page, name) {
  return page.$$eval(`meta[name="${name}"]`, (els) => els.map((e) => e.getAttribute('content'))).then((v) => v[0] || '');
}

async function scrape() {
  if (!RG_URL) {
    console.error('Please set RESEARCHGATE_URL env var to your profile, e.g. https://www.researchgate.net/profile/Your_Name');
    process.exit(1);
  }

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ userAgent: 'Mozilla/5.0 (compatible; cv-updater/1.0; +mailto:general@jeonbik.com)' });
  console.log(`Opening ResearchGate profile: ${RG_URL}`);

  // If credentials are provided, try to login first to access private/full lists
  if (RG_USERNAME && RG_PASSWORD) {
    console.log('Credentials provided — attempting programmatic login to ResearchGate');
    try {
      await page.goto('https://www.researchgate.net/login', { waitUntil: 'domcontentloaded' });

      // Try several common selector names for email/login input
      const emailSelectors = ['input[name="login"]', 'input[name="email"]', 'input[type="email"]', 'input#input-login'];
      const passSelectors = ['input[name="password"]', 'input[type="password"]', 'input#input-password'];

      let emailSel = null;
      for (const s of emailSelectors) {
        if (await page.$(s)) { emailSel = s; break; }
      }
      let passSel = null;
      for (const s of passSelectors) {
        if (await page.$(s)) { passSel = s; break; }
      }

      if (!emailSel || !passSel) {
        console.warn('Could not find login form selectors on ResearchGate login page — continuing without login');
      } else {
        await page.fill(emailSel, RG_USERNAME);
        await page.fill(passSel, RG_PASSWORD);
        // Try clicking the submit button
        const submitBtn = await page.$('button[type="submit"]') || await page.$('button[name="login"]');
        if (submitBtn) {
          await Promise.all([submitBtn.click(), page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 10000 }).catch(() => {})]);
        } else {
          // fallback: press Enter on password field
          await page.press(passSel, 'Enter').catch(() => {});
          await page.waitForTimeout(2000);
        }

        // Heuristic check: see if login succeeded by checking for profile avatar or logout link
        const loggedIn = await page.$('a[href*="/profile/"]') || await page.$('button[aria-label*="Profile"]') || await page.$('a[href*="logout"]');
        if (loggedIn) {
          console.log('Login appears successful');
        } else {
          console.warn('Login may have failed (no profile indicator found). Continuing to profile URL; if items are missing, try logging in manually in a browser and run the script again.');
        }
      }
    } catch (err) {
      console.warn('Login attempt failed:', err.message);
    }
  }

  await page.goto(RG_URL, { waitUntil: 'domcontentloaded' });

  // Collect candidate publication links (hrefs containing '/publication/')
  const links = await page.$$eval('a[href*="/publication/"]', (els) =>
    els.map((a) => a.href).filter(Boolean)
  );

  // Deduplicate and limit
  const uniq = Array.from(new Set(links)).slice(0, MAX_PUBS);
  console.log(`Found ${uniq.length} candidate publication links`);

  const pubs = [];
  for (const href of uniq) {
    try {
      await page.goto(href, { waitUntil: 'domcontentloaded' });
      // Try to extract citation meta tags which many RG pages include
      const title = (await getMeta(page, 'citation_title')) || (await page.title());
      const authors = (await getMeta(page, 'citation_author')) || '';
      const journal = (await getMeta(page, 'citation_journal_title')) || '';
      const year = (await getMeta(page, 'citation_publication_date')) || (await getMeta(page, 'citation_date')) || '';
      const doi = (await getMeta(page, 'citation_doi')) || '';
      const url = href;
      pubs.push({ title: title || '', authors, journal, year, doi, url });
      // small delay to be polite
      await page.waitForTimeout(400);
    } catch (err) {
      console.warn(`Failed to scrape ${href}: ${err.message}`);
    }
  }

  await browser.close();

  // Dedupe by DOI or title
  const dedup = [];
  const seen = new Set();
  for (const p of pubs) {
    const key = (p.doi || p.title || '').toLowerCase();
    if (!key) continue;
    if (seen.has(key)) continue;
    seen.add(key);
    dedup.push(p);
  }

  // Sort by year (newest first). Try to parse 4-digit year from `year` field.
  const parseYear = (y) => {
    if (!y) return 0;
    const s = String(y).trim();
    const m = s.match(/(\d{4})/);
    if (m) return parseInt(m[1], 10);
    const n = parseInt(s, 10);
    return Number.isFinite(n) ? n : 0;
  };

  dedup.sort((a, b) => parseYear(b.year) - parseYear(a.year));

  const outPath = path.join(__dirname, '..', 'src', 'data', 'publications.json');
  fs.writeFileSync(outPath, JSON.stringify(dedup, null, 2) + '\n');
  console.log(`Wrote ${dedup.length} publications to ${outPath}`);
}

scrape().catch((err) => { console.error(err); process.exit(1); });
