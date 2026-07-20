import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { ServiceCard } from '../../components/service-card/service-card';
import { Stats } from '../../components/stats/stats';
import { NewsPreview } from '../../components/news-preview/news-preview';
import { ContactBlock } from '../../components/contact-block/contact-block';
import { ScrollRevealDirective } from '../../shared/scroll-reveal.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Hero, ServiceCard, Stats, NewsPreview, ContactBlock, ScrollRevealDirective],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {}
