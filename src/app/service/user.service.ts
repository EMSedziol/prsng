import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { User } from '../model/user';

const url = 'http://localhost:8080/User/';
const headers: HttpHeaders = new HttpHeaders({'X-Requested-Width': 'XMLHttpRequest'});

@Injectable()
export class UserService {

  users: User[];



  list(): Observable<User[]> {
    return this.http.get(url + 'List') as Observable<User[]>;
  }

  get(id): Observable<User[]> {
    return this.http.get(url + 'Get?id=' + id) as Observable<User[]>;
  }

  create(user: User) {
    return this.http.post(url + 'Create', user, { headers: headers }) as Observable<any>;
  }

  update(user: User) {
    return this.http.post(url + 'Update', user, { headers: headers }) as Observable<any>;
  }

  delete(user: User) {
    return this.http.post(url + 'Delete', user, { headers: headers }) as Observable<any>;
  }

  constructor(private http: HttpClient) { }

}
