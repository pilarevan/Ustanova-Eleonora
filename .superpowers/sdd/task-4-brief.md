### Task 4: Shared Reusable Components (Hero, ServiceCard, Stats, NewsPreview, ContactBlock, Footer)

**Files:**
- Create: `src/app/components/hero/hero.component.ts`
- Create: `src/app/components/hero/hero.component.html`
- Create: `src/app/components/hero/hero.component.scss`
- Create: `src/app/components/service-card/service-card.component.ts`
- Create: `src/app/components/service-card/service-card.component.html`
- Create: `src/app/components/service-card/service-card.component.scss`
- Create: `src/app/components/stats/stats.component.ts`
- Create: `src/app/components/stats/stats.component.html`
- Create: `src/app/components/stats/stats.component.scss`
- Create: `src/app/components/news-preview/news-preview.component.ts`
- Create: `src/app/components/news-preview/news-preview.component.html`
- Create: `src/app/components/news-preview/news-preview.component.scss`
- Create: `src/app/components/contact-block/contact-block.component.ts`
- Create: `src/app/components/contact-block/contact-block.component.html`
- Create: `src/app/components/contact-block/contact-block.component.scss`
- Create: `src/app/components/footer/footer.component.ts`
- Create: `src/app/components/footer/footer.component.html`
- Create: `src/app/components/footer/footer.component.scss`

**Interfaces:**
- Consumes: `TranslateService`
- Produces: 6 standalone components ready to compose into pages

- [ ] **Step 1: Generate all components**

```bash
npx ng generate component components/hero --standalone --skip-tests
npx ng generate component components/service-card --standalone --skip-tests
npx ng generate component components/stats --standalone --skip-tests
npx ng generate component components/news-preview --standalone --skip-tests
npx ng generate component components/contact-block --standalone --skip-tests
npx ng generate component components/footer --standalone --skip-tests
```

- [ ] **Step 2: Implement Hero component**

```html
<section class="hero">
  <div class="hero__overlay"></div>
  <div class="hero__content container">
    <h1 class="hero__tagline">{{ 'hero.tagline' | translate }}</h1>
    <p class="hero__subtitle">{{ 'hero.subtitle' | translate }}</p>
    <a routerLink="/sanitetski-prijevoz" class="btn btn-primary btn-lg">{{ 'hero.cta' | translate }}</a>
  </div>
</section>
```

```scss
.hero {
  position: relative;
  height: 100vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  background: var(--color-darker);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: url('/assets/images/hero-bg.jpg') center/cover no-repeat;
    opacity: 0.4;
  }

  &__overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, var(--color-darker) 0%, transparent 50%, var(--color-dark) 100%);
  }

  &__content {
    position: relative;
    z-index: 1;
    max-width: 800px;
  }

  &__tagline {
    font-size: clamp(2.5rem, 6vw, 5rem);
    color: var(--color-light);
    margin-bottom: 1.5rem;
  }

  &__subtitle {
    font-size: clamp(1rem, 2vw, 1.25rem);
    color: var(--color-gray);
    margin-bottom: 2.5rem;
    max-width: 600px;
    line-height: 1.6;
  }
}

.btn-lg {
  padding: 1rem 3rem;
  font-size: 1.125rem;
}
```

```typescript
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterModule, TranslatePipe],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {}
```

- [ ] **Step 3: Implement ServiceCard component**

```typescript
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [RouterModule, TranslatePipe, CommonModule],
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.scss'
})
export class ServiceCardComponent {
  @Input() titleKey = '';
  @Input() descKey = '';
  @Input() link = '';
  @Input() imageUrl = '';
  @Input() index = 0;
}
```

```html
<article class="service-card" [style.--index]="index">
  <div class="service-card__image-wrap">
    <img [src]="imageUrl" [alt]="titleKey | translate" class="service-card__image">
    <div class="service-card__overlay"></div>
  </div>
  <div class="service-card__body">
    <h3 class="service-card__title">{{ titleKey | translate }}</h3>
    <p class="service-card__desc">{{ descKey | translate }}</p>
    <a [routerLink]="link" class="btn btn-outline">{{ 'services.transport.explore' | translate }}</a>
  </div>
</article>
```

```scss
.service-card {
  position: relative;
  overflow: hidden;
  animation: fadeUp 0.6s ease-out both;
  animation-delay: calc(var(--index) * 0.15s);

  &__image-wrap {
    position: relative;
    height: 400px;
    overflow: hidden;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s;
  }

  &:hover &__image {
    transform: scale(1.05);
  }

  &__overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, var(--color-dark) 0%, transparent 60%);
  }

  &__body {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 2rem;
    color: var(--color-light);
  }

  &__title {
    font-size: 1.75rem;
    margin-bottom: 0.5rem;
  }

  &__desc {
    font-size: 0.95rem;
    opacity: 0.9;
    margin-bottom: 1.5rem;
    max-width: 400px;
  }
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
```

- [ ] **Step 4: Implement Stats component**

```html
<section class="stats section-darker">
  <div class="container">
    <div class="stats__grid">
      <div class="stats__item">
        <span class="stats__number">29+</span>
        <span class="stats__label">{{ 'stats.years' | translate }}</span>
      </div>
      <div class="stats__item">
        <span class="stats__number">40+</span>
        <span class="stats__label">{{ 'stats.employees' | translate }}</span>
      </div>
      <div class="stats__item">
        <span class="stats__number">40+</span>
        <span class="stats__label">{{ 'stats.vehicles' | translate }}</span>
      </div>
      <div class="stats__item">
        <span class="stats__number">9000+</span>
        <span class="stats__label">{{ 'stats.patients' | translate }}</span>
      </div>
    </div>
  </div>
</section>
```

```scss
.stats {
  padding: 5rem 0;

  &__grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    text-align: center;
  }

  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  &__number {
    font-family: var(--font-heading);
    font-weight: 900;
    font-size: clamp(3rem, 5vw, 5rem);
    color: var(--color-accent);
    line-height: 1;
  }

  &__label {
    font-size: 0.9rem;
    opacity: 0.8;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
}

@media (max-width: 768px) {
  .stats__grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
  }
}
```

```typescript
import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.scss'
})
export class StatsComponent {}
```

- [ ] **Step 5: Implement NewsPreview component**

```typescript
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

interface NewsItem {
  title: string;
  date: string;
  slug: string;
  image?: string;
}

@Component({
  selector: 'app-news-preview',
  standalone: true,
  imports: [RouterModule, TranslatePipe, CommonModule],
  templateUrl: './news-preview.component.html',
  styleUrl: './news-preview.component.scss'
})
export class NewsPreviewComponent {
  news: NewsItem[] = [
    {
      title: 'Ustanova Eleonora: Nova vozila, novi standardi u medicinskom prijevozu',
      date: '9 June 2025',
      slug: 'ustanova-eleonora-nova-vozila-novi-standardi-u-medicinskom-prijevozu'
    },
    {
      title: 'Team-Building Together',
      date: '15 November 2025',
      slug: 'team-building-together'
    },
    {
      title: 'A Special Visit for Our 29th Anniversary',
      date: '13 December 2025',
      slug: '29th-anniversary-special-visit'
    }
  ];
}
```

```html
<section class="news-preview section-light">
  <div class="container">
    <h2 class="news-preview__title">{{ 'news.title' | translate }}</h2>
    <div class="news-preview__grid">
      <article class="news-card" *ngFor="let item of news">
        <div class="news-card__date">{{ item.date }}</div>
        <h3 class="news-card__title">{{ item.title }}</h3>
        <a [routerLink]="['/novosti', item.slug]" class="news-card__link">{{ 'news.readMore' | translate }} →</a>
      </article>
    </div>
  </div>
</section>
```

```scss
.news-preview {
  padding: 5rem 0;

  &__title {
    font-size: clamp(2rem, 4vw, 3rem);
    margin-bottom: 3rem;
    text-align: center;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
}

.news-card {
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
  .news-preview__grid {
    grid-template-columns: 1fr;
  }
}
```

- [ ] **Step 6: Implement ContactBlock component**

