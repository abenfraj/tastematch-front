import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ProgressBarComponent } from '../../shared/components/progress-bar/progress-bar.component';
import { slideAnimation } from '../../shared/animations/route-animations';

@Component({
  selector: 'app-diet',
  templateUrl: './diet.component.html',
  standalone: true,
  imports: [CommonModule, ProgressBarComponent],
  styleUrls: ['./diet.component.scss'],
  animations: [slideAnimation],
  host: { '[@routeAnimations]': '' }
})
export class DietComponent {
  selectedDiets: string[] = [];
  dietOptions = [
    'Omnivorous', 'Vegetarian',
    'Lacto-ovo vegetarian', 'Lacto vegetarian',
    'Ovo vegetarian', 'Vegan',
    'Flexitarian', 'Pescatarian',
    'Pollotarian', 'Fruitarian',
    'Raw foodist', 'Paleo', 'Ketogenic',
    'Low-carb', 'Mediterranean',
    'DASH', 'Gluten-free',
    'Dairy-free', 'Carnivore',
    'Intermittent fasting', 'Macrobiotic',
    'Whole30', 'Atkins',
    'Zone diet', 'Plant-based diet'
  ];

  constructor(private location: Location, private router: Router) {}

  toggleDiet(diet: string) {
    const index = this.selectedDiets.indexOf(diet);
    if (index === -1) {
      this.selectedDiets.push(diet);
    } else {
      this.selectedDiets.splice(index, 1);
    }
  }

  isDietSelected(diet: string): boolean {
    return this.selectedDiets.includes(diet);
  }

  goBack() {
    this.location.back();
  }

  navigateNext() {
    if (this.selectedDiets.length > 0) {
      localStorage.setItem('diets', JSON.stringify(this.selectedDiets));
      this.router.navigate(['/welcome']);
    }
  }
} 