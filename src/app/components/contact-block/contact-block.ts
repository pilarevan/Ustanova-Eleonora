import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ScrollRevealDirective } from '../../shared/scroll-reveal.directive';

@Component({
  selector: 'app-contact-block',
  standalone: true,
  imports: [TranslatePipe, ScrollRevealDirective],
  templateUrl: './contact-block.html',
  styleUrl: './contact-block.scss'
})
export class ContactBlock {}
