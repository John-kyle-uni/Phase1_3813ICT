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

  usersadmins = [
    { username: 'super',password: '123'},
    { username: 'groupadmin',password: 'admin'}
  ];
  users = [
    { username: 'user1', password: 'user1' },
    { username: 'user2', password: 'user2' }
  ]

  constructor(private router: Router ) {}
  
  login(){
    const useradmin = this.usersadmins.find (a => a.username === this.username && a.password === this.password);
    const user = this.users.find (u => u.username === this.username && u.password === this.password);
    
    if (useradmin) {
      localStorage.setItem('user',this.username);
      this.router.navigate(['/nav']);

    } 
    if  (user) 
    {
      localStorage.setItem('user',this.username);
      this.router.navigate(['/verification']);
    }
    
  }
}
