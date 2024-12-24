import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ProgressBarComponent } from '../../shared/components/progress-bar/progress-bar.component';
import { slideAnimation } from '../../shared/animations/route-animations';

@Component({
  selector: 'app-birthday',
  templateUrl: './birthday.component.html',
  standalone: true,
  imports: [CommonModule, ProgressBarComponent],
  styleUrls: ['./birthday.component.scss'],
  animations: [slideAnimation],
  host: { '[@routeAnimations]': '' }
})
export class BirthdayComponent {
  formattedDate = '';
  currentPosition = 0;

  constructor(private location: Location, private router: Router) {}

  get displayDigits(): string[] {
    const digits = this.formattedDate.split('');
    return Array(8).fill('').map((_, i) => digits[i] || '');
  }

  get isDateValid(): boolean {
    if (this.formattedDate.length !== 8) return false;
    
    const year = parseInt(this.formattedDate.slice(0, 4));
    const month = parseInt(this.formattedDate.slice(4, 6));
    const day = parseInt(this.formattedDate.slice(6, 8));
    
    const date = new Date(year, month - 1, day);
    return date instanceof Date && !isNaN(date.getTime()) &&
           date.getFullYear() === year &&
           date.getMonth() === month - 1 &&
           date.getDate() === day;
  }

  isCurrentPosition(index: number): boolean {
    return index === this.formattedDate.length;
  }

  goBack() {
    this.location.back();
  }

  onDateInput(event: Event) {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/\D/g, '');
    value = value.slice(0, 8);
    
    this.formattedDate = value;
    this.currentPosition = value.length;
    input.value = this.formattedDate;
  }

  onFocus() {
    this.currentPosition = this.formattedDate.length;
  }

  navigateNext() {
    if (this.isDateValid) {
      this.router.navigate(['/gender']);
    }
  }
} 