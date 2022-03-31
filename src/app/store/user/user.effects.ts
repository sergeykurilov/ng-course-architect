


import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from '@ngrx/effects';
import {AngularFireAuth} from "@angular/fire/auth";
import {AngularFirestore} from "@angular/fire/firestore";
import { Router } from '@angular/router';
import {NotificationService} from "@src/app/services";
import {from, Observable, of, tap, withLatestFrom} from 'rxjs';
import {catchError, map, switchMap, take} from "rxjs/operators";
import * as fromActions from './user.actions';
import { environment } from "@src/environments/environment";
import { User } from "./user.models";
import {firestore} from "firebase/app";
type Action = fromActions.All;



@Injectable()
export class UserEffects {
  constructor(
    private actions: Actions,
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
    private notification: NotificationService,
  ) {}

  @Effect()
  signInEmail: Observable<Action> = this.actions.pipe(
    ofType(fromActions.Types.SIGN_IN_EMAIL),
    map((action: fromActions.SignInEmail) => action.credentials),
    switchMap(credentials => {
      return from(this.afAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password)).pipe(
        switchMap(signInState => {
          return this.afs.doc<User>(`users/${signInState.user.uid}`)
            .valueChanges()
            .pipe(
              take(1),
              tap(() => {
                this.notification.success('Successfully logged in')
                return this.router.navigate(['/'])
              }),
              map(user => new fromActions.SignInEmailSuccess(
                signInState.user.uid, user || null))
            )
        }),
        catchError(err => {
          this.notification.error(err.message);
          return of(new fromActions.SignInEmailError(err.message));
        })
      )
    })
  )

  @Effect()
  init: Observable<Action> = this.actions.pipe(
    ofType(fromActions.Types.INIT),
    switchMap(() => {
      return this.afAuth.authState.pipe(
        take(1),
        switchMap((authState) => {
          if(authState) {
            return this.afs.doc<User>(`users/${authState.uid}`)
              .valueChanges()
              .pipe(
                take(1),
                map(user => new fromActions.InitAuthorized(authState.uid, user || null)),
                catchError(err => {
                  this.notification.error(err.message);
                  return of(new fromActions.InitError(err.message));
                })
              )
          } else {
            return of(new fromActions.InitUnauthorized())
          }
        })
      )
    })
  )

  @Effect()
  signUpEmail: Observable<Action> = this.actions.pipe(
    ofType(fromActions.Types.SIGN_UP_EMAIL),
    map((action: fromActions.SignUpEmail) => action.credentials),
    switchMap(credentials => {
      return from(this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password)).pipe(
        tap(() => {
          this.afAuth.auth.currentUser.sendEmailVerification(
            environment.firebase.actionCodeSettings
          );
          this.router.navigate(['/auth/email-confirm'])
        }),
        map((signUpState) => new fromActions.SignUpEmailSuccess(signUpState.user.uid)),
        catchError(err => {
          this.notification.error(err.message);
          return of(new fromActions.SignUpEmailError(err.message));
        })
      );
    })
  )

  @Effect()
  signOut: Observable<Action> = this.actions.pipe(
    ofType(fromActions.Types.SIGN_OUT),
    switchMap(() => {
      return from(this.afAuth.auth.signOut()).pipe(
        map(() => new fromActions.SignOutSuccess()),
        catchError(err => {
          this.notification.error(err.message);
          return of(new fromActions.SignOutError(err.message));
        })
      )
    })
  )

  @Effect()
  create: Observable<Action> = this.actions.pipe(
    ofType(fromActions.Types.CREATE),
    map((action: fromActions.Create) => action.user),
    withLatestFrom(this.afAuth.authState.pipe(take(1))),
    map(([user, state]) => ({
      ...user,
      uid: state.uid,
      email: state.email,
      created: firestore.FieldValue.serverTimestamp()
    })),
    switchMap((user: User) => {
      return from(this.afs.collection('users').doc(user.uid).set(user)).pipe(
        tap(() => this.router.navigate(['/profile', user.uid])),
        map(() => new fromActions.CreateSuccess(user)),
        catchError(err => of(new fromActions.CreateError(err.message)))
      )
    })
  )

  @Effect()
  update: Observable<Action> = this.actions.pipe(
    ofType(fromActions.Types.UPDATE),
    map((action: fromActions.Update) => action.user),
    switchMap((user) => {
      return from(this.afs.collection('users').doc(user.uid).set(user)).pipe(
        tap(() => this.router.navigate(['/profile', user.uid])),
        map(() => new fromActions.UpdateSuccess(user)),
        catchError(err => of(new fromActions.UpdateError(err.message)))
      )
    })
  )

}
