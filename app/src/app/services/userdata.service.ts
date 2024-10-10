import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Users} from '../models/users'
@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor(private http:HttpClient) { }
  add(user:Users){
    return this.http.post<Users>('http://localhost:3000/api/add', user);
  }
  getlist(){
    return this.http.get<any>('http://localhost:3000/api/getlist');
  }
  getone(userID: number){
    return this.http.post<any>('http://localhost:3000/api/getone', {'userid': userID});
  }
  edit(user:Users){
    return this.http.post<any>('http://localhost:3000/api/edit', user);
  }
  deleteitem(userID: number){
    return this.http.post<any>('http://localhost:3000/api/delete', {'userid': userID});
  }
  verify(userID: number){
    return this.http.post<any>('http://localhost:3000/api/verify', {'id': userID});
  }
  getusercount(user:Users){
    return this.http.get<any>('http://localhost:3000/api/usercount');
  }
}
