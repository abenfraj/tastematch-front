import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent {
  password = '';
  confirmPassword = '';

  constructor(private location: Location, private router: Router) {}

  get isPasswordValid(): boolean {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;
    return regex.test(this.password);
  }

  get doPasswordsMatch(): boolean {
    return this.password === this.confirmPassword && this.password !== '';
  }

  get hasMinLength(): boolean {
    return this.password.length >= 8;
  }

  get hasUpperCase(): boolean {
    return /[A-Z]/.test(this.password);
  }

  get hasLowerCase(): boolean {
    return /[a-z]/.test(this.password);
  }

  get hasNumber(): boolean {
    return /\d/.test(this.password);
  }

  get hasSpecialChar(): boolean {
    return /[!@#$%^&*(),.?":{}|<>]/.test(this.password);
  }

  navigateToFirstname() {
    if (this.isPasswordValid && this.doPasswordsMatch) {
      this.router.navigate(['/firstname']);
    }
  }

  goBack() {
    this.location.back();
  }

  onPasswordInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.password = input.value;
  }

  onConfirmPasswordInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.confirmPassword = input.value;
  }
} 