import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree
} from '@angular/router';
import * as fromRoot from '@src/app/store';
import * as fromUser from '@src/app/store/user';
import {filter, Observable, take, tap} from 'rxjs';
import {select, Store} from "@ngrx/store";
import {map} from "rxjs/operators";

import {Roles} from "@src/app/store/user";
export {Roles} from "@src/app/store/user";

type Role = Roles.Employee | Roles.Recruiter

export interface GuardData {
  roles: Role[]
}

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(
    private router: Router,
    private store: Store<fromRoot.State>
  ) {
  }

  private check(allowedRoles: string[]): Observable<boolean> {
    return this.store.pipe(select(fromUser.getUser))
      .pipe(
        take(1),
        map(user => {
          return allowedRoles.includes(user.uid)
        }),
        tap(isAllowed => {
          if(!isAllowed) {
            this.router.navigate(['/'])
          }
        })
      )
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.check(route.data['roles']);
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.check(childRoute.data['roles']);
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.check(route.data['roles']);
  }
}
