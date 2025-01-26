import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() {}

  isRestaurant(): boolean {
    return localStorage.getItem('userType') === 'restaurant';
  }

  getUserType(): 'customer' | 'restaurant' {
    return localStorage.getItem('userType') as 'customer' | 'restaurant';
  }

  isRestaurantOwner(): boolean {
    // Return true if the user is a restaurant owner
    // This should be based on your actual user data
    return false;
  }
} 