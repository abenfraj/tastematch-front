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
} 