### Task 3: Create FormatDatePipe

**Files:**
- Create: `src/app/pipes/format-date.pipe.ts`

- [ ] **Create the pipe**

A pipe that takes an ISO date string and the current translations, formats as `"13. Prosinca 2025"` for HR or `"13 December 2025"` for EN etc.

```typescript
import { Pipe, PipeTransform, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'formatDate',
  standalone: true
})
export class FormatDatePipe implements PipeTransform {
  private translate = inject(TranslateService);

  transform(isoDate: string | null | undefined): string {
    if (!isoDate) return '';

    const [y, m, d] = isoDate.split('-');
    const monthKey = String(Number(m));
    const monthName = this.translate.instant(`months.${monthKey}`);
    return `${Number(d)} ${monthName} ${y}`;
  }
}
```

- [ ] **Commit**

```bash
git add src/app/pipes/format-date.pipe.ts
git commit -m "feat: add FormatDatePipe for translated dates"
```

---
