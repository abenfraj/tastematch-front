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
    image: '/assets/samples/fouquets.png'
  };

  constructor() {}
}
