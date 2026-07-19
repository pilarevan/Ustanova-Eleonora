# Task 3 Report

**Status:** DONE

## Commits
- `400842e` — feat: add Header component with nav and language switcher

## Test Summary
`npx ng build` passes successfully (only pre-existing Sass deprecation warning).

## Concerns
- `@ngx-translate/core` v18 has no `TranslateModule` — used standalone `TranslatePipe` instead.
- `currentLang` returns a `Signal` in v18; called as `this.translate.currentLang()` in the getter.
- Component files use CLI-generated names (`header.ts`/`.html`/`.scss`), not the `header.component.*` convention from the brief.
