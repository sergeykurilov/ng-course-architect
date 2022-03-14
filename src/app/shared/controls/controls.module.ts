import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputModule} from "@src/app/shared/controls/input/input.module";
import {FormsModule} from "@angular/forms";
import {FormFieldModule} from "@src/app/shared/controls/form-field/form-field.module";
import {PasswordModule} from "@src/app/shared/controls/password/password.module";
import {SelectModule} from "@src/app/shared/controls/select/select.module";
import {CheckboxesModule} from "@src/app/shared/controls/checkboxes/checkboxes.module";
import { RadiosModule } from '@src/app/shared';

 

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputModule,
    FormsModule,
    FormFieldModule,
    PasswordModule,
    SelectModule,
    RadiosModule,
  ],
  exports:
    [
      InputModule,
      CheckboxesModule,
      FormFieldModule,
      PasswordModule,
      SelectModule,
      RadiosModule
    ]
})
export class ControlsModule { }
