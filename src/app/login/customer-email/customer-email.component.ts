import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { slideAnimation } from '../../shared/animations/route-animations';
import { ProgressBarComponent } from '../../shared/components/progress-bar/progress-bar.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer-email',
  templateUrl: './customer-email.component..html',
  standalone: true,
  imports: [CommonModule, ProgressBarComponent],
  styleUrls: ['./customer-email.component.scss'],
  animations: [slideAnimation],
  host: { '[@routeAnimations]': '' },
})
export class CustomerEmailComponent {
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
      this.router.navigate(['/password']);
    }
  }

  goBack() {
    this.location.back();
  }
}
