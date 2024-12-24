import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ProgressBarComponent } from '../../shared/components/progress-bar/progress-bar.component';
import { slideAnimation } from '../../shared/animations/route-animations';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss'],
  animations: [slideAnimation],
  standalone: true,
  imports: [CommonModule, ProgressBarComponent]
})
export class CodeComponent {
  code = '';
  currentPosition = 0;

  constructor(private router: Router, private location: Location) {}

  get displayDigits(): string[] {
    const digits = this.code.split('');
    return Array(4).fill('').map((_, i) => digits[i] || '');
  }

  get isCodeValid(): boolean {
    return this.code.length === 4;
  }

  isCurrentPosition(index: number): boolean {
    return index === this.code.length;
  }

  goBack() {
    this.location.back();
  }

  onCodeInput(event: Event) {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/\D/g, '');
    value = value.slice(0, 4);
    
    this.code = value;
    this.currentPosition = value.length;
    input.value = this.code;
  }

  navigateNext() {
    if (this.isCodeValid) {
      this.router.navigate(['/password']);
    }
  }
} 