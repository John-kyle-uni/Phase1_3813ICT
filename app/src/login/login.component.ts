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
    { username: 'super',password: '123'},
    { username: 'user', password: 'user1' },
    { username: 'groupadmin',password: 'admin'}
  ];

  constructor(private router: Router ) {}
  
  login(){
    const user = this.users.find (u => u.username === this.username && u.password === this.password);

    if (user) {
      localStorage.setItem('user',this.username);
      this.router.navigate(['/verification']);

    } else {
      alert('Account Invalid');
    }

  }
}
