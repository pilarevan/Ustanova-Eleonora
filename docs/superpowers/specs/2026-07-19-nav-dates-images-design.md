# Nav bar fix, translated month names, and real images

## 1. Nav bar always dark on sub-pages

**Problem**: Header defaults to `background: transparent`, only goes dark after 50px scroll. On sub-pages the hero doesn't fill viewport, revealing white content behind — nav text becomes invisible.

**Fix**: Change header default background from `transparent` to `var(--color-dark)`. Remove the transparent-to-scrolled transition entirely. The `.scrolled` class will only add `box-shadow` (no background change). This keeps the nav dark on all pages consistently.

**File changes**: `src/app/components/header/header.scss`

## 2. Translated month names in news

**Problem**: News dates are hardcoded English strings (`'13 December 2025'`). Month names stay English regardless of selected language.

**Fix**:
- Store dates as ISO strings (`2025-12-13`) in all 4 news data arrays (news.ts, article.ts, news-preview.ts)
- Add `months` translation block to all 4 language files (hr.json, en.json, it.json, de.json) with month name keys 1-12
- Create a `FormatDatePipe` that reads the current language from `TranslateService`, formats day + month name + year using translation keys
- Use the pipe in all 3 templates (news.html, article.html, news-preview.html)

**File changes**: 
- `public/i18n/{hr,en,it,de}.json`
- `src/app/pages/news/news.ts`, `news.html`
- `src/app/pages/article/article.ts`, `article.html`
- `src/app/components/news-preview/news-preview.ts`, `news-preview.html`
- New: `src/app/pipes/format-date.pipe.ts`

## 3. Real images from ustanovaeleonora.com

**Problem**: Current assets are 4 SVG placeholders. No real company photos.

**Fix**: Download ~10-15 real images from the official Squarespace site and place them:

| Image | Source URL | Placement |
|-------|-----------|-----------|
| hero-bg.jpg | 29th anniversary team photo (hero from ustanovaeleonora.com) | Hero section background |
| service-transport.jpg | Transport vehicle gallery photo | Medical transport service card |
| service-healthcare.jpg | Nurse/team photo | Home healthcare service card |
| service-physio.jpg | Therapy session photo | Physical therapy service card |
| news-*.jpg | Blog post thumbnails (matching slugs) | News article cards |

Download to `public/assets/images/` and reference in respective components (src attributes, CSS background-image).

**File changes**:
- `public/assets/images/hero-bg.jpg` (replaces hero-bg.svg)
- `public/assets/images/service-transport.jpg` (replaces service-transport.svg)
- `public/assets/images/service-healthcare.jpg` (replaces service-healthcare.svg)
- `public/assets/images/service-physio.jpg` (replaces service-physio.svg)
- `public/assets/images/news-*.jpg` (new, for news articles)
- Component SCSS/HTML files referencing images

## Implementation order

1. Nav bar CSS fix (trivial, one property change)
2. Add month keys to translation files
3. Create FormatDatePipe
4. Update news data with ISO dates + apply pipe in templates
5. Download images from Squarespace
6. Update component assets to use new images
