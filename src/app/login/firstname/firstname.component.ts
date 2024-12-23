import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ProgressBarComponent } from '../../shared/components/progress-bar/progress-bar.component';

@Component({
  selector: 'app-firstname',
  templateUrl: './firstname.component.html',
  standalone: true,
  imports: [CommonModule, ProgressBarComponent],
  styleUrls: ['./firstname.component.scss']
})
export class FirstnameComponent {
  firstName = '';

  constructor(private location: Location, private router: Router) {}

  get isNameValid(): boolean {
    return this.firstName.length >= 2;
  }

  goBack() {
    this.location.back();
  }

  onNameInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.firstName = input.value;
  }

  navigateNext() {
    if (this.isNameValid) {
      this.router.navigate(['/next-step']);
    }
  }
} 