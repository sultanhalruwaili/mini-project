import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  users : UserModel[] = [];
  constructor(private router: Router) { }

  // user = new Subject<UserModel>()

  // user = new EventEmitter<UserModel>( )


  // updateUser(u: UserModel): void {

  //   this.user.emit(u);


  // }

  addUser(user :UserModel) {
    this.users.push(user)
  }


}
