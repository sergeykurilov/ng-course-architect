import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {StepperService} from "./components/stepper/services";
import {Observable, Subject, takeUntil} from "rxjs";

import * as fromRoot from '@src/app/store';
import * as fromDictionaries from '@src/app/store/dictionaries';
import {select, Store} from "@ngrx/store";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent implements OnInit, OnDestroy  {

  dictionaries$: Observable<fromDictionaries.Dictionaries>;
  dictionariesIsReady$: Observable<boolean>;


  private destroy = new Subject<any>();

  constructor(
    private store: Store<fromRoot.State>
    ,public stepper: StepperService) { }



  ngOnInit(): void {

    this.dictionaries$ = this.store.pipe(select(fromDictionaries.getDictionaries));
    this.dictionariesIsReady$ = this.store.pipe(select(fromDictionaries.getIsReady));

    this.stepper.init([
      { key: 'personal', label: 'Personal' },
      { key: 'professional', label: 'Professional' },
    ])
    this.stepper.complete$.pipe(takeUntil(this.destroy)).subscribe(() => {
      console.log('complete')
    })
    this.stepper.cancel$.pipe(takeUntil(this.destroy)).subscribe(() => {
      console.log('canceled')
    })
  }
  ngOnDestroy() {
    this.destroy.next(null);
    this.destroy.complete();
  }
}
