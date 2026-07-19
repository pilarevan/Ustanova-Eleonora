# Ustanova Eleonora Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a bold, multi-language Angular 17+ website for Ustanova Eleonora — a single-page storyteller homepage with deep-dive service pages.

**Architecture:** Angular 17+ standalone component app with lazy-loaded routes for 3 service pages + news. Runtime i18n via `@ngx-translate/core`. No backend — fully static.

**Tech Stack:** Angular 17+, @ngx-translate/core, SCSS, Angular Router (lazy loading)

## Global Constraints

- Angular 17+ with standalone components (no NgModules)
- SCSS for all styling
- `@ngx-translate/core` for i18n (NOT `@angular/localize`)
- 4 languages: HR, EN, IT, DE — default to HR
- Color scheme: deep navy/charcoal (#1a1a2e / #16213e) backgrounds, white text, warm teal accent (#0D9488)
- Typography: Inter (headings), system sans-serif (body)

---
---

### Task 1: Scaffold Angular Project + Global Styles

**Files:**
- Create: everything from `ng new`
- Create: `src/styles/global.scss`
- Modify: `src/styles.scss`
- Modify: `src/index.html`

**Interfaces:**
- Consumes: nothing
- Produces: working `ng serve` with global styles applied

- [ ] **Step 1: Install Angular CLI and scaffold project**

```bash
npm install -g @angular/cli
cd C:\Users\Pozitron\Antigravity\reimagined-palm-tree
ng new ustanova-eleonora --routing --style=scss --standalone --skip-tests
```

Move contents up one level so the project lives in repo root:

```bash
# After scaffold, move everything from ustanova-eleonora/ up to repo root
# Then remove the empty directory
```

- [ ] **Step 2: Add Inter font and set up global styles**

Modify `src/index.html` — add Inter font link in `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap" rel="stylesheet">
```

Replace `src/styles.scss` content:

```scss
@import './styles/global';
```

Create `src/styles/global.scss`:

```scss
:root {
  --color-dark: #1a1a2e;
  --color-darker: #16213e;
  --color-accent: #0D9488;
  --color-accent-hover: #0f766e;
  --color-light: #ffffff;
  --color-gray: #e2e8f0;
  --color-text: #1a1a2e;
  --color-text-light: #64748b;
  --font-heading: 'Inter', sans-serif;
  --font-body: system-ui, -apple-system, sans-serif;
}

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-body);
  color: var(--color-text);
  line-height: 1.6;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  font-weight: 900;
  line-height: 1.1;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.section-dark {
  background: var(--color-dark);
  color: var(--color-light);
}

.section-darker {
  background: var(--color-darker);
  color: var(--color-light);
}

.section-light {
  background: var(--color-light);
  color: var(--color-text);
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 1rem;
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 0;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-primary {
  background: var(--color-accent);
  color: var(--color-light);
}

.btn-primary:hover {
  background: var(--color-accent-hover);
  transform: translateY(-2px);
}

.btn-outline {
  background: transparent;
  color: var(--color-light);
  border: 2px solid var(--color-light);
}

.btn-outline:hover {
  background: var(--color-light);
  color: var(--color-dark);
}
```

- [ ] **Step 3: Verify project serves**

```bash
cd C:\Users\Pozitron\Antigravity\reimagined-palm-tree
npx ng serve
# Open http://localhost:4200 — should see default Angular page with new styles
```

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "feat: scaffold Angular 17 project with global styles"
```

---

### Task 2: Install i18n + Set Up Translation Files

**Files:**
- Create: `src/app/i18n/hr.json`
- Create: `src/app/i18n/en.json`
- Create: `src/app/i18n/it.json`
- Create: `src/app/i18n/de.json`
- Modify: `src/app/app.config.ts`

**Interfaces:**
- Consumes: nothing
- Produces: `TranslateService` available app-wide with 4 language files loaded

- [ ] **Step 1: Install @ngx-translate dependencies**

```bash
cd C:\Users\Pozitron\Antigravity\reimagined-palm-tree
npm install @ngx-translate/core @ngx-translate/http-loader
```

- [ ] **Step 2: Create translation files**

Create `src/app/i18n/hr.json`:

```json
{
  "nav": {
    "about": "O NAMA",
    "transport": "SANITETSKI PRIJEVOZ",
    "healthcare": "ZDRAVSTVENA NJEGA",
    "physiotherapy": "FIZIKALNA TERAPIJA",
    "news": "NOVOSTI",
    "contact": "KONTAKT"
  },
  "hero": {
    "tagline": "Medicinski prijevoz diljem Europe — sa srcem.",
    "subtitle": "Profesionalna zdravstvena njega i prijevoz s punom pažnjom prema vašim potrebama.",
    "cta": "Saznajte više"
  },
  "services": {
    "transport": {
      "title": "Sanitetski prijevoz",
      "description": "Medicinski prijevoz pacijenata diljem Hrvatske i Europe. 24/7, sigurno i pouzdano.",
      "explore": "Istraži →"
    },
    "healthcare": {
      "title": "Zdravstvena njega u kući",
      "description": "Kvalitetna zdravstvena njega u udobnosti vašeg doma. Naš tim stručnjaka posvećen je vašem blagostanju.",
      "explore": "Istraži →"
    },
    "physiotherapy": {
      "title": "Fizikalna terapija u kući",
      "description": "Individualizirana fizikalna terapija u vašem domu za brži oporavak i bolju pokretljivost.",
      "explore": "Istraži →"
    }
  },
  "stats": {
    "years": "29+ godina iskustva",
    "employees": "40+ djelatnika",
    "vehicles": "40+ vozila",
    "patients": "9000+ pacijenata godišnje"
  },
  "news": {
    "title": "Novosti",
    "readMore": "Pročitaj više"
  },
  "contact": {
    "title": "Kontakt",
    "healthcare": {
      "title": "Zdravstvena njega",
      "hours": "Pon-Pet 07:00-15:00",
      "phone": "00385 52 451221",
      "email": "eleonora.nalozi@gmail.com"
    },
    "transport": {
      "title": "Sanitetski prijevoz",
      "hours": "Svaki dan 0-24",
      "phone": "00385 91 451 2211",
      "email": "ustanova.eleonora@gmail.com"
    },
    "physiotherapy": {
      "title": "Fizikalna terapija",
      "hours": "Pon-Pet 07:00-15:00",
      "phone": "00385 52 434 435",
      "email": "eleonorafizikalna@gmail.com"
    },
    "accounting": {
      "title": "Računovodstvo",
      "hours": "Pon-Pet 07:00-15:00",
      "phone": "00385 52 451 221",
      "email": "racunovodstvo.eleonora@gmail.com"
    },
    "address": {
      "line1": "Mauro Gioseffi 2, Poreč 52440",
      "line2": "Antonci 25a, Nova Vas 52446"
    },
    "gdpr": "Ustanova za zdravstvenu njegu \"Eleonora\" je prilagodila sve uvjete poslovanja prema novoj Uredbi o GDPR-u. Od klijenata prikupljamo i obrađujemo podatke poput imena i prezimena te ostalih kontakt podataka neophodnih za provođenje naših usluga. Za sva dodatna pitanja slobodno nas kontaktirajte."
  },
  "footer": {
    "rights": "© 2026 Ustanova za zdravstvenu njegu Eleonora. Sva prava pridržana."
  }
}
```

Copy the same structure for `en.json`, `it.json`, `de.json` with translated values.

- [ ] **Step 3: Configure TranslateModule in app.config.ts**

Modify `src/app/app.config.ts`:

```typescript
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { routes } from './app.routes';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './i18n/', '.json');
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule),
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        },
        defaultLanguage: 'hr'
      })
    )
  ]
};
```

Add to `angular.json` under `assets` to include i18n folder:

```json
"assets": [
  "src/favicon.ico",
  "src/assets",
  "src/app/i18n"
]
```

- [ ] **Step 4: Verify build**

```bash
npx ng build
# Should succeed with no errors
```

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: add i18n with @ngx-translate and 4 language files"
```

