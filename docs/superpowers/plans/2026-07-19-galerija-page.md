# Galerija Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a `/galerija` gallery page with 45 images from the real site and a lightbox viewer.

**Architecture:** New standalone lazy-loaded route, Intersection Observer for scroll fade-in, CSS grid layout, native lightbox overlay.

**Tech Stack:** Angular 22 standalone, SCSS, Intersection Observer API

## Global Constraints

- All image paths use relative paths (`assets/images/gallery/...`) — no leading `/`
- Standalone components only: no NgModules, `styleUrl` (singular), no `.component` suffix in filenames
- i18n keys added to all 4 language files: hr.json, en.json, it.json, de.json
- Build with `npx ng build --configuration production --base-href=/Ustanova-Eleonora/` before deploy
- Copy `index.html` to `404.html` in dist before `gh-pages` deploy

---

### Task 1: Download all 45 gallery images

**Files:**
- Create: `public/assets/images/gallery/` (directory + 45 files)

**Interfaces:**
- Produces: 45 image files at `public/assets/images/gallery/gallery-1.jpg` through `gallery-45.jpg`

The gallery images are at `https://www.ustanovaeleonora.com/contact`. Extract unique image URLs from the page, download each one, and save them.

Sources (all 45 unique URLs from the page):

```
https://images.squarespace-cdn.com/content/v1/64cfc30349f04f3f8329f5e4/0163e086-cee3-42d9-b346-c90be2b36b03/image00001.jpeg
https://images.squarespace-cdn.com/content/v1/64cfc30349f04f3f8329f5e4/030c34ff-00f3-488a-aa01-28ec79bf368d/image00010.jpeg
https://images.squarespace-cdn.com/content/v1/64cfc30349f04f3f8329f5e4/035b34c0-f90b-4f75-b576-cd65ef969b2c/image00045.jpeg
https://images.squarespace-cdn.com/content/v1/64cfc30349f04f3f8329f5e4/06c9397a-3e77-487b-96b4-addc37fbd6f6/image00004.jpeg
https://images.squarespace-cdn.com/content/v1/64cfc30349f04f3f8329f5e4/071661fb-b52d-40d4-8d89-a74e011da400/image00046.jpeg
https://images.squarespace-cdn.com/content/v1/64cfc30349f04f3f8329f5e4/0c241cb9-317b-46de-bebc-ae71c724a5fc/image00004.jpeg
https://images.squarespace-cdn.com/content/v1/64cfc30349f04f3f8329f5e4/0e980295-3e0d-4fef-8da6-08d94e4c68e9/image00013.jpeg
https://images.squarespace-cdn.com/content/v1/64cfc30349f04f3f8329f5e4/2088137d-f2f5-4d71-a87c-41f80b4adc3c/IMG_8696.jpg
https://images.squarespace-cdn.com/content/v1/64cfc30349f04f3f8329f5e4/225ecb5c-05c7-4c96-a6ae-d453a04e7aac/image00036.jpeg
https://images.squarespace-cdn.com/content/v1/64cfc30349f04f3f8329f5e4/23c89584-ac3c-4afc-b3af-6d7e9f9a3f0a/image00014.jpeg
https://images.squarespace-cdn.com/content/v1/64cfc30349f04f3f8329f5e4/27b40f0b-264e-4b4d-aa0f-48baa519830b/image00037.jpeg
https://images.squarespace-cdn.com/content/v1/64cfc30349f04f3f8329f5e4/2b6ef7f9-3b97-42a6-a759-936fb9449b89/image00005.jpeg
https://images.squarespace-cdn.com/content/v1/64cfc30349f04f3f8329f5e4/336321a8-0bbf-4a5b-98c2-929291f66ef0/WhatsApp+Slika+2025-07-16+u+11.34.17_09a49c2a.jpg
https://images.squarespace-cdn.com/content/v1/64cfc30349f04f3f8329f5e4/3b9890e8-8829-4b45-8690-704c96ad32da/a3c3f25b-063a-4793-b97f-54b1d7de2162.jpeg
https://images.squarespace-cdn.com/content/v1/64cfc30349f04f3f8329f5e4/3c6edbf1-cd8e-4f65-b652-8cfb4a34b9c2/image00010.jpeg
https://images.squarespace-cdn.com/content/v1/64cfc30349f04f3f8329f5e4/40ce793f-e3e5-43b1-8ce7-5b613596ede9/image00001.jpeg
https://images.squarespace-cdn.com/content/v1/64cfc30349f04f3f8329f5e4/41a6ba95-0e54-41d2-93ba-c03c67c64433/image00008.jpeg
https://images.squarespace-cdn.com/content/v1/64cfc30349f04f3f8329f5e4/455b8643-8646-4623-a71a-1179cd77f5df/image00002.jpeg
https://images.squarespace-cdn.com/content/v1/64cfc30349f04f3f8329f5e4/4583aee2-3923-4f08-9872-e07259ccc9df/image00043.jpeg
https://images.squarespace-cdn.com/content/v1/64cfc30349f04f3f8329f5e4/49ad4d26-ebdd-42fd-9072-e3d21ed1624a/WhatsApp+Slika+2025-07-16+u+11.34.17_ce8ecaf9.jpg
https://images.squarespace-cdn.com/content/v1/64cfc30349f04f3f8329f5e4/4c4f4b35-70a4-4055-b04d-8ea1f3d8bed7/image00024.jpeg
https://images.squarespace-cdn.com/content/v1/64cfc30349f04f3f8329f5e4/563933ac-e721-4084-9aca-089bef4ef893/image00001.jpeg
https://images.squarespace-cdn.com/content/v1/64cfc30349f04f3f8329f5e4/56e347b2-bc6a-4708-8dcc-cd41e9c4168f/IMG_8695.jpg
https://images.squarespace-cdn.com/content/v1/64cfc30349f04f3f8329f5e4/5a69a089-f9cc-4d8e-aa9e-d17761832404/image00008.jpeg
https://images.squarespace-cdn.com/content/v1/64cfc30349f04f3f8329f5e4/5eb071ce-482e-4c74-a7ff-d6e493b40451/image00013.jpeg
https://images.squarespace-cdn.com/content/v1/64cfc30349f04f3f8329f5e4/63ad057f-b7ec-422e-b6b1-72b2e9b17d87/image00031.jpeg
https://images.squarespace-cdn.com/content/v1/64cfc30349f04f3f8329f5e4/6691c303-7cde-44af-a9c6-1759faabbeab/IMG_8692.jpg
https://images.squarespace-cdn.com/content/v1/64cfc30349f04f3f8329f5e4/77d80170-1e9f-428f-8668-9ba797d5434b/image00040.jpeg
https://images.squarespace-cdn.com/content/v1/64cfc30349f04f3f8329f5e4/7cecb77c-ae38-441c-bcda-3d1e4ad0da02/viber_slika_2025-03-01_12-37-35-396.jpg
https://images.squarespace-cdn.com/content/v1/64cfc30349f04f3f8329f5e4/876b9f4a-2a0a-433c-93b5-c1ae29005fd4/WhatsApp+Slika+2025-07-16+u+11.34.17_a2a86631.jpg
https://images.squarespace-cdn.com/content/v1/64cfc30349f04f3f8329f5e4/95a5d5d1-b12c-411a-b5ab-f48a823664f5/image00015.jpeg
https://images.squarespace-cdn.com/content/v1/64cfc30349f04f3f8329f5e4/9dbc98cb-77b4-4930-8ace-518d162c224e/302e90e1-e0cc-4247-91b4-010c1feb3b7d.jpeg
https://images.squarespace-cdn.com/content/v1/64cfc30349f04f3f8329f5e4/a9da954c-e5cb-439e-a3d4-9dd48bfd0c3c/image00030.jpeg
https://images.squarespace-cdn.com/content/v1/64cfc30349f04f3f8329f5e4/b3f4ee8e-0448-464c-aae2-590a0b56d528/image00020.jpeg
https://images.squarespace-cdn.com/content/v1/64cfc30349f04f3f8329f5e4/b5972e27-d603-41e2-a531-30c3f7e17d46/viber_slika_2025-03-19_08-13-39-503.jpg
https://images.squarespace-cdn.com/content/v1/64cfc30349f04f3f8329f5e4/b7ed3688-efc2-4216-b1ce-5e088f18ec33/image00006.jpeg
https://images.squarespace-cdn.com/content/v1/64cfc30349f04f3f8329f5e4/be1da61e-22c1-4fb6-88d6-76e58cc5e786/image00003.jpeg
https://images.squarespace-cdn.com/content/v1/64cfc30349f04f3f8329f5e4/c6ab34f3-7c2d-4d01-a686-7ec4bd4040cc/WhatsApp+Slika+2025-07-16+u+11.34.17_864c4d5e.jpg
https://images.squarespace-cdn.com/content/v1/64cfc30349f04f3f8329f5e4/ca695f17-9ecd-401b-ae0f-7e3e9a00f551/image00035.jpeg
https://images.squarespace-cdn.com/content/v1/64cfc30349f04f3f8329f5e4/ccc71fef-550b-4258-88df-7163f51ebd4c/image00011.jpeg
https://images.squarespace-cdn.com/content/v1/64cfc30349f04f3f8329f5e4/d02ce785-7c7c-4859-bea0-d6af08a3cfdd/image00009.jpeg
https://images.squarespace-cdn.com/content/v1/64cfc30349f04f3f8329f5e4/d70bdaa3-1d4d-46a1-8bf2-69e630d508c8/image00016.jpeg
https://images.squarespace-cdn.com/content/v1/64cfc30349f04f3f8329f5e4/db2116dd-0fed-4d15-8095-47f605ea621e/WhatsApp+Slika+2025-07-16+u+11.34.17_e9eed59c.jpg
https://images.squarespace-cdn.com/content/v1/64cfc30349f04f3f8329f5e4/dcbd181f-1d7b-4c6c-a0a7-191d8f6baa91/image00012.jpeg
https://images.squarespace-cdn.com/content/v1/64cfc30349f04f3f8329f5e4/e285b8f5-5e2d-4ecd-8920-fe7e23647a79/image00007.jpeg
https://images.squarespace-cdn.com/content/v1/64cfc30349f04f3f8329f5e4/e69eff5b-8891-48ca-b6e1-b6e1f6185e80/image00041.jpeg
https://images.squarespace-cdn.com/content/v1/64cfc30349f04f3f8329f5e4/f36b753c-7de2-4cc7-a67e-d8e35a643a57/viber_slika_2025-03-19_08-13-39-476.jpg
https://images.squarespace-cdn.com/content/v1/64cfc30349f04f3f8329f5e4/f40304be-ca97-4e0a-8498-3e2100b72745/image00044.jpeg
https://images.squarespace-cdn.com/content/v1/64cfc30349f04f3f8329f5e4/f40ee534-75e7-4a69-a987-220700f02aae/image00016.jpeg
https://images.squarespace-cdn.com/content/v1/64cfc30349f04f3f8329f5e4/f9077e35-0567-450d-8b14-0aec82e09fe1/WhatsApp+Slika+2025-07-03+u+05.50.24_c8192783.jpg
https://images.squarespace-cdn.com/content/v1/64cfc30349f04f3f8329f5e4/fa8fc8ca-3d87-46a8-9cf3-7196651fd9de/image00007.jpeg
https://images.squarespace-cdn.com/content/v1/64cfc30349f04f3f8329f5e4/fa9e8c6a-0a3d-4d09-bd08-ca6d3fd45c27/image00004.jpeg
https://images.squarespace-cdn.com/content/v1/64cfc30349f04f3f8329f5e4/fcb65fa8-5c3f-45b9-86f9-e178361a6ef6/image00019.jpeg
https://images.squarespace-cdn.com/content/v1/64cfc30349f04f3f8329f5e4/ffab4833-d010-4073-bb01-9a616ba4ec89/image00014.jpeg
```

