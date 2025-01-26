import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { slideAnimation } from '../../shared/animations/route-animations';
import { ProgressBarComponent } from '../../shared/components/progress-bar/progress-bar.component';

@Component({
  selector: 'app-restaurant-address',
  templateUrl: './restaurant-address.component.html',
  standalone: true,
  imports: [CommonModule, ProgressBarComponent],
  styleUrls: ['./restaurant-address.component.scss'],
  animations: [slideAnimation],
  host: { '[@routeAnimations]': '' }
})
export class RestaurantAddressComponent {
  address: string = '';
  isFocused: boolean = false;
  showResults: boolean = false;
  selectedFromList: boolean = false;

  // Example addresses for testing
  sampleAddresses = [
    '123 Main Street, New York, NY 10001',
    '456 Broadway Avenue, New York, NY 10002',
    '789 5th Avenue, New York, NY 10003',
    '321 Park Road, New York, NY 10004',
    '654 Madison Avenue, New York, NY 10005'
  ];

  filteredAddresses: string[] = [];

  constructor(private location: Location, private router: Router) {}

  get isAddressValid(): boolean {
    return this.address.trim().length > 0 && this.selectedFromList;
  }

  onAddressInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.address = input.value;
    this.selectedFromList = false;
    this.filterAddresses();
  }

  filterAddresses() {
    if (this.address.trim()) {
      this.filteredAddresses = this.sampleAddresses
        .filter(addr => addr.toLowerCase().includes(this.address.toLowerCase()))
        .slice(0, 5);
      this.showResults = true;
    } else {
      this.filteredAddresses = [];
      this.showResults = false;
    }
  }

  selectAddress(address: string) {
    this.address = address;
    this.showResults = false;
    this.selectedFromList = true;
  }

  onFocus() {
    this.isFocused = true;
    if (this.address) {
      this.filterAddresses();
    }
  }

  onBlur() {
    // Delay hiding results to allow click events on results
    setTimeout(() => {
      this.isFocused = false;
      this.showResults = false;
    }, 200);
  }

  navigateNext() {
    if (this.isAddressValid) {
      this.router.navigate(['/siret-number']);
    }
  }

  goBack() {
    this.location.back();
  }
} 