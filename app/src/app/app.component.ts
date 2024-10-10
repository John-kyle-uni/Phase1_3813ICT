import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { ChatComponent } from './chat/chat.component';
import { VerificationComponent } from './verification/verification.component';
import { NavComponent } from './nav/nav.component';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserGetComponent } from './user-get/user-get.component';
import { JsonServiceComponent } from './json-service/json-service.component';
import { FormsModule } from '@angular/forms';
import { SocketService } from './services/socket.service';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LoginComponent,AccountComponent,ChatComponent,CommonModule,
    VerificationComponent,NavComponent,UserCreateComponent,UserEditComponent,RouterLink,NgFor,UserGetComponent,FormsModule,RouterModule,HttpClientModule],
  providers: [JsonServiceComponent,SocketService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';
}

