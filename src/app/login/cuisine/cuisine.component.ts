import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ProgressBarComponent } from '../../shared/components/progress-bar/progress-bar.component';
import { slideAnimation } from '../../shared/animations/route-animations';

@Component({
  selector: 'app-cuisine',
  templateUrl: './cuisine.component.html',
  standalone: true,
  imports: [CommonModule, ProgressBarComponent],
  styleUrls: ['./cuisine.component.scss'],
  animations: [slideAnimation],
  host: { '[@routeAnimations]': '' }
})
export class CuisineComponent {
  selectedCuisines: string[] = [];
  cuisineOptions = [
    'Fast Food', 'Japanese', 'Burgers', 'Thai', 'Sushi',
    'Lebanese', 'Italian', 'African', 'Chinese',
    'Mexican', 'Vietnamese', 'Portuguese', 'Indian', 'French',
    'Mediterranean', 'Kebab', 'Spanish', 'Korean',
    'Surprise me', 'Discover'
  ];

  constructor(private location: Location, private router: Router) {}

  toggleCuisine(cuisine: string) {
    const index = this.selectedCuisines.indexOf(cuisine);
    if (index === -1) {
      this.selectedCuisines.push(cuisine);
    } else {
      this.selectedCuisines.splice(index, 1);
    }
  }

  isCuisineSelected(cuisine: string): boolean {
    return this.selectedCuisines.includes(cuisine);
  }

  goBack() {
    this.location.back();
  }

  navigateNext() {
    if (this.selectedCuisines.length > 0) {
      // Store selected cuisines and navigate to next page
      localStorage.setItem('cuisines', JSON.stringify(this.selectedCuisines));
      this.router.navigate(['/next-step']);
    }
  }
} 