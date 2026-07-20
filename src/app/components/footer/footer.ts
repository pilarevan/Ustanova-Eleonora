import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ScrollRevealDirective } from '../../shared/scroll-reveal.directive';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslatePipe, ScrollRevealDirective],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {}
