import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private router: Router) {}

  navigateToSignin(isRestaurantOwner: boolean) {
    // Store the user type in localStorage or a service
    localStorage.setItem('userType', isRestaurantOwner ? 'restaurant' : 'customer');
    this.router.navigate(['/signin']);
  }
}
