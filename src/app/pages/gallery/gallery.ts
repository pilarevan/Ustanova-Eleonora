import { Component, HostListener, AfterViewInit, OnDestroy } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

interface GalleryImage {
  id: number;
  src: string;
}

@Component({
  standalone: true,
  selector: 'app-gallery',
  imports: [NgFor, NgIf, TranslatePipe],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss'
})
export class Gallery implements AfterViewInit, OnDestroy {
  images: GalleryImage[] = [];

  selectedImage: GalleryImage | null = null;

  visibleIds = new Set<number>();

  private observer: IntersectionObserver | null = null;
  private observerTimer: ReturnType<typeof setTimeout> | null = null;

  constructor() {
    for (let i = 1; i <= 53; i++) {
      this.images.push({ id: i, src: `assets/images/gallery/gallery-${i}.jpg` });
    }
  }

  ngAfterViewInit() {
    this.setupObserver();
  }

  ngOnDestroy() {
    this.observer?.disconnect();
    if (this.observerTimer) clearTimeout(this.observerTimer);
  }

  private setupObserver() {
    this.observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        const id = Number(entry.target.getAttribute('data-id'));
        if (entry.isIntersecting) {
          this.visibleIds.add(id);
        }
      }
    }, { rootMargin: '100px' });

    this.observerTimer = setTimeout(() => {
      const items = document.querySelectorAll('.gallery-item');
      items.forEach(el => this.observer?.observe(el));
    });
  }

  openLightbox(img: GalleryImage) {
    this.selectedImage = img;
  }

  closeLightbox() {
    this.selectedImage = null;
  }

  @HostListener('document:keydown.escape')
  onEscape() {
    this.closeLightbox();
  }
}
