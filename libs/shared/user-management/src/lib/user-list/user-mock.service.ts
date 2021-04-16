import { Observable, of } from 'rxjs';
export class UserService {
  // constructor(private userService: allNormalUser());
  // private users = [];
  users: User[] = [];
  constructor(){
    allNormalUser().subscribe(users=> this.users = users);
  }
  getUsers(): User[] {
    // const users = allNormalUser();
    return this.users;
  }

  addUser(name_string, role_string) {
    this.users.push({name:"Tham", role:"admin"});
    window.alert("add user");
    // print(this.users);
  } 
  // const users = allNormalUser();

}

export const allNormalUser = (): Observable<User[]> => {
  return of([
    {
      name: 'ユーザ2',
      role: 'user',
    },
    {
      name: 'ユーザ3',
      role: 'user',
    },
    {
      name: 'ユーザ4',
      role: 'temp_user',
    },
    {
      name: 'ユーザ5',
      role: 'user',
    },
    {
      name: 'ユーザ7',
      role: 'user',
    },
    {
      name: 'ユーザ8',
      role: 'user',
    },
    {
      name: 'ユーザ9',
      role: 'user',
    },
    {
      name: 'ユーザ10',
      role: 'user',
    },
    {
      name: 'ユーザ11',
      role: 'user',
    },
    {
      name: 'ユーザ12',
      role: 'user',
    },
  ]);
};

export const allUser = (): Observable<User[]> => {
  return of([
    {
      name: 'ユーザ1',
      role: 'admin',
    },
    {
      name: 'ユーザ2',
      role: 'user',
    },
    {
      name: 'ユーザ3',
      role: 'user',
    },
    {
      name: 'ユーザ4',
      role: 'temp_user',
    },
    {
      name: 'ユーザ5',
      role: 'user',
    },
    {
      name: 'ユーザ6',
      role: 'admin',
    },
    {
      name: 'ユーザ7',
      role: 'user',
    },
    {
      name: 'ユーザ8',
      role: 'user',
    },
    {
      name: 'ユーザ9',
      role: 'user',
    },
    {
      name: 'ユーザ10',
      role: 'user',
    },
    {
      name: 'ユーザ11',
      role: 'user',
    },
    {
      name: 'ユーザ12',
      role: 'user',
    },
  ]);
};

export interface User {
  name: string;
  role: 'user' | 'admin' | 'temp_user';
}
