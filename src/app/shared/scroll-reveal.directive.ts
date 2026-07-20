import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true,
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  @Input('appScrollReveal') delay: number | string = 0;

  private observer: IntersectionObserver | null = null;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngOnInit() {
    if (this.isInViewport()) {
      this.el.nativeElement.classList.add('revealed');
      return;
    }

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const ms = Number(this.delay) || 0;
          if (ms) {
            setTimeout(() => this.el.nativeElement.classList.add('revealed'), ms);
          } else {
            this.el.nativeElement.classList.add('revealed');
          }
          this.observer?.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    this.observer.observe(this.el.nativeElement);
  }

  private isInViewport(): boolean {
    const rect = this.el.nativeElement.getBoundingClientRect();
    return rect.top < window.innerHeight - 50 && rect.bottom > 0;
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
