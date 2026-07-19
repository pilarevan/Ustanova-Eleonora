import { Component, inject } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { filter } from 'rxjs';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  constructor() {
    const router = inject(Router);
    const viewportScroller = inject(ViewportScroller);

    router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      viewportScroller.scrollToPosition([0, 0]);
    });
  }
}
