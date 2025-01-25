import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent {
  rating: number = 0;
  
  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/swipe']);
  }

  setRating(value: number) {
    this.rating = value;
  }

  submitReview() {
    // Handle review submission
    this.router.navigate(['/swipe']);
  }
} 