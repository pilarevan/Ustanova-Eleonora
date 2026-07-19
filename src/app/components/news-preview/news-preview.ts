import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

interface NewsItem {
  title: string;
  date: string;
  slug: string;
  image?: string;
}

@Component({
  selector: 'app-news-preview',
  standalone: true,
  imports: [RouterModule, TranslatePipe],
  templateUrl: './news-preview.html',
  styleUrl: './news-preview.scss'
})
export class NewsPreview {
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
