import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './stats.html',
  styleUrl: './stats.scss'
})
export class Stats {}
