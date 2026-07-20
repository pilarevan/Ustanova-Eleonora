import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ScrollRevealDirective } from '../../shared/scroll-reveal.directive';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [TranslatePipe, ScrollRevealDirective],
  templateUrl: './stats.html',
  styleUrl: './stats.scss'
})
export class Stats {}
