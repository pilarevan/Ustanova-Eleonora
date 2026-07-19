# Task 2: Install i18n + Set Up Translation Files

## Status: DONE

## Summary

- Installed `@ngx-translate/core@18.0.0` and `@ngx-translate/http-loader@18.0.0`
- Created 4 translation files in `src/app/i18n/`: `hr.json`, `en.json`, `it.json`, `de.json`
- Updated `src/app/app.config.ts` using the v18 provider-based API (`provideTranslateService`, `provideTranslateHttpLoader`, `provideHttpClient`)
- Updated `angular.json` to include `src/app/i18n` in assets
- Used `prefix: './i18n/'` and `suffix: '.json'` for the HTTP loader
- Set `lang: 'hr'` as default language

## Notes

- @ngx-translate v18 uses a completely different API from v15 — no `TranslateModule.forRoot()`, no `TranslateHttpLoader` constructor with HttpClient param. Instead uses `provideTranslateService()` and `provideTranslateHttpLoader()`.
- Had to fix a missing `types/` directory in `@angular/common@22.0.7` (npm install artifact) to resolve TS declaration errors for `@angular/common/http`.

## Commits

- `026df8e` feat: add i18n with @ngx-translate and 4 language files

## Build

- `ng build` completed successfully (252 kB initial main, 1.4 kB styles)
- Sass deprecation warning for `@import` (pre-existing, not introduced here)
