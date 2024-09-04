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
    { username: 'user1',birthdate: '27 november 2000' ,email:'user1@email.com', password: 'user1'},
    { username: 'user2',birthdate: '27 march 2000' ,email:'user2@email.com', password: 'user2' },
  ];

  constructor(private router: Router ) {}

  verify(){

      const user = this.users.find (u => u.username === this.username && u.email === this.email);
  
      if (user) {
        localStorage.setItem('username',this.username);
        this.router.navigate(['/user-dashboard']);
  
      } else {
        alert('Account Invalid, Try Again');
      }

  }

}
