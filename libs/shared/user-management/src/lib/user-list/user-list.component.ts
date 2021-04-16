import { Component, Inject, OnInit } from '@angular/core';
import { AppName, AppNameInjectionToken } from '@monorepos/utils';
import { allNormalUser, allUser, User } from './user-mock.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'monorepos-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  constructor(@Inject(AppNameInjectionToken) public appName: AppName) {}

  public utils = {
    AppName,
  };

  ngOnInit(): void {}

  fetchUser(): Observable<User[]> {
    if (this.appName === AppName.Accounting) {
      return allNormalUser();
    }
    return allUser();
  }

  addUser = function(user: User){
    if(this.users.some((u)=>(u.name == user.name && u.role == user.role))){
      alert('Already Exist!');
      return;
    }

    this.users.push({
      'username': user.name,
      'role': user.role
    });
  }

  removeUser = function(username){
    this.users = this.users.filter((user)=>user.username != username);
  }
}
