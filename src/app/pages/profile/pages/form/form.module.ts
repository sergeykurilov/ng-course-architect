import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import {StepperModule} from "./components";
import { PersonalComponent } from './components/personal/personal.component';
import { ProfessionalComponent } from './components/professional/professional.component';
import {
  AutocompleteModule,
  FilesUploadModule,
  FormFieldModule,
  InputModule,
  SpinnerModule,
  UserPhotoModule
} from "@src/app/shared";
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormComponent,
    PersonalComponent,
    ProfessionalComponent
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
    UserPhotoModule
  ]
})
export class FormModule { }
