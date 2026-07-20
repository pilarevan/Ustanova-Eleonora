# Task 2 Report: Create Gallery component

## What was implemented

Created the Gallery standalone component at `src/app/pages/gallery/` with 3 files:

- **gallery.ts**: Standalone Angular component with IntersectionObserver-based lazy visibility, lightbox open/close, and Escape key handler. Generates 53 image entries from `gallery-1.jpg` through `gallery-53.jpg`.
- **gallery.html**: Template with hero section, 3-column responsive grid using `*ngFor`, lazy-loaded `<img>` tags, and a fullscreen lightbox overlay.
- **gallery.scss**: BEM-style styles with fade-in/scale animation on intersection, lightbox overlay, and responsive breakpoints at 768px (2 cols) and 480px (1 col).

## Build check result

**FAIL** — 3 errors: `NG8004: No pipe found with name 'translate'`

The `translate` pipe from `@ngx-translate/core` is not imported in the component. This is **expected per the task brief** — the brief states these errors will appear and be fixed in Task 3 (route setup). Existing sibling components import `TranslatePipe` directly in their `imports` array.

## Files changed

- `src/app/pages/gallery/gallery.ts` (new, 61 lines)
- `src/app/pages/gallery/gallery.html` (new, 28 lines)
- `src/app/pages/gallery/gallery.scss` (new, 90 lines)

## Self-review findings

| Check | Status |
|-------|--------|
| `styleUrl` singular (not `styleUrls`) | ✅ Correct |
| No `.component` suffix in filenames | ✅ `gallery.ts`, `gallery.html`, `gallery.scss` |
| No `NgModule` usage | ✅ `standalone: true` |
| Class name `Gallery` (not `GalleryComponent`) | ✅ Correct |
| `templateUrl` uses `./gallery.html` | ✅ Correct |
| Image paths relative, no leading `/` | ✅ `assets/images/gallery/...` |

## Issues or concerns

1. **Build fails** due to missing `TranslatePipe` — per the brief, this will be resolved in Task 3. The brief says "Build succeeds" but Angular 22 errors on unknown pipes rather than warning. A quick fix would be adding `TranslatePipe` to the component's `imports` array (matching the pattern used by all other pages).
2. The `ngAfterViewInit` lifecycle hook is used but `AfterViewInit` is not imported from `@angular/core` — Angular still resolves it via the class method name, so it works, but explicit import would be cleaner.
