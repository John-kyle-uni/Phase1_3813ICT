import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verification',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './verification.component.html',
  styleUrl: './verification.component.css'
})
export class VerificationComponent {
  username:string ='';
  birthdate:string ='';
  email:string ='';

  users = [
    { username: 'super',birthdate: '27 november 2000' ,email:'superadmin@email.com', password: '123'},
    { username: 'user',birthdate: '27 march 2000' ,email:'user@email.com', password: 'user1' },
    { username: 'groupadmin',birthdate: '27 may 2002',email:'groupadmin@email.com', password: 'admin'}
  ];

  constructor(private router: Router ) {}

  verify(){

      const user = this.users.find (u => u.username === this.username && u.email === this.email);
  
      if (user) {
        localStorage.setItem('username',this.username);
        this.router.navigate(['/nav']);
  
      } else {
        alert('Account Invalid, Try Again');
      }

  }

}
