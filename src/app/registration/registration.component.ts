import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from '../models/user.model';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  ngForm: FormGroup = new FormGroup({});
  url2 = "http://alhilal.com";


  constructor(private router: Router, private appService: AppService) {
  }

  ngOnInit(): void {

  }

  get thefunction() {
    return this.ngForm.controls;
  }

  valditeUrl(form: NgForm) {
    let url: string = form.value.url;
    return (url?.startsWith("https://") || url?.startsWith("http://")) ? true : false;

  }

  onSubmit(form: NgForm) {
    const user = new UserModel(form.value.firstname,
      form.value.lastname,
      form.value.email,
      form.value.url);
    this.appService.addUser(user) 

    console.log(user);

    // this.appService.updateUser(user);
    // this.router.navigate(["display"]);
    // console.log(this.appService.updateUser(user));

  }


}

