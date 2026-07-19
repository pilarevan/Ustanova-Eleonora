import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { FormatDatePipe } from '../../pipes/format-date.pipe';

interface NewsItem {
  title: string;
  date: string;
  slug: string;
  image?: string;
}

@Component({
  selector: 'app-news-preview',
  standalone: true,
  imports: [RouterModule, TranslatePipe, FormatDatePipe],
  templateUrl: './news-preview.html',
  styleUrl: './news-preview.scss'
})
export class NewsPreview {
  news: NewsItem[] = [
    {
      title: 'Ustanova Eleonora: Nova vozila, novi standardi u medicinskom prijevozu',
      date: '2025-06-09',
      slug: 'ustanova-eleonora-nova-vozila-novi-standardi-u-medicinskom-prijevozu'
    },
    {
      title: 'Team-Building Together',
      date: '2025-11-15',
      slug: 'team-building-together'
    },
    {
      title: 'A Special Visit for Our 29th Anniversary',
      date: '2025-12-13',
      slug: '29th-anniversary-special-visit'
    }
  ];
}