- [ ] **Step 1: Create directory**

```bash
New-Item -ItemType Directory -Path "public/assets/images/gallery" -Force
```

- [ ] **Step 2: Download all images using a script**

Write a PowerShell script that takes the URL list, downloads each to `public/assets/images/gallery/gallery-N.jpg` (where N is 1 to 45), converting .jpeg extension to .jpg. Run:

```powershell
$urls = @( ... )  # all 45 URLs above
$i = 1
New-Item -ItemType Directory -Path "public\assets\images\gallery" -Force | Out-Null
foreach ($url in $urls) {
    $filename = "gallery-$i.jpg"
    $out = Join-Path "public\assets\images\gallery" $filename
    try {
        Invoke-WebRequest -Uri $url -OutFile $out -ErrorAction Stop
        Write-Host "$filename: $((Get-Item $out).Length) bytes"
    } catch {
        Write-Host "$filename: FAILED - $_"
    }
    $i++
    Start-Sleep -Milliseconds 200  # be polite to the server
}
```

- [ ] **Step 3: Verify download**

```bash
Get-ChildItem public/assets/images/gallery/ | Measure-Object | % { "$($_.Count) files" }
```

Expected: 45 files

- [ ] **Step 4: Commit**

```bash
git add public/assets/images/gallery/
git commit -m "feat: download gallery images from real site"
```

