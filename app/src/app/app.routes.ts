import { Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { AccountComponent } from '../account/account.component';
import { ChatComponent } from '../chat/chat.component';
import { VerificationComponent } from '../verification/verification.component';
import { RolesComponent } from '../roles/roles.component';
import path from 'path';


export const routes: Routes = [
    {path: 'login', component:LoginComponent},
    {path: 'account', component:AccountComponent},
    {path: 'chat', component:ChatComponent},
    {path: 'verification', component:VerificationComponent},
    {path: 'roles' , component:RolesComponent}
];
