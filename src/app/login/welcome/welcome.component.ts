import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ProgressBarComponent } from '../../shared/components/progress-bar/progress-bar.component';
import { slideAnimation } from '../../shared/animations/route-animations';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule, ProgressBarComponent],
  providers: [UserService],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  animations: [slideAnimation],
  host: { '[@routeAnimations]': '' }
})
export class WelcomeComponent {
  isRestaurant: boolean = false;

  constructor(
    private router: Router, 
    private location: Location,
    private userService: UserService
  ) {
    this.isRestaurant = this.userService.isRestaurant();
  }

  goBack() {
    this.location.back();
  }

  onAgree() {
    this.router.navigate(['/next-step']);
  }
} 