---

### Task 2: Create Gallery component

**Files:**
- Create: `src/app/pages/gallery/gallery.ts`
- Create: `src/app/pages/gallery/gallery.html`
- Create: `src/app/pages/gallery/gallery.scss`

**Interfaces:**
- Consumes: Image array with `{ id: number, src: string }`
- Produces: Standalone `Gallery` component ready for lazy route

- [ ] **Step 1: Create `src/app/pages/gallery/gallery.ts`**

```typescript
import { Component, HostListener, AfterViewInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

interface GalleryImage {
  id: number;
  src: string;
}

@Component({
  standalone: true,
  selector: 'app-gallery',
  imports: [NgFor, NgIf],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss'
})
export class Gallery implements AfterViewInit {
  images: GalleryImage[] = [];

  selectedImage: GalleryImage | null = null;

  visibleIds = new Set<number>();

  constructor() {
    for (let i = 1; i <= 53; i++) {
      this.images.push({ id: i, src: `assets/images/gallery/gallery-${i}.jpg` });
    }
  }

  ngAfterViewInit() {
    this.setupObserver();
  }

  private setupObserver() {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        const id = Number(entry.target.getAttribute('data-id'));
        if (entry.isIntersecting) {
          this.visibleIds.add(id);
        }
      }
    }, { rootMargin: '100px' });

    setTimeout(() => {
      const items = document.querySelectorAll('.gallery-item');
      items.forEach(el => observer.observe(el));
    });
  }

  openLightbox(img: GalleryImage) {
    this.selectedImage = img;
  }

  closeLightbox() {
    this.selectedImage = null;
  }

  @HostListener('document:keydown.escape')
  onEscape() {
    this.closeLightbox();
  }
}
```

