import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  standalone: true,
  selector: 'app-home-healthcare',
  imports: [RouterModule, TranslatePipe],
  templateUrl: './home-healthcare.html',
  styleUrl: './home-healthcare.scss'
})
export class HomeHealthcare {}
