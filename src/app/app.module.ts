import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationModule } from './registration/registration.module';
import { AboutComponent } from './user-info/about/about.component';
import { HeaderComponent } from './header/header.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserInfoModule } from './user-info/user-info.module';
//import { DropdownDirective } from './registration/dropdown.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RegistrationModule,
    UserInfoModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



