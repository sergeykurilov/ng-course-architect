import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as fromRoot from './store';
import * as fromUser from './store/user';
import * as fromDictionaries from './store/dictionaries';
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'course-app';

    isAuthorized$: Observable<boolean>;

    constructor(
      private store: Store<fromRoot.State>
    ) {}

    ngOnInit() {
      this.isAuthorized$ = this.store.pipe(
        select(fromUser.getIsAuthorized)
      )


      this.store.dispatch(new fromUser.Init());
      this.store.dispatch(new fromDictionaries.Read());
    }

  onSignOut(): void {
    this.store.dispatch(new fromUser.SignOut());
  }
}
