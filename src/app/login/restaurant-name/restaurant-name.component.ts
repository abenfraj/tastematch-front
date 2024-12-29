import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { slideAnimation } from '../../shared/animations/route-animations';
import { ProgressBarComponent } from '../../shared/components/progress-bar/progress-bar.component';

@Component({
  selector: 'app-restaurant-name',
  templateUrl: './restaurant-name.component.html',
  standalone: true,
  imports: [CommonModule, ProgressBarComponent],
  styleUrls: ['./restaurant-name.component.scss'],
  animations: [slideAnimation],
  host: { '[@routeAnimations]': '' }
})
export class RestaurantNameComponent {
  restaurantName: string = '';

  constructor(private location: Location, private router: Router) {}

  get isNameValid(): boolean {
    return this.restaurantName.trim().length > 0;
  }

  onRestaurantNameInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.restaurantName = input.value;
  }

  navigateNext() {
    if (this.isNameValid) {
      this.router.navigate(['/business-email']);
    }
  }

  goBack() {
    this.location.back();
  }
} 