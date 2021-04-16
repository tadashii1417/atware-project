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
  constructor(
    @Inject(AppNameInjectionToken) public appName: AppName,
  ) {}
  add(): void{
    const name = document.getElementById('name').value
    const role = document.getElementById('role').value
    this.users.push({name:name, role:role})
  }
  public utils = {
    AppName,
  };

  ngOnInit(): void {
    this.fetchUser().subscribe((users: User[]) => {
      this.users = users
    })
  }

  users = []

  fetchUser(): Observable<User[]> {
    if (this.appName === AppName.Accounting) {
      return allNormalUser();
    }
    return allUser();
  }
}
