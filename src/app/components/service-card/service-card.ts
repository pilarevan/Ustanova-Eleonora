import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [RouterModule, TranslatePipe, CommonModule],
  templateUrl: './service-card.html',
  styleUrl: './service-card.scss'
})
export class ServiceCard {
  @Input() titleKey = '';
  @Input() descKey = '';
  @Input() link = '';
  @Input() imageUrl = '';
  @Input() index = 0;
}
