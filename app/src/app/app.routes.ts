import { Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { AccountComponent } from '../account/account.component';
import { ChatComponent } from '../chat/chat.component';
import path from 'path';

export const routes: Routes = [
    {path: 'login', component:LoginComponent},
    {path: 'account', component:AccountComponent},
    {path: 'chat', component:ChatComponent}];
