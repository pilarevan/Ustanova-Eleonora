# Nav/Dates/Images Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fix nav bar background on sub-pages, translate month names in news dates, and add real company images.

**Architecture:** Three independent concerns — CSS fix in header component, i18n-based date formatting with new pipe, and image replacement from external sources.

**Tech Stack:** Angular 17+, SCSS, @ngx-translate

## Global Constraints

- All changes must work with path-based routing on GH Pages subpath `/Ustanova-Eleonora/`
- Month names must be translated in all 4 languages (HR, EN, IT, DE)
- Images must be from the official Ustanova Eleonora website (Squarespace CDN)
- No new npm dependencies

---
### Task 1: Fix nav bar always dark

**Files:**
- Modify: `src/app/components/header/header.scss`

- [ ] **Change header default background to dark**

In `header.scss`, change `background: transparent` to `background: var(--color-dark)`. The `.scrolled` class should keep the box-shadow but no longer needs to change the background since it's always dark.

```scss
.header {
  background: var(--color-dark);

  &.scrolled {
    box-shadow: 0 2px 20px rgba(0,0,0,0.3);
  }
}
```

- [ ] **Commit**

```bash
git add src/app/components/header/header.scss
git commit -m "fix: keep nav bar dark on all pages"
```

---
### Task 2: Add month name translations to all 4 language files

**Files:**
- Modify: `public/i18n/hr.json`
- Modify: `public/i18n/en.json`
- Modify: `public/i18n/it.json`
- Modify: `public/i18n/de.json`

- [ ] **Add months block to hr.json**

Insert a `months` object with keys `1` through `12` after the `nav` block:

```json
"months": {
  "1": "Siječanj",
  "2": "Veljača",
  "3": "Ožujak",
  "4": "Travanj",
  "5": "Svibanj",
  "6": "Lipanj",
  "7": "Srpanj",
  "8": "Kolovoz",
  "9": "Rujan",
  "10": "Listopad",
  "11": "Studeni",
  "12": "Prosinac"
}
```

- [ ] **Add months block to en.json**

```json
"months": {
  "1": "January",
  "2": "February",
  "3": "March",
  "4": "April",
  "5": "May",
  "6": "June",
  "7": "July",
  "8": "August",
  "9": "September",
  "10": "October",
  "11": "November",
  "12": "December"
}
```

- [ ] **Add months block to it.json**

```json
"months": {
  "1": "Gennaio",
  "2": "Febbraio",
  "3": "Marzo",
  "4": "Aprile",
  "5": "Maggio",
  "6": "Giugno",
  "7": "Luglio",
  "8": "Agosto",
  "9": "Settembre",
  "10": "Ottobre",
  "11": "Novembre",
  "12": "Dicembre"
}
```

- [ ] **Add months block to de.json**

```json
"months": {
  "1": "Januar",
  "2": "Februar",
  "3": "März",
  "4": "April",
  "5": "Mai",
  "6": "Juni",
  "7": "Juli",
  "8": "August",
  "9": "September",
  "10": "Oktober",
  "11": "November",
  "12": "Dezember"
}
```

- [ ] **Commit**

```bash
git add public/i18n/
git commit -m "feat: add month name translations for all 4 languages"
```

---
### Task 3: Create FormatDatePipe

**Files:**
- Create: `src/app/pipes/format-date.pipe.ts`

- [ ] **Create the pipe**

A pipe that takes an ISO date string and the current translations, formats as `"13. Prosinca 2025"` for HR or `"13 December 2025"` for EN etc.

```typescript
import { Pipe, PipeTransform, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'formatDate',
  standalone: true
})
export class FormatDatePipe implements PipeTransform {
  private translate = inject(TranslateService);

  transform(isoDate: string | null | undefined): string {
    if (!isoDate) return '';

    const [y, m, d] = isoDate.split('-');
    const monthKey = String(Number(m));
    const monthName = this.translate.instant(`months.${monthKey}`);
    return `${Number(d)} ${monthName} ${y}`;
  }
}
```

- [ ] **Commit**

```bash
git add src/app/pipes/format-date.pipe.ts
git commit -m "feat: add FormatDatePipe for translated dates"
```

---
### Task 4: Update news data to use ISO dates + pipe

**Files:**
- Modify: `src/app/pages/news/news.ts`
- Modify: `src/app/pages/news/news.html`
- Modify: `src/app/pages/article/article.ts`
- Modify: `src/app/pages/article/article.html`
- Modify: `src/app/components/news-preview/news-preview.ts`
- Modify: `src/app/components/news-preview/news-preview.html`

- [ ] **Convert hardcoded English dates to ISO in news.ts**

Change from `'13 December 2025'` to `'2025-12-13'`.

```typescript
{
  slug: 'a-special-visit-for-our-29th-anniversary',
  title: 'A Special Visit for Our 29th Anniversary',
  date: '2025-12-13'
}
// etc for all 6 entries
```

- [ ] **Convert dates to ISO in article.ts**

Same change for the 6 articles in article.ts.

- [ ] **Convert dates to ISO in news-preview.ts**

Same change for the 3 entries in news-preview.ts.

- [ ] **Add FormatDatePipe import and use in news.html**

Import `FormatDatePipe` and replace `{{ item.date }}` with `{{ item.date | formatDate }}`.

