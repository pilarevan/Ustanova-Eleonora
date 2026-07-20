import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { FormatDatePipe } from '../../pipes/format-date.pipe';
import { ScrollRevealDirective } from '../../shared/scroll-reveal.directive';

interface NewsItem {
  title: string;
  date: string;
  slug: string;
  image?: string;
}

@Component({
  standalone: true,
  selector: 'app-news',
  imports: [RouterModule, TranslatePipe, FormatDatePipe, ScrollRevealDirective],
  templateUrl: './news.html',
  styleUrl: './news.scss'
})
export class News {
  news: NewsItem[] = [
    { title: 'A Special Visit for Our 29th Anniversary', date: '2025-12-13', slug: '29th-anniversary-special-visit', image: 'assets/images/news-3.jpg' },
    { title: 'Team-Building Together', date: '2025-11-15', slug: 'team-building-together', image: 'assets/images/news-2.jpg' },
    { title: 'Ustanova Eleonora: Nova vozila, novi standardi u medicinskom prijevozu', date: '2025-06-09', slug: 'ustanova-eleonora-nova-vozila-novi-standardi-u-medicinskom-prijevozu', image: 'assets/images/news-1.jpg' },
    { title: 'Sastanci koji grade kvalitetu', date: '2025-03-20', slug: 'sastanci-koji-grade-kvalitetu' },
    { title: 'Drum Bun: Sigurna putovanja i nova otkrića', date: '2025-03-01', slug: 'drum-bun-sigurna-putovanja' },
    { title: 'Zajedno 28 godina', date: '2024-12-07', slug: 'zajedno-28-godina' },
  ];
}
