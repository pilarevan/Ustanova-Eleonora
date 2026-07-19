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
