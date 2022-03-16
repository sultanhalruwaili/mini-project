import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../user-info/about/about.component';
import { DisplayComponent } from '../user-info/display/display.component';
import { RegistrationComponent } from './registration.component';

const routes: Routes = [
  //{path:'about', component: AboutComponent},
  // {path:'display', children: [
  //   {path: '' , component: DisplayComponent},
  //   {path : ':i' , component: AboutComponent}
  // ]},
  {path:'', component: RegistrationComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterationRoutingModule { }
