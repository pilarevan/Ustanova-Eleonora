import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { ScrollRevealDirective } from '../../shared/scroll-reveal.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterModule, TranslatePipe, ScrollRevealDirective],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero {}
