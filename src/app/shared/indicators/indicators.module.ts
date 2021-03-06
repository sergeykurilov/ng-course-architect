import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerModule } from './spinner/spinner.module';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SpinnerModule,
    MatProgressSpinnerModule
  ],
  exports: [
    SpinnerModule
  ]
})
export class IndicatorsModule { }
