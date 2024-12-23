import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./code.component.scss']
})
export class CodeComponent {
  formattedCode = '';
  currentPosition = 0;

  get displayDigits(): string[] {
    const digits = this.formattedCode.split('');
    // Create array of 6 elements, fill with empty strings if needed
    return Array(6).fill('').map((_, i) => digits[i] || '');
  }

  constructor(private location: Location, private router: Router) {}

  goBack() {
    this.location.back();
  }

  onCodeInput(event: Event) {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/\D/g, ''); // Remove non-digits
    
    // Limit to 6 digits
    value = value.slice(0, 6);
    
    this.formattedCode = value;
    this.currentPosition = value.length;
    input.value = this.formattedCode;
  }
} 