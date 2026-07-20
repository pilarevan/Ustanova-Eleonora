import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { ScrollRevealDirective } from '../../shared/scroll-reveal.directive';

@Component({
  standalone: true,
  selector: 'app-home-healthcare',
  imports: [RouterModule, TranslatePipe, ScrollRevealDirective],
  templateUrl: './home-healthcare.html',
  styleUrl: './home-healthcare.scss'
})
export class HomeHealthcare {}
