#!/usr/bin/env python3
"""
Simple, dependency-free CrossRef fetcher for local ad-hoc updates.
Usage:
  python3 scripts/fetch_publications_py.py "Bikram Khanal" 100
This writes to `src/data/publications.json` in the same shape used by the site.
"""
import sys
import json
import urllib.parse
import urllib.request
from pathlib import Path

DEFAULT_ROWS = 100


def fetch_crossref(author_name, rows=DEFAULT_ROWS):
    q = urllib.parse.quote(author_name)
    url = f"https://api.crossref.org/works?query.author={q}&rows={rows}"
    req = urllib.request.Request(url, headers={"User-Agent": "cv-updater (mailto:general@jeonbik.com)"})
    with urllib.request.urlopen(req, timeout=30) as r:
        data = json.load(r)
    items = data.get("message", {}).get("items", [])
    return items


def normalize(item):
    title = item.get("title")[0] if item.get("title") else ""
    authors = "; ".join([" ".join(filter(None, [a.get("given"), a.get("family")])) for a in item.get("author", [])])
    journal = item.get("container-title")[0] if item.get("container-title") else ""
    year = ""
    if item.get("published-print") and item["published-print"].get("date-parts"):
        year = item["published-print"]["date-parts"][0][0]
    elif item.get("published-online") and item["published-online"].get("date-parts"):
        year = item["published-online"]["date-parts"][0][0]
    elif item.get("created") and item["created"].get("date-parts"):
        year = item["created"]["date-parts"][0][0]
    doi = item.get("DOI", "")
    url = item.get("URL", (f"https://doi.org/{doi}" if doi else ""))
    return {"title": title, "authors": authors, "journal": journal, "year": year, "doi": doi, "url": url}


def main(argv):
    if len(argv) < 2:
        print("Usage: python3 scripts/fetch_publications_py.py \"Author Name\" [rows] [author_email]")
        return
    author = argv[1]
    rows = int(argv[2]) if len(argv) > 2 else DEFAULT_ROWS
    author_email = argv[3] if len(argv) > 3 else ""
    print(f"Fetching publications for: {author} (rows={rows})")
    items = fetch_crossref(author, rows)
    pubs = []
    seen = set()
    for it in items:
        # Best-effort filter: if author_email provided, try to match within author metadata
        if author_email:
            authors = it.get("author", [])
            matched = False
            for a in authors:
                # CrossRef rarely includes emails; check affiliations text for email
                affs = a.get("affiliation", [])
                if any(author_email.lower() in str(af).lower() for af in affs):
                    matched = True
                    break
            if not matched:
                # fallback to author name
                names = [" ".join(filter(None, [a.get("given"), a.get("family")])).lower() for a in authors]
                if not any(author.lower() in n for n in names):
                    continue
        p = normalize(it)
        key = (p.get("doi") or p.get("title", "").lower())
        if not key or key in seen:
            continue
        seen.add(key)
        pubs.append(p)
    # Sort by year (newest first). Year may be numeric or string; extract leading 4-digit year if present.
    def year_key(p):
        y = p.get('year') or ''
        try:
            # try direct int
            return -int(str(y)[:4])
        except Exception:
            # fallback: extract first 4-digit group
            import re
            m = re.search(r"(\d{4})", str(y))
            if m:
                return -int(m.group(1))
            return 0

    pubs.sort(key=year_key)

    out = Path(__file__).resolve().parents[1] / "src" / "data" / "publications.json"
    out.write_text(json.dumps(pubs, indent=2) + "\n", encoding="utf-8")
    print(f"Wrote {len(pubs)} publications to {out}")


if __name__ == "__main__":
    main(sys.argv)
