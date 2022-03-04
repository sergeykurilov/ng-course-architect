import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputModule} from "@src/app/shared/controls/input/input.module";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputModule,
    FormsModule
  ],
  exports: [InputModule]
})
export class ControlsModule { }
