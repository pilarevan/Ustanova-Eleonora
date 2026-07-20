import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { ScrollRevealDirective } from '../../shared/scroll-reveal.directive';

@Component({
  standalone: true,
  selector: 'app-physical-therapy',
  imports: [RouterModule, TranslatePipe, ScrollRevealDirective],
  templateUrl: './physical-therapy.html',
  styleUrl: './physical-therapy.scss'
})
export class PhysicalTherapy {}