- [ ] **Step 2: Create `src/app/pages/gallery/gallery.html`**

```html
<div class="gallery-page">
  <section class="gallery-hero section-darker">
    <div class="container">
      <h1>{{ 'gallery.title' | translate }}</h1>
    </div>
  </section>

  <section class="gallery-grid section-light">
    <div class="container">
      <div class="gallery-grid__inner">
        <div
          *ngFor="let img of images"
          class="gallery-item"
          [class.is-visible]="visibleIds.has(img.id)"
          [attr.data-id]="img.id"
          (click)="openLightbox(img)"
        >
          <img [src]="img.src" [alt]="'gallery.imageAlt' | translate" loading="lazy">
        </div>
      </div>
    </div>
  </section>

  <div class="gallery-lightbox" *ngIf="selectedImage" (click)="closeLightbox()">
    <button class="gallery-lightbox__close" (click)="closeLightbox()">×</button>
    <img [src]="selectedImage.src" [alt]="'gallery.imageAlt' | translate" (click)="$event.stopPropagation()">
  </div>
</div>
```

- [ ] **Step 3: Create `src/app/pages/gallery/gallery.scss`**

```scss
.gallery-page {
  padding-top: 80px;
}

.gallery-hero {
  padding: 6rem 0 4rem;

  h1 {
    font-size: clamp(2.5rem, 5vw, 4rem);
  }
}

.gallery-grid {
  padding: 3rem 0 5rem;

  &__inner {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
}

.gallery-item {
  position: relative;
  overflow: hidden;
  aspect-ratio: 4 / 3;
  cursor: pointer;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease;

  &.is-visible {
    opacity: 1;
    transform: translateY(0);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s;
  }

  &:hover img {
    transform: scale(1.05);
  }
}

.gallery-lightbox {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  cursor: pointer;

  img {
    max-width: 90vw;
    max-height: 90vh;
    object-fit: contain;
    cursor: default;
  }

  &__close {
    position: absolute;
    top: 1rem;
    right: 1.5rem;
    background: none;
    border: none;
    color: white;
    font-size: 3rem;
    cursor: pointer;
    z-index: 1001;
    line-height: 1;
  }
}

@media (max-width: 768px) {
  .gallery-grid__inner {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .gallery-grid__inner {
    grid-template-columns: 1fr;
  }
}
```

