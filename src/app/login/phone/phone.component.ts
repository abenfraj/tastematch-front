import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { slideAnimation } from '../../shared/animations/route-animations';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss'],
  animations: [slideAnimation],
  host: { '[@routeAnimations]': '' }
})
export class PhoneComponent {
  formattedPhoneNumber = '';

  constructor(private location: Location, private router: Router) {}

  get isPhoneValid(): boolean {
    return this.formattedPhoneNumber.replace(/\s/g, '').length === 9;
  }

  goBack() {
    this.location.back();
  }

  onPhoneInput(event: Event) {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/\D/g, ''); // Remove non-digits
    
    // Limit to 9 digits
    value = value.slice(0, 9);
    
    // Format: X XX XX XX XX
    if (value.length > 0) {
      const parts = [
        value.slice(0, 1),
        value.slice(1, 3),
        value.slice(3, 5),
        value.slice(5, 7),
        value.slice(7, 9)
      ].filter(part => part.length > 0);
      
      value = parts.join(' ');
    }
    
    this.formattedPhoneNumber = value;
    input.value = this.formattedPhoneNumber;
  }

  navigateToCode() {
    if (this.isPhoneValid) {
      this.router.navigate(['/code']);
    }
  }
} 