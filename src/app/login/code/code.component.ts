import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { slideAnimation } from '../../shared/animations/route-animations';

@Component({
  selector: 'app-code',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss'],
  animations: [slideAnimation],
  host: { '[@routeAnimations]': '' },
})
export class CodeComponent {
  formattedCode = '';
  code = '';
  displayDigits = ['', '', '', '', '', ''];
  currentPosition = 0;

  constructor(private router: Router, private location: Location) {}

  goBack() {
    this.location.back();
  }

  onCodeInput($event: Event) {
    const input = $event.target as HTMLInputElement;
    this.code = input.value.replace(/\D/g, '').slice(0, 6);
    this.formattedCode = this.code;
    this.displayDigits = [...this.code.padEnd(6, '').split('')];
    this.currentPosition = this.code.length;
  }

  isCurrentPosition(i: number): boolean {
    return i === this.currentPosition;
  }

  navigateNext() {
    if (this.code.length === 6) {
      localStorage.setItem('verificationCode', this.code);
      this.router.navigate(['/customer-email']);
    }
  }
}
