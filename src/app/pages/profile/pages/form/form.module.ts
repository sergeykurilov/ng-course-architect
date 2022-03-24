import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import {StepperModule} from "./components";
import { PersonalComponent } from './components/personal/personal.component';
import { ProfessionalComponent } from './components/professional/professional.component';
import {
  AutocompleteModule,
  CheckboxesModule,
  DateRangeModule,
  FilesUploadModule,
  FormFieldModule,
  InputModule,
  RadiosModule,
  SelectModule,
  SpinnerModule,
  UserPhotoModule
} from "@src/app/shared";
import { ReactiveFormsModule } from '@angular/forms';
import {EmployeeComponent,
  RecruiterComponent} from "@src/app/pages/profile/pages/form/components/professional/roles";


@NgModule({
  declarations: [
    FormComponent,
    PersonalComponent,
    ProfessionalComponent,
    EmployeeComponent,
    RecruiterComponent
  ],
  imports: [
    CommonModule,
    FormRoutingModule,
    FormFieldModule,
    InputModule,
    AutocompleteModule,
    FilesUploadModule,
    SpinnerModule,
    StepperModule,
    ReactiveFormsModule,
    UserPhotoModule,
    RadiosModule,
    SelectModule,
    CheckboxesModule,
    RadiosModule,
    DateRangeModule
  ]
})
export class FormModule { }