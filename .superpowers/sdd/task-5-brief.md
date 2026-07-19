### Task 5: Homepage — Compose All Components + Routes

**Files:**
- Create: `src/app/pages/home/home.ts`
- Create: `src/app/pages/home/home.html`
- Create: `src/app/pages/home/home.scss`
- Modify: `src/app/app.routes.ts`
- Modify: `src/app/app.ts`
- Modify: `src/app/app.html`
- Modify: `src/app/app.scss`

**Interfaces:**
- Consumes: Header, Hero, ServiceCard, Stats, NewsPreview, ContactBlock, Footer
- Produces: Working homepage at `/`

**IMPORTANT: File naming convention.** This project uses CLI-generated file names (no `.component` suffix):
- Component TS files: `hero.ts`, `service-card.ts`, `footer.ts` (not `hero.component.ts`)
- Class names: `Hero`, `ServiceCard`, `Footer` (not `HeroComponent`)
- Template URLs: `./hero.html`, `./footer.html`
- Style URLs: `./hero.scss`, `./footer.scss`

- [ ] **Step 1: Generate Home page component**

```bash
npx ng generate component pages/home --standalone --skip-tests
```

- [ ] **Step 2: Implement Home page**

`src/app/pages/home/home.ts`:
```typescript
import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { ServiceCard } from '../../components/service-card/service-card';
import { Stats } from '../../components/stats/stats';
import { NewsPreview } from '../../components/news-preview/news-preview';
import { ContactBlock } from '../../components/contact-block/contact-block';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Hero, ServiceCard, Stats, NewsPreview, ContactBlock],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {}
```

`src/app/pages/home/home.html`:
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

`src/app/pages/home/home.scss`:
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

- [ ] **Step 3: Set up routing**

`src/app/app.routes.ts`:
```typescript
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then(m => m.Home)
  },
  {
    path: 'sanitetski-prijevoz',
    loadComponent: () => import('./pages/medical-transport/medical-transport').then(m => m.MedicalTransport)
  },
  {
    path: 'zdravstvena-njega',
    loadComponent: () => import('./pages/home-healthcare/home-healthcare').then(m => m.HomeHealthcare)
  },
  {
    path: 'fizikalna-terapija',
    loadComponent: () => import('./pages/physical-therapy/physical-therapy').then(m => m.PhysicalTherapy)
  },
  {
    path: 'novosti',
    loadComponent: () => import('./pages/news/news').then(m => m.News)
  },
  {
    path: 'novosti/:slug',
    loadComponent: () => import('./pages/article/article').then(m => m.Article)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
```

- [ ] **Step 4: Update App shell**

Replace `src/app/app.html` entirely:
```html
<app-header></app-header>
<main>
  <router-outlet></router-outlet>
</main>
<app-footer></app-footer>
```

Replace `src/app/app.ts` entirely:
```typescript
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
```

Replace `src/app/app.scss` entirely:
```scss
main {
  min-height: 100vh;
}
```

- [ ] **Step 5: Verify build**

```bash
npx ng build
# Should succeed with no errors
```

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "feat: add homepage with all components and lazy-loaded routing"
```
