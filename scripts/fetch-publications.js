#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const fetch = globalThis.fetch || require('node-fetch');

// Configuration: set AUTHOR_NAME via env var or edit default below
const AUTHOR_NAME = process.env.AUTHOR_NAME || 'Bikram Khanal';
const AUTHOR_EMAIL = process.env.AUTHOR_EMAIL || '';
const AUTHOR_ORCID = process.env.AUTHOR_ORCID || '';
const ROWS = process.env.ROWS || 100;

async function fetchFromCrossref(authorName) {
  const query = encodeURIComponent(authorName);
  const url = `https://api.crossref.org/works?query.author=${query}&rows=${ROWS}`;
  const res = await fetch(url, { headers: { 'User-Agent': 'cv-updater (mailto:general@jeonbik.com)' } });
  if (!res.ok) throw new Error(`CrossRef fetch failed: ${res.status}`);
  const json = await res.json();
  return json.message.items || [];
}

function normalize(item) {
  const title = Array.isArray(item.title) ? item.title[0] : item.title || '';
  const authors = (item.author || []).map((a) => [a.given, a.family].filter(Boolean).join(' ')).join('; ');
  const journal = Array.isArray(item['container-title']) ? item['container-title'][0] : item['container-title'] || '';
  const year = item['published-print']?.['date-parts']?.[0]?.[0] || item['published-online']?.['date-parts']?.[0]?.[0] || item.created?.['date-parts']?.[0]?.[0] || '';
  const doi = item.DOI || '';
  const url = item.URL || (doi ? `https://doi.org/${doi}` : '');
  return { title, authors, journal, year, doi, url };
}

async function main() {
  console.log(`Fetching publications for: ${AUTHOR_NAME}`);
  const items = await fetchFromCrossref(AUTHOR_NAME);
  // Filter best-effort: ensure title and year exist
  const pubs = items
    .filter((item) => {
      // If email or ORCID provided, try to match author metadata
      if (!AUTHOR_EMAIL && !AUTHOR_ORCID) return true;
      const authors = item.author || [];
      return authors.some((a) => {
        // Crossref sometimes provides ORCID in the form 'http://orcid.org/xxxx'
        if (AUTHOR_ORCID && a.ORCID) {
          if (String(a.ORCID).includes(AUTHOR_ORCID)) return true;
        }
        // Author email is rarely present in CrossRef metadata; check affiliation or literal match
        if (AUTHOR_EMAIL) {
          if (a.email && String(a.email).toLowerCase().includes(AUTHOR_EMAIL.toLowerCase())) return true;
          if (a.affiliation && a.affiliation.some((af) => String(af.name || af).toLowerCase().includes(AUTHOR_EMAIL.toLowerCase()))) return true;
        }
        // Fallback: match family/given with provided AUTHOR_NAME
        const full = [a.given, a.family].filter(Boolean).join(' ').toLowerCase();
        if (full.includes(AUTHOR_NAME.toLowerCase())) return true;
        return false;
      });
    })
    .map(normalize)
    .filter((p) => p.title && p.year)
    // dedupe by DOI or title
    .reduce((acc, cur) => {
      const key = cur.doi || cur.title;
      if (!acc._keys) acc._keys = new Set();
      if (acc._keys.has(key)) return acc;
      acc._keys.add(key);
      acc.push(cur);
      return acc;
    }, []);

  // remove helper
  const final = pubs.filter(Boolean).map(({ title, authors, journal, year, doi, url }) => ({ title, authors, journal, year, doi, url }));

  // Sort by year (newest first). year may be string or number; parseInt safely.
  final.sort((a, b) => {
    const ay = parseInt(String(a.year || '').slice(0, 4)) || 0;
    const by = parseInt(String(b.year || '').slice(0, 4)) || 0;
    return by - ay;
  });

  const outPath = path.join(__dirname, '..', 'src', 'data', 'publications.json');
  fs.writeFileSync(outPath, JSON.stringify(final, null, 2) + '\n');
  console.log(`Wrote ${final.length} publications to ${outPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
