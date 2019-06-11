import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{LoginComponent} from '../app/login/login.component';
import{ForgetpasswordComponent} from '../app/forgetpassword/forgetpassword.component';
import {SignupComponent} from '../app/signup/signup.component'

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'forgetpassword',component:ForgetpasswordComponent},
  {path:'signup',component:SignupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
