import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

interface NewsItem {
  title: string;
  date: string;
  slug: string;
}

@Component({
  standalone: true,
  selector: 'app-news',
  imports: [RouterModule, TranslatePipe, CommonModule],
  templateUrl: './news.html',
  styleUrl: './news.scss'
})
export class News {
  news: NewsItem[] = [
    { title: 'A Special Visit for Our 29th Anniversary', date: '13 December 2025', slug: '29th-anniversary-special-visit' },
    { title: 'Team-Building Together', date: '15 November 2025', slug: 'team-building-together' },
    { title: 'Ustanova Eleonora: Nova vozila, novi standardi u medicinskom prijevozu', date: '9 June 2025', slug: 'ustanova-eleonora-nova-vozila-novi-standardi-u-medicinskom-prijevozu' },
    { title: 'Sastanci koji grade kvalitetu', date: '20 March 2025', slug: 'sastanci-koji-grade-kvalitetu' },
    { title: 'Drum Bun: Sigurna putovanja i nova otkrića', date: '1 March 2025', slug: 'drum-bun-sigurna-putovanja' },
    { title: 'Zajedno 28 godina', date: '7 December 2024', slug: 'zajedno-28-godina' },
  ];
}
