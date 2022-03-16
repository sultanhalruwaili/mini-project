import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserModel } from '../../models/user.model';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  user: UserModel;
  gender = 0;

  constructor(private acvtiveRoute: ActivatedRoute, private appSer: AppService) { }

  ngOnInit(): void {

    const index = this.acvtiveRoute.snapshot.params['i']

    const value = this.appSer.users[index]

    if (value) this.user = value;

  }

}
