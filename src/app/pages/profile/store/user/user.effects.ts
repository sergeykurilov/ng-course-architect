import * as fromActions from './user.actions';
import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {AngularFirestore} from "@angular/fire/firestore";
import {Observable, of, switchMap} from 'rxjs';
import {catchError, map, take} from "rxjs/operators";
import {User} from "@src/app/models/backend";

type Action = fromActions.All;

@Injectable()
export class UserEffects {
  constructor(
    private actions: Actions,
    private afs: AngularFirestore
  ) {}

  @Effect()
  read: Observable<Action> = this.actions.pipe(
    ofType(fromActions.Types.READ),
    switchMap((action: fromActions.Read) => {
      return this.afs.doc<User>(`users/${action.id}`)
        .valueChanges()
        .pipe(
          take(1),
          map((user) => {
            return new fromActions.ReadSuccess(user)
          }),
          catchError(err => {
            return of(new fromActions.ReadError(err.message))
          })
        )
    })
  );
}
