import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegisterationRoutingModule } from './registeration-routing.module';
import { RegistrationComponent } from './registration.component';
import { CommonModule } from '@angular/common';
import { DisplayDirective } from '../user-info/display/display.directive';
import { DropdownDirective } from './dropdown.directive';


@NgModule({
    declarations: [
        RegistrationComponent,
        DisplayDirective,
        DropdownDirective
    ],
    imports: [
       RegisterationRoutingModule,
       FormsModule,
       CommonModule
    ],
    providers: [],
})
export class RegistrationModule { }



