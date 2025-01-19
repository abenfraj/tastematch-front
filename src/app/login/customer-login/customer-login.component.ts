import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { slideAnimation } from '../../shared/animations/route-animations';
import { ProgressBarComponent } from '../../shared/components/progress-bar/progress-bar.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  standalone: true,
  imports: [CommonModule, ProgressBarComponent],
  styleUrls: ['./customer-login.component.scss'],
  animations: [slideAnimation],
  host: { '[@routeAnimations]': '' },
})
export class CustomerLoginComponent {
  email: string = '';
  password: string = '';

  constructor(private location: Location, private router: Router) {}

  get isFormValid(): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(this.email) && this.password.length >= 6;
  }

  onEmailInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.email = input.value;
  }

  onPasswordInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.password = input.value;
  }

  onSubmit() {
    if (this.isFormValid) {
      // Ajoutez ici votre logique de connexion
      console.log('Connexion avec:', this.email, this.password);
      this.router.navigate(['/swipe']);
    }
  }

  goBack() {
    this.location.back();
  }
}
