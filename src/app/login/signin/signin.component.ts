import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent {
  constructor(private location: Location, private router: Router) {}

  goBack() {
    this.location.back();
  }

  navigateToPhone() {
    this.router.navigate(['/phone']);
  }
  navigateToCustomerLogin() {
    this.router.navigate(['/customer-login']);
  }
}
