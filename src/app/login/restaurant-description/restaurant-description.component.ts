import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { slideAnimation } from '../../shared/animations/route-animations';
import { ProgressBarComponent } from '../../shared/components/progress-bar/progress-bar.component';

@Component({
  selector: 'app-restaurant-description',
  standalone: true,
  imports: [CommonModule, ProgressBarComponent],
  templateUrl: './restaurant-description.component.html',
  styleUrls: ['./restaurant-description.component.scss'],
  animations: [slideAnimation],
  host: { '[@routeAnimations]': '' }
})
export class RestaurantDescriptionComponent {
  description: string = '';
  isFocused: boolean = false;

  constructor(private location: Location, private router: Router) {}

  get isDescriptionValid(): boolean {
    return this.description.trim().length > 0;
  }

  onDescriptionInput(event: Event) {
    const input = event.target as HTMLTextAreaElement;
    this.description = input.value;
  }

  navigateNext() {
    if (this.isDescriptionValid) {
      this.router.navigate(['/price-range']);
    }
  }

  goBack() {
    this.location.back();
  }

  onFocus() {
    this.isFocused = true;
  }

  onBlur() {
    this.isFocused = false;
  }
} 