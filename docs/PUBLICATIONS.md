# Updating Publications (manual)

This project supports multiple ways to update `src/data/publications.json`. To avoid automatic scraping from CI, scheduled GitHub workflows have been changed to manual triggers. Run one of the scripts below locally when you want to refresh the publication list, then review the output and push the changes.

## Node-based CrossRef fetcher (already present)

- Run:

```bash
npm run fetch:publications
```

- What it does: queries CrossRef for works matching the author name configured in `scripts/fetch-publications.js`.

## Node-based Google Scholar scraper (manual; may be blocked)

- Requires Playwright browsers; install locally once:

```bash
npm install
npx playwright install --with-deps
```

- Run:

```bash
npm run fetch:publications:scholar
```

- Notes: scraping Google Scholar may trigger CAPTCHAs or be blocked. Use sparingly.

## Simple Python CrossRef fetcher (recommended for ad-hoc use)

- No external dependencies; uses the standard library.

- Run (example):

```bash
# By name only
python3 scripts/fetch_publications_py.py "Bikram Khanal" 100

# By name + email (best-effort match to avoid duplicate authors)
python3 scripts/fetch_publications_py.py "Bikram Khanal" 100 "bikram@example.com"
```

- This writes `src/data/publications.json`. Inspect and commit the changes if satisfied.

## Workflow dispatch (manual GitHub run)

- If you prefer to run via GitHub Actions, both workflows are configured with `workflow_dispatch` so you can trigger them manually from the Actions tab. By default they will not run on a schedule.

## Recommendations

- Prefer the Python or CrossRef Node fetchers for regular use — they use the CrossRef API and are robust.
- Only run the Scholar scraper when you specifically need items that appear on Google Scholar but are missing from CrossRef.
- After running, open the site locally with `npm run dev` to visually confirm changes before pushing.

## ResearchGate scraper (manual)

- Use when ResearchGate contains publications missing from CrossRef/Scholar.
- Requires Playwright browsers; install locally once:

```bash
npm install
npx playwright install --with-deps
```

- Run (set `RESEARCHGATE_URL` to your profile URL):

```bash
RESEARCHGATE_URL="https://www.researchgate.net/profile/Your_Name" npm run fetch:publications:researchgate
```

- Notes: the script opens each publication page and extracts citation meta tags. If your ResearchGate profile requires login to view full list, run the script locally while logged in and consider the Scholar/BibTeX approach as a fallback.

### Programmatic login (optional, local only)

If your ResearchGate profile requires authentication to view all publications you can provide credentials via env vars. WARNING: storing credentials in CI or in plaintext is insecure. Prefer running locally and passing credentials as environment variables at runtime.

```bash
# Local run with programmatic login (use only on your machine)
RESEARCHGATE_URL="https://www.researchgate.net/profile/Your_Name" \
RG_USERNAME="you@example.com" RG_PASSWORD="your-password" \
npm run fetch:publications:researchgate
```

Notes:
- The script will attempt to fill the ResearchGate login form and check heuristically whether login succeeded.
- If login fails due to two-factor authentication, CAPTCHA, or changed selectors, the script will continue but may not see private items.
- Do not store credentials in the repository or in GitHub Actions secrets unless you understand the security implications.
 
 - The script will attempt to fill the ResearchGate login form and check heuristically whether login succeeded.
 - If login fails due to two-factor authentication, CAPTCHA, or changed selectors, the script will continue but may not see private items.
 - Do not store credentials in the repository or in GitHub Actions secrets unless you understand the security implications.
