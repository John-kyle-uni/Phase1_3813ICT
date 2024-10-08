// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { NavComponent } from '../app/nav/nav.component';

// const routes: Routes = [
//   { path: '', redirectTo: '/dashboard', pathMatch: 'full' },  // Default route
//   { path: '/dashboard', component: NavComponent },
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],  // Configure the router with the routes
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../app/login/login.component';
import { AccountComponent } from '../app/account/account.component';
import { ChatComponent } from '../app/chat/chat.component';
import { VerificationComponent } from '../app/verification/verification.component';
import path from 'path';
import { AuthGuard } from '../auth.guard';
import { NavComponent } from '../app/nav/nav.component';
import { UserDashboardComponent } from '../app/user-dashboard/user-dashboard.component';
import { HomeComponent } from '../app/home/home.component';
import { SignUpComponent } from '../app/sign-up/sign-up.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserGetComponent } from './user-get/user-get.component';
import { JsonServiceComponent } from './json-service/json-service.component';
import { SocketService } from './services/socket.service';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';





export const routes: Routes = [
    { path: '', redirectTo: '/nav', pathMatch: 'full' },
    {path: 'login', component:LoginComponent},
    {path: 'account', component:AccountComponent},
    { path: 'chat', loadComponent: () => import('./chat/chat.component').then(m => m.ChatComponent) },
    {path: 'nav' , component: NavComponent},
    {path: 'user-dashboard', component: UserDashboardComponent},
    {path: 'verification', component:VerificationComponent},
    {path: 'home' , component:HomeComponent},
    {path: 'signup' , component:SignUpComponent},
    {path: 'userCreate' , component:UserCreateComponent},
    {path: 'userEdit' , component:UserEditComponent},
    {path: 'userGet' , component:UserGetComponent}

];

@NgModule ({
    declarations: [],
    imports: [RouterModule.forRoot(routes),FormsModule,CommonModule],
    exports: [RouterModule],
    providers: [SocketService],
    bootstrap: [AppComponent]
})

export class AppRoutingModule {}