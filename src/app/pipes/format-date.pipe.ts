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
