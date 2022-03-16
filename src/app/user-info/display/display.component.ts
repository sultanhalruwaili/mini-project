import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  users: UserModel[];
  gender = 0;

  constructor(private appService: AppService) { }

  ngOnInit(): void {

   this.users= this.appService.users;


  }

}
