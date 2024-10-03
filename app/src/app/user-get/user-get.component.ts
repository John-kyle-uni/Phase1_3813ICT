import { Component, OnInit } from '@angular/core';
import { UserModel } from '../UserModel';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-user-get',
  standalone: true,
  imports: [HttpClientModule,CommonModule],
  templateUrl: './user-get.component.html',
  styleUrl: './user-get.component.css'
})

export class UserGetComponent {
  users: UserModel[] = [];
  constructor() {}

}
// export class UserGetComponent implements OnInit{
//   users: UserModel[] = [];
//   constructor (private userService: UserService, private router: Router ) {}
//   ngOnInit() {
//     this.getUsers();
//   }
//   getUsers(): void {
//     this.userService.UserGet().subscribe(data => {
//       this.users = data;
//     });
//   };
//   deleteUser(user: UserModel){
//     this.userService.UserDelete({_id: user._id})
//   }
//   updateUser(user: UserModel) {
//     localStorage.removeItem('user');
//     localStorage.setItem('user', JSON.stringify(user));
//     this.router.navigate(['user-edit']);

//   }
// }
