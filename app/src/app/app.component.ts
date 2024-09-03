import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { AccountComponent } from '../account/account.component';
import { ChatComponent } from '../chat/chat.component';
import { VerificationComponent } from '../verification/verification.component';
import { RolesComponent } from '../roles/roles.component';
import { GroupManagementComponent } from '../group-management/group-management.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LoginComponent,AccountComponent,ChatComponent,VerificationComponent,RolesComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';
}