- [ ] **Step 4: Build check**

```bash
npx ng build
```

Expected: Build succeeds (import warnings about TranslatePipe not being imported will appear — we'll fix in route setup)

- [ ] **Step 5: Commit**

```bash
git add src/app/pages/gallery/
git commit -m "feat: create Gallery component with grid and lightbox"
```

---

### Task 3: Add route and nav link + i18n

**Files:**
- Modify: `src/app/app.routes.ts`
- Modify: `src/app/components/header/header.html`
- Modify: `public/i18n/hr.json`
- Modify: `public/i18n/en.json`
- Modify: `public/i18n/it.json`
- Modify: `public/i18n/de.json`

- [ ] **Step 1: Add route in `src/app/app.routes.ts`**

Add after the `/novosti/:slug` route:

```typescript
{ path: 'galerija', loadComponent: () => import('./pages/gallery/gallery').then(m => m.Gallery) },
```

- [ ] **Step 2: Add nav link in `src/app/components/header/header.html`**

Add after the "news" link:

```html
<a routerLink="/galerija" routerLinkActive="active">{{ 'nav.gallery' | translate }}</a>
```

- [ ] **Step 3: Add i18n key to all 4 language files**

Add to each of `public/i18n/hr.json`, `en.json`, `it.json`, `de.json`:

In the `nav` section: add `"gallery": "Galerija"` (hr), `"gallery": "Gallery"` (en), `"gallery": "Galleria"` (it), `"gallery": "Galerie"` (de)

Add a new section at the root (after nav):

```json
"gallery": {
  "title": "Galerija",
  "imageAlt": "Gallery image"
}
```

With translated `title` values for each language.

- [ ] **Step 4: Add TranslatePipe import in Gallery component**

Update `src/app/pages/gallery/gallery.ts` — add `TranslatePipe` to imports:

```typescript
imports: [NgFor, NgIf, TranslatePipe],
```

And import:

```typescript
import { TranslatePipe } from '@ngx-translate/core';
```

- [ ] **Step 5: Build check**

```bash
npx ng build
```

Expected: Build succeeds with no errors

- [ ] **Step 6: Commit**

```bash
git add src/app/app.routes.ts src/app/components/header/header.html src/app/pages/gallery/gallery.ts public/i18n/
git commit -m "feat: add galerija route, nav link, and i18n keys"
```

---

### Task 4: Build production, deploy, push

**Interfaces:**
- Final deliverable: gallery page live at https://pilarevan.github.io/Ustanova-Eleonora/galerija

- [ ] **Step 1: Production build**

```bash
npx ng build --configuration production --base-href=/Ustanova-Eleonora/
```

Expected: Build succeeds

- [ ] **Step 2: Copy 404.html**

```bash
Copy-Item -Path "dist/ustanova-eleonora/browser/index.html" -Destination "dist/ustanova-eleonora/browser/404.html" -Force
```

- [ ] **Step 3: Deploy to gh-pages**

```bash
npx gh-pages -d dist/ustanova-eleonora/browser -m "Deploy: galerija page [skip ci]"
```

Expected: "Published"

- [ ] **Step 4: Push source commits**

```bash
git push origin main
```

- [ ] **Step 5: Verify the gallery page loads at the live URL**
