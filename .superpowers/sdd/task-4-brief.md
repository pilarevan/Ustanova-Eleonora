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
