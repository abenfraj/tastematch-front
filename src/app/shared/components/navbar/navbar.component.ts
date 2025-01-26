import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  profileRoute: string = '/customer-profile';
  currentRoute: string = '';

  constructor(
    private userService: UserService,
    private router: Router
  ) {
    this.currentRoute = this.router.url;
    this.router.events.subscribe(() => {
      this.currentRoute = this.router.url;
    });
  }

  ngOnInit() {
    this.profileRoute = this.userService.isRestaurantOwner() 
      ? '/restaurant-profile' 
      : '/customer-profile';
  }
}