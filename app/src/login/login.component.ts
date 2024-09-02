import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username:string = '' ;
  password:string  = '' ;

  users = [
    { username: 'superadmin',birthdate: '27 november 2000',age: '23',email:'superadmin@email.com', password: '12345',valid: Boolean},
    { username: 'user',birthdate: '27 march 2000',age: '24',email:'user@email.com', password: 'user1' ,valid: Boolean},
    { username: 'groupadmin',birthdate: '27 may 2002',age: '21',email:'groupadmin@email.com', password: 'admin',valid: Boolean}
  ];

  constructor(private router: Router ) {}
  
  login(){
    const user = this.users.find (u => u.username === this.username && u.password === this.password);

    if (user) {
      this.router.navigate(['/verification']);
      localStorage.setItem('username',this.username);
    } else {
      alert('Account Invalid');
    }

  }
}
