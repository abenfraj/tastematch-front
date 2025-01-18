import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="navbar">
      <div class="nav-item" routerLink="/home">
        <img [src]="currentRoute === '/home' ? 'assets/icons/home_highlighted.png' : 'assets/icons/home.png'" alt="Home">
      </div>
      <div class="nav-item" routerLink="/preferences">
        <img [src]="currentRoute === '/preferences' ? 'assets/icons/preferences_highlighted.png' : 'assets/icons/preferences.png'" alt="Preferences">
      </div>
      <div class="nav-item" routerLink="/search">
        <img [src]="currentRoute === '/search' ? 'assets/icons/search_highlighted.png' : 'assets/icons/search.png'" alt="Search">
      </div>
      <div class="nav-item" routerLink="/profile">
        <img [src]="isProfileRoute ? 'assets/icons/profile_highlighted.png' : 'assets/icons/profile.png'" alt="Profile">
      </div>
    </div>
  `,
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  currentRoute: string = '';
  
  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.currentRoute = this.router.url;
    });
  }

  get isProfileRoute(): boolean {
    return this.currentRoute.includes('profile');
  }
} 