---

### Task 3: Header Component with Navigation + Language Switcher

**Files:**
- Create: `src/app/components/header/header.component.ts`
- Create: `src/app/components/header/header.component.html`
- Create: `src/app/components/header/header.component.scss`

**Interfaces:**
- Consumes: `TranslateService` (from Task 2)
- Produces: `<app-header>` — sticky nav with logo, links, language switcher

- [ ] **Step 1: Create Header component**

```bash
npx ng generate component components/header --standalone --skip-tests
```

- [ ] **Step 2: Implement header template**

`header.component.html`:

```html
<header class="header" [class.scrolled]="isScrolled">
  <div class="header__inner container">
    <a routerLink="/" class="header__logo">
      <span class="header__logo-text">Eleonora</span>
    </a>

    <nav class="header__nav" [class.open]="menuOpen">
      <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">{{ 'nav.about' | translate }}</a>
      <a routerLink="/sanitetski-prijevoz" routerLinkActive="active">{{ 'nav.transport' | translate }}</a>
      <a routerLink="/zdravstvena-njega" routerLinkActive="active">{{ 'nav.healthcare' | translate }}</a>
      <a routerLink="/fizikalna-terapija" routerLinkActive="active">{{ 'nav.physiotherapy' | translate }}</a>
      <a routerLink="/novosti" routerLinkActive="active">{{ 'nav.news' | translate }}</a>
      <a routerLink="/" fragment="contact">{{ 'nav.contact' | translate }}</a>

      <div class="header__lang">
        <button *ngFor="let lang of languages"
                [class.active]="currentLang === lang"
                (click)="switchLang(lang)">
          {{ lang | uppercase }}
        </button>
      </div>
    </nav>

    <button class="header__hamburger" (click)="toggleMenu()" aria-label="Toggle menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</header>
```

- [ ] **Step 3: Implement Header component logic**

`header.component.ts`:

```typescript
import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isScrolled = false;
  menuOpen = false;
  languages = ['hr', 'en', 'it', 'de'];

  get currentLang() {
    return this.translate.currentLang;
  }

  constructor(private translate: TranslateService) {}

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
```

- [ ] **Step 4: Style the Header**

`header.component.scss`:

```scss
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 0;
  transition: all 0.3s;
  background: transparent;

  &.scrolled {
    background: var(--color-dark);
    padding: 0.5rem 0;
    box-shadow: 0 2px 20px rgba(0,0,0,0.3);
  }

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__logo {
    font-family: var(--font-heading);
    font-weight: 900;
    font-size: 1.5rem;
    color: var(--color-light);
  }

  &__nav {
    display: flex;
    align-items: center;
    gap: 2rem;

    a {
      color: var(--color-light);
      font-weight: 600;
      font-size: 0.875rem;
      letter-spacing: 0.05em;
      transition: color 0.2s;

      &:hover, &.active {
        color: var(--color-accent);
      }
    }
  }

  &__lang {
    display: flex;
    gap: 0.25rem;

    button {
      background: transparent;
      border: 1px solid rgba(255,255,255,0.3);
      color: var(--color-light);
      padding: 0.25rem 0.5rem;
      font-size: 0.75rem;
      cursor: pointer;
      transition: all 0.2s;
      font-family: var(--font-heading);
      font-weight: 700;

      &.active, &:hover {
        background: var(--color-accent);
        border-color: var(--color-accent);
      }
    }
  }

  &__hamburger {
    display: none;
    flex-direction: column;
    gap: 4px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;

    span {
      display: block;
      width: 24px;
      height: 2px;
      background: var(--color-light);
      transition: all 0.3s;
    }
  }
}

@media (max-width: 768px) {
  .header {
    &__nav {
      position: fixed;
      top: 0;
      right: -100%;
      width: 280px;
      height: 100vh;
      background: var(--color-darker);
      flex-direction: column;
      padding: 5rem 2rem;
      transition: right 0.3s;
      gap: 1.5rem;

      &.open {
        right: 0;
      }
    }

    &__hamburger {
      display: flex;
    }
  }
}
```

- [ ] **Step 5: Verify in browser**

```bash
npx ng serve
# Check header renders on homepage, sticky on scroll, hamburger on mobile
```

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "feat: add Header component with nav and language switcher"
```

---

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
- Produces: 7 standalone components ready to compose into pages

- [ ] **Step 1: Generate all components**

```bash
for %c in (hero service-card stats news-preview contact-block footer) do npx ng generate component components/%c --standalone --skip-tests
```

- [ ] **Step 2: Implement Hero component**

`hero.component.html`:
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

`hero.component.scss`:
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

`hero.component.ts`:
```typescript
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterModule, TranslateModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {}
```

- [ ] **Step 3: Implement ServiceCard component**

`service-card.component.ts`:
```typescript
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [RouterModule, TranslateModule, CommonModule],
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.scss']
})
export class ServiceCardComponent {
  @Input() titleKey = '';
  @Input() descKey = '';
  @Input() link = '';
  @Input() imageUrl = '';
  @Input() index = 0;
}
```

`service-card.component.html`:
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

`service-card.component.scss`:
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

`stats.component.html`:
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

`stats.component.scss`:
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

- [ ] **Step 5: Implement NewsPreview component**

`news-preview.component.ts`:
```typescript
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
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
  imports: [RouterModule, TranslateModule, CommonModule],
  templateUrl: './news-preview.component.html',
  styleUrls: ['./news-preview.component.scss']
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

`news-preview.component.html`:
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

`news-preview.component.scss`:
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

`contact-block.component.html`:
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

`contact-block.component.scss`:
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

- [ ] **Step 7: Implement Footer component**

`footer.component.html`:
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

`footer.component.scss`:
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

---

### Task 5: Homepage — Compose All Components + Routes

**Files:**
- Create: `src/app/pages/home/home.component.ts`
- Create: `src/app/pages/home/home.component.html`
- Create: `src/app/pages/home/home.component.scss`
- Modify: `src/app/app.routes.ts`
- Modify: `src/app/app.component.html`
- Modify: `src/app/app.component.ts`
- Modify: `src/app/app.component.scss`

**Interfaces:**
- Consumes: HeaderComponent, HeroComponent, ServiceCardComponent, StatsComponent, NewsPreviewComponent, ContactBlockComponent, FooterComponent
- Produces: Working homepage at `/`

- [ ] **Step 1: Generate Home page component**

```bash
npx ng generate component pages/home --standalone --skip-tests
```

- [ ] **Step 2: Implement Home page**

`home.component.html`:
```html
<app-hero></app-hero>

<section class="services section-dark">
  <div class="container">
    <div class="services__grid">
      <app-service-card
        titleKey="services.transport.title"
        descKey="services.transport.description"
        link="/sanitetski-prijevoz"
        imageUrl="assets/images/service-transport.jpg"
        [index]="0">
      </app-service-card>
      <app-service-card
        titleKey="services.healthcare.title"
        descKey="services.healthcare.description"
        link="/zdravstvena-njega"
        imageUrl="assets/images/service-healthcare.jpg"
        [index]="1">
      </app-service-card>
      <app-service-card
        titleKey="services.physiotherapy.title"
        descKey="services.physiotherapy.description"
        link="/fizikalna-terapija"
        imageUrl="assets/images/service-physio.jpg"
        [index]="2">
      </app-service-card>
    </div>
  </div>
</section>

<app-stats></app-stats>
<app-news-preview></app-news-preview>
<app-contact-block></app-contact-block>
```

`home.component.scss`:
```scss
.services {
  padding: 5rem 0;

  &__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0;
  }
}

@media (max-width: 768px) {
  .services__grid {
    grid-template-columns: 1fr;
  }
}
```

- [ ] **Step 3: Set up routing and app shell**

`src/app/app.routes.ts`:
```typescript
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'sanitetski-prijevoz',
    loadComponent: () => import('./pages/medical-transport/medical-transport.component').then(m => m.MedicalTransportComponent)
  },
  {
    path: 'zdravstvena-njega',
    loadComponent: () => import('./pages/home-healthcare/home-healthcare.component').then(m => m.HomeHealthcareComponent)
  },
  {
    path: 'fizikalna-terapija',
    loadComponent: () => import('./pages/physical-therapy/physical-therapy.component').then(m => m.PhysicalTherapyComponent)
  },
  {
    path: 'novosti',
    loadComponent: () => import('./pages/news/news.component').then(m => m.NewsComponent)
  },
  {
    path: 'novosti/:slug',
    loadComponent: () => import('./pages/article/article.component').then(m => m.ArticleComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
```

`src/app/app.component.html`:
```html
<app-header></app-header>
<main>
  <router-outlet></router-outlet>
</main>
<app-footer></app-footer>
```

`src/app/app.component.ts`:
```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
```

`src/app/app.component.scss`:
```scss
main {
  min-height: 100vh;
}
```

- [ ] **Step 4: Verify homepage renders**

```bash
npx ng serve
# Visit http://localhost:4200 — should show full homepage with hero, services, stats, news, contact
```

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: add homepage with all components and lazy-loaded routing"
```

---

### Task 6: Service Detail Pages (Medical Transport, Home Healthcare, Physical Therapy)

**Files:**
- Create: `src/app/pages/medical-transport/medical-transport.component.ts`
- Create: `src/app/pages/medical-transport/medical-transport.component.html`
- Create: `src/app/pages/medical-transport/medical-transport.component.scss`
- Create: `src/app/pages/home-healthcare/home-healthcare.component.ts`
- Create: `src/app/pages/home-healthcare/home-healthcare.component.html`
- Create: `src/app/pages/home-healthcare/home-healthcare.component.scss`
- Create: `src/app/pages/physical-therapy/physical-therapy.component.ts`
- Create: `src/app/pages/physical-therapy/physical-therapy.component.html`
- Create: `src/app/pages/physical-therapy/physical-therapy.component.scss`

**Interfaces:**
- Consumes: routes from Task 5
- Produces: 3 lazy-loaded pages at `/sanitetski-prijevoz`, `/zdravstvena-njega`, `/fizikalna-terapija`

- [ ] **Step 1: Generate service page components**

```bash
npx ng generate component pages/medical-transport --standalone --skip-tests
npx ng generate component pages/home-healthcare --standalone --skip-tests
npx ng generate component pages/physical-therapy --standalone --skip-tests
```

- [ ] **Step 2: Implement Medical Transport page**

`medical-transport.component.html`:
```html
<div class="service-page">
  <section class="service-hero section-darker">
    <div class="container">
      <h1>{{ 'services.transport.title' | translate }}</h1>
      <p class="service-hero__intro">Medicinski prijevoz pacijenata diljem Hrvatske i cijele Europe. 24 sata dnevno, 7 dana u tjednu.</p>
    </div>
  </section>

  <section class="service-content section-light">
    <div class="container">
      <div class="service-content__grid">
        <div class="service-content__text">
          <p>Iza nas stoji dugogodišnje iskustvo od 2005. godine, tijekom kojeg smo stekli povjerenje tisuća korisnika diljem Europe. Naša prisutnost u većini europskih gradova i država omogućava nam da izvrsno poznajemo teren i pružimo medicinski prijevoz s vrhunskom preciznošću i iskustvom.</p>
          <p>Naš cilj je jednostavan – osigurati vam siguran, udoban i besprijekoran prijevoz, bez ikakvih komplikacija.</p>
        </div>
        <div class="service-content__features">
          <h3>Naš vozni park</h3>
          <ul>
            <li>40+ vozila, od čega 14 sanitetskih vozila</li>
            <li>3 nova vozila (2025) s vrhunskom udobnošću</li>
            <li>Smanjenje vibracija i buke</li>
            <li>Sigurnosni senzori za pojaseve</li>
            <li>Klimatizacija</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section class="service-cta section-dark">
    <div class="container" style="text-align:center">
      <h2>Treba vam medicinski prijevoz?</h2>
      <p style="margin-bottom:2rem;opacity:0.8">Kontaktirajte nas — tu smo za vas 0-24.</p>
      <a routerLink="/" fragment="contact" class="btn btn-primary">Kontaktirajte nas</a>
    </div>
  </section>
