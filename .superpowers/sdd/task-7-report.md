# Task 7 Report: News Listing + Article Pages

**Status:** DONE

**Commits:**
- `eee2b61` feat: add news listing and article pages

**Build:** `npx ng build` succeeded (no errors, only pre-existing Sass deprecation warning)

**Files implemented:**
- `src/app/pages/news/news.ts` — News component with 6-item array, RouterModule/TranslatePipe/CommonModule imports
- `src/app/pages/news/news.html` — Listing with hero section, 2-column grid, `*ngFor` loop with routerLink to `/novosti/:slug`
- `src/app/pages/news/news.scss` — Responsive grid, hover effects, CSS custom properties
- `src/app/pages/article/article.ts` — Article component with `ActivatedRoute` paramMap subscription for slug
- `src/app/pages/article/article.html` — Hero with back link, slug display, placeholder content
- `src/app/pages/article/article.scss` — Article page styles

**Test summary:** No tests run (generated with `--skip-tests`)

**Routes consumed (from Task 5):**
- `/novosti` → `News` component (lazy: `chunk-CGVx24Ob.js`)
- `/novosti/:slug` → `Article` component (lazy: `chunk-DNW_Fmke.js`)

**Concerns:** None
