import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  standalone: true,
  selector: 'app-physical-therapy',
  imports: [RouterModule, TranslatePipe],
  templateUrl: './physical-therapy.html',
  styleUrl: './physical-therapy.scss'
})
export class PhysicalTherapy {}
