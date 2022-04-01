import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';

import * as fromRoot from '@src/app/store';
import * as fromUser from '@src/app/store/user';
import * as fromProfileUser from '../../store/user';
import {Observable} from "rxjs";
import {ActivatedRoute, Params} from '@angular/router';
import {select, Store} from '@ngrx/store';
import {map} from "rxjs/operators";
import {User} from "@src/app/store/user";

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisplayComponent implements OnInit, OnDestroy {

  user$: Observable<any>;
  isOwnProfile$: Observable<boolean>;

  constructor(
    private route: ActivatedRoute,
    private store: Store<fromRoot.State>,
  ) {}

  ngOnInit(): void {
    this.user$ = this.store.pipe(select(fromProfileUser.getUser));
    this.route.params.subscribe((params: Params) => {
      const id = params['id'];
      this.store.dispatch(new fromProfileUser.Read(id));
      this.isOwnProfile$ = this.store.pipe(
        select(fromUser.getUser),
        map(user => user && user.uid === id)
      )
    })
  }


  ngOnDestroy(): void {
    this.store.dispatch(new fromProfileUser.Clear())
  }
}
