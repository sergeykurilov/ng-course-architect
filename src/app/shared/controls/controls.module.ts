import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputModule} from "@src/app/shared/controls/input/input.module";
import {FormsModule} from "@angular/forms";
import {FormFieldModule} from "@src/app/shared/controls/form-field/form-field.module";
import {PasswordModule} from "@src/app/shared/controls/password/password.module";
import {SelectModule} from "@src/app/shared/controls/select/select.module";
import {CheckboxesModule} from "@src/app/shared/controls/checkboxes/checkboxes.module";
// import { RadiosModule } from '@src/app/shared';
import {DateModule} from "@src/app/shared/controls/date/date.module";
import {RadiosModule} from "@src/app/shared/controls/radios/radios.module";
import {DateRangeModule} from "@src/app/shared/controls/date-range/date-range.module";
import { AutocompleteModule } from './autocomplete/autocomplete.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputModule,
    FormsModule,
    FormFieldModule,
    PasswordModule,
    SelectModule,
    DateModule,
    RadiosModule,
    DateRangeModule,
    AutocompleteModule,
  ],
  exports:
    [
      InputModule,
      CheckboxesModule,
      FormFieldModule,
      PasswordModule,
      SelectModule,
      DateModule,
      RadiosModule,
      DateRangeModule,
      AutocompleteModule
    ]
})
export class ControlsModule { }
