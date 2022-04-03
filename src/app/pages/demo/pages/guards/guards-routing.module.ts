import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { RoleComponent } from './components/role/role.component';
import { UnauthComponent } from './components/unauth/unauth.component';
import { GuardsComponent } from './guards.component';
import {AuthGuard, RoleGuard, Roles, UnauthGuard} from "@src/app/guards";

const routes: Routes = [
  {
    path: '',
    component: GuardsComponent,
    // canActivateChild: [AuthGuard],
    children: [
      {
        path: 'auth',
        component: AuthComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'unauth',
        component: UnauthComponent,
        canActivate: [UnauthGuard]
      },
      {
        path: 'role',
        component: RoleComponent,
        canActivate: [AuthGuard, RoleGuard],
        data: {
          roles: [Roles.Recruiter]
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuardsRoutingModule { }
