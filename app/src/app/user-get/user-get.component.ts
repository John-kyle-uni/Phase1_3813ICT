import { Component, OnInit } from '@angular/core';
import { Router,RouterModule } from '@angular/router';
import { UserdataService } from '../services/userdata.service';
// import { Users } from '../models/users';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';


interface Users {
  id: number,
  username: string,
  password: string,
  email: string,
  roles: string
}


@Component({
  selector: 'app-user-get',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './user-get.component.html',
  styleUrl: './user-get.component.css'
})

export class UserGetComponent implements OnInit {
  users: Users[] = [];
  constructor(private userdata: UserdataService,private router:Router, private http: HttpClient) {}
  ngOnInit() {
    console.log('Initializing component and fetching users...');
    this.getUsers();
    }
  
  getUsers() {
    this.http.get<Users[]>('http://localhost:3000/api/getlist').subscribe(
      (data) => {
          console.log('Fetched users:', data); // Log the data
          this.users = data; 
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }
  deleteuser(id:number) {
    if(confirm("Are you sure?")) {
      this.userdata.deleteitem(id).subscribe((data)=>{
        this.users = data;
      })
    }
  }
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
