import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {markFormGroupTouched, regex, regexErrors} from "@src/app/shared";
import {ControlItem} from "@src/app/models/frontend";
import { NotificationService } from '@src/app/services';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss']
})
export class SharedComponent implements OnInit {

  form: FormGroup | any;
  isInline: boolean;
  regexErrors = regexErrors;

  items: ControlItem[];

  showSpinner = false;

  constructor(private fb: FormBuilder,
              private notification: NotificationService) {
    this.isInline = true;

    this.items = [
      {label: 'First', value: 1},
      {label: 'Second', value: 2},
      {label: 'Third', value: 3},
      {label: 'Fourth', value: 4},
      {label: 'Fifth', value: 5}
    ]
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      input: [null, {
        updateOn: 'blur',
        validators: [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern(regex.numbers)
        ]
      }],
      password: [null, {
        updateOn: 'blur', validators: [
          Validators.required
        ]
      }],
      autocomplete: [null, {
        updateOn: 'change', validators: [
          Validators.required
        ]
      }],
      select: [null, {
        updateOn: 'change', validators: [
          Validators.required
        ]
      }],
      checkboxes: [null, {
        updateOn: 'change', validators: [
          Validators.required
        ]
      }],
      radios: [null, {
        updateOn: 'change', validators: [
          Validators.required
        ]
      }],
      date: [null, {
        updateOn: 'change', validators: [
          Validators.required
        ]
      }],
      dateRange: [null, {
        updateOn: 'change', validators: [
          Validators.required
        ]
      }],
    })
  }

  onPatchValue() {
    this.form.patchValue({
      input: 123,
      password: 'qwerty',
      autocomplete: 1,
      select: 2,
      checkboxes: [3],
      radios: 4,
      date: new Date().getTime(),
      dateRange: {
        from: new Date(2019, 5, 10).getTime(),
        to: new Date(2019, 5, 25).getTime(),
      }
    })
  }

  onSubmit(): void {
    if(!this.form.valid) {
      markFormGroupTouched(this.form);
    }
  }

  onToggleInline(): void {
    this.isInline = !this.isInline;
  }

  onToggleDisable(): void {
    if(this.form.enabled) {
      this.form.disable();
    } else {
      this.form.enable();
    }
  }

  onToggleSpinner() {
    this.showSpinner = !this.showSpinner;
  }

  onSuccess() {
    this.notification.success('Everything is fine! 🥰🥰🥰');
  }

  onError() {
    this.notification.error('Oops! Something went wrong...😢😢😢')
  }

  onFilesChanged(urls: string | string[]) {
    console.log('urls = ' + urls);
  }
}
