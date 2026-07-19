import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { FormatDatePipe } from '../../pipes/format-date.pipe';

interface ArticleData {
  title: string;
  date: string;
  slug: string;
}

const articles: ArticleData[] = [
  { title: 'A Special Visit for Our 29th Anniversary', date: '2025-12-13', slug: '29th-anniversary-special-visit' },
  { title: 'Team-Building Together', date: '2025-11-15', slug: 'team-building-together' },
  { title: 'Ustanova Eleonora: Nova vozila, novi standardi u medicinskom prijevozu', date: '2025-06-09', slug: 'ustanova-eleonora-nova-vozila-novi-standardi-u-medicinskom-prijevozu' },
  { title: 'Sastanci koji grade kvalitetu', date: '2025-03-20', slug: 'sastanci-koji-grade-kvalitetu' },
  { title: 'Drum Bun: Sigurna putovanja i nova otkrića', date: '2025-03-01', slug: 'drum-bun-sigurna-putovanja' },
  { title: 'Zajedno 28 godina', date: '2024-12-07', slug: 'zajedno-28-godina' },
];

@Component({
  standalone: true,
  selector: 'app-article',
  imports: [RouterModule, TranslatePipe, FormatDatePipe],
  templateUrl: './article.html',
  styleUrl: './article.scss'
})
export class Article {
  title = '';
  date = '';

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug') || '';
      const found = articles.find(a => a.slug === slug);
      this.title = found?.title || slug;
      this.date = found?.date || '';
    });
  }
}
