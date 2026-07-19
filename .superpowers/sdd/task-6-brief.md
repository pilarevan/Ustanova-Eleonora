### Task 6: Service Detail Pages (Medical Transport, Home Healthcare, Physical Therapy)

**Files:**
- Modify: `src/app/pages/medical-transport/medical-transport.ts`
- Modify: `src/app/pages/medical-transport/medical-transport.html`
- Modify: `src/app/pages/medical-transport/medical-transport.scss`
- Modify: `src/app/pages/home-healthcare/home-healthcare.ts`
- Modify: `src/app/pages/home-healthcare/home-healthcare.html`
- Modify: `src/app/pages/home-healthcare/home-healthcare.scss`
- Modify: `src/app/pages/physical-therapy/physical-therapy.ts`
- Modify: `src/app/pages/physical-therapy/physical-therapy.html`
- Modify: `src/app/pages/physical-therapy/physical-therapy.scss`

**Interfaces:**
- Consumes: routes from Task 5
- Produces: 3 lazy-loaded pages at `/sanitetski-prijevoz`, `/zdravstvena-njega`, `/fizikalna-terapija`

The stub files already exist from a previous task. Regenerate them with Angular CLI (overwrites stubs), then implement the full content.

- [ ] **Step 1: Generate service page components (overwrite stubs)**

```bash
npx ng generate component pages/medical-transport --standalone --skip-tests
npx ng generate component pages/home-healthcare --standalone --skip-tests
npx ng generate component pages/physical-therapy --standalone --skip-tests
```

- [ ] **Step 2: Implement Medical Transport page**

`src/app/pages/medical-transport/medical-transport.html`:
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

`src/app/pages/medical-transport/medical-transport.ts`:
```typescript
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  standalone: true,
  selector: 'app-medical-transport',
  imports: [RouterModule, TranslatePipe],
  templateUrl: './medical-transport.html',
  styleUrl: './medical-transport.scss'
})
export class MedicalTransport {}
```

`src/app/pages/medical-transport/medical-transport.scss`:
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

`src/app/pages/home-healthcare/home-healthcare.html`:
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

`src/app/pages/home-healthcare/home-healthcare.ts`:
```typescript
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  standalone: true,
  selector: 'app-home-healthcare',
  imports: [RouterModule, TranslatePipe],
  templateUrl: './home-healthcare.html',
  styleUrl: './home-healthcare.scss'
})
export class HomeHealthcare {}
```

Use the same SCSS as medical-transport.

- [ ] **Step 4: Implement Physical Therapy page**

`src/app/pages/physical-therapy/physical-therapy.html`:
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

`src/app/pages/physical-therapy/physical-therapy.ts`:
```typescript
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  standalone: true,
  selector: 'app-physical-therapy',
  imports: [RouterModule, TranslatePipe],
  templateUrl: './physical-therapy.html',
  styleUrl: './physical-therapy.scss'
})
export class PhysicalTherapy {}
```

Use the same SCSS as medical-transport.

- [ ] **Step 5: Verify build**

```bash
npx ng build
```

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "feat: add service detail pages (transport, healthcare, physiotherapy)"
```
