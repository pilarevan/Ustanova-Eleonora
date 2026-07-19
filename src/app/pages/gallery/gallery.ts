import { Component, HostListener, AfterViewInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

interface GalleryImage {
  id: number;
  src: string;
}

@Component({
  standalone: true,
  selector: 'app-gallery',
  imports: [NgFor, NgIf],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss'
})
export class Gallery implements AfterViewInit {
  images: GalleryImage[] = [];

  selectedImage: GalleryImage | null = null;

  visibleIds = new Set<number>();

  constructor() {
    for (let i = 1; i <= 53; i++) {
      this.images.push({ id: i, src: `assets/images/gallery/gallery-${i}.jpg` });
    }
  }

  ngAfterViewInit() {
    this.setupObserver();
  }

  private setupObserver() {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        const id = Number(entry.target.getAttribute('data-id'));
        if (entry.isIntersecting) {
          this.visibleIds.add(id);
        }
      }
    }, { rootMargin: '100px' });

    setTimeout(() => {
      const items = document.querySelectorAll('.gallery-item');
      items.forEach(el => observer.observe(el));
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
