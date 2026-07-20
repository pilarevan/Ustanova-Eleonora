# Task 3: Add galerija route, nav link, and i18n keys — Report

## Changes

| File | Change |
|------|--------|
| `src/app/app.routes.ts` | Added `/galerija` lazy-loaded route after `/novosti/:slug` (before `**` wildcard) |
| `src/app/components/header/header.html` | Added `<a routerLink="/galerija">` nav link between news and contact links |
| `public/i18n/hr.json` | Added `"gallery": "GALERIJA"` to nav section; added `gallery` section with title and imageAlt |
| `public/i18n/en.json` | Added `"gallery": "GALLERY"` to nav section; added `gallery` section with title and imageAlt |
| `public/i18n/it.json` | Added `"gallery": "GALLERIA"` to nav section; added `gallery` section with title and imageAlt |
| `public/i18n/de.json` | Added `"gallery": "GALERIE"` to nav section; added `gallery` section with title and imageAlt |
| `src/app/pages/gallery/gallery.ts` | Added `TranslatePipe` import and added to `imports` array |

## Build Check

**Result: PASS** — `npx ng build` completed successfully. Gallery appears as a lazy chunk (`chunk-sALdggLP.js`). Only pre-existing Sass `@import` deprecation warnings (unrelated).

## Self-Review

- [x] Route added in correct position
- [x] Nav link uses correct `routerLink="/galerija"` and `routerLinkActive`
- [x] All 4 i18n files have `nav.gallery` key and `gallery` section with correct translations
- [x] Gallery component imports `TranslatePipe` and includes it in `imports`
- [x] Build passes with no errors
- [x] Commit created: `9bf00a2` — "feat: add galerija route, nav link, and i18n keys"

## Issues

None.
