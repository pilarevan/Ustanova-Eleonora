import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-block',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './contact-block.html',
  styleUrl: './contact-block.scss'
})
export class ContactBlock {}
