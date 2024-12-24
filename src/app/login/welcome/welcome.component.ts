import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ProgressBarComponent } from '../../shared/components/progress-bar/progress-bar.component';
import { slideAnimation } from '../../shared/animations/route-animations';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule, ProgressBarComponent],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  animations: [slideAnimation],
  host: { '[@routeAnimations]': '' }
})
export class WelcomeComponent {
  constructor(private router: Router, private location: Location) {}

  goBack() {
    this.location.back();
  }

  onAgree() {
    this.router.navigate(['/next-step']);
  }
} 