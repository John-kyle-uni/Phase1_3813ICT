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
import { HomeComponent } from '../app/home/home.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserGetComponent } from './user-get/user-get.component';
import { JsonServiceComponent } from './json-service/json-service.component';
import { SocketService } from './services/socket.service';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';





export const routes: Routes = [
    { path: '', redirectTo: '/nav', pathMatch: 'full' },
    {path: 'login', component:LoginComponent},
    {path: 'account', component:AccountComponent},
    { path: 'chat', loadComponent: () => import('./chat/chat.component').then(m => m.ChatComponent) },
    {path: 'nav' , component: NavComponent},
    {path: 'verification', component:VerificationComponent},
    {path: 'home' , component:HomeComponent},
    {path: 'userCreate' , component:UserCreateComponent},
    {path: 'userEdit' , component:UserEditComponent},
    {path: 'userGet' , component:UserGetComponent}

];

@NgModule ({
    declarations: [],
    imports: [RouterModule.forRoot(routes),FormsModule,CommonModule,BrowserAnimationsModule,BrowserModule,HttpClientModule],
    exports: [RouterModule],
    providers: [SocketService,JsonServiceComponent,provideHttpClient(withFetch())],
    bootstrap: [AppComponent]
})

export class AppRoutingModule {}