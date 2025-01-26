import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';

@Component({
  selector: 'app-preferences-widget',
  templateUrl: './preferences-widget.component.html',
  styleUrls: ['./preferences-widget.component.scss'],
  standalone: true,
  imports: [CommonModule, NavbarComponent],
})
export class PreferencesWidgetComponent {
  restaurants = [
    {
      name: 'Gourmet Burger',
      image: '/assets/icons/burger.png',
      rating: '★★★★☆',
      rating_number: 4.7,
      category: 'American',
      distance: '1',
    },
    {
      name: 'Italian Kitchen',
      image: '/assets/icons/pasta.png',
      rating: '★★★★★',
      rating_number: 4.7,
      category: 'Italian',
      distance: '1.5',
    },
    {
      name: 'Italian Kitchen2',
      image: '/assets/icons/pasta.png',
      rating: '★★★★★',
      rating_number: 4.7,
      category: 'Italian',
      distance: '1.5',
    },
  ];

  nextSlide() {
    const container = document.querySelector('.restaurant-cards');
    if (container) {
      container.scrollLeft += 320; // Largeur de la carte + gap
    }
  }

  previousSlide() {
    const container = document.querySelector('.restaurant-cards');
    if (container) {
      container.scrollLeft -= 320; // Largeur de la carte + gap
    }
  }

  ngOnInit(): void {}
}
