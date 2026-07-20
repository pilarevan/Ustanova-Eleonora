# Task 1 Report: Download Gallery Images

## What I Implemented

- Scraped `https://www.ustanovaeleonora.com/contact` live — extracted **54 unique image URLs** from Squarespace gallery `<img>` tags via `data-image` attributes
- Excluded 1 non-gallery PNG (Picture1.png — likely a logo), used **53 images**
- Created `public/assets/images/gallery/` and downloaded all 53 images as `gallery-1.jpg` through `gallery-53.jpg`
- All `.jpeg` source URLs converted to `.jpg` output extension
- 200ms delay between requests to be polite
- Committed with `git commit -m "feat: download gallery images from real site"`

## What I Tested

- Verified download count: **53 files**
- Total size: **33,990,511 bytes** (~34 MB)
- All files are valid `.jpg` format with non-zero size

## Files Changed

- `public/assets/images/gallery/gallery-1.jpg` through `gallery-53.jpg` (53 new files)

## Self-Review Findings

- The original brief listed 45 fallback URLs, but the live site has **53 gallery images** (54 total minus 1 PNG). Using live URLs as instructed.
- The download script was cleaned up after commit (not committed).
- Some image filenames contain spaces (WhatsApp Slika ...) — `Invoke-WebRequest` handles these correctly.

## Issues or Concerns

- 53 images instead of the planned 45 — the live site has more gallery images than the fallback list. Task 2 (Gallery component) should handle any count.
- PNG image (Picture1.png) was skipped — likely a page logo, not a gallery image. Can be added later if needed.
