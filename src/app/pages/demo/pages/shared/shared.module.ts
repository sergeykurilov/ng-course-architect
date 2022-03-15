import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import {ButtonsModule, ControlsModule, IndicatorsModule} from "@src/app/shared";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    SharedComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ButtonsModule,
    ReactiveFormsModule,
    ControlsModule,
    IndicatorsModule,
  ]
})
export class SharedModule { }
