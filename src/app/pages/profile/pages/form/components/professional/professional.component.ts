import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import {Subject, takeUntil} from "rxjs";
import {StepperService} from "@src/app/pages/profile/pages/form/components/stepper/services";
import { Dictionaries } from '@src/app/store/dictionaries';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {markFormGroupTouched, regexErrors} from '@src/app/shared';
import {EmployeeForm, RecruiterForm} from "@src/app/pages/profile/pages/form/components/professional/roles";

export interface ProfessionalForm {
  about: string;
  roleId: string;
  role: RecruiterForm | EmployeeForm;
}

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfessionalComponent implements OnInit, OnDestroy {

  @Input() value: ProfessionalForm;
  @Input() dictionaries: Dictionaries;

  @Output() changed = new EventEmitter<ProfessionalForm>();

  form: FormGroup;
  regexErrors = regexErrors;

  private destroy = new Subject<any>();

  constructor(
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef,
    private stepper: StepperService
  ) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      roleId: [null, {
        updateOn: 'change', validators: [
          Validators.required
        ]
      }],
      about: [null]
    });

    if (this.value) {
      this.form.patchValue(this.value);
    }


    this.stepper.check$.pipe(takeUntil(this.destroy)).subscribe((type) => {
      if (!this.form.valid) {
        markFormGroupTouched(this.form);
        this.form.updateValueAndValidity();
        this.cdr.detectChanges();
      } else {
        this.changed.emit(this.form.value);
      }

      this.stepper[type].next(this.form.valid);
    });
  }

  ngOnDestroy() {
    this.destroy.next({});
    this.destroy.complete();
  }

}
