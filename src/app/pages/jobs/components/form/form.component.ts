import {Component, Inject, OnInit} from '@angular/core';
import { Job } from '../../store/list';

import * as fromRoot from '@src/app/store';
import * as fromList from '../../store/list';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {markFormGroupTouched, regex, regexErrors} from '@src/app/shared';
import {Store} from "@ngrx/store";
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material/dialog";
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {

  form: FormGroup;
  regexErrors = regexErrors;


  constructor(
    private fb: FormBuilder,
    private store: Store<fromRoot.State>,
    private dialogRef: MatDialogRef<FormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { value: Job }
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      title: [null, {
        updateOn: 'blur', validators: [
          Validators.required,
          Validators.maxLength(128),
          Validators.pattern(regex.safe)
        ]
      }],
      salary: [null, {
        updateOn: 'blur', validators: [
          Validators.required,
          Validators.pattern(regex.numbers)
        ]
      }]
    })

    if(this.data.value) {
      this.form.patchValue(this.data.value);
    }
  }

  onSubmit(): void {
    if(this.form.valid) {
      if(this.data.value) {
        const updateJob = {
          ...this.data.value,
          ...this.form.value
        }
        this.store.dispatch(new fromList.Update(updateJob))
      } else {
        this.store.dispatch(new fromList.Create(this.form.value))
      }
      this.dialogRef.close()
    } else {
      markFormGroupTouched(this.form)
    }
  }



}
