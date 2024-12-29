import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { slideAnimation } from '../../shared/animations/route-animations';
import { ProgressBarComponent } from '../../shared/components/progress-bar/progress-bar.component';

@Component({
  selector: 'app-siret-number',
  templateUrl: './siret-number.component.html',
  standalone: true,
  imports: [CommonModule, ProgressBarComponent],
  styleUrls: ['./siret-number.component.scss'],
  animations: [slideAnimation],
  host: { '[@routeAnimations]': '' }
})
export class SiretNumberComponent {
  siretNumber: string = '';

  constructor(private location: Location, private router: Router) {}

  get isSiretValid(): boolean {
    const cleanSiret = this.siretNumber.replace(/\s/g, '');
    return cleanSiret.length === 14 && /^\d+$/.test(cleanSiret);
  }

  onSiretInput(event: Event) {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/\D/g, ''); // Remove non-digits
    
    // Limit to 14 digits
    if (value.length > 14) {
      value = value.slice(0, 14);
    }
    
    // Format progressively
    let formatted = value;
    if (value.length > 3) {
      formatted = value.slice(0, 3) + ' ' + value.slice(3);
    }
    if (value.length > 6) {
      formatted = formatted.slice(0, 7) + ' ' + formatted.slice(7);
    }
    if (value.length > 9) {
      formatted = formatted.slice(0, 11) + ' ' + formatted.slice(11);
    }
    
    this.siretNumber = formatted;
    input.value = formatted;
  }

  navigateNext() {
    if (this.isSiretValid) {
      this.router.navigate(['/add-photos']);
    }
  }

  goBack() {
    this.location.back();
  }
} 