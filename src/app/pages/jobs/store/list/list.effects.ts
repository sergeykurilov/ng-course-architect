import * as fromActions from './list.actions';
import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from '@ngrx/effects';
import {AngularFirestore} from "@angular/fire/firestore";
import {from, Observable, of, switchMap, take} from "rxjs";
import {catchError, map} from "rxjs/operators";
import {extractDocumentChangeActionData} from "@src/app/shared";
import { Job, JobCreateRequest } from './list.models';
import {firestore} from "firebase/app";
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
    switchMap(() =>
      this.afs.collection('jobs', ref => ref.orderBy('created'))
        .snapshotChanges()
        .pipe(take(1),
          map((changes:any) => changes.map((x:any) => extractDocumentChangeActionData(x))),
          map((items: Job[]) => new fromActions.ReadSuccess(items)),
          catchError((err) => of(new fromActions.ReadError(err.message)))
        ),
    ),
  )

  @Effect()
  create: Observable<Action> = this.actions.pipe(
    ofType(fromActions.Types.CREATE),
    map((action: fromActions.Create) => action.job),
    map((job: JobCreateRequest) => ({
      ...job,
      created: firestore.FieldValue.serverTimestamp()
    })),
    switchMap((request: JobCreateRequest) => {
      return from(this.afs.collection('jobs')
        .add(request))
        .pipe(
          map(res => ({ ...request, id: res.id })),
          map((job: Job) => new fromActions.CreateSuccess(job)),
          catchError(err => of(new fromActions.CreateError(err.message)))
        )
    })
  )

  @Effect()
  update: Observable<Action> = this.actions.pipe(
    ofType(fromActions.Types.UPDATE),
    map((actions: fromActions.Update) => actions.job),
    map((job: Job) => ({
      ...job,
      updated: firestore.FieldValue.serverTimestamp()
    })),
    switchMap(job =>
    from(this.afs.collection('jobs').doc(job.id).set(job))
      .pipe(
        map(() => new fromActions.UpdateSuccess(job.id, job)),
        catchError((err) => of(new fromActions.UpdateError(err.message)))
      ),
    ),
  )

  @Effect()
  delete: Observable<Action> = this.actions.pipe(
    ofType(fromActions.Types.DELETE),
    map((action: fromActions.Delete) => action.id),
    switchMap((id) =>
      from(this.afs.collection('jobs').doc(id).delete())
        .pipe(
          map(() => new fromActions.DeleteSuccess(id)),
          catchError((err) => of(new fromActions.DeleteError(err.message)))
        )
    )
  )
}
