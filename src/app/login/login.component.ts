import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor() {}

  login() {
    console.log('Login attempt');
  }

  register() {
    console.log('Register attempt');
  }
}
