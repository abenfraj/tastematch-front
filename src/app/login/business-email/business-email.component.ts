import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { slideAnimation } from '../../shared/animations/route-animations';
import { ProgressBarComponent } from '../../shared/components/progress-bar/progress-bar.component';

@Component({
  selector: 'app-business-email',
  templateUrl: './business-email.component.html',
  standalone: true,
  imports: [CommonModule, ProgressBarComponent],
  styleUrls: ['./business-email.component.scss'],
  animations: [slideAnimation],
  host: { '[@routeAnimations]': '' }
})
export class BusinessEmailComponent {
  businessEmail: string = '';

  constructor(private location: Location, private router: Router) {}

  get isEmailValid(): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(this.businessEmail);
  }

  onEmailInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.businessEmail = input.value;
  }

  navigateNext() {
    if (this.isEmailValid) {
      this.router.navigate(['/restaurant-address']);
    }
  }

  goBack() {
    this.location.back();
  }
} 