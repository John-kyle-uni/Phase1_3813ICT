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
  email: string = '';

  usersadmins = [
    { username: 'super',password: '123'},
    { username: 'groupadmin',password: 'admin'}
  ];
  users = [
    { username: 'user1', password: 'user1' },
    { username: 'user2', password: 'user2' }
  ]
  saveuser = [{
    username: [''],
    email: [''],

  }]
  constructor(private router: Router ) {}
  
  login(){
    const useradmin = this.usersadmins.find (a => a.username === this.username && a.password === this.password);
    const user = this.users.find (u => u.username === this.username && u.password === this.password);
    
    if (useradmin) {
      localStorage.setItem('user',JSON.stringify(this.username));
      localStorage.setItem('email',this.email);
      this.router.navigate(['/nav']);

    } 
    else if (user) 
    {
      localStorage.setItem('user',this.username);
      localStorage.setItem('email',this.email);
      this.router.navigate(['/nav']);
    }
    else 
    {
      alert('Invalid User')
    }
   }
  onsubmit(){
    alert('hello')
  }

}
