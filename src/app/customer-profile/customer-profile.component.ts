import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.scss'],
  standalone: true,
  imports: [CommonModule, NavbarComponent],
})
export class CustomerProfileComponent {
  constructor() {}

  ngOnInit() {}
}
