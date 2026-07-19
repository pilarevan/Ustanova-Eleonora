### Task 8: Final Polish — SEO Meta, Production Build

**Files:**
- Modify: `src/index.html`

**Interfaces:**
- Consumes: all previous tasks
- Produces: production-ready build

- [ ] **Step 1: Add meta tags for SEO**

Edit `src/index.html` — add inside `<head>` after the existing meta tags:

```html
<meta name="description" content="Ustanova Eleonora — medicinski prijevoz diljem Europe, zdravstvena njega u kući i fizikalna terapija. Više od 29 godina iskustva.">
<meta name="keywords" content="sanitetski prijevoz, medicinski prijevoz, zdravstvena njega, fizikalna terapija, Poreč, Istra, Hrvatska, Europa">
```

- [ ] **Step 2: Verify production build**

```bash
npx ng build --configuration production
# Confirm no errors
```

- [ ] **Step 3: Final commit**

```bash
git add -A
git commit -m "chore: add SEO meta tags and production build config"
```
