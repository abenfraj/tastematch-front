import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';

@Component({
  selector: 'app-swipe',
  templateUrl: './swipe.component.html',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  styleUrls: ['./swipe.component.scss'],
})
export class SwipeComponent {
  restaurant = {
    name: "Fouquet's",
    rating: 4.7,
    cuisine: 'French',
    distance: '0.1',
    images: [
      '/assets/samples/fouquets.png',
      '/assets/samples/fouquets2.png',
      '/assets/samples/fouquets.png',
      '/assets/samples/fouquets2.png',
      '/assets/samples/fouquets.png',
      '/assets/samples/fouquets2.png',
      '/assets/samples/fouquets.png',
      '/assets/samples/fouquets2.png',
    ]
  };

  currentImageIndex = 0;

  nextImage() {
    if (this.currentImageIndex < this.restaurant.images.length - 1) {
      this.currentImageIndex++;
    }
  }

  previousImage() {
    if (this.currentImageIndex > 0) {
      this.currentImageIndex--;
    }
  }
}
