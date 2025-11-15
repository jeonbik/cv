#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const SCHOLAR_URL = process.env.SCHOLAR_URL || 'https://scholar.google.com/citations?user=C4B0q1IAAAAJ&hl=en&oi=ao';
const MAX_PAGES = parseInt(process.env.MAX_PAGES || '20', 10);

function normalizeEntry(e) {
  return {
    title: e.title || '',
    authors: e.authors || '',
    journal: e.journal || '',
    year: e.year || '',
    doi: '',
    url: e.url || '',
  };
}

async function scrape() {
  console.log(`Opening Scholar profile: ${SCHOLAR_URL}`);
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ userAgent: 'Mozilla/5.0 (compatible; cv-updater/1.0; +mailto:general@jeonbik.com)' });
  await page.goto(SCHOLAR_URL, { waitUntil: 'domcontentloaded' });

  const results = [];
  let pageIndex = 0;
  while (pageIndex < MAX_PAGES) {
    pageIndex += 1;
    console.log(`Scraping page ${pageIndex}`);

    await page.waitForSelector('.gsc_a_tr', { timeout: 5000 }).catch(() => {});

    const pagePubs = await page.$$eval('.gsc_a_tr', (rows) => {
      return rows.map((row) => {
        const titleEl = row.querySelector('.gsc_a_t a');
        const title = titleEl ? titleEl.innerText.trim() : '';
        const authorsEls = row.querySelectorAll('.gsc_a_t .gs_gray');
        const authors = authorsEls[0] ? authorsEls[0].innerText.trim() : '';
        const journal = authorsEls[1] ? authorsEls[1].innerText.trim() : '';
        const yearEl = row.querySelector('.gsc_a_y .gsc_a_y');
        const year = yearEl ? yearEl.innerText.trim() : (row.querySelector('.gsc_a_y span') ? row.querySelector('.gsc_a_y span').innerText.trim() : '');
        const url = titleEl ? titleEl.href : '';
        return { title, authors, journal, year, url };
      });
    });

    for (const p of pagePubs) {
      if (p.title) results.push(p);
    }

    // Check if 'next' button is disabled
    const nextDisabled = await page.$eval('#gsc_bpf_next', (btn) => {
      if (!btn) return true;
      if (btn.classList.contains('gs_dis')) return true;
      if (btn.getAttribute('aria-disabled') === 'true') return true;
      return btn.disabled || false;
    }).catch(() => true);

    if (nextDisabled) break;

    // Click next and wait a bit for items to update
    await Promise.all([page.click('#gsc_bpf_next'), page.waitForTimeout(1200)]);
  }

  await browser.close();

  // Deduplicate by title
  const dedup = [];
  const seen = new Set();
  for (const r of results) {
    const key = (r.title || '').toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    dedup.push(normalizeEntry(r));
  }

  const outPath = path.join(__dirname, '..', 'src', 'data', 'publications.json');
  fs.writeFileSync(outPath, JSON.stringify(dedup, null, 2) + '\n');
  console.log(`Wrote ${dedup.length} publications to ${outPath}`);
}

scrape().catch((err) => {
  console.error(err);
  process.exit(1);
});
