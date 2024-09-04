import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { AccountComponent } from '../account/account.component';
import { ChatComponent } from '../chat/chat.component';
import { VerificationComponent } from '../verification/verification.component';
import { RolesComponent } from '../roles/roles.component';
import path from 'path';
import { GroupManagementComponent } from '../group-management/group-management.component';
import { AuthGuard } from '../auth.guard';
import { NavComponent } from '../nav/nav.component';
import { UserDashboardComponent } from '../user-dashboard/user-dashboard.component';




export const routes: Routes = [
    {path: 'login', component:LoginComponent},
    {path: 'account', component:AccountComponent},
    {path: 'chat', component:ChatComponent},
    {path: 'nav' , component: NavComponent},
    { path: 'user-dashboard', component: UserDashboardComponent},
    {path: 'verification', component:VerificationComponent},
    {path: 'roles' , component:RolesComponent , canActivate: [AuthGuard]},
    {path: 'group-management', component:GroupManagementComponent , canActivate: [AuthGuard]}
];

@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}