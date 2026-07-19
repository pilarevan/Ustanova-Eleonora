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
