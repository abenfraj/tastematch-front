import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './login//signin/signin.component';
import { PhoneComponent } from './login/phone/phone.component';
import { CodeComponent } from './login/code/code.component';
import { PasswordComponent } from './login/password/password.component';
import { FirstnameComponent } from './login/firstname/firstname.component';
import { BirthdayComponent } from './login/birthday/birthday.component';
import { GenderComponent } from './login/gender/gender.component';
import { CuisineComponent } from './login/cuisine/cuisine.component';
import { DietComponent } from './login/diet/diet.component';
import { WelcomeComponent } from './login/welcome/welcome.component';
import { RestaurantNameComponent } from './login/restaurant-name/restaurant-name.component';
import { BusinessEmailComponent } from './login/business-email/business-email.component';
import { RestaurantAddressComponent } from './login/restaurant-address/restaurant-address.component';
import { SiretNumberComponent } from './login/siret-number/siret-number.component';
import { AddPhotosComponent } from './login/add-photos/add-photos.component';
import { RestaurantDescriptionComponent } from './login/restaurant-description/restaurant-description.component';
import { PriceRangeComponent } from './login/price-range/price-range.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { RestaurantProfileComponent } from './restaurant-profile/restaurant-profile.component';
import { CustomerEmailComponent } from './login/customer-email/customer-email.component';
import { CustomerLoginComponent } from './login/customer-login/customer-login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'phone', component: PhoneComponent },
  { path: 'code', component: CodeComponent },
  { path: 'password', component: PasswordComponent },
  { path: 'firstname', component: FirstnameComponent },
  { path: 'birthday', component: BirthdayComponent },
  { path: 'gender', component: GenderComponent },
  { path: 'cuisine', component: CuisineComponent },
  { path: 'diet', component: DietComponent },
  { path: 'welcome', component: WelcomeComponent },
  {
    path: 'restaurant-name',
    component: RestaurantNameComponent,
    data: { animation: 'restaurantName' },
  },
  {
    path: 'business-email',
    component: BusinessEmailComponent,
    data: { animation: 'businessEmail' },
  },
  {
    path: 'restaurant-address',
    component: RestaurantAddressComponent,
    data: { animation: 'restaurantAddress' },
  },
  {
    path: 'siret-number',
    component: SiretNumberComponent,
    data: { animation: 'siretNumber' },
  },
  {
    path: 'add-photos',
    component: AddPhotosComponent,
    data: { animation: 'addPhotos' },
  },
  {
    path: 'restaurant-description',
    component: RestaurantDescriptionComponent,
    data: { animation: 'restaurantDescription' },
  },
  {
    path: 'price-range',
    component: PriceRangeComponent,
    data: { animation: 'priceRange' },
  },
  {
    path: 'customer-profile',
    component: CustomerProfileComponent,
    data: { animation: 'customerProfile' },
  },
  {
    path: 'restaurant-profile',
    component: RestaurantProfileComponent,
    data: { animation: 'restaurantProfile' },
  },
  {
    path: 'swipe',
    loadComponent: () =>
      import('./swipe/swipe.component').then((m) => m.SwipeComponent),
  },
  {
    path: 'preferences',
    loadComponent: () =>
      import('./preferences-widget/preferences-widget.component').then(
        (m) => m.PreferencesWidgetComponent
      ),
  },
  {
    path: 'filters',
    loadComponent: () =>
      import('./filters/filters.component').then((m) => m.FiltersComponent),
  },
  {
    path: 'customer-email',
    component: CustomerEmailComponent,
    data: { animation: 'customerEmail' },
  },
  {
    path: 'customer-login',
    component: CustomerLoginComponent,
    data: { animation: 'customerLogin' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
