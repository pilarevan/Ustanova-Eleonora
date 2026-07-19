import { Component, HostListener } from '@angular/core';
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
export class Gallery {
  images: GalleryImage[] = [];

  selectedImage: GalleryImage | null = null;

  visibleIds = new Set<number>();

  constructor() {
    for (let i = 1; i <= 53; i++) {
      this.images.push({ id: i, src: `assets/images/gallery/gallery-${i}.jpg` });
      this.visibleIds.add(i);
    }
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
