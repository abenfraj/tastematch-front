import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';

@Component({
  selector: 'app-restaurant-profile',
  templateUrl: './restaurant-profile.component.html',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  styleUrls: ['./restaurant-profile.component.scss'],
})
export class RestaurantProfileComponent {
  constructor() {}

  ngOnInit() {}
}