</div>
```

`medical-transport.component.scss`:
```scss
.service-page {
  padding-top: 80px;
}

.service-hero {
  padding: 6rem 0 4rem;

  h1 {
    font-size: clamp(2.5rem, 5vw, 4rem);
    margin-bottom: 1.5rem;
  }

  &__intro {
    font-size: 1.2rem;
    opacity: 0.85;
    max-width: 700px;
    line-height: 1.6;
  }
}

.service-content {
  padding: 5rem 0;

  &__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: start;
  }

  &__text {
    p {
      font-size: 1.05rem;
      line-height: 1.8;
      margin-bottom: 1.5rem;
    }
  }

  &__features {
    h3 {
      font-size: 1.3rem;
      margin-bottom: 1.5rem;
      color: var(--color-accent);
    }

    ul {
      list-style: none;

      li {
        padding: 0.75rem 0;
        border-bottom: 1px solid var(--color-gray);
        font-size: 1rem;

        &::before {
          content: '→ ';
          color: var(--color-accent);
          font-weight: 700;
        }
      }
    }
  }
}

.service-cta {
  padding: 5rem 0;

  h2 {
    font-size: clamp(1.8rem, 3vw, 2.5rem);
    margin-bottom: 1rem;
  }
}

@media (max-width: 768px) {
  .service-content__grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
```

- [ ] **Step 3: Implement Home Healthcare page**

`home-healthcare.component.html`:
```html
<div class="service-page">
  <section class="service-hero section-darker">
    <div class="container">
      <h1>{{ 'services.healthcare.title' | translate }}</h1>
      <p class="service-hero__intro">Sa stazom dugom 29 godina u zdravstvenoj njezi u kući, mi smo vaša iskusna ruka podrške.</p>
    </div>
  </section>

  <section class="service-content section-light">
    <div class="container">
      <div class="service-content__grid">
        <div class="service-content__text">
          <p>Naša kućna medicinska njega obuhvaća širok raspon usluga. Bilo da je riječ o vađenju krvi, mjerenju tlaka i šećera, kupanju pacijenata ili previjanju rana, mi smo tu kako bismo vam pružili stručnu i pažljivu njegu u udobnosti vašeg doma.</p>
          <p>Naš tim posvećenih medicinskih stručnjaka donosi vam sigurnost i pouzdanost u svakoj situaciji.</p>
        </div>
        <div class="service-content__features">
          <h3>Naše usluge</h3>
          <ul>
            <li>Vađenje krvi</li>
            <li>Mjerenje tlaka i šećera</li>
            <li>Kupanje pacijenata</li>
            <li>Previjanje rana</li>
            <li>Individualni plan skrbi</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section class="service-cta section-dark">
    <div class="container" style="text-align:center">
      <h2>Želite dogovoriti njegu?</h2>
      <p style="margin-bottom:2rem;opacity:0.8">Kontaktirajte nas ili se posavjetujte s vašim liječnikom.</p>
      <a routerLink="/" fragment="contact" class="btn btn-primary">Kontaktirajte nas</a>
    </div>
  </section>
</div>
```

`home-healthcare.component.scss` — copy same as medical-transport SCSS.

- [ ] **Step 4: Implement Physical Therapy page**

`physical-therapy.component.html`:
```html
<div class="service-page">
  <section class="service-hero section-darker">
    <div class="container">
      <h1>{{ 'services.physiotherapy.title' | translate }}</h1>
      <p class="service-hero__intro">Fizikalna terapija u kući omogućuje vam da se oporavljate i obnavljate snagu uz udobnost svog doma.</p>
    </div>
  </section>

  <section class="service-content section-light">
    <div class="container">
      <div class="service-content__grid">
        <div class="service-content__text">
          <p>Naš tim stručnih fizioterapeuta prilagođava terapiju vašim individualnim potrebama, koristeći napredne tehnike i opremu. Bez obzira na vaše stanje ili ozljedu, naš cilj je poboljšati vašu pokretljivost, ublažiti bol i pomoći vam da se vratite svojim svakodnevnim aktivnostima.</p>
        </div>
        <div class="service-content__features">
          <h3>Što nudimo</h3>
          <ul>
            <li>Individualizirani program terapije</li>
            <li>Napredne tehnike i oprema</li>
            <li>Poboljšanje pokretljivosti</li>
            <li>Ublažavanje boli</li>
            <li>Terapija u udobnosti vašeg doma</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section class="service-cta section-dark">
    <div class="container" style="text-align:center">
      <h2>Spremni za početak terapije?</h2>
      <p style="margin-bottom:2rem;opacity:0.8">Kontaktirajte nas i dogovorite termin.</p>
      <a routerLink="/" fragment="contact" class="btn btn-primary">Kontaktirajte nas</a>
    </div>
  </section>
</div>
```

- [ ] **Step 5: Verify all service pages load**

```bash
npx ng serve
# Visit /sanitetski-prijevoz, /zdravstvena-njega, /fizikalna-terapija
```

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "feat: add service detail pages (transport, healthcare, physiotherapy)"
```

---

### Task 7: News Listing + Article Pages

**Files:**
- Create: `src/app/pages/news/news.component.ts`
- Create: `src/app/pages/news/news.component.html`
- Create: `src/app/pages/news/news.component.scss`
- Create: `src/app/pages/article/article.component.ts`
- Create: `src/app/pages/article/article.component.html`
- Create: `src/app/pages/article/article.component.scss`

**Interfaces:**
- Consumes: routes from Task 5
- Produces: `/novosti` listing and `/novosti/:slug` article pages

- [ ] **Step 1: Generate components**

```bash
npx ng generate component pages/news --standalone --skip-tests
npx ng generate component pages/article --standalone --skip-tests
```

- [ ] **Step 2: Implement News listing page**

`news.component.ts`:
```typescript
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

interface NewsItem {
  title: string;
  date: string;
  slug: string;
}

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [RouterModule, TranslateModule, CommonModule],
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {
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

`news.component.html`:
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

- [ ] **Step 3: Implement Article page**

`article.component.ts`:
```typescript
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [RouterModule, TranslateModule, CommonModule],
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent {
  slug = '';

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.slug = params.get('slug') || '';
    });
  }
}
```

`article.component.html`:
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

- [ ] **Step 4: Verify news routes work**

```bash
npx ng serve
# Visit /novosti and /novosti/sample-slug
```

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: add news listing and article pages"
```

---

### Task 8: Final Polish — Assets, SEO Meta, Google Maps, Social Links

**Files:**
- Maybe: `src/index.html` (meta tags)
- Maybe: `src/app/components/contact-block/contact-block.component.html` (social links)
- Create: placeholder hero image in `src/assets/images/`

**Interfaces:**
- Consumes: all previous tasks
- Produces: production-ready build

- [ ] **Step 1: Add meta tags for SEO**

Edit `src/index.html` — add inside `<head>`:

```html
<meta name="description" content="Ustanova Eleonora — medicinski prijevoz diljem Europe, zdravstvena njega u kući i fizikalna terapija. Više od 29 godina iskustva.">
<meta name="keywords" content="sanitetski prijevoz, medicinski prijevoz, zdravstvena njega, fizikalna terapija, Poreč, Istra, Hrvatska, Europa">
```

- [ ] **Step 2: Verify production build**

```bash
npx ng build --configuration production
# Confirm no errors
```

- [ ] **Step 3: Final commit**

```bash
git add -A
git commit -m "chore: final polish and production build config"
```

---

### Future Work (post-v1)

- Contact/booking form with email integration
- Google Maps embed for locations
- Online quote calculator for transport
- Live chat integration
- Full article content pages with rich text
