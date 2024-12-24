import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ProgressBarComponent } from '../../shared/components/progress-bar/progress-bar.component';
import { slideAnimation } from '../../shared/animations/route-animations';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule, ProgressBarComponent],
  styleUrls: ['./gender.component.scss'],
  animations: [slideAnimation],
  host: { '[@routeAnimations]': '' }
})
export class GenderComponent {
  selectedGender: string | null = null;
  showGenderOnProfile = false;

  constructor(private location: Location, private router: Router) {}

  selectGender(gender: string) {
    this.selectedGender = gender;
  }

  goBack() {
    this.location.back();
  }

  navigateNext() {
    if (this.selectedGender) {
      // Store gender preferences
      localStorage.setItem('gender', this.selectedGender);
      localStorage.setItem('showGender', this.showGenderOnProfile.toString());
      // Navigate to next step
      this.router.navigate(['/next-step']);
    }
  }
}