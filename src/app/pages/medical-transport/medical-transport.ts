import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { ScrollRevealDirective } from '../../shared/scroll-reveal.directive';

@Component({
  standalone: true,
  selector: 'app-medical-transport',
  imports: [RouterModule, TranslatePipe, ScrollRevealDirective],
  templateUrl: './medical-transport.html',
  styleUrl: './medical-transport.scss'
})
export class MedicalTransport {}
