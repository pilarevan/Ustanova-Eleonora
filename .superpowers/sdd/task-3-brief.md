# Task 3: Add galerija route, nav link, and i18n keys

**Files:**
- Modify: `src/app/app.routes.ts`
- Modify: `src/app/components/header/header.html`
- Modify: `public/i18n/hr.json`
- Modify: `public/i18n/en.json`
- Modify: `public/i18n/it.json`
- Modify: `public/i18n/de.json`
- Modify: `src/app/pages/gallery/gallery.ts`

## Steps

### Step 1: Add route in `src/app/app.routes.ts`

Add after the `/novosti/:slug` route (line 27, before the `**` wildcard):

```typescript
  {
    path: 'galerija',
    loadComponent: () => import('./pages/gallery/gallery').then(m => m.Gallery)
  },
```

Current file structure (last route before wildcard):
```typescript
  {
    path: 'novosti/:slug',
    loadComponent: () => import('./pages/article/article').then(m => m.Article)
  },
  // ADD HERE
  {
    path: '**',
    redirectTo: ''
  }
```

### Step 2: Add nav link in `src/app/components/header/header.html`

After the news link (`<a routerLink="/novosti" ...>`) and before the contact link:

```html
      <a routerLink="/novosti" routerLinkActive="active">{{ 'nav.news' | translate }}</a>
      <a routerLink="/galerija" routerLinkActive="active">{{ 'nav.gallery' | translate }}</a>
      <a routerLink="/" fragment="contact">{{ 'nav.contact' | translate }}</a>
```

### Step 3: Add i18n keys to all 4 language files

In the `nav` section of each file, add `"gallery"` key after `"news"`:

**hr.json**: `"gallery": "GALERIJA"`
**en.json**: `"gallery": "GALLERY"`
**it.json**: `"gallery": "GALLERIA"`
**de.json**: `"gallery": "GALERIE"`

Then add a new `"gallery"` section at the root level (after the `nav` section, before `months`):

```json
  "gallery": {
    "title": "Galerija",
    "imageAlt": "Galerija slika"
  }
```

With translated values:
- **hr.json**: `"title": "Galerija"`, `"imageAlt": "Galerija slika"`
- **en.json**: `"title": "Gallery"`, `"imageAlt": "Gallery image"`
- **it.json**: `"title": "Galleria"`, `"imageAlt": "Immagine galleria"`
- **de.json**: `"title": "Galerie"`, `"imageAlt": "Galeriebild"`

### Step 4: Add TranslatePipe import in Gallery component

In `src/app/pages/gallery/gallery.ts`:
- Add import: `import { TranslatePipe } from '@ngx-translate/core';`
- Add to `imports: [NgFor, NgIf, TranslatePipe]`

### Step 5: Build check

```bash
npx ng build
```

Expected: Build succeeds with no errors

### Step 6: Commit

```bash
git add src/app/app.routes.ts src/app/components/header/header.html src/app/pages/gallery/gallery.ts public/i18n/
git commit -m "feat: add galerija route, nav link, and i18n keys"
```
