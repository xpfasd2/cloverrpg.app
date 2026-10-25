# Clover RPG Field Guide

Independent English-language guide at https://cloverrpg.app for Thousandfold's Roblox experience 8248164019.

## Build

No third-party build dependencies. Requires Python 3.9+.

```sh
python3 scripts/build.py
python3 scripts/audit.py
python3 -m http.server 4198 --directory dist
```

Cloudflare Pages: production branch `main`, build command `python3 scripts/build.py && python3 scripts/audit.py`, output directory `dist`.

Edit content in `scripts/build.py`; styling and interactions live in `public/`. Research and release decisions live in `pipeline/`. Do not publish unsupported codes, stats or tier rankings.

GA4 G-RX85XWEK03 is emitted exactly once immediately after every opening head tag by the shared page builder. No additional analytics wrapper is needed.

The library promotional image is sourced from the official Roblox thumbnail API and remains owned by its respective rights holders. The site is not affiliated with Roblox or Thousandfold. See `/sources/` for attribution and evidence limitations.

## Selected redesign

The Elysium Adventure Atlas redesign follows the user's selected Product Design option 2. It uses self-hosted Libre Caslon Display / DM Sans, Phosphor icons and generated concept illustrations. Licenses are in `public/licenses/`; artwork is labeled on the site and in `/sources/`. Optimized WebP assets are shipped; generation originals and visual evidence remain in external-drive `outputs/redesign/`.

`design-qa.md` records the selected reference, matching-canvas comparison, responsive checks and interaction results. The homepage search and “View all guides” expand the full directory. Existing guide URLs, local checklist storage, probability calculator, quest filtering and GA4 placement are preserved.