```typescript
imports: [..., FormatDatePipe]
```

```html
<span class="news-item__date">{{ item.date | formatDate }}</span>
```

- [ ] **Add FormatDatePipe to article.html**

```typescript
imports: [..., FormatDatePipe]
```

```html
<p class="article__date">{{ date | formatDate }}</p>
```

- [ ] **Add FormatDatePipe to news-preview.html**

```typescript
imports: [..., FormatDatePipe]
```

```html
<div class="news-card__date">{{ item.date | formatDate }}</div>
```

- [ ] **Commit**

```bash
git add src/app/pages/news/ src/app/pages/article/ src/app/components/news-preview/
git commit -m "feat: use ISO dates and FormatDatePipe for translated month names"
```

---
### Task 5: Download real images from squarespace

**Files:**
- Create: `public/assets/images/hero-bg.jpg`
- Create: `public/assets/images/service-transport.jpg`
- Create: `public/assets/images/service-healthcare.jpg`
- Create: `public/assets/images/service-physio.jpg`
- Create: `public/assets/images/news-1.jpg` through `news-6.jpg` (or appropriate naming)

- [ ] **Download hero image**

Download the 29th anniversary team photo from Squarespace:
```
https://images.squarespace-cdn.com/content/v1/64cfc30349f04f3f8329f5e4/1f420262-5eb8-4bef-9884-3ceb223b23ce/WhatsApp+Slika+2025-07-16+u+11.34.17_a2a86631.jpg?format=2500w
```
Save as `public/assets/images/hero-bg.jpg`

- [ ] **Download transport service image**

Pick the best transport vehicle photo from the gallery. Try:
```
https://images.squarespace-cdn.com/content/v1/64cfc30349f04f3f8329f5e4/06c9397a-3e77-487b-96b4-addc37fbd6f6/image00004.jpeg?format=2500w
```
Save as `public/assets/images/service-transport.jpg`

- [ ] **Download healthcare service image**

Pick a team/nurse image. Try the hero image or a staff photo:
```
https://images.squarespace-cdn.com/content/v1/64cfc30349f04f3f8329f5e4/336321a8-0bbf-4a5b-98c2-929291f66ef0/WhatsApp+Slika+2025-07-16+u+11.34.17_09a49c2a.jpg?format=2500w
```
Save as `public/assets/images/service-healthcare.jpg`

- [ ] **Download physiotherapy service image**

```
https://images.squarespace-cdn.com/content/v1/64cfc30349f04f3f8329f5e4/455b8643-8646-4623-a71a-1179cd77f5df/image00002.jpeg?format=2500w
```
Save as `public/assets/images/service-physio.jpg`

- [ ] **Download news thumbnails**

Match blog post thumbnails to slugs:
- `news-1.jpg` for "Nova vozila" (new vehicles) → `0fc5af1e-a14a-48f4-9375-f2939414bb29.jpeg`
- `news-2.jpg` for "Team Building" → `WhatsApp+Slika+2025-12-16+u+10.09.38_f63d3fe7.jpg`
- `news-3.jpg` for "A Special Visit" → `WhatsApp+Slika+2025-12-16+u+10.09.49_ae247c7d.jpg`

- [ ] **Commit**

```bash
git add public/assets/images/
git commit -m "feat: add real company images from official website"
```

---
### Task 6: Update components to use new images

**Files:**
- Modify: `src/app/components/hero/hero.scss`
- Modify: `src/app/components/service-card/service-card.ts`
- Modify: `src/app/components/news-preview/news-preview.ts`
- Modify: `src/app/pages/news/news.ts`
- Modify: `src/app/pages/article/article.ts`

- [ ] **Update hero to use new background image**

In `hero.scss`, change the background from SVG to the new JPG:

```scss
.hero {
  background: linear-gradient(rgba(26,26,46,0.7), rgba(22,33,62,0.8)),
              url('/assets/images/hero-bg.jpg') center/cover no-repeat;
}
```

- [ ] **Update service-card images**

In `service-card.ts`, update the `imagePath` getter or the input defaults to point to new JPGs instead of SVGs. Currently each card instance in `home.html` passes an image path. Change those paths.

- [ ] **Add news thumbnail images to news components**

In `news.ts`, add an `image` field to each news item with the path to the downloaded thumbnail. Update the template to show `<img>` with the thumbnail.

- [ ] **Commit**

```bash
git add src/app/components/hero/ src/app/components/service-card/ src/app/components/news-preview/ src/app/pages/news/ src/app/pages/article/
git commit -m "feat: use real images in hero, service cards, and news"
```

---
### Task 7: Build, deploy, and verify

- [ ] **Build production bundle**

```bash
ng build --configuration production --base-href=/Ustanova-Eleonora/
```

- [ ] **Copy 404.html**

```bash
Copy-Item dist/ustanova-eleonora/browser/index.html dist/ustanova-eleonora/browser/404.html
```

- [ ] **Deploy to gh-pages**

```bash
npx gh-pages -d dist/ustanova-eleonora/browser -m "Deploy: nav fix, translated dates, real images [skip ci]"
```

- [ ] **Commit and push source**

```bash
git add -A && git commit -m "feat: add images, fix nav, translate dates" && git push
```
