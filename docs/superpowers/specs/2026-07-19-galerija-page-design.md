# Galerija Page Design

## Overview
Add a `/galerija` route displaying all 45 gallery images from the real site (ustanovaeleonora.com/contact). Standalone lazy-loaded component with responsive grid and lightbox.

## Route
- Path: `galerija`
- Lazy-loaded via route config: `loadComponent: () => import('./pages/gallery/gallery').then(m => m.Gallery)`
- Nav link added to header between "Novosti" and language switcher

## Images
- Source: 45 unique images from https://www.ustanovaeleonora.com/contact
- Stored in `public/assets/images/gallery/` numbered `gallery-1.jpg` through `gallery-45.jpg`
- Image data array in component with filename and optional caption

## Component: Gallery
- `src/app/pages/gallery/gallery.ts` — standalone, imports `NgFor`, `NgIf`
- `src/app/pages/gallery/gallery.html` — template
- `src/app/pages/gallery/gallery.scss` — styles

### Template
```
.gallery-page
  .gallery-hero (title "gallery.title" | translate)
  .gallery-grid
    .gallery-item *ngFor (with @if visible for scroll fade-in)
      img (click → open lightbox)
  .gallery-lightbox *ngIf selectedImage
    img + close button
```

### Scroll Fade-In
- Intersection Observer in component
- Each item gets `is-visible` class when scrolled into view
- CSS transition: `opacity 0.5s, transform translateY(20px)`

### Lightbox
- Click image → sets `selectedImage` → overlay with full image + dark backdrop
- Click backdrop or close button → closes
- Close on Escape key

### Grid
- CSS grid: 3 columns desktop, 2 tablet, 1 mobile
- Gap: 1rem
- Images: `object-fit: cover`, `aspect-ratio: 4/3`

### i18n Keys
- `gallery.title`: "Galerija" / "Gallery" / "Galleria" / "Galerie"

## Files Created
- `public/assets/images/gallery/` (directory + 45 images)
- `src/app/pages/gallery/gallery.ts`
- `src/app/pages/gallery/gallery.html`
- `src/app/pages/gallery/gallery.scss`

## Files Modified
- `src/app/app.routes.ts` — add galerija route
- `src/app/components/header/header.html` — add nav link
- `public/i18n/{hr,en,it,de}.json` — add gallery key
