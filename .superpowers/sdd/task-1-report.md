# Task 1 Report: Scaffold Angular Project + Global Styles

## What I Implemented

1. **Installed Angular CLI globally** via `npm install -g @angular/cli`
2. **Scaffolded Angular 17 project** with `ng new ustanova-eleonora --routing --style=scss --standalone --skip-tests --skip-git`
3. **Moved scaffolded contents to repo root** and removed the temp subdirectory
4. **Merged `.gitignore`** — combined existing project-specific entries (`.aider*`, `.env`, `.venv`, `/aider stuff`) with the Angular scaffolded `.gitignore`
5. **Added Inter font** to `src/index.html` with Google Fonts preconnect links
6. **Created `src/styles/global.scss`** with CSS custom properties (colors, fonts), reset styles, utility classes (`.container`, `.section-*`, `.btn-*`)
7. **Updated `src/styles.scss`** to import `global.scss`

## What I Tested

- `npx ng build` — builds successfully (output to `dist/ustanova-eleonora`)
- `npx ng serve` — serves at `http://localhost:4201` with watch mode enabled
- Both commands show only a Sass `@import` deprecation warning (cosmetic, not breaking)

## Files Changed

| File | Action |
|------|--------|
| `.gitignore` | Modified (merged Angular + project entries) |
| `.editorconfig` | Created |
| `.prettierrc` | Created |
| `.vscode/extensions.json` | Created |
| `.vscode/launch.json` | Created |
| `.vscode/tasks.json` | Created |
| `README.md` | Created |
| `angular.json` | Created |
| `package.json` | Created |
| `package-lock.json` | Created |
| `public/favicon.ico` | Created |
| `src/index.html` | Created |
| `src/main.ts` | Created |
| `src/styles.scss` | Created |
| `src/styles/global.scss` | Created |
| `src/app/app.ts` | Created |
| `src/app/app.html` | Created |
| `src/app/app.scss` | Created |
| `src/app/app.config.ts` | Created |
| `src/app/app.routes.ts` | Created |
| `tsconfig.json` | Created |
| `tsconfig.app.json` | Created |
| `tsconfig.spec.json` | Created |

## Self-Review Findings

- Sass `@import` deprecation warning for `src/styles.scss:1`. The brief explicitly specified `@import` so this is expected. Can migrate to `@use` later.
- No other issues found.

## Issues / Concerns

None.
