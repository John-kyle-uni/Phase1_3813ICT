import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders, HttpParams } from "@angular/common/http";
import { UserModel } from "./UserModel";
import { Observable } from "rxjs";


@Injectable({providedIn: 'root'})
export class UserService {
    url = 'http://localhost:3000/';

    constructor(private http: HttpClient) {}

    UserInsert(user: UserModel) {
        console.log(user);
        this.http.post(this.url + 'UserInsert' ,user)
            .subscribe(res => console.log('done'))
    }

    UserGet() {
        return this.http.get<UserModel[]> (this.url + 'UserGet');
    }
    UserUpdate(userQuery: Partial<UserModel>, userUpdate: UserModel): Observable<any> {
        const queryUpdate = {query: userQuery, update: userUpdate};
        return this.http.put(this.url + 'UserUpdate', queryUpdate);
    }
    UserDelete(user: {_id:string}) {
        console.log(user);
        this.http.delete(this.url + 'UserDelete' + user._id)
        .subscribe(res => console.log ('Done'));
    }
}