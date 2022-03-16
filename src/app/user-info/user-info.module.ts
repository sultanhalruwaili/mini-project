import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoComponent } from './user-info.component';
import { DisplayComponent } from './display/display.component';
import { AboutComponent } from './about/about.component';
import { UserInfoRoutingModule } from './userInfo-routing.module';



@NgModule({
  declarations: [
    UserInfoComponent,
    DisplayComponent,
    AboutComponent,
    
  ],
  imports: [
    CommonModule,
    UserInfoRoutingModule
  ]
})
export class UserInfoModule { }
