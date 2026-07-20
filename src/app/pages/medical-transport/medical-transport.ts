import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  standalone: true,
  selector: 'app-medical-transport',
  imports: [RouterModule, TranslatePipe],
  templateUrl: './medical-transport.html',
  styleUrl: './medical-transport.scss'
})
export class MedicalTransport {}
