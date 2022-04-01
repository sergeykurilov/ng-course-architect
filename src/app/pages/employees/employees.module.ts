import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import {StoreModule} from "@ngrx/store";
import {effects, reducers} from "./store";
import {EffectsModule} from "@ngrx/effects";
import {UserPhotoModule} from "@src/app/shared";
import { EmployeeComponent } from './components/employee/employee.component';


@NgModule({
  declarations: [
    EmployeesComponent,
    EmployeeComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('employees', reducers),
    EffectsModule.forFeature(effects),
    EmployeesRoutingModule,
    UserPhotoModule
  ]
})
export class EmployeesModule { }
