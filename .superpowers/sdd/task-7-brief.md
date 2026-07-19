### Task 7: News Listing + Article Pages

**Files:**
- Modify: `src/app/pages/news/news.ts`
- Modify: `src/app/pages/news/news.html`
- Modify: `src/app/pages/news/news.scss`
- Modify: `src/app/pages/article/article.ts`
- Modify: `src/app/pages/article/article.html`
- Modify: `src/app/pages/article/article.scss`

**Interfaces:**
- Consumes: routes from Task 5
- Produces: `/novosti` listing and `/novosti/:slug` article pages

Stub files already exist. Regenerate with CLI (overwrites stubs), then implement.

**IMPORTANT: Project conventions**
- Files are named `news.ts`, `news.html`, `news.scss` (no `.component` suffix)
- Class names: `News`, `Article` (no `Component` suffix)
- Import `TranslatePipe` standalone (NOT `TranslateModule`)
- Use `styleUrl` (singular)
- Template URLs use `./news.html` format

- [ ] **Step 1: Generate components (overwrite stubs)**

```bash
npx ng generate component pages/news --standalone --skip-tests
npx ng generate component pages/article --standalone --skip-tests
```

- [ ] **Step 2: Implement News listing page**

`src/app/pages/news/news.ts`:
```typescript
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

interface NewsItem {
  title: string;
  date: string;
  slug: string;
}

@Component({
  standalone: true,
  selector: 'app-news',
  imports: [RouterModule, TranslatePipe, CommonModule],
  templateUrl: './news.html',
  styleUrl: './news.scss'
})
export class News {
  news: NewsItem[] = [
    { title: 'A Special Visit for Our 29th Anniversary', date: '13 December 2025', slug: '29th-anniversary-special-visit' },
    { title: 'Team-Building Together', date: '15 November 2025', slug: 'team-building-together' },
    { title: 'Ustanova Eleonora: Nova vozila, novi standardi u medicinskom prijevozu', date: '9 June 2025', slug: 'ustanova-eleonora-nova-vozila-novi-standardi-u-medicinskom-prijevozu' },
    { title: 'Sastanci koji grade kvalitetu', date: '20 March 2025', slug: 'sastanci-koji-grade-kvalitetu' },
    { title: 'Drum Bun: Sigurna putovanja i nova otkrića', date: '1 March 2025', slug: 'drum-bun-sigurna-putovanja' },
    { title: 'Zajedno 28 godina', date: '7 December 2024', slug: 'zajedno-28-godina' },
  ];
}
```

`src/app/pages/news/news.html`:
```html
<div class="news-page">
  <section class="news-hero section-darker">
    <div class="container">
      <h1>{{ 'news.title' | translate }}</h1>
    </div>
  </section>

  <section class="news-list section-light">
    <div class="container">
      <div class="news-list__grid">
        <article class="news-item" *ngFor="let item of news">
          <span class="news-item__date">{{ item.date }}</span>
          <h2 class="news-item__title">{{ item.title }}</h2>
          <a [routerLink]="['/novosti', item.slug]" class="news-item__link">{{ 'news.readMore' | translate }} →</a>
        </article>
      </div>
    </div>
  </section>
</div>
```

`src/app/pages/news/news.scss`:
```scss
.news-page {
  padding-top: 80px;
}

.news-hero {
  padding: 6rem 0 4rem;

  h1 {
    font-size: clamp(2.5rem, 5vw, 4rem);
  }
}

.news-list {
  padding: 5rem 0;

  &__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
}

.news-item {
  padding: 2rem;
  background: var(--color-gray);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-4px);
  }

  &__date {
    font-size: 0.8rem;
    color: var(--color-text-light);
    margin-bottom: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  &__title {
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 1rem;
    line-height: 1.4;
  }

  &__link {
    color: var(--color-accent);
    font-weight: 700;
    font-size: 0.9rem;

    &:hover {
      text-decoration: underline;
    }
  }
}

@media (max-width: 768px) {
  .news-list__grid {
    grid-template-columns: 1fr;
  }
}
```

- [ ] **Step 3: Implement Article page**

`src/app/pages/article/article.ts`:
```typescript
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-article',
  imports: [RouterModule, TranslatePipe, CommonModule],
  templateUrl: './article.html',
  styleUrl: './article.scss'
})
export class Article {
  slug = '';

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.slug = params.get('slug') || '';
    });
  }
}
```

`src/app/pages/article/article.html`:
```html
<div class="article-page">
  <section class="article-hero section-darker">
    <div class="container">
      <a routerLink="/novosti" class="article__back">← {{ 'news.title' | translate }}</a>
      <h1>{{ slug }}</h1>
    </div>
  </section>

  <section class="article-content section-light">
    <div class="container">
      <p style="opacity:0.5;font-style:italic">Article content loading...</p>
    </div>
  </section>
</div>
```

`src/app/pages/article/article.scss`:
```scss
.article-page {
  padding-top: 80px;
}

.article-hero {
  padding: 6rem 0 4rem;

  h1 {
    font-size: clamp(2rem, 4vw, 3rem);
  }
}

.article__back {
  display: inline-block;
  margin-bottom: 2rem;
  color: var(--color-accent);
  font-weight: 700;
  font-size: 0.9rem;
}

.article-content {
  padding: 3rem 0;
  min-height: 300px;
}
```

- [ ] **Step 4: Verify build**

```bash
npx ng build
```

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: add news listing and article pages"
```
