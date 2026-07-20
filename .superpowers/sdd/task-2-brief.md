# Task 2: Create Gallery component

**Files:**
- Create: `src/app/pages/gallery/gallery.ts`
- Create: `src/app/pages/gallery/gallery.html`
- Create: `src/app/pages/gallery/gallery.scss`

**Interfaces:**
- Consumes: Image array with `{ id: number, src: string }`
- Produces: Standalone `Gallery` component ready for lazy route

## Steps

### Step 1: Create `src/app/pages/gallery/gallery.ts`

```typescript
import { Component, HostListener } from '@angular/core';
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
export class Gallery {
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

### Step 2: Create `src/app/pages/gallery/gallery.html`

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

### Step 3: Create `src/app/pages/gallery/gallery.scss`

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

### Step 4: Build check

```bash
npx ng build
```

Expected: Build succeeds (import warnings about TranslatePipe not being imported will appear — we'll fix in route setup)

### Step 5: Commit

```bash
git add src/app/pages/gallery/
git commit -m "feat: create Gallery component with grid and lightbox"
```
