import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ProgressBarComponent } from '../../shared/components/progress-bar/progress-bar.component';
import { slideAnimation } from '../../shared/animations/route-animations';

@Component({
  selector: 'app-firstname',
  templateUrl: './firstname.component.html',
  standalone: true,
  imports: [CommonModule, ProgressBarComponent],
  styleUrls: ['./firstname.component.scss'],
  animations: [slideAnimation],
  host: {
    '[@routeAnimations]': ''
  }
})
export class FirstnameComponent {
  firstName = '';

  constructor(private location: Location, private router: Router) {}

  get isNameValid(): boolean {
    return this.firstName.length >= 2;
  }

  goBack() {
    this.location.back();
  }

  onNameInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.firstName = input.value;
  }

  navigateNext() {
    if (this.isNameValid) {
      this.router.navigate(['/birthday']);
    }
  }
} 