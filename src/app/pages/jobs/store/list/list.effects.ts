import * as fromActions from './list.actions';
import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from '@ngrx/effects';
import {AngularFirestore} from "@angular/fire/firestore";
import {Observable, switchMap} from "rxjs";
type Action = fromActions.All;

@Injectable()
export class ListEffects {
  constructor(
    private actions: Actions,
    private afs: AngularFirestore
  ) {}

  @Effect()
  read: Observable<Action> = this.actions.pipe(
    ofType(fromActions.Types.READ),
    switchMap(() => {

    })
  )
}