```html
<section class="contact section-dark" id="contact">
  <div class="container">
    <h2 class="contact__title">{{ 'contact.title' | translate }}</h2>
    <div class="contact__grid">
      <div class="contact__item">
        <h3>{{ 'contact.healthcare.title' | translate }}</h3>
        <p class="contact__hours">{{ 'contact.healthcare.hours' | translate }}</p>
        <p>{{ 'contact.healthcare.phone' | translate }}</p>
        <p>{{ 'contact.healthcare.email' | translate }}</p>
      </div>
      <div class="contact__item">
        <h3>{{ 'contact.transport.title' | translate }}</h3>
        <p class="contact__hours">{{ 'contact.transport.hours' | translate }}</p>
        <p>{{ 'contact.transport.phone' | translate }}</p>
        <p>{{ 'contact.transport.email' | translate }}</p>
      </div>
      <div class="contact__item">
        <h3>{{ 'contact.physiotherapy.title' | translate }}</h3>
        <p class="contact__hours">{{ 'contact.physiotherapy.hours' | translate }}</p>
        <p>{{ 'contact.physiotherapy.phone' | translate }}</p>
        <p>{{ 'contact.physiotherapy.email' | translate }}</p>
      </div>
      <div class="contact__item">
        <h3>{{ 'contact.accounting.title' | translate }}</h3>
        <p class="contact__hours">{{ 'contact.accounting.hours' | translate }}</p>
        <p>{{ 'contact.accounting.phone' | translate }}</p>
        <p>{{ 'contact.accounting.email' | translate }}</p>
      </div>
    </div>
    <div class="contact__addresses">
      <p>{{ 'contact.address.line1' | translate }}</p>
      <p>{{ 'contact.address.line2' | translate }}</p>
    </div>
    <div class="contact__social">
      <a href="https://hr-hr.facebook.com/ustanova.eleonora/" target="_blank" rel="noopener">Facebook</a>
      <a href="https://instagram.com/ustanova_eleonora" target="_blank" rel="noopener">Instagram</a>
    </div>
    <div class="contact__gdpr">
      <p>{{ 'contact.gdpr' | translate }}</p>
    </div>
  </div>
</section>
```

```scss
.contact {
  padding: 5rem 0;

  &__title {
    font-size: clamp(2rem, 4vw, 3rem);
    text-align: center;
    margin-bottom: 3rem;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    margin-bottom: 4rem;
  }

  &__item {
    h3 {
      font-size: 1.1rem;
      color: var(--color-accent);
      margin-bottom: 1rem;
    }

    p {
      font-size: 0.9rem;
      opacity: 0.9;
      margin-bottom: 0.25rem;
    }
  }

  &__hours {
    font-size: 0.8rem !important;
    opacity: 0.6 !important;
    margin-bottom: 0.75rem !important;
  }

  &__addresses {
    text-align: center;
    margin-bottom: 2rem;
    font-size: 0.95rem;
    opacity: 0.8;
    line-height: 1.8;
  }

  &__social {
    text-align: center;
    margin-bottom: 2rem;
    display: flex;
    justify-content: center;
    gap: 1.5rem;

    a {
      color: var(--color-light);
      font-weight: 700;
      font-size: 0.9rem;
      opacity: 0.7;
      transition: opacity 0.2s;

      &:hover {
        opacity: 1;
        color: var(--color-accent);
      }
    }
  }

  &__gdpr {
    max-width: 700px;
    margin: 0 auto;
    font-size: 0.75rem;
    opacity: 0.5;
    text-align: center;
    line-height: 1.6;
  }
}

@media (max-width: 768px) {
  .contact__grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 480px) {
  .contact__grid {
    grid-template-columns: 1fr;
  }
}
```

```typescript
import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-block',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './contact-block.component.html',
  styleUrl: './contact-block.component.scss'
})
export class ContactBlockComponent {}
```

- [ ] **Step 7: Implement Footer component**

```html
<footer class="footer section-darker">
  <div class="container">
    <div class="footer__inner">
      <span class="footer__logo">Eleonora</span>
      <p class="footer__rights">{{ 'footer.rights' | translate }}</p>
    </div>
  </div>
</footer>
```

```scss
.footer {
  padding: 2rem 0;

  &__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__logo {
    font-family: var(--font-heading);
    font-weight: 900;
    font-size: 1.25rem;
    color: var(--color-accent);
  }

  &__rights {
    font-size: 0.8rem;
    opacity: 0.6;
  }
}

@media (max-width: 480px) {
  .footer__inner {
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
  }
}
```

```typescript
import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {}
```

- [ ] **Step 8: Verify all components compile**

```bash
npx ng build
# Should succeed with no errors
```

- [ ] **Step 9: Commit**

```bash
git add -A
git commit -m "feat: add shared components (hero, service-card, stats, news-preview, contact-block, footer)"
```
