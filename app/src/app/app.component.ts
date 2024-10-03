import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { ChatComponent } from './chat/chat.component';
import { VerificationComponent } from './verification/verification.component';
import { NavComponent } from './nav/nav.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserGetComponent } from './user-get/user-get.component';
import { JsonServiceComponent } from './json-service/json-service.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LoginComponent,AccountComponent,ChatComponent,CommonModule,
    VerificationComponent,NavComponent,UserDashboardComponent,SignUpComponent,UserCreateComponent,UserEditComponent,RouterLink,NgFor,UserGetComponent,CommonModule],
  providers: [JsonServiceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';
}

