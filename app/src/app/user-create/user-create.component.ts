import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { JsonServiceComponent } from '../json-service/json-service.component';

@Component({
  selector: 'app-user-create',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './user-create.component.html',
  styleUrl: './user-create.component.css'
})
export class UserCreateComponent implements OnInit { 
  username ='';
  password = '';
  email = '';
  constructor(private userService: UserService, private router: Router , private JsonServiceComponent: JsonServiceComponent) {
    
    // this.UserOrigin = userFromStorage ? JSON.parse(userFromStorage) : null;
    
  
    // this.email = userFromStorage ? JSON.parse(userFromStorage) : null;
  }
  setItem() {
    this.JsonServiceComponent.setItem(this.username, this.email);
    console.log(this.JsonServiceComponent.jsonItems);
  }

  ngOnInit() {}

  // insertfunc() {
  //   this.userService.UserUpdate(this.UserOrigin, this.username).subscribe(data =>
  //   {
  //     console.log(data);
  //     this.router.navigate(['']);
  //   });
  // }
  login(){
    alert('hi')
  }

}
