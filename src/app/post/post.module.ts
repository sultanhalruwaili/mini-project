import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';
import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';



@NgModule({
  declarations: [
    PostComponent
  ],
  imports: [
  CommonModule,
  PostRoutingModule,
  FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class PostModule { }
