import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-article',
  imports: [RouterModule, TranslatePipe, CommonModule],
  templateUrl: './article.html',
  styleUrl: './article.scss'
})
export class Article {
  slug = '';

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.slug = params.get('slug') || '';
    });
  }
}
