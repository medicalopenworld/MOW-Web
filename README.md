# Medical Open World Web Site

This repo keeps a static Next.js site, editable through markdown files, that renders scraped WordPress snapshots from original MOW site plus Markdown overrides.

## Structure

- `site/`: Next.js site that renders the snapshots.
- `site/content/`: Markdown overrides and override config.
- `migration/`: scraper, content snapshots, and migration docs.
- `site/public/remote-assets/`: downloaded assets (css/js/img/font/pdf/etc).
- `migration/content/`: JSON snapshots per route.

## Quick start

```bash
npm install
npm run scrape
npm run dev
```

To generate a static export:

```bash
npm run build
```

Output goes to `site/out/`.

## External links report

```bash
npm run external-links
```

Report output: `migration/EXTERNAL_LINKS.md`.

## Docs

- `migration/MIGRATION.md` for the migration workflow and scripts.
- `site/README.md` for how the new site renders content.
