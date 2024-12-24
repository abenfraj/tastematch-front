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
  { path: 'welcome', component: WelcomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
