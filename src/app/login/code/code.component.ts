import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { slideAnimation } from '../../shared/animations/route-animations';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./code.component.scss'],
  animations: [slideAnimation],
  host: { '[@routeAnimations]': '' }
})
export class CodeComponent {
  formattedCode = '';
  currentPosition = 0;

  constructor(private location: Location, private router: Router) {}

  get displayDigits(): string[] {
    const digits = this.formattedCode.split('');
    return Array(6).fill('').map((_, i) => digits[i] || '');
  }

  goBack() {
    this.location.back();
  }

  onCodeInput(event: Event) {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/\D/g, '');
    value = value.slice(0, 6);
    this.formattedCode = value;
    this.currentPosition = value.length;
    input.value = this.formattedCode;
  }

  navigateToPassword() {
    if (this.formattedCode.length === 6) {
      this.router.navigate(['/password']);
    }
  }
} 