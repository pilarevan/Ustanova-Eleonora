# Task 6 Report: Update components to use new images

**Status:** DONE

## Commits

- `149dc98` feat: use real images in hero, service cards, and news

## Build/Test Summary

- `npx ng build` — **success** (no errors, only pre-existing Sass @import deprecation warning)

## Changes Made

| File | Change |
|------|--------|
| `src/app/components/hero/hero.scss:14` | Changed background URL from `hero-bg.svg` to `hero-bg.jpg` |
| `src/app/pages/home/home.html:11,19,27` | Changed 3 service card `imageUrl` from `.svg` to `.jpg` |
| `src/app/pages/news/news.ts:10` | Added `image?: string` to `NewsItem` interface |
| `src/app/pages/news/news.ts:21-23` | Added `image` field to 3 matched news items |
| `src/app/components/news-preview/news-preview.ts:22-36` | Added `image` field to 3 preview items |
| `src/app/pages/article/article.ts:10` | Added `image?: string` to `ArticleData` interface |
| `src/app/pages/article/article.ts:13-15` | Added `image` field to 3 matched articles |
| `src/app/pages/article/article.ts:31,33,39` | Added `image` property and constructor assignment |
| `src/app/pages/news/news.html:13-15` | Added conditional `<img>` tag to news items |
| `src/app/components/news-preview/news-preview.html:7-9` | Added conditional `<img>` tag to preview cards |
| `src/app/pages/article/article.html:5-7` | Added conditional `<img>` tag to article hero |
