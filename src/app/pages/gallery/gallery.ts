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

  private pushImage(id: number) {
    this.images.push({ id, src: `assets/images/gallery/gallery-${id}.jpg` });
    this.visibleIds.add(id);
  }

  constructor() {
    const verticals = [1,3,5,6,7,8,9,11,13,14,15,16,17,18,19,20,21,23,24,25,30,40,41,44,46,48,49,50,51];
    const horizontals = [2,4,10,12,22,26,27,28,29,31,32,33,34,35,36,37,38,39,42,43,45,47,52,53];
    let vi = 0, hi = 0, turn = true;
    while (vi < verticals.length || hi < horizontals.length) {
      if (turn && vi < verticals.length) this.pushImage(verticals[vi++]);
      else if (!turn && hi < horizontals.length) this.pushImage(horizontals[hi++]);
      else if (vi < verticals.length) this.pushImage(verticals[vi++]);
      else this.pushImage(horizontals[hi++]);
      turn = !turn;
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
