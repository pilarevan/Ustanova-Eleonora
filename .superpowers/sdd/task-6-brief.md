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
