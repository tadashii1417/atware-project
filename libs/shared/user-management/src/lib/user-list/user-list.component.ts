import { Component, Inject, OnInit } from '@angular/core';
import { AppName, AppNameInjectionToken } from '@monorepos/utils';
import { allNormalUser, allUser, User} from './user-mock.service';
import {UserService} from'./user-mock.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'monorepos-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  constructor(@Inject(AppNameInjectionToken) public appName: AppName, @Inject(AppNameInjectionToken) public userService: UserService) {}

  public utils = {
    AppName,
  };

  ngOnInit(): void {}

  fetchUser(): Observable<User[]> {
    if (this.appName === AppName.Accounting) {
      alert(this.userService.getUsers())
      return of(this.userService.getUsers());

      // return allNormalUser();
    }
    // return allNormalUser();
    alert(this.userService.getUsers())
    return of(this.userService.getUsers());
  }

  addUser(name){
    window.alert(name);
  }
}
