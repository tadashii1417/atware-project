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

  ngOnInit(): void {
    if (this.appName === AppName.Accounting) {
      allNormalUser().subscribe((users)=>this.users = users);
    } else {
      allUser().subscribe((users)=>this.users = users);
    }
  }

  users;

  addUser = function(e){
    e.preventDefault();
    this.users.push(<User>{ 'name': e.target.name, 'role': e.target.role });

    return false;
  }

  removeUser = function(username){
    this.users = this.users.filter((user) => user.name != username);

    return false;
  }
}
