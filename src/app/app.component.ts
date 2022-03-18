import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as fromRoot from './store';
import * as fromDictionaries from './store/dictionaries';
import {Store} from "@ngrx/store";
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'course-app';

    constructor(
      private store: Store<fromRoot.State>
    ) {}

    ngOnInit() {
      this.store.dispatch(new fromDictionaries.Read());
    }
}
