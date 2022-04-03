import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsRoutingModule } from './jobs-routing.module';
import { JobsComponent } from './jobs.component';
import {StoreModule} from "@ngrx/store";
import { reducers, effects } from './store';
import {EffectsModule} from "@ngrx/effects";
import {MatDialogModule} from "@angular/material/dialog";
import {ButtonModule} from "@src/app/shared";
import { JobComponent } from './components/job/job.component';
import { FormModule } from './components/form/form.module';


@NgModule({
  declarations: [
    JobsComponent,
    JobComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('jobs', reducers),
    EffectsModule.forFeature(effects),
    JobsRoutingModule,
    MatDialogModule,
    ButtonModule,
    FormModule
  ]
})
export class JobsModule { }
