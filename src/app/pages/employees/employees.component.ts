import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './store/list/list.models';
import {select, Store} from "@ngrx/store";

import * as fromRoot from '@src/app/store';
import * as fromList from './store/list';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeesComponent implements OnInit {

  employees$: Observable<User[]>;

  constructor(
    private store: Store<fromRoot.State>
  ) { }

  ngOnInit(): void {
    this.employees$ = this.store.pipe(select(fromList.getItems))
    this.store.dispatch(new fromList.Read())
  }

}
