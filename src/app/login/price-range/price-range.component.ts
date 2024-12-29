import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { slideAnimation } from '../../shared/animations/route-animations';
import { ProgressBarComponent } from '../../shared/components/progress-bar/progress-bar.component';

@Component({
  selector: 'app-price-range',
  standalone: true,
  imports: [CommonModule, ProgressBarComponent],
  templateUrl: './price-range.component.html',
  styleUrls: ['./price-range.component.scss'],
  animations: [slideAnimation],
  host: { '[@routeAnimations]': '' }
})
export class PriceRangeComponent {
  selectedRange: string | null = null;

  constructor(private location: Location, private router: Router) {}

  selectRange(range: string) {
    this.selectedRange = range;
  }

  get isPriceRangeValid(): boolean {
    return this.selectedRange !== null;
  }

  navigateNext() {
    if (this.isPriceRangeValid) {
      this.router.navigate(['/cuisine']);
    }
  }

  goBack() {
    this.location.back();
  }
} 