import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputModule} from "@src/app/shared/controls/input/input.module";
import {FormsModule} from "@angular/forms";
import {FormFieldModule} from "@src/app/shared/controls/form-field/form-field.module";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputModule,
    FormsModule,
    FormFieldModule
  ],
  exports: [InputModule, FormFieldModule]
})
export class ControlsModule { }
