import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslatePipe],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  isScrolled = false;
  menuOpen = false;
  languages = ['hr', 'en', 'it', 'de'];

  get currentLang() {
    return this.translate.currentLang();
  }

  constructor(private translate: TranslateService) {}

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
