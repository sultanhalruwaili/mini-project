import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path:'', loadChildren : () => import('./registration/registration.module').then(m => m.RegistrationModule)},
  {path:'display', loadChildren : () => import('./user-info/user-info.module').then(m => m.UserInfoModